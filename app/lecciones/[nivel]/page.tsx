import Link from 'next/link';
import { notFound } from 'next/navigation';
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

export default function NivelPage({
  params,
}: {
  params: {
    nivel: string;
  };
}) {
  const normalizedLevel = params.nivel.toLowerCase();
  const level = levels[normalizedLevel];

  if (!level) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link
          href="/lecciones"
          className={styles.backLink}
        >
          ← Todas las lecciones
        </Link>

        <section className={styles.hero}>
          <span className={styles.levelBadge}>
            {level.code}
          </span>

          <p className={styles.eyebrow}>
            RUTA DEL NIVEL
          </p>

          <h1 className={styles.title}>
            {level.title}
          </h1>

          <p className={styles.description}>
            {level.description}
          </p>

          <div className={styles.startCard}>
            <div>
              <p className={styles.startEyebrow}>
                RECOMENDACIÓN
              </p>

              <h2>
                Empieza por:{' '}
                {getLessonTitle(normalizedLevel, 1)}
              </h2>

              <p>
                Las lecciones están organizadas en orden para
                que siempre sepas qué estudiar después.
              </p>
            </div>

            <span className={styles.startNumber}>
              01
            </span>
          </div>
        </section>

        <section
          className={styles.lessonSection}
          aria-labelledby="lesson-heading"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                LECCIONES
              </p>

              <h2 id="lesson-heading">
                Tu recorrido de {level.code}
              </h2>
            </div>

            <p>
              {level.lessonCount} lecciones
            </p>
          </div>

          <ol className={styles.lessonList}>
            {Array.from(
              { length: level.lessonCount },
              (_, index) => {
                const number = index + 1;

                const lessonTitle = getLessonTitle(
                  normalizedLevel,
                  number,
                );

                return (
                  <li key={number}>
                    <Link
                      href={`/lecciones/${params.nivel}/${number}`}
                      className={styles.lessonCard}
                      aria-label={`Abrir ${lessonTitle} de ${level.code}`}
                    >
                      <span
                        className={styles.lessonNumber}
                      >
                        {String(number).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <div
                        className={styles.lessonContent}
                      >
                        <h3>{lessonTitle}</h3>

                        <p>
                          Abre la lección para ver su video,
                          ejercicios y progreso.
                        </p>
                      </div>

                      <span
                        className={styles.openLesson}
                      >
                        Abrir lección{' '}
                        <span aria-hidden="true">
                          →
                        </span>
                      </span>
                    </Link>
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