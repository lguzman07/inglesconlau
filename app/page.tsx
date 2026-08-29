'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { createClient } from '@/lib/supabase/client';

import styles from './Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    async function redirectAuthenticatedUser() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        router.replace('/inicio');
      }
    }

    void redirectAuthenticatedUser();
  }, [router]);

  return (
    <main className={`${styles.page} marketing-page`}>
      <div className={styles.logo}>Inglés con Lau</div>

      <div className={styles.intro}>
        <p className="section-eyebrow">INGLÉS PARA HISPANOHABLANTES</p>
        <h1 className={styles.title}>¿Cómo quieres aprender?</h1>
        <p className={styles.subtitle}>Elige tu camino para empezar.</p>
      </div>

      <div className={styles.choices}>
        <Link href="/en-vivo" className={styles.choiceCard}>
          <span className={styles.choiceBadge}>Disponible ahora</span>
          <h2>Clases en vivo</h2>
          <p>
            Grupos pequeños, en vivo, con un horario fijo que eliges una sola
            vez. Empieza probando por RD$100.
          </p>
          <span className={styles.choiceLink}>Ver clases en vivo →</span>
        </Link>

        <Link href="/plataforma" className={styles.choiceCard}>
          <span className={`${styles.choiceBadge} ${styles.choiceBadgeSoon}`}>
            Próximamente
          </span>
          <h2>Plataforma de lecciones grabadas</h2>
          <p>
            Lecciones grabadas, ejercicios interactivos y tu progreso, a tu
            ritmo y sin horario fijo. Todavía en construcción.
          </p>
          <span className={styles.choiceLink}>Anotarme en la lista →</span>
        </Link>
      </div>
    </main>
  );
}
