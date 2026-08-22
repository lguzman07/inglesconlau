'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.css';
import { getAudio, saveAudio } from '@/lib/audio/audioCache';

type AudioPlayerProps = {
  text: string;
  language: 'en' | 'en-GB' | 'es';
  mode?: 'normal' | 'letterName';
};

function getTtsText(
  text: string,
  mode: AudioPlayerProps['mode'],
) {
  if (mode !== 'letterName') {
    return text;
  }

  const normalized = text.trim().toUpperCase();

  const letterNames: Record<string, string> = {
    A: 'letter A',
    H: 'letter H',
    J: 'letter J',
    K: 'letter K',
  };

  return letterNames[normalized] ?? text;
}

export default function AudioPlayer({
  text,
  language,
  mode = 'normal',
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);

  const ttsText = getTtsText(text, mode);

  function clearAudio() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
      audioRef.current = null;
    }

    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }

    setIsPlaying(false);
    setProgress(0);
    setHasPlayed(false);
  }

  useEffect(() => {
    clearAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
        audioRef.current = null;
      }

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
        audioUrlRef.current = null;
      }
    };
  }, [ttsText, language]);

  const prepareAudio = async () => {
    if (audioRef.current) {
      return audioRef.current;
    }

    setIsLoading(true);

    try {
      let blob = await getAudio(ttsText, language);

      if (!blob) {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: ttsText,
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
            `Failed to generate audio: ${response.status} ${response.statusText}`,
          );
        }

        blob = await response.blob();

        await saveAudio(
          ttsText,
          language,
          blob,
        );
      }

      const url = URL.createObjectURL(blob);

      audioUrlRef.current = url;

      const audio = new Audio(url);

      audio.preload = 'auto';

      audio.ontimeupdate = () => {
        if (!audio.duration) {
          return;
        }

        setProgress(
          (audio.currentTime / audio.duration) * 100,
        );
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

      audio.onerror = () => {
        setIsPlaying(false);

        console.error(
          'Audio playback failed:',
          {
            text: ttsText,
            language,
          },
        );
      };

      audioRef.current = audio;

      return audio;
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (isLoading) {
      return;
    }

    try {
      const audio =
        await prepareAudio();

      if (!audio) {
        return;
      }

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
    } catch (error) {
      console.error(
        'AudioPlayer error:',
        error,
      );

      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      className={styles.audioPlayer}
      onClick={handleClick}
      aria-label={
        isPlaying
          ? 'Pausar audio'
          : hasPlayed
            ? 'Repetir audio'
            : 'Reproducir audio'
      }
    >
      {isLoading ? (
        <span className={styles.icon}>
          ⏳
        </span>
      ) : hasPlayed ? (
        <span className={styles.icon}>
          ↻
        </span>
      ) : isPlaying ? (
        <span className={styles.icon}>
          ❚❚
        </span>
      ) : (
        <span className={styles.icon}>
          ▶
        </span>
      )}

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </button>
  );
}