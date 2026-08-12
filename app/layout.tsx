import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
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
    const savedMode = localStorage.getItem('display-mode');
    const validModes = ['normal', 'dark', 'contrast'];

    document.documentElement.dataset.theme =
      validModes.includes(savedMode) ? savedMode : 'normal';
  } catch {
    document.documentElement.dataset.theme = 'normal';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="normal" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />
      </head>

      <body
        className={lexend.className}
        style={{ fontFamily: lexend.style.fontFamily }}
      >
        <ThemeControls />

        {children}

        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}