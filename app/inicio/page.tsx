'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import styles from './Inicio.module.css';

export default function InicioPage() {
  const [indicatedLevel, setIndicatedLevel] = useState('');
  const [studentName, setStudentName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('student');
  const [subscriptionStatus, setSubscriptionStatus] = useState('inactive');
  const [subscriptionEndsAt, setSubscriptionEndsAt] = useState<string | null>(
    null
  );
  const [readingClubDate, setReadingClubDate] = useState('Jueves');
  const [clubCountdown, setClubCountdown] = useState('Calculando...');
  const [availableReadingSlots, setAvailableReadingSlots] = useState<
    number | null
  >(null);
  const [clubSessionId, setClubSessionId] = useState<string | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    const dominicanOffset = 4 * 60 * 60 * 1000;
    const sessionDuration = 2 * 60 * 60 * 1000;

    function updateClubSession() {
      const now = new Date();
      const dominicanNow = new Date(now.getTime() - dominicanOffset);
      const currentDay = dominicanNow.getUTCDay();
      let daysUntilThursday = (4 - currentDay + 7) % 7;

      let sessionStart = new Date(
        Date.UTC(
          dominicanNow.getUTCFullYear(),
          dominicanNow.getUTCMonth(),
          dominicanNow.getUTCDate() + daysUntilThursday,
          23,
          0,
          0
        )
      );

      if (
        currentDay === 4 &&
        now.getTime() >= sessionStart.getTime() + sessionDuration
      ) {
        daysUntilThursday = 7;
        sessionStart = new Date(
          Date.UTC(
            dominicanNow.getUTCFullYear(),
            dominicanNow.getUTCMonth(),
            dominicanNow.getUTCDate() + daysUntilThursday,
            23,
            0,
            0
          )
        );
      }

      const formattedDate = new Intl.DateTimeFormat('es-DO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        timeZone: 'America/Santo_Domingo',
      }).format(sessionStart);

      setReadingClubDate(
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
      );

      const timeUntilSession = sessionStart.getTime() - now.getTime();

      if (timeUntilSession <= 0 && timeUntilSession > -sessionDuration) {
        setClubCountdown('En vivo ahora');
        return;
      }

      const totalMinutes = Math.max(0, Math.floor(timeUntilSession / 60000));
      const days = Math.floor(totalMinutes / 1440);
      const hours = Math.floor((totalMinutes % 1440) / 60);
      const minutes = totalMinutes % 60;

      if (days > 0) {
        setClubCountdown(
          `Comienza en ${days} ${days === 1 ? 'día' : 'días'} y ${hours} h`
        );
        return;
      }

      if (hours > 0) {
        setClubCountdown(`Comienza en ${hours} h y ${minutes} min`);
        return;
      }

      setClubCountdown(`Comienza en ${minutes} min`);
    }

    updateClubSession();
    const intervalId = window.setInterval(updateClubSession, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function loadReadingAvailability() {
      const supabase = createClient();

      const { data: session } = await supabase
        .from('club_sessions')
        .select('id')
        .eq('is_published', true)
        .gte('starts_at', new Date().toISOString())
        .order('starts_at', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (!session) {
        setAvailableReadingSlots(0);
        return;
      }

      setClubSessionId(session.id);

      const { data } = await supabase.rpc('get_reading_slot_availability', {
        p_session_id: session.id,
      });

      setAvailableReadingSlots(typeof data === 'number' ? data : 0);
    }

    loadReadingAvailability();
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

      const accountName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.user_metadata?.first_name ||
        '';

      if (typeof accountName === 'string') {
        setStudentName(accountName.trim().split(/\s+/)[0] || '');
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
        .select('status, current_period_end')
        .eq('user_id', user.id)
        .maybeSingle();

      if (subscription?.status) {
        setSubscriptionStatus(subscription.status);
        setSubscriptionEndsAt(subscription.current_period_end);
      }

      setIsLoadingProfile(false);
    }

    loadProfile();
  }, []);

  function getGreeting() {
    const name = studentName ? `, ${studentName}` : '';

    if (gender === 'Masculino') {
      return `¡Hola${name}! ¿Listo para continuar?`;
    }

    if (gender === 'Prefiero no decirlo') {
      return `¡Hola${name}! ¿Todo listo para continuar?`;
    }

    return `¡Hola${name}! ¿Lista para continuar?`;
  }

  const hasCurrentSubscription =
    subscriptionStatus === 'active' &&
    subscriptionEndsAt !== null &&
    new Date(subscriptionEndsAt).getTime() > Date.now();

  const hasActiveAccess = role === 'admin' || hasCurrentSubscription;

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

          <Link href="/lecciones" className={styles.navLink}>
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

              <h2 className={styles.lessonTitle}>Título de la lección</h2>
            </div>

            <Link href="/lecciones" className={styles.lessonButton}>
              Comenzar lección
            </Link>
          </article>

          <aside className={styles.readingClub}>
            <p className={styles.cardLabel}>CLUB DE LECTURA</p>
            <h2 className={styles.sectionTitle}>Próxima sesión</h2>
            <p className={styles.clubDay}>{readingClubDate}</p>

            <p className={styles.cardText}>
              7:00 p. m. – 9:00 p. m.
              <br />
              Hora de República Dominicana (UTC−4)
            </p>

            <p className={styles.clubCountdown}>{clubCountdown}</p>

            {hasActiveAccess ? (
              <>
                <p className={styles.reservationPrompt}>
                  ¿Quieres leer en vivo? Reserva tu cupo antes de que se
                  agoten.
                </p>

                {availableReadingSlots === null ? (
                  <p className={styles.availableSlots}>Cargando cupos...</p>
                ) : availableReadingSlots > 0 ? (
                  <p className={styles.availableSlots}>
                    {availableReadingSlots}{' '}
                    {availableReadingSlots === 1
                      ? 'cupo disponible'
                      : 'cupos disponibles'}
                  </p>
                ) : (
                  <p className={styles.availableSlots}>
                    Los cupos para leer ya están completos.
                  </p>
                )}

                <div className={styles.clubActions}>
                  {clubSessionId &&
                    availableReadingSlots !== null &&
                    availableReadingSlots > 0 && (
                      <Link
                        href="/club-de-lectura#reservar-turno"
                        className={styles.joinButton}
                      >
                        Reservar cupo para leer
                      </Link>
                    )}
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.joinButton}
                  disabled
                  title="Requiere una suscripción activa"
                >
                  Reservar cupo para leer
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

        <section className={styles.exploreSection}>
          <p className={styles.exploreText}>¿Quieres ver más?</p>

          <Link href="/lecciones" className={styles.exploreButton}>
            Explorar lecciones
          </Link>
        </section>
      </div>
    </main>
  );
}