import Link from 'next/link';

import styles from './Plan.module.css';

const platformBenefits = [
  'Acceso a todos los niveles, desde A0 hasta C1.',
  'Cada lección incluye su propio video explicativo.',
  'Ejercicios interactivos con corrección inmediata.',
  'Visualización de tu progreso dentro de la plataforma.',
  'Consejos de pronunciación para hispanohablantes.',
];

const liveClassBenefits = [
  '5 clases grupales de una hora.',
  'Clases de lunes a viernes.',
  'Eliges un mismo horario para toda la semana.',
  'Máximo 10 estudiantes por grupo.',
  'Clases en vivo del nivel A1.',
  'Puedes comprar un nuevo paquete cada semana.',
  'Confirmación del cupo después de verificar tu transferencia.',
];

export default function Plan() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>APRENDE INGLÉS CON LAU</p>

          <h1 className={styles.title}>Elige cómo quieres aprender.</h1>

          <p className={styles.description}>
            Reserva tus clases grupales en vivo o conoce el plan completo que
            estará disponible próximamente.
          </p>
        </header>

        <div className={styles.cardGrid}>
          <section className={styles.planCard}>
            <div className={styles.planHeading}>
              <div>
                <p className={styles.planName}>
                  Plataforma Inglés con Lau
                </p>

                <div className={styles.price}>
                  <span className={styles.currency}>RD$</span>
                  <span className={styles.amount}>1,200</span>
                  <span className={styles.period}>/mes</span>
                </div>
              </div>

              <span className={styles.badge}>Próximamente</span>
            </div>

            <ul className={styles.benefits}>
              {platformBenefits.map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`${styles.button} ${styles.buttonDisabled}`}
              disabled
              aria-disabled="true"
            >
              Disponible próximamente
            </button>

            <div className={styles.conditions}>
              <span>La plataforma está en desarrollo.</span>
            </div>
          </section>

          <section className={`${styles.planCard} ${styles.availableCard}`}>
            <div className={styles.planHeading}>
              <div>
                <p className={styles.planName}>
                  Paquete de clases grupales A1
                </p>

                <div className={styles.price}>
                  <span className={styles.currency}>RD$</span>
                  <span className={styles.amount}>600</span>
                  <span className={styles.period}>/semana</span>
                </div>
              </div>

              <span className={`${styles.badge} ${styles.badgeAvailable}`}>
                Disponible
              </span>
            </div>

            <ul className={styles.benefits}>
              {liveClassBenefits.map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/clases-grupales" className={styles.button}>
              Reservar mis 5 clases
            </Link>

            <div className={styles.conditions}>
              <span>Pago por transferencia bancaria.</span>
              <span>Cupo sujeto a disponibilidad.</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}