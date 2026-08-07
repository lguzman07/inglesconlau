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
    if (audioRef.current) return audioRef.current;

    setIsLoading(true);

    try {
      let blob = await getAudio(text);

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
    <button className={styles.audioPlayer} onClick={handleClick}>
      {isLoading ? (
        <span className={styles.icon}>⏳</span>
      ) : hasPlayed ? (
        <span className={styles.icon}>↻</span>
      ) : isPlaying ? (
        <span className={styles.icon}>❚❚</span>
      ) : (
        <span className={styles.icon}>▶</span>
      )}

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </button>
  );
}