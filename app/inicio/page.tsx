'use client';

import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { getLessonTitle } from '@/content/lecciones/catalog';
import styles from './Inicio.module.css';

const TOTAL_LESSONS = 1037;

const LAST_LESSON_STORAGE_KEY =
  'inglesconlau-last-opened-lesson';

const LEVEL_ORDER = [
  'a0',
  'a1',
  'a2',
  'b1',
  'b1-plus',
  'b2',
  'c1',
];

type ClubSession = {
  id: string;
  starts_at: string;
  ends_at: string;
  max_readers: number;
};

function getValidLessonKey(value: string | null) {
  if (
    !value ||
    !/^[a-z0-9-]+\/\d+$/i.test(value)
  ) {
    return null;
  }

  return value.toLowerCase();
}

function compareLessonKeys(
  firstKey: string,
  secondKey: string,
) {
  const [firstLevel, firstLesson] =
    firstKey.split('/');

  const [secondLevel, secondLesson] =
    secondKey.split('/');

  const levelDifference =
    LEVEL_ORDER.indexOf(firstLevel) -
    LEVEL_ORDER.indexOf(secondLevel);

  if (levelDifference !== 0) {
    return levelDifference;
  }

  return Number(firstLesson) - Number(secondLesson);
}

function formatLessonLabel(lessonKey: string) {
  const [level, lessonNumber] = lessonKey.split('/');

  const number = Number(lessonNumber);

  return `${level.toUpperCase()} · ${getLessonTitle(
    level,
    number,
  )}`;
}

function getClubCountdown(
  startsAt: string,
  endsAt: string,
) {
  const now = Date.now();
  const startTime = new Date(startsAt).getTime();
  const endTime = new Date(endsAt).getTime();

  if (now >= startTime && now < endTime) {
    return 'En vivo ahora';
  }

  if (now >= endTime) {
    return 'Sesión finalizada';
  }

  const totalMinutes = Math.max(
    0,
    Math.floor((startTime - now) / 60000),
  );

  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor(
    (totalMinutes % 1440) / 60,
  );
  const minutes = totalMinutes % 60;

  if (days > 0) {
    return `Comienza en ${days} ${
      days === 1 ? 'día' : 'días'
    } y ${hours} h`;
  }

  if (hours > 0) {
    return `Comienza en ${hours} h y ${minutes} min`;
  }

  return `Comienza en ${minutes} min`;
}

function formatClubDate(startsAt: string) {
  const formattedDate = new Intl.DateTimeFormat(
    'es-DO',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: 'America/Santo_Domingo',
    },
  ).format(new Date(startsAt));

  return (
    formattedDate.charAt(0).toUpperCase() +
    formattedDate.slice(1)
  );
}

export default function InicioPage() {
  const pathname = usePathname();

  const [indicatedLevel, setIndicatedLevel] =
    useState('');

  const [studentName, setStudentName] =
    useState('');

  const [gender, setGender] = useState('');

  const [role, setRole] = useState('student');

  const [
    subscriptionStatus,
    setSubscriptionStatus,
  ] = useState('inactive');

  const [
    subscriptionEndsAt,
    setSubscriptionEndsAt,
  ] = useState<string | null>(null);

  const [readingClubDate, setReadingClubDate] =
    useState('Jueves');

  const [clubCountdown, setClubCountdown] =
    useState('Calculando...');

  const [
    availableReadingSlots,
    setAvailableReadingSlots,
  ] = useState<number | null>(null);

  const [clubSession, setClubSession] =
    useState<ClubSession | null>(null);

  const [
    readingReservationSlot,
    setReadingReservationSlot,
  ] = useState<number | null>(null);

  const [
    isCancellingReservation,
    setIsCancellingReservation,
  ] = useState(false);

  const [reservationError, setReservationError] =
    useState('');

  const [
    isOpeningLiveClass,
    setIsOpeningLiveClass,
  ] = useState(false);

  const [
    liveClassError,
    setLiveClassError,
  ] = useState('');

  const [isLoadingProfile, setIsLoadingProfile] =
    useState(true);

  const [completedLessons, setCompletedLessons] =
    useState(0);

  const [savedFlashcards, setSavedFlashcards] =
    useState(0);

  const [lastLessonKey, setLastLessonKey] =
    useState('a0/1');

  const [furthestLessonKey, setFurthestLessonKey] =
    useState('a0/1');

  useEffect(() => {
    function syncLastOpenedLesson() {
      const storedLessonKey = getValidLessonKey(
        window.localStorage.getItem(
          LAST_LESSON_STORAGE_KEY,
        ),
      );

      if (storedLessonKey) {
        setLastLessonKey(storedLessonKey);
      }
    }

    if (pathname === '/inicio') {
      syncLastOpenedLesson();
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        syncLastOpenedLesson();
      }
    }

    window.addEventListener(
      'focus',
      syncLastOpenedLesson,
    );

    window.addEventListener(
      'pageshow',
      syncLastOpenedLesson,
    );

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
    );

    return () => {
      window.removeEventListener(
        'focus',
        syncLastOpenedLesson,
      );

      window.removeEventListener(
        'pageshow',
        syncLastOpenedLesson,
      );

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      );
    };
  }, [pathname]);

  const loadReadingAvailability =
    useCallback(async () => {
      const supabase = createClient();

      const { data: session } = await supabase
        .from('club_sessions')
        .select(
          'id, starts_at, ends_at, max_readers',
        )
        .eq('is_published', true)
        .gte('ends_at', new Date().toISOString())
        .order('starts_at', {
          ascending: true,
        })
        .limit(1)
        .maybeSingle();

      if (!session) {
        setClubSession(null);
        setAvailableReadingSlots(null);
        setReadingReservationSlot(null);
        setReadingClubDate('Próxima sesión');
        setClubCountdown('No hay sesión programada');
        return;
      }

      const currentSession =
        session as ClubSession;

      setClubSession(currentSession);
      setReadingClubDate(
        formatClubDate(currentSession.starts_at),
      );
      setClubCountdown(
        getClubCountdown(
          currentSession.starts_at,
          currentSession.ends_at,
        ),
      );

      const {
        data: { user },
      } = await supabase.auth.getUser();

      const [
        { count: reservedTurns },
        { data: reservation },
      ] = await Promise.all([
        supabase
          .from('reading_reservations')
          .select('id', {
            count: 'exact',
            head: true,
          })
          .eq('session_id', currentSession.id)
          .eq('status', 'reserved'),

        user
          ? supabase
              .from('reading_reservations')
              .select('slot_number')
              .eq(
                'session_id',
                currentSession.id,
              )
              .eq('user_id', user.id)
              .eq('status', 'reserved')
              .maybeSingle()
          : Promise.resolve({ data: null }),
      ]);

      const takenTurns = reservedTurns ?? 0;

      setAvailableReadingSlots(
        Math.max(
          currentSession.max_readers - takenTurns,
          0,
        ),
      );

      setReadingReservationSlot(
        reservation?.slot_number ?? null,
      );
    }, []);

  useEffect(() => {
    void loadReadingAvailability();
  }, [loadReadingAvailability]);

  useEffect(() => {
    if (!clubSession) return;

    function updateCountdown() {
      setClubCountdown(
        getClubCountdown(
          clubSession.starts_at,
          clubSession.ends_at,
        ),
      );
    }

    updateCountdown();

    const intervalId = window.setInterval(
      updateCountdown,
      60000,
    );

    return () =>
      window.clearInterval(intervalId);
  }, [clubSession]);

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoadingProfile(false);
        return;
      }

      const { data: profile } =
        await supabase
          .from('profiles')
          .select(
            'english_level, gender, role',
          )
          .eq('id', user.id)
          .maybeSingle();

      if (profile?.english_level) {
        setIndicatedLevel(
          profile.english_level,
        );
      }

      if (profile?.gender) {
        setGender(profile.gender);
      }

      if (profile?.role) {
        setRole(profile.role);
      }

      const accountName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.user_metadata?.first_name ||
        '';

      if (typeof accountName === 'string') {
        setStudentName(
          accountName
            .trim()
            .split(/\s+/)[0] || '',
        );
      }

      const { data: subscription } =
        await supabase
          .from('subscriptions')
          .select(
            'status, current_period_end',
          )
          .eq('user_id', user.id)
          .maybeSingle();

      const {
        count: completedLessonsCount,
      } = await supabase
        .from('lesson_progress')
        .select('lesson_key', {
          count: 'exact',
          head: true,
        })
        .eq('user_id', user.id)
        .eq('is_completed', true);

      setCompletedLessons(
        completedLessonsCount ?? 0,
      );

      const {
        count: savedFlashcardsCount,
      } = await supabase
        .from('user_flashcards')
        .select('id', {
          count: 'exact',
          head: true,
        })
        .eq('user_id', user.id);

      setSavedFlashcards(
        savedFlashcardsCount ?? 0,
      );

      const { data: openedLessons } =
        await supabase
          .from('lesson_progress')
          .select('lesson_key')
          .eq('user_id', user.id);

      const furthestLesson = (
        openedLessons ?? []
      )
        .map((item) =>
          getValidLessonKey(item.lesson_key),
        )
        .filter(
          (
            lessonKey,
          ): lessonKey is string =>
            lessonKey !== null,
        )
        .sort(compareLessonKeys)
        .at(-1);

      setFurthestLessonKey(
        furthestLesson ?? 'a0/1',
      );

      const { data: lastOpenedLesson } =
        await supabase
          .from('lesson_progress')
          .select('lesson_key')
          .eq('user_id', user.id)
          .order('updated_at', {
            ascending: false,
          })
          .limit(1)
          .maybeSingle();

      const databaseLessonKey =
        getValidLessonKey(
          lastOpenedLesson?.lesson_key ??
            null,
        );

      const storedLessonKey =
        getValidLessonKey(
          window.localStorage.getItem(
            LAST_LESSON_STORAGE_KEY,
          ),
        );

      setLastLessonKey(
        storedLessonKey ??
          databaseLessonKey ??
          'a0/1',
      );

      if (subscription?.status) {
        setSubscriptionStatus(
          subscription.status,
        );

        setSubscriptionEndsAt(
          subscription.current_period_end,
        );
      }

      setIsLoadingProfile(false);
    }

    void loadProfile();
  }, []);

  async function handleOpenLiveClass() {
    if (
      isOpeningLiveClass ||
      !hasActiveAccess
    ) {
      return;
    }

    setIsOpeningLiveClass(true);
    setLiveClassError('');

    try {
      const response = await fetch(
        '/api/clases-en-vivo',
        {
          method: 'GET',
          cache: 'no-store',
        },
      );

      const data = await response.json();

      if (
        !response.ok ||
        !data?.roomUrl
      ) {
        setLiveClassError(
          data?.error ||
            'No pudimos abrir la clase. Inténtalo de nuevo.',
        );

        setIsOpeningLiveClass(false);
        return;
      }

      window.location.href = data.roomUrl;
    } catch {
      setLiveClassError(
        'No pudimos abrir la clase. Inténtalo de nuevo.',
      );

      setIsOpeningLiveClass(false);
    }
  }

  async function handleCancelReservation() {
    if (
      !clubSession ||
      isCancellingReservation
    ) {
      return;
    }

    setIsCancellingReservation(true);
    setReservationError('');

    const supabase = createClient();

    const { error } = await supabase.rpc(
      'cancel_reading_reservation',
      {
        p_session_id: clubSession.id,
      },
    );

    if (error) {
      setReservationError(
        'No pudimos cancelar tu turno. Inténtalo de nuevo.',
      );

      setIsCancellingReservation(false);
      return;
    }

    setReadingReservationSlot(null);
    setIsCancellingReservation(false);

    await loadReadingAvailability();
  }

  function getGreeting() {
    const name = studentName
      ? `, ${studentName}`
      : '';

    if (gender === 'Masculino') {
      return `¡Hola${name}! ¿Listo para continuar?`;
    }

    if (
      gender === 'Prefiero no decirlo'
    ) {
      return `¡Hola${name}! ¿Todo listo para continuar?`;
    }

    return `¡Hola${name}! ¿Lista para continuar?`;
  }

  const hasCurrentSubscription =
    subscriptionStatus === 'active' &&
    subscriptionEndsAt !== null &&
    new Date(
      subscriptionEndsAt,
    ).getTime() > Date.now();

  const hasActiveAccess =
    role === 'admin' ||
    hasCurrentSubscription;

  const accessLabel =
    role === 'admin'
      ? 'Acceso administrativo'
      : hasActiveAccess
        ? 'Suscripción activa'
        : 'Suscripción inactiva';

  const generalProgress = Math.min(
    100,
    (completedLessons / TOTAL_LESSONS) *
      100,
  );

  const generalProgressLabel =
    completedLessons === 0
      ? '0%'
      : `${generalProgress.toFixed(2)}%`;

  const visibleProgressWidth =
    completedLessons === 0
      ? 0
      : Math.max(generalProgress, 0.8);

  const currentLessonTitle =
    formatLessonLabel(lastLessonKey);

  const furthestLessonTitle =
    formatLessonLabel(
      furthestLessonKey,
    );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.welcome}>
          <div
            className={styles.welcomeTop}
          >
            <p className={styles.eyebrow}>
              MI ESPACIO DE APRENDIZAJE
            </p>

            {!isLoadingProfile && (
              <div
                className={
                  styles.accessStatus
                }
              >
                <span
                  className={`${
                    styles.statusLight
                  } ${
                    hasActiveAccess
                      ? styles.statusLightActive
                      : styles.statusLightInactive
                  }`}
                  aria-hidden="true"
                />

                <span>{accessLabel}</span>
              </div>
            )}
          </div>

          <h1 className={styles.title}>
            {isLoadingProfile
              ? '¡Hola!'
              : getGreeting()}
          </h1>

          <p
            className={styles.description}
          >
            Sigue avanzando a tu ritmo.
            Cada paso cuenta.
          </p>
        </section>

        <section
          className={styles.primaryGrid}
        >
          <div
            className={
              styles.learningColumn
            }
          >
            <article
              className={
                styles.currentLesson
              }
            >
              <div
                className={
                  styles.lessonCardContent
                }
              >
                <p
                  className={
                    styles.cardLabel
                  }
                >
                  ÚLTIMA LECCIÓN ABIERTA
                </p>

                <h2
                  className={
                    styles.lessonTitle
                  }
                >
                  {currentLessonTitle}
                </h2>

                <p
                  className={
                    styles.lessonDescription
                  }
                >
                  Regresa exactamente a la
                  última lección que abriste,
                  incluso si entraste
                  solamente para repasar.
                </p>

                <Link
                  href={`/lecciones/${lastLessonKey}`}
                  className={
                    styles.lessonButton
                  }
                >
                  Continuar última lección
                </Link>
              </div>
            </article>

            <article
              className={
                styles.progressLesson
              }
            >
              <div
                className={
                  styles.lessonCardContent
                }
              >
                <p
                  className={
                    styles.cardLabel
                  }
                >
                  CONTINÚA CON TU PROGRESO
                </p>

                <h2
                  className={
                    styles.lessonTitle
                  }
                >
                  {furthestLessonTitle}
                </h2>

                <p
                  className={
                    styles.lessonDescription
                  }
                >
                  Ve a la lección más
                  avanzada que has alcanzado
                  para continuar tu recorrido
                  desde el punto más lejano.
                </p>

                <Link
                  href={`/lecciones/${furthestLessonKey}`}
                  className={
                    styles.progressLessonButton
                  }
                >
                  Continuar con mi progreso
                </Link>
              </div>
            </article>
          </div>

          <div className={styles.sideColumn}>
            <aside
              className={styles.liveClass}
            >
              <p
                className={styles.cardLabel}
              >
                CLASES EN VIVO
              </p>

              <h2
                className={
                  styles.sectionTitle
                }
              >
                Entra a tu clase
              </h2>

              <p
                className={
                  styles.liveClassText
                }
              >
                Cuando tengas una clase
                programada, entra a la sala
                desde aquí.
              </p>

              <div
                className={
                  styles.liveClassNotice
                }
              >
                <span
                  className={
                    styles.liveIndicator
                  }
                  aria-hidden="true"
                />

                <span>
                  Sala privada de clases
                </span>
              </div>

              {hasActiveAccess ? (
                <button
                  type="button"
                  className={
                    styles.liveClassButton
                  }
                  onClick={
                    handleOpenLiveClass
                  }
                  disabled={
                    isOpeningLiveClass
                  }
                >
                  {isOpeningLiveClass
                    ? 'Abriendo clase...'
                    : role === 'admin'
                      ? 'Entrar como anfitriona'
                      : 'Entrar a clase'}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={
                      styles.liveClassButton
                    }
                    disabled
                  >
                    Entrar a clase
                  </button>

                  <p
                    className={
                      styles.liveClassAccessNote
                    }
                  >
                    Requiere una suscripción
                    activa.
                  </p>
                </>
              )}

              {liveClassError && (
                <p
                  className={
                    styles.liveClassError
                  }
                  role="alert"
                >
                  {liveClassError}
                </p>
              )}
            </aside>

            <aside
              className={styles.readingClub}
            >
              <p
                className={styles.cardLabel}
              >
                LECTURA EN VIVO
              </p>

              <h2
                className={
                  styles.sectionTitle
                }
              >
                Próxima sesión
              </h2>

              <p
                className={styles.clubDay}
              >
                {readingClubDate}
              </p>

              <p
                className={styles.cardText}
              >
                7:00 p. m. – 9:00 p. m.
                <br />
                Hora de República Dominicana
                (UTC−4)
              </p>

              <p
                className={
                  styles.clubCountdown
                }
              >
                {clubCountdown}
              </p>

              {hasActiveAccess ? (
                readingReservationSlot !==
                null ? (
                  <>
                    <div
                      className={
                        styles.reservationConfirmed
                      }
                    >
                      <p
                        className={
                          styles.reservationConfirmedTitle
                        }
                      >
                        Tu reserva está
                        confirmada
                      </p>

                      <p
                        className={
                          styles.reservationTurn
                        }
                      >
                        Tu turno es #
                        {
                          readingReservationSlot
                        }
                      </p>

                      <p
                        className={
                          styles.reservationConfirmedText
                        }
                      >
                        Ya tienes tu turno para
                        leer en vivo.
                      </p>
                    </div>

                    <div
                      className={
                        styles.clubActions
                      }
                    >
                      <Link
                        href="/club-de-lectura"
                        className={
                          styles.joinButton
                        }
                      >
                        Ver mi reserva
                      </Link>

                      <button
                        type="button"
                        className={
                          styles.cancelReservationButton
                        }
                        onClick={
                          handleCancelReservation
                        }
                        disabled={
                          isCancellingReservation
                        }
                      >
                        {isCancellingReservation
                          ? 'Cancelando...'
                          : 'Cancelar turno'}
                      </button>
                    </div>

                    {reservationError && (
                      <p
                        className={
                          styles.reservationError
                        }
                        role="alert"
                      >
                        {reservationError}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p
                      className={
                        styles.reservationPrompt
                      }
                    >
                      ¿Quieres leer en vivo?
                      Reserva tu turno antes de
                      que se agoten.
                    </p>

                    {availableReadingSlots ===
                    null ? (
                      <p
                        className={
                          styles.availableSlots
                        }
                      >
                        Cargando turnos...
                      </p>
                    ) : availableReadingSlots >
                      0 ? (
                      <p
                        className={
                          styles.availableSlots
                        }
                      >
                        {
                          availableReadingSlots
                        }{' '}
                        {availableReadingSlots ===
                        1
                          ? 'turno disponible'
                          : 'turnos disponibles'}
                      </p>
                    ) : (
                      <p
                        className={
                          styles.availableSlots
                        }
                      >
                        Los turnos para leer ya
                        están completos.
                      </p>
                    )}

                    {clubSession &&
                      availableReadingSlots !==
                        null &&
                      availableReadingSlots >
                        0 && (
                        <div
                          className={
                            styles.clubActions
                          }
                        >
                          <Link
                            href="/club-de-lectura#reservar-turno"
                            className={
                              styles.joinButton
                            }
                          >
                            Reservar mi turno
                          </Link>
                        </div>
                      )}
                  </>
                )
              ) : (
                <>
                  <button
                    type="button"
                    className={
                      styles.joinButton
                    }
                    disabled
                    title="Requiere una suscripción activa"
                  >
                    Reservar mi turno
                  </button>

                  <p
                    className={
                      styles.clubAccessNote
                    }
                  >
                    Requiere una suscripción
                    activa.
                  </p>
                </>
              )}
            </aside>
          </div>
        </section>

        <section
          className={
            styles.summarySection
          }
        >
          <h2
            className={styles.summaryTitle}
          >
            Tu progreso
          </h2>

          <div
            className={styles.summaryGrid}
          >
            <article
              className={styles.summaryCard}
            >
              <p
                className={styles.cardLabel}
              >
                Nivel actual
              </p>

              <p
                className={styles.cardValue}
              >
                A1
              </p>

              <p
                className={styles.cardText}
              >
                Principiante
              </p>

              <p
                className={styles.cardNote}
              >
                Calculado según las lecciones
                completadas.
              </p>

              <p
                className={styles.cardText}
              >
                Nivel indicado al
                registrarte:{' '}
                <strong>
                  {isLoadingProfile
                    ? 'Cargando...'
                    : indicatedLevel ||
                      'No indicado'}
                </strong>
              </p>
            </article>

            <article
              className={styles.summaryCard}
            >
              <p
                className={styles.cardLabel}
              >
                Progreso general
              </p>

              <p
                className={styles.cardValue}
              >
                {generalProgressLabel}
              </p>

              <div
                className={
                  styles.progressTrack
                }
                role="progressbar"
                aria-label="Progreso general"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={
                  generalProgress
                }
                aria-valuetext={`${generalProgressLabel}, ${completedLessons} de ${TOTAL_LESSONS} lecciones completadas`}
              >
                <span
                  className={
                    styles.progressBar
                  }
                  style={{
                    width: `${visibleProgressWidth}%`,
                    minWidth:
                      completedLessons > 0
                        ? '4px'
                        : '0',
                  }}
                />
              </div>
            </article>

            <article
              className={styles.summaryCard}
            >
              <p
                className={styles.cardLabel}
              >
                Lecciones completadas
              </p>

              <p
                className={styles.cardValue}
              >
                {completedLessons}
              </p>

              <p
                className={styles.cardText}
              >
                de{' '}
                {TOTAL_LESSONS.toLocaleString(
                  'es-DO',
                )}{' '}
                lecciones
              </p>
            </article>

            <article
              className={styles.summaryCard}
            >
              <p
                className={styles.cardLabel}
              >
                Vocabulary Building
              </p>

              <p
                className={styles.cardValue}
              >
                {savedFlashcards}
              </p>

              <p
                className={styles.cardText}
              >
                {savedFlashcards === 1
                  ? 'palabra guardada'
                  : 'palabras guardadas'}
              </p>

              <Link
                href="/flashcards"
                className={styles.flashcardsLink}
              >
                Repasar flashcards →
              </Link>
            </article>
          </div>
        </section>

        <section
          className={
            styles.exploreSection
          }
        >
          <p
            className={styles.exploreText}
          >
            ¿Quieres ver más?
          </p>

          <Link
            href="/lecciones"
            className={
              styles.exploreButton
            }
          >
            Explorar lecciones
          </Link>
        </section>
      </div>
    </main>
  );
}