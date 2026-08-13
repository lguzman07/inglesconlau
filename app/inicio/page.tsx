'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import styles from './Inicio.module.css';

export default function InicioPage() {
  const [indicatedLevel, setIndicatedLevel] = useState('');
  const [gender, setGender] = useState('');
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoadingProfile(false);
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('english_level, gender')
        .eq('id', user.id)
        .maybeSingle();

      if (profile?.english_level) {
        setIndicatedLevel(profile.english_level);
      }

      if (profile?.gender) {
        setGender(profile.gender);
      }

      setIsLoadingProfile(false);
    }

    loadProfile();
  }, []);

  function getGreeting() {
    if (gender === 'Masculino') {
      return '¡Hola! ¿Listo para continuar?';
    }

    if (gender === 'Prefiero no decirlo') {
      return '¡Hola! ¿Todo listo para continuar?';
    }

    return '¡Hola! ¿Lista para continuar?';
  }

  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Inglés Con Lau
        </Link>

        <nav className={styles.navigation} aria-label="Navegación principal">
          <Link href="/inicio" className={styles.activeLink}>
            Inicio
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
        <section className={styles.welcome}>
          <div>
            <p className={styles.eyebrow}>MI ESPACIO DE APRENDIZAJE</p>

            <h1 className={styles.title}>
              {isLoadingProfile ? '¡Hola!' : getGreeting()}
            </h1>

            <p className={styles.description}>
              Sigue avanzando a tu ritmo. Cada paso cuenta.
            </p>
          </div>
        </section>

        <section className={styles.summaryGrid}>
          <article className={styles.summaryCard}>
            <p className={styles.cardLabel}>Nivel actual</p>
            <p className={styles.cardValue}>A1</p>
            <p className={styles.cardText}>Principiante</p>

            <p className={styles.cardText}>
              *Calculado según las lecciones completadas.
            </p>

            <p className={styles.cardText}>
              Nivel indicado al registrarte:{' '}
              <strong>
                {isLoadingProfile
                  ? 'Cargando...'
                  : indicatedLevel || 'No indicado'}
              </strong>
            </p>
          </article>

          <article className={styles.summaryCard}>
            <p className={styles.cardLabel}>Progreso general</p>
            <p className={styles.cardValue}>0%</p>

            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-label="Progreso general"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
            >
              <span
                className={styles.progressBar}
                style={{ width: '0%' }}
              />
            </div>
          </article>

          <article className={styles.summaryCard}>
            <p className={styles.cardLabel}>Lecciones completadas</p>
            <p className={styles.cardValue}>0</p>
            <p className={styles.cardText}>Sigue avanzando</p>
          </article>
        </section>

        <section className={styles.contentGrid}>
          <article className={styles.currentLesson}>
            <div>
              <p className={styles.cardLabel}>
                CONTINÚA DONDE TE QUEDASTE
              </p>

              <h2 className={styles.sectionTitle}>Tu primera lección</h2>

              <p className={styles.cardText}>
                Comienza tu recorrido y construye una base sólida en inglés.
              </p>
            </div>

            <button type="button" className={styles.lessonButton}>
              Comenzar lección
            </button>
          </article>

          <aside className={styles.readingClub}>
            <p className={styles.cardLabel}>CLUB DE LECTURA</p>
            <h2 className={styles.sectionTitle}>Próxima sesión</h2>
            <p className={styles.clubDay}>Jueves</p>

            <p className={styles.cardText}>
              7:00 p. m. – 9:00 p. m.
              <br />
              Hora de República Dominicana
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}