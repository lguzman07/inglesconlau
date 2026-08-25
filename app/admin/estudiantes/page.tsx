import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminStudents, {
  type AdminStudent,
} from './AdminStudents';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Administrar estudiantes | Inglés con Lau',
  description:
    'Consulta estudiantes y administra sus cupos de clases grupales.',
};

export default async function AdminStudentsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      '/iniciar-sesion?next=%2Fadmin%2Festudiantes',
    );
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle();

  if (profile?.role !== 'admin') {
    redirect('/inicio');
  }

  const { data, error } = await supabase.rpc(
    'admin_list_students',
  );

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Estudiantes y cupos</h1>
          <p>
            Consulta las cuentas registradas y asigna la
            cantidad exacta de clases disponibles.
          </p>
        </header>

        {error ? (
          <div className={styles.errorBox} role="alert">
            No pudimos cargar los estudiantes. Comprueba que
            ejecutaste el archivo SQL del panel administrativo.
          </div>
        ) : (
          <AdminStudents
            initialStudents={(data ?? []) as AdminStudent[]}
          />
        )}
      </div>
    </main>
  );
}

