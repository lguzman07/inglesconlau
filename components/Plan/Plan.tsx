import Link from 'next/link';
import styles from './Plan.module.css';

const benefits = [
  'Acceso a todos los niveles, desde A1 hasta C1.',
  'Cada lección incluye su propio video explicativo.',
  'Ejercicios interactivos dentro de la plataforma con corrección inmediata y seguimiento de tu progreso.',
  'Acceso al club de lectura todos los jueves, de 7:00 p. m. a 9:00 p. m. (hora de República Dominicana).',
  'Consejos de pronunciación diseñados específicamente para hispanohablantes.',
  'Traducciones al español personalizables dentro de las lecciones.',
  'Acceso inmediato al contenido disponible y a todas las novedades mientras tu suscripción esté activa.',
  'Seguimiento general de tu progreso dentro de la plataforma.',
  'Grabaciones del club disponibles durante 30 días.',
];

export default function Plan() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>UN SOLO PLAN. TODO INCLUIDO.</p>

          <h1 className={styles.title}>
            Aprende inglés a tu ritmo y con confianza.
          </h1>

          <p className={styles.description}>
            Accede a todas las lecciones, recursos y herramientas de Inglés Con
            Lau con una sola suscripción.
          </p>
        </header>

        <section className={styles.planCard}>
          <div className={styles.planHeading}>
            <div>
              <p className={styles.planName}>Plan completo</p>

              <div className={styles.price}>
                <span className={styles.currency}>RD$</span>
                <span className={styles.amount}>1,200</span>
                <span className={styles.period}>/mes</span>
              </div>
            </div>

            <span className={styles.badge}>Todo incluido</span>
          </div>

          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>

                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a href="#suscripcion" className={styles.button}>
            Comenzar mi suscripción
          </a>

          <div className={styles.conditions}>
            <span>Sin cargos ocultos.</span>
            <span>Cancela cuando quieras.</span>
          </div>
        </section>
      </div>
    </main>
  );
}