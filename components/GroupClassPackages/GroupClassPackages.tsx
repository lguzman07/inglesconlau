'use client';

import { useEffect, useMemo, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

import styles from './GroupClassPackages.module.css';

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

type GroupClassPackagesProps = {
  paymentDetails: PaymentDetails;
  isLoggedIn: boolean;
  daysUntilStart: number;
};

type PendingSelection = {
  packageId: string;
  scheduleId: string;
};

const PENDING_SELECTION_KEY = 'inglesconlau-pending-group-purchase';
const RECORDING_CONSENT_PENDING_KEY = 'inglesconlau-recording-consent-pending';

function readPendingSelection(): PendingSelection | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(PENDING_SELECTION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (
      typeof parsed?.packageId === 'string' &&
      typeof parsed?.scheduleId === 'string'
    ) {
      return parsed as PendingSelection;
    }
  } catch {
    // Ignore malformed/blocked storage; just skip restoring.
  }

  return null;
}

function savePendingSelection(selection: PendingSelection) {
  try {
    window.localStorage.setItem(
      PENDING_SELECTION_KEY,
      JSON.stringify(selection),
    );
  } catch {
    // Storage may be unavailable (private mode, etc.); nothing to do.
  }
}

function clearPendingSelection() {
  try {
    window.localStorage.removeItem(PENDING_SELECTION_KEY);
  } catch {
    // Ignore.
  }
}

type ScheduleOption = {
  schedule_id: string;
  code: string;
  label: string;
  level: string;
  starts_at: string;
  ends_at: string;
  max_students: number;
  spots_remaining: number;
};

const PACKAGES = [
  {
    id: 'trial-1',
    name: 'Clase de prueba',
    classes: 1,
    price: 100,
    regularPrice: 100,
    description: 'Una sola clase para conocer el método antes de comprar un paquete completo.',
  },
  {
    id: 'week-5',
    name: '1 semana',
    classes: 5,
    price: 600,
    regularPrice: 600,
    description: 'Cinco clases, de lunes a viernes, en tu horario principal.',
  },
  {
    id: 'four-weeks-20',
    name: '4 semanas',
    classes: 20,
    price: 1900,
    regularPrice: 2400,
    description: 'Veinte clases para avanzar con constancia durante 4 semanas.',
  },
  {
    id: 'complete-80',
    name: 'Curso completo',
    classes: 80,
    price: 7000,
    regularPrice: 9600,
    description: 'Las 16 semanas completas en un mismo horario principal.',
  },
] as const;

const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2'];

function getPackageIdFromQuery(): string | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const paquete = params.get('paquete');
  if (!paquete) return null;

  const match = PACKAGES.find(
    (item) => item.id === paquete || String(item.classes) === paquete,
  );

  return match?.id ?? null;
}

function classesLabel(count: number) {
  return count === 1 ? 'clase' : 'clases';
}

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-DO', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatTime(value: string) {
  const [hours, minutes] = value.split(':').map(Number);
  const time = new Date(Date.UTC(2026, 0, 1, hours, minutes));

  return new Intl.DateTimeFormat('es-DO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(time);
}

function PaymentRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;

  return (
    <div className={styles.paymentRow}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function GroupClassPackages({
  paymentDetails,
  isLoggedIn,
  daysUntilStart,
}: GroupClassPackagesProps) {
  const supabase = useMemo(() => createClient(), []);

  const [pendingScheduleId, setPendingScheduleId] = useState<string | null>(
    () => (isLoggedIn ? (readPendingSelection()?.scheduleId ?? null) : null),
  );
  const [selectedPackageId, setSelectedPackageId] = useState<string>(() => {
    if (isLoggedIn) {
      const pendingPackageId = readPendingSelection()?.packageId;
      if (pendingPackageId) return pendingPackageId;
    }

    return getPackageIdFromQuery() ?? 'four-weeks-20';
  });
  const [schedules, setSchedules] = useState<ScheduleOption[]>([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState('');
  const [isLoadingSchedules, setIsLoadingSchedules] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [submittedRequestId, setSubmittedRequestId] = useState('');
  const [isUploadingReceipt, setIsUploadingReceipt] = useState(false);
  const [receiptUploadStatus, setReceiptUploadStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [receiptUploadMessage, setReceiptUploadMessage] = useState('');

  const selectedPackage =
    PACKAGES.find((item) => item.id === selectedPackageId) ?? PACKAGES[1];

  const selectedSchedule = schedules.find(
    (schedule) => schedule.schedule_id === selectedScheduleId,
  );

  useEffect(() => {
    async function loadSchedules() {
      setIsLoadingSchedules(true);
      setSelectedScheduleId('');
      setError('');
      setSuccess('');

      const { data, error: scheduleError } = await supabase.rpc(
        'get_group_package_schedule_options',
        { p_classes: selectedPackage.classes },
      );

      if (scheduleError) {
        setSchedules([]);
        setError('No pudimos cargar los horarios disponibles.');
      } else {
        const loadedSchedules = (data ?? []) as ScheduleOption[];
        setSchedules(loadedSchedules);

        if (
          pendingScheduleId &&
          loadedSchedules.some(
            (schedule) => schedule.schedule_id === pendingScheduleId,
          )
        ) {
          setSelectedScheduleId(pendingScheduleId);
          setSuccess(
            '¡Bienvenido de vuelta! Restauramos el horario que habías elegido, confírmalo abajo.',
          );
        }

        setPendingScheduleId(null);
        clearPendingSelection();
      }

      setIsLoadingSchedules(false);
    }

    void loadSchedules();
    // pendingScheduleId is intentionally excluded: it should only be
    // applied once, right after the schedules for the restored package load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPackage.classes, supabase]);

  const schedulesByLevel = LEVEL_ORDER.map((level) => ({
    level,
    schedules: schedules.filter((schedule) => schedule.level === level),
  })).filter((group) => group.schedules.length > 0);

  async function handlePurchaseRequest() {
    if (!selectedSchedule || isSubmitting) return;

    if (!hasAcceptedTerms) {
      setError('Debes aceptar los Términos y condiciones para continuar.');
      return;
    }

    if (!isLoggedIn) {
      savePendingSelection({
        packageId: selectedPackageId,
        scheduleId: selectedSchedule.schedule_id,
      });

      try {
        window.localStorage.setItem(RECORDING_CONSENT_PENDING_KEY, '1');
      } catch {
        // Ignore — the /inicio banner will still catch this on first login.
      }

      window.location.href = `/registro?next=${encodeURIComponent(
        '/clases-grupales#comprar',
      )}`;
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    const { data, error: requestError } = await supabase.rpc(
      'create_group_class_purchase_request',
      {
        p_schedule_id: selectedSchedule.schedule_id,
        p_classes: selectedPackage.classes,
      },
    );

    if (requestError) {
      setError(requestError.message);
      setIsSubmitting(false);
      return;
    }

    // Best-effort: this schedule requires accepting the recording notice,
    // so record consent now for logged-in users too (not just the /inicio
    // banner path for pre-existing accounts).
    void supabase.rpc('record_recording_consent');

    const requestId = String(data);
    setSuccess(
      'Tu horario quedó apartado por 2 horas. Envía el comprobante para que Lau pueda aprobarlo.',
    );

    if (paymentDetails.paymentEmail) {
      const subject = encodeURIComponent(
        `Comprobante ${requestId}: ${selectedPackage.classes} ${classesLabel(selectedPackage.classes)}`,
      );
      const body = encodeURIComponent(
        [
          'Hola, Lau:',
          '',
          `Solicitud: ${requestId}`,
          `Paquete: ${selectedPackage.name} (${selectedPackage.classes} ${classesLabel(selectedPackage.classes)})`,
          `Monto: RD$${formatMoney(selectedPackage.price)}`,
          `Nivel: ${selectedSchedule.level.toUpperCase()}`,
          `Horario: ${selectedSchedule.label}, ${formatTime(selectedSchedule.starts_at)}–${formatTime(selectedSchedule.ends_at)}`,
          'Inicio: 14 de septiembre de 2026',
          '',
          'Adjunto mi comprobante de pago.',
        ].join('\n'),
      );

      window.location.href = `mailto:${paymentDetails.paymentEmail}?subject=${subject}&body=${body}`;
    }

    setSubmittedRequestId(requestId);
    setIsSubmitting(false);
  }

  async function handleReceiptUpload(file: File) {
    if (!submittedRequestId || isUploadingReceipt) return;

    setIsUploadingReceipt(true);
    setReceiptUploadStatus('idle');
    setReceiptUploadMessage('');

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsUploadingReceipt(false);
      setReceiptUploadStatus('error');
      setReceiptUploadMessage('Tu sesión terminó. Inicia sesión nuevamente.');
      return;
    }

    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const path = `${user.id}/${submittedRequestId}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from('payment-receipts')
      .upload(path, file, { upsert: true });

    if (uploadError) {
      setIsUploadingReceipt(false);
      setReceiptUploadStatus('error');
      setReceiptUploadMessage('No pudimos subir el comprobante. Inténtalo de nuevo.');
      return;
    }

    const { error: attachError } = await supabase.rpc('attach_payment_receipt', {
      p_request_id: submittedRequestId,
      p_receipt_path: path,
    });

    setIsUploadingReceipt(false);

    if (attachError) {
      setReceiptUploadStatus('error');
      setReceiptUploadMessage('Subimos el archivo, pero no pudimos vincularlo a tu solicitud.');
      return;
    }

    setReceiptUploadStatus('success');
    setReceiptUploadMessage('¡Comprobante recibido! Lau lo revisará pronto.');
  }

  return (
    <section id="comprar" className={styles.section} aria-labelledby="packages-title">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>
          {daysUntilStart > 0
            ? `FALTAN ${daysUntilStart} DÍA${daysUntilStart === 1 ? '' : 'S'} PARA EL INICIO`
            : 'INSCRIPCIÓN · 14 DE SEPTIEMBRE'}
        </p>
        <h2 id="packages-title">Primero elige tu paquete y tu horario</h2>
        <p>
          Todas las clases comienzan el 14 de septiembre de 2026. Tu horario
          principal quedará reservado, pero podrás cambiar una fecha por otro
          nivel u horario disponible cuando quieras explorar.
        </p>
      </div>

      <div className={styles.packageGrid} role="radiogroup" aria-label="Paquetes">
        {PACKAGES.map((item) => {
          const isSelected = item.id === selectedPackage.id;
          const savings = item.regularPrice - item.price;

          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`${styles.packageCard} ${
                isSelected ? styles.packageCardSelected : ''
              } ${item.id === 'complete-80' ? styles.bestValueCard : ''}`}
              onClick={() => setSelectedPackageId(item.id)}
            >
              {item.id === 'complete-80' ? (
                <span className={styles.bestValueBadge}>MEJOR VALOR</span>
              ) : null}
              {savings > 0 ? (
                <span className={styles.savingsBadge}>
                  Ahorra RD${formatMoney(savings)}
                </span>
              ) : null}
              <span className={styles.packageName}>{item.name}</span>
              <strong className={styles.classCount}>
                {item.classes} {classesLabel(item.classes)}
              </strong>
              <span className={styles.packagePrice}>
                <small>RD$</small>{formatMoney(item.price)}
              </span>
              <span className={styles.perClass}>
                RD${formatMoney(item.price / item.classes)} por clase
              </span>
              <span className={styles.packageDescription}>{item.description}</span>
              <span className={styles.selectLabel}>
                {isSelected ? 'Paquete seleccionado' : 'Elegir este paquete'}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.scheduleSection}>
        <div className={styles.scheduleHeading}>
          <p className={styles.eyebrow}>HORARIO PRINCIPAL</p>
          <h3>Ahora escoge dónde guardar tu cupo</h3>
          <p>Máximo 10 estudiantes por clase.</p>
        </div>

        {isLoadingSchedules ? (
          <p className={styles.statusText}>Cargando horarios…</p>
        ) : (
          <div className={styles.levelGroups}>
            {schedulesByLevel.map((group) => (
              <div key={group.level} className={styles.levelGroup}>
                <h4>{group.level.toUpperCase()}</h4>
                <div className={styles.scheduleGrid}>
                  {group.schedules.map((schedule) => {
                    const isSelected =
                      schedule.schedule_id === selectedScheduleId;
                    const isFull = Number(schedule.spots_remaining) <= 0;

                    return (
                      <button
                        key={schedule.schedule_id}
                        type="button"
                        disabled={isFull}
                        aria-pressed={isSelected}
                        className={`${styles.scheduleCard} ${
                          isSelected ? styles.scheduleCardSelected : ''
                        }`}
                        onClick={() => setSelectedScheduleId(schedule.schedule_id)}
                      >
                        <span>
                          <strong>{schedule.label}</strong>
                          <small>
                            {formatTime(schedule.starts_at)}–{formatTime(schedule.ends_at)}
                          </small>
                        </span>
                        <em>
                          {isFull
                            ? 'Sin cupos'
                            : `${schedule.spots_remaining} de 10 disponibles`}
                        </em>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className={styles.levelGroup}>
              <h4>C1</h4>
              <div className={styles.scheduleGrid}>
                <div className={styles.scheduleCardComingSoon}>
                  <span>
                    <strong>Grupo C1</strong>
                    <small>Horario por anunciar</small>
                  </span>
                  <em>Próximamente</em>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.purchasePanel}>
        <div className={styles.purchaseSummary}>
          <p>RESUMEN</p>
          <h3>{selectedPackage.name}</h3>
          <span>
            {selectedPackage.classes} {classesLabel(selectedPackage.classes)} · RD${formatMoney(selectedPackage.price)}
          </span>
          <strong>
            {selectedSchedule
              ? `${selectedSchedule.level.toUpperCase()} · ${selectedSchedule.label} · ${formatTime(selectedSchedule.starts_at)}–${formatTime(selectedSchedule.ends_at)}`
              : 'Selecciona un horario para continuar.'}
          </strong>
        </div>

        <div className={styles.paymentCard}>
          <p className={styles.eyebrow}>DATOS PARA EL PAGO</p>
          <h3>Realiza la transferencia</h3>
          <p className={styles.paymentIntro}>
            Transfiere exactamente RD${formatMoney(selectedPackage.price)}.
            Al continuar, tu horario se apartará durante 2 horas.
          </p>

          <dl className={styles.paymentDetails}>
            <PaymentRow label="Banco" value={paymentDetails.bankName} />
            <PaymentRow label="Titular" value={paymentDetails.accountHolder} />
            <PaymentRow label="Cédula" value={paymentDetails.idDocument} />
            <PaymentRow label="Tipo de cuenta" value={paymentDetails.productType} />
            <PaymentRow label="Número de cuenta" value={paymentDetails.accountNumber} />
            <PaymentRow label="Moneda" value={paymentDetails.currency} />
            <PaymentRow label="Código SWIFT" value={paymentDetails.swiftCode} />
          </dl>

          <label className={styles.consentCheckbox}>
            <input
              type="checkbox"
              checked={hasAcceptedTerms}
              onChange={(event) => setHasAcceptedTerms(event.target.checked)}
            />
            <span>
              He leído y acepto los{' '}
              <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
                Términos y condiciones
              </a>
              , incluyendo que mis clases en vivo podrían grabarse con fines
              educativos (solo audio, nunca video).
            </span>
          </label>

          <button
            type="button"
            className={styles.emailButton}
            disabled={!selectedSchedule || isSubmitting || !hasAcceptedTerms}
            onClick={handlePurchaseRequest}
          >
            {isSubmitting
              ? 'Guardando solicitud…'
              : isLoggedIn
                ? 'Apartar horario y enviar comprobante'
                : 'Crear cuenta y apartar este horario'}
          </button>

          {!isLoggedIn ? (
            <p className={styles.statusText}>
              Guardaremos tu paquete y horario elegidos. Solo te pedimos
              crear una cuenta para confirmarlos.
            </p>
          ) : null}

          {error ? <p className={styles.errorMessage} role="alert">{error}</p> : null}
          {success ? <p className={styles.successMessage} role="status">{success}</p> : null}

          {submittedRequestId ? (
            <div className={styles.receiptUpload}>
              <p className={styles.receiptUploadLabel}>Sube tu comprobante aquí</p>
              <input
                type="file"
                accept="image/*,application/pdf"
                disabled={isUploadingReceipt || receiptUploadStatus === 'success'}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) void handleReceiptUpload(file);
                }}
              />
              <p className={styles.statusText}>
                O envíame el comprobante por correo desde el botón de abajo si prefieres.
              </p>
              {receiptUploadMessage ? (
                <p
                  className={
                    receiptUploadStatus === 'error' ? styles.errorMessage : styles.successMessage
                  }
                  role={receiptUploadStatus === 'error' ? 'alert' : 'status'}
                >
                  {receiptUploadMessage}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
