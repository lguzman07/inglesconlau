import Link from 'next/link';
import { notFound } from 'next/navigation';
import DragAndDrop from '@/components/DragAndDrop/DragAndDrop';
import FillInTheBlanks from '@/components/FillInTheBlanks/FillInTheBlanks';
import LessonOpenedTracker from '@/components/LessonOpenedTracker/LessonOpenedTracker';
import LessonVideo from '@/components/LessonVideo/LessonVideo';
import ListeningChoice from '@/components/ListeningChoice/ListeningChoice';
import MontessoriExercise from '@/components/MontessoriExercise/MontessoriExercise';
import { getLessonContent } from '@/content/lecciones';
import { getLessonTitle, lessonTitles } from '@/content/lecciones/catalog';
import type { LessonExercise } from '@/content/lecciones/types';
import styles from './Leccion.module.css';

type Level = {
  code: string;
  title: string;
  lessonCount: number;
};

const levels: Record<string, Level> = {
  a0: { code: 'A0', title: 'Primeros pasos', lessonCount: 80 },
  a1: { code: 'A1', title: 'Principiante', lessonCount: 266 },
  a2: { code: 'A2', title: 'Básico', lessonCount: 170 },
  b1: { code: 'B1', title: 'Intermedio', lessonCount: 155 },
  'b1-plus': { code: 'B1+', title: 'Intermedio alto', lessonCount: 74 },
  b2: { code: 'B2', title: 'Intermedio avanzado', lessonCount: 134 },
  c1: { code: 'C1', title: 'Avanzado', lessonCount: 158 },
};

function getLessonNumber(value: string) {
  if (!/^\d+$/.test(value)) return null;

  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 ? number : null;
}

function getLessonCount(level: string, fallback: number) {
  return Object.keys(lessonTitles[level] ?? {}).length || fallback;
}

function getNextLessonHref(
  level: string,
  lessonNumber: number,
  lessonCount: number,
) {
  return lessonNumber < lessonCount
    ? `/lecciones/${level}/${lessonNumber + 1}`
    : undefined;
}

function renderExercise({
  exercise,
  lessonKey,
  nextLessonHref,
}: {
  exercise: LessonExercise;
  lessonKey: string;
  nextLessonHref?: string;
}) {
  if (exercise.type === 'fill-in-the-blanks') {
    return (
      <FillInTheBlanks
        title={exercise.title}
        instructions={exercise.instructions}
        lessonKey={lessonKey}
        questions={exercise.questions}
        nextLessonHref={nextLessonHref}
      />
    );
  }

  if (exercise.type === 'drag-and-drop') {
    return (
      <DragAndDrop
        title={exercise.title}
        instructions={exercise.instructions}
        lessonKey={lessonKey}
        questions={exercise.questions}
        nextLessonHref={nextLessonHref}
      />
    );
  }

  if (exercise.type === 'montessori') {
    return (
      <MontessoriExercise
        exercise={exercise}
        lessonKey={lessonKey}
      />
    );
  }

  if (exercise.type === 'listening-choice') {
    return (
      <ListeningChoice
        exercise={exercise}
        lessonKey={lessonKey}
      />
    );
  }

  return null;
}

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ nivel: string; leccion: string }>;
}) {
  const { nivel, leccion } = await params;
  const normalizedLevel = nivel.toLowerCase();
  const level = levels[normalizedLevel];
  const lessonNumber = getLessonNumber(leccion);

  if (!level || !lessonNumber) {
    notFound();
  }

  const lessonCount = getLessonCount(normalizedLevel, level.lessonCount);

  if (lessonNumber > lessonCount) {
    notFound();
  }

  const lessonKey = `${normalizedLevel}/${lessonNumber}`;
  const lesson = getLessonContent(normalizedLevel, lessonNumber);

  const previousLesson = lessonNumber > 1 ? lessonNumber - 1 : null;
  const nextLessonHref = getNextLessonHref(
    normalizedLevel,
    lessonNumber,
    lessonCount,
  );

  const lessonTitle =
    lesson?.title ?? getLessonTitle(normalizedLevel, lessonNumber);

  const lessonSubtitle =
    lesson?.subtitle ??
    'Esta página será tu guía completa: video, práctica y avance de la lección en un mismo lugar.';

  return (
    <main className={styles.main}>
      <LessonOpenedTracker lessonKey={lessonKey} />

      <div className={styles.container}>
        <Link
          href={`/lecciones/${normalizedLevel}`}
          className={styles.backLink}
        >
          ← Volver a {level.code}
        </Link>

        <section className={styles.heading} aria-labelledby="lesson-title">
          <div>
            <p className={styles.eyebrow}>
              {level.code} · {level.title}
            </p>

            <h1 id="lesson-title">{lessonTitle}</h1>

            <p className={styles.description}>{lessonSubtitle}</p>
          </div>

          <span className={styles.lessonPosition}>
            {String(lessonNumber).padStart(2, '0')} /{' '}
            {String(lessonCount).padStart(2, '0')}
          </span>
        </section>

        <section
          className={styles.videoSection}
          aria-labelledby="video-heading"
        >
          {lesson?.videoSrc ? (
            <LessonVideo src={lesson.videoSrc} title={lesson.title} />
          ) : (
            <div className={styles.videoPlaceholder}>
              <div className={styles.playIcon} aria-hidden="true">
                ▶
              </div>

              <p>Tu video aparecerá aquí</p>

              <span>
                Cuando grabes esta lección, añadiremos el video en este espacio.
              </span>
            </div>
          )}

          <div className={styles.videoDetails}>
            <p className={styles.eyebrow}>VIDEO DE LA LECCIÓN</p>

            <h2 id="video-heading">
              {lesson?.videoTitle ?? 'Aprende paso a paso'}
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
          <div className={styles.objectiveIcon} aria-hidden="true">
            ◎
          </div>

          <div>
            <p className={styles.eyebrow}>OBJETIVO</p>

            <h2 id="objective-heading">
              {lesson
                ? 'Lo que practicarás en esta lección'
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
              <p className={styles.eyebrow}>PRÁCTICA</p>

              <h2 id="practice-heading">Ejercicios</h2>
            </div>

            {lesson?.exercises?.length ? (
              <span className={styles.exerciseCount}>
                {lesson.exercises.length} de {lesson.exercises.length}
              </span>
            ) : null}
          </div>

          {lesson?.exercises?.length ? (
            lesson.exercises.map((exercise, index) => (
              <div key={`${exercise.type}-${index}`}>
                {renderExercise({
                  exercise,
                  lessonKey,
                  nextLessonHref:
                    index === lesson.exercises.length - 1
                      ? nextLessonHref
                      : undefined,
                })}
              </div>
            ))
          ) : (
            <div className={styles.practiceCard}>
              <span className={styles.practiceNumber}>1</span>

              <div>
                <h3>Comprueba lo que aprendiste</h3>

                <p>
                  Los ejercicios interactivos con corrección inmediata aparecerán
                  aquí después del video.
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
              href={`/lecciones/${normalizedLevel}/${previousLesson}`}
              className={styles.navigationLink}
            >
              <span>← Anterior</span>
              <strong>Lección {previousLesson}</strong>
            </Link>
          ) : (
            <span className={styles.navigationSpacer} />
          )}

          {nextLessonHref ? (
            <Link href={nextLessonHref} className={styles.navigationLink}>
              <span>Siguiente →</span>
              <strong>Lección {lessonNumber + 1}</strong>
            </Link>
          ) : (
            <Link
              href={`/lecciones/${normalizedLevel}`}
              className={styles.navigationLink}
            >
              <span>Final del nivel</span>
              <strong>Volver a {level.code}</strong>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}