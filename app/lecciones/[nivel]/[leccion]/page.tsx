import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  if (!/^\d+$/.test(value)) return null;

  const number = Number(value);

  return Number.isSafeInteger(number) && number > 0
    ? number
    : null;
}

export default function LeccionPage({
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

  const lessonTitle = getLessonTitle(
    normalizedLevel,
    lessonNumber,
  );

  const previousLesson =
    lessonNumber > 1 ? lessonNumber - 1 : null;

  const nextLesson =
    lessonNumber < level.lessonCount
      ? lessonNumber + 1
      : null;

  const previousLessonTitle = previousLesson
    ? getLessonTitle(normalizedLevel, previousLesson)
    : null;

  const nextLessonTitle = nextLesson
    ? getLessonTitle(normalizedLevel, nextLesson)
    : null;

  const currentLevelIndex =
    levelOrder.indexOf(normalizedLevel);

  const nextLevelKey =
    currentLevelIndex >= 0 &&
    currentLevelIndex < levelOrder.length - 1
      ? levelOrder[currentLevelIndex + 1]
      : null;

  const nextLevel = nextLevelKey
    ? levels[nextLevelKey]
    : null;

  return (
    <main className={styles.main}>
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
              Esta página será tu guía completa: video,
              práctica y avance de la lección en un mismo
              lugar.
            </p>
          </div>

          <span className={styles.lessonPosition}>
            {String(lessonNumber).padStart(2, '0')} /{' '}
            {String(level.lessonCount).padStart(2, '0')}
          </span>
        </section>

        <section
          className={styles.videoSection}
          aria-labelledby="video-heading"
        >
          <div className={styles.videoPlaceholder}>
            <div
              className={styles.playIcon}
              aria-hidden="true"
            >
              ▶
            </div>

            <p>Tu video aparecerá aquí</p>

            <span>
              Cuando grabes esta lección, añadiremos el video
              en este espacio.
            </span>
          </div>

          <div className={styles.videoDetails}>
            <p className={styles.eyebrow}>
              VIDEO DE LA LECCIÓN
            </p>

            <h2 id="video-heading">
              Aprende paso a paso
            </h2>

            <p>
              Aquí explicarás el tema con ejemplos claros. Las
              estudiantes podrán pausar, volver a ver el video
              y seguir a su propio ritmo.
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
              Lo que lograrás en esta lección
            </h2>

            <p>
              Añadiremos el objetivo específico cuando
              definamos el contenido de esta lección.
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

            <span className={styles.comingSoon}>
              En preparación
            </span>
          </div>

          <div className={styles.practiceCard}>
            <span className={styles.practiceNumber}>
              1
            </span>

            <div>
              <h3>
                Comprueba lo que aprendiste
              </h3>

              <p>
                Los ejercicios interactivos con corrección
                inmediata aparecerán aquí después del video.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.completionCard}>
          <div>
            <p className={styles.eyebrow}>
              TU PROGRESO
            </p>

            <h2>
              Cuando termines, podrás marcar esta lección
              como completada.
            </h2>

            <p>
              Conectaremos este botón al progreso guardado
              de cada estudiante.
            </p>
          </div>

          <button
            type="button"
            className={styles.completeButton}
            disabled
          >
            Marcar como completada
          </button>
        </section>

        <nav
          className={styles.lessonNavigation}
          aria-label="Navegación entre lecciones"
        >
          {previousLesson && previousLessonTitle ? (
            <Link
              href={`/lecciones/${nivel}/${previousLesson}`}
              className={styles.navigationLink}
            >
              <span>← Anterior</span>
              <strong>
                {previousLessonTitle}
              </strong>
            </Link>
          ) : (
            <span
              className={styles.navigationSpacer}
            />
          )}

          {nextLesson && nextLessonTitle ? (
            <Link
              href={`/lecciones/${nivel}/${nextLesson}`}
              className={styles.navigationLink}
            >
              <span>Siguiente →</span>
              <strong>
                {nextLessonTitle}
              </strong>
            </Link>
          ) : nextLevelKey && nextLevel ? (
            <Link
              href={`/lecciones/${nextLevelKey}`}
              className={styles.navigationLink}
            >
              <span>Siguiente nivel →</span>
              <strong>
                {nextLevel.code} · {nextLevel.title}
              </strong>
            </Link>
          ) : (
            <Link
              href="/lecciones"
              className={styles.navigationLink}
            >
              <span>Recorrido completado</span>
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