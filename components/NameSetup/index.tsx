'use client';

import { useEffect, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';

export default function NameSetup() {
  const [name, setName] = useState('');
  const [audioText, setAudioText] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('student-name');
    const savedAudioText = localStorage.getItem('student-audio');

    if (savedName) {
      setName(savedName);
    }

    if (savedAudioText) {
      setAudioText(savedAudioText);
    }
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
    <div
      style={{
        background: '#F8F9FB',
        borderRadius: '18px',
        padding: '1.2rem',
        marginBottom: '1.8rem',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#5A8DEE',
          fontWeight: 700,
          fontSize: '.9rem',
          marginBottom: '.9rem',
        }}
      >
        👨 Tú
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#2f3437',
          }}
        >
          My name is
        </span>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="..."
          style={{
            border: 'none',
            borderBottom: '2px solid #8db596',
            background: 'transparent',
            outline: 'none',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#2f3437',
            width: '140px',
            padding: '2px 4px',
          }}
        />

        <span
          style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#2f3437',
          }}
        >
          .
        </span>

        {showGenerateButton ? (
          <button
            onClick={handleGenerate}
            disabled={!trimmedName}
            style={{
              background: '#D98BB5',
              color: '#fff',
              border: 'none',
              borderRadius: '999px',
              padding: '.55rem 1rem',
              fontWeight: 700,
              fontSize: '.9rem',
              cursor: trimmedName ? 'pointer' : 'not-allowed',
              opacity: trimmedName ? 1 : 0.5,
              transition: '.2s',
              whiteSpace: 'nowrap',
            }}
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

      <p
        style={{
          marginTop: '.9rem',
          marginBottom: 0,
          color: '#6b7280',
        }}
      >
        🇪🇸 Me llamo {trimmedName || '______'}.
      </p>
    </div>
  );
}
