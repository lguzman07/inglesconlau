'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

import { createClient } from '@/lib/supabase/client';

const plans = [
  {
    name: 'Clase de prueba',
    price: '100',
    classes: '1 clase',
    detail: 'Conoce el método antes de comprar un paquete.',
    cta: 'Probar',
    featured: false,
  },
  {
    name: 'Paquete flexible',
    price: '600',
    classes: '5 clases',
    detail: 'RD$120 por clase. Válidas hasta agotarlas.',
    cta: 'Comprar',
    featured: false,
  },
  {
    name: '4 semanas',
    price: '1,900',
    classes: '20 clases',
    detail: 'RD$95 por clase. Un mes completo, cinco días por semana.',
    cta: 'Empezar',
    featured: true,
  },
  {
    name: 'Curso completo',
    price: '7,000',
    classes: '80 clases',
    detail: 'RD$87.50 por clase. Ahorras RD$2,600.',
    cta: 'Comprar',
    featured: false,
  },
];

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

export default function PlansTeaser() {
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

    setStatus('success');
    setMessage('¡Listo! Te avisaré por correo el día que abra.');
    setEmail('');
  }

  return (
    <section className="section" id="planes">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Planes</p>
          <h2 className="section-title">Elige cómo quieres aprender.</h2>
          <p>
            Clases grupales en vivo, un horario fijo por grupo. Empieza
            probando por RD$100.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
              key={plan.name}
            >
              {plan.featured ? (
                <span className="pricing-card-badge">Más elegido</span>
              ) : null}

              <p className="pricing-card-name">{plan.name}</p>

              <p className="pricing-card-price">
                RD$ {plan.price} <span>/{plan.classes}</span>
              </p>

              <p className="pricing-card-detail">{plan.detail}</p>

              <Link
                href="/plan"
                className={plan.featured ? 'primary-button' : 'secondary-button'}
              >
                <span className="button-title">{plan.cta}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="waitlist-card">
          <div className="waitlist-card-text">
            <span className="waitlist-card-badge">En construcción</span>
            <h3>Plataforma Inglés con Lau</h3>
            <p>
              Lecciones grabadas, ejercicios interactivos y tu progreso, a tu
              ritmo y sin horario. Desde RD$1,200/mes. Apúntate y te aviso el
              día que abra.
            </p>
          </div>

          <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
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
        </div>
      </div>
    </section>
  );
}
