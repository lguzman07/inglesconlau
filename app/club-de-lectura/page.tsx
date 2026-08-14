import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import styles from './page.module.css';

export default async function ClubDeLecturaPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
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

  const hasClubAccess =
    profile?.role === 'admin' || hasCurrentSubscription;

  if (!hasClubAccess) {
    redirect('/inicio');
  }

  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <p className={styles.eyebrow}>CLUB DE LECTURA</p>
        <h1 className={styles.title}>Lectura en vivo</h1>
        <p className={styles.text}>
          La sala del club estará disponible aquí antes de cada sesión.
        </p>
      </section>
    </main>
  );
}
