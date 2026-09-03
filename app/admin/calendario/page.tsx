import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminCalendar, { type CalendarBooking } from './AdminCalendar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Calendario de clases',
  description: 'Consulta qué clases grupales tienen estudiantes reservados cada mes.',
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

function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getMonthStart(isoDate: string) {
  return `${isoDate.slice(0, 7)}-01`;
}

// Monday-start 6-week (42 day) grid range that contains the given month.
function getGridRange(monthStart: string) {
  const [year, month] = monthStart.split('-').map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;

  const gridStart = new Date(firstDay);
  gridStart.setDate(gridStart.getDate() - mondayOffset);

  const gridEnd = new Date(gridStart);
  gridEnd.setDate(gridEnd.getDate() + 41);

  return { start: toIsoDate(gridStart), end: toIsoDate(gridEnd) };
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

  const initialMonthStart = getMonthStart(getDominicanToday());
  const gridRange = getGridRange(initialMonthStart);

  const { data: bookings, error } = await supabase.rpc('admin_list_bookings_range', {
    p_start_date: gridRange.start,
    p_end_date: gridRange.end,
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
            initialMonthStart={initialMonthStart}
            initialBookings={(bookings ?? []) as CalendarBooking[]}
          />
        )}
      </div>
    </main>
  );
}
