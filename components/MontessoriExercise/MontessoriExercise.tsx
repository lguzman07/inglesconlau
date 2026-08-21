'use client';

import { useState } from 'react';
import type {
  MontessoriExercise as MontessoriExerciseType,
  MontessoriQuestion,
  MontessoriSymbol,
} from '@/content/lecciones/types';
import styles from './MontessoriExercise.module.css';

type Props = {
  exercise: MontessoriExerciseType;
};

type Answers = Record<
  number,
  Record<string, string>
>;

function SymbolShape({
  symbol,
}: {
  symbol: MontessoriSymbol;
}) {
  return (
    <span
      className={`${styles.symbolShape} ${
        styles[symbol.shape]
      } ${styles[symbol.color]}`}
      aria-hidden="true"
    />
  );
}

function MontessoriQuestionCard({
  question,
  questionNumber,
}: {
  question: MontessoriQuestion;
  questionNumber: number;
}) {
  const [answers, setAnswers] =
    useState<Answers>({});

  const [selectedSymbol, setSelectedSymbol] =
    useState<string | null>(null);

  const [checked, setChecked] =
    useState(false);

  const questionAnswers =
    answers[question.id] ?? {};

  function selectSymbol(symbolId: string) {
    setSelectedSymbol(symbolId);
    setChecked(false);
  }

  function placeSymbol(wordId: string) {
    if (!selectedSymbol) {
      return;
    }

    setAnswers((current) => ({
      ...current,
      [question.id]: {
        ...(current[question.id] ?? {}),
        [wordId]: selectedSymbol,
      },
    }));

    setSelectedSymbol(null);
    setChecked(false);
  }

  function removeSymbol(wordId: string) {
    setAnswers((current) => {
      const currentQuestion = {
        ...(current[question.id] ?? {}),
      };

      delete currentQuestion[wordId];

      return {
        ...current,
        [question.id]: currentQuestion,
      };
    });

    setChecked(false);
  }

  function getSymbol(symbolId?: string) {
    if (!symbolId) {
      return undefined;
    }

    return question.symbols.find(
      (symbol) => symbol.id === symbolId,
    );
  }

  function isCorrect(
    wordId: string,
    symbolId?: string,
  ) {
    const correctPlacement =
      question.correctPlacements.find(
        (placement) =>
          placement.wordId === wordId,
      );

    return (
      correctPlacement?.symbolId === symbolId
    );
  }

  const allAnswered =
    question.words.every(
      (word) => questionAnswers[word.id],
    );

  const allCorrect =
    question.words.every((word) =>
      isCorrect(
        word.id,
        questionAnswers[word.id],
      ),
    );

  return (
    <article className={styles.questionCard}>
      <p className={styles.questionNumber}>
        EJERCICIO {questionNumber}
      </p>

      <div className={styles.sentence}>
        {question.words.map((word) => {
          const placedSymbol = getSymbol(
            questionAnswers[word.id],
          );

          const correct =
            checked &&
            isCorrect(
              word.id,
              questionAnswers[word.id],
            );

          const incorrect =
            checked &&
            !isCorrect(
              word.id,
              questionAnswers[word.id],
            );

          return (
            <div
              key={word.id}
              className={styles.wordColumn}
            >
              <span className={styles.word}>
                {word.word}
              </span>

              <button
                type="button"
                className={`${styles.dropZone} ${
                  correct
                    ? styles.correct
                    : ''
                } ${
                  incorrect
                    ? styles.incorrect
                    : ''
                }`}
                onClick={() => {
                  if (placedSymbol) {
                    removeSymbol(word.id);
                    return;
                  }

                  placeSymbol(word.id);
                }}
                aria-label={
                  placedSymbol
                    ? `Quitar símbolo de ${word.word}`
                    : `Colocar símbolo debajo de ${word.word}`
                }
              >
                {placedSymbol ? (
                  <SymbolShape
                    symbol={placedSymbol}
                  />
                ) : (
                  <span
                    className={
                      styles.emptyDropZone
                    }
                    aria-hidden="true"
                  />
                )}
              </button>

              <span
                className={
                  styles.translation
                }
              >
                {word.translation}
              </span>
            </div>
          );
        })}
      </div>

      <div className={styles.symbolSection}>
        <p className={styles.symbolLabel}>
          Selecciona un símbolo
        </p>

        <div className={styles.symbolOptions}>
          {question.symbols.map((symbol) => {
            const selected =
              selectedSymbol === symbol.id;

            return (
              <button
                key={symbol.id}
                type="button"
                className={`${styles.symbolButton} ${
                  selected
                    ? styles.selectedSymbol
                    : ''
                }`}
                onClick={() =>
                  selectSymbol(symbol.id)
                }
                aria-pressed={selected}
              >
                <SymbolShape
                  symbol={symbol}
                />

                <span>
                  {symbol.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className={styles.checkButton}
        disabled={!allAnswered}
        onClick={() => setChecked(true)}
      >
        Corregir
      </button>

      {checked && (
        <div
          className={`${styles.feedback} ${
            allCorrect
              ? styles.feedbackCorrect
              : styles.feedbackIncorrect
          }`}
        >
          <strong>
            {allCorrect
              ? '¡Muy bien!'
              : 'Revisa los símbolos.'}
          </strong>

          <span>
            {allCorrect
              ? question.sentenceTranslation
              : 'Puedes cambiar los símbolos y volver a intentarlo.'}
          </span>
        </div>
      )}
    </article>
  );
}

export default function MontessoriExercise({
  exercise,
}: Props) {
  return (
    <section className={styles.exercise}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>
          MONTESSORI
        </p>

        <h2>{exercise.title}</h2>

        <p>{exercise.instructions}</p>
      </div>

      <div className={styles.questions}>
        {exercise.questions.map(
          (question, index) => (
            <MontessoriQuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
            />
          ),
        )}
      </div>
    </section>
  );
}