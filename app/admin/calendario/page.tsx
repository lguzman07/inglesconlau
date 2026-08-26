import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminCalendar, { type WeekBooking } from './AdminCalendar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Calendario de clases | Inglés con Lau',
  description: 'Consulta qué clases grupales tienen estudiantes reservados cada semana.',
};

function getDominicanToday() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/Santo_Domingo',
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getWeekStart(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00-04:00`);
  const mondayOffset = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - mondayOffset);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default async function AdminCalendarPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fadmin%2Fcalendario');

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  if (profile?.role !== 'admin') redirect('/inicio');

  const initialWeekStart = getWeekStart(getDominicanToday());

  const { data: bookings, error } = await supabase.rpc('admin_list_week_bookings', {
    p_week_start: initialWeekStart,
  });

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Calendario de clases</h1>
          <p>Mira qué clases tienen estudiantes reservados y quiénes son.</p>
        </header>
        {error ? (
          <div className={styles.errorBox} role="alert">
            <p>No pudimos cargar el calendario.</p>
            <p>{error.message}</p>
          </div>
        ) : (
          <AdminCalendar
            initialWeekStart={initialWeekStart}
            initialBookings={(bookings ?? []) as WeekBooking[]}
          />
        )}
      </div>
    </main>
  );
}
