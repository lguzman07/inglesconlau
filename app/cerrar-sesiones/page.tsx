'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

const DEVICE_ID_STORAGE_KEY = 'ingles-con-lau-device-id';

type PageStatus = 'loading' | 'success' | 'error';

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

export default function CerrarSesionesPage() {
  const [status, setStatus] =
    useState<PageStatus>('loading');

  useEffect(() => {
    let isMounted = true;

    async function closeAllSessions() {
      const supabase = createClient();

      try {
        /*
         * Supabase puede devolver el Magic Link de dos formas:
         *
         * 1. ?code=...
         * 2. #access_token=...&refresh_token=...
         *
         * Soportamos ambas.
         */

        const searchParams = new URLSearchParams(
          window.location.search,
        );

        const hashParams = new URLSearchParams(
          window.location.hash.replace(/^#/, ''),
        );

        const code = searchParams.get('code');

        const accessToken =
          hashParams.get('access_token');

        const refreshToken =
          hashParams.get('refresh_token');

        /*
         * Flujo PKCE:
         * /cerrar-sesiones?code=...
         */
        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

          if (exchangeError) {
            console.error(
              'Error exchanging code:',
              exchangeError,
            );
          }
        }

        /*
         * Flujo con tokens en el hash:
         * /cerrar-sesiones#access_token=...
         */
        if (accessToken && refreshToken) {
          const { error: sessionError } =
            await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });

          if (sessionError) {
            console.error(
              'Error setting session:',
              sessionError,
            );
          }
        }

        /*
         * En algunos navegadores Supabase procesa el enlace
         * automáticamente. Damos un pequeño margen para que
         * la sesión quede disponible.
         */
        let session = (
          await supabase.auth.getSession()
        ).data.session;

        if (!session) {
          await wait(400);

          session = (
            await supabase.auth.getSession()
          ).data.session;
        }

        if (!session) {
          await wait(800);

          session = (
            await supabase.auth.getSession()
          ).data.session;
        }

        if (!session) {
          console.error(
            'No authenticated session was found.',
          );

          if (isMounted) {
            setStatus('error');
          }

          return;
        }

        /*
         * Confirmamos además que realmente tenemos
         * un usuario autenticado.
         */
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          console.error(
            'Could not verify user:',
            userError,
          );

          if (isMounted) {
            setStatus('error');
          }

          return;
        }

        /*
         * Borra todos los dispositivos registrados
         * para el usuario autenticado.
         */
        const { error: deviceError } =
          await supabase.rpc(
            'deactivate_all_my_devices',
          );

        if (deviceError) {
          console.error(
            'Error deactivating devices:',
            deviceError,
          );

          if (isMounted) {
            setStatus('error');
          }

          return;
        }

        /*
         * Invalida las sesiones de Supabase.
         */
        const { error: signOutError } =
          await supabase.auth.signOut({
            scope: 'global',
          });

        if (signOutError) {
          console.error(
            'Global sign out error:',
            signOutError,
          );
        }

        /*
         * También olvidamos el identificador local
         * del dispositivo actual.
         */
        window.localStorage.removeItem(
          DEVICE_ID_STORAGE_KEY,
        );

        /*
         * Limpiamos los tokens/código de la barra de direcciones.
         */
        window.history.replaceState(
          {},
          '',
          '/cerrar-sesiones',
        );

        if (isMounted) {
          setStatus('success');
        }
      } catch (error) {
        console.error(
          'Unexpected close sessions error:',
          error,
        );

        if (isMounted) {
          setStatus('error');
        }
      }
    }

    void closeAllSessions();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '72px 20px',
        background: 'var(--background)',
        color: 'var(--text)',
      }}
    >
      <section
        style={{
          width: 'min(560px, 100%)',
          padding: '40px',
          background: 'var(--surface-solid)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          boxShadow: 'var(--shadow)',
        }}
      >
        <p
          style={{
            margin: '0 0 10px',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
          }}
        >
          INGLÉS CON LAU
        </p>

        {status === 'loading' && (
          <>
            <h1
              style={{
                margin: '0 0 14px',
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                lineHeight: 1.1,
              }}
            >
              Cerrando tus sesiones...
            </h1>

            <p
              style={{
                margin: 0,
                color: 'var(--text-light)',
                lineHeight: 1.7,
              }}
            >
              Estamos verificando tu enlace de seguridad.
              Esto tomará solo unos segundos.
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <h1
              style={{
                margin: '0 0 14px',
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                lineHeight: 1.1,
              }}
            >
              No pudimos cerrar tus sesiones
            </h1>

            <p
              style={{
                margin: '0 0 26px',
                color: 'var(--text-light)',
                lineHeight: 1.7,
              }}
            >
              El enlace puede haber expirado o no ser válido.
              Solicita uno nuevo desde la página de inicio de
              sesión.
            </p>

            <Link
              href="/iniciar-sesion"
              style={{
                display: 'inline-flex',
                minHeight: '48px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                color: '#ffffff',
                background: 'var(--primary)',
                borderRadius: '12px',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              Volver a iniciar sesión
            </Link>
          </>
        )}

        {status === 'success' && (
          <>
            <h1
              style={{
                margin: '0 0 14px',
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                lineHeight: 1.1,
              }}
            >
              Sesiones cerradas
            </h1>

            <p
              style={{
                margin: '0 0 26px',
                color: 'var(--text-light)',
                lineHeight: 1.7,
              }}
            >
              Cerramos las sesiones activas de tu cuenta.
              Ya puedes iniciar sesión nuevamente en los
              dispositivos que quieras utilizar.
            </p>

            <Link
              href="/iniciar-sesion"
              style={{
                display: 'inline-flex',
                minHeight: '48px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                color: '#ffffff',
                background: 'var(--primary)',
                borderRadius: '12px',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              Iniciar sesión
            </Link>
          </>
        )}
      </section>
    </main>
  );
}