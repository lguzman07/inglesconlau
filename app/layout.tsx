import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Inglés con Lau',
  description:
    'Learn English with confidence through interactive, accessible lessons designed for Spanish speakers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}