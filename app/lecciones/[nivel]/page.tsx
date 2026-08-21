import Link from 'next/link';
import {
  notFound,
  redirect,
} from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getLessonTitle } from '@/content/lecciones/catalog';
import styles from './Nivel.module.css';

type Level = {
  code: string;
  title: string;
  description: string;
  lessonCount: number;
};

const levels: Record<string, Level> = {
  a0: {
    code: 'A0',
    title: 'Primeros pasos',
    description:
      'Una base clara para comenzar a entender y usar inglés desde cero.',
    lessonCount: 80,
  },

  a1: {
    code: 'A1',
    title: 'Principiante',
    description:
      'Frases y vocabulario para comunicarte en situaciones cotidianas.',
    lessonCount: 266,
  },

  a2: {
    code: 'A2',
    title: 'Básico',
    description:
      'Más confianza para hablar de experiencias, planes y situaciones frecuentes.',
    lessonCount: 170,
  },

  b1: {
    code: 'B1',
    title: 'Intermedio',
    description:
      'Comunica ideas, opiniones y experiencias con mayor independencia.',
    lessonCount: 155,
  },

  'b1+': {
    code: 'B1+',
    title: 'Intermedio alto',
    description:
      'Refuerza fluidez y precisión al expresar ideas más detalladas.',
    lessonCount: 74,
  },

  b2: {
    code: 'B2',
    title: 'Intermedio avanzado',
    description:
      'Comprende contenido más complejo y argumenta con confianza.',
    lessonCount: 134,
  },

  c1: {
    code: 'C1',
    title: 'Avanzado',
    description:
      'Comunícate con precisión y naturalidad en contextos complejos.',
    lessonCount: 158,
  },
};

export default async function NivelPage({
  params,
}: {
  params: {
    nivel: string;
  };
}) {
  const normalizedLevel =
    params.nivel.toLowerCase();

  const level =
    levels[normalizedLevel];

  if (!level) {
    notFound();
  }

  const supabase =
    createClient();

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  const [
    profileResult,
    subscriptionResult,
    progressResult,
  ] = await Promise.all([
    supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle(),

    supabase
      .from('subscriptions')
      .select(
        'status, current_period_end',
      )
      .eq('user_id', user.id)
      .maybeSingle(),

    supabase
      .from('lesson_progress')
      .select('lesson_key, is_completed')
      .eq('user_id', user.id)
      .eq('is_completed', true),
  ]);

  const isAdmin =
    profileResult.data?.role ===
    'admin';

  const subscription =
    subscriptionResult.data;

  const hasCurrentSubscription =
    subscription?.status ===
      'active' &&
    subscription.current_period_end !==
      null &&
    new Date(
      subscription.current_period_end,
    ).getTime() > Date.now();

  const hasLessonAccess =
    isAdmin ||
    hasCurrentSubscription;

  const completedLessonKeys = new Set(
    (progressResult.data ?? []).map(
      (progress) => progress.lesson_key,
    ),
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link
          href="/lecciones"
          className={styles.backLink}
        >
          ← Todas las lecciones
        </Link>

        <section
          className={styles.hero}
        >
          <span
            className={
              styles.levelBadge
            }
          >
            {level.code}
          </span>

          <p
            className={
              styles.eyebrow
            }
          >
            RUTA DEL NIVEL
          </p>

          <h1
            className={
              styles.title
            }
          >
            {level.title}
          </h1>

          <p
            className={
              styles.description
            }
          >
            {level.description}
          </p>

          <div
            className={
              styles.startCard
            }
          >
            <div>
              <p
                className={
                  styles.startEyebrow
                }
              >
                RECOMENDACIÓN
              </p>

              <h2>
                Empieza por:{' '}
                {getLessonTitle(
                  normalizedLevel,
                  1,
                )}
              </h2>

              <p>
                {hasLessonAccess
                  ? 'Las lecciones están organizadas en orden para que siempre sepas qué estudiar después.'
                  : 'Puedes probar gratis las primeras 3 lecciones de este nivel. Activa tu suscripción para abrir el resto.'}
              </p>
            </div>

            <span
              className={
                styles.startNumber
              }
            >
              01
            </span>
          </div>
        </section>

        <section
          className={
            styles.lessonSection
          }
          aria-labelledby="lesson-heading"
        >
          <div
            className={
              styles.sectionHeading
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                LECCIONES
              </p>

              <h2 id="lesson-heading">
                Tu recorrido de{' '}
                {level.code}
              </h2>
            </div>

            <p>
              {level.lessonCount}{' '}
              lecciones
            </p>
          </div>

          <ol
            className={
              styles.lessonList
            }
          >
            {Array.from(
              {
                length:
                  level.lessonCount,
              },
              (_, index) => {
                const number =
                  index + 1;

                const lessonTitle =
                  getLessonTitle(
                    normalizedLevel,
                    number,
                  );

                const canOpenLesson =
                  hasLessonAccess ||
                  number <= 3;

                const lessonKey =
                  `${normalizedLevel}/${number}`;

                const isCompleted =
                  completedLessonKeys.has(
                    lessonKey,
                  );

                return (
                  <li key={number}>
                    {canOpenLesson ? (
                      <Link
                        href={`/lecciones/${params.nivel}/${number}`}
                        className={
                          styles.lessonCard
                        }
                        aria-label={`Abrir ${lessonTitle} de ${level.code}`}
                      >
                        <span
                          className={
                            styles.lessonNumber
                          }
                        >
                          {isCompleted
                            ? '✓'
                            : String(
                                number,
                              ).padStart(
                                2,
                                '0',
                              )}
                        </span>

                        <div
                          className={
                            styles.lessonContent
                          }
                        >
                          <h3>
                            {
                              lessonTitle
                            }
                          </h3>

                          <p>
                            {number <= 3 &&
                            !hasLessonAccess
                              ? 'Lección de muestra gratuita.'
                              : 'Abre la lección para ver su video, ejercicios y progreso.'}
                          </p>
                        </div>

                        <span
                          className={
                            styles.openLesson
                          }
                        >
                          {number <= 3 &&
                          !hasLessonAccess
                            ? 'Probar gratis'
                            : 'Abrir lección'}{' '}
                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <div
                        className={
                          styles.lessonCard
                        }
                        aria-disabled="true"
                      >
                        <span
                          className={
                            styles.lessonNumber
                          }
                        >
                          {isCompleted
                            ? '✓'
                            : String(
                                number,
                              ).padStart(
                                2,
                                '0',
                              )}
                        </span>

                        <div
                          className={
                            styles.lessonContent
                          }
                        >
                          <h3>
                            {
                              lessonTitle
                            }
                          </h3>

                          <p>
                            Activa tu
                            suscripción
                            para acceder
                            al video,
                            ejercicios y
                            progreso.
                          </p>
                        </div>

                        <span
                          className={
                            styles.openLesson
                          }
                        >
                          🔒 Requiere
                          suscripción
                        </span>
                      </div>
                    )}
                  </li>
                );
              },
            )}
          </ol>
        </section>
      </div>
    </main>
  );
}
