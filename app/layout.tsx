import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Lexend } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/components/Footer/Footer';
import RevealOnScroll from '@/components/RevealOnScroll/RevealOnScroll';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import StudentNavbar from '@/components/StudentNavbar/StudentNavbar';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inglesconlau.com'),
  title: {
    default: 'Inglés con Lau | Aprende conmigo',
    template: '%s | Inglés con Lau',
  },
  description:
    'Aprende inglés con confianza mediante lecciones grabadas, ejercicios interactivos y una ruta diseñada especialmente para hispanohablantes.',
  applicationName: 'Inglés con Lau',
  creator: 'Laura Guzmán',
  publisher: 'Inglés con Lau',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Inglés con Lau | Aprende conmigo',
    description:
      'Lecciones grabadas, ejercicios interactivos y una ruta clara para aprender inglés con confianza y a tu propio ritmo.',
    url: '/',
    siteName: 'Inglés con Lau',
    locale: 'es_DO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitializationScript = `
  try {
    const savedPreference = localStorage.getItem('display-mode-v2');
    const validPreferences = ['auto', 'normal', 'dark', 'contrast'];

    const preference = validPreferences.includes(savedPreference)
      ? savedPreference
      : 'auto';

    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'normal';

    document.documentElement.dataset.theme =
      preference === 'auto' ? systemTheme : preference;
  } catch {
    document.documentElement.dataset.theme = 'normal';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />
      </head>

      <body className={lexend.className}>
        <ScrollProgress />
        <StudentNavbar />
        <RevealOnScroll />

        {children}

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
