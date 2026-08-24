import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  verbTensesLessonCount,
} from '@/content/labs/verb-tenses';
import { createClient } from '@/lib/supabase/server';

import styles from './Labs.module.css';

export default async function LabsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link
          href="/inicio"
          className={styles.backLink}
        >
          ← Volver a Inicio
        </Link>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            PRÁCTICA POR TEMA
          </p>

          <h1>Labs de inglés</h1>

          <p className={styles.description}>
            Refuerza temas específicos siguiendo rutas
            organizadas con las mismas lecciones y el mismo
            progreso de tu recorrido general.
          </p>
        </section>

        <section
          className={styles.labsSection}
          aria-labelledby="available-labs"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                DISPONIBLES
              </p>

              <h2 id="available-labs">
                Elige un Lab
              </h2>
            </div>

            <p>
              Más rutas temáticas aparecerán aquí
              próximamente.
            </p>
          </div>

          <div className={styles.labsGrid}>
            <article className={styles.labCard}>
              <div className={styles.cardTop}>
                <span className={styles.labBadge}>
                  VERB TENSES LAB
                </span>

                <span className={styles.availableBadge}>
                  Disponible
                </span>
              </div>

              <div className={styles.labContent}>
                <p className={styles.cardEyebrow}>
                  A0 → C1
                </p>

                <h3>
                  Domina los tiempos verbales
                </h3>

                <p>
                  Estudia presente, pasado, futuro y
                  tiempos perfectos siguiendo un orden
                  claro desde los fundamentos hasta el
                  dominio avanzado.
                </p>
              </div>

              <div className={styles.cardDetails}>
                <span>
                  {verbTensesLessonCount} lecciones
                </span>

                <span>9 módulos</span>
              </div>

              <Link
                href="/labs/verb-tenses"
                className={styles.openButton}
              >
                Abrir el Lab

                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.information}>
          <div
            className={styles.informationIcon}
            aria-hidden="true"
          >
            ✓
          </div>

          <div>
            <h2>
              Tu progreso se mantiene conectado
            </h2>

            <p>
              Las lecciones de los Labs no están
              duplicadas. Cuando completas una lección
              desde un Lab, también aparece completada en
              su nivel original.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}