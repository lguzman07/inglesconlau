import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function InicioLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  return <>{children}</>;
}