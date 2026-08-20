'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function CerrarSesionesPage() {
  const [status, setStatus] = useState<
    'loading' | 'success' | 'error'
  >('loading');

  useEffect(() => {
    async function closeAllSessions() {
      const supabase = createClient();

      try {
        const searchParams = new URLSearchParams(
          window.location.search,
        );

        const code = searchParams.get('code');

        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

          if (exchangeError) {
            setStatus('error');
            return;
          }
        }

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setStatus('error');
          return;
        }

        const { error: deviceError } = await supabase.rpc(
          'deactivate_all_my_devices',
        );

        if (deviceError) {
          console.error(deviceError);
          setStatus('error');
          return;
        }

        /*
         * Invalida las demás sesiones de Supabase.
         * La sesión utilizada para confirmar el correo también
         * se cerrará localmente inmediatamente después.
         */
        const { error: signOutError } =
          await supabase.auth.signOut({
            scope: 'global',
          });

        if (signOutError) {
          console.error(signOutError);
        }

        window.localStorage.removeItem(
          'ingles-con-lau-device-id',
        );

        setStatus('success');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    }

    void closeAllSessions();
  }, []);

  if (status === 'loading') {
    return (
      <main>
        <section>
          <p>INGLÉS CON LAU</p>
          <h1>Cerrando tus sesiones...</h1>
          <p>
            Estamos verificando tu solicitud de seguridad.
          </p>
        </section>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main>
        <section>
          <p>INGLÉS CON LAU</p>

          <h1>No pudimos cerrar tus sesiones</h1>

          <p>
            El enlace puede haber expirado o no ser válido.
            Solicita uno nuevo desde la página de inicio de
            sesión.
          </p>

          <Link href="/iniciar-sesion">
            Volver a iniciar sesión
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <p>INGLÉS CON LAU</p>

        <h1>Sesiones cerradas</h1>

        <p>
          Cerramos tus sesiones activas. Ya puedes iniciar
          sesión nuevamente en los dispositivos que quieras usar.
        </p>

        <Link href="/iniciar-sesion">
          Iniciar sesión
        </Link>
      </section>
    </main>
  );
}