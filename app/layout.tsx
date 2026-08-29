import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Lexend } from 'next/font/google';
import Script from 'next/script';

import Footer from '@/components/Footer/Footer';
import RevealOnScroll from '@/components/RevealOnScroll/RevealOnScroll';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import StudentNavbar from '@/components/StudentNavbar/StudentNavbar';

import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inglesconlau.com'),

  title: {
    default: 'Inglés con Lau | Aprende conmigo',
    template: '%s | Inglés con Lau',
  },

  description:
    'Clases grupales de inglés en vivo, en grupos pequeños, diseñadas especialmente para hispanohablantes. Empieza con una clase de prueba desde RD$100.',

  applicationName: 'Inglés con Lau',
  creator: 'Laura Guzmán',
  publisher: 'Inglés con Lau',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Inglés con Lau | Aprende conmigo',

    description:
      'Clases grupales de inglés en vivo, en grupos pequeños, con un horario fijo que eliges una sola vez. Empieza con una clase de prueba desde RD$100.',

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

const clarityInitializationScript = `
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "y8slak1ohs");
`;

const themeInitializationScript = `
  try {
    const savedPreference =
      localStorage.getItem('display-mode-v2');

    const validPreferences = [
      'auto',
      'normal',
      'dark',
      'contrast'
    ];

    const preference =
      validPreferences.includes(savedPreference)
        ? savedPreference
        : 'auto';

    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? 'dark'
      : 'normal';

    document.documentElement.dataset.theme =
      preference === 'auto'
        ? systemTheme
        : preference;
  } catch {
    document.documentElement.dataset.theme =
      'normal';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={lexend.className}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />
      </head>

      <body>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: clarityInitializationScript,
          }}
        />

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