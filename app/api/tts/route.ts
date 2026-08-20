import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;
    const englishVoiceId = process.env.ELEVENLABS_ENGLISH_VOICE_ID;
    const britishVoiceId = process.env.ELEVENLABS_BRITISH_VOICE_ID;
    const spanishVoiceId = process.env.ELEVENLABS_SPANISH_VOICE_ID;

    if (
      !supabaseUrl ||
      !supabaseKey ||
      !elevenLabsApiKey ||
      !englishVoiceId ||
      !britishVoiceId ||
      !spanishVoiceId
    ) {
      console.error('TTS configuration is incomplete:', {
        hasSupabaseUrl: Boolean(supabaseUrl),
        hasSupabaseKey: Boolean(supabaseKey),
        hasElevenLabsApiKey: Boolean(elevenLabsApiKey),
        hasEnglishVoiceId: Boolean(englishVoiceId),
        hasBritishVoiceId: Boolean(britishVoiceId),
        hasSpanishVoiceId: Boolean(spanishVoiceId),
      });

      return Response.json(
        {
          error:
            'La configuración del servicio de audio está incompleta.',
        },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return Response.json(
        { error: 'Solicitud no válida.' },
        { status: 400 },
      );
    }

    const { text, language } = body as {
      text?: unknown;
      language?: unknown;
    };

    if (
      typeof text !== 'string' ||
      !text.trim() ||
      text.trim().length > 500 ||
      (language !== 'en' && language !== 'en-GB' && language !== 'es')
    ) {
      return Response.json(
        { error: 'Solicitud no válida.' },
        { status: 400 },
      );
    }

    const cookieStore = await cookies();

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll() {
          // Esta ruta solamente necesita leer la sesión actual.
        },
      },
    });

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return Response.json(
        {
          error:
            'Debes iniciar sesión para escuchar el audio.',
        },
        { status: 401 },
      );
    }

    const [
      { data: profile, error: profileError },
      { data: subscription, error: subscriptionError },
    ] = await Promise.all([
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

    if (profileError) {
      console.error('TTS profile error:', profileError.message);

      return Response.json(
        {
          error:
            'No pudimos comprobar el acceso al audio.',
        },
        { status: 500 },
      );
    }

    if (subscriptionError) {
      console.error(
        'TTS subscription error:',
        subscriptionError.message,
      );

      return Response.json(
        {
          error:
            'No pudimos comprobar la suscripción.',
        },
        { status: 500 },
      );
    }

    const hasAccess =
      profile?.role === 'admin' || Boolean(subscription);

    if (!hasAccess) {
      return Response.json(
        {
          error:
            'Necesitas una suscripción activa para escuchar el audio.',
        },
        { status: 403 },
      );
    }

    const cleanText = text.trim();

    const {
      data: quotaAllowed,
      error: quotaError,
    } = await supabase.rpc('consume_tts_quota', {
      p_characters: cleanText.length,
    });

    if (quotaError) {
      console.error('TTS quota error:', quotaError.message);

      return Response.json(
        {
          error:
            'No pudimos comprobar tu disponibilidad de audio.',
        },
        { status: 500 },
      );
    }

    if (!quotaAllowed) {
      return Response.json(
        {
          error:
            'Alcanzaste el límite diario de audio. Inténtalo nuevamente mañana.',
        },
        { status: 429 },
      );
    }

    const voiceId =
      language === 'es'
        ? spanishVoiceId
        : language === 'en-GB'
          ? britishVoiceId
          : englishVoiceId;

    const languageCode = language === 'es' ? 'es' : 'en';

    const elevenLabsResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          Accept: 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': elevenLabsApiKey,
        },
        body: JSON.stringify({
          text: cleanText,
          model_id: 'eleven_multilingual_v2',
          language_code: languageCode,
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0,
            use_speaker_boost: true,
          },
        }),
      },
    );

    if (!elevenLabsResponse.ok) {
      const elevenLabsError = await elevenLabsResponse.text();

      console.error('ElevenLabs error:', {
        status: elevenLabsResponse.status,
        body: elevenLabsError.slice(0, 500),
      });

      return Response.json(
        {
          error:
            'ElevenLabs no pudo generar el audio.',
        },
        { status: 502 },
      );
    }

    const audio = await elevenLabsResponse.arrayBuffer();

    if (!audio.byteLength) {
      return Response.json(
        {
          error:
            'ElevenLabs devolvió un audio vacío.',
        },
        { status: 502 },
      );
    }

    return new Response(audio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (error) {
    console.error('TTS route error:', error);

    return Response.json(
      {
        error:
          'Ocurrió un error interno al generar el audio.',
      },
      { status: 500 },
    );
  }
}