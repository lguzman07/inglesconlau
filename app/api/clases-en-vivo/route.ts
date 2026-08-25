import { NextResponse } from 'next/server';

import { createClient } from '@/lib/supabase/server';

const CLASS_TIME_ZONE = 'America/Santo_Domingo';

function getDominicanDateAndTime() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: CLASS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}:${values.second}`,
  };
}

function timeToSeconds(time: string) {
  const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export async function GET() {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Debes iniciar sesión para entrar a la clase.' },
        { status: 401 },
      );
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle();

    if (profileError) {
      console.error('Error checking profile:', profileError);
      return NextResponse.json(
        { error: 'No se pudo comprobar tu perfil.' },
        { status: 500 },
      );
    }

    const isAdmin = profile?.role === 'admin';

    if (!isAdmin) {
      const dominicanNow = getDominicanDateAndTime();
      const { data: bookings, error: bookingsError } = await supabase
        .from('group_class_bookings')
        .select('schedule_id')
        .eq('user_id', user.id)
        .eq('class_date', dominicanNow.date)
        .eq('status', 'reserved');

      if (bookingsError) {
        console.error('Error checking live class bookings:', bookingsError);
        return NextResponse.json(
          { error: 'No se pudo comprobar tu reserva.' },
          { status: 500 },
        );
      }

      if (!bookings?.length) {
        return NextResponse.json(
          { error: 'No tienes una reserva aprobada para una clase en este momento.' },
          { status: 403 },
        );
      }

      const scheduleIds = [...new Set(bookings.map((booking) => booking.schedule_id))];
      const { data: schedules, error: schedulesError } = await supabase
        .from('group_class_schedules')
        .select('id, starts_at, ends_at, is_active')
        .in('id', scheduleIds)
        .eq('is_active', true);

      if (schedulesError) {
        console.error('Error checking live class schedules:', schedulesError);
        return NextResponse.json(
          { error: 'No se pudo comprobar el horario de tu clase.' },
          { status: 500 },
        );
      }

      const currentTime = timeToSeconds(dominicanNow.time);
      const hasBookingForCurrentTime = (schedules ?? []).some((schedule) => {
        const startsAt = timeToSeconds(schedule.starts_at);
        const endsAt = timeToSeconds(schedule.ends_at);
        return currentTime >= startsAt && currentTime < endsAt;
      });

      if (!hasBookingForCurrentTime) {
        return NextResponse.json(
          { error: 'Tu reserva no corresponde a la clase que está ocurriendo ahora.' },
          { status: 403 },
        );
      }
    }

    const participantRoomUrl = process.env.WHEREBY_LIVE_CLASS_ROOM_URL;
    const hostRoomUrl = process.env.WHEREBY_LIVE_CLASS_HOST_URL;

    if (!participantRoomUrl) {
      return NextResponse.json(
        { error: 'Falta configurar WHEREBY_LIVE_CLASS_ROOM_URL en el servidor.' },
        { status: 500 },
      );
    }

    if (isAdmin) {
      if (!hostRoomUrl) {
        return NextResponse.json(
          { error: 'Falta configurar WHEREBY_LIVE_CLASS_HOST_URL en el servidor.' },
          { status: 500 },
        );
      }
      return NextResponse.json({ roomUrl: hostRoomUrl });
    }

    return NextResponse.json({ roomUrl: participantRoomUrl });
  } catch (error) {
    console.error('Error opening live class:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al abrir la clase.' },
      { status: 500 },
    );
  }
}
