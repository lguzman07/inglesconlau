import Image from 'next/image';
import Text from './Text';
import styles from '../Roadmap/Roadmap.module.css';

export default function StepOne() {
  return (
    <section className={styles.stepOne}>
      <div className={styles.twoColumn}>
        <Text />

        <a
          className={styles.lessonPdf}
          href="/pdfs/lesson-1.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir el PDF de la lección 1"
        >
          <Image
            className={styles.lessonPdfPreview}
            src="/images/lesson-1-preview.png"
            alt="Vista previa de la lección 1: cómo presentarte en inglés"
            width={1440}
            height={810}
          />

          <span className={styles.lessonPdfLabel}>Ver la lección en PDF →</span>
        </a>
      </div>

      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          ¿Listo para el siguiente paso?
        </h2>

        <p className={styles.ctaText}>
          Empieza hoy y aprende inglés con confianza.
        </p>

        <a href="/plan" className={styles.ctaButton}>
          Ver el plan →
        </a>
      </div>
    </section>
  );
}
