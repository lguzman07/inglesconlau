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

export default function ClubBooking({
  session,
  isAdmin,
}: ClubBookingProps) {
  const [reservation, setReservation] =
    useState<ReadingReservation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const sessionDate = new Intl.DateTimeFormat('es-DO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Santo_Domingo',
  }).format(new Date(session.startsAt));

  useEffect(() => {
    async function loadReservation() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('reading_reservations')
        .select('id, slot_number, status')
        .eq('session_id', session.id)
        .eq('status', 'reserved')
        .maybeSingle();

      if (!error && data) {
        setReservation(data as ReadingReservation);
      }

      setIsLoading(false);
    }

    if (!isAdmin) {
      loadReservation();
      return;
    }

    setIsLoading(false);
  }, [isAdmin, session.id]);

  async function reserveTurn() {
    setIsSaving(true);
    setMessage('');

    const supabase = createClient();
    const { data, error } = await supabase.rpc('reserve_reading_slot', {
      p_session_id: session.id,
    });

    if (error) {
      setMessage(error.message);
      setIsSaving(false);
      return;
    }

    setReservation(data as ReadingReservation);
    setMessage('Tu turno de lectura quedó reservado.');
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
      setMessage(error.message);
      setIsSaving(false);
      return;
    }

    setReservation(null);
    setMessage('Tu turno de lectura fue cancelado.');
    setIsSaving(false);
  }

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>CLUB DE LECTURA</p>
      <h1 className={styles.title}>{session.title}</h1>

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
        <p className={styles.hostNote}>
          Eres la anfitriona de esta sesión. Pronto verás aquí la lista de
          lectores de hoy.
        </p>
      ) : (
        <div className={styles.reservationArea}>
          <h2 className={styles.reservationTitle}>¿Quieres leer en vivo?</h2>
          <p className={styles.text}>
            Hay {session.maxReaders} turnos disponibles. Quien reserve podrá
            participar leyendo; los demás podrán asistir como oyentes.
          </p>

          {isLoading ? (
            <p className={styles.text}>Cargando tu reserva...</p>
          ) : reservation ? (
            <div className={styles.confirmation}>
              <p>
                Tu turno de lectura: <strong>#{reservation.slot_number}</strong>
              </p>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={cancelTurn}
                disabled={isSaving}
              >
                {isSaving ? 'Cancelando...' : 'Cancelar mi turno'}
              </button>
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
        La sala en vivo estará disponible aquí antes de comenzar la sesión.
      </p>
    </section>
  );
}
