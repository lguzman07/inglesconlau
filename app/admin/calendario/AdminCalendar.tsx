'use client';

import { useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type WeekBooking = {
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

const DAY_LABELS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

function addDays(isoDate: string, amount: number) {
  const date = new Date(`${isoDate}T12:00:00-04:00`);
  date.setDate(date.getDate() + amount);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatShortDate(isoDate: string) {
  return new Intl.DateTimeFormat('es-DO', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T12:00:00Z`));
}

function formatWeekRange(weekStart: string) {
  const weekEnd = addDays(weekStart, 4);
  return `${formatShortDate(weekStart)} – ${formatShortDate(weekEnd)}`;
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

type ClassGroup = {
  key: string;
  class_date: string;
  schedule_id: string;
  level: string;
  label: string;
  starts_at: string;
  ends_at: string;
  students: WeekBooking[];
};

export default function AdminCalendar({
  initialWeekStart,
  initialBookings,
}: {
  initialWeekStart: string;
  initialBookings: WeekBooking[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const [weekStart, setWeekStart] = useState(initialWeekStart);
  const [bookings, setBookings] = useState(initialBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const days = useMemo(
    () => Array.from({ length: 5 }, (_, index) => addDays(weekStart, index)),
    [weekStart],
  );

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

  async function loadWeek(nextWeekStart: string) {
    setIsLoading(true);
    setError('');
    setSelectedKey(null);

    const { data, error: fetchError } = await supabase.rpc('admin_list_week_bookings', {
      p_week_start: nextWeekStart,
    });

    setIsLoading(false);

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    setWeekStart(nextWeekStart);
    setBookings((data ?? []) as WeekBooking[]);
  }

  return (
    <section className={styles.panel}>
      <div className={styles.toolbar}>
        <div>
          <h2>Semana del {formatWeekRange(weekStart)}</h2>
          <p>Haz clic en una clase para ver quién la reservó.</p>
        </div>
        <div className={styles.weekNav}>
          <button type="button" onClick={() => loadWeek(addDays(weekStart, -7))} disabled={isLoading}>
            ← Semana anterior
          </button>
          <button
            type="button"
            className={styles.discardButton}
            onClick={() => loadWeek(initialWeekStart)}
            disabled={isLoading}
          >
            Esta semana
          </button>
          <button type="button" onClick={() => loadWeek(addDays(weekStart, 7))} disabled={isLoading}>
            Semana siguiente →
          </button>
        </div>
      </div>

      {error ? <p className={styles.inlineError}>{error}</p> : null}

      <div className={styles.calendarGrid}>
        {days.map((day, index) => {
          const dayGroups = [...(groupsByDay.get(day)?.values() ?? [])].sort((a, b) =>
            a.starts_at.localeCompare(b.starts_at),
          );

          return (
            <div key={day} className={styles.dayColumn}>
              <div className={styles.dayHeading}>
                <strong>{DAY_LABELS[index]}</strong>
                <span>{formatShortDate(day)}</span>
              </div>

              {isLoading ? (
                <p className={styles.emptyDay}>Cargando…</p>
              ) : dayGroups.length === 0 ? (
                <p className={styles.emptyDay}>Sin clases reservadas</p>
              ) : (
                <div className={styles.classChips}>
                  {dayGroups.map((group) => (
                    <button
                      key={group.key}
                      type="button"
                      className={styles.classChip}
                      onClick={() => setSelectedKey(group.key)}
                    >
                      <span className={styles.classChipTime}>
                        {formatTime(group.starts_at)}–{formatTime(group.ends_at)}
                      </span>
                      <span>{group.level.toUpperCase()} · {group.label}</span>
                      <span className={styles.classChipCount}>
                        {group.students.length} estudiante{group.students.length === 1 ? '' : 's'}
                      </span>
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
            <ul className={styles.studentRoster}>
              {selectedGroup.students.map((student) => (
                <li key={student.booking_id}>
                  <span>{student.student_name}</span>
                  <a href={`mailto:${student.student_email}`}>{student.student_email}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
