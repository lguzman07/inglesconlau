'use client';

import { FormEvent, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

export default function PlatformWaitlistForm({
  className = 'waitlist-form',
}: {
  className?: string;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<WaitlistStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setStatus('loading');
    setMessage('');

    const supabase = createClient();
    const { error } = await supabase.rpc('join_platform_waitlist', {
      p_email: trimmedEmail,
    });

    if (error) {
      setStatus('error');
      setMessage('No pudimos guardar tu correo. Intenta de nuevo en un momento.');
      return;
    }

    // Best-effort notification + confirmation emails. The signup itself
    // already succeeded above (row saved via the RPC), so we don't fail
    // the user-facing flow if this request errors.
    try {
      await fetch('/api/waitlist-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      });
    } catch {
      // Ignore — the signup is already saved.
    }

    setStatus('success');
    setMessage('¡Listo! Te avisaré por correo el día que abra.');
    setEmail('');
  }

  return (
    <form className={className} onSubmit={handleWaitlistSubmit}>
      <label htmlFor="waitlist-email" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        placeholder="tu@correo.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={status === 'loading' || status === 'success'}
      />
      <button type="submit" disabled={status === 'loading' || status === 'success'}>
        {status === 'success' ? 'Anotado ✓' : 'Avísame'}
      </button>

      {message ? <p className="waitlist-status">{message}</p> : null}
    </form>
  );
}
