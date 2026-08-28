'use client';

import { useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type MyBooking = {
  booking_id: string;
  class_date: string;
  status: string;
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
};

const WEEK_DAY_LABELS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getMonthStart(isoDate: string) {
  return `${isoDate.slice(0, 7)}-01`;
}

function changeMonth(monthStart: string, amount: number) {
  const [year, month] = monthStart.split('-').map(Number);
  return toIsoDate(new Date(year, month - 1 + amount, 1));
}

function getGridDays(monthStart: string) {
  const [year, month] = monthStart.split('-').map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;

  const gridStart = new Date(firstDay);
  gridStart.setDate(gridStart.getDate() - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setDate(day.getDate() + index);
    return toIsoDate(day);
  });
}

function formatMonthLabel(monthStart: string) {
  const [year, month] = monthStart.split('-').map(Number);
  const formatted = new Intl.DateTimeFormat('es-DO', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

function formatShortDate(isoDate: string) {
  return new Intl.DateTimeFormat('es-DO', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T12:00:00Z`));
}

function formatTime(value: string) {
  const [hours, minutes] = value.split(':').map(Number);
  return new Intl.DateTimeFormat('es-DO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(2026, 0, 1, hours, minutes)));
}

function formatShortTime(value: string) {
  const [hours24, minutes] = value.split(':').map(Number);
  const period = hours24 >= 12 ? 'p' : 'a';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return minutes === 0 ? `${hours12}${period}` : `${hours12}:${String(minutes).padStart(2, '0')}${period}`;
}

export default function StudentCalendar({
  initialMonthStart,
  initialBookings,
}: {
  initialMonthStart: string;
  initialBookings: MyBooking[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const [monthStart, setMonthStart] = useState(initialMonthStart);
  const [bookings, setBookings] = useState(initialBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState('');

  const days = useMemo(() => getGridDays(monthStart), [monthStart]);

  const bookingsByDay = useMemo(() => {
    const map = new Map<string, MyBooking[]>();

    for (const day of days) {
      map.set(day, []);
    }

    for (const booking of bookings) {
      if (booking.status === 'cancelled') continue;

      const dayBookings = map.get(booking.class_date);
      if (!dayBookings) continue;

      dayBookings.push(booking);
    }

    return map;
  }, [bookings, days]);

  const selectedBooking = bookings.find((item) => item.booking_id === selectedBookingId) ?? null;

  async function loadMonth(nextMonthStart: string) {
    setIsLoading(true);
    setError('');
    setSelectedBookingId(null);

    const gridDays = getGridDays(nextMonthStart);
    const { data, error: fetchError } = await supabase.rpc('list_my_bookings_range', {
      p_start_date: gridDays[0],
      p_end_date: gridDays[gridDays.length - 1],
    });

    setIsLoading(false);

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    setMonthStart(nextMonthStart);
    setBookings((data ?? []) as MyBooking[]);
  }

  async function cancelBooking(booking: MyBooking) {
    if (cancellingBookingId) return;
    setCancellingBookingId(booking.booking_id);
    setCancelError('');

    const { error: cancelErrorResult } = await supabase.rpc('cancel_group_class', {
      p_booking_id: booking.booking_id,
    });

    setCancellingBookingId(null);

    if (cancelErrorResult) {
      setCancelError(cancelErrorResult.message);
      return;
    }

    setBookings((current) =>
      current.map((item) =>
        item.booking_id === booking.booking_id ? { ...item, status: 'cancelled' } : item,
      ),
    );
    setSelectedBookingId(null);
  }

  return (
    <section className={styles.panel}>
      <div className={styles.toolbar}>
        <div>
          <h2>{formatMonthLabel(monthStart)}</h2>
          <p>Haz clic en una clase para ver los detalles.</p>
        </div>
        <div className={styles.weekNav}>
          <button type="button" onClick={() => loadMonth(changeMonth(monthStart, -1))} disabled={isLoading}>
            ← Mes anterior
          </button>
          <button
            type="button"
            className={styles.discardButton}
            onClick={() => loadMonth(getMonthStart(initialMonthStart))}
            disabled={isLoading}
          >
            Este mes
          </button>
          <button type="button" onClick={() => loadMonth(changeMonth(monthStart, 1))} disabled={isLoading}>
            Mes siguiente →
          </button>
        </div>
      </div>

      {error ? <p className={styles.inlineError}>{error}</p> : null}

      <div className={styles.monthGrid}>
        {WEEK_DAY_LABELS.map((label) => (
          <div key={label} className={styles.monthDayLabel}>{label}</div>
        ))}

        {days.map((day) => {
          const isOutsideMonth = day.slice(0, 7) !== monthStart.slice(0, 7);
          const dayBookings = [...(bookingsByDay.get(day) ?? [])].sort((a, b) =>
            a.starts_at.localeCompare(b.starts_at),
          );
          const dayNumber = Number(day.slice(8, 10));

          return (
            <div
              key={day}
              className={`${styles.monthCell} ${isOutsideMonth ? styles.monthCellOutside : ''}`}
            >
              <span className={styles.monthCellNumber}>{dayNumber}</span>

              {isLoading ? null : (
                <div className={styles.monthChips}>
                  {dayBookings.map((booking) => (
                    <button
                      key={booking.booking_id}
                      type="button"
                      className={styles.monthChip}
                      onClick={() => setSelectedBookingId(booking.booking_id)}
                      title={`${booking.level.toUpperCase()} · ${booking.label} · ${formatTime(booking.starts_at)}–${formatTime(booking.ends_at)}`}
                    >
                      {formatShortTime(booking.starts_at)} {booking.level.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedBooking ? (
        <div className={styles.modalOverlay} onClick={() => setSelectedBookingId(null)}>
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeading}>
              <div>
                <h3>{selectedBooking.level.toUpperCase()} · {selectedBooking.label}</h3>
                <p>
                  {formatShortDate(selectedBooking.class_date)} ·{' '}
                  {formatTime(selectedBooking.starts_at)}–{formatTime(selectedBooking.ends_at)}
                </p>
              </div>
              <button type="button" className={styles.discardButton} onClick={() => setSelectedBookingId(null)}>
                Cerrar
              </button>
            </div>
            {cancelError ? <p className={styles.inlineError}>{cancelError}</p> : null}
            <button
              type="button"
              className={styles.cancelBookingButton}
              onClick={() => cancelBooking(selectedBooking)}
              disabled={cancellingBookingId === selectedBooking.booking_id}
            >
              {cancellingBookingId === selectedBooking.booking_id ? 'Cancelando…' : 'Cancelar reserva'}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
