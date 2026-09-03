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

type ViewMode = 'month' | 'week' | 'day';

const WEEK_DAY_LABELS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getTodayIso() {
  return toIsoDate(new Date());
}

function getMonthStart(isoDate: string) {
  return `${isoDate.slice(0, 7)}-01`;
}

function changeMonth(monthStart: string, amount: number) {
  const [year, month] = monthStart.split('-').map(Number);
  return toIsoDate(new Date(year, month - 1 + amount, 1));
}

function changeDate(isoDate: string, amountDays: number) {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + amountDays);
  return toIsoDate(date);
}

function getWeekStart(isoDate: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const mondayOffset = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - mondayOffset);
  return toIsoDate(date);
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

function getWeekDays(weekStart: string) {
  const [year, month, day] = weekStart.split('-').map(Number);
  const start = new Date(year, month - 1, day);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(date.getDate() + index);
    return toIsoDate(date);
  });
}

function getDaysForView(viewMode: ViewMode, anchorDate: string) {
  if (viewMode === 'month') return getGridDays(getMonthStart(anchorDate));
  if (viewMode === 'week') return getWeekDays(getWeekStart(anchorDate));
  return [anchorDate];
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

function formatWeekLabel(weekStart: string) {
  const days = getWeekDays(weekStart);
  return `${formatShortDate(days[0])} – ${formatShortDate(days[6])}`;
}

function formatDayLabel(isoDate: string) {
  const formatted = new Intl.DateTimeFormat('es-DO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T12:00:00Z`));
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
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
  const period = hours24 >= 12 ? 'pm' : 'am';
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
  const todayIso = useMemo(() => getTodayIso(), []);
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [anchorDate, setAnchorDate] = useState(initialMonthStart);
  const [bookings, setBookings] = useState(initialBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState('');

  const days = useMemo(() => getDaysForView(viewMode, anchorDate), [viewMode, anchorDate]);

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

  async function loadRange(nextViewMode: ViewMode, nextAnchorDate: string) {
    setIsLoading(true);
    setError('');
    setSelectedKey(null);

    const rangeDays = getDaysForView(nextViewMode, nextAnchorDate);
    const { data, error: fetchError } = await supabase.rpc('admin_list_bookings_range', {
      p_start_date: rangeDays[0],
      p_end_date: rangeDays[rangeDays.length - 1],
    });

    setIsLoading(false);

    if (fetchError) {
      setError(fetchError.message);
      return;
    }

    setViewMode(nextViewMode);
    setAnchorDate(nextAnchorDate);
    setBookings((data ?? []) as CalendarBooking[]);
  }

  function switchView(nextViewMode: ViewMode) {
    if (nextViewMode === viewMode) return;
    loadRange(nextViewMode, todayIso);
  }

  function goToToday() {
    loadRange(viewMode, todayIso);
  }

  function goPrevious() {
    if (viewMode === 'month') return loadRange('month', changeMonth(anchorDate, -1));
    if (viewMode === 'week') return loadRange('week', changeDate(anchorDate, -7));
    return loadRange('day', changeDate(anchorDate, -1));
  }

  function goNext() {
    if (viewMode === 'month') return loadRange('month', changeMonth(anchorDate, 1));
    if (viewMode === 'week') return loadRange('week', changeDate(anchorDate, 7));
    return loadRange('day', changeDate(anchorDate, 1));
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

  const headingLabel =
    viewMode === 'month'
      ? formatMonthLabel(getMonthStart(anchorDate))
      : viewMode === 'week'
        ? formatWeekLabel(getWeekStart(anchorDate))
        : formatDayLabel(anchorDate);

  const previousLabel =
    viewMode === 'month' ? '← Mes anterior' : viewMode === 'week' ? '← Semana anterior' : '← Día anterior';
  const nextLabel =
    viewMode === 'month' ? 'Mes siguiente →' : viewMode === 'week' ? 'Semana siguiente →' : 'Día siguiente →';
  const todayButtonLabel = viewMode === 'day' ? 'Hoy' : viewMode === 'week' ? 'Esta semana' : 'Este mes';

  const dayListGroups = viewMode === 'day'
    ? [...(groupsByDay.get(anchorDate)?.values() ?? [])].sort((a, b) => a.starts_at.localeCompare(b.starts_at))
    : [];

  return (
    <section className={styles.panel}>
      <div className={styles.viewTabs}>
        <button
          type="button"
          className={viewMode === 'month' ? styles.viewTabActive : styles.viewTab}
          onClick={() => switchView('month')}
          disabled={isLoading}
        >
          Mes
        </button>
        <button
          type="button"
          className={viewMode === 'week' ? styles.viewTabActive : styles.viewTab}
          onClick={() => switchView('week')}
          disabled={isLoading}
        >
          Semana
        </button>
        <button
          type="button"
          className={viewMode === 'day' ? styles.viewTabActive : styles.viewTab}
          onClick={() => switchView('day')}
          disabled={isLoading}
        >
          Día
        </button>
      </div>

      <div className={styles.toolbar}>
        <div>
          <h2>{headingLabel}</h2>
          <p>Haz clic en una clase para ver quién la reservó.</p>
        </div>
        <div className={styles.weekNav}>
          <button type="button" onClick={goPrevious} disabled={isLoading}>
            {previousLabel}
          </button>
          <button
            type="button"
            className={styles.discardButton}
            onClick={goToToday}
            disabled={isLoading}
          >
            {todayButtonLabel}
          </button>
          <button type="button" onClick={goNext} disabled={isLoading}>
            {nextLabel}
          </button>
        </div>
      </div>

      {error ? <p className={styles.inlineError}>{error}</p> : null}

      {viewMode === 'day' ? (
        <div className={styles.dayList}>
          {isLoading ? null : dayListGroups.length === 0 ? (
            <p className={styles.emptyDay}>No hay clases este día.</p>
          ) : (
            dayListGroups.map((group) => (
              <button
                key={group.key}
                type="button"
                className={styles.dayListItem}
                onClick={() => setSelectedKey(group.key)}
              >
                <span className={styles.dayListTime}>
                  {formatTime(group.starts_at)}–{formatTime(group.ends_at)}
                </span>
                <span className={styles.dayListLevel}>
                  {group.level.toUpperCase()} · {group.label}
                </span>
                <span className={styles.dayListCount}>
                  {group.students.length} estudiante{group.students.length === 1 ? '' : 's'}
                </span>
              </button>
            ))
          )}
        </div>
      ) : (
        <div className={styles.monthGrid}>
          {WEEK_DAY_LABELS.map((label) => (
            <div key={label} className={styles.monthDayLabel}>{label}</div>
          ))}

          {days.map((day) => {
            const isOutsideMonth =
              viewMode === 'month' && day.slice(0, 7) !== getMonthStart(anchorDate).slice(0, 7);
            const isToday = day === todayIso;
            const dayGroups = [...(groupsByDay.get(day)?.values() ?? [])].sort((a, b) =>
              a.starts_at.localeCompare(b.starts_at),
            );
            const dayNumber = Number(day.slice(8, 10));

            return (
              <div
                key={day}
                className={`${styles.monthCell} ${isOutsideMonth ? styles.monthCellOutside : ''} ${isToday ? styles.monthCellToday : ''}`}
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
      )}

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
