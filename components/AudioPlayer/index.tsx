'use client';

import { useRef, useState } from 'react';
import styles from './AudioPlayer.module.css';
import { getAudio, saveAudio } from '@/lib/audio/audioCache';

type AudioPlayerProps = {
  text: string;
  language: string;
};

export default function AudioPlayer({ text, language }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);

  const prepareAudio = async () => {
    // Si ya existe el audio en memoria, no hacemos nada
    if (audioRef.current) return audioRef.current;

    setIsLoading(true);

    try {
      let blob = await getAudio(text);

      // Si no está en caché, lo pedimos a la API
      if (!blob) {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text,
            language,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();

          console.error('Audio API error:', {
            status: response.status,
            statusText: response.statusText,
            body: errorText,
          });

          throw new Error(
            `Failed to generate audio: ${response.status} ${response.statusText}`
          );
        }

        blob = await response.blob();

        // Guardar para futuras reproducciones
        await saveAudio(text, blob);
      }

      const url = URL.createObjectURL(blob);

      const audio = new Audio(url);

      audio.ontimeupdate = () => {
        if (!audio.duration) return;

        setProgress((audio.currentTime / audio.duration) * 100);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setHasPlayed(true);
        setProgress(100);
      };

      audio.onpause = () => {
        if (!audio.ended) {
          setIsPlaying(false);
        }
      };

      audio.onplay = () => {
        setIsPlaying(true);
      };

      audioRef.current = audio;

      return audio;
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (isLoading) return;

    const audio = await prepareAudio();

    if (!audio) return;

    if (hasPlayed) {
      audio.currentTime = 0;
      setProgress(0);
      setHasPlayed(false);
      await audio.play();
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      await audio.play();
    }
  };

  return (
    <button type="button" className={styles.audioPlayer} onClick={handleClick}>
      <div className={styles.icon}>
        {isLoading ? (
          <svg viewBox="0 0 24 24" width="22" height="22">
            <circle
              cx="12"
              cy="12"
              r="9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="40"
              strokeDashoffset="12"
            />
          </svg>
        ) : hasPlayed ? (
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              d="M4 12a8 8 0 1 0 2.3-5.7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 4v5h5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : isPlaying ? (
          <svg viewBox="0 0 24 24" width="22" height="22">
            <rect
              x="6"
              y="5"
              width="4"
              height="14"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="14"
              y="5"
              width="4"
              height="14"
              rx="1"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        )}
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </button>
  );
}
