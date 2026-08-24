'use client';

import {
  useCallback,
  useEffect,
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

  const [availableClasses, setAvailableClasses] =
    useState(0);

  const [selectedDate, setSelectedDate] =
    useState(today);

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
    useCallback(async (date: string) => {
      setIsLoadingSchedules(true);
      setSelectedScheduleId('');

      const supabase = createClient();

      const { data, error: availabilityError } =
        await supabase.rpc(
          'get_group_class_availability',
          {
            p_class_date: date,
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
    void loadAvailability(selectedDate);
  }, [loadAvailability, selectedDate]);

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
      await loadAvailability(selectedDate);
      return;
    }

    setMessage(
      '¡Clase reservada! Ya aparece en tus próximas clases.',
    );
    setSelectedScheduleId('');
    setIsReserving(false);

    await Promise.all([
      loadStudentClasses(),
      loadAvailability(selectedDate),
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
      loadAvailability(selectedDate),
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
            CLASES GRUPALES A1
          </p>

          <h2 id="group-classes-title">
            Reserva tu próxima clase
          </h2>

          <p className={styles.description}>
            Tener clases disponibles no garantiza un
            horario. Selecciona la fecha y reserva
            antes de que se complete.
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
          <h3>Elige una fecha</h3>

          <label
            className={styles.dateField}
            htmlFor="group-class-date"
          >
            Día de la clase
            <input
              id="group-class-date"
              type="date"
              min={today}
              value={selectedDate}
              onChange={(event) => {
                setSelectedDate(
                  event.target.value,
                );
                setError('');
                setMessage('');
              }}
            />
          </label>

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
                        : 'Disponible'}
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
              availableClasses <= 0
            }
          >
            {isReserving
              ? 'Reservando...'
              : availableClasses <= 0
                ? 'Compra clases para reservar'
                : 'Confirmar reserva'}
          </button>

          {availableClasses <= 0 && !isLoading ? (
            <Link
              href="/clases-grupales"
              className={styles.purchaseLink}
            >
              Comprar paquete de 5 clases
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
