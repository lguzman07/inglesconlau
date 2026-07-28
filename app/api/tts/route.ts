import { NextRequest } from 'next/server';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY!;
const ENGLISH_VOICE_ID = process.env.ELEVENLABS_ENGLISH_VOICE_ID!;
const SPANISH_VOICE_ID = process.env.ELEVENLABS_SPANISH_VOICE_ID!;

export async function POST(request: NextRequest) {
  try {
    const { text, language } = await request.json();

    if (!text) {
      return Response.json({ error: 'Missing text.' }, { status: 400 });
    }

    const voiceId = language === 'es' ? SPANISH_VOICE_ID : ENGLISH_VOICE_ID;

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {},
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      console.error('ElevenLabs Error:');
      console.error(error);

      return Response.json(
        {
          status: response.status,
          details: error,
        },
        {
          status: response.status,
        }
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
    console.error(error);

    return Response.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
