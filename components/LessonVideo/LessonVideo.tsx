'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LessonVideo.module.css';

type LessonVideoProps = {
  src: string;
  title: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00';

  const totalSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

export default function LessonVideo({ src, title }: LessonVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  }

  function handleSeek(value: string) {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Number(value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  function handleVolume(value: string) {
    const video = videoRef.current;
    if (!video) return;

    const nextVolume = Number(value);
    video.volume = nextVolume;
    video.muted = nextVolume === 0;

    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  async function toggleFullscreen() {
    const container = containerRef.current;
    if (!container) return;

    if (document.fullscreenElement === container) {
      await document.exitFullscreen();
      return;
    }

    await container.requestFullscreen();
  }

  return (
    <div className={styles.videoPlayer} ref={containerRef}>
      <video
        ref={videoRef}
        className={styles.video}
        onClick={togglePlayback}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.playButton}
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <span className={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <input
          className={styles.progress}
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={Math.min(currentTime, duration || 0)}
          onChange={(event) => handleSeek(event.target.value)}
          aria-label="Avance del video"
        />

        <button
          type="button"
          className={styles.iconButton}
          onClick={toggleMute}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
        >
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </button>

        <input
          className={styles.volume}
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={(event) => handleVolume(event.target.value)}
          aria-label="Volumen"
        />

        <button
          type="button"
          className={styles.iconButton}
          onClick={() => void toggleFullscreen()}
          aria-label={
            isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'
          }
        >
          {isFullscreen ? '⤡' : '⤢'}
        </button>
      </div>

      {!isPlaying && currentTime === 0 && (
        <button
          type="button"
          className={styles.centerPlayButton}
          onClick={togglePlayback}
          aria-label={`Reproducir ${title}`}
        >
          ▶
        </button>
      )}
    </div>
  );
}