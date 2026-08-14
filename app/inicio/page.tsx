'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import styles from './Inicio.module.css';

export default function InicioPage() {
  const [indicatedLevel, setIndicatedLevel] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('student');
  const [subscriptionStatus, setSubscriptionStatus] = useState('inactive');
  const [readingClubDate, setReadingClubDate] = useState('Jueves');
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    const now = new Date();
    const weekday = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      timeZone: 'America/Santo_Domingo',
    }).format(now);

    const weekdayIndex: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    const currentDay = weekdayIndex[weekday];
    const daysUntilThursday = (4 - currentDay + 7) % 7;
    const nextThursday = new Date(
      now.getTime() + daysUntilThursday * 24 * 60 * 60 * 1000
    );

    const formattedDate = new Intl.DateTimeFormat('es-DO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: 'America/Santo_Domingo',
    }).format(nextThursday);

    setReadingClubDate(
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    );
  }, []);

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
        .select('english_level, gender, role')
        .eq('id', user.id)
        .maybeSingle();

      if (profile?.english_level) {
        setIndicatedLevel(profile.english_level);
      }

      if (profile?.gender) {
        setGender(profile.gender);
      }

      if (profile?.role) {
        setRole(profile.role);
      }

      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('status')
        .eq('user_id', user.id)
        .maybeSingle();

      if (subscription?.status) {
        setSubscriptionStatus(subscription.status);
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

  const hasActiveAccess =
    role === 'admin' || subscriptionStatus === 'active';

  function getAccessLabel() {
    if (role === 'admin') {
      return 'Acceso administrativo';
    }

    return hasActiveAccess
      ? 'Suscripción activa'
      : 'Suscripción inactiva';
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
          <div className={styles.welcomeTop}>
            <p className={styles.eyebrow}>MI ESPACIO DE APRENDIZAJE</p>

            {!isLoadingProfile && (
              <div className={styles.accessStatus}>
                <span
                  className={`${styles.statusLight} ${
                    hasActiveAccess
                      ? styles.statusLightActive
                      : styles.statusLightInactive
                  }`}
                  aria-hidden="true"
                />

                <span>{getAccessLabel()}</span>
              </div>
            )}
          </div>

          <h1 className={styles.title}>
            {isLoadingProfile ? '¡Hola!' : getGreeting()}
          </h1>

          <p className={styles.description}>
            Sigue avanzando a tu ritmo. Cada paso cuenta.
          </p>
        </section>

        <section className={styles.primaryGrid}>
          <article className={styles.currentLesson}>
            <div>
              <p className={styles.cardLabel}>CONTINÚA DONDE TE QUEDASTE</p>

              <h2 className={styles.lessonTitle}>titulo de la leccion tbd</h2>
            </div>

            <button type="button" className={styles.lessonButton}>
              Comenzar lección
            </button>
          </article>

          <aside className={styles.readingClub}>
            <p className={styles.cardLabel}>CLUB DE LECTURA</p>
            <h2 className={styles.sectionTitle}>Próxima sesión</h2>
            <p className={styles.clubDay}>{readingClubDate}</p>

            <p className={styles.cardText}>
              7:00 p. m. – 9:00 p. m.
              <br />
              Hora de República Dominicana (UTC-4)
            </p>

            {hasActiveAccess ? (
              <Link
                href="/club-de-lectura"
                className={styles.joinButton}
              >
                Unirme
              </Link>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.joinButton}
                  disabled
                  title="Requiere una suscripción activa"
                >
                  Unirme
                </button>

                <p className={styles.clubAccessNote}>
                  Requiere una suscripción activa.
                </p>
              </>
            )}
          </aside>
        </section>

        <section className={styles.summarySection}>
          <h2 className={styles.summaryTitle}>Tu progreso</h2>

          <div className={styles.summaryGrid}>
            <article className={styles.summaryCard}>
              <p className={styles.cardLabel}>Nivel actual</p>
              <p className={styles.cardValue}>A1</p>
              <p className={styles.cardText}>Principiante</p>

              <p className={styles.cardNote}>
                Calculado según las lecciones completadas.
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
          </div>
        </section>
      </div>
    </main>
  );
}
