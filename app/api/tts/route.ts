import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY!;
const ENGLISH_VOICE_ID = process.env.ELEVENLABS_ENGLISH_VOICE_ID!;
const SPANISH_VOICE_ID = process.env.ELEVENLABS_SPANISH_VOICE_ID!;

export async function POST(request: NextRequest) {
  try {
    const { text, language } = await request.json();

    if (
      typeof text !== 'string' ||
      !text.trim() ||
      text.trim().length > 500 ||
      (language !== 'en' && language !== 'es')
    ) {
      return Response.json({ error: 'Solicitud no válida.' }, { status: 400 });
    }

    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll() {},
        },
      }
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return Response.json(
        { error: 'Debes iniciar sesión para escuchar el audio.' },
        { status: 401 }
      );
    }

    const [{ data: profile }, { data: subscription }] = await Promise.all([
      supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle(),
      supabase
        .from('subscriptions')
        .select('status, current_period_end')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .gt('current_period_end', new Date().toISOString())
        .maybeSingle(),
    ]);

    const hasAccess = profile?.role === 'admin' || Boolean(subscription);

    if (!hasAccess) {
      return Response.json(
        { error: 'Necesitas una suscripción activa para escuchar el audio.' },
        { status: 403 }
      );
    }

    const cleanText = text.trim();

    const { data: quotaAllowed, error: quotaError } = await supabase.rpc(
      'consume_tts_quota',
      { p_characters: cleanText.length }
    );

    if (quotaError || !quotaAllowed) {
      return Response.json(
        {
          error:
            'Alcanzaste el límite diario de audio. Inténtalo de nuevo mañana.',
        },
        { status: 429 }
      );
    }

    const voiceId =
      language === 'es' ? SPANISH_VOICE_ID : ENGLISH_VOICE_ID;

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: cleanText,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {},
        }),
      }
    );

    if (!response.ok) {
      console.error('ElevenLabs error:', response.status);

      return Response.json(
        { error: 'No se pudo generar el audio.' },
        { status: 502 }
      );
    }

    const audio = await response.arrayBuffer();

    return new Response(audio, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('TTS route error:', error);

    return Response.json(
      { error: 'Ocurrió un error interno.' },
      { status: 500 }
    );
  }
}