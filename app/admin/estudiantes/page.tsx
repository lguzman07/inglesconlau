import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import AdminStudents, { type AdminStudent, type PurchaseRequest } from './AdminStudents';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Administrar estudiantes',
  description: 'Aprueba pagos, consulta estudiantes y administra sus clases.',
};

export default async function AdminStudentsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fadmin%2Festudiantes');

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') redirect('/inicio');

  const [studentsResult, requestsResult] = await Promise.all([
    supabase.rpc('admin_list_students'),
    supabase.rpc('admin_list_group_purchase_requests'),
  ]);

  const error = studentsResult.error ?? requestsResult.error;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Estudiantes, pagos y reservas</h1>
          <p>Aprueba solicitudes específicas y administra los saldos manuales cuando sea necesario.</p>
        </header>
        {error ? (
          <div className={styles.errorBox} role="alert">No pudimos cargar el panel. Ejecuta primero la migración SQL nueva.</div>
        ) : (
          <AdminStudents
            initialStudents={(studentsResult.data ?? []) as AdminStudent[]}
            initialRequests={(requestsResult.data ?? []) as PurchaseRequest[]}
          />
        )}
      </div>
    </main>
  );
}
