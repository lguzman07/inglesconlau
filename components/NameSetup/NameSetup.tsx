'use client';

import { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import styles from './NameSetup.module.css';

export default function NameSetup() {
  const [name, setName] = useState('');
  const [audioText, setAudioText] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('student-name');
    const savedAudioText = localStorage.getItem('student-audio');

    if (savedName) setName(savedName);
    if (savedAudioText) setAudioText(savedAudioText);
  }, []);

  const trimmedName = name.trim();
  const normalizedName = trimmedName.toLowerCase();

  const hasAudio = audioText !== '';
  const audioIsOutdated =
    hasAudio && normalizedName !== audioText.trim().toLowerCase();

  const showGenerateButton = !hasAudio || audioIsOutdated;

  const handleGenerate = () => {
    if (!trimmedName) return;

    if (normalizedName !== audioText.trim().toLowerCase()) {
      setAudioText(trimmedName);
      localStorage.setItem('student-name', trimmedName);
      localStorage.setItem('student-audio', trimmedName);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>👨 Tú</p>

      <div className={styles.row}>
        <span className={styles.text}>My name is</span>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="..."
          className={styles.input}
        />

        <span className={styles.text}>.</span>

        {showGenerateButton ? (
          <button
            onClick={handleGenerate}
            disabled={!trimmedName}
            className={styles.button}
          >
            {hasAudio
              ? '🔄 Actualizar pronunciación'
              : '🔊 Generar pronunciación'}
          </button>
        ) : (
          <AudioPlayer
            key={audioText}
            text={`My name is ${audioText}.`}
            language="en"
          />
        )}
      </div>

      <p className={styles.translation}>
        🇪🇸 Me llamo {trimmedName || '______'}.
      </p>
    </div>
  );
}