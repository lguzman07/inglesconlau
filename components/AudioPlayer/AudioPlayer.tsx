'use client';

import { useRef, useState } from 'react';

type AudioPlayerProps = {
  text: string;
  language: string;
};

export default function AudioPlayer({ text, language }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    try {
      // If the audio already exists, play it again
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        setIsPlaying(true);
        return;
      }

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
        throw new Error('Failed to generate audio.');
      }

      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const audio = new Audio(url);

      audio.onended = () => {
        setIsPlaying(false);
      };

      audioRef.current = audio;

      await audio.play();

      setIsPlaying(true);
    } catch (error) {
      console.error(error);
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={() => {
        if (!audioRef.current) {
          playAudio();
          return;
        }

        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }}
    >
      {isPlaying ? '❚❚' : '▶'}
    </button>
  );
}
