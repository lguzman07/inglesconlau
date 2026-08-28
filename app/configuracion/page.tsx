'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeControls from '@/components/ThemeControls/ThemeControls';
import { createClient } from '@/lib/supabase/client';
import styles from './page.module.css';

type ProfileForm = {
  full_name: string;
  birth_date: string;
  country: string;
  gender: string;
  english_level: string;
  learning_goal: string;
  english_pronunciation: string;
  translation_display: string;
};

type SubscriptionInfo = {
  status: string;
  current_period_end: string | null;
};

type PurchaseRequestSummary = {
  request_id: string;
  package_name: string;
  package_classes: number;
  price_dop: number;
  status: string;
  created_at: string;
  receipt_path: string | null;
  receipt_uploaded_at: string | null;
};

const PURCHASE_STATUS_LABELS: Record<string, string> = {
  pending_payment: 'Pendiente de pago',
  pending_review: 'En revisión',
  confirmed: 'Confirmado',
  rejected: 'Rechazado',
  cancelled: 'Cancelado',
};

function formatMoney(value: number) {
  return new Intl.NumberFormat('es-DO').format(value);
}

function maskEmail(value: string) {
  const [local, domain] = value.split('@');
  if (!local || !domain) return value;

  const visible = local.slice(0, 2);
  return `${visible}${'.'.repeat(Math.max(local.length - 2, 3))}@${domain}`;
}

function formatConsentDate(value: string | null) {
  if (!value) return null;

  return new Intl.DateTimeFormat('es-DO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Santo_Domingo',
  }).format(new Date(value));
}

const EMPTY_PROFILE: ProfileForm = {
  full_name: '',
  birth_date: '',
  country: '',
  gender: '',
  english_level: '',
  learning_goal: '',
  english_pronunciation: 'american',
  translation_display: 'hover',
};

const GENDERS = [
  'Femenino',
  'Masculino',
  'Prefiero no decirlo',
];

const ENGLISH_LEVELS = [
  'A1',
  'A2',
  'B1',
  'B2',
  'C1',
  'No lo sé',
];

const LEARNING_GOALS = [
  'Conversar con confianza',
  'Conseguir empleo o crecer profesionalmente',
  'Viajar y comunicarme con facilidad',
  'Estudiar o prepararme académicamente',
  'Mejorar mi inglés general',
];

const ENGLISH_PRONUNCIATION_OPTIONS = [
  {
    value: 'american',
    label: 'American English',
    description: 'Usa la voz principal en inglés.',
  },
  {
    value: 'british',
    label: 'British English',
    description: 'Usa la voz británica de ElevenLabs.',
  },
];

const TRANSLATION_DISPLAY_OPTIONS = [
  {
    value: 'always',
    label: 'Siempre visibles',
  },
  {
    value: 'hover',
    label: 'Al pasar el cursor',
  },
  {
    value: 'hidden',
    label: 'Ocultas',
  },
];

const MAXIMUM_BIRTH_DATE = (() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date.toISOString().slice(0, 10);
})();

function formatSubscriptionDate(value: string | null) {
  if (!value) return 'No disponible';

  return new Intl.DateTimeFormat('es-DO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Santo_Domingo',
  }).format(new Date(value));
}

export default function ConfiguracionPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [profile, setProfile] =
    useState<ProfileForm>(EMPTY_PROFILE);

  const [subscription, setSubscription] =
    useState<SubscriptionInfo | null>(null);

  const [recordingConsentAt, setRecordingConsentAt] =
    useState<string | null>(null);

  const [purchaseRequests, setPurchaseRequests] =
    useState<PurchaseRequestSummary[]>([]);

  const [loadingReceiptId, setLoadingReceiptId] =
    useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [newEmail, setNewEmail] = useState('');
  const [isEmailFormOpen, setIsEmailFormOpen] =
    useState(false);

  const [isChangingEmail, setIsChangingEmail] =
    useState(false);

  const [
    isSendingPasswordEmail,
    setIsSendingPasswordEmail,
  ] = useState(false);

  const [profileMessage, setProfileMessage] =
    useState('');

  const [emailMessage, setEmailMessage] =
    useState('');

  const [securityMessage, setSecurityMessage] =
    useState('');

  useEffect(() => {
    async function loadSettings() {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace('/iniciar-sesion');
        return;
      }

      setEmail(user.email ?? '');

      const [
        profileResult,
        subscriptionResult,
        purchaseRequestsResult,
      ] = await Promise.all([
        supabase
          .from('profiles')
          .select(
            `
              full_name,
              birth_date,
              country,
              gender,
              english_level,
              learning_goal,
              english_pronunciation,
              translation_display,
              recording_consent_at
            `,
          )
          .eq('id', user.id)
          .maybeSingle(),

        supabase
          .from('subscriptions')
          .select(
            'status, current_period_end',
          )
          .eq('user_id', user.id)
          .maybeSingle(),

        supabase.rpc('list_my_purchase_requests'),
      ]);

      if (profileResult.data) {
        setProfile({
          full_name:
            profileResult.data.full_name ?? '',

          birth_date:
            profileResult.data.birth_date ?? '',

          country:
            profileResult.data.country ?? '',

          gender:
            profileResult.data.gender ?? '',

          english_level:
            profileResult.data.english_level ?? '',

          learning_goal:
            profileResult.data.learning_goal ?? '',

          english_pronunciation:
            profileResult.data
              .english_pronunciation ??
            'american',

          translation_display:
            profileResult.data
              .translation_display ??
            'hover',
        });
      }

      if (subscriptionResult.data) {
        setSubscription(
          subscriptionResult.data,
        );
      }

      setRecordingConsentAt(
        profileResult.data?.recording_consent_at ?? null,
      );

      setPurchaseRequests(
        (purchaseRequestsResult.data ?? []) as PurchaseRequestSummary[],
      );

      setIsLoading(false);
    }

    void loadSettings();
  }, [router]);

  function updateProfileField(
    field: keyof ProfileForm,
    value: string,
  ) {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));

    setProfileMessage('');
  }

  async function handleSaveProfile(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setProfileMessage('');

    if (
      !profile.full_name.trim() ||
      !profile.birth_date ||
      !profile.country.trim() ||
      !profile.gender ||
      !profile.english_level ||
      !profile.learning_goal ||
      !profile.english_pronunciation ||
      !profile.translation_display
    ) {
      setProfileMessage(
        'Completa todos los campos del perfil.',
      );

      return;
    }

    if (
      profile.birth_date >
      MAXIMUM_BIRTH_DATE
    ) {
      setProfileMessage(
        'Debes tener al menos 18 años.',
      );

      return;
    }

    setIsSaving(true);

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setProfileMessage(
        'Tu sesión terminó. Inicia sesión nuevamente.',
      );

      setIsSaving(false);
      return;
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name:
          profile.full_name.trim(),

        birth_date:
          profile.birth_date,

        country:
          profile.country.trim(),

        gender:
          profile.gender,

        english_level:
          profile.english_level,

        learning_goal:
          profile.learning_goal,

        english_pronunciation:
          profile.english_pronunciation,

        translation_display:
          profile.translation_display,
      })
      .eq('id', user.id);

    setIsSaving(false);

    if (error) {
      setProfileMessage(
        'No pudimos guardar los cambios del perfil.',
      );

      return;
    }

    setProfile((current) => ({
      ...current,
      full_name:
        current.full_name.trim(),
      country:
        current.country.trim(),
    }));

    setProfileMessage(
      'Tu configuración se actualizó correctamente.',
    );
  }

  async function handleViewReceipt(
    requestId: string,
    receiptPath: string,
  ) {
    if (loadingReceiptId) return;

    setLoadingReceiptId(requestId);

    const supabase = createClient();

    const { data, error } = await supabase.storage
      .from('payment-receipts')
      .createSignedUrl(receiptPath, 120);

    setLoadingReceiptId(null);

    if (error || !data?.signedUrl) {
      setSecurityMessage('No pudimos abrir el comprobante. Inténtalo de nuevo.');
      return;
    }

    window.open(data.signedUrl, '_blank', 'noopener,noreferrer');
  }

  async function handlePasswordReset() {
    if (
      !email ||
      isSendingPasswordEmail
    ) {
      return;
    }

    setIsSendingPasswordEmail(true);
    setSecurityMessage('');

    const supabase = createClient();

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            `${window.location.origin}/restablecer-contrasena`,
        },
      );

    setIsSendingPasswordEmail(false);

    if (error) {
      setSecurityMessage(
        'No pudimos enviar el correo para cambiar la contraseña.',
      );

      return;
    }

    setSecurityMessage(
      'Te enviamos un correo para cambiar tu contraseña.',
    );
  }

  async function handleEmailChange(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedEmail =
      newEmail.trim().toLowerCase();

    setEmailMessage('');

    if (!normalizedEmail) {
      setEmailMessage(
        'Escribe el correo electrónico nuevo.',
      );

      return;
    }

    if (
      normalizedEmail ===
      email.trim().toLowerCase()
    ) {
      setEmailMessage(
        'Ese ya es el correo electrónico de tu cuenta.',
      );

      return;
    }

    setIsChangingEmail(true);

    const supabase = createClient();

    const { error } =
      await supabase.auth.updateUser(
        {
          email: normalizedEmail,
        },
        {
          emailRedirectTo:
            `${window.location.origin}/auth/callback?next=/configuracion`,
        },
      );

    setIsChangingEmail(false);

    if (error) {
      setEmailMessage(
        'No pudimos solicitar el cambio de correo. Inténtalo nuevamente.',
      );

      return;
    }

    setNewEmail('');

    setEmailMessage(
      'Revisa tu correo actual y el correo nuevo. El cambio se completará cuando confirmes los mensajes enviados por Supabase.',
    );
  }

  if (isLoading) {
    return (
      <main className={styles.page}>
        <p className={styles.loading}>
          Cargando tu configuración...
        </p>
      </main>
    );
  }

  const subscriptionIsActive =
    subscription?.status === 'active';

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              TU CUENTA
            </p>

            <h1>Configuración</h1>

            <p>
              Administra tu perfil,
              visualización, aprendizaje,
              suscripción y seguridad.
            </p>
          </div>

          <Link
            href="/inicio"
            className={styles.backLink}
          >
            ← Volver al inicio
          </Link>
        </header>

        <nav
          className={
            styles.sectionNavigation
          }
          aria-label="Configuración"
        >
          <a href="#perfil">
            Perfil
          </a>

          <a href="#visualizacion">
            Visualización
          </a>

          <a href="#aprendizaje">
            Aprendizaje
          </a>

          <a href="#suscripcion">
            Suscripción
          </a>

          <a href="#pago">
            Pago
          </a>

          <a href="#comprobantes">
            Comprobantes
          </a>

          <a href="#seguridad">
            Seguridad
          </a>
        </nav>

        <section
          id="perfil"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                PERFIL
              </p>

              <h2>
                Información personal
              </h2>
            </div>

            <span
              className={
                styles.statusBadge
              }
            >
              Editable
            </span>
          </div>

          <form
            className={styles.form}
            onSubmit={
              handleSaveProfile
            }
          >
            <div
              className={styles.fieldGrid}
            >
              <label
                className={styles.field}
              >
                <span>
                  Nombre completo
                </span>

                <input
                  type="text"
                  value={
                    profile.full_name
                  }
                  onChange={(event) =>
                    updateProfileField(
                      'full_name',
                      event.target.value,
                    )
                  }
                  autoComplete="name"
                  required
                />
              </label>

              <label
                className={styles.field}
              >
                <span>
                  Correo electrónico
                </span>

                <input
                  type="email"
                  value={email}
                  disabled
                />
              </label>

              <label
                className={styles.field}
              >
                <span>
                  Fecha de nacimiento
                </span>

                <input
                  type="date"
                  value={
                    profile.birth_date
                  }
                  max={
                    MAXIMUM_BIRTH_DATE
                  }
                  onChange={(event) =>
                    updateProfileField(
                      'birth_date',
                      event.target.value,
                    )
                  }
                  required
                />
              </label>

              <label
                className={styles.field}
              >
                <span>País</span>

                <input
                  type="text"
                  value={
                    profile.country
                  }
                  onChange={(event) =>
                    updateProfileField(
                      'country',
                      event.target.value,
                    )
                  }
                  autoComplete="country-name"
                  required
                />
              </label>

              <label
                className={styles.field}
              >
                <span>Género</span>

                <select
                  value={
                    profile.gender
                  }
                  onChange={(event) =>
                    updateProfileField(
                      'gender',
                      event.target.value,
                    )
                  }
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Selecciona una opción
                  </option>

                  {GENDERS.map(
                    (gender) => (
                      <option
                        value={gender}
                        key={gender}
                      >
                        {gender}
                      </option>
                    ),
                  )}
                </select>
              </label>

              <label
                className={styles.field}
              >
                <span>
                  Nivel de inglés
                </span>

                <select
                  value={
                    profile.english_level
                  }
                  onChange={(event) =>
                    updateProfileField(
                      'english_level',
                      event.target.value,
                    )
                  }
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Selecciona tu nivel
                  </option>

                  {ENGLISH_LEVELS.map(
                    (level) => (
                      <option
                        value={level}
                        key={level}
                      >
                        {level}
                      </option>
                    ),
                  )}
                </select>
              </label>
            </div>

            <label
              className={styles.field}
            >
              <span>
                Objetivo principal
              </span>

              <select
                value={
                  profile.learning_goal
                }
                onChange={(event) =>
                  updateProfileField(
                    'learning_goal',
                    event.target.value,
                  )
                }
                required
              >
                <option
                  value=""
                  disabled
                >
                  Selecciona tu objetivo
                </option>

                {LEARNING_GOALS.map(
                  (goal) => (
                    <option
                      value={goal}
                      key={goal}
                    >
                      {goal}
                    </option>
                  ),
                )}
              </select>
            </label>

            {profileMessage && (
              <p
                className={styles.message}
                role="status"
              >
                {profileMessage}
              </p>
            )}

            <button
              type="submit"
              className={
                styles.primaryButton
              }
              disabled={isSaving}
            >
              {isSaving
                ? 'Guardando...'
                : 'Guardar cambios'}
            </button>
          </form>
        </section>

        <section
          id="visualizacion"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                VISUALIZACIÓN
              </p>

              <h2>
                Apariencia predeterminada
              </h2>
            </div>

            <span
              className={
                styles.statusBadge
              }
            >
              Sincronizada
            </span>
          </div>

          <p
            className={
              styles.cardDescription
            }
          >
            La opción que selecciones se
            guardará en tu cuenta y se
            aplicará cuando inicies sesión
            desde otro dispositivo.
          </p>

          <div
            className={
              styles.themeControlWrapper
            }
          >
            <ThemeControls />
          </div>
        </section>

        <section
          id="aprendizaje"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                APRENDIZAJE
              </p>

              <h2>
                Traducciones y pronunciación
              </h2>
            </div>

            <span
              className={
                styles.statusBadge
              }
            >
              Personalizable
            </span>
          </div>

          <p
            className={
              styles.cardDescription
            }
          >
            Decide cómo quieres consultar
            las traducciones al español y
            qué pronunciación quieres
            escuchar en los audios en
            inglés.
          </p>

          <form
            className={styles.form}
            onSubmit={
              handleSaveProfile
            }
          >
            <label
              className={styles.field}
            >
              <span>
                Traducciones al español
              </span>

              <select
                value={
                  profile.translation_display
                }
                onChange={(event) =>
                  updateProfileField(
                    'translation_display',
                    event.target.value,
                  )
                }
                required
              >
                {TRANSLATION_DISPLAY_OPTIONS.map(
                  (option) => (
                    <option
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option>
                  ),
                )}
              </select>
            </label>

            <p
              className={
                styles.pendingNote
              }
            >
              “Al pasar el cursor” mantiene
              el contenido en inglés y
              muestra el español cuando
              colocas el cursor sobre el
              texto. Esta opción controla
              solamente el texto, no el
              audio.
            </p>

            <label
              className={styles.field}
            >
              <span>
                Pronunciación en inglés
              </span>

              <select
                value={
                  profile.english_pronunciation
                }
                onChange={(event) =>
                  updateProfileField(
                    'english_pronunciation',
                    event.target.value,
                  )
                }
                required
              >
                {ENGLISH_PRONUNCIATION_OPTIONS.map(
                  (option) => (
                    <option
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option>
                  ),
                )}
              </select>
            </label>

            <p
              className={
                styles.pendingNote
              }
            >
              Usa la pronunciación que
              prefieras cuando escuches las
              oraciones en inglés.
            </p>

            {profileMessage && (
              <p
                className={styles.message}
                role="status"
              >
                {profileMessage}
              </p>
            )}

            <button
              type="submit"
              className={
                styles.primaryButton
              }
              disabled={isSaving}
            >
              {isSaving
                ? 'Guardando...'
                : 'Guardar preferencias'}
            </button>
          </form>
        </section>

        <section
          id="suscripcion"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                SUSCRIPCIÓN
              </p>

              <h2>
                Plan Inglés con Lau
              </h2>
            </div>

            <span
              className={`${
                styles.subscriptionBadge
              } ${
                subscriptionIsActive
                  ? styles.activeBadge
                  : styles.inactiveBadge
              }`}
            >
              {subscriptionIsActive
                ? 'Activa'
                : 'Inactiva'}
            </span>
          </div>

          <div
            className={
              styles.subscriptionDetails
            }
          >
            <div>
              <span>Precio</span>

              <strong>
                RD$1,200 al mes
              </strong>
            </div>

            {subscriptionIsActive && (
              <div>
                <span>
                  Próximo cobro
                </span>

                <strong>
                  {formatSubscriptionDate(
                    subscription?.current_period_end ??
                      null,
                  )}
                </strong>
              </div>
            )}
          </div>

          {subscriptionIsActive ? (
            <button
              type="button"
              className={
                styles.secondaryButton
              }
              disabled
            >
              Cancelar suscripción
            </button>
          ) : (
            <Link
              href="/plan"
              className={
                styles.primaryButton
              }
            >
              Empezar el plan
            </Link>
          )}

          <p
            className={
              styles.pendingNote
            }
          >
            La cancelación automática se
            habilitará al conectar Pagos
            Recurrentes de Azul. Hasta
            entonces este botón no realizará
            cambios.
          </p>
        </section>

        <section
          id="pago"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                MÉTODO DE PAGO
              </p>

              <h2>
                Tarjeta y facturación
              </h2>
            </div>

            <span
              className={
                styles.statusBadge
              }
            >
              Pendiente de Azul
            </span>
          </div>

          <p
            className={
              styles.cardDescription
            }
          >
            Los datos completos de la
            tarjeta nunca se guardarán en
            Inglés con Lau. Azul procesará y
            protegerá esa información.
          </p>

          <button
            type="button"
            className={
              styles.secondaryButton
            }
            disabled
          >
            Agregar o cambiar método de pago
          </button>
        </section>

        <section
          id="comprobantes"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                COMPROBANTES
              </p>

              <h2>
                Mis comprobantes de pago
              </h2>
            </div>
          </div>

          <p
            className={
              styles.cardDescription
            }
          >
            Aquí verás cada paquete que has solicitado y el comprobante que
            subiste para cada uno.
          </p>

          {purchaseRequests.length === 0 ? (
            <p className={styles.pendingNote}>
              Todavía no has solicitado ningún paquete.
            </p>
          ) : (
            <ul className={styles.purchaseList}>
              {purchaseRequests.map((request) => (
                <li
                  key={request.request_id}
                  className={styles.purchaseItem}
                >
                  <div>
                    <h3>
                      {request.package_name} ({request.package_classes} clases)
                    </h3>

                    <p>
                      RD${formatMoney(Number(request.price_dop))} ·{' '}
                      {new Intl.DateTimeFormat('es-DO', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        timeZone: 'America/Santo_Domingo',
                      }).format(new Date(request.created_at))}
                    </p>

                    <span
                      className={styles.statusBadge}
                    >
                      {PURCHASE_STATUS_LABELS[request.status] ?? request.status}
                    </span>
                  </div>

                  {request.receipt_path ? (
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      disabled={loadingReceiptId === request.request_id}
                      onClick={() =>
                        void handleViewReceipt(
                          request.request_id,
                          request.receipt_path as string,
                        )
                      }
                    >
                      {loadingReceiptId === request.request_id
                        ? 'Abriendo…'
                        : 'Ver comprobante'}
                    </button>
                  ) : (
                    <span className={styles.pendingNote}>
                      Sin comprobante subido
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section
          id="seguridad"
          className={styles.card}
        >
          <div
            className={
              styles.cardHeading
            }
          >
            <div>
              <p
                className={
                  styles.cardLabel
                }
              >
                SEGURIDAD
              </p>

              <h2>
                Contraseña y cuenta
              </h2>
            </div>
          </div>

          <div
            className={
              styles.securityAction
            }
          >
            <div>
              <h3>
                Grabación de clases en vivo
              </h3>

              <p>
                {recordingConsentAt
                  ? `Aceptaste este aviso el ${formatConsentDate(recordingConsentAt)}.`
                  : 'Aún no has aceptado el aviso de grabación de clases.'}
              </p>
            </div>

            {recordingConsentAt ? (
              <span className={styles.statusBadge}>
                Aceptado
              </span>
            ) : (
              <Link
                href="/inicio"
                className={styles.secondaryButton}
              >
                Revisar aviso
              </Link>
            )}
          </div>

          <div
            className={
              styles.securityAction
            }
          >
            <div>
              <h3>
                Cambiar correo electrónico
              </h3>

              <p>
                Tu correo actual es {maskEmail(email)}.
              </p>
            </div>

            <button
              type="button"
              className={
                styles.secondaryButton
              }
              onClick={() => {
                setIsEmailFormOpen(
                  (current) =>
                    !current,
                );

                setEmailMessage('');
                setNewEmail('');
              }}
              aria-expanded={
                isEmailFormOpen
              }
              aria-controls="email-change-form"
            >
              {isEmailFormOpen
                ? 'Cerrar'
                : 'Cambiar correo'}
            </button>
          </div>

          {isEmailFormOpen && (
            <form
              id="email-change-form"
              className={
                styles.emailChangeForm
              }
              onSubmit={
                handleEmailChange
              }
            >
              <label
                className={styles.field}
              >
                <span>
                  Correo electrónico nuevo
                </span>

                <input
                  type="email"
                  value={newEmail}
                  onChange={(event) => {
                    setNewEmail(
                      event.target.value,
                    );

                    setEmailMessage('');
                  }}
                  autoComplete="email"
                  placeholder="nuevo@ejemplo.com"
                  disabled={
                    isChangingEmail
                  }
                  required
                />
              </label>

              <button
                type="submit"
                className={
                  styles.primaryButton
                }
                disabled={
                  isChangingEmail
                }
              >
                {isChangingEmail
                  ? 'Enviando confirmación...'
                  : 'Confirmar correo nuevo'}
              </button>
            </form>
          )}

          {emailMessage && (
            <p
              className={styles.message}
              role="status"
            >
              {emailMessage}
            </p>
          )}

          <div
            className={
              styles.securityAction
            }
          >
            <div>
              <h3>
                Cambiar contraseña
              </h3>

              <p>
                Recibirás un enlace seguro
                en {maskEmail(email)}.
              </p>
            </div>

            <button
              type="button"
              className={
                styles.secondaryButton
              }
              onClick={() =>
                void handlePasswordReset()
              }
              disabled={
                isSendingPasswordEmail
              }
            >
              {isSendingPasswordEmail
                ? 'Enviando...'
                : 'Enviar enlace'}
            </button>
          </div>

          {securityMessage && (
            <p
              className={styles.message}
              role="status"
            >
              {securityMessage}
            </p>
          )}

          <div
            className={`${styles.securityAction} ${styles.dangerAction}`}
          >
            <div>
              <h3>
                Eliminar cuenta
              </h3>

              <p>
                Esta acción será permanente y
                requerirá verificar tu
                identidad.
              </p>
            </div>

            <button
              type="button"
              className={
                styles.dangerButton
              }
              disabled
            >
              Eliminar mi cuenta
            </button>
          </div>

          <p
            className={
              styles.pendingNote
            }
          >
            La eliminación se habilitará
            junto con la cancelación segura
            de la suscripción en Azul para
            impedir cobros después de borrar
            una cuenta.
          </p>
        </section>
      </div>
    </main>
  );
}