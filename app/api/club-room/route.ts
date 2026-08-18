import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

type ClubSession = {
  id: string;
  starts_at: string;
  ends_at: string;
  whereby_room_url: string | null;
  whereby_host_room_url: string | null;
};

export async function GET(request: Request) {
  try {
    const sessionId = new URL(request.url).searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'No encontramos la sesión del club.' },
        { status: 400 }
      );
    }

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Debes iniciar sesión para entrar al club.' },
        { status: 401 }
      );
    }

    const [{ data: profile }, { data: clubSession }] = await Promise.all([
      supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle(),
      supabase
        .from('club_sessions')
        .select(
          'id, starts_at, ends_at, whereby_room_url, whereby_host_room_url'
        )
        .eq('id', sessionId)
        .eq('is_published', true)
        .maybeSingle(),
    ]);

    if (!clubSession) {
      return NextResponse.json(
        { error: 'No encontramos esa sesión del club.' },
        { status: 404 }
      );
    }

    const session = clubSession as ClubSession;
    const isAdmin = profile?.role === 'admin';

    if (!isAdmin) {
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('status, current_period_end')
        .eq('user_id', user.id)
        .maybeSingle();

      const hasCurrentSubscription =
        subscription?.status === 'active' &&
        subscription.current_period_end !== null &&
        new Date(subscription.current_period_end).getTime() > Date.now();

      if (!hasCurrentSubscription) {
        return NextResponse.json(
          { error: 'Necesitas una suscripción activa para entrar al club.' },
          { status: 403 }
        );
      }

      const now = Date.now();
      const startsAt = new Date(session.starts_at).getTime();
      const endsAt = new Date(session.ends_at).getTime();

      if (now < startsAt || now >= endsAt) {
        return NextResponse.json(
          {
            error:
              'La sala solo está disponible durante el horario de la sesión.',
          },
          { status: 403 }
        );
      }

      const { data: reservation } = await supabase
        .from('reading_reservations')
        .select('id')
        .eq('session_id', session.id)
        .eq('user_id', user.id)
        .eq('status', 'reserved')
        .maybeSingle();

      if (!reservation) {
        return NextResponse.json(
          { error: 'Debes reservar un turno de lectura para entrar.' },
          { status: 403 }
        );
      }
    }

    if (session.whereby_room_url) {
      return NextResponse.json({
        roomUrl: isAdmin
          ? session.whereby_host_room_url ?? session.whereby_room_url
          : session.whereby_room_url,
      });
    }

    if (!isAdmin) {
      return NextResponse.json(
        { error: 'La anfitriona aún no ha preparado la sala.' },
        { status: 403 }
      );
    }

    const wherebyApiKey = process.env.WHEREBY_API_KEY;

    if (!wherebyApiKey) {
      return NextResponse.json(
        { error: 'Falta configurar WHEREBY_API_KEY en el servidor.' },
        { status: 500 }
      );
    }

    const roomResponse = await fetch(
      'https://api.whereby.dev/v1/meetings',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${wherebyApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomMode: 'group',
          endDate: new Date(
            new Date(session.ends_at).getTime() + 60 * 60 * 1000
          ).toISOString(),
          fields: ['hostRoomUrl'],
          roomNamePrefix: 'ingles-con-lau-club',
        }),
      }
    );

    if (!roomResponse.ok) {
      return NextResponse.json(
        { error: 'No pudimos crear la sala de Whereby.' },
        { status: 502 }
      );
    }

    const room = await roomResponse.json();

    if (!room.roomUrl || !room.hostRoomUrl) {
      return NextResponse.json(
        { error: 'Whereby no devolvió los enlaces de la sala.' },
        { status: 502 }
      );
    }

    const { error: saveError } = await supabase.rpc('save_whereby_room', {
      p_session_id: session.id,
      p_room_url: room.roomUrl,
      p_host_room_url: room.hostRoomUrl,
    });

    if (saveError) {
      return NextResponse.json(
        { error: 'No pudimos guardar la sala para esta sesión.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ roomUrl: room.hostRoomUrl });
  } catch {
    return NextResponse.json(
      { error: 'Ocurrió un error al abrir la sala.' },
      { status: 500 }
    );
  }
}