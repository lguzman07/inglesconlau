'use client';

import { useState } from 'react';

import styles from './HeroDemo.module.css';

type Option = {
  word: string;
  isCorrect: boolean;
};

const OPTIONS: Option[] = [
  { word: 'am', isCorrect: true },
  { word: 'is', isCorrect: false },
  { word: 'are', isCorrect: false },
];

export default function HeroDemo() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSelect(option: Option) {
    setSelected(option.word);
    setIsCorrect(option.isCorrect);
  }

  return (
    <div className={styles.demo}>
      <p className={styles.eyebrow}>PRUÉBALO TÚ MISMO</p>

      <p className={styles.sentence}>
        <span>I</span>{' '}
        <span
          className={`${styles.blank} ${
            selected
              ? isCorrect
                ? styles.blankCorrect
                : styles.blankIncorrect
              : ''
          }`}
        >
          {selected ?? '___'}
        </span>{' '}
        <span>a teacher.</span>
      </p>

      <div className={styles.options}>
        {OPTIONS.map((option) => (
          <button
            key={option.word}
            type="button"
            className={`${styles.option} ${
              selected === option.word
                ? option.isCorrect
                  ? styles.optionCorrect
                  : styles.optionIncorrect
                : ''
            }`}
            onClick={() => handleSelect(option)}
          >
            {option.word}
          </button>
        ))}
      </div>

      <p
        className={`${styles.feedback} ${selected ? styles.feedbackVisible : ''}`}
        role="status"
      >
        {isCorrect
          ? '¡Correcto! Así de claras son nuestras lecciones.'
          : selected
            ? 'Casi. Con "I" siempre usamos am. Intenta de nuevo.'
            : ''}
      </p>
    </div>
  );
}
