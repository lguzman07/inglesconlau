import styles from './Text.module.css';

const benefits = [
  'Saludar de forma natural.',
  'Presentarte con confianza.',
  'Construir oraciones sencillas.',
  'Sentirte cómodo hablando desde el inicio.',
];

export default function Text() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>
        Empieza a hablar inglés desde el primer día.
      </h2>

      <p className={styles.description}>
        No necesitas memorizar cientos de palabras antes de empezar a hablar.
        Desde la primera lección practicarás frases sencillas que podrás usar en
        situaciones reales.
      </p>

      <div className={styles.benefits}>
        {benefits.map((item) => (
          <div className={styles.benefit} key={item}>
            <span className={styles.check} aria-hidden="true">
              ✓
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
