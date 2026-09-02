/*
 * Canva solo permite insertar un diseño en un iframe si usas el código
 * de "Insertar" (Share > Embed), no un link normal de "Compartir".
 * Esta función acepta lo que sea que la admin pegue (el snippet HTML
 * completo, o solo el link) y devuelve una URL segura para usar como
 * src de un iframe, o null si no se pudo reconocer.
 */
export function extractCanvaEmbedUrl(
  rawInput: string | null | undefined,
): string | null {
  if (!rawInput) return null;

  const trimmed = rawInput.trim();
  if (!trimmed) return null;

  let candidateUrl = trimmed;

  const iframeSrcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  if (iframeSrcMatch) {
    candidateUrl = iframeSrcMatch[1];
  }

  let parsed: URL;
  try {
    parsed = new URL(candidateUrl);
  } catch {
    return null;
  }

  const isCanvaHost =
    parsed.hostname === 'www.canva.com' || parsed.hostname === 'canva.com';

  if (!isCanvaHost || !parsed.pathname.startsWith('/design/')) {
    return null;
  }

  if (!parsed.searchParams.has('embed')) {
    parsed.searchParams.set('embed', '');
  }

  return parsed.toString();
}
