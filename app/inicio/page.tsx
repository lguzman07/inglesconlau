'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import CountUp from '@/components/CountUp/CountUp';
import GroupClassesDashboard from '@/components/GroupClassesDashboard/GroupClassesDashboard';
import ProfileCompletionCard from '@/components/ProfileCompletionCard/ProfileCompletionCard';
import WordOfTheDay from '@/components/WordOfTheDay/WordOfTheDay';
import { getLessonTitle } from '@/content/lecciones/catalog';
import { createClient } from '@/lib/supabase/client';

import styles from './Inicio.module.css';

const TOTAL_LESSONS = 400;
const LESSONS_PER_LEVEL = 80;
const LAST_LESSON_STORAGE_KEY = 'inglesconlau-last-opened-lesson';
const RECORDING_CONSENT_PENDING_KEY = 'inglesconlau-recording-consent-pending';
const LEVEL_ORDER = ['a1', 'a2', 'b1', 'b2', 'c1'];

function getValidLessonKey(value: string | null) {
  if (!value || !/^[a-z0-9-]+\/\d+$/i.test(value)) return null;
  return value.toLowerCase();
}

function compareLessonKeys(firstKey: string, secondKey: string) {
  const [firstLevel, firstLesson] = firstKey.split('/');
  const [secondLevel, secondLesson] = secondKey.split('/');
  const levelDifference =
    LEVEL_ORDER.indexOf(firstLevel) - LEVEL_ORDER.indexOf(secondLevel);

  return levelDifference !== 0
    ? levelDifference
    : Number(firstLesson) - Number(secondLesson);
}

function formatLessonLabel(lessonKey: string) {
  const [level, lessonNumber] = lessonKey.split('/');
  return `${level.toUpperCase()} · ${getLessonTitle(level, Number(lessonNumber))}`;
}

export default function InicioPage() {
  const [studentName, setStudentName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('student');
  const [indicatedLevel, setIndicatedLevel] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('inactive');
  const [subscriptionEndsAt, setSubscriptionEndsAt] = useState<string | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isOpeningLiveClass, setIsOpeningLiveClass] = useState(false);
  const [liveClassError, setLiveClassError] = useState('');
  const [completedLessons, setCompletedLessons] = useState(0);
  const [savedFlashcards, setSavedFlashcards] = useState(0);
  const [lastLessonKey, setLastLessonKey] = useState('a1/1');
  const [furthestLessonKey, setFurthestLessonKey] = useState('a1/1');
  const [levelProgress, setLevelProgress] = useState<Record<string, number>>({});
  const [needsRecordingConsent, setNeedsRecordingConsent] = useState(false);
  const [hasCheckedConsentBox, setHasCheckedConsentBox] = useState(false);
  const [isSavingConsent, setIsSavingConsent] = useState(false);
  const [consentError, setConsentError] = useState('');

  useEffect(() => {
    function syncLastOpenedLesson() {
      const stored = getValidLessonKey(
        window.localStorage.getItem(LAST_LESSON_STORAGE_KEY),
      );
      if (stored) setLastLessonKey(stored);
    }

    syncLastOpenedLesson();
    window.addEventListener('focus', syncLastOpenedLesson);
    window.addEventListener('pageshow', syncLastOpenedLesson);

    return () => {
      window.removeEventListener('focus', syncLastOpenedLesson);
      window.removeEventListener('pageshow', syncLastOpenedLesson);
    };
  }, []);

  useEffect(() => {
    async function loadDashboard() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoadingProfile(false);
        return;
      }

      const accountName =
        user.user_metadata?.full_name ??
        user.user_metadata?.name ??
        user.user_metadata?.first_name ??
        '';

      if (typeof accountName === 'string') {
        setStudentName(accountName.trim().split(/\s+/)[0] ?? '');
      }

      const [profileResult, subscriptionResult, completedResult, flashcardsResult, progressResult] =
        await Promise.all([
          supabase
            .from('profiles')
            .select('full_name, english_level, gender, role, recording_consent_at')
            .eq('id', user.id)
            .maybeSingle(),
          supabase
            .from('subscriptions')
            .select('status, current_period_end')
            .eq('user_id', user.id)
            .maybeSingle(),
          supabase
            .from('lesson_progress')
            .select('lesson_key', { count: 'exact', head: true })
            .eq('user_id', user.id)
            .eq('is_completed', true),
          supabase
            .from('user_flashcards')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', user.id),
          supabase
            .from('lesson_progress')
            .select('lesson_key, updated_at')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false }),
        ]);

      const profile = profileResult.data;
      if (profile?.full_name) {
        setStudentName(profile.full_name.trim().split(/\s+/)[0] ?? '');
      }
      if (profile?.english_level) setIndicatedLevel(profile.english_level);
      if (profile?.gender) setGender(profile.gender);
      if (profile?.role) setRole(profile.role);

      if (!profile?.recording_consent_at && profile?.role !== 'admin') {
        let consentPending = false;
        try {
          consentPending =
            window.localStorage.getItem(RECORDING_CONSENT_PENDING_KEY) === '1';
        } catch {
          // Ignore — treat as not pending, show the banner to be safe.
        }

        if (consentPending) {
          // They already checked the box on /registro or /clases-grupales
          // before this session existed — record it now that we have one.
          const { error: consentError } = await supabase.rpc(
            'record_recording_consent',
          );
          if (!consentError) {
            try {
              window.localStorage.removeItem(RECORDING_CONSENT_PENDING_KEY);
            } catch {
              // Ignore.
            }
          } else {
            setNeedsRecordingConsent(true);
          }
        } else {
          setNeedsRecordingConsent(true);
        }
      }

      const subscription = subscriptionResult.data;
      if (subscription?.status) {
        setSubscriptionStatus(subscription.status);
        setSubscriptionEndsAt(subscription.current_period_end);
      }

      setCompletedLessons(completedResult.count ?? 0);
      setSavedFlashcards(flashcardsResult.count ?? 0);

      const progressKeys = (progressResult.data ?? [])
        .map((item) => getValidLessonKey(item.lesson_key))
        .filter((key): key is string => key !== null);

      const databaseLast = progressKeys[0] ?? 'a1/1';
      const storedLast = getValidLessonKey(
        window.localStorage.getItem(LAST_LESSON_STORAGE_KEY),
      );
      const furthest = [...progressKeys].sort(compareLessonKeys).at(-1);

      const levelCounts: Record<string, number> = {};
      for (const key of progressKeys) {
        const [level] = key.split('/');
        levelCounts[level] = (levelCounts[level] ?? 0) + 1;
      }

      setLastLessonKey(storedLast ?? databaseLast);
      setFurthestLessonKey(furthest ?? 'a1/1');
      setLevelProgress(levelCounts);
      setIsLoadingProfile(false);
    }

    void loadDashboard();
  }, []);

  async function handleAcceptRecordingConsent() {
    if (!hasCheckedConsentBox || isSavingConsent) return;

    setIsSavingConsent(true);
    setConsentError('');

    const supabase = createClient();
    const { error } = await supabase.rpc('record_recording_consent');

    setIsSavingConsent(false);

    if (error) {
      setConsentError(error.message || 'No pudimos guardar tu aceptación. Inténtalo de nuevo.');
      return;
    }

    setNeedsRecordingConsent(false);
  }

  async function handleOpenLiveClass() {
    if (isOpeningLiveClass || needsRecordingConsent) return;

    setIsOpeningLiveClass(true);
    setLiveClassError('');

    try {
      const response = await fetch('/api/clases-en-vivo', {
        method: 'GET',
        cache: 'no-store',
      });
      const data = await response.json();

      if (!response.ok || !data?.roomUrl) {
        setLiveClassError(
          data?.error ?? 'No pudimos abrir la clase. Inténtalo de nuevo.',
        );
        setIsOpeningLiveClass(false);
        return;
      }

      window.location.href = data.roomUrl;
    } catch {
      setLiveClassError('No pudimos abrir la clase. Inténtalo de nuevo.');
      setIsOpeningLiveClass(false);
    }
  }

  function getGreeting() {
    const name = studentName ? `, ${studentName}` : '';
    if (gender === 'Masculino') return `¡Hola${name}! ¿Listo para continuar?`;
    if (gender === 'Prefiero no decirlo') return `¡Hola${name}! ¿Todo listo para continuar?`;
    return `¡Hola${name}! ¿Lista para continuar?`;
  }

  const hasCurrentSubscription =
    subscriptionStatus === 'active' &&
    subscriptionEndsAt !== null &&
    new Date(subscriptionEndsAt).getTime() > Date.now();
  const hasActiveAccess = role === 'admin' || hasCurrentSubscription;
  const accessLabel =
    role === 'admin'
      ? 'Acceso administrativo'
      : hasActiveAccess
        ? 'Suscripción activa'
        : 'Suscripción inactiva';
  const generalProgress = Math.min(100, (completedLessons / TOTAL_LESSONS) * 100);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {needsRecordingConsent ? (
          <section className={styles.consentBanner} role="alert" aria-labelledby="consent-banner-title">
            <p className={styles.cardLabel}>AVISO IMPORTANTE</p>
            <h2 id="consent-banner-title">Tus clases en vivo podrían grabarse</h2>
            <p>
              Grabamos únicamente el <strong>audio</strong> de las clases en vivo, con fines
              educativos, para usarlo como material de apoyo en la futura Plataforma Inglés
              con Lau. Tu cámara y tu rostro <strong>nunca</strong> se graban ni se muestran.
            </p>
            <label className={styles.consentBannerCheckbox}>
              <input
                type="checkbox"
                checked={hasCheckedConsentBox}
                onChange={(event) => setHasCheckedConsentBox(event.target.checked)}
              />
              <span>
                He leído y entiendo que mis clases en vivo podrían grabarse (solo audio,
                nunca video). Ver{' '}
                <Link href="/terminos-y-condiciones" target="_blank">
                  Términos y condiciones
                </Link>
                .
              </span>
            </label>
            <button
              type="button"
              onClick={handleAcceptRecordingConsent}
              disabled={!hasCheckedConsentBox || isSavingConsent}
            >
              {isSavingConsent ? 'Guardando…' : 'Aceptar y continuar'}
            </button>
            {consentError ? (
              <p className={styles.liveClassError} role="alert">{consentError}</p>
            ) : null}
          </section>
        ) : null}

        <section className={styles.welcome}>
          <div className={styles.welcomeTop}>
            <p className={styles.eyebrow}>MI ESPACIO DE APRENDIZAJE</p>
            {!isLoadingProfile ? (
              <div className={styles.accessStatus}>
                <span
                  className={`${styles.statusLight} ${
                    hasActiveAccess
                      ? styles.statusLightActive
                      : styles.statusLightInactive
                  }`}
                  aria-hidden="true"
                />
                <span>{accessLabel}</span>
              </div>
            ) : null}
          </div>
          <h1>{isLoadingProfile ? '¡Hola!' : getGreeting()}</h1>
          <p>Reserva tus clases en vivo y continúa tus lecciones a tu ritmo.</p>
          <Link href="/clases-grupales" className={styles.buyClassesButton}>
            Comprar clases grupales
            <span aria-hidden="true">→</span>
          </Link>
          <p className={styles.courseNote}>
            Inicio: 14 de septiembre de 2026 · Duración: 16 semanas
          </p>
        </section>

        <ProfileCompletionCard onCompleted={setStudentName} />

        <WordOfTheDay />

        <section className={styles.sectionHeading}>
          <p className={styles.eyebrow}>PRIMERO</p>
          <h2>Clases grupales en vivo</h2>
          <p>Consulta tu saldo, cambia una reserva o explora otro nivel con cupo.</p>
        </section>

        <GroupClassesDashboard />

        <aside className={styles.liveClass}>
          <div>
            <p className={styles.cardLabel}>CLASE EN VIVO</p>
            <h2>Entra a la sala cuando llegue tu horario</h2>
            <p>
              El acceso depende de una reserva aprobada para la fecha y hora actuales,
              no del estado de la suscripción.
            </p>
          </div>
          <button
            type="button"
            onClick={handleOpenLiveClass}
            disabled={isOpeningLiveClass || needsRecordingConsent}
          >
            {isOpeningLiveClass
              ? 'Comprobando reserva…'
              : role === 'admin'
                ? 'Entrar como anfitriona'
                : 'Entrar a clase'}
          </button>
          {needsRecordingConsent ? (
            <p className={styles.liveClassError}>
              Debes aceptar el aviso de grabación de clases (arriba) antes de entrar.
            </p>
          ) : null}
          {liveClassError ? <p role="alert" className={styles.liveClassError}>{liveClassError}</p> : null}
        </aside>

        <section className={styles.sectionHeading}>
          <p className={styles.eyebrow}>DESPUÉS</p>
          <h2>Lecciones pregrabadas</h2>
          <p>Continúa exactamente donde te quedaste o vuelve a tu punto más avanzado.</p>
        </section>

        <section className={styles.lessonGrid}>
          <article className={styles.lessonCard}>
            <p className={styles.cardLabel}>ÚLTIMA LECCIÓN ABIERTA</p>
            <h3>{formatLessonLabel(lastLessonKey)}</h3>
            <p>Regresa a la última lección que visitaste, aunque solo hayas entrado para repasar.</p>
            <Link href={`/lecciones/${lastLessonKey}`}>Continuar última lección</Link>
          </article>
          <article className={styles.lessonCard}>
            <p className={styles.cardLabel}>PUNTO MÁS AVANZADO</p>
            <h3>{formatLessonLabel(furthestLessonKey)}</h3>
            <p>Continúa tu recorrido desde la lección más avanzada que has alcanzado.</p>
            <Link href={`/lecciones/${furthestLessonKey}`}>Continuar con mi progreso</Link>
          </article>
        </section>

        <section className={styles.summarySection}>
          <h2>Tu progreso</h2>
          <div className={styles.summaryGrid}>
            <article><span>Nivel indicado</span><strong>{indicatedLevel || 'No indicado'}</strong></article>
            <article><span>Progreso general</span><strong><CountUp value={generalProgress} decimals={2} suffix="%" /></strong></article>
            <article><span>Lecciones completadas</span><strong><CountUp value={completedLessons} /> de {TOTAL_LESSONS}</strong></article>
            <article><span>Vocabulary Building</span><strong><CountUp value={savedFlashcards} /></strong><Link href="/flashcards">Repasar flashcards →</Link></article>
          </div>

          <div className={styles.levelBadgeRow}>
            {LEVEL_ORDER.map((level) => {
              const completed = levelProgress[level] ?? 0;
              const isComplete = completed >= LESSONS_PER_LEVEL;

              return (
                <Link
                  key={level}
                  href={`/lecciones/${level}`}
                  className={`${styles.levelBadge} ${
                    isComplete
                      ? styles.levelBadgeComplete
                      : completed > 0
                        ? styles.levelBadgeStarted
                        : ''
                  }`}
                >
                  <span className={styles.levelBadgeIcon} aria-hidden="true">
                    {isComplete ? '✓' : level.toUpperCase()}
                  </span>
                  <span className={styles.levelBadgeLabel}>
                    {level.toUpperCase()}
                    <small>
                      {isComplete
                        ? '¡Completado!'
                        : `${completed} de ${LESSONS_PER_LEVEL}`}
                    </small>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <Link href="/lecciones" className={styles.exploreButton}>
          Explorar las 400 lecciones
        </Link>
      </div>
    </main>
  );
}
