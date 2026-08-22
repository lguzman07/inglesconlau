import Link from 'next/link';
import { notFound } from 'next/navigation';
import DragAndDrop from '@/components/DragAndDrop/DragAndDrop';
import FillInTheBlanks from '@/components/FillInTheBlanks/FillInTheBlanks';
import LessonOpenedTracker from '@/components/LessonOpenedTracker/LessonOpenedTracker';
import LessonVideo from '@/components/LessonVideo/LessonVideo';
import ListeningChoice from '@/components/ListeningChoice/ListeningChoice';
import MontessoriExercise from '@/components/MontessoriExercise/MontessoriExercise';
import { getLessonContent } from '@/content/lecciones';
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
    lessonCount: 16,
  },
  a1: {
    code: 'A1',
    title: 'Principiante',
    lessonCount: 27,
  },
  a2: {
    code: 'A2',
    title: 'Básico',
    lessonCount: 26,
  },
  b1: {
    code: 'B1',
    title: 'Intermedio',
    lessonCount: 25,
  },
  'b1-plus': {
    code: 'B1+',
    title: 'Intermedio alto',
    lessonCount: 25,
  },
  b2: {
    code: 'B2',
    title: 'Intermedio avanzado',
    lessonCount: 25,
  },
  c1: {
    code: 'C1',
    title: 'Avanzado',
    lessonCount: 27,
  },
};

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
  params: Promise<{
    nivel: string;
    leccion: string;
  }>;
}) {
  const { nivel, leccion } = await params;

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

  const lessonKey = `${normalizedLevel}/${lessonNumber}`;

  const lesson = getLessonContent(
    normalizedLevel,
    lessonNumber,
  );

  const previousLesson =
    lessonNumber > 1
      ? lessonNumber - 1
      : null;

  const nextLesson =
    lessonNumber < level.lessonCount
      ? lessonNumber + 1
      : null;

  const nextLessonHref = nextLesson
    ? `/lecciones/${nivel}/${nextLesson}`
    : undefined;

  const lessonTitle =
    lesson?.title ?? `Lección ${lessonNumber}`;

  const lessonSubtitle =
    lesson?.subtitle ??
    'Esta página será tu guía completa: video, práctica y avance de la lección en un mismo lugar.';

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

            <p className={styles.description}>
              {lessonSubtitle}
            </p>
          </div>

          <span
            className={styles.lessonPosition}
          >
            {String(lessonNumber).padStart(
              2,
              '0',
            )}{' '}
            /{' '}
            {String(level.lessonCount).padStart(
              2,
              '0',
            )}
          </span>
        </section>

        <section
          className={styles.videoSection}
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
                className={styles.playIcon}
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
            className={styles.videoDetails}
          >
            <p className={styles.eyebrow}>
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
          className={styles.objectiveCard}
          aria-labelledby="objective-heading"
        >
          <div
            className={styles.objectiveIcon}
            aria-hidden="true"
          >
            ◎
          </div>

          <div>
            <p className={styles.eyebrow}>
              OBJETIVO
            </p>

            <h2 id="objective-heading">
              {lesson
                ? 'Meta de esta lección'
                : 'Lo que lograrás en esta lección'}
            </h2>

            <p>
              {lesson?.objective ??
                'Añadiremos el objetivo específico cuando definamos el contenido de esta lección.'}
            </p>
          </div>
        </section>

        <section
          className={styles.practiceSection}
          aria-labelledby="practice-heading"
        >
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>
                PRÁCTICA
              </p>

              <h2 id="practice-heading">
                Ejercicios
              </h2>
            </div>

            {lesson?.exercises.length ? (
              <span
                className={
                  styles.exerciseCount
                }
              >
                {lesson.exercises.length}{' '}
                ejercicio
                {lesson.exercises.length === 1
                  ? ''
                  : 's'}
              </span>
            ) : null}
          </div>

          {lesson?.exercises.length ? (
            lesson.exercises.map(
              (exercise, index) => {
                const isLastExercise =
                  index ===
                  lesson.exercises.length - 1;

                const exerciseKey =
                  `${lessonKey}-${exercise.type}-${index}`;

                if (
                  exercise.type ===
                  'fill-in-the-blanks'
                ) {
                  return (
                    <FillInTheBlanks
                      key={exerciseKey}
                      title={exercise.title}
                      instructions={
                        exercise.instructions
                      }
                      lessonKey={lessonKey}
                      questions={
                        exercise.questions
                      }
                      nextLessonHref={
                        isLastExercise
                          ? nextLessonHref
                          : undefined
                      }
                    />
                  );
                }

                if (
                  exercise.type ===
                  'drag-and-drop'
                ) {
                  return (
                    <DragAndDrop
                      key={exerciseKey}
                      title={exercise.title}
                      instructions={
                        exercise.instructions
                      }
                      lessonKey={lessonKey}
                      questions={
                        exercise.questions
                      }
                      nextLessonHref={
                        isLastExercise
                          ? nextLessonHref
                          : undefined
                      }
                    />
                  );
                }

                if (
                  exercise.type ===
                  'montessori'
                ) {
                  return (
                    <MontessoriExercise
                      key={exerciseKey}
                      exercise={exercise}
                    />
                  );
                }

                if (
                  exercise.type ===
                  'listening-choice'
                ) {
                  return (
                    <ListeningChoice
                      key={exerciseKey}
                      exercise={exercise}
                    />
                  );
                }

                return null;
              },
            )
          ) : (
            <div
              className={styles.practiceCard}
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
                  Comprueba lo que aprendiste
                </h3>

                <p>
                  Los ejercicios interactivos
                  con corrección inmediata
                  aparecerán aquí después del
                  video.
                </p>
              </div>
            </div>
          )}
        </section>

        <nav
          className={styles.lessonNavigation}
          aria-label="Navegación entre lecciones"
        >
          {previousLesson ? (
            <Link
              href={`/lecciones/${nivel}/${previousLesson}`}
              className={
                styles.navigationLink
              }
            >
              <span>← Anterior</span>

              <strong>
                Lección {previousLesson}
              </strong>
            </Link>
          ) : (
            <span
              className={
                styles.navigationSpacer
              }
            />
          )}

          {nextLesson ? (
            <Link
              href={`/lecciones/${nivel}/${nextLesson}`}
              className={
                styles.navigationLink
              }
            >
              <span>Siguiente →</span>

              <strong>
                Lección {nextLesson}
              </strong>
            </Link>
          ) : (
            <Link
              href={`/lecciones/${nivel}`}
              className={
                styles.navigationLink
              }
            >
              <span>
                Final del nivel
              </span>

              <strong>
                Volver a {level.code}
              </strong>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}