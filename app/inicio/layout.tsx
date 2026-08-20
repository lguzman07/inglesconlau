import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function InicioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  return children;
}