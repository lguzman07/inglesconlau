'use client';

import { useEffect, useRef, useState } from 'react';

import { getAudio, saveAudio } from '@/lib/audio/audioCache';

import type { DialogueExercise as DialogueExerciseContent } from '@/content/lecciones/types';

import styles from './DialogueExercise.module.css';

type DialogueExerciseProps = {
  exercise: DialogueExerciseContent;
};

export default function DialogueExercise({
  exercise,
}: DialogueExerciseProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const stopRequestedRef = useRef(false);

  useEffect(() => {
    return () => {
      stopRequestedRef.current = true;

      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  async function fetchLineAudio(text: string) {
    let blob = await getAudio(text, 'en');

    if (!blob) {
      const response = await fetch('/api/tts', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          text,
          language: 'en',
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to generate audio: ${response.status}`,
        );
      }

      blob = await response.blob();

      await saveAudio(text, 'en', blob);
    }

    return blob;
  }

  function stopPlayback() {
    stopRequestedRef.current = true;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }

    setIsPlaying(false);
    setIsLoading(false);
    setActiveIndex(null);
  }

  async function playDialogue() {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    stopRequestedRef.current = false;
    setIsPlaying(true);
    setIsLoading(true);

    try {
      for (
        let index = 0;
        index < exercise.lines.length;
        index += 1
      ) {
        if (stopRequestedRef.current) {
          break;
        }

        const line = exercise.lines[index];

        setActiveIndex(index);

        const blob = await fetchLineAudio(
          line.english,
        );

        if (stopRequestedRef.current) {
          break;
        }

        const url = URL.createObjectURL(blob);

        audioUrlRef.current = url;

        const audio = new Audio(url);

        audioRef.current = audio;

        setIsLoading(false);

        await new Promise<void>((resolve) => {
          audio.onended = () => resolve();
          audio.onerror = () => resolve();

          audio
            .play()
            .catch(() => resolve());
        });

        URL.revokeObjectURL(url);
        audioUrlRef.current = null;
      }
    } finally {
      setIsLoading(false);
      setIsPlaying(false);
      setActiveIndex(null);
      audioRef.current = null;
    }
  }

  return (
    <section
      className={styles.exercise}
      aria-labelledby="dialogue-title"
    >
      <div className={styles.exerciseHeader}>
        <div>
          <span className={styles.exerciseType}>
            DIÁLOGO
          </span>

          <h3 id="dialogue-title">
            {exercise.title}
          </h3>

          <p>{exercise.instructions}</p>
        </div>

        <button
          type="button"
          className={styles.playButton}
          onClick={playDialogue}
        >
          {isLoading
            ? 'Cargando…'
            : isPlaying
              ? '⏸ Detener'
              : '▶ Reproducir diálogo'}
        </button>
      </div>

      <div className={styles.lines}>
        {exercise.lines.map((line, index) => (
          <div
            key={line.id}
            className={[
              styles.line,
              index % 2 === 0
                ? styles.lineEven
                : styles.lineOdd,
              activeIndex === index
                ? styles.activeLine
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span className={styles.speakerAvatar}>
              {line.speaker
                .slice(0, 1)
                .toUpperCase()}
            </span>

            <div className={styles.lineContent}>
              <p className={styles.speakerName}>
                {line.speaker}
              </p>

              <p className={styles.english}>
                {line.english}
              </p>

              <p className={styles.spanish}>
                {line.spanish}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
