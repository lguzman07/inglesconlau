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
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingRecovery, setIsSendingRecovery] = useState(false);

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

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/restablecer-contrasena`,
    });

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

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setMessage(
        'No pudimos iniciar sesión. Revisa tu correo y contraseña e inténtalo nuevamente.'
      );
      setIsLoading(false);
      return;
    }

    router.push('/completar-perfil');
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
              disabled={isLoading || isSendingRecovery}
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
                disabled={isLoading || isSendingRecovery}
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
                disabled={isLoading || isSendingRecovery}
              >
                {showPassword ? 'Ocultar' : 'Ver'}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePasswordRecovery}
            disabled={isLoading || isSendingRecovery}
            style={{
              alignSelf: 'flex-end',
              padding: 0,
              color: '#496473',
              background: 'transparent',
              border: 'none',
              font: 'inherit',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor:
                isLoading || isSendingRecovery ? 'not-allowed' : 'pointer',
              opacity: isLoading || isSendingRecovery ? 0.65 : 1,
            }}
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
            disabled={isLoading || isSendingRecovery}
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