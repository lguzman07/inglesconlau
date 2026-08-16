import Link from 'next/link';
import styles from './Lecciones.module.css';

const levels = [
  {
    level: 'A0',
    title: 'Primeros pasos',
    description:
      'Empieza desde cero: alfabeto, sonidos, saludos, presentarte y vocabulario esencial.',
  },
  {
    level: 'A1',
    title: 'Principiante',
    description:
      'Construye frases sencillas para hablar de ti, tu rutina, tu familia y tu entorno.',
  },
  {
    level: 'A2',
    title: 'Básico',
    description:
      'Habla sobre experiencias cotidianas, planes, compras, viajes y situaciones frecuentes.',
  },
  {
    level: 'B1',
    title: 'Intermedio',
    description:
      'Exprésate con mayor independencia, comparte opiniones y entiende conversaciones reales.',
  },
  {
    level: 'B1+',
    title: 'Intermedio alto',
    description:
      'Refuerza tu fluidez, amplía tu vocabulario y aprende a comunicar ideas más detalladas.',
  },
  {
    level: 'B2',
    title: 'Intermedio avanzado',
    description:
      'Argumenta, debate y comprende contenido más complejo con confianza.',
  },
  {
    level: 'C1',
    title: 'Avanzado',
    description:
      'Comunícate con precisión y naturalidad en situaciones académicas y profesionales.',
  },
];

export default function LeccionesPage() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Inglés Con Lau
        </Link>

        <nav className={styles.navigation} aria-label="Navegación principal">
          <Link href="/inicio" className={styles.navLink}>
            Inicio
          </Link>

          <Link href="/lecciones" className={styles.activeLink}>
            Lecciones
          </Link>

          <Link href="/completar-perfil" className={styles.navLink}>
            Mi perfil
          </Link>

          <Link href="/" className={styles.logoutButton}>
            Cerrar sesión
          </Link>
        </nav>
      </header>

      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>TU RUTA DE APRENDIZAJE</p>

          <h1 className={styles.title}>Todas tus lecciones</h1>

          <p className={styles.description}>
            Puedes avanzar a tu ritmo y explorar cualquier nivel cuando lo
            necesites. No hay contenido bloqueado.
          </p>

          <Link href="/inicio" className={styles.backButton}>
            Volver a mi inicio
          </Link>
        </section>

        <section className={styles.infoCard} aria-label="Información de acceso">
          <div className={styles.infoIcon} aria-hidden="true">
            ✓
          </div>

          <div>
            <h2 className={styles.infoTitle}>Todo el contenido está disponible</h2>
            <p className={styles.infoText}>
              Puedes repasar una lección anterior, comenzar desde el inicio o
              explorar un tema que quieras reforzar.
            </p>
          </div>
        </section>

        <section className={styles.levelsSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>NIVELES</p>
              <h2 className={styles.sectionTitle}>Elige por dónde continuar</h2>
            </div>

            <p className={styles.sectionNote}>
              Próximamente podrás abrir cada nivel y elegir una lección.
            </p>
          </div>

          <div className={styles.levelGrid}>
            {levels.map((item) => (
              <article key={item.level} className={styles.levelCard}>
                <div className={styles.levelTop}>
                  <span className={styles.levelBadge}>{item.level}</span>
                  <span className={styles.comingSoon}>En preparación</span>
                </div>

                <h3 className={styles.levelTitle}>{item.title}</h3>

                <p className={styles.levelDescription}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}