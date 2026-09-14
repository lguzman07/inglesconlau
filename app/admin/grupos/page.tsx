import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminGroupsProgress, {
  type GroupSchedule,
} from './AdminGroupsProgress';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Progreso por grupo',
  description:
    'Marca qué lecciones ya diste en vivo en cada grupo de clases.',
};

export default async function AdminGruposPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fadmin%2Fgrupos');

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  if (profile?.role !== 'admin') redirect('/inicio');

  const [schedulesResult, givenResult] = await Promise.all([
    supabase
      .from('group_class_schedules')
      .select('id, code, label, level, starts_at, ends_at')
      .eq('is_active', true)
      .order('level', { ascending: true })
      .order('starts_at', { ascending: true }),
    supabase
      .from('group_schedule_lesson_log')
      .select('schedule_id, lesson_number'),
  ]);

  const schedules = (schedulesResult.data ??
    []) as GroupSchedule[];

  const givenLessons = (
    (givenResult.data ?? []) as {
      schedule_id: string;
      lesson_number: number;
    }[]
  ).map((row) => `${row.schedule_id}/${row.lesson_number}`);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Progreso por grupo</h1>
          <p>
            Cada grupo avanza por su cuenta. Marca qué lección ya
            diste en vivo en cada uno para llevar el hilo de dónde
            va cada horario.
          </p>
        </header>

        {schedulesResult.error ? (
          <div className={styles.errorBox} role="alert">
            <p>No pudimos cargar los grupos.</p>
            <p>{schedulesResult.error.message}</p>
          </div>
        ) : (
          <AdminGroupsProgress
            schedules={schedules}
            initialGiven={givenLessons}
          />
        )}
      </div>
    </main>
  );
}
