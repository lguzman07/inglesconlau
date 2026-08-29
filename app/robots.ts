import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/inicio',
        '/lecciones',
        '/configuracion',
        '/calendario',
        '/flashcards',
        '/completar-perfil',
        '/cerrar-sesiones',
        '/restablecer-contrasena',
        '/auth',
        '/api',
        '/labs',
      ],
    },
    sitemap: 'https://inglesconlau.com/sitemap.xml',
  };
}
