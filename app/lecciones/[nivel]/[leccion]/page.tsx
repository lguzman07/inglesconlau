import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

import DragAndDrop from '@/components/DragAndDrop/DragAndDrop';
import FillInTheBlanks from '@/components/FillInTheBlanks/FillInTheBlanks';
import LessonOpenedTracker from '@/components/LessonOpenedTracker/LessonOpenedTracker';
import LessonVideo from '@/components/LessonVideo/LessonVideo';
import MontessoriExercise from '@/components/MontessoriExercise/MontessoriExercise';

import { getLessonContent } from '@/content/lecciones';
import { getLessonTitle } from '@/content/lecciones/catalog';

import styles from './Leccion.module.css';

type Level = {
  code: string;
  title: string;
  lessonCount: number;
};

const levels: Record<string, Level> = {
  a0: {
    code: 'A0',
    title: 'Primeros pasos',
    lessonCount: 80,
  },

  a1: {
    code: 'A1',
    title: 'Principiante',
    lessonCount: 266,
  },

  a2: {
    code: 'A2',
    title: 'Básico',
    lessonCount: 170,
  },

  b1: {
    code: 'B1',
    title: 'Intermedio',
    lessonCount: 155,
  },

  'b1+': {
    code: 'B1+',
    title: 'Intermedio alto',
    lessonCount: 74,
  },

  b2: {
    code: 'B2',
    title: 'Intermedio avanzado',
    lessonCount: 134,
  },

  c1: {
    code: 'C1',
    title: 'Avanzado',
    lessonCount: 158,
  },
};

const levelOrder = [
  'a0',
  'a1',
  'a2',
  'b1',
  'b1+',
  'b2',
  'c1',
];

function getLessonNumber(value: string) {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const number = Number(value);

  return Number.isSafeInteger(number) && number > 0
    ? number
    : null;
}

export default async function LeccionPage({
  params,
}: {
  params: {
    nivel: string;
    leccion: string;
  };
}) {
  const nivel = params.nivel;
  const leccion = params.leccion;

  const normalizedLevel = nivel.toLowerCase();
  const level = levels[normalizedLevel];
  const lessonNumber = getLessonNumber(leccion);

  if (
    !level ||
    !lessonNumber ||
    lessonNumber > level.lessonCount
  ) {
    notFound();
  }

  /*
   * Pronunciación inglesa elegida por el estudiante.
   */
  const supabase = createClient();

  let englishVariant: 'en' | 'en-GB' = 'en';

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  const [
    profileResult,
    subscriptionResult,
  ] = await Promise.all([
    supabase
      .from('profiles')
      .select('english_pronunciation, role')
      .eq('id', user.id)
      .maybeSingle(),

    supabase
      .from('subscriptions')
      .select('status, current_period_end')
      .eq('user_id', user.id)
      .maybeSingle(),
  ]);

  const profile = profileResult.data;

  englishVariant =
    profile?.english_pronunciation === 'british'
      ? 'en-GB'
      : 'en';

  const subscription =
    subscriptionResult.data;

  const hasCurrentSubscription =
    subscription?.status === 'active' &&
    subscription.current_period_end !== null &&
    new Date(
      subscription.current_period_end,
    ).getTime() > Date.now();

  const hasLessonAccess =
    profile?.role === 'admin' ||
    hasCurrentSubscription;

  const isFreePreviewLesson =
    lessonNumber <= 3;

  if (
    !hasLessonAccess &&
    !isFreePreviewLesson
  ) {
    redirect(
      `/lecciones/${normalizedLevel}?access=subscription_required`,
    );
  }

  /*
   * Contenido real de la lección.
   *
   * Si todavía no hemos creado su archivo .ts,
   * getLessonContent devuelve null y mostramos
   * la plantilla de "en preparación".
   */
  const lessonKey =
    `${normalizedLevel}/${lessonNumber}`;

  const lesson = getLessonContent(
    normalizedLevel,
    lessonNumber,
  );

  const firstExercise =
    lesson?.exercises[0];

  /*
   * El catálogo contiene todos los títulos A0-C1.
   *
   * Si la lección ya tiene contenido real, usamos
   * el título de su archivo. Si todavía no existe,
   * usamos el título del catálogo.
   */
  const lessonTitle =
    lesson?.title ??
    getLessonTitle(
      normalizedLevel,
      lessonNumber,
    );

  const lessonSubtitle =
    lesson?.subtitle ??
    'Esta página será tu guía completa: video, práctica y avance de la lección en un mismo lugar.';

  /*
   * Navegación dentro del nivel.
   */
  const previousLesson =
    lessonNumber > 1
      ? lessonNumber - 1
      : null;

  const nextLesson =
    lessonNumber < level.lessonCount
      ? lessonNumber + 1
      : null;

  const previousLessonTitle =
    previousLesson
      ? getLessonTitle(
          normalizedLevel,
          previousLesson,
        )
      : null;

  const nextLessonTitle =
    nextLesson
      ? getLessonTitle(
          normalizedLevel,
          nextLesson,
        )
      : null;

  const nextLessonHref =
    nextLesson
      ? `/lecciones/${nivel}/${nextLesson}`
      : undefined;

  /*
   * Siguiente nivel cuando se termina el actual.
   */
  const currentLevelIndex =
    levelOrder.indexOf(normalizedLevel);

  const nextLevelKey =
    currentLevelIndex >= 0 &&
    currentLevelIndex <
      levelOrder.length - 1
      ? levelOrder[
          currentLevelIndex + 1
        ]
      : null;

  const nextLevel =
    nextLevelKey
      ? levels[nextLevelKey]
      : null;

  return (
    <main className={styles.main}>
      <LessonOpenedTracker
        lessonKey={lessonKey}
      />

      <div className={styles.container}>
        <Link
          href={`/lecciones/${nivel}`}
          className={styles.backLink}
        >
          ← Volver a {level.code}
        </Link>

        <section
          className={styles.heading}
          aria-labelledby="lesson-title"
        >
          <div>
            <p className={styles.eyebrow}>
              {level.code} · {level.title}
            </p>

            <h1 id="lesson-title">
              {lessonTitle}
            </h1>

            <p
              className={
                styles.description
              }
            >
              {lessonSubtitle}
            </p>
          </div>

          <span
            className={
              styles.lessonPosition
            }
          >
            {String(
              lessonNumber,
            ).padStart(2, '0')}{' '}
            /{' '}
            {String(
              level.lessonCount,
            ).padStart(2, '0')}
          </span>
        </section>

        <section
          className={
            styles.videoSection
          }
          aria-labelledby="video-heading"
        >
          {lesson?.videoSrc ? (
            <LessonVideo
              src={lesson.videoSrc}
              title={lesson.title}
            />
          ) : (
            <div
              className={
                styles.videoPlaceholder
              }
            >
              <div
                className={
                  styles.playIcon
                }
                aria-hidden="true"
              >
                ▶
              </div>

              <p>
                Tu video aparecerá aquí
              </p>

              <span>
                Cuando grabes esta lección,
                añadiremos el video en este
                espacio.
              </span>
            </div>
          )}

          <div
            className={
              styles.videoDetails
            }
          >
            <p
              className={styles.eyebrow}
            >
              VIDEO DE LA LECCIÓN
            </p>

            <h2 id="video-heading">
              {lesson?.videoTitle ??
                'Aprende paso a paso'}
            </h2>

            <p>
              {lesson?.videoDescription ??
                'Aquí explicarás el tema con ejemplos claros. Las estudiantes podrán pausar, volver a ver el video y seguir a su propio ritmo.'}
            </p>
          </div>
        </section>

        <section
          className={
            styles.objectiveCard
          }
          aria-labelledby="objective-heading"
        >
          <div
            className={
              styles.objectiveIcon
            }
            aria-hidden="true"
          >
            ◎
          </div>

          <div>
            <p
              className={styles.eyebrow}
            >
              OBJETIVO
            </p>

            <h2 id="objective-heading">
              {lesson
                ? 'Usar este contenido en oraciones sencillas.'
                : 'Lo que lograrás en esta lección'}
            </h2>

            <p>
              {lesson?.objective ??
                'Añadiremos el objetivo específico cuando definamos el contenido de esta lección.'}
            </p>
          </div>
        </section>

        <section
          className={
            styles.practiceSection
          }
          aria-labelledby="practice-heading"
        >
          <div
            className={
              styles.sectionHeader
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                PRÁCTICA
              </p>

              <h2 id="practice-heading">
                Ejercicios
              </h2>
            </div>

            {firstExercise &&
              lesson && (
                <span
                  className={
                    styles.exerciseCount
                  }
                >
                  1 de{' '}
                  {
                    lesson.exercises
                      .length
                  }
                </span>
              )}

            {!firstExercise && (
              <span
                className={
                  styles.comingSoon
                }
              >
                En preparación
              </span>
            )}
          </div>

          {firstExercise ? (
            firstExercise.type ===
            'fill-in-the-blanks' ? (
              <FillInTheBlanks
                title={
                  firstExercise.title
                }
                instructions={
                  firstExercise.instructions
                }
                lessonKey={lessonKey}
                questions={
                  firstExercise.questions
                }
                nextLessonHref={
                  nextLessonHref
                }
                englishVariant={
                  englishVariant
                }
              />
            ) : firstExercise.type ===
              'drag-and-drop' ? (
              <DragAndDrop
                title={
                  firstExercise.title
                }
                instructions={
                  firstExercise.instructions
                }
                lessonKey={lessonKey}
                questions={
                  firstExercise.questions
                }
                nextLessonHref={
                  nextLessonHref
                }
              />
            ) : (
              <MontessoriExercise
                exercise={firstExercise}
              />
            )
          ) : (
            <div
              className={
                styles.practiceCard
              }
            >
              <span
                className={
                  styles.practiceNumber
                }
              >
                1
              </span>

              <div>
                <h3>
                  Comprueba lo que
                  aprendiste
                </h3>

                <p>
                  Los ejercicios
                  interactivos con
                  corrección inmediata
                  aparecerán aquí después
                  del video.
                </p>
              </div>
            </div>
          )}
        </section>

        <nav
          className={
            styles.lessonNavigation
          }
          aria-label="Navegación entre lecciones"
        >
          {previousLesson &&
          previousLessonTitle ? (
            <Link
              href={`/lecciones/${nivel}/${previousLesson}`}
              className={
                styles.navigationLink
              }
            >
              <span>
                ← Anterior
              </span>

              <strong>
                {previousLessonTitle}
              </strong>
            </Link>
          ) : (
            <span
              className={
                styles.navigationSpacer
              }
            />
          )}

          {nextLesson &&
          nextLessonTitle ? (
            <Link
              href={`/lecciones/${nivel}/${nextLesson}`}
              className={
                styles.navigationLink
              }
            >
              <span>
                Siguiente →
              </span>

              <strong>
                {nextLessonTitle}
              </strong>
            </Link>
          ) : nextLevelKey &&
            nextLevel ? (
            <Link
              href={`/lecciones/${nextLevelKey}`}
              className={
                styles.navigationLink
              }
            >
              <span>
                Siguiente nivel →
              </span>

              <strong>
                {nextLevel.code} ·{' '}
                {nextLevel.title}
              </strong>
            </Link>
          ) : (
            <Link
              href="/lecciones"
              className={
                styles.navigationLink
              }
            >
              <span>
                Recorrido completado
              </span>

              <strong>
                Ver todos los niveles
              </strong>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}