'use client';

import { useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type CalendarBooking = {
  booking_id: string;
  class_date: string;
  status: string;
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
  student_id: string;
  student_name: string;
  student_email: string;
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

type ClassGroup = {
  key: string;
  class_date: string;
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
  students: CalendarBooking[];
};

export default function AdminCalendar({
  initialMonthStart,
  initialBookings,
}: {
  initialMonthStart: string;
  initialBookings: CalendarBooking[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const [monthStart, setMonthStart] = useState(initialMonthStart);
  const [bookings, setBookings] = useState(initialBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState('');

  const days = useMemo(() => getGridDays(monthStart), [monthStart]);

  const groupsByDay = useMemo(() => {
    const map = new Map<string, Map<string, ClassGroup>>();

    for (const day of days) {
      map.set(day, new Map());
    }

    for (const booking of bookings) {
      if (booking.status === 'cancelled') continue;

      const dayGroups = map.get(booking.class_date);
      if (!dayGroups) continue;

      const key = `${booking.class_date}|${booking.schedule_id}`;
      const existing = dayGroups.get(key);

      if (existing) {
        existing.students.push(booking);
      } else {
        dayGroups.set(key, {
          key,
          class_date: booking.class_date,
          schedule_id: booking.schedule_id,
          level: booking.level,
          label: booking.label,
          starts_at: booking.starts_at,
          ends_at: booking.ends_at,
          students: [booking],
        });
      }
    }

    return map;
  }, [bookings, days]);

  const selectedGroup = useMemo(() => {
    if (!selectedKey) return null;
    for (const dayGroups of groupsByDay.values()) {
      const group = dayGroups.get(selectedKey);
      if (group) return group;
    }
    return null;
  }, [selectedKey, groupsByDay]);

  async function loadMonth(nextMonthStart: string) {
    setIsLoading(true);
    setError('');
    setSelectedKey(null);

    const gridDays = getGridDays(nextMonthStart);
    const { data, error: fetchError } = await supabase.rpc('admin_list_bookings_range', {
      p_start_date: gridDays[0],
      p_end_date: gridDays[gridDays.length - 1],
    });

    setIsLoading(false);

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    setMonthStart(nextMonthStart);
    setBookings((data ?? []) as CalendarBooking[]);
  }

  async function cancelBooking(booking: CalendarBooking) {
    if (cancellingBookingId) return;
    setCancellingBookingId(booking.booking_id);
    setCancelError('');

    const { error: cancelErrorResult } = await supabase.rpc(
      'admin_cancel_group_class_booking',
      { p_booking_id: booking.booking_id },
    );

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
  }

  return (
    <section className={styles.panel}>
      <div className={styles.toolbar}>
        <div>
          <h2>{formatMonthLabel(monthStart)}</h2>
          <p>Haz clic en una clase para ver quién la reservó.</p>
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
          const dayGroups = [...(groupsByDay.get(day)?.values() ?? [])].sort((a, b) =>
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
                  {dayGroups.map((group) => (
                    <button
                      key={group.key}
                      type="button"
                      className={styles.monthChip}
                      onClick={() => setSelectedKey(group.key)}
                      title={`${group.level.toUpperCase()} · ${group.label} · ${formatTime(group.starts_at)}–${formatTime(group.ends_at)} · ${group.students.length} estudiante${group.students.length === 1 ? '' : 's'}`}
                    >
                      {formatShortTime(group.starts_at)} {group.level.toUpperCase()} ({group.students.length})
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedGroup ? (
        <div className={styles.modalOverlay} onClick={() => setSelectedKey(null)}>
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <div className={styles.modalHeading}>
              <div>
                <h3>{selectedGroup.level.toUpperCase()} · {selectedGroup.label}</h3>
                <p>
                  {formatShortDate(selectedGroup.class_date)} ·{' '}
                  {formatTime(selectedGroup.starts_at)}–{formatTime(selectedGroup.ends_at)}
                </p>
              </div>
              <button type="button" className={styles.discardButton} onClick={() => setSelectedKey(null)}>
                Cerrar
              </button>
            </div>
            {cancelError ? <p className={styles.inlineError}>{cancelError}</p> : null}
            <ul className={styles.studentRoster}>
              {selectedGroup.students.map((student) => (
                <li key={student.booking_id}>
                  <div>
                    <span>{student.student_name}</span>
                    <a href={`mailto:${student.student_email}`}>{student.student_email}</a>
                  </div>
                  <button
                    type="button"
                    className={styles.cancelBookingButton}
                    onClick={() => cancelBooking(student)}
                    disabled={cancellingBookingId === student.booking_id}
                  >
                    {cancellingBookingId === student.booking_id ? 'Cancelando…' : 'Cancelar reserva'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
