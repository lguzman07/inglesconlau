'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import {
  clearStoredSupabaseSessions,
  createClient,
  saveKeepSessionPreference,
} from '@/lib/supabase/client';

import styles from './page.module.css';

const DEVICE_ID_STORAGE_KEY = 'ingles-con-lau-device-id';
const RECORDING_CONSENT_PENDING_KEY = 'inglesconlau-recording-consent-pending';

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/inicio';
  }

  return value;
}

function getOrCreateDeviceId() {
  const existingDeviceId = window.localStorage.getItem(
    DEVICE_ID_STORAGE_KEY,
  );

  if (existingDeviceId) return existingDeviceId;

  const newDeviceId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random()
          .toString(36)
          .slice(2)}`;

  window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, newDeviceId);

  return newDeviceId;
}

function getDeviceName() {
  const userAgent = navigator.userAgent;

  if (/iPad/i.test(userAgent)) return 'iPad';
  if (/iPhone/i.test(userAgent)) return 'iPhone';
  if (/Android/i.test(userAgent)) return 'Android';
  if (/Macintosh|Mac OS X/i.test(userAgent)) return 'Mac';
  if (/Windows/i.test(userAgent)) return 'Windows PC';

  return 'Dispositivo';
}

export default function RegistroPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<
    'success' | 'error' | ''
  >('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [nextPath, setNextPath] = useState('/inicio');
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  const isBusy = isLoading || isGoogleLoading;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setNextPath(getSafeNextPath(searchParams.get('next')));
  }, []);

  async function handleGoogleSignIn() {
    if (!hasAcceptedTerms) {
      setMessage('Debes aceptar los Términos y condiciones para continuar.');
      setMessageType('error');
      return;
    }

    setMessage('');
    setMessageType('');
    setIsGoogleLoading(true);

    window.localStorage.setItem(RECORDING_CONSENT_PENDING_KEY, '1');

    saveKeepSessionPreference(true);
    clearStoredSupabaseSessions();

    const deviceId = getOrCreateDeviceId();
    const deviceName = getDeviceName();
    const supabase = createClient();

    const callbackUrl = new URL('/auth/callback', window.location.origin);
    callbackUrl.searchParams.set('keep_session', 'true');
    callbackUrl.searchParams.set('device_id', deviceId);
    callbackUrl.searchParams.set('device_name', deviceName);
    callbackUrl.searchParams.set('next', nextPath);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: callbackUrl.toString(),
      },
    });

    if (error) {
      setMessage(
        'No pudimos continuar con Google. Inténtalo nuevamente.'
      );
      setMessageType('error');
      setIsGoogleLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage('');
    setMessageType('');

    if (!hasAcceptedTerms) {
      setMessage('Debes aceptar los Términos y condiciones para continuar.');
      setMessageType('error');
      return;
    }

    if (password.length < 8) {
      setMessage('La contraseña debe tener al menos 8 caracteres.');
      setMessageType('error');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      setMessageType('error');
      return;
    }

    setIsLoading(true);

    window.localStorage.setItem(RECORDING_CONSENT_PENDING_KEY, '1');

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/iniciar-sesion?next=${encodeURIComponent(nextPath)}`,
      },
    });

    if (error) {
      setMessage(
        'No pudimos procesar tu registro. Revisa la información e inténtalo nuevamente.'
      );
      setMessageType('error');
      setIsLoading(false);
      return;
    }

    setMessage(
      'Revisa tu correo para confirmar tu dirección antes de iniciar sesión. Si ya tenías una cuenta, inicia sesión o restablece tu contraseña.'
    );
    setMessageType('success');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsLoading(false);
  }

  return (
    <main className={styles.page}>
      <section
        className={styles.card}
        aria-labelledby="registration-title"
      >
        <Link className={styles.backLink} href="/en-vivo">
          ← Volver al inicio
        </Link>

        <div className={styles.header}>
          <p className={styles.eyebrow}>INGLÉS CON LAU</p>

          <h1 id="registration-title">Crea tu cuenta</h1>

          <p>
            Regístrate para acceder a tu ruta de aprendizaje y guardar tu
            progreso.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.legalCheckbox}>
            <input
              type="checkbox"
              checked={hasAcceptedTerms}
              onChange={(event) => setHasAcceptedTerms(event.target.checked)}
              required
            />
            <span>
              He leído y acepto los{' '}
              <Link href="/terminos-y-condiciones" target="_blank">
                Términos y condiciones
              </Link>
              , incluyendo que mis clases en vivo podrían grabarse con fines
              educativos (solo audio, nunca video).
            </span>
          </label>

          <button
            className={styles.googleButton}
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isBusy || !hasAcceptedTerms}
          >
            <svg
              className={styles.googleIcon}
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

          <div className={styles.authDivider} aria-hidden="true">
            <span />
            <p>o continúa con tu correo</p>
            <span />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Correo electrónico</label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="nombre@ejemplo.com"
              disabled={isBusy}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Contraseña</label>

            <div className={styles.passwordWrapper}>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-describedby="password-help"
                disabled={isBusy}
                required
              />

              <button
                className={styles.passwordToggle}
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={
                  showPassword
                    ? 'Ocultar contraseña'
                    : 'Mostrar contraseña'
                }
                aria-pressed={showPassword}
                disabled={isBusy}
              >
                {showPassword ? 'Ocultar' : 'Ver'}
              </button>
            </div>

            <p id="password-help" className={styles.helpText}>
              Usa al menos 8 caracteres.
            </p>
          </div>

          <div className={styles.field}>
            <label htmlFor="confirm-password">
              Confirmar contraseña
            </label>

            <div className={styles.passwordWrapper}>
              <input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                disabled={isBusy}
                required
              />

              <button
                className={styles.passwordToggle}
                type="button"
                onClick={() =>
                  setShowConfirmPassword((current) => !current)
                }
                aria-label={
                  showConfirmPassword
                    ? 'Ocultar confirmación de contraseña'
                    : 'Mostrar confirmación de contraseña'
                }
                aria-pressed={showConfirmPassword}
                disabled={isBusy}
              >
                {showConfirmPassword ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>

          {message && (
            <div
              className={
                messageType === 'success'
                  ? styles.successMessage
                  : styles.errorMessage
              }
              role={messageType === 'error' ? 'alert' : 'status'}
            >
              {message}
            </div>
          )}

          <button
            className={styles.submitButton}
            type="submit"
            disabled={isBusy || !hasAcceptedTerms}
          >
            {isLoading ? 'Procesando...' : 'Crear mi cuenta'}
          </button>
        </form>

        <p className={styles.loginText}>
          ¿Ya tienes una cuenta?{' '}
          <Link
            href={`/iniciar-sesion?next=${encodeURIComponent(nextPath)}`}
          >
            Inicia sesión
          </Link>
        </p>
      </section>
    </main>
  );
}