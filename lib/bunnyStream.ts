import crypto from 'node:crypto';

/*
 * Genera un link firmado y con vencimiento para reproducir un video de
 * Bunny Stream dentro de un <iframe>. Usa la "Embed View Token
 * Authentication" de Bunny: token = SHA256(apiKey + videoId + expires),
 * en hexadecimal. Esto solo protege el video si la biblioteca tiene
 * activada esa opción de seguridad (Video Library > Security >
 * "Token Authentication").
 *
 * IMPORTANTE: solo se debe llamar desde código de servidor (nunca desde
 * el navegador), porque usa la API key privada de Bunny.
 */
export function getSignedBunnyEmbedUrl(
  videoId: string,
  expiresInSeconds = 6 * 60 * 60,
): string | null {
  const libraryId = process.env.BUNNY_STREAM_LIBRARY_ID;
  const apiKey = process.env.BUNNY_STREAM_API_KEY;

  if (!libraryId || !apiKey || !videoId) return null;

  const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const hashableBase = `${apiKey}${videoId}${expires}`;
  const token = crypto.createHash('sha256').update(hashableBase).digest('hex');

  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?token=${token}&expires=${expires}`;
}
