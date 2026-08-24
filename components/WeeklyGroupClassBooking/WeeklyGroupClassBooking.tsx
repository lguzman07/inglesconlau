'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './WeeklyGroupClassBooking.module.css';

type PaymentDetails = {
  bankName: string;
  accountHolder: string;
  idDocument: string;
  productType: string;
  accountNumber: string;
  currency: string;
  paymentEmail: string;
  swiftCode: string;
};

type Availability = {
  schedule_id: string;
  schedule_code: string;
  schedule_label: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
  active_students: number;
  available_spots: number;
};

type PackageStatus =
  | 'pending_payment'
  | 'active'
  | 'exhausted'
  | 'cancelled';

type ClassPackage = {
  id: string;
  schedule_id: string;
  total_classes: number;
  remaining_classes: number;
  price_dop: number;
  status: PackageStatus;
  activated_at: string | null;
  created_at: string;
};

type Props = {
  paymentDetails: PaymentDetails;
};

function formatTime(value: string) {
  const [hourValue, minuteValue] =
    value.split(':');

  const hour = Number(hourValue);
  const minute = Number(minuteValue);

  const period =
    hour >= 12
      ? 'p. m.'
      : 'a. m.';

  return `${hour % 12 || 12}:${String(
    minute,
  ).padStart(2, '0')} ${period}`;
}

function getStatusLabel(
  status: PackageStatus,
) {
  if (status === 'pending_payment') {
    return 'Pendiente de pago';
  }

  if (status === 'active') {
    return 'Paquete activo';
  }

  if (status === 'exhausted') {
    return 'Clases agotadas';
  }

  return 'Cancelado';
}

export default function WeeklyGroupClassBooking({
  paymentDetails,
}: Props) {
  const [
    availability,
    setAvailability,
  ] = useState<Availability[]>([]);

  const [
    packages,
    setPackages,
  ] = useState<ClassPackage[]>([]);

  const [
    requestingScheduleId,
    setRequestingScheduleId,
  ] = useState<string | null>(
    null,
  );

  const [
    cancellingPackageId,
    setCancellingPackageId,
  ] = useState<string | null>(
    null,
  );

  const [isLoading, setIsLoading] =
    useState(true);

  const [message, setMessage] =
    useState('');

  const [error, setError] =
    useState('');

  const loadData =
    useCallback(async () => {
      setIsLoading(true);
      setError('');

      const supabase =
        createClient();

      const [
        availabilityResult,
        packagesResult,
      ] = await Promise.all([
        supabase.rpc(
          'get_group_class_package_availability',
        ),

        supabase
          .from(
            'group_class_packages',
          )
          .select(
            [
              'id',
              'schedule_id',
              'total_classes',
              'remaining_classes',
              'price_dop',
              'status',
              'activated_at',
              'created_at',
            ].join(','),
          )
          .order('created_at', {
            ascending: false,
          }),
      ]);

      if (
        availabilityResult.error
      ) {
        setError(
          availabilityResult.error
            .message,
        );
        setIsLoading(false);
        return;
      }

      if (packagesResult.error) {
        setError(
          packagesResult.error.message,
        );
        setIsLoading(false);
        return;
      }

      setAvailability(
        (availabilityResult.data ??
          []) as unknown as Availability[],
      );

      setPackages(
        (packagesResult.data ??
          []) as unknown as ClassPackage[],
      );

      setIsLoading(false);
    }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const currentPackage =
    useMemo(
      () =>
        packages.find(
          (item) =>
            item.status ===
              'pending_payment' ||
            item.status === 'active',
        ),
      [packages],
    );

  const latestExhaustedPackage =
    useMemo(
      () =>
        packages.find(
          (item) =>
            item.status ===
            'exhausted',
        ),
      [packages],
    );

  const currentSchedule =
    currentPackage
      ? availability.find(
          (item) =>
            item.schedule_id ===
            currentPackage.schedule_id,
        )
      : undefined;

  const paymentIsConfigured =
    Object.values(
      paymentDetails,
    ).every(
      (value) =>
        value.trim().length > 0,
    );

  const emailHref =
    `mailto:${paymentDetails.paymentEmail}` +
    `?subject=${encodeURIComponent(
      'Comprobante de pago - Paquete de 5 clases',
    )}` +
    `&body=${encodeURIComponent(
      'Hola, envío mi comprobante de pago para activar mi paquete de 5 clases grupales A1.',
    )}`;

  async function handleRequest(
    scheduleId: string,
  ) {
    if (requestingScheduleId) {
      return;
    }

    setRequestingScheduleId(
      scheduleId,
    );
    setMessage('');
    setError('');

    const supabase =
      createClient();

    const { error: requestError } =
      await supabase.rpc(
        'request_group_class_package',
        {
          p_schedule_id:
            scheduleId,
        },
      );

    if (requestError) {
      setError(
        requestError.message,
      );
      setRequestingScheduleId(
        null,
      );
      return;
    }

    setMessage(
      'Tu solicitud fue creada. Realiza el pago y envía el comprobante por correo.',
    );

    await loadData();

    setRequestingScheduleId(
      null,
    );
  }

  async function handleCancel() {
    if (
      !currentPackage ||
      currentPackage.status !==
        'pending_payment' ||
      cancellingPackageId
    ) {
      return;
    }

    const shouldCancel =
      window.confirm(
        '¿Quieres cancelar esta solicitud?',
      );

    if (!shouldCancel) {
      return;
    }

    setCancellingPackageId(
      currentPackage.id,
    );
    setMessage('');
    setError('');

    const supabase =
      createClient();

    const { error: cancelError } =
      await supabase.rpc(
        'cancel_group_class_package_request',
        {
          p_package_id:
            currentPackage.id,
        },
      );

    if (cancelError) {
      setError(
        cancelError.message,
      );
      setCancellingPackageId(
        null,
      );
      return;
    }

    setMessage(
      'La solicitud fue cancelada.',
    );

    await loadData();

    setCancellingPackageId(
      null,
    );
  }

  if (isLoading) {
    return (
      <section
        id="reservar"
        className={styles.booking}
      >
        <div
          className={styles.loading}
        >
          Cargando horarios y
          paquetes...
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
      <div
        className={styles.heading}
      >
        <div>
          <p
            className={
              styles.eyebrow
            }
          >
            PAQUETE DE CLASES
          </p>

          <h2 id="booking-title">
            Tus cinco clases
          </h2>
        </div>

        <p>
          Elige un grupo, realiza el
          pago y envía el comprobante
          por correo. Las clases no
          vencen mientras tengas
          saldo.
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

      {currentPackage ? (
        <>
          <article
            className={
              styles.packageCard
            }
          >
            <div>
              <p
                className={
                  styles.reservationLabel
                }
              >
                TU PAQUETE
              </p>

              <h3>
                {currentSchedule
                  ?.schedule_label ??
                  'Grupo seleccionado'}
              </h3>

              {currentSchedule ? (
                <p>
                  {formatTime(
                    currentSchedule
                      .starts_at,
                  )}{' '}
                  –{' '}
                  {formatTime(
                    currentSchedule
                      .ends_at,
                  )}
                </p>
              ) : null}
            </div>

            <div
              className={
                styles.packageSummary
              }
            >
              <span
                className={`${styles.statusBadge} ${
                  styles[
                    currentPackage
                      .status
                  ]
                }`}
              >
                {getStatusLabel(
                  currentPackage.status,
                )}
              </span>

              <strong
                className={
                  styles.classCounter
                }
              >
                {
                  currentPackage.remaining_classes
                }{' '}
                de{' '}
                {
                  currentPackage.total_classes
                }
              </strong>

              <span
                className={
                  styles.counterLabel
                }
              >
                clases disponibles
              </span>
            </div>
          </article>

          {currentPackage.status ===
          'pending_payment' ? (
            <div
              className={
                styles.paymentCard
              }
            >
              <div
                className={
                  styles.paymentHeading
                }
              >
                <div>
                  <p
                    className={
                      styles.eyebrow
                    }
                  >
                    DATOS PARA EL PAGO
                  </p>

                  <h3>
                    Completa tu
                    solicitud
                  </h3>
                </div>

                <strong>
                  RD$600
                </strong>
              </div>

              {paymentIsConfigured ? (
                <>
                  <dl
                    className={
                      styles.bankDetails
                    }
                  >
                    <div>
                      <dt>Banco</dt>
                      <dd>
                        {
                          paymentDetails.bankName
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Titular
                      </dt>
                      <dd>
                        {
                          paymentDetails.accountHolder
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Documento
                      </dt>
                      <dd>
                        {
                          paymentDetails.idDocument
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Producto
                      </dt>
                      <dd>
                        {
                          paymentDetails.productType
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Número de cuenta
                      </dt>
                      <dd>
                        {
                          paymentDetails.accountNumber
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Moneda
                      </dt>
                      <dd>
                        {
                          paymentDetails.currency
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>SWIFT</dt>
                      <dd>
                        {
                          paymentDetails.swiftCode
                        }
                      </dd>
                    </div>

                    <div>
                      <dt>
                        Correo
                      </dt>
                      <dd>
                        {
                          paymentDetails.paymentEmail
                        }
                      </dd>
                    </div>
                  </dl>

                  <p
                    className={
                      styles.paymentInstructions
                    }
                  >
                    Realiza el pago y
                    envía una foto o
                    PDF del comprobante
                    a{' '}
                    <strong>
                      {
                        paymentDetails.paymentEmail
                      }
                    </strong>
                    . Lau verificará el
                    pago y activará tus
                    cinco clases.
                  </p>

                  <div
                    className={
                      styles.paymentActions
                    }
                  >
                    <a
                      href={
                        emailHref
                      }
                      className={
                        styles.emailButton
                      }
                    >
                      Enviar comprobante
                      por correo
                    </a>

                    <button
                      type="button"
                      className={
                        styles.cancelButton
                      }
                      disabled={
                        Boolean(
                          cancellingPackageId,
                        )
                      }
                      onClick={() =>
                        void handleCancel()
                      }
                    >
                      {cancellingPackageId
                        ? 'Cancelando...'
                        : 'Cancelar solicitud'}
                    </button>
                  </div>
                </>
              ) : (
                <div
                  className={
                    styles.error
                  }
                >
                  Los datos bancarios
                  todavía no están
                  configurados en el
                  servidor.
                </div>
              )}
            </div>
          ) : null}
        </>
      ) : (
        <>
          {latestExhaustedPackage ? (
            <div
              className={
                styles.exhaustedNotice
              }
            >
              Tu paquete anterior llegó
              a cero. Puedes comprar
              otro paquete de cinco
              clases seleccionando un
              grupo.
            </div>
          ) : null}

          <div
            className={
              styles.scheduleGrid
            }
          >
            {availability.map(
              (schedule) => {
                const isFull =
                  schedule.available_spots <=
                  0;

                const isRequesting =
                  requestingScheduleId ===
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
                      Clases grupales A1
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
                          requestingScheduleId,
                        )
                      }
                      onClick={() =>
                        void handleRequest(
                          schedule.schedule_id,
                        )
                      }
                    >
                      {isFull
                        ? 'Grupo completo'
                        : isRequesting
                          ? 'Solicitando...'
                          : 'Elegir este grupo'}
                    </button>
                  </article>
                );
              },
            )}
          </div>
        </>
      )}
    </section>
  );
}