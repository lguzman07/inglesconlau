import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Debes iniciar sesión para entrar a la clase.' },
        { status: 401 }
      );
    }

    // Comprobar si la persona es admin.
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle();

    const isAdmin = profile?.role === 'admin';

    // Los estudiantes necesitan una suscripción activa.
    // El admin puede entrar sin depender de una suscripción.
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
          {
            error:
              'Necesitas una suscripción activa para entrar a la clase.',
          },
          { status: 403 }
        );
      }
    }

    const participantRoomUrl =
      process.env.WHEREBY_LIVE_CLASS_ROOM_URL;

    const hostRoomUrl =
      process.env.WHEREBY_LIVE_CLASS_HOST_URL;

    if (!participantRoomUrl) {
      return NextResponse.json(
        {
          error:
            'Falta configurar WHEREBY_LIVE_CLASS_ROOM_URL en el servidor.',
        },
        { status: 500 }
      );
    }

    // Si entra Lau/admin, devolvemos el enlace de host.
    if (isAdmin) {
      if (!hostRoomUrl) {
        return NextResponse.json(
          {
            error:
              'Falta configurar WHEREBY_LIVE_CLASS_HOST_URL en el servidor.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        roomUrl: hostRoomUrl,
      });
    }

    // Si entra un estudiante, SOLO recibe el enlace normal.
    return NextResponse.json({
      roomUrl: participantRoomUrl,
    });
  } catch (error) {
    console.error('Error opening live class:', error);

    return NextResponse.json(
      {
        error: 'Ocurrió un error al abrir la clase.',
      },
      { status: 500 }
    );
  }
}