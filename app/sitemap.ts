import type { MetadataRoute } from 'next';

const BASE_URL = 'https://inglesconlau.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/en-vivo`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/clases-grupales`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/plataforma`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/registro`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/iniciar-sesion`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/terminos-y-condiciones`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/politica-de-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
