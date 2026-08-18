'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import styles from './ClubBooking.module.css';

type ClubSession = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  maxReaders: number;
};

type ReadingReservation = {
  id: string;
  slot_number: number;
  status: 'reserved' | 'cancelled' | 'completed' | 'no_show';
};

type ClubBookingProps = {
  session: ClubSession;
  isAdmin: boolean;
};

function getSessionCountdown(startsAt: string, endsAt: string) {
  const now = Date.now();
  const startTime = new Date(startsAt).getTime();
  const endTime = new Date(endsAt).getTime();

  if (now >= startTime && now < endTime) {
    return 'Lectura en vivo ahora';
  }

  if (now >= endTime) {
    return 'Sesión finalizada';
  }

  const totalMinutes = Math.max(
    1,
    Math.ceil((startTime - now) / (1000 * 60))
  );

  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) {
    return `Próxima sesión en ${days} ${
      days === 1 ? 'día' : 'días'
    }${hours > 0 ? ` y ${hours} ${hours === 1 ? 'hora' : 'horas'}` : ''}`;
  }

  if (hours > 0) {
    return `Próxima sesión en ${hours} ${
      hours === 1 ? 'hora' : 'horas'
    }${minutes > 0 ? ` y ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}` : ''}`;
  }

  return `Próxima sesión en ${totalMinutes} ${
    totalMinutes === 1 ? 'minuto' : 'minutos'
  }`;
}

function isSessionLive(startsAt: string, endsAt: string) {
  const now = Date.now();

  return (
    now >= new Date(startsAt).getTime() &&
    now < new Date(endsAt).getTime()
  );
}

export default function ClubBooking({
  session,
  isAdmin,
}: ClubBookingProps) {
  const [reservation, setReservation] =
    useState<ReadingReservation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [message, setMessage] = useState('');
  const [countdown, setCountdown] = useState(() =>
    getSessionCountdown(session.startsAt, session.endsAt)
  );

  const sessionDate = new Intl.DateTimeFormat('es-DO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Santo_Domingo',
  }).format(new Date(session.startsAt));

  const sessionIsLive = isSessionLive(session.startsAt, session.endsAt);

  async function loadCurrentReservation() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setReservation(null);
      return null;
    }

    const { data, error } = await supabase
      .from('reading_reservations')
      .select('id, slot_number, status')
      .eq('session_id', session.id)
      .eq('user_id', user.id)
      .eq('status', 'reserved')
      .maybeSingle();

    if (error || !data) {
      setReservation(null);
      return null;
    }

    const currentReservation = data as ReadingReservation;
    setReservation(currentReservation);

    return currentReservation;
  }

  useEffect(() => {
    function updateCountdown() {
      setCountdown(getSessionCountdown(session.startsAt, session.endsAt));
    }

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 30000);

    return () => window.clearInterval(intervalId);
  }, [session.startsAt, session.endsAt]);

  useEffect(() => {
    async function loadReservation() {
      if (isAdmin) {
        setIsLoading(false);
        return;
      }

      await loadCurrentReservation();
      setIsLoading(false);
    }

    void loadReservation();
  }, [isAdmin, session.id]);

  async function reserveTurn() {
    setIsSaving(true);
    setMessage('');

    const supabase = createClient();

    const { error } = await supabase.rpc('reserve_reading_slot', {
      p_session_id: session.id,
    });

    if (error) {
      setMessage(error.message);
      setIsSaving(false);
      return;
    }

    const newReservation = await loadCurrentReservation();

    setMessage(
      newReservation
        ? 'Tu turno de lectura quedó reservado.'
        : 'No pudimos confirmar tu turno. Inténtalo de nuevo.'
    );
    setIsSaving(false);
  }

  async function cancelTurn() {
    setIsSaving(true);
    setMessage('');

    const supabase = createClient();

    const { error } = await supabase.rpc('cancel_reading_reservation', {
      p_session_id: session.id,
    });

    if (error) {
      setMessage('No pudimos cancelar tu turno. Inténtalo de nuevo.');
      setIsSaving(false);
      return;
    }

    setReservation(null);
    setMessage('Tu turno de lectura fue cancelado.');
    setIsSaving(false);
  }

  function joinRoom() {
    setIsJoining(true);
    window.location.assign(
      `/club-de-lectura/sala?sessionId=${encodeURIComponent(session.id)}`
    );
  }

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>LECTURA EN VIVO</p>
      <h1 className={styles.title}>{countdown}</h1>

      <div className={styles.details}>
        <p className={styles.date}>
          {sessionDate.charAt(0).toUpperCase() + sessionDate.slice(1)}
        </p>

        <p className={styles.time}>
          7:00 p. m. – 9:00 p. m.
          <br />
          Hora de República Dominicana (UTC−4)
        </p>
      </div>

      {isAdmin ? (
        <>
          <p className={styles.hostNote}>
            Eres la anfitriona. Puedes entrar a la sala en cualquier momento.
          </p>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={joinRoom}
            disabled={isJoining}
          >
            {isJoining ? 'Abriendo la sala...' : 'Entrar como anfitriona'}
          </button>
        </>
      ) : (
        <div className={styles.reservationArea}>
          <h2 className={styles.reservationTitle}>Reserva tu turno para leer</h2>

          <p className={styles.text}>
            Hay hasta {session.maxReaders} turnos disponibles. La lectura en
            vivo es para los estudiantes que reservaron un turno.
          </p>

          {isLoading ? (
            <p className={styles.text}>Cargando tu reserva...</p>
          ) : reservation ? (
            <div className={styles.confirmation}>
              <p>
                Tu turno de lectura es el{' '}
                <strong>#{reservation.slot_number}</strong>.
              </p>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={cancelTurn}
                disabled={isSaving}
              >
                {isSaving ? 'Cancelando...' : 'Cancelar mi turno'}
              </button>

              {sessionIsLive && (
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={joinRoom}
                  disabled={isJoining}
                >
                  {isJoining ? 'Abriendo la sala...' : 'Unirme al club'}
                </button>
              )}
            </div>
          ) : (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={reserveTurn}
              disabled={isSaving}
            >
              {isSaving ? 'Reservando...' : 'Reservar mi turno de lectura'}
            </button>
          )}

          {message && (
            <p className={styles.message} role="status">
              {message}
            </p>
          )}
        </div>
      )}

      <p className={styles.roomNote}>
        {isAdmin
          ? 'La sala se creará al entrar por primera vez a esta sesión.'
          : sessionIsLive
            ? 'Tu turno está reservado: ya puedes entrar a la sala.'
            : 'La sala estará disponible cuando comience la sesión.'}
      </p>
    </section>
  );
}