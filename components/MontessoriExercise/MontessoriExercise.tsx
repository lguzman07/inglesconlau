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

const SYMBOL_COLOR = '#d84b4c';

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
  gap: '18px',
  flexWrap: 'wrap',
  marginTop: '32px',
};

const checkButtonStyle: CSSProperties = {
  display: 'inline-flex',
  width: '192px',
  height: '72px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 28px',
  color: '#fff',
  font: 'inherit',
  fontWeight: 850,
  lineHeight: 1,
  background: '#d84b4c',
  border: '1px solid #d84b4c',
  borderRadius: '999px',
  cursor: 'pointer',
};

const retryButtonStyle: CSSProperties = {
  display: 'inline-flex',
  width: '192px',
  height: '72px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 28px',
  color: '#d84b4c',
  font: 'inherit',
  fontWeight: 850,
  lineHeight: 1,
  background: 'var(--surface-solid)',
  border: '1px solid #d84b4c',
  borderRadius: '999px',
  cursor: 'pointer',
};

const disabledButtonStyle: CSSProperties = {
  cursor: 'not-allowed',
  opacity: 0.55,
};

function getWordId(word: MontessoriQuestion['words'][number], index: number) {
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
    return typeof placements[wordIndex] === 'string'
      ? placements[wordIndex]
      : undefined;
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
      answers?.[wordId] === getCorrectPlacement(question, wordId, index)
    );
  });
}

function getSymbol(
  question: MontessoriQuestion,
  symbolId: string | undefined,
) {
  if (!symbolId) return null;

  return question.symbols.find((symbol) => symbol.id === symbolId) ?? null;
}

function getSymbolLabel(symbol: MontessoriSymbol) {
  if (symbol.label) return symbol.label;

  return symbol.id.charAt(0).toUpperCase() + symbol.id.slice(1);
}

function SymbolShape({ symbol }: { symbol: MontessoriSymbol }) {
  const shape = String(symbol.shape);

  if (shape.includes('triangle')) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: 0,
          height: 0,
          borderLeft: '18px solid transparent',
          borderRight: '18px solid transparent',
          borderBottom: `34px solid ${SYMBOL_COLOR}`,
        }}
      />
    );
  }

  if (shape.includes('rectangle')) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '42px',
          height: '24px',
          background: SYMBOL_COLOR,
          borderRadius: '7px',
        }}
      />
    );
  }

  if (shape.includes('square')) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '34px',
          height: '34px',
          background: SYMBOL_COLOR,
          borderRadius: '7px',
        }}
      />
    );
  }

  if (shape.includes('diamond')) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: '32px',
          height: '32px',
          background: SYMBOL_COLOR,
          borderRadius: '6px',
          transform: 'rotate(45deg)',
        }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{
        width: shape.includes('small') ? '18px' : '38px',
        height: shape.includes('small') ? '18px' : '38px',
        background: SYMBOL_COLOR,
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

  function removeSymbol(questionId: number, wordId: string) {
    setAnswers((current) => {
      const nextQuestionAnswers = { ...(current[questionId] ?? {}) };
      delete nextQuestionAnswers[wordId];

      return {
        ...current,
        [questionId]: nextQuestionAnswers,
      };
    });

    setHasChecked(false);
  }

  function handleSymbolClick(questionId: number, symbolId: string) {
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

    const symbolId = event.dataTransfer.getData('text/plain');

    if (symbolId) {
      placeSymbol(questionId, wordId, symbolId);
    }
  }

  function handleDropZoneClick(questionId: number, wordId: string) {
    if (!selectedSymbol || selectedSymbol.questionId !== questionId) {
      removeSymbol(questionId, wordId);
      return;
    }

    placeSymbol(questionId, wordId, selectedSymbol.symbolId);
  }

  function checkExercise() {
    if (!allQuestionsComplete) return;

    setHasChecked(true);
  }

  function resetExercise() {
    setAnswers({});
    setSelectedSymbol(null);
    setHasChecked(false);
  }

  return (
    <section
      className={styles.exercise}
      aria-labelledby="montessori-exercise-title"
    >
      <div className={styles.exerciseHeader}>
        <div>
          <span className={styles.exerciseType}>MONTESSORI</span>
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
          const currentAnswers = answers[question.id] ?? {};
          const isCorrect =
            hasChecked && questionIsCorrect(question, currentAnswers);
          const isIncorrect = hasChecked && !isCorrect;

          return (
            <article
              className={styles.questionCard}
              style={cardStyle}
              key={question.id}
            >
              <p className={styles.questionLabel}>
                Ejercicio {question.id}
              </p>

              <div className={styles.montessoriBoard} style={boardStyle}>
                <div className={styles.wordGrid} style={wordGridStyle}>
                  {question.words.map((word, wordIndex) => {
                    const wordId = getWordId(word, wordIndex);
                    const correctPlacement = getCorrectPlacement(
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
                          className={styles.symbolSlot}
                          style={{
                            ...slotStyle,
                            ...(placedSymbol ? activeSlotStyle : {}),
                            ...(selectedSymbol?.questionId === question.id
                              ? activeSlotStyle
                              : {}),
                            ...(hasChecked &&
                            currentAnswers[wordId] === correctPlacement
                              ? correctSlotStyle
                              : {}),
                            ...(hasChecked &&
                            currentAnswers[wordId] !== correctPlacement
                              ? incorrectSlotStyle
                              : {}),
                          }}
                          onClick={() =>
                            handleDropZoneClick(question.id, wordId)
                          }
                          onDragOver={(event) => event.preventDefault()}
                          onDrop={(event) =>
                            handleDrop(event, question.id, wordId)
                          }
                          aria-label={`Colocar símbolo en ${word.word}`}
                        >
                          {placedSymbol ? (
                            <SymbolShape symbol={placedSymbol} />
                          ) : (
                            <span style={emptyDotStyle} />
                          )}
                        </button>

                        <span
                          className={styles.translation}
                          style={translationStyle}
                        >
                          {word.translation}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className={styles.helperText} style={helperStyle}>
                Arrastra un símbolo o selecciónalo y luego toca el espacio
                correspondiente.
              </p>

              <div className={styles.symbolBank} style={symbolBankStyle}>
                {question.symbols.map((symbol) => {
                  const isSelected =
                    selectedSymbol?.questionId === question.id &&
                    selectedSymbol.symbolId === symbol.id;

                  return (
                    <button
                      type="button"
                      className={styles.symbolOption}
                      style={{
                        ...symbolOptionStyle,
                        ...(isSelected ? selectedSymbolStyle : {}),
                      }}
                      key={symbol.id}
                      draggable
                      onClick={() =>
                        handleSymbolClick(question.id, symbol.id)
                      }
                      onDragStart={(event) => {
                        event.dataTransfer.setData(
                          'text/plain',
                          symbol.id,
                        );
                      }}
                    >
                      <SymbolShape symbol={symbol} />
                      <span>{getSymbolLabel(symbol)}</span>
                    </button>
                  );
                })}
              </div>

              {isCorrect && (
                <div className={styles.correctFeedback} role="status">
                  <strong>¡Muy bien!</strong>
                  <p>{question.sentenceTranslation}</p>
                </div>
              )}

              {isIncorrect && (
                <div className={styles.incorrectFeedback} role="status">
                  <strong>Revisa los símbolos.</strong>
                  <p>Hay una o más palabras con el símbolo incorrecto.</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className={styles.actions} style={actionsStyle}>
        <button
          type="button"
          className={styles.checkButton}
          style={{
            ...checkButtonStyle,
            ...(!allQuestionsComplete ? disabledButtonStyle : {}),
          }}
          disabled={!allQuestionsComplete}
          onClick={checkExercise}
        >
          Corregir
        </button>

        <button
          type="button"
          className={styles.retryButton}
          style={retryButtonStyle}
          onClick={resetExercise}
        >
          Reintentar
        </button>
      </div>

      {hasChecked && (
        <div className={styles.resultCard} aria-live="polite">
          <p className={styles.resultLabel}>TU RESULTADO</p>
          <h4>
            {correctAnswers} de {resolvedExercise.questions.length} correctas
          </h4>
          <p>
            {correctAnswers === resolvedExercise.questions.length
              ? 'Dominaste los símbolos de esta práctica.'
              : 'Puedes revisar las preguntas y volver a intentarlo.'}
          </p>
        </div>
      )}
    </section>
  );
}