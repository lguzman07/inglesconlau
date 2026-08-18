import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './Nivel.module.css';

type Level = {
  code: string;
  title: string;
  description: string;
  lessonCount: number;
};

const levels: Record<string, Level> = {
  a0: { code: 'A0', title: 'Primeros pasos', description: 'Una base clara para comenzar a entender y usar inglés desde cero.', lessonCount: 16 },
  a1: { code: 'A1', title: 'Principiante', description: 'Frases y vocabulario para comunicarte en situaciones cotidianas.', lessonCount: 27 },
  a2: { code: 'A2', title: 'Básico', description: 'Más confianza para hablar de experiencias, planes y situaciones frecuentes.', lessonCount: 26 },
  b1: { code: 'B1', title: 'Intermedio', description: 'Comunica ideas, opiniones y experiencias con mayor independencia.', lessonCount: 25 },
  'b1+': { code: 'B1+', title: 'Intermedio alto', description: 'Refuerza fluidez y precisión al expresar ideas más detalladas.', lessonCount: 25 },
  b2: { code: 'B2', title: 'Intermedio avanzado', description: 'Comprende contenido más complejo y argumenta con confianza.', lessonCount: 25 },
  c1: { code: 'C1', title: 'Avanzado', description: 'Comunícate con precisión y naturalidad en contextos complejos.', lessonCount: 27 },
};

function lessonLabel(number: number) {
  return `Lección ${number}`;
}

export default async function NivelPage({ params }: { params: Promise<{ nivel: string }> }) {
  const { nivel } = await params;
  const level = levels[nivel.toLowerCase()];

  if (!level) notFound();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/lecciones" className={styles.backLink}>← Todas las lecciones</Link>

        <section className={styles.hero}>
          <span className={styles.levelBadge}>{level.code}</span>
          <p className={styles.eyebrow}>RUTA DEL NIVEL</p>
          <h1 className={styles.title}>{level.title}</h1>
          <p className={styles.description}>{level.description}</p>
          <div className={styles.startCard}>
            <div>
              <p className={styles.startEyebrow}>RECOMENDACIÓN</p>
              <h2>Empieza por la lección 1</h2>
              <p>Las lecciones están organizadas en orden para que siempre sepas qué estudiar después.</p>
            </div>
            <span className={styles.startNumber}>01</span>
          </div>
        </section>

        <section className={styles.lessonSection} aria-labelledby="lesson-heading">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>LECCIONES</p>
              <h2 id="lesson-heading">Tu recorrido de {level.code}</h2>
            </div>
            <p>{level.lessonCount} lecciones</p>
          </div>

          <ol className={styles.lessonList}>
            {Array.from({ length: level.lessonCount }, (_, index) => {
              const number = index + 1;
              return (
                <li key={number} className={styles.lessonCard}>
                  <span className={styles.lessonNumber}>{String(number).padStart(2, '0')}</span>
                  <div className={styles.lessonContent}>
                    <h3>{lessonLabel(number)}</h3>
                    <p>El título, video y ejercicios de esta lección se añadirán aquí.</p>
                  </div>
                  <span className={styles.status}>Próximamente</span>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}
