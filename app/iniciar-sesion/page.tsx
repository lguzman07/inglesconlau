'use client';

import {
  FormEvent,
  useEffect,
  useState,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  clearStoredSupabaseSessions,
  createClient,
  makeSupabaseCookiesSessionOnly,
  saveKeepSessionPreference,
} from '@/lib/supabase/client';

import styles from '../registro/page.module.css';

const DEVICE_ID_STORAGE_KEY =
  'ingles-con-lau-device-id';

function getSafeNextPath(value: string | null) {
  if (
    !value ||
    !value.startsWith('/') ||
    value.startsWith('//')
  ) {
    return '/inicio';
  }

  return value;
}

function getOrCreateDeviceId() {
  const existingDeviceId =
    window.localStorage.getItem(
      DEVICE_ID_STORAGE_KEY,
    );

  if (existingDeviceId) {
    return existingDeviceId;
  }

  const newDeviceId =
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}-${Math.random()
          .toString(36)
          .slice(2)}`;

  window.localStorage.setItem(
    DEVICE_ID_STORAGE_KEY,
    newDeviceId,
  );

  return newDeviceId;
}

function getDeviceName() {
  const userAgent = navigator.userAgent;

  if (/iPad/i.test(userAgent)) return 'iPad';
  if (/iPhone/i.test(userAgent)) return 'iPhone';
  if (/Android/i.test(userAgent)) return 'Android';
  if (/Macintosh|Mac OS X/i.test(userAgent)) {
    return 'Mac';
  }
  if (/Windows/i.test(userAgent)) {
    return 'Windows PC';
  }

  return 'Dispositivo';
}

export default function IniciarSesionPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] =
    useState('');
  const [keepSession, setKeepSession] =
    useState(true);
  const [showPassword, setShowPassword] =
    useState(false);
  const [nextPath, setNextPath] =
    useState('/inicio');
  const [message, setMessage] =
    useState('');
  const [isDeviceLimit, setIsDeviceLimit] =
    useState(false);
  const [isLoading, setIsLoading] =
    useState(false);
  const [
    isSendingRecovery,
    setIsSendingRecovery,
  ] = useState(false);
  const [
    isGoogleLoading,
    setIsGoogleLoading,
  ] = useState(false);
  const [
    isSendingCloseSessionsEmail,
    setIsSendingCloseSessionsEmail,
  ] = useState(false);

  const isBusy =
    isLoading ||
    isSendingRecovery ||
    isGoogleLoading ||
    isSendingCloseSessionsEmail;

  useEffect(() => {
    const searchParams =
      new URLSearchParams(
        window.location.search,
      );

    const destination =
      getSafeNextPath(
        searchParams.get('next'),
      );

    setNextPath(destination);

    const error =
      searchParams.get('error');

    if (error === 'device_limit') {
      setIsDeviceLimit(true);
      setMessage(
        'Ya tienes tu cuenta abierta en 2 dispositivos. Cierra sesión en uno de ellos para poder entrar desde este dispositivo.',
      );
    }

    if (error === 'oauth_callback') {
      setMessage(
        'No pudimos completar el inicio de sesión con Google. Inténtalo nuevamente.',
      );
    }

    if (error) {
      searchParams.delete('error');

      const remainingQuery =
        searchParams.toString();

      window.history.replaceState(
        {},
        '',
        remainingQuery
          ? `/iniciar-sesion?${remainingQuery}`
          : '/iniciar-sesion',
      );
    }
  }, []);

  async function handleGoogleSignIn() {
    setMessage('');
    setIsDeviceLimit(false);
    setIsGoogleLoading(true);

    saveKeepSessionPreference(
      keepSession,
    );
    clearStoredSupabaseSessions();

    const deviceId =
      getOrCreateDeviceId();
    const deviceName =
      getDeviceName();
    const supabase =
      createClient();

    const callbackUrl = new URL(
      '/auth/callback',
      window.location.origin,
    );

    callbackUrl.searchParams.set(
      'keep_session',
      String(keepSession),
    );
    callbackUrl.searchParams.set(
      'device_id',
      deviceId,
    );
    callbackUrl.searchParams.set(
      'device_name',
      deviceName,
    );
    callbackUrl.searchParams.set(
      'next',
      nextPath,
    );

    const { error } =
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo:
            callbackUrl.toString(),
        },
      });

    if (error) {
      setMessage(
        'No pudimos continuar con Google. Inténtalo nuevamente.',
      );
      setIsGoogleLoading(false);
    }
  }

  async function handlePasswordRecovery() {
    setMessage('');
    setIsDeviceLimit(false);

    if (!email.trim()) {
      setMessage(
        'Escribe tu correo electrónico primero para poder restablecer tu contraseña.',
      );
      return;
    }

    setIsSendingRecovery(true);

    const supabase =
      createClient();

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo:
            `${window.location.origin}/restablecer-contrasena`,
        },
      );

    setIsSendingRecovery(false);

    if (error) {
      setMessage(
        'No pudimos enviar el correo de recuperación. Inténtalo nuevamente.',
      );
      return;
    }

    setMessage(
      'Te enviamos un correo para restablecer tu contraseña. Revisa también la carpeta de correo no deseado.',
    );
  }

  async function handleCloseAllSessionsEmail() {
    const normalizedEmail =
      email.trim();

    if (!normalizedEmail) {
      setMessage(
        'Escribe el correo electrónico de tu cuenta para enviarte el enlace de seguridad.',
      );
      return;
    }

    setIsSendingCloseSessionsEmail(
      true,
    );

    const supabase =
      createClient();

    const { error } =
      await supabase.auth.signInWithOtp({
        email: normalizedEmail,
        options: {
          shouldCreateUser: false,
          emailRedirectTo:
            `${window.location.origin}/cerrar-sesiones`,
        },
      });

    setIsSendingCloseSessionsEmail(
      false,
    );

    if (error) {
      setMessage(
        'No pudimos enviar el enlace de seguridad. Inténtalo nuevamente.',
      );
      return;
    }

    setMessage(
      'Te enviamos un enlace de seguridad a tu correo. Ábrelo para cerrar todas las sesiones de tu cuenta.',
    );
    setIsDeviceLimit(false);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setMessage('');
    setIsDeviceLimit(false);
    setIsLoading(true);

    saveKeepSessionPreference(
      keepSession,
    );
    clearStoredSupabaseSessions();

    const supabase =
      createClient();

    const {
      data: authData,
      error: signInError,
    } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (
      signInError ||
      !authData.user
    ) {
      setMessage(
        'No pudimos iniciar sesión. Revisa tu correo y contraseña e inténtalo nuevamente.',
      );
      setIsLoading(false);
      return;
    }

    const deviceId =
      getOrCreateDeviceId();
    const deviceName =
      getDeviceName();

    const { error: deviceError } =
      await supabase.rpc(
        'register_current_device',
        {
          p_device_id: deviceId,
          p_device_name: deviceName,
        },
      );

    if (deviceError) {
      await supabase.auth.signOut();
      clearStoredSupabaseSessions();

      const reachedDeviceLimit =
        deviceError.message
          .toLowerCase()
          .includes(
            '2 dispositivos activos',
          );

      setIsDeviceLimit(
        reachedDeviceLimit,
      );
      setMessage(
        reachedDeviceLimit
          ? 'Ya tienes tu cuenta abierta en 2 dispositivos. Cierra sesión en uno de ellos para poder entrar desde este dispositivo.'
          : 'No pudimos registrar este dispositivo. Inténtalo nuevamente.',
      );
      setIsLoading(false);
      return;
    }

    if (!keepSession) {
      makeSupabaseCookiesSessionOnly();
    }

    router.replace(nextPath);
    router.refresh();
  }

  return (
    <main className={styles.page}>
      <Link
        className={styles.backLink}
        href="/"
      >
        ← Volver al inicio
      </Link>

      <section
        className={styles.card}
        aria-labelledby="login-title"
      >
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            INGLÉS CON LAU
          </p>

          <h1 id="login-title">
            Inicia sesión
          </h1>

          <p>
            Accede a tu cuenta para
            continuar con tu reservación.
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <button
            className={
              styles.googleButton
            }
            type="button"
            onClick={
              handleGoogleSignIn
            }
            disabled={isBusy}
          >
            <svg
              className={
                styles.googleIcon
              }
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.25a4.49 4.49 0 0 1-1.95 2.95v2.52h3.15c1.84-1.69 2.9-4.18 2.9-7.3Z"
              />
              <path
                fill="#34A853"
                d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.15-2.52c-.87.59-1.99.94-3.3.94-2.54 0-4.7-1.72-5.47-4.03H3.27v2.6A9.75 9.75 0 0 0 12 21.5Z"
              />
              <path
                fill="#FBBC05"
                d="M6.53 13.54a5.86 5.86 0 0 1 0-3.08v-2.6H3.27a9.74 9.74 0 0 0 0 8.28l3.26-2.6Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.43c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.52 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.73 5.36l3.26 2.6C7.3 8.15 9.46 6.43 12 6.43Z"
              />
            </svg>

            {isGoogleLoading
              ? 'Conectando con Google...'
              : 'Continuar con Google'}
          </button>

          <div
            className={
              styles.authDivider
            }
            aria-hidden="true"
          >
            <span />
            <p>
              o continúa con tu correo
            </p>
            <span />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(
                  event.target.value,
                );
                setMessage('');
                setIsDeviceLimit(false);
              }}
              placeholder="nombre@ejemplo.com"
              disabled={isBusy}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">
              Contraseña
            </label>

            <div
              className={
                styles.passwordWrapper
              }
            >
              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(
                    event.target.value,
                  );
                  setMessage('');
                  setIsDeviceLimit(
                    false,
                  );
                }}
                disabled={isBusy}
                required
              />

              <button
                className={
                  styles.passwordToggle
                }
                type="button"
                onClick={() =>
                  setShowPassword(
                    (current) =>
                      !current,
                  )
                }
                aria-label={
                  showPassword
                    ? 'Ocultar contraseña'
                    : 'Mostrar contraseña'
                }
                disabled={isBusy}
              >
                {showPassword
                  ? 'Ocultar'
                  : 'Ver'}
              </button>
            </div>
          </div>

          <label
            className={
              styles.sessionCheckbox
            }
          >
            <input
              type="checkbox"
              checked={keepSession}
              onChange={(event) =>
                setKeepSession(
                  event.target.checked,
                )
              }
              disabled={isBusy}
            />

            <span>
              Mantener sesión iniciada
            </span>
          </label>

          <button
            type="button"
            className={
              styles.recoveryButton
            }
            onClick={
              handlePasswordRecovery
            }
            disabled={isBusy}
          >
            {isSendingRecovery
              ? 'Enviando correo...'
              : '¿Olvidaste tu contraseña?'}
          </button>

          {message ? (
            <div
              className={
                styles.errorMessage
              }
              role="status"
            >
              {message}
            </div>
          ) : null}

          {isDeviceLimit ? (
            <button
              type="button"
              className={
                styles.secondaryButton
              }
              onClick={
                handleCloseAllSessionsEmail
              }
              disabled={isBusy}
            >
              {isSendingCloseSessionsEmail
                ? 'Enviando enlace...'
                : 'Cerrar todas mis sesiones'}
            </button>
          ) : null}

          <button
            className={
              styles.submitButton
            }
            type="submit"
            disabled={isBusy}
          >
            {isLoading
              ? 'Iniciando sesión...'
              : 'Iniciar sesión'}
          </button>
        </form>

        <p className={styles.loginText}>
          ¿Todavía no tienes una cuenta?{' '}
          <Link
            href={`/registro?next=${encodeURIComponent(
              nextPath,
            )}`}
          >
            Crea tu cuenta
          </Link>
        </p>
      </section>
    </main>
  );
}
