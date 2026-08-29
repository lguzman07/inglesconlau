import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PlatformWaitlistForm from '@/components/PlatformWaitlistForm/PlatformWaitlistForm';

import styles from './Plataforma.module.css';

export const metadata: Metadata = {
  title: 'Plataforma Inglés con Lau (Próximamente)',
  description:
    'Lecciones grabadas, ejercicios interactivos y tu progreso, a tu ritmo. Todavía en construcción — apúntate para que te avise el día que abra.',
};

const steps = [
  { icon: '🎥', label: 'Ver el video de la lección' },
  { icon: '🎧', label: 'Escuchar y repetir' },
  { icon: '🧠', label: 'Entender el significado' },
  { icon: '💬', label: 'Practicar la conversación' },
  { icon: '✍️', label: 'Realizar los ejercicios' },
  { icon: '🌎', label: 'Vivir el inglés' },
];

export default function PlataformaPage() {
  return (
    <main className={`${styles.page} marketing-page`}>
      <header className={styles.topNav}>
        <Link href="/" className={styles.logo}>
          Inglés con Lau
        </Link>
        <Link href="/en-vivo" className="secondary-button">
          <span className="button-title">Ver clases en vivo</span>
        </Link>
      </header>

      <section className={styles.hero}>
        <p className="section-eyebrow">EN CONSTRUCCIÓN</p>
        <h1>
          Plataforma <span className="hero-highlight">Inglés con Lau.</span>
        </h1>
        <p className={styles.heroDescription}>
          Lecciones grabadas, ejercicios interactivos y tu progreso, a tu
          ritmo y sin horario fijo. Todavía la estoy construyendo — apúntate
          y te aviso por correo el día que abra.
        </p>

        <div className={styles.waitlistBlock}>
          <PlatformWaitlistForm />
        </div>

        <p className={styles.switchNote}>
          ¿Quieres empezar ya?{' '}
          <Link href="/en-vivo">Mira las clases en vivo →</Link>
        </p>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">ASÍ SE VERÁN TUS LECCIONES</p>
            <h2 className="section-title">Tu recorrido, paso a paso.</h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div className={styles.stepCard} key={step.label}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepIcon} aria-hidden="true">{step.icon}</span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <p className="section-eyebrow">VISTA PREVIA</p>
              <h2 className="section-title">Así se ve una lección.</h2>
              <p>
                Cada lección tendrá su propio video explicativo y un PDF de
                apoyo, como este ejemplo de la lección de presentarte en
                inglés.
              </p>
            </div>

            <a
              className={styles.lessonPreviewLink}
              href="/pdfs/A1/lesson-1.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir el PDF de ejemplo de la lección 1"
            >
              <Image
                className={styles.lessonPreviewImage}
                src="/images/lesson-1-preview.png"
                alt="Vista previa de la lección: cómo presentarte en inglés"
                width={1440}
                height={810}
              />
              <span className={styles.lessonPreviewLabel}>
                Ver el PDF de ejemplo →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container">
          <h2 className="section-title">
            Te aviso en cuanto <span className="hero-highlight">abra.</span>
          </h2>
          <p>Deja tu correo arriba y sé de las primeras personas en probarla.</p>
        </div>
      </section>
    </main>
  );
}
