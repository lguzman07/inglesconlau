import Link from 'next/link';

import styles from './Plan.module.css';

const platformBenefits = [
  'Acceso a todos los niveles, desde A0 hasta C1.',
  'Cada lección incluye su propio video explicativo.',
  'Ejercicios interactivos con corrección inmediata.',
  'Visualización de tu progreso dentro de la plataforma.',
  'Acceso a la lectura en vivo todos los jueves.',
  'Consejos de pronunciación para hispanohablantes.',
  'Grabaciones de la lectura en vivo disponibles durante 30 días.',
];

const groupClassPackages = [
  {
    id: '5',
    name: 'Paquete flexible',
    amount: '600',
    period: '/5 clases',
    badge: 'Disponible',
    button: 'Comprar 5 clases',
    benefits: [
      '5 clases grupales en vivo de una hora.',
      'RD$120 por cada clase.',
      'Puedes escoger entre A1, A2, B1 y B2.',
      'Eliges la fecha y el horario de cada clase.',
      'Máximo 12 estudiantes por grupo.',
      'Tus clases permanecen disponibles hasta agotarlas.',
      'Puedes explorar un nivel diferente cuando quieras.',
    ],
  },
  {
    id: '20',
    name: '4 Semanas',
    amount: '1,900',
    period: '/20 clases',
    badge: 'Ahorra RD$500',
    button: 'Comprar las 4 semanas',
    benefits: [
      '20 clases grupales en vivo de una hora.',
      'RD$95 por cada clase.',
      'Ahorras RD$500 frente a cuatro paquetes pequeños.',
      'Puedes escoger entre A1, A2, B1 y B2.',
      'Eliges la fecha y el horario de cada clase.',
      'Máximo 12 estudiantes por grupo.',
      'Tus clases permanecen disponibles hasta agotarlas.',
    ],
  },
  {
    id: '80',
    name: 'Curso completo',
    amount: '7,000',
    period: '/80 clases',
    badge: 'Mejor valor',
    button: 'Comprar el curso completo',
    benefits: [
      '80 clases grupales en vivo de una hora.',
      'RD$87.50 por cada clase.',
      'Ahorras RD$2,600 frente a paquetes de cinco clases.',
      'Puedes escoger entre A1, A2, B1 y B2.',
      'Eliges la fecha y el horario de cada clase.',
      'Máximo 12 estudiantes por grupo.',
      'Tus clases permanecen disponibles hasta agotarlas.',
    ],
  },
];

export default function Plan() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>
            APRENDE INGLÉS CON LAU
          </p>
          <h1 className={styles.title}>
            Elige cómo quieres aprender.
          </h1>
          <p className={styles.description}>
            Compra clases grupales para usar en cualquier
            nivel o conoce el plan completo de la plataforma,
            disponible próximamente.
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
              <span className={styles.badge}>
                Próximamente
              </span>
            </div>

            <ul className={styles.benefits}>
              {platformBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className={styles.benefit}
                >
                  <span
                    className={styles.check}
                    aria-hidden="true"
                  >
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

          {groupClassPackages.map((classPackage) => (
            <section
              key={classPackage.id}
              className={`${styles.planCard} ${styles.availableCard}`}
            >
              <div className={styles.planHeading}>
                <div>
                  <p className={styles.planName}>
                    {classPackage.name}
                  </p>
                  <div className={styles.price}>
                    <span className={styles.currency}>RD$</span>
                    <span className={styles.amount}>
                      {classPackage.amount}
                    </span>
                    <span className={styles.period}>
                      {classPackage.period}
                    </span>
                  </div>
                </div>
                <span
                  className={`${styles.badge} ${styles.badgeAvailable}`}
                >
                  {classPackage.badge}
                </span>
              </div>

              <ul className={styles.benefits}>
                {classPackage.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className={styles.benefit}
                  >
                    <span
                      className={styles.check}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/clases-grupales?paquete=${classPackage.id}#comprar`}
                className={styles.button}
              >
                {classPackage.button}
              </Link>

              <div className={styles.conditions}>
                <span>Pago por transferencia bancaria.</span>
                <span>Cupo sujeto a disponibilidad.</span>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
