'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './WeeklyGroupClassBooking.module.css';

type Availability = {
  week_start: string;
  schedule_id: string;
  schedule_code: string;
  schedule_label: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
  reserved_students: number;
  available_spots: number;
};

type ReservationStatus =
  | 'pending_payment'
  | 'pending_review'
  | 'confirmed'
  | 'rejected'
  | 'cancelled';

type Reservation = {
  id: string;
  schedule_id: string;
  week_start: string;
  status: ReservationStatus;
  price_dop: number;
  expires_at: string | null;
};

function parseDate(value: string) {
  return new Date(`${value}T12:00:00`);
}

function formatWeek(weekStart: string) {
  const startDate = parseDate(weekStart);
  const endDate = new Date(startDate);

  endDate.setDate(startDate.getDate() + 4);

  const startDay = startDate.getDate();
  const endDay = endDate.getDate();

  const startMonth =
    new Intl.DateTimeFormat('es-DO', {
      month: 'long',
    }).format(startDate);

  const endMonth =
    new Intl.DateTimeFormat('es-DO', {
      month: 'long',
    }).format(endDate);

  if (startMonth === endMonth) {
    return `${startDay}–${endDay} de ${startMonth}`;
  }

  return `${startDay} de ${startMonth}–${endDay} de ${endMonth}`;
}

function formatShortWeek(weekStart: string) {
  return new Intl.DateTimeFormat('es-DO', {
    day: 'numeric',
    month: 'short',
  }).format(parseDate(weekStart));
}

function formatTime(value: string) {
  const [hourValue, minuteValue] =
    value.split(':');

  const hour = Number(hourValue);
  const minute = Number(minuteValue);

  const period =
    hour >= 12 ? 'p. m.' : 'a. m.';

  const formattedHour =
    hour % 12 || 12;

  return `${formattedHour}:${String(
    minute,
  ).padStart(2, '0')} ${period}`;
}

function getStatusLabel(
  status: ReservationStatus,
) {
  if (status === 'pending_payment') {
    return 'Pendiente de pago';
  }

  if (status === 'pending_review') {
    return 'Pago en revisión';
  }

  if (status === 'confirmed') {
    return 'Confirmada';
  }

  if (status === 'rejected') {
    return 'Pago rechazado';
  }

  return 'Cancelada';
}

function isActiveReservation(
  reservation: Reservation,
) {
  if (
    reservation.status ===
      'pending_review' ||
    reservation.status ===
      'confirmed'
  ) {
    return true;
  }

  if (
    reservation.status !==
      'pending_payment' ||
    !reservation.expires_at
  ) {
    return false;
  }

  return (
    new Date(
      reservation.expires_at,
    ).getTime() > Date.now()
  );
}

export default function WeeklyGroupClassBooking() {
  const [availability, setAvailability] =
    useState<Availability[]>([]);

  const [reservations, setReservations] =
    useState<Reservation[]>([]);

  const [selectedWeek, setSelectedWeek] =
    useState('');

  const [isLoading, setIsLoading] =
    useState(true);

  const [
    reservingScheduleId,
    setReservingScheduleId,
  ] = useState<string | null>(null);

  const [
    cancellingReservationId,
    setCancellingReservationId,
  ] = useState<string | null>(null);

  const [message, setMessage] =
    useState('');

  const [error, setError] =
    useState('');

  const loadBookingData =
    useCallback(async () => {
      setIsLoading(true);
      setError('');

      const supabase = createClient();

      const [
        availabilityResult,
        reservationsResult,
      ] = await Promise.all([
        supabase.rpc(
          'get_group_class_availability',
          {
            p_weeks: 8,
          },
        ),

        supabase
          .from(
            'group_class_reservations',
          )
          .select(
            [
              'id',
              'schedule_id',
              'week_start',
              'status',
              'price_dop',
              'expires_at',
            ].join(','),
          )
          .order('week_start', {
            ascending: true,
          }),
      ]);

      if (availabilityResult.error) {
        setError(
          availabilityResult.error.message,
        );

        setIsLoading(false);
        return;
      }

      if (reservationsResult.error) {
        setError(
          reservationsResult.error.message,
        );

        setIsLoading(false);
        return;
      }

      const availabilityRows =
        (availabilityResult.data ??
          []) as Availability[];

      const reservationRows =
        (reservationsResult.data ??
          []) as Reservation[];

      setAvailability(
        availabilityRows,
      );

      setReservations(
        reservationRows,
      );

      setSelectedWeek(
        (currentWeek) =>
          currentWeek ||
          availabilityRows[0]
            ?.week_start ||
          '',
      );

      setIsLoading(false);
    }, []);

  useEffect(() => {
    void loadBookingData();
  }, [loadBookingData]);

  const weeks = useMemo(
    () =>
      Array.from(
        new Set(
          availability.map(
            (item) =>
              item.week_start,
          ),
        ),
      ),
    [availability],
  );

  const selectedSchedules =
    useMemo(
      () =>
        availability.filter(
          (item) =>
            item.week_start ===
            selectedWeek,
        ),
      [
        availability,
        selectedWeek,
      ],
    );

  const selectedReservation =
    useMemo(
      () =>
        reservations.find(
          (reservation) =>
            reservation.week_start ===
              selectedWeek &&
            isActiveReservation(
              reservation,
            ),
        ),
      [
        reservations,
        selectedWeek,
      ],
    );

  const selectedReservationSchedule =
    selectedReservation
      ? selectedSchedules.find(
          (schedule) =>
            schedule.schedule_id ===
            selectedReservation.schedule_id,
        )
      : undefined;

  async function handleReserve(
    scheduleId: string,
  ) {
    if (
      !selectedWeek ||
      reservingScheduleId
    ) {
      return;
    }

    setReservingScheduleId(
      scheduleId,
    );

    setMessage('');
    setError('');

    const supabase = createClient();

    const { error: reserveError } =
      await supabase.rpc(
        'reserve_group_class_week',
        {
          p_week_start:
            selectedWeek,
          p_schedule_id:
            scheduleId,
        },
      );

    if (reserveError) {
      setError(
        reserveError.message,
      );

      setReservingScheduleId(
        null,
      );

      return;
    }

    setMessage(
      'Tu cupo fue reservado durante 45 minutos. Ahora debes enviar el comprobante de pago.',
    );

    await loadBookingData();

    setReservingScheduleId(
      null,
    );
  }

  async function handleCancel() {
    if (
      !selectedReservation ||
      cancellingReservationId
    ) {
      return;
    }

    const shouldCancel =
      window.confirm(
        '¿Quieres cancelar esta reservación?',
      );

    if (!shouldCancel) {
      return;
    }

    setCancellingReservationId(
      selectedReservation.id,
    );

    setMessage('');
    setError('');

    const supabase = createClient();

    const { error: cancelError } =
      await supabase.rpc(
        'cancel_group_class_reservation',
        {
          p_reservation_id:
            selectedReservation.id,
        },
      );

    if (cancelError) {
      setError(
        cancelError.message,
      );

      setCancellingReservationId(
        null,
      );

      return;
    }

    setMessage(
      'La reservación fue cancelada.',
    );

    await loadBookingData();

    setCancellingReservationId(
      null,
    );
  }

  if (isLoading) {
    return (
      <section
        id="reservar"
        className={styles.booking}
      >
        <div className={styles.loading}>
          Cargando semanas y horarios...
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservar"
      className={styles.booking}
      aria-labelledby="booking-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>
            RESERVA SEMANAL
          </p>

          <h2 id="booking-title">
            Selecciona tu semana
          </h2>
        </div>

        <p>
          Cada reservación incluye las
          cinco clases de esa semana.
        </p>
      </div>

      {error ? (
        <div
          className={styles.error}
          role="alert"
        >
          {error}
        </div>
      ) : null}

      {message ? (
        <div
          className={styles.success}
          role="status"
        >
          {message}
        </div>
      ) : null}

      <div
        className={styles.weekSelector}
        aria-label="Semanas disponibles"
      >
        {weeks.map((week) => {
          const weekReservation =
            reservations.find(
              (reservation) =>
                reservation.week_start ===
                  week &&
                isActiveReservation(
                  reservation,
                ),
            );

          return (
            <button
              key={week}
              type="button"
              className={`${styles.weekButton} ${
                selectedWeek === week
                  ? styles.weekButtonActive
                  : ''
              }`}
              onClick={() => {
                setSelectedWeek(week);
                setMessage('');
                setError('');
              }}
            >
              <span>
                Semana del
              </span>

              <strong>
                {formatShortWeek(
                  week,
                )}
              </strong>

              {weekReservation ? (
                <small>
                  {getStatusLabel(
                    weekReservation.status,
                  )}
                </small>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className={styles.weekHeading}>
        <div>
          <p>
            SEMANA SELECCIONADA
          </p>

          <h3>
            {formatWeek(
              selectedWeek,
            )}
          </h3>
        </div>

        <span className={styles.weekPrice}>
          RD$600
        </span>
      </div>

      {selectedReservation &&
      selectedReservationSchedule ? (
        <article
          className={
            styles.reservationCard
          }
        >
          <div>
            <p
              className={
                styles.reservationLabel
              }
            >
              TU RESERVACIÓN
            </p>

            <h3>
              {
                selectedReservationSchedule
                  .schedule_label
              }
            </h3>

            <p>
              {formatTime(
                selectedReservationSchedule
                  .starts_at,
              )}{' '}
              –{' '}
              {formatTime(
                selectedReservationSchedule
                  .ends_at,
              )}
            </p>
          </div>

          <div
            className={
              styles.reservationActions
            }
          >
            <span
              className={`${styles.statusBadge} ${
                styles[
                  selectedReservation
                    .status
                ]
              }`}
            >
              {getStatusLabel(
                selectedReservation.status,
              )}
            </span>

            {selectedReservation.status !==
            'confirmed' ? (
              <button
                type="button"
                className={
                  styles.cancelButton
                }
                disabled={
                  cancellingReservationId ===
                  selectedReservation.id
                }
                onClick={() =>
                  void handleCancel()
                }
              >
                {cancellingReservationId
                  ? 'Cancelando...'
                  : 'Cancelar reservación'}
              </button>
            ) : null}
          </div>
        </article>
      ) : (
        <div
          className={
            styles.scheduleGrid
          }
        >
          {selectedSchedules.map(
            (schedule) => {
              const isFull =
                schedule.available_spots <=
                0;

              const isReserving =
                reservingScheduleId ===
                schedule.schedule_id;

              return (
                <article
                  key={
                    schedule.schedule_id
                  }
                  className={
                    styles.scheduleCard
                  }
                >
                  <span
                    className={
                      styles.scheduleDot
                    }
                  />

                  <p
                    className={
                      styles.scheduleLabel
                    }
                  >
                    {
                      schedule.schedule_label
                    }
                  </p>

                  <h3>
                    {formatTime(
                      schedule.starts_at,
                    )}
                  </h3>

                  <p
                    className={
                      styles.scheduleDays
                    }
                  >
                    Lunes a viernes
                  </p>

                  <div
                    className={
                      styles.capacity
                    }
                  >
                    <strong>
                      {
                        schedule.available_spots
                      }
                    </strong>{' '}
                    de{' '}
                    {
                      schedule.max_students
                    }{' '}
                    cupos disponibles
                  </div>

                  <button
                    type="button"
                    className={
                      styles.reserveButton
                    }
                    disabled={
                      isFull ||
                      Boolean(
                        reservingScheduleId,
                      )
                    }
                    onClick={() =>
                      void handleReserve(
                        schedule.schedule_id,
                      )
                    }
                  >
                    {isFull
                      ? 'Grupo completo'
                      : isReserving
                        ? 'Reservando...'
                        : 'Reservar este grupo'}
                  </button>
                </article>
              );
            },
          )}
        </div>
      )}
    </section>
  );
}