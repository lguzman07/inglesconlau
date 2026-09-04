import { NextRequest, NextResponse } from 'next/server';

type DictionaryEntry = {
  meanings?: Array<{
    definitions?: Array<{ definition?: string }>;
  }>;
};

export async function GET(request: NextRequest) {
  const word = request.nextUrl.searchParams.get('word');

  if (typeof word !== 'string' || !word.trim()) {
    return NextResponse.json(
      { error: 'Falta la palabra a buscar.' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
        word.trim(),
      )}`,
    );

    if (!response.ok) {
      return NextResponse.json({ definition: null });
    }

    const data = (await response.json()) as DictionaryEntry[];

    const definition = data
      .flatMap((entry) => entry.meanings ?? [])
      .flatMap((meaning) => meaning.definitions ?? [])
      .map((item) => item.definition)
      .find((text): text is string => Boolean(text));

    return NextResponse.json({ definition: definition ?? null });
  } catch (error) {
    console.error('Error fetching dictionary definition:', error);
    return NextResponse.json({ definition: null });
  }
}
