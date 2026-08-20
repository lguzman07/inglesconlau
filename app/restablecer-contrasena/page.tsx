'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const DEVICE_ID_STORAGE_KEY = 'ingles-con-lau-device-id';

export default function RestablecerContrasenaPage() {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasValidSession, setHasValidSession] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    async function checkRecoverySession() {
      const supabase = createClient();

      setIsCheckingSession(true);
      setErrorMessage('');

      const searchParams = new URLSearchParams(
        window.location.search,
      );

      const code = searchParams.get('code');

      if (code) {
        const { error: exchangeError } =
          await supabase.auth.exchangeCodeForSession(code);

        if (exchangeError) {
          setHasValidSession(false);
          setErrorMessage(
            'El enlace de recuperación no es válido o ha expirado. Solicita uno nuevo.',
          );
          setIsCheckingSession(false);
          return;
        }
      }

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session) {
        setHasValidSession(false);
        setErrorMessage(
          'El enlace de recuperación no es válido o ha expirado. Solicita uno nuevo.',
        );
        setIsCheckingSession(false);
        return;
      }

      setHasValidSession(true);
      setIsCheckingSession(false);
    }

    void checkRecoverySession();
  }, []);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!hasValidSession) {
      setErrorMessage(
        'El enlace de recuperación no es válido o ha expirado. Solicita uno nuevo.',
      );
      return;
    }

    if (!password || !confirmPassword) {
      setErrorMessage(
        'Por favor, completa ambos campos.',
      );
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        'La contraseña debe tener al menos 8 caracteres.',
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(
        'Las contraseñas no coinciden.',
      );
      return;
    }

    setIsSaving(true);

    const supabase = createClient();

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {
      setIsSaving(false);

      if (
        error.message
          .toLowerCase()
          .includes('different')
      ) {
        setErrorMessage(
          'La nueva contraseña debe ser diferente de la contraseña anterior.',
        );
        return;
      }

      setErrorMessage(
        'No pudimos actualizar tu contraseña. Solicita un nuevo enlace e inténtalo otra vez.',
      );
      return;
    }

    const deviceId =
      window.localStorage.getItem(
        DEVICE_ID_STORAGE_KEY,
      );

    if (deviceId) {
      const {
        error: deviceError,
      } = await supabase.rpc(
        'deactivate_current_device',
        {
          p_device_id: deviceId,
        },
      );

      if (deviceError) {
        console.error(
          'Error deactivating device after password reset:',
          deviceError.message,
        );
      }
    }

    setSuccessMessage(
      'Tu contraseña se actualizó correctamente.',
    );

    setPassword('');
    setConfirmPassword('');

    await supabase.auth.signOut();

    setTimeout(() => {
      router.replace('/iniciar-sesion');
    }, 2000);
  }

  if (isCheckingSession) {
    return (
      <main className="reset-password-page">
        <section className="reset-password-card">
          <p className="reset-password-loading">
            Verificando tu enlace...
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="reset-password-page">
      <section className="reset-password-card">
        <div className="reset-password-header">
          <p className="reset-password-eyebrow">
            INGLÉS CON LAU
          </p>

          <h1>
            Crea una nueva contraseña
          </h1>

          <p>
            Escribe una contraseña nueva para recuperar el acceso a tu cuenta.
          </p>
        </div>

        <form
          className="reset-password-form"
          onSubmit={handleSubmit}
        >
          <div className="reset-password-field">
            <label htmlFor="new-password">
              Nueva contraseña
            </label>

            <div className="reset-password-input-wrapper">
              <input
                id="new-password"
                name="newPassword"
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={password}
                onChange={(event) => {
                  setPassword(
                    event.target.value,
                  );
                  setErrorMessage('');
                  setSuccessMessage('');
                }}
                placeholder="Mínimo 8 caracteres"
                autoComplete="new-password"
                minLength={8}
                disabled={
                  !hasValidSession ||
                  isSaving
                }
                required
              />

              <button
                className="reset-password-toggle"
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
                disabled={
                  !hasValidSession ||
                  isSaving
                }
              >
                {showPassword
                  ? 'Ocultar'
                  : 'Ver'}
              </button>
            </div>
          </div>

          <div className="reset-password-field">
            <label htmlFor="confirm-password">
              Confirma tu nueva contraseña
            </label>

            <div className="reset-password-input-wrapper">
              <input
                id="confirm-password"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(
                    event.target.value,
                  );
                  setErrorMessage('');
                  setSuccessMessage('');
                }}
                placeholder="Escribe la contraseña nuevamente"
                autoComplete="new-password"
                minLength={8}
                disabled={
                  !hasValidSession ||
                  isSaving
                }
                required
              />

              <button
                className="reset-password-toggle"
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    (current) =>
                      !current,
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? 'Ocultar confirmación de contraseña'
                    : 'Mostrar confirmación de contraseña'
                }
                disabled={
                  !hasValidSession ||
                  isSaving
                }
              >
                {showConfirmPassword
                  ? 'Ocultar'
                  : 'Ver'}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p
              className="reset-password-message reset-password-message-error"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              className="reset-password-message reset-password-message-success"
              role="status"
            >
              {successMessage}
            </p>
          )}

          <button
            className="reset-password-submit"
            type="submit"
            disabled={
              !hasValidSession ||
              isSaving
            }
          >
            {isSaving
              ? 'Actualizando...'
              : 'Actualizar contraseña'}
          </button>
        </form>
      </section>
    </main>
  );
}