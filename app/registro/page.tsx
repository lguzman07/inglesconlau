'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import styles from './page.module.css';

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage('');
    setMessageType('');

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

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/iniciar-sesion`,
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
        <Link className={styles.backLink} href="/">
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
            disabled={isLoading}
          >
            {isLoading ? 'Procesando...' : 'Crear mi cuenta'}
          </button>
        </form>

        <p className={styles.loginText}>
          ¿Ya tienes una cuenta?{' '}
          <Link href="/iniciar-sesion">Inicia sesión</Link>
        </p>
      </section>
    </main>
  );
}