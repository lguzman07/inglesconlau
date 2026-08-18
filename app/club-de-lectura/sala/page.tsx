'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function SalaDelClubPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('sessionId');

  const [roomUrl, setRoomUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRoom() {
      if (!sessionId) {
        setError('No encontramos la sesión del club.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/club-room?sessionId=${encodeURIComponent(sessionId)}`
        );
        const data = await response.json();

        if (!response.ok) {
          setError(data.error ?? 'No pudimos abrir la sala.');
          setIsLoading(false);
          return;
        }

        setRoomUrl(data.roomUrl);
      } catch {
        setError('No pudimos abrir la sala. Inténtalo de nuevo.');
      } finally {
        setIsLoading(false);
      }
    }

    void loadRoom();
  }, [sessionId]);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Link href="/club-de-lectura" className={styles.backLink}>
          ← Volver al Club de lectura
        </Link>

        {isLoading ? (
          <section className={styles.card}>
            <p className={styles.eyebrow}>CLUB DE LECTURA</p>
            <h1 className={styles.title}>Abriendo la sala...</h1>
          </section>
        ) : error ? (
          <section className={styles.card}>
            <p className={styles.eyebrow}>CLUB DE LECTURA</p>
            <h1 className={styles.title}>Aún no puedes entrar</h1>
            <p className={styles.text}>{error}</p>
          </section>
        ) : (
          <section className={styles.roomCard}>
            <iframe
              className={styles.room}
              src={roomUrl}
              title="Sala del Club de lectura"
              allow="camera; microphone; fullscreen; display-capture; autoplay"
            />
          </section>
        )}
      </div>
    </main>
  );
}