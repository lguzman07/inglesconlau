import { NextRequest, NextResponse } from 'next/server';
import { ElevenLabsClient } from 'elevenlabs';

const VOICE_IDS: Record<string, string | undefined> = {
  en: process.env.ELEVENLABS_ENGLISH_VOICE_ID,
  'en-GB': process.env.ELEVENLABS_BRITISH_VOICE_ID,
  es: process.env.ELEVENLABS_SPANISH_VOICE_ID,
};

export async function POST(request: NextRequest) {
  let text: unknown;
  let language: unknown;

  try {
    const body = await request.json();
    text = body?.text;
    language = body?.language;
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  if (typeof text !== 'string' || !text.trim()) {
    return NextResponse.json({ error: 'Falta el texto a convertir.' }, { status: 400 });
  }

  const voiceId = typeof language === 'string' ? VOICE_IDS[language] : undefined;

  if (!voiceId) {
    return NextResponse.json({ error: 'Idioma no soportado.' }, { status: 400 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    console.error('ELEVENLABS_API_KEY no está configurada.');
    return NextResponse.json({ error: 'Audio no disponible.' }, { status: 500 });
  }

  try {
    const client = new ElevenLabsClient({ apiKey });

    const audioStream = await client.textToSpeech.convert(voiceId, {
      text,
      model_id: 'eleven_multilingual_v2',
      output_format: 'mp3_44100_128',
    });

    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) {
      chunks.push(chunk as Buffer);
    }
    const audioBuffer = Buffer.concat(chunks);

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating audio:', error);
    return NextResponse.json({ error: 'No pudimos generar el audio.' }, { status: 500 });
  }
}
