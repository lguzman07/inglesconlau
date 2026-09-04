import { NextRequest, NextResponse } from 'next/server';

type MyMemoryResponse = {
  responseData?: { translatedText?: string };
  responseStatus?: number | string;
};

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('text');

  if (typeof text !== 'string' || !text.trim()) {
    return NextResponse.json(
      { error: 'Falta el texto a traducir.' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text.trim(),
      )}&langpair=en|es`,
    );

    if (!response.ok) {
      return NextResponse.json({ translation: null });
    }

    const data = (await response.json()) as MyMemoryResponse;
    const translation = data.responseData?.translatedText ?? null;

    return NextResponse.json({ translation });
  } catch (error) {
    console.error('Error translating text:', error);
    return NextResponse.json({ translation: null });
  }
}
