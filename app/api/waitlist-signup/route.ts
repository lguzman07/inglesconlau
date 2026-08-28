import { NextRequest, NextResponse } from 'next/server';

const NOTIFY_EMAIL = 'lau@inglesconlau.com';
const FROM_ADDRESS = 'Inglés con Lau <notificaciones@inglesconlau.com>';

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
    sendEmail(
      apiKey,
      NOTIFY_EMAIL,
      'Nuevo interesado en la plataforma',
      `<p>Alguien se apuntó a la lista de espera de la Plataforma Inglés con Lau:</p><p><strong>${email}</strong></p>`
    ),
    sendEmail(
      apiKey,
      email,
      '¡Listo! Te avisaré cuando abra la plataforma',
      `<p>Hola,</p>
       <p>Gracias por apuntarte a la lista de espera de la <strong>Plataforma Inglés con Lau</strong> (lecciones grabadas, ejercicios interactivos y tu progreso, a tu ritmo). Te escribiré a este correo el día que esté lista.</p>
       <p>Mientras tanto, si quieres empezar ya con las clases en vivo en grupo, puedes ver los planes aquí: <a href="https://inglesconlau.com/plan">inglesconlau.com/plan</a></p>
       <p>— Lau</p>`
    ),
  ]);

  return NextResponse.json({ ok: true });
}
