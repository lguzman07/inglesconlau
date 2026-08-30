'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/client';

import styles from './GroupClassesDashboard.module.css';

type Availability = {
  schedule_id: string;
  code: string;
  label: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
  reserved_count: number;
  spots_remaining: number;
};

type BookingSchedule = {
  label: string;
  level: string;
  starts_at: string;
  ends_at: string;
};

type GroupClassBooking = {
  id: string;
  class_date: string;
  status: string;
  schedule:
    | BookingSchedule
    | BookingSchedule[]
    | null;
};

const LEVEL_OPTIONS = [
  { value: 'a1', label: 'A1' },
  { value: 'a2', label: 'A2' },
  { value: 'b1', label: 'B1' },
  { value: 'b2', label: 'B2' },
];

const COURSE_START_DATE = '2026-09-14';
const COURSE_END_DATE = '2027-01-01';

const WEEK_RESERVE_REASONS: Record<string, string> = {
  sin_creditos: 'no tenías suficientes clases disponibles',
  lleno: 'esos horarios ya estaban llenos',
  ya_reservada: 'ya tenías esas clases reservadas',
  fuera_de_curso: 'esos días están fuera del período del curso',
  ya_paso: 'esas clases ya habían comenzado',
};

const WEEK_DAYS = [
  'Lu',
  'Ma',
  'Mi',
  'Ju',
  'Vi',
  'Sá',
  'Do',
];

function getLevelLabel(value: string) {
  return (
    LEVEL_OPTIONS.find(
      (level) => level.value === value,
    )?.label ?? value.toUpperCase()
  );
}

function toIsoDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(
    date.getUTCMonth() + 1,
  ).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(
    2,
    '0',
  );

  return `${year}-${month}-${day}`;
}

function getMonthStart(value: string) {
  return `${value.slice(0, 7)}-01`;
}

function changeMonth(value: string, amount: number) {
  const [year, month] = value
    .split('-')
    .map(Number);

  return toIsoDate(
    new Date(
      Date.UTC(year, month - 1 + amount, 1),
    ),
  );
}

function getCalendarDays(monthValue: string) {
  const [year, month] = monthValue
    .split('-')
    .map(Number);

  const firstDay = new Date(
    Date.UTC(year, month - 1, 1),
  );

  const mondayOffset =
    (firstDay.getUTCDay() + 6) % 7;

  const gridStart = new Date(firstDay);
  gridStart.setUTCDate(
    gridStart.getUTCDate() - mondayOffset,
  );

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart);
    day.setUTCDate(day.getUTCDate() + index);
    return toIsoDate(day);
  });
}

function formatMonth(value: string) {
  const [year, month] = value
    .split('-')
    .map(Number);

  const formatted = new Intl.DateTimeFormat(
    'es-DO',
    {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    },
  ).format(new Date(Date.UTC(year, month - 1, 1)));

  return (
    formatted.charAt(0).toUpperCase() +
    formatted.slice(1)
  );
}

function formatShortDate(value: string) {
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function getDominicanToday() {
  const parts = new Intl.DateTimeFormat(
    'en-CA',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'America/Santo_Domingo',
    },
  ).formatToParts(new Date());

  const year = parts.find(
    (part) => part.type === 'year',
  )?.value;

  const month = parts.find(
    (part) => part.type === 'month',
  )?.value;

  const day = parts.find(
    (part) => part.type === 'day',
  )?.value;

  return `${year}-${month}-${day}`;
}

function getInitialClassDate() {
  const today = getDominicanToday();

  if (today < COURSE_START_DATE) return COURSE_START_DATE;
  if (today > COURSE_END_DATE) return COURSE_END_DATE;

  const date = new Date(`${today}T12:00:00-04:00`);
  const day = date.getDay();

  if (day === 6) date.setDate(date.getDate() + 2);
  if (day === 0) date.setDate(date.getDate() + 1);

  return toIsoDate(
    new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ),
    ),
  );
}

function isValidClassDate(value: string) {
  if (value < COURSE_START_DATE || value > COURSE_END_DATE) return false;

  const day = new Date(`${value}T12:00:00-04:00`).getDay();
  return day >= 1 && day <= 5;
}

function formatDate(value: string) {
  const formatted = new Intl.DateTimeFormat(
    'es-DO',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Santo_Domingo',
    },
  ).format(
    new Date(`${value}T12:00:00-04:00`),
  );

  return (
    formatted.charAt(0).toUpperCase() +
    formatted.slice(1)
  );
}

function formatTime(value: string) {
  const [hours, minutes] = value
    .split(':')
    .map(Number);

  const time = new Date(
    Date.UTC(2026, 0, 1, hours, minutes),
  );

  return new Intl.DateTimeFormat('es-DO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(time);
}

function getBookingSchedule(
  booking: GroupClassBooking,
) {
  if (Array.isArray(booking.schedule)) {
    return booking.schedule[0] ?? null;
  }

  return booking.schedule;
}

function getReadableError(
  message: string | undefined,
) {
  if (!message) {
    return 'No pudimos completar la acción. Inténtalo nuevamente.';
  }

  if (
    message.includes(
      'duplicate key value',
    )
  ) {
    return 'Ya reservaste ese horario para esa fecha.';
  }

  return message;
}

export default function GroupClassesDashboard() {
  const today = getDominicanToday();
  const initialClassDate = getInitialClassDate();
  const calendarRef = useRef<HTMLDivElement>(null);

  const [availableClasses, setAvailableClasses] =
    useState(0);

  const [selectedDate, setSelectedDate] =
    useState(initialClassDate);

  const [calendarMonth, setCalendarMonth] =
    useState(getMonthStart(initialClassDate));

  const [isCalendarOpen, setIsCalendarOpen] =
    useState(false);

  const [selectedLevel, setSelectedLevel] =
    useState('a1');

  const [selectedScheduleId, setSelectedScheduleId] =
    useState('');

  const [availability, setAvailability] =
    useState<Availability[]>([]);

  const [bookings, setBookings] =
    useState<GroupClassBooking[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [isLoadingSchedules, setIsLoadingSchedules] =
    useState(false);

  const [isReserving, setIsReserving] =
    useState(false);

  const [isReservingWeek, setIsReservingWeek] =
    useState(false);

  const [cancellingId, setCancellingId] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState('');

  const [error, setError] =
    useState('');

  const loadStudentClasses =
    useCallback(async () => {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoading(false);
        return;
      }

      const [balanceResult, bookingsResult] =
        await Promise.all([
          supabase
            .from('class_balances')
            .select('available_classes')
            .eq('user_id', user.id)
            .maybeSingle(),

          supabase
            .from('group_class_bookings')
            .select(
              `
                id,
                class_date,
                status,
                schedule:group_class_schedules (
                  label,
                  level,
                  starts_at,
                  ends_at
                )
              `,
            )
            .eq('user_id', user.id)
            .eq('status', 'reserved')
            .gte('class_date', today)
            .order('class_date', {
              ascending: true,
            }),
        ]);

      if (balanceResult.error) {
        setError(
          'No pudimos cargar tus clases disponibles.',
        );
      }

      if (bookingsResult.error) {
        setError(
          'No pudimos cargar tus próximas reservas.',
        );
      }

      setAvailableClasses(
        balanceResult.data?.available_classes ?? 0,
      );

      setBookings(
        (bookingsResult.data ?? []) as unknown as GroupClassBooking[],
      );

      setIsLoading(false);
    }, [today]);

  const loadAvailability =
    useCallback(async (
      date: string,
      level: string,
    ) => {
      setIsLoadingSchedules(true);
      setSelectedScheduleId('');

      if (!isValidClassDate(date)) {
        setAvailability([]);
        setIsLoadingSchedules(false);
        return;
      }

      const supabase = createClient();

      const { data, error: availabilityError } =
        await supabase.rpc(
          'get_group_class_availability_by_level',
          {
            p_class_date: date,
            p_level: level,
          },
        );

      if (availabilityError) {
        setAvailability([]);
        setError(
          'No pudimos consultar los horarios. Inténtalo nuevamente.',
        );
        setIsLoadingSchedules(false);
        return;
      }

      setAvailability(
        (data ?? []) as Availability[],
      );
      setIsLoadingSchedules(false);
    }, []);

  useEffect(() => {
    void loadStudentClasses();
  }, [loadStudentClasses]);

  useEffect(() => {
    void loadAvailability(
      selectedDate,
      selectedLevel,
    );
  }, [
    loadAvailability,
    selectedDate,
    selectedLevel,
  ]);

  useEffect(() => {
    if (!isCalendarOpen) return;

    function closeCalendar(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsCalendarOpen(false);
      }
    }

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsCalendarOpen(false);
      }
    }

    document.addEventListener(
      'mousedown',
      closeCalendar,
    );
    document.addEventListener(
      'keydown',
      closeWithEscape,
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        closeCalendar,
      );
      document.removeEventListener(
        'keydown',
        closeWithEscape,
      );
    };
  }, [isCalendarOpen]);

  async function handleReserve() {
    if (
      !selectedScheduleId ||
      isReserving ||
      availableClasses <= 0
    ) {
      return;
    }

    setIsReserving(true);
    setError('');
    setMessage('');

    const supabase = createClient();

    const { error: reserveError } =
      await supabase.rpc(
        'reserve_group_class',
        {
          p_schedule_id:
            selectedScheduleId,
          p_class_date: selectedDate,
        },
      );

    if (reserveError) {
      setError(
        getReadableError(
          reserveError.message,
        ),
      );
      setIsReserving(false);
      await loadAvailability(
        selectedDate,
        selectedLevel,
      );
      return;
    }

    setMessage(
      '¡Clase reservada! Ya aparece en tus próximas clases.',
    );
    setSelectedScheduleId('');
    setIsReserving(false);

    await Promise.all([
      loadStudentClasses(),
      loadAvailability(
        selectedDate,
        selectedLevel,
      ),
    ]);
  }

  async function handleReserveWeek() {
    if (
      !selectedScheduleId ||
      isReserving ||
      isReservingWeek ||
      availableClasses <= 0
    ) {
      return;
    }

    setIsReservingWeek(true);
    setError('');
    setMessage('');

    const supabase = createClient();

    const { data, error: reserveError } =
      await supabase.rpc(
        'reserve_group_class_week',
        {
          p_schedule_id:
            selectedScheduleId,
          p_week_start: selectedDate,
        },
      );

    setIsReservingWeek(false);

    if (reserveError) {
      setError(
        getReadableError(
          reserveError.message,
        ),
      );
      await loadAvailability(
        selectedDate,
        selectedLevel,
      );
      return;
    }

    const results =
      (data ?? []) as {
        class_date: string;
        result: string;
      }[];

    const bookedCount = results.filter(
      (item) => item.result === 'reservada',
    ).length;

    const skipped = results.filter(
      (item) => item.result !== 'reservada',
    );
    const skippedReasons = Array.from(
      new Set(
        skipped.map((item) => item.result),
      ),
    );
    const reasonText =
      skippedReasons.length === 1
        ? (WEEK_RESERVE_REASONS[
            skippedReasons[0]
          ] ?? 'no estaban disponibles')
        : skippedReasons
            .map(
              (code) =>
                WEEK_RESERVE_REASONS[code] ??
                code,
            )
            .join('; ');

    if (bookedCount === 0) {
      setError(
        `No pudimos reservar ningún día de esa semana porque ${reasonText}.`,
      );
    } else if (skipped.length === 0) {
      setMessage(
        `¡Reservamos las ${bookedCount} clases de la semana!`,
      );
    } else {
      setMessage(
        `Reservamos ${bookedCount} de ${results.length} días de esa semana. El resto no se pudo reservar porque ${reasonText}.`,
      );
    }

    setSelectedScheduleId('');

    await Promise.all([
      loadStudentClasses(),
      loadAvailability(
        selectedDate,
        selectedLevel,
      ),
    ]);
  }

  async function handleCancel(
    bookingId: string,
  ) {
    if (cancellingId) return;

    setCancellingId(bookingId);
    setError('');
    setMessage('');

    const supabase = createClient();

    const { error: cancelError } =
      await supabase.rpc(
        'cancel_group_class',
        {
          p_booking_id: bookingId,
        },
      );

    if (cancelError) {
      setError(
        getReadableError(
          cancelError.message,
        ),
      );
      setCancellingId(null);
      return;
    }

    setMessage(
      'Reserva cancelada. La clase regresó a tu saldo.',
    );
    setCancellingId(null);

    await Promise.all([
      loadStudentClasses(),
      loadAvailability(
        selectedDate,
        selectedLevel,
      ),
    ]);
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="group-classes-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>
            CLASES GRUPALES
          </p>

          <h2 id="group-classes-title">
            Reserva tu próxima clase
          </h2>

          <p className={styles.description}>
            El programa comienza el 14 de septiembre de 2026
            y dura 16 semanas. Puedes cambiar una reserva por
            otro nivel u horario que tenga cupo.
          </p>
        </div>

        <div className={styles.balanceCard}>
          <span>Clases disponibles</span>
          <strong>
            {isLoading ? '—' : availableClasses}
          </strong>
          <Link href="/clases-grupales">
            Comprar más clases
          </Link>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <article className={styles.bookingCard}>
          <h3>Escoge tu nivel</h3>

          <div
            className={styles.levelSelector}
            role="group"
            aria-label="Nivel de la clase grupal"
          >
            {LEVEL_OPTIONS.map((level) => (
              <button
                key={level.value}
                type="button"
                className={`${styles.levelButton} ${
                  selectedLevel === level.value
                    ? styles.levelButtonSelected
                    : ''
                }`}
                onClick={() => {
                  setSelectedLevel(level.value);
                  setSelectedScheduleId('');
                  setError('');
                  setMessage('');
                }}
                aria-pressed={
                  selectedLevel === level.value
                }
              >
                {level.label}
              </button>
            ))}

            <button
              type="button"
              className={`${styles.levelButton} ${styles.levelButtonFullWidth}`}
              disabled
              title="Próximamente"
            >
              C1 · Próximamente
            </button>
          </div>

          <h4>Elige la fecha y el horario</h4>

          <div
            className={styles.dateField}
            ref={calendarRef}
          >
            <span>Día de la clase</span>

            <button
              type="button"
              className={styles.dateTrigger}
              aria-haspopup="dialog"
              aria-expanded={isCalendarOpen}
              onClick={() => {
                setCalendarMonth(
                  getMonthStart(selectedDate),
                );
                setIsCalendarOpen((open) => !open);
              }}
            >
              <strong>
                {formatShortDate(selectedDate)}
              </strong>
              <span aria-hidden="true">▦</span>
            </button>

            {isCalendarOpen ? (
              <div
                className={styles.calendar}
                role="dialog"
                aria-label="Escoge el día de la clase"
              >
                <div className={styles.calendarHeader}>
                  <strong>
                    {formatMonth(calendarMonth)}
                  </strong>

                  <div>
                    <button
                      type="button"
                      aria-label="Mes anterior"
                      disabled={
                        changeMonth(
                          calendarMonth,
                          -1,
                        ) < getMonthStart(COURSE_START_DATE)
                      }
                      onClick={() =>
                        setCalendarMonth((month) =>
                          changeMonth(month, -1),
                        )
                      }
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      aria-label="Mes siguiente"
                      disabled={
                        changeMonth(
                          calendarMonth,
                          1,
                        ) > getMonthStart(COURSE_END_DATE)
                      }
                      onClick={() =>
                        setCalendarMonth((month) =>
                          changeMonth(month, 1),
                        )
                      }
                    >
                      →
                    </button>
                  </div>
                </div>

                <div
                  className={styles.weekDays}
                  aria-hidden="true"
                >
                  {WEEK_DAYS.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className={styles.calendarGrid}>
                  {getCalendarDays(calendarMonth).map(
                    (day) => {
                      const isOutsideMonth =
                        day.slice(0, 7) !==
                        calendarMonth.slice(0, 7);
                      const isPast = day < today;
                      const isOutsideCourse =
                        !isValidClassDate(day);
                      const isSelected =
                        day === selectedDate;
                      const isToday = day === today;

                      return (
                        <button
                          key={day}
                          type="button"
                          className={`${
                            styles.calendarDay
                          } ${
                            isOutsideMonth
                              ? styles.calendarDayOutside
                              : ''
                          } ${
                            isSelected
                              ? styles.calendarDaySelected
                              : ''
                          } ${
                            isToday
                              ? styles.calendarDayToday
                              : ''
                          }`}
                          disabled={isPast || isOutsideCourse}
                          aria-pressed={isSelected}
                          aria-label={formatDate(day)}
                          onClick={() => {
                            setSelectedDate(day);
                            setIsCalendarOpen(false);
                            setError('');
                            setMessage('');
                          }}
                        >
                          {Number(day.slice(8, 10))}
                        </button>
                      );
                    },
                  )}
                </div>

                <button
                  type="button"
                  className={styles.todayButton}
                  onClick={() => {
                    setSelectedDate(initialClassDate);
                    setCalendarMonth(
                      getMonthStart(initialClassDate),
                    );
                    setIsCalendarOpen(false);
                    setError('');
                    setMessage('');
                  }}
                >
                  Ir a la próxima clase
                </button>
              </div>
            ) : null}
          </div>

          <p className={styles.selectedDate}>
            {formatDate(selectedDate)}
          </p>

          <div className={styles.scheduleList}>
            {isLoadingSchedules ? (
              <p className={styles.emptyText}>
                Cargando horarios...
              </p>
            ) : availability.length === 0 ? (
              <p className={styles.emptyText}>
                No hay horarios publicados para esta
                fecha.
              </p>
            ) : (
              availability.map((schedule) => {
                const isFull =
                  Number(schedule.spots_remaining) <= 0;

                const isSelected =
                  selectedScheduleId ===
                  schedule.schedule_id;

                return (
                  <button
                    key={schedule.schedule_id}
                    type="button"
                    className={`${styles.scheduleButton} ${
                      isSelected
                        ? styles.scheduleButtonSelected
                        : ''
                    }`}
                    onClick={() => {
                      setSelectedScheduleId(
                        schedule.schedule_id,
                      );
                      setError('');
                      setMessage('');
                    }}
                    disabled={isFull}
                    aria-pressed={isSelected}
                  >
                    <span>
                      <strong>{schedule.label}</strong>
                      <small>
                        {formatTime(
                          schedule.starts_at,
                        )}{' '}
                        –{' '}
                        {formatTime(
                          schedule.ends_at,
                        )}
                      </small>
                    </span>

                    <em>
                      {isFull
                        ? 'Sin cupos'
                        : `${schedule.spots_remaining} cupos`}
                    </em>
                  </button>
                );
              })
            )}
          </div>

          <button
            type="button"
            className={styles.reserveButton}
            onClick={handleReserve}
            disabled={
              !selectedScheduleId ||
              isReserving ||
              isReservingWeek ||
              availableClasses <= 0
            }
          >
            {isReserving
              ? 'Reservando...'
              : availableClasses <= 0
                ? 'Compra clases para reservar'
                : 'Confirmar reserva'}
          </button>

          {selectedScheduleId && availableClasses > 0 ? (
            <button
              type="button"
              className={styles.reserveWeekButton}
              onClick={handleReserveWeek}
              disabled={
                isReserving ||
                isReservingWeek
              }
            >
              {isReservingWeek
                ? 'Reservando la semana...'
                : 'Reservar toda la semana (lun–vie)'}
            </button>
          ) : null}

          {availableClasses <= 0 && !isLoading ? (
            <Link
              href="/clases-grupales"
              className={styles.purchaseLink}
            >
              Ver paquetes de clases
            </Link>
          ) : null}
        </article>

        <article className={styles.upcomingCard}>
          <h3>Próximas clases</h3>

          {isLoading ? (
            <p className={styles.emptyText}>
              Cargando tus reservas...
            </p>
          ) : bookings.length === 0 ? (
            <div className={styles.emptyState}>
              <p>Aún no tienes clases reservadas.</p>
              <span>
                Elige una fecha y un horario para
                comenzar.
              </span>
            </div>
          ) : (
            <div className={styles.bookingList}>
              {bookings.map((booking) => {
                const schedule =
                  getBookingSchedule(booking);

                return (
                  <div
                    key={booking.id}
                    className={styles.bookingItem}
                  >
                    <div>
                      <strong>
                        {formatDate(
                          booking.class_date,
                        )}
                      </strong>

                      {schedule ? (
                        <span>
                          {schedule.label} ·{' '}
                          {formatTime(
                            schedule.starts_at,
                          )}{' '}
                          –{' '}
                          {formatTime(
                            schedule.ends_at,
                          )}
                        </span>
                      ) : null}
                    </div>

                    {schedule ? (
                      <span
                        className={styles.bookingLevel}
                        aria-label={`Nivel ${getLevelLabel(
                          schedule.level,
                        )}`}
                      >
                        {getLevelLabel(schedule.level)}
                      </span>
                    ) : null}

                    <button
                      type="button"
                      onClick={() =>
                        handleCancel(booking.id)
                      }
                      disabled={
                        cancellingId === booking.id
                      }
                    >
                      {cancellingId === booking.id
                        ? 'Cancelando...'
                        : 'Cancelar'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </article>
      </div>

      {message ? (
        <p
          className={styles.successMessage}
          role="status"
        >
          {message}
        </p>
      ) : null}

      {error ? (
        <p
          className={styles.errorMessage}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </section>
  );
}
