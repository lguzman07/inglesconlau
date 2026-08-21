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

function questionIsComplete(
  question: MontessoriQuestion,
  answers: Record<string, string> | undefined,
) {
  return question.words.every((word) => answers?.[word.id]);
}

function questionIsCorrect(
  question: MontessoriQuestion,
  answers: Record<string, string> | undefined,
) {
  return question.words.every(
    (word) => answers?.[word.id] === question.correctPlacements[word.id],
  );
}

function getSymbol(
  question: MontessoriQuestion,
  symbolId: string | undefined,
) {
  if (!symbolId) return null;

  return question.symbols.find((symbol) => symbol.id === symbolId) ?? null;
}

function SymbolShape({
  symbol,
  isSmall = false,
}: {
  symbol: MontessoriSymbol;
  isSmall?: boolean;
}) {
  const className = [
    styles.symbolShape,
    styles[symbol.shape],
    isSmall ? styles.smallSymbol : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={className}
      style={{ '--symbol-color': symbol.color } as CSSProperties}
      aria-hidden="true"
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
  const [checkedQuestions, setCheckedQuestions] = useState<
    Record<number, boolean>
  >({});

  const correctAnswers = resolvedExercise.questions.filter((question) =>
    questionIsCorrect(question, answers[question.id]),
  ).length;

  const allQuestionsChecked =
    resolvedExercise.questions.length > 0 &&
    resolvedExercise.questions.every(
      (question) => checkedQuestions[question.id],
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

    setCheckedQuestions((current) => ({
      ...current,
      [questionId]: false,
    }));

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

    setCheckedQuestions((current) => ({
      ...current,
      [questionId]: false,
    }));
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

  function checkQuestion(question: MontessoriQuestion) {
    if (!questionIsComplete(question, answers[question.id])) return;

    setCheckedQuestions((current) => ({
      ...current,
      [question.id]: true,
    }));
  }

  function resetQuestion(questionId: number) {
    setAnswers((current) => ({
      ...current,
      [questionId]: {},
    }));

    setCheckedQuestions((current) => ({
      ...current,
      [questionId]: false,
    }));

    setSelectedSymbol(null);
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
          const isChecked = checkedQuestions[question.id] ?? false;
          const isCorrect =
            isChecked && questionIsCorrect(question, currentAnswers);
          const isIncorrect = isChecked && !isCorrect;
          const canCheck = questionIsComplete(question, currentAnswers);

          return (
            <article className={styles.questionCard} key={question.id}>
              <div className={styles.questionTop}>
                <span className={styles.questionLabel}>
                  Ejercicio {question.id}
                </span>
              </div>

              <div className={styles.sentenceBoard}>
                {question.words.map((word) => {
                  const placedSymbol = getSymbol(
                    question,
                    currentAnswers[word.id],
                  );

                  return (
                    <div className={styles.wordColumn} key={word.id}>
                      <strong className={styles.wordText}>
                        {word.word}
                      </strong>

                      <button
                        type="button"
                        className={[
                          styles.dropZone,
                          placedSymbol ? styles.filledDropZone : '',
                          selectedSymbol?.questionId === question.id
                            ? styles.activeDropZone
                            : '',
                          isChecked &&
                          currentAnswers[word.id] ===
                            question.correctPlacements[word.id]
                            ? styles.correctDropZone
                            : '',
                          isChecked &&
                          currentAnswers[word.id] !==
                            question.correctPlacements[word.id]
                            ? styles.incorrectDropZone
                            : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() =>
                          handleDropZoneClick(question.id, word.id)
                        }
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) =>
                          handleDrop(event, question.id, word.id)
                        }
                        aria-label={`Colocar símbolo en ${word.word}`}
                      >
                        {placedSymbol ? (
                          <SymbolShape symbol={placedSymbol} />
                        ) : (
                          <span className={styles.emptyDot} />
                        )}
                      </button>

                      <span className={styles.translation}>
                        {word.translation}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className={styles.instructions}>
                Arrastra un símbolo o selecciónalo y luego toca el espacio
                correspondiente.
              </p>

              <div className={styles.symbolBank}>
                {question.symbols.map((symbol) => {
                  const isSelected =
                    selectedSymbol?.questionId === question.id &&
                    selectedSymbol.symbolId === symbol.id;

                  return (
                    <button
                      type="button"
                      className={[
                        styles.symbolButton,
                        isSelected ? styles.selectedSymbolButton : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
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
                      <SymbolShape symbol={symbol} isSmall />
                      <span>{symbol.label}</span>
                      {symbol.helperText && (
                        <small>{symbol.helperText}</small>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.checkButton}
                  disabled={!canCheck}
                  onClick={() => checkQuestion(question)}
                >
                  Corregir
                </button>

                <button
                  type="button"
                  className={styles.retryButton}
                  onClick={() => resetQuestion(question.id)}
                >
                  Reintentar
                </button>
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

      {allQuestionsChecked && (
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