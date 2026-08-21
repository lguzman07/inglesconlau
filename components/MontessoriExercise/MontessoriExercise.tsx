'use client';

import {
  DragEvent,
  useEffect,
  useState,
} from 'react';

import type {
  MontessoriExercise as MontessoriExerciseType,
  MontessoriQuestion,
  MontessoriSymbol,
} from '@/content/lecciones/types';

import styles from './MontessoriExercise.module.css';

type Props = {
  exercise: MontessoriExerciseType;
};

type QuestionAnswers = Record<string, string>;

function getSymbolExplanation(
  label: string,
) {
  switch (label) {
    case 'Noun':
      return 'Sustantivo (nombre)';

    case 'Verb':
      return 'Verbo (acción)';

    default:
      return label;
  }
}

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
    useState<QuestionAnswers>({});

  const [
    selectedSymbol,
    setSelectedSymbol,
  ] = useState<string | null>(null);

  const [
    draggedSymbol,
    setDraggedSymbol,
  ] = useState<string | null>(null);

  const [
    activeDropZone,
    setActiveDropZone,
  ] = useState<string | null>(null);

  const [checked, setChecked] =
    useState(false);

  useEffect(() => {
    setAnswers({});
    setSelectedSymbol(null);
    setDraggedSymbol(null);
    setActiveDropZone(null);
    setChecked(false);
  }, [question.id]);

  function selectSymbol(
    symbolId: string,
  ) {
    setSelectedSymbol((current) =>
      current === symbolId
        ? null
        : symbolId,
    );

    setChecked(false);
  }

  function setSymbolForWord(
    wordId: string,
    symbolId: string,
  ) {
    setAnswers((current) => ({
      ...current,
      [wordId]: symbolId,
    }));

    setSelectedSymbol(null);
    setChecked(false);
  }

  function placeSelectedSymbol(
    wordId: string,
  ) {
    if (!selectedSymbol) {
      return;
    }

    setSymbolForWord(
      wordId,
      selectedSymbol,
    );
  }

  function removeSymbol(
    wordId: string,
  ) {
    setAnswers((current) => {
      const next = {
        ...current,
      };

      delete next[wordId];

      return next;
    });

    setChecked(false);
  }

  function handleSymbolDragStart(
    event: DragEvent<HTMLButtonElement>,
    symbolId: string,
  ) {
    event.dataTransfer.setData(
      'text/plain',
      symbolId,
    );

    event.dataTransfer.effectAllowed =
      'copy';

    setDraggedSymbol(symbolId);
    setSelectedSymbol(null);
    setChecked(false);
  }

  function handleSymbolDragEnd() {
    setDraggedSymbol(null);
    setActiveDropZone(null);
  }

  function handleDropZoneDragOver(
    event: DragEvent<HTMLButtonElement>,
    wordId: string,
  ) {
    event.preventDefault();

    event.dataTransfer.dropEffect =
      'copy';

    setActiveDropZone(wordId);
  }

  function handleDropZoneDragLeave(
    wordId: string,
  ) {
    setActiveDropZone((current) =>
      current === wordId
        ? null
        : current,
    );
  }

  function handleDrop(
    event: DragEvent<HTMLButtonElement>,
    wordId: string,
  ) {
    event.preventDefault();

    const symbolId =
      event.dataTransfer.getData(
        'text/plain',
      ) || draggedSymbol;

    if (!symbolId) {
      return;
    }

    setSymbolForWord(
      wordId,
      symbolId,
    );

    setDraggedSymbol(null);
    setActiveDropZone(null);
  }

  function getSymbol(
    symbolId?: string,
  ) {
    if (!symbolId) {
      return undefined;
    }

    return question.symbols.find(
      (symbol) =>
        symbol.id === symbolId,
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
      correctPlacement?.symbolId ===
      symbolId
    );
  }

  const allAnswered =
    question.words.every(
      (word) =>
        Boolean(answers[word.id]),
    );

  const allCorrect =
    question.words.every(
      (word) =>
        isCorrect(
          word.id,
          answers[word.id],
        ),
    );

  return (
    <article
      className={styles.questionCard}
    >
      <p
        className={styles.questionNumber}
      >
        EJERCICIO {questionNumber}
      </p>

      <div className={styles.sentence}>
        {question.words.map((word) => {
          const placedSymbol =
            getSymbol(
              answers[word.id],
            );

          const correct =
            checked &&
            isCorrect(
              word.id,
              answers[word.id],
            );

          const incorrect =
            checked &&
            Boolean(answers[word.id]) &&
            !isCorrect(
              word.id,
              answers[word.id],
            );

          const isActiveDropZone =
            activeDropZone === word.id;

          return (
            <div
              key={word.id}
              className={
                styles.wordColumn
              }
            >
              <span
                className={styles.word}
              >
                {word.word}
              </span>

              <button
                type="button"
                className={`${
                  styles.dropZone
                } ${
                  correct
                    ? styles.correct
                    : ''
                } ${
                  incorrect
                    ? styles.incorrect
                    : ''
                } ${
                  isActiveDropZone
                    ? styles.dropZoneActive
                    : ''
                }`}
                onClick={() => {
                  if (selectedSymbol) {
                    placeSelectedSymbol(
                      word.id,
                    );

                    return;
                  }

                  if (placedSymbol) {
                    removeSymbol(
                      word.id,
                    );
                  }
                }}
                onDragOver={(event) =>
                  handleDropZoneDragOver(
                    event,
                    word.id,
                  )
                }
                onDragLeave={() =>
                  handleDropZoneDragLeave(
                    word.id,
                  )
                }
                onDrop={(event) =>
                  handleDrop(
                    event,
                    word.id,
                  )
                }
                aria-label={
                  placedSymbol
                    ? `Símbolo colocado debajo de ${word.word}.`
                    : `Coloca un símbolo debajo de ${word.word}.`
                }
              >
                {placedSymbol ? (
                  <SymbolShape
                    symbol={
                      placedSymbol
                    }
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

      <div
        className={
          styles.symbolSection
        }
      >
        <p
          className={
            styles.symbolLabel
          }
        >
          Arrastra un símbolo o
          selecciónalo y luego toca el
          espacio correspondiente.
        </p>

        <div
          className={
            styles.symbolOptions
          }
        >
          {question.symbols.map(
            (symbol) => {
              const selected =
                selectedSymbol ===
                symbol.id;

              const dragging =
                draggedSymbol ===
                symbol.id;

              return (
                <button
                  key={symbol.id}
                  type="button"
                  draggable
                  className={`${
                    styles.symbolButton
                  } ${
                    selected
                      ? styles.selectedSymbol
                      : ''
                  } ${
                    dragging
                      ? styles.draggingSymbol
                      : ''
                  }`}
                  onClick={() =>
                    selectSymbol(
                      symbol.id,
                    )
                  }
                  onDragStart={(
                    event,
                  ) =>
                    handleSymbolDragStart(
                      event,
                      symbol.id,
                    )
                  }
                  onDragEnd={
                    handleSymbolDragEnd
                  }
                  aria-pressed={
                    selected
                  }
                  aria-label={`${symbol.label}: ${getSymbolExplanation(
                    symbol.label,
                  )}`}
                >
                  <SymbolShape
                    symbol={symbol}
                  />

                  <span
                    className={
                      styles.symbolText
                    }
                  >
                    {symbol.label}

                    <span
                      className={
                        styles.symbolTooltip
                      }
                      role="tooltip"
                    >
                      {getSymbolExplanation(
                        symbol.label,
                      )}
                    </span>
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>

      <button
        type="button"
        className={
          styles.checkButton
        }
        disabled={!allAnswered}
        onClick={() =>
          setChecked(true)
        }
      >
        Corregir
      </button>

      {checked && (
        <div
          className={`${
            styles.feedback
          } ${
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
    <section
      className={styles.exercise}
    >
      <div
        className={styles.heading}
      >
        <p
          className={styles.eyebrow}
        >
          MONTESSORI
        </p>

        <h2>{exercise.title}</h2>

        <p>
          {exercise.instructions}
        </p>
      </div>

      <div
        className={styles.questions}
      >
        {exercise.questions.map(
          (question, index) => (
            <MontessoriQuestionCard
              key={question.id}
              question={question}
              questionNumber={
                index + 1
              }
            />
          ),
        )}
      </div>
    </section>
  );
}