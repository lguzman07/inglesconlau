import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Lexend } from 'next/font/google';
import ThemeControls from '@/components/ThemeControls/ThemeControls';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Inglés con Lau',
  description:
    'Learn English with confidence through interactive, accessible lessons designed for Spanish speakers.',
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
        <ThemeControls />

        {children}

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}