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

export default function StudentCalendar({
  initialMonthStart,
  initialBookings,
}: {
  initialMonthStart: string;
  initialBookings: MyBooking[];
}) {
  const supabase = useMemo(() => createClient(), []);
  const todayIso = useMemo(() => getTodayIso(), []);
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [anchorDate, setAnchorDate] = useState(initialMonthStart);
  const [bookings, setBookings] = useState(initialBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);
  const [cancellingBookingId, setCancellingBookingId] = useState<string | null>(null);
  const [cancelError, setCancelError] = useState('');

  const days = useMemo(() => getDaysForView(viewMode, anchorDate), [viewMode, anchorDate]);

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

  async function loadRange(nextViewMode: ViewMode, nextAnchorDate: string) {
    setIsLoading(true);
    setError('');
    setSelectedBookingId(null);

    const rangeDays = getDaysForView(nextViewMode, nextAnchorDate);
    const { data, error: fetchError } = await supabase.rpc('list_my_bookings_range', {
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
    setBookings((data ?? []) as MyBooking[]);
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

  const dayListBookings = viewMode === 'day'
    ? [...(bookingsByDay.get(anchorDate) ?? [])].sort((a, b) => a.starts_at.localeCompare(b.starts_at))
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
          <p>Haz clic en una clase para ver los detalles.</p>
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
          {isLoading ? null : dayListBookings.length === 0 ? (
            <p className={styles.emptyDay}>No tienes clases este día.</p>
          ) : (
            dayListBookings.map((booking) => (
              <button
                key={booking.booking_id}
                type="button"
                className={styles.dayListItem}
                onClick={() => setSelectedBookingId(booking.booking_id)}
              >
                <span className={styles.dayListTime}>
                  {formatTime(booking.starts_at)}–{formatTime(booking.ends_at)}
                </span>
                <span className={styles.dayListLevel}>
                  {booking.level.toUpperCase()} · {booking.label}
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
            const dayBookings = [...(bookingsByDay.get(day) ?? [])].sort((a, b) =>
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
      )}

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
