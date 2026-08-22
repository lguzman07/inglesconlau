'use client';

import type { CSSProperties, DragEvent } from 'react';
import { useMemo, useState } from 'react';
import type {
  MontessoriExercise as MontessoriExerciseContent,
  MontessoriQuestion,
  MontessoriSymbol,
} from '@/content/lecciones/types';
import styles from './MontessoriExercise.module.css';

type MontessoriExerciseProps = {
  exercise?: MontessoriExerciseContent;
  title?: string;
  instructions?: string;
  questions?: MontessoriQuestion[];
};

type Answers = Record<number, Record<string, string>>;

type SelectedSymbol = {
  questionId: number;
  symbolId: string;
} | null;

const cardStyle: CSSProperties = {
  padding: '34px',
  background: 'var(--surface-solid)',
  border: '1px solid var(--border)',
  borderRadius: '18px',
  boxShadow: 'var(--shadow)',
};

const boardStyle: CSSProperties = {
  width: '100%',
  margin: '28px 0 26px',
  padding: '42px 32px',
  background: 'var(--surface-soft)',
  border: '1px solid var(--border)',
  borderRadius: '18px',
};

const wordGridStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '64px',
  flexWrap: 'wrap',
};

const wordColumnStyle: CSSProperties = {
  display: 'grid',
  minWidth: '90px',
  justifyItems: 'center',
  gap: '10px',
};

const wordTextStyle: CSSProperties = {
  color: 'var(--text)',
  fontSize: '1.35rem',
  fontWeight: 850,
  lineHeight: 1.1,
};

const translationStyle: CSSProperties = {
  color: 'var(--text-light)',
  fontSize: '0.94rem',
  lineHeight: 1.2,
};

const slotStyle: CSSProperties = {
  display: 'grid',
  width: '74px',
  height: '74px',
  placeItems: 'center',
  background: 'var(--surface-solid)',
  border: '2px dashed var(--border)',
  borderRadius: '14px',
  cursor: 'pointer',
};

const activeSlotStyle: CSSProperties = {
  borderColor: 'var(--primary)',
  boxShadow: '0 0 0 4px var(--primary-light)',
};

const correctSlotStyle: CSSProperties = {
  borderColor: '#14804a',
  background: 'rgb(20 128 74 / 10%)',
};

const incorrectSlotStyle: CSSProperties = {
  borderColor: '#b42318',
  background: 'rgb(180 35 24 / 10%)',
};

const emptyDotStyle: CSSProperties = {
  width: '16px',
  height: '16px',
  background: 'var(--border)',
  borderRadius: '50%',
};

const helperStyle: CSSProperties = {
  margin: '0 0 16px',
  color: 'var(--text)',
  fontSize: '1rem',
  fontWeight: 800,
  lineHeight: 1.5,
};

const symbolBankStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  flexWrap: 'wrap',
};

const symbolOptionStyle: CSSProperties = {
  display: 'inline-flex',
  minWidth: '136px',
  minHeight: '62px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '14px',
  padding: '12px 18px',
  color: 'var(--text)',
  font: 'inherit',
  fontSize: '1rem',
  fontWeight: 850,
  background: 'var(--surface-soft)',
  border: '1px solid var(--border)',
  borderRadius: '14px',
  cursor: 'grab',
};

const selectedSymbolStyle: CSSProperties = {
  borderColor: 'var(--primary)',
  boxShadow: '0 0 0 4px var(--primary-light)',
};

const actionsStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  flexWrap: 'wrap',
  marginTop: '32px',
};

const checkButtonStyle: CSSProperties = {
  display: 'inline-flex',
  minHeight: '58px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '14px 28px',
  color: '#fff',
  font: 'inherit',
  fontWeight: 850,
  lineHeight: 1,
  background: 'var(--primary)',
  border: '1px solid var(--primary)',
  borderRadius: '999px',
  cursor: 'pointer',
};

const disabledButtonStyle: CSSProperties = {
  cursor: 'not-allowed',
  opacity: 0.55,
};

const SYMBOL_COLORS: Record<string, string> = {
  red: '#d74b4b',
  black: '#30363a',
  blue: '#4169a8',
  'light-blue': '#77a9d4',
  purple: '#80599e',
  green: '#4f8c67',
  pink: '#c97891',
  orange: '#d98243',
  yellow: '#d6aa36',
};

function getWordId(
  word: MontessoriQuestion['words'][number],
  index: number,
) {
  return 'id' in word && typeof word.id === 'string'
    ? word.id
    : String(index);
}

function getCorrectPlacement(
  question: MontessoriQuestion,
  wordId: string,
  wordIndex: number,
) {
  const placements = question.correctPlacements as unknown;

  if (Array.isArray(placements)) {
    const placement = placements.find(
      (item) =>
        item &&
        typeof item === 'object' &&
        'wordId' in item &&
        item.wordId === wordId,
    );

    if (
      placement &&
      typeof placement === 'object' &&
      'symbolId' in placement &&
      typeof placement.symbolId === 'string'
    ) {
      return placement.symbolId;
    }

    const indexedPlacement = placements[wordIndex];

    if (typeof indexedPlacement === 'string') {
      return indexedPlacement;
    }

    return undefined;
  }

  if (placements && typeof placements === 'object') {
    const placementMap = placements as Record<string, string>;

    return placementMap[wordId] ?? placementMap[String(wordIndex)];
  }

  return undefined;
}

function questionIsComplete(
  question: MontessoriQuestion,
  answers: Record<string, string> | undefined,
) {
  return question.words.every((word, index) => {
    const wordId = getWordId(word, index);
    return Boolean(answers?.[wordId]);
  });
}

function questionIsCorrect(
  question: MontessoriQuestion,
  answers: Record<string, string> | undefined,
) {
  return question.words.every((word, index) => {
    const wordId = getWordId(word, index);

    return (
      answers?.[wordId] ===
      getCorrectPlacement(question, wordId, index)
    );
  });
}

function getSymbol(
  question: MontessoriQuestion,
  symbolId: string | undefined,
) {
  if (!symbolId) return null;

  return (
    question.symbols.find((symbol) => symbol.id === symbolId) ?? null
  );
}

function getSymbolLabel(symbol: MontessoriSymbol) {
  if (symbol.label) return symbol.label;

  return symbol.id.charAt(0).toUpperCase() + symbol.id.slice(1);
}

function getSymbolTooltip(symbol: MontessoriSymbol) {
  const label = getSymbolLabel(symbol).toLowerCase();

  if (label === 'noun') {
    return 'Sustantivo (nombre)';
  }

  if (label === 'verb') {
    return 'Verbo (acción)';
  }

  if (label === 'article') {
    return 'Artículo';
  }

  if (label === 'adjective') {
    return 'Adjetivo';
  }

  if (label === 'pronoun') {
    return 'Pronombre';
  }

  if (label === 'preposition') {
    return 'Preposición';
  }

  if (label === 'adverb') {
    return 'Adverbio';
  }

  if (label === 'conjunction') {
    return 'Conjunción';
  }

  if (label === 'interjection') {
    return 'Interjección';
  }

  return '';
}

function SymbolShape({
  symbol,
}: {
  symbol: MontessoriSymbol;
}) {
  const shape = String(symbol.shape);
  const color =
    SYMBOL_COLORS[symbol.color] ?? '#30363a';

  if (shape.includes('triangle')) {
    const isSmall = shape.includes('small');

    return (
      <span
        aria-hidden="true"
        style={{
          width: 0,
          height: 0,
          borderLeft: `${isSmall ? 13 : 19}px solid transparent`,
          borderRight: `${isSmall ? 13 : 19}px solid transparent`,
          borderBottom: `${isSmall ? 23 : 34}px solid ${color}`,
        }}
      />
    );
  }

  if (shape === 'bar') {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '38px',
          height: '10px',
          background: color,
          borderRadius: '999px',
        }}
      />
    );
  }

  if (shape === 'crescent') {
    return (
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          width: '38px',
          height: '38px',
          overflow: 'hidden',
          borderRadius: '50%',
          background: color,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '7px',
            left: '7px',
            width: '34px',
            height: '34px',
            background: 'var(--surface-solid)',
            borderRadius: '50%',
          }}
        />
      </span>
    );
  }

  if (shape === 'keyhole') {
    return (
      <span
        aria-hidden="true"
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '30px',
          height: '38px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 0,
            left: '5px',
            width: '20px',
            height: '20px',
            background: color,
            borderRadius: '50%',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: '9px',
            width: '12px',
            height: '23px',
            background: color,
            borderRadius: '3px',
          }}
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{
        width: shape.includes('small') ? '22px' : '38px',
        height: shape.includes('small') ? '22px' : '38px',
        background: color,
        borderRadius: '50%',
      }}
    />
  );
}

export default function MontessoriExercise({
  exercise,
  title,
  instructions,
  questions,
}: MontessoriExerciseProps) {
  const resolvedExercise = useMemo<MontessoriExerciseContent>(
    () => ({
      type: 'montessori',
      title: exercise?.title ?? title ?? 'Ordena con símbolos',
      instructions:
        exercise?.instructions ??
        instructions ??
        'Arrastra un símbolo o selecciónalo y luego toca el espacio correspondiente.',
      questions: exercise?.questions ?? questions ?? [],
    }),
    [exercise, instructions, questions, title],
  );

  const [answers, setAnswers] = useState<Answers>({});
  const [selectedSymbol, setSelectedSymbol] =
    useState<SelectedSymbol>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const correctAnswers = resolvedExercise.questions.filter((question) =>
    questionIsCorrect(question, answers[question.id]),
  ).length;

  const allQuestionsComplete =
    resolvedExercise.questions.length > 0 &&
    resolvedExercise.questions.every((question) =>
      questionIsComplete(question, answers[question.id]),
    );

  function placeSymbol(
    questionId: number,
    wordId: string,
    symbolId: string,
  ) {
    setAnswers((current) => ({
      ...current,
      [questionId]: {
        ...(current[questionId] ?? {}),
        [wordId]: symbolId,
      },
    }));

    setHasChecked(false);
    setSelectedSymbol(null);
  }

  function removeSymbol(
    questionId: number,
    wordId: string,
  ) {
    setAnswers((current) => {
      const nextQuestionAnswers = {
        ...(current[questionId] ?? {}),
      };

      delete nextQuestionAnswers[wordId];

      return {
        ...current,
        [questionId]: nextQuestionAnswers,
      };
    });

    setHasChecked(false);
  }

  function handleSymbolClick(
    questionId: number,
    symbolId: string,
  ) {
    setSelectedSymbol((current) =>
      current?.questionId === questionId &&
      current.symbolId === symbolId
        ? null
        : { questionId, symbolId },
    );
  }

  function handleDrop(
    event: DragEvent<HTMLButtonElement>,
    questionId: number,
    wordId: string,
  ) {
    event.preventDefault();

    const symbolId =
      event.dataTransfer.getData('text/plain');

    if (symbolId) {
      placeSymbol(
        questionId,
        wordId,
        symbolId,
      );
    }
  }

  function handleDropZoneClick(
    questionId: number,
    wordId: string,
  ) {
    if (
      !selectedSymbol ||
      selectedSymbol.questionId !== questionId
    ) {
      removeSymbol(questionId, wordId);
      return;
    }

    placeSymbol(
      questionId,
      wordId,
      selectedSymbol.symbolId,
    );
  }

  function checkExercise() {
    if (!allQuestionsComplete) {
      return;
    }

    setHasChecked(true);
  }

  return (
    <section
      className={styles.exercise}
      aria-labelledby="montessori-exercise-title"
    >
      <div className={styles.exerciseHeader}>
        <div>
          <span className={styles.exerciseType}>
            MONTESSORI
          </span>

          <h3 id="montessori-exercise-title">
            {resolvedExercise.title}
          </h3>

          <p>{resolvedExercise.instructions}</p>
        </div>

        <span className={styles.totalQuestions}>
          {resolvedExercise.questions.length} preguntas
        </span>
      </div>

      <div className={styles.questions}>
        {resolvedExercise.questions.map((question) => {
          const currentAnswers =
            answers[question.id] ?? {};

          const isCorrect =
            hasChecked &&
            questionIsCorrect(
              question,
              currentAnswers,
            );

          const isIncorrect =
            hasChecked && !isCorrect;

          return (
            <article
              className={styles.questionCard}
              style={cardStyle}
              key={question.id}
            >
              <p className={styles.questionLabel}>
                Ejercicio {question.id}
              </p>

              <div
                className={styles.montessoriBoard}
                style={boardStyle}
              >
                <div
                  className={styles.wordGrid}
                  style={wordGridStyle}
                >
                  {question.words.map(
                    (word, wordIndex) => {
                      const wordId = getWordId(
                        word,
                        wordIndex,
                      );

                      const correctPlacement =
                        getCorrectPlacement(
                          question,
                          wordId,
                          wordIndex,
                        );

                      const placedSymbol = getSymbol(
                        question,
                        currentAnswers[wordId],
                      );

                      return (
                        <div
                          className={styles.wordColumn}
                          style={wordColumnStyle}
                          key={wordId}
                        >
                          <strong
                            className={styles.wordText}
                            style={wordTextStyle}
                          >
                            {word.word}
                          </strong>

                          <button
                            type="button"
                            className={
                              styles.symbolSlot
                            }
                            style={{
                              ...slotStyle,

                              ...(placedSymbol
                                ? activeSlotStyle
                                : {}),

                              ...(selectedSymbol?.questionId ===
                              question.id
                                ? activeSlotStyle
                                : {}),

                              ...(hasChecked &&
                              currentAnswers[wordId] ===
                                correctPlacement
                                ? correctSlotStyle
                                : {}),

                              ...(hasChecked &&
                              currentAnswers[wordId] !==
                                correctPlacement
                                ? incorrectSlotStyle
                                : {}),
                            }}
                            onClick={() =>
                              handleDropZoneClick(
                                question.id,
                                wordId,
                              )
                            }
                            onDragOver={(event) =>
                              event.preventDefault()
                            }
                            onDrop={(event) =>
                              handleDrop(
                                event,
                                question.id,
                                wordId,
                              )
                            }
                            aria-label={`Colocar símbolo en ${word.word}`}
                          >
                            {placedSymbol ? (
                              <SymbolShape
                                symbol={placedSymbol}
                              />
                            ) : (
                              <span
                                style={emptyDotStyle}
                              />
                            )}
                          </button>

                          <span
                            className={
                              styles.translation
                            }
                            style={translationStyle}
                          >
                            {word.translation}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              <p
                className={styles.helperText}
                style={helperStyle}
              >
                Arrastra un símbolo o selecciónalo y luego toca el
                espacio correspondiente.
              </p>

              <div
                className={styles.symbolBank}
                style={symbolBankStyle}
              >
                {question.symbols.map((symbol) => {
                  const isSelected =
                    selectedSymbol?.questionId ===
                      question.id &&
                    selectedSymbol.symbolId ===
                      symbol.id;

                  const tooltip =
                    getSymbolTooltip(symbol);

                  return (
                    <button
                      type="button"
                      className={
                        styles.symbolOption
                      }
                      style={{
                        ...symbolOptionStyle,

                        ...(isSelected
                          ? selectedSymbolStyle
                          : {}),
                      }}
                      key={symbol.id}
                      draggable
                      onClick={() =>
                        handleSymbolClick(
                          question.id,
                          symbol.id,
                        )
                      }
                      onDragStart={(event) => {
                        event.dataTransfer.setData(
                          'text/plain',
                          symbol.id,
                        );
                      }}
                    >
                      <SymbolShape
                        symbol={symbol}
                      />

                      <span
                        className={
                          styles.symbolText
                        }
                      >
                        {getSymbolLabel(symbol)}

                        {tooltip ? (
                          <span
                            className={
                              styles.symbolTooltip
                            }
                          >
                            {tooltip}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              {isCorrect && (
                <div
                  className={
                    styles.correctFeedback
                  }
                  role="status"
                >
                  <strong>
                    ¡Muy bien!
                  </strong>

                  <p>
                    {question.sentenceTranslation}
                  </p>
                </div>
              )}

              {isIncorrect && (
                <div
                  className={
                    styles.incorrectFeedback
                  }
                  role="status"
                >
                  <strong>
                    Revisa los símbolos.
                  </strong>

                  <p>
                    Hay una o más palabras con el símbolo
                    incorrecto.
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div
        className={styles.actions}
        style={actionsStyle}
      >
        <button
          type="button"
          className={styles.checkButton}
          style={{
            ...checkButtonStyle,

            ...(!allQuestionsComplete
              ? disabledButtonStyle
              : {}),
          }}
          disabled={!allQuestionsComplete}
          onClick={checkExercise}
        >
          Corregir ejercicio
        </button>
      </div>

      {hasChecked && (
        <div
          className={styles.resultCard}
          aria-live="polite"
        >
          <p className={styles.resultLabel}>
            TU RESULTADO
          </p>

          <h4>
            {correctAnswers} de{' '}
            {resolvedExercise.questions.length}{' '}
            correctas
          </h4>

          <p>
            {correctAnswers ===
            resolvedExercise.questions.length
              ? 'Dominaste los símbolos de esta práctica.'
              : 'Puedes revisar las preguntas y volver a intentarlo.'}
          </p>
        </div>
      )}
    </section>
  );
}