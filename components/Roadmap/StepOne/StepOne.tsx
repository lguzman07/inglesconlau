import Text from './Text';
import Lesson from './Lesson';
import styles from '../Roadmap/Roadmap.module.css';

export default function StepOne() {
  return (
    <section className={styles.stepOne}>
      <div className={styles.twoColumn}>
        <Text />
        <Lesson />
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