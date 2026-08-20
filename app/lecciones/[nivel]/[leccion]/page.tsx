import Link from 'next/link';
import { notFound } from 'next/navigation';
import FillInTheBlanks, {
  type FillInTheBlanksQuestion,
} from '@/components/FillInTheBlanks/FillInTheBlanks';
import LessonOpenedTracker from '@/components/LessonOpenedTracker/LessonOpenedTracker';
import styles from './Leccion.module.css';

type Level = {
  code: string;
  title: string;
  lessonCount: number;
};

const levels: Record<string, Level> = {
  a0: { code: 'A0', title: 'Primeros pasos', lessonCount: 16 },
  a1: { code: 'A1', title: 'Principiante', lessonCount: 27 },
  a2: { code: 'A2', title: 'Básico', lessonCount: 26 },
  b1: { code: 'B1', title: 'Intermedio', lessonCount: 25 },
  'b1+': { code: 'B1+', title: 'Intermedio alto', lessonCount: 25 },
  b2: { code: 'B2', title: 'Intermedio avanzado', lessonCount: 25 },
  c1: { code: 'C1', title: 'Avanzado', lessonCount: 27 },
};

const firstLessonQuestions: FillInTheBlanksQuestion[] = [
  {
    id: 1,
    before: [{ word: 'I', translation: 'yo' }],
    after: [
      { word: 'a', translation: 'un / una' },
      { word: 'teacher.', translation: 'profesor / profesora' },
    ],
    answer: 'am',
    sentenceTranslation: 'Soy profesor o profesora.',
  },
  {
    id: 2,
    before: [{ word: 'I', translation: 'yo' }],
    after: [{ word: 'Dominican.', translation: 'dominicano / dominicana' }],
    answer: 'am',
    sentenceTranslation: 'Soy dominicano o dominicana.',
  },
  {
    id: 3,
    before: [
      { word: 'My', translation: 'mi' },
      { word: 'name', translation: 'nombre' },
    ],
    after: [{ word: 'Ana.', translation: 'Ana' }],
    answer: 'is',
    sentenceTranslation: 'Mi nombre es Ana.',
  },
  {
    id: 4,
    before: [{ word: 'I', translation: 'yo' }],
    after: [
      { word: 'a', translation: 'un / una' },
      { word: 'student.', translation: 'estudiante' },
    ],
    answer: 'am',
    sentenceTranslation: 'Soy estudiante.',
  },
  {
    id: 5,
    before: [
      { word: 'My', translation: 'mi' },
      { word: 'name', translation: 'nombre' },
    ],
    after: [{ word: 'Carlos.', translation: 'Carlos' }],
    answer: 'is',
    sentenceTranslation: 'Mi nombre es Carlos.',
  },
  {
    id: 6,
    before: [{ word: 'I', translation: 'yo' }],
    after: [
      { word: 'from', translation: 'de' },
      { word: 'the', translation: 'el / la' },
      {
        word: 'Dominican Republic.',
        translation: 'República Dominicana',
      },
    ],
    answer: 'am',
    sentenceTranslation: 'Soy de República Dominicana.',
  },
  {
    id: 7,
    before: [
      { word: 'My', translation: 'mi' },
      { word: 'name', translation: 'nombre' },
    ],
    after: [{ word: 'María.', translation: 'María' }],
    answer: 'is',
    sentenceTranslation: 'Mi nombre es María.',
  },
  {
    id: 8,
    before: [{ word: 'I', translation: 'yo' }],
    after: [
      { word: 'a', translation: 'un / una' },
      { word: 'doctor.', translation: 'médico / médica' },
    ],
    answer: 'am',
    sentenceTranslation: 'Soy médico o médica.',
  },
  {
    id: 9,
    before: [{ word: 'I', translation: 'yo' }],
    after: [
      { word: 'from', translation: 'de' },
      { word: 'Santo Domingo.', translation: 'Santo Domingo' },
    ],
    answer: 'am',
    sentenceTranslation: 'Soy de Santo Domingo.',
  },
  {
    id: 10,
    before: [
      { word: 'My', translation: 'mi' },
      { word: 'name', translation: 'nombre' },
    ],
    after: [{ word: 'Daniel.', translation: 'Daniel' }],
    answer: 'is',
    sentenceTranslation: 'Mi nombre es Daniel.',
  },
];

function getLessonNumber(value: string) {
  if (!/^\d+$/.test(value)) return null;

  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 ? number : null;
}

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ nivel: string; leccion: string }>;
}) {
  const { nivel, leccion } = await params;
  const level = levels[nivel.toLowerCase()];
  const lessonNumber = getLessonNumber(leccion);

  if (!level || !lessonNumber || lessonNumber > level.lessonCount) {
    notFound();
  }

  const isFirstLesson = nivel.toLowerCase() === 'a0' && lessonNumber === 1;
  const previousLesson = lessonNumber > 1 ? lessonNumber - 1 : null;
  const nextLesson = lessonNumber < level.lessonCount ? lessonNumber + 1 : null;
  const lessonKey = `${nivel.toLowerCase()}/${lessonNumber}`;

  const lessonTitle = isFirstLesson
    ? 'Presentarte: I am / My name is'
    : `Lección ${lessonNumber}`;

  const lessonDescription = isFirstLesson
    ? 'Aprende a decir quién eres, de dónde eres y cómo decir tu nombre en inglés.'
    : 'Esta página será tu guía completa: video, práctica y avance de la lección en un mismo lugar.';

  return (
    <main className={styles.main}>
      <LessonOpenedTracker lessonKey={lessonKey} />

      <div className={styles.container}>
        <Link href={`/lecciones/${nivel}`} className={styles.backLink}>
          ← Volver a {level.code}
        </Link>

        <section className={styles.heading} aria-labelledby="lesson-title">
          <div>
            <p className={styles.eyebrow}>
              {level.code} · {level.title}
            </p>
            <h1 id="lesson-title">{lessonTitle}</h1>
            <p className={styles.description}>{lessonDescription}</p>
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
            <div className={styles.playIcon} aria-hidden="true">
              ▶
            </div>
            <p>Tu video aparecerá aquí</p>
            <span>
              Cuando grabes esta lección, añadiremos el video en este espacio.
            </span>
          </div>

          <div className={styles.videoDetails}>
            <p className={styles.eyebrow}>VIDEO DE LA LECCIÓN</p>
            <h2 id="video-heading">
              {isFirstLesson
                ? 'Preséntate en inglés'
                : 'Aprende paso a paso'}
            </h2>
            <p>
              {isFirstLesson
                ? 'En este video aprenderás a usar “I am” y “My name is” para hablar de ti.'
                : 'Aquí explicarás el tema con ejemplos claros. Las estudiantes podrán pausar, volver a ver el video y seguir a su propio ritmo.'}
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
              {isFirstLesson
                ? 'Presentarte con oraciones sencillas.'
                : 'Lo que lograrás en esta lección'}
            </h2>
            <p>
              {isFirstLesson
                ? 'Al terminar, podrás decir tu nombre, tu profesión, tu nacionalidad y de dónde eres.'
                : 'Añadiremos el objetivo específico cuando definamos el contenido de esta lección.'}
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
            {isFirstLesson && (
              <span className={styles.exerciseCount}>1 de 1</span>
            )}
          </div>

          {isFirstLesson ? (
            <FillInTheBlanks
              title="Completa los espacios"
              instructions="Escribe am o is en cada espacio. Toca una palabra si quieres ver su traducción."
              lessonKey={lessonKey}
              questions={firstLessonQuestions}
              nextLessonHref={
                nextLesson ? `/lecciones/${nivel}/${nextLesson}` : undefined
              }
            />
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
              href={`/lecciones/${nivel}/${previousLesson}`}
              className={styles.navigationLink}
            >
              <span>← Anterior</span>
              <strong>Lección {previousLesson}</strong>
            </Link>
          ) : (
            <span className={styles.navigationSpacer} />
          )}

          {nextLesson ? (
            <Link
              href={`/lecciones/${nivel}/${nextLesson}`}
              className={styles.navigationLink}
            >
              <span>Siguiente →</span>
              <strong>Lección {nextLesson}</strong>
            </Link>
          ) : (
            <Link
              href={`/lecciones/${nivel}`}
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