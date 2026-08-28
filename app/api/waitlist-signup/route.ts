import { NextRequest, NextResponse } from 'next/server';

const NOTIFY_EMAIL = 'lau@inglesconlau.com';
const FROM_ADDRESS = 'Inglés con Lau <notificaciones@inglesconlau.com>';

// Matches the dark-navy palette used on inglesconlau.com (see
// .marketing-page tokens in app/globals.css) so transactional emails
// feel consistent with the site instead of looking like a different
// product.
function emailLayout(bodyHtml: string) {
  return `
    <div style="max-width: 600px; margin: 0 auto; padding: 32px; font-family: Arial, sans-serif; color: #f5f7fa; background-color: #0c1220; border-radius: 18px; border: 1px solid #1c2942;">
      <p style="margin: 0 0 8px; color: #f0975a; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">
        Inglés con Lau
      </p>
      ${bodyHtml}
      <p style="margin: 28px 0 0; font-size: 16px; line-height: 1.7; color: #f5f7fa;">
        Con cariño,<br>
        <strong>Inglés con Lau</strong>
      </p>
    </div>
  `;
}

function emailButton(href: string, label: string) {
  return `
    <p style="margin: 28px 0; text-align: center;">
      <a
        href="${href}"
        style="display: inline-block; padding: 14px 24px; color: #ffffff; background-color: #4a86dd; border-radius: 10px; font-size: 16px; font-weight: bold; text-decoration: none;"
      >
        ${label}
      </a>
    </p>
  `;
}

function notifyEmailHtml(subscriberEmail: string) {
  return emailLayout(`
      <h1 style="margin: 0 0 20px; color: #f5f7fa; font-size: 26px;">
        Nuevo interesado en la plataforma
      </h1>

      <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7; color: #a9b4c7;">
        Alguien se apuntó a la lista de espera de la Plataforma Inglés con Lau:
      </p>

      <p style="margin: 0 0 16px; padding: 14px 18px; background-color: #131b2c; border-radius: 10px; font-size: 16px; font-weight: bold; color: #f5f7fa;">
        ${subscriberEmail}
      </p>
  `);
}

function confirmationEmailHtml() {
  return emailLayout(`
      <h1 style="margin: 0 0 20px; color: #f5f7fa; font-size: 26px;">
        ¡Listo! Te avisaré cuando abra la plataforma.
      </h1>

      <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7; color: #a9b4c7;">
        Gracias por apuntarte a la lista de espera de la <strong style="color: #f5f7fa;">Plataforma Inglés con Lau</strong>: lecciones grabadas, ejercicios interactivos y tu progreso, a tu ritmo y sin horario. Te escribiré a este correo el día que esté lista.
      </p>

      ${emailButton('https://inglesconlau.com/plan', 'Ver los planes de clases en vivo')}

      <p style="margin: 0 0 16px; font-size: 14px; line-height: 1.7; color: #7c8aa0;">
        Mientras tanto, si quieres empezar ya, puedes reservar una clase en vivo desde RD$100.
      </p>
  `);
}

async function sendEmail(apiKey: string, to: string, subject: string, html: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM_ADDRESS, to, subject, html }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend error sending to ${to}:`, response.status, body);
  }
}

export async function POST(request: NextRequest) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Correo inválido.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // The waitlist row is already saved via the Supabase RPC before this
    // route is called — email is a best-effort notification layer, so we
    // don't fail the signup just because Resend isn't configured yet.
    console.error('RESEND_API_KEY no está configurada.');
    return NextResponse.json({ ok: true });
  }

  await Promise.all([
    sendEmail(apiKey, NOTIFY_EMAIL, 'Nuevo interesado en la plataforma', notifyEmailHtml(email)),
    sendEmail(
      apiKey,
      email,
      '¡Listo! Te avisaré cuando abra la plataforma',
      confirmationEmailHtml()
    ),
  ]);

  return NextResponse.json({ ok: true });
}
