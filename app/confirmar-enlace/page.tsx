'use client';

import { CSSProperties, Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

type EmailOtpType =
  | 'signup'
  | 'invite'
  | 'magiclink'
  | 'recovery'
  | 'email_change'
  | 'email';

const VALID_TYPES: EmailOtpType[] = [
  'signup',
  'invite',
  'magiclink',
  'recovery',
  'email_change',
  'email',
];

function isEmailOtpType(
  value: string | null,
): value is EmailOtpType {
  return (
    value !== null &&
    (VALID_TYPES as string[]).includes(value)
  );
}

function getSafeRedirect(value: string | null) {
  if (
    !value ||
    !value.startsWith('/') ||
    value.startsWith('//')
  ) {
    return '/inicio';
  }

  return value;
}

const cardStyle: CSSProperties = {
  width: 'min(560px, 100%)',
  padding: '40px',
  background: 'var(--surface-solid)',
  border: '1px solid var(--border)',
  borderRadius: '24px',
  boxShadow: 'var(--shadow)',
};

const eyebrowStyle: CSSProperties = {
  margin: '0 0 10px',
  color: 'var(--primary)',
  fontSize: '0.8rem',
  fontWeight: 800,
  letterSpacing: '0.12em',
};

const headingStyle: CSSProperties = {
  margin: '0 0 14px',
  fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
  lineHeight: 1.15,
};

const descriptionStyle: CSSProperties = {
  margin: '0 0 26px',
  color: 'var(--text-light)',
  lineHeight: 1.7,
};

const buttonStyle: CSSProperties = {
  display: 'inline-flex',
  minHeight: '48px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '12px 20px',
  color: '#ffffff',
  background: 'var(--primary)',
  border: 0,
  borderRadius: '12px',
  fontWeight: 800,
  fontSize: '1rem',
  cursor: 'pointer',
};

const linkButtonStyle: CSSProperties = {
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
};

function ConfirmarEnlaceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<
    'idle' | 'confirming' | 'error'
  >('idle');

  const tokenHash = searchParams.get('token_hash');
  const typeParam = searchParams.get('type');
  const redirectTo = getSafeRedirect(
    searchParams.get('redirect_to'),
  );

  const hasValidParams =
    typeof tokenHash === 'string' &&
    tokenHash.length > 0 &&
    isEmailOtpType(typeParam);

  async function handleConfirm() {
    if (!hasValidParams || status === 'confirming') return;

    setStatus('confirming');

    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: typeParam as EmailOtpType,
    });

    if (error) {
      setStatus('error');
      return;
    }

    router.replace(redirectTo);
  }

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
      <section style={cardStyle}>
        <p style={eyebrowStyle}>INGLÉS CON LAU</p>

        {status === 'error' || !hasValidParams ? (
          <>
            <h1 style={headingStyle}>
              No pudimos confirmar el enlace
            </h1>

            <p style={descriptionStyle}>
              El enlace puede haber expirado o ya haberse
              usado. Solicita uno nuevo desde la página de
              inicio de sesión.
            </p>

            <Link
              href="/iniciar-sesion"
              style={linkButtonStyle}
            >
              Volver a iniciar sesión
            </Link>
          </>
        ) : (
          <>
            <h1 style={headingStyle}>
              Confirma que fuiste tú
            </h1>

            <p style={descriptionStyle}>
              Por tu seguridad, toca el botón para continuar.
              Este paso evita que el enlace se use por
              accidente antes de que tú lo abras.
            </p>

            <button
              type="button"
              style={{
                ...buttonStyle,
                opacity:
                  status === 'confirming' ? 0.7 : 1,
                cursor:
                  status === 'confirming'
                    ? 'not-allowed'
                    : 'pointer',
              }}
              disabled={status === 'confirming'}
              onClick={() => void handleConfirm()}
            >
              {status === 'confirming'
                ? 'Confirmando...'
                : 'Continuar'}
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default function ConfirmarEnlacePage() {
  return (
    <Suspense fallback={null}>
      <ConfirmarEnlaceContent />
    </Suspense>
  );
}
