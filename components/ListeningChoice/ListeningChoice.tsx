'use client';

import { useMemo, useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import type {
  ListeningChoiceExercise as ListeningChoiceExerciseContent,
  ListeningChoiceQuestion,
} from '@/content/lecciones/types';
import styles from './ListeningChoice.module.css';

type ListeningChoiceProps = {
  exercise?: ListeningChoiceExerciseContent;
  title?: string;
  instructions?: string;
  questions?: ListeningChoiceQuestion[];
};

type Answers = Record<number, string[]>;

function arraysHaveSameValues(
  first: string[],
  second: string[],
) {
  if (first.length !== second.length) {
    return false;
  }

  const sortedFirst = [...first].sort();
  const sortedSecond = [...second].sort();

  return sortedFirst.every(
    (value, index) =>
      value === sortedSecond[index],
  );
}

function questionIsCorrect(
  question: ListeningChoiceQuestion,
  selectedOptionIds: string[] | undefined,
) {
  return arraysHaveSameValues(
    selectedOptionIds ?? [],
    question.correctOptionIds,
  );
}

export default function ListeningChoice({
  exercise,
  title,
  instructions,
  questions,
}: ListeningChoiceProps) {
  const resolvedExercise =
    useMemo<ListeningChoiceExerciseContent>(
      () => ({
        type: 'listening-choice',
        title:
          exercise?.title ??
          title ??
          'Escucha y selecciona',
        instructions:
          exercise?.instructions ??
          instructions ??
          'Escucha el audio y selecciona la opción que más se parece.',
        questions:
          exercise?.questions ??
          questions ??
          [],
      }),
      [
        exercise,
        instructions,
        questions,
        title,
      ],
    );

  const [answers, setAnswers] =
    useState<Answers>({});

  const [hasChecked, setHasChecked] =
    useState(false);

  function toggleOption(
    questionId: number,
    optionId: string,
  ) {
    setAnswers((current) => {
      const currentAnswers =
        current[questionId] ?? [];

      const isSelected =
        currentAnswers.includes(optionId);

      return {
        ...current,

        [questionId]: isSelected
          ? currentAnswers.filter(
              (id) => id !== optionId,
            )
          : [
              ...currentAnswers,
              optionId,
            ],
      };
    });

    setHasChecked(false);
  }

  const allQuestionsAnswered =
    resolvedExercise.questions.length > 0 &&
    resolvedExercise.questions.every(
      (question) =>
        (answers[question.id]?.length ??
          0) > 0,
    );

  const correctAnswers =
    resolvedExercise.questions.filter(
      (question) =>
        questionIsCorrect(
          question,
          answers[question.id],
        ),
    ).length;

  function checkExercise() {
    if (!allQuestionsAnswered) {
      return;
    }

    setHasChecked(true);
  }

  return (
    <section
      className={styles.exercise}
      aria-labelledby="listening-choice-title"
    >
      <div
        className={styles.exerciseHeader}
      >
        <div>
          <span
            className={styles.exerciseType}
          >
            ESCUCHA
          </span>

          <h3 id="listening-choice-title">
            {resolvedExercise.title}
          </h3>

          <p>
            {resolvedExercise.instructions}
          </p>
        </div>

        <span
          className={
            styles.totalQuestions
          }
        >
          {resolvedExercise.questions.length}{' '}
          preguntas
        </span>
      </div>

      <div className={styles.questions}>
        {resolvedExercise.questions.map(
          (question) => {
            const selectedOptionIds =
              answers[question.id] ?? [];

            const isCorrect =
              hasChecked &&
              questionIsCorrect(
                question,
                selectedOptionIds,
              );

            const isIncorrect =
              hasChecked && !isCorrect;

            return (
              <article
                key={question.id}
                className={
                  styles.questionCard
                }
              >
                <p
                  className={
                    styles.questionLabel
                  }
                >
                  Ejercicio {question.id}
                </p>

                <div
                  className={
                    styles.audioSection
                  }
                >
                  <p
                    className={
                      styles.listenLabel
                    }
                  >
                    Escucha
                  </p>

                  <AudioPlayer
                    text={
                      question.audioText
                    }
                    language={
                      question.language
                    }
                    mode="letterName"
                  />
                </div>

                <p className={styles.prompt}>
                  {question.prompt}
                </p>

                <div
                  className={
                    styles.optionsGrid
                  }
                >
                  {question.options.map(
                    (option) => {
                      const isSelected =
                        selectedOptionIds.includes(
                          option.id,
                        );

                      const isCorrectOption =
                        question.correctOptionIds.includes(
                          option.id,
                        );

                      const showCorrect =
                        hasChecked &&
                        isCorrectOption;

                      const showIncorrect =
                        hasChecked &&
                        isSelected &&
                        !isCorrectOption;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          className={[
                            styles.option,

                            isSelected
                              ? styles.selected
                              : '',

                            showCorrect
                              ? styles.correct
                              : '',

                            showIncorrect
                              ? styles.incorrect
                              : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() =>
                            toggleOption(
                              question.id,
                              option.id,
                            )
                          }
                          aria-pressed={
                            isSelected
                          }
                        >
                          {option.text}
                        </button>
                      );
                    },
                  )}
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

                    {question.explanation ? (
                      <p>
                        {
                          question.explanation
                        }
                      </p>
                    ) : null}
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
                      Escucha otra vez.
                    </strong>

                    <p>
                      Revisa las opciones que
                      seleccionaste e inténtalo
                      nuevamente.
                    </p>
                  </div>
                )}
              </article>
            );
          },
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.checkButton}
          disabled={!allQuestionsAnswered}
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
          <p
            className={styles.resultLabel}
          >
            TU RESULTADO
          </p>

          <h4>
            {correctAnswers} de{' '}
            {
              resolvedExercise.questions
                .length
            }{' '}
            correctas
          </h4>

          <p>
            {correctAnswers ===
            resolvedExercise.questions
              .length
              ? '¡Excelente! Reconociste todos los sonidos.'
              : 'Puedes volver a escuchar los audios y corregir tus respuestas.'}
          </p>
        </div>
      )}
    </section>
  );
}