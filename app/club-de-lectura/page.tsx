'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ClubBooking from '@/components/ClubBooking/ClubBooking';
import { createClient } from '@/lib/supabase/client';
import styles from './page.module.css';

type ClubSession = {
  id: string;
  title: string;
  starts_at: string;
  ends_at: string;
  max_readers: number;
};

function BackToDashboard() {
  return (
    <Link href="/inicio" className={styles.backLink}>
      ← Volver al dashboard
    </Link>
  );
}

export default function ClubDeLecturaPage() {
  const router = useRouter();
  const [session, setSession] = useState<ClubSession | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadClub() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace('/iniciar-sesion');
        return;
      }

      const [{ data: profile }, { data: subscription }] = await Promise.all([
        supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .maybeSingle(),
        supabase
          .from('subscriptions')
          .select('status, current_period_end')
          .eq('user_id', user.id)
          .maybeSingle(),
      ]);

      const hasCurrentSubscription =
        subscription?.status === 'active' &&
        subscription.current_period_end !== null &&
        new Date(subscription.current_period_end).getTime() > Date.now();

      const userIsAdmin = profile?.role === 'admin';

      if (!userIsAdmin && !hasCurrentSubscription) {
        router.replace('/inicio');
        return;
      }

      const { data: sessions } = await supabase
        .from('club_sessions')
        .select('id, title, starts_at, ends_at, max_readers')
        .eq('is_published', true)
        .gte('ends_at', new Date().toISOString())
        .order('starts_at', { ascending: true })
        .limit(1);

      setIsAdmin(userIsAdmin);
      setSession(sessions?.[0] ?? null);
      setIsLoading(false);
    }

    void loadClub();
  }, [router]);

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.content}>
          <BackToDashboard />

          <section className={styles.card}>
            <p className={styles.eyebrow}>CLUB DE LECTURA</p>
            <p className={styles.text}>Cargando la sesión...</p>
          </section>
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className={styles.main}>
        <div className={styles.content}>
          <BackToDashboard />

          <section className={styles.card}>
            <p className={styles.eyebrow}>CLUB DE LECTURA</p>
            <h1 className={styles.title}>Próxima sesión</h1>
            <p className={styles.text}>
              No pudimos cargar la sesión. Vuelve a intentarlo en un momento.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <BackToDashboard />

        <ClubBooking
          isAdmin={isAdmin}
          session={{
            id: session.id,
            title: session.title,
            startsAt: session.starts_at,
            endsAt: session.ends_at,
            maxReaders: session.max_readers,
          }}
        />
      </div>
    </main>
  );
}