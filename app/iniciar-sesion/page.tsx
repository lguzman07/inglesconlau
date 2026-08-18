'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import styles from '../registro/page.module.css';

export default function IniciarSesionPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSession, setKeepSession] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingRecovery, setIsSendingRecovery] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const isBusy =
    isLoading || isSendingRecovery || isGoogleLoading;

  async function handleGoogleSignIn() {
    setMessage('');
    setIsGoogleLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(
        'No pudimos continuar con Google. Inténtalo nuevamente.'
      );
      setIsGoogleLoading(false);
    }
  }

  async function handlePasswordRecovery() {
    setMessage('');

    if (!email.trim()) {
      setMessage(
        'Escribe tu correo electrónico primero para poder restablecer tu contraseña.'
      );
      return;
    }

    setIsSendingRecovery(true);

    const supabase = createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      {
        redirectTo: `${window.location.origin}/restablecer-contrasena`,
      }
    );

    setIsSendingRecovery(false);

    if (error) {
      setMessage(
        'No pudimos enviar el correo de recuperación. Inténtalo nuevamente.'
      );
      return;
    }

    setMessage(
      'Te enviamos un correo para restablecer tu contraseña. Revisa también la carpeta de correo no deseado.'
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage('');
    setIsLoading(true);

    window.localStorage.setItem(
      'inglesconlau-keep-session',
      keepSession ? 'true' : 'false'
    );

    const supabase = createClient();

    const { data: authData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (signInError || !authData.user) {
      setMessage(
        'No pudimos iniciar sesión. Revisa tu correo y contraseña e inténtalo nuevamente.'
      );
      setIsLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select(
        'full_name, birth_date, country, gender, english_level, learning_goal'
      )
      .eq('id', authData.user.id)
      .maybeSingle();

    if (profileError) {
      setMessage(
        'Iniciaste sesión, pero no pudimos comprobar tu perfil. Inténtalo nuevamente.'
      );
      setIsLoading(false);
      return;
    }

    const profileIsComplete = Boolean(
      profile?.full_name?.trim() &&
      profile?.birth_date &&
      profile?.country?.trim() &&
      profile?.gender &&
      profile?.english_level &&
      profile?.learning_goal
    );

    if (profileIsComplete) {
      router.replace('/inicio');
    } else {
      router.replace('/completar-perfil');
    }

    router.refresh();
  }

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href="/">
        ← Volver al inicio
      </Link>

      <section className={styles.card} aria-labelledby="login-title">
        <div className={styles.header}>
          <p className={styles.eyebrow}>INGLÉS CON LAU</p>

          <h1 id="login-title">Inicia sesión</h1>

          <p>
            Accede a tu ruta de aprendizaje y continúa desde donde te quedaste.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <button
            className={styles.googleButton}
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isBusy}
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
              onChange={(event) => {
                setEmail(event.target.value);
                setMessage('');
              }}
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
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage('');
                }}
                disabled={isBusy}
                required
              />

              <button
                className={styles.passwordToggle}
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={
                  showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                }
                aria-pressed={showPassword}
                disabled={isBusy}
              >
                {showPassword ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>

          <label className={styles.sessionCheckbox}>
            <input
              type="checkbox"
              checked={keepSession}
              onChange={(event) => setKeepSession(event.target.checked)}
              disabled={isBusy}
            />

            <span>Mantener sesión iniciada</span>
          </label>

          <button
            type="button"
            className={styles.recoveryButton}
            onClick={handlePasswordRecovery}
            disabled={isBusy}
          >
            {isSendingRecovery
              ? 'Enviando correo...'
              : '¿Olvidaste tu contraseña?'}
          </button>

          {message && (
            <div className={styles.errorMessage} role="status">
              {message}
            </div>
          )}

          <button
            className={styles.submitButton}
            type="submit"
            disabled={isBusy}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>

        <p className={styles.loginText}>
          ¿Todavía no tienes una cuenta?{' '}
          <Link href="/registro">Crea tu cuenta</Link>
        </p>
      </section>
    </main>
  );
}