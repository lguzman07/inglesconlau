import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminLiveClassSettings, { type LiveClassRoom } from './AdminLiveClassSettings';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Clase en vivo',
  description: 'Configura la sala de video de la clase en vivo.',
};

export default async function AdminEnVivoPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fadmin%2Fen-vivo');

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') redirect('/inicio');

  const { data: settingsRows, error } = await supabase.rpc('admin_get_live_class_room');
  const settings = (settingsRows?.[0] ?? null) as LiveClassRoom | null;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Clase en vivo</h1>
          <p>
            Configura el salón de Whereby que verán tus estudiantes en <code>/clase-en-vivo</code>.
            Comparte tu pantalla con Canva dentro de la misma llamada de Whereby — ahí no hace
            falta nada extra. Abre el salón cuando estés lista para empezar.
          </p>
        </header>
        {error || !settings ? (
          <div className={styles.errorBox} role="alert">
            <p>No pudimos cargar la configuración de la clase en vivo.</p>
            {error ? <p>{error.message}</p> : null}
          </div>
        ) : (
          <AdminLiveClassSettings initialSettings={settings} />
        )}
      </div>
    </main>
  );
}
