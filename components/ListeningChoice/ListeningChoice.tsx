'use client';

import Link from 'next/link';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import VocabularyButton from '@/components/VocabularyButton/VocabularyButton';

import type {
  ListeningChoiceExercise as ListeningChoiceExerciseContent,
  ListeningChoiceQuestion,
} from '@/content/lecciones/types';

import { createClient } from '@/lib/supabase/client';

import styles from './ListeningChoice.module.css';

type ListeningChoiceProps = {
  exercise?: ListeningChoiceExerciseContent;
  title?: string;
  instructions?: string;
  questions?: ListeningChoiceQuestion[];
  lessonKey: string;
  exerciseKey?: string;
  lessonTotalQuestions?: number;
  showLessonProgress?: boolean;
  nextLessonHref?: string;
};

type Answers = Record<number, string[]>;

type OpenVocabulary = {
  questionId: number;
  optionId: string;
} | null;

type ProgressRow = {
  score: number | null;
  total_questions: number;
  has_attempted: boolean;
  is_completed: boolean;
  completion_source:
    | 'manual'
    | 'automatic'
    | null;
};

type ExerciseProgressRow = {
  answers: Record<string, string>;
  score: number;
  total_questions: number;
  has_attempted: boolean;
};

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
  selectedOptionIds:
    | string[]
    | undefined,
) {
  return arraysHaveSameValues(
    selectedOptionIds ?? [],
    question.correctOptionIds,
  );
}

function getAnswersFromDatabase(
  value: unknown,
) {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return {};
  }

  return Object.entries(
    value,
  ).reduce<Record<number, string[]>>(
    (result, [questionId, answer]) => {
      if (
        typeof answer === 'string' &&
        answer
      ) {
        result[Number(questionId)] =
          answer.split('|');
      }

      return result;
    },
    {},
  );
}

export default function ListeningChoice({
  exercise,
  title,
  instructions,
  questions,
  lessonKey,
  exerciseKey = 'listening-choice-1',
  lessonTotalQuestions,
  showLessonProgress = true,
  nextLessonHref,
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

  const lessonQuestionCount =
    lessonTotalQuestions ??
    resolvedExercise.questions.length;

  const supabaseRef =
    useRef<
      ReturnType<typeof createClient> | null
    >(null);

  if (!supabaseRef.current) {
    supabaseRef.current =
      createClient();
  }

  const supabase =
    supabaseRef.current;

  const [answers, setAnswers] =
    useState<Answers>({});

  const [
    hasChecked,
    setHasChecked,
  ] = useState(false);

  const [
    hasAttempted,
    setHasAttempted,
  ] = useState(false);

  const [
    isCompleted,
    setIsCompleted,
  ] = useState(false);

  const [
    completionSource,
    setCompletionSource,
  ] = useState<
    'manual' | 'automatic' | null
  >(null);

  const [
    hasPassedAttempt,
    setHasPassedAttempt,
  ] = useState(false);

  const [
    isLoadingProgress,
    setIsLoadingProgress,
  ] = useState(true);

  const [
    isSavingProgress,
    setIsSavingProgress,
  ] = useState(false);

  const [
    progressError,
    setProgressError,
  ] = useState<string | null>(null);

  const [
    openVocabulary,
    setOpenVocabulary,
  ] = useState<OpenVocabulary>(
    null,
  );

  function applyProgress(
    progress: ProgressRow,
  ) {
    setHasAttempted(
      progress.has_attempted,
    );

    setIsCompleted(
      progress.is_completed,
    );

    setCompletionSource(
      progress.completion_source,
    );

    setHasPassedAttempt(
      progress.score !== null &&
        progress.score * 10 >=
          progress.total_questions *
            7,
    );
  }

  useEffect(() => {
    async function loadProgress() {
      const [
        exerciseResult,
        lessonResult,
      ] = await Promise.all([
        supabase
          .from(
            'lesson_exercise_progress',
          )
          .select(
            'answers, score, total_questions, has_attempted',
          )
          .eq('lesson_key', lessonKey)
          .eq('exercise_key', exerciseKey)
          .maybeSingle(),

        supabase
          .from('lesson_progress')
          .select(
            'score, total_questions, has_attempted, is_completed, completion_source',
          )
          .eq('lesson_key', lessonKey)
          .maybeSingle(),
      ]);

      if (exerciseResult.error || lessonResult.error) {
        setProgressError(
          exerciseResult.error?.message ??
            lessonResult.error?.message ??
            'No se pudo cargar el progreso.',
        );

        setIsLoadingProgress(false);

        return;
      }

      if (exerciseResult.data) {
        const exerciseProgress =
          exerciseResult.data as ExerciseProgressRow;

        setAnswers(
          getAnswersFromDatabase(
            exerciseProgress.answers,
          ),
        );

        setHasChecked(
          exerciseProgress.has_attempted,
        );
      }

      if (lessonResult.data) {
        applyProgress(
          lessonResult.data as ProgressRow,
        );
      }

      setIsLoadingProgress(false);
    }

    void loadProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseKey, lessonKey]);

  function toggleOption(
    questionId: number,
    optionId: string,
  ) {
    if (hasChecked || isSavingProgress) {
      return;
    }

    setAnswers((current) => {
      const currentAnswers =
        current[questionId] ?? [];

      const isSelected =
        currentAnswers.includes(
          optionId,
        );

      return {
        ...current,

        [questionId]: isSelected
          ? currentAnswers.filter(
              (id) =>
                id !== optionId,
            )
          : [
              ...currentAnswers,
              optionId,
            ],
      };
    });
  }

  function toggleVocabulary(
    questionId: number,
    optionId: string,
  ) {
    const isAlreadyOpen =
      openVocabulary?.questionId ===
        questionId &&
      openVocabulary?.optionId ===
        optionId;

    setOpenVocabulary(
      isAlreadyOpen
        ? null
        : {
            questionId,
            optionId,
          },
    );
  }

  const allQuestionsAnswered =
    resolvedExercise.questions
      .length > 0 &&
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

  const passingScore = Math.ceil(
    resolvedExercise.questions.length *
      0.7,
  );

  const passedCurrentAttempt =
    hasChecked &&
    correctAnswers >= passingScore;

  const canMarkManually =
    !hasAttempted && !isCompleted;

  const canRestoreCompletion =
    !isCompleted &&
    hasPassedAttempt &&
    completionSource === null;

  async function checkExercise() {
    if (!allQuestionsAnswered) {
      return;
    }

    setIsSavingProgress(true);
    setProgressError(null);

    const answersForDatabase =
      Object.fromEntries(
        resolvedExercise.questions.map(
          (question) => [
            question.id,

            (
              answers[question.id] ?? []
            ).join('|'),
          ],
        ),
      );

    const { data, error } =
      await supabase.rpc(
        'save_lesson_exercise_attempt',
        {
          p_lesson_key: lessonKey,
          p_exercise_key: exerciseKey,
          p_answers: answersForDatabase,
          p_score: correctAnswers,
          p_total_questions:
            resolvedExercise.questions
              .length,
          p_lesson_total_questions:
            lessonQuestionCount,
        },
      );

    if (error || !data) {
      setProgressError(
        error?.message ??
          'No se pudo guardar tu resultado. Inténtalo de nuevo.',
      );

      setIsSavingProgress(false);

      return;
    }

    applyProgress(
      data as ProgressRow,
    );

    setHasChecked(true);
    setOpenVocabulary(null);
    setIsSavingProgress(false);
  }

  async function setCompletion(
    completed: boolean,
  ) {
    setIsSavingProgress(true);
    setProgressError(null);

    const { data, error } =
      await supabase.rpc(
        'set_lesson_completion',
        {
          p_lesson_key: lessonKey,
          p_completed: completed,
        },
      );

    if (error || !data) {
      setProgressError(
        error?.message ??
          'No se pudo actualizar el progreso. Inténtalo de nuevo.',
      );

      setIsSavingProgress(false);

      return;
    }

    applyProgress(
      data as ProgressRow,
    );

    setIsSavingProgress(false);
  }

  function handleRetry() {
    setAnswers({});
    setHasChecked(false);
    setOpenVocabulary(null);
  }

  if (isLoadingProgress) {
    return (
      <section
        className={styles.exercise}
        aria-live="polite"
      >
        Cargando tu último intento...
      </section>
    );
  }

  return (
    <>
    <section
      className={styles.exercise}
      aria-labelledby="listening-choice-title"
    >
      <div
        className={
          styles.exerciseHeader
        }
      >
        <div>
          <span
            className={
              styles.exerciseType
            }
          >
            ESCUCHA
          </span>

          <h3 id="listening-choice-title">
            {resolvedExercise.title}
          </h3>

          <p>
            {
              resolvedExercise.instructions
            }
          </p>
        </div>

        <span
          className={
            styles.totalQuestions
          }
        >
          {
            resolvedExercise.questions
              .length
          }{' '}
          preguntas
        </span>
      </div>

      {progressError && (
        <p
          className={
            styles.incorrectFeedback
          }
          role="alert"
        >
          {progressError}
        </p>
      )}

      <div
        className={styles.questions}
      >
        {resolvedExercise.questions.map(
          (question) => {
            const selectedOptionIds =
              answers[question.id] ??
              [];

            const isCorrect =
              hasChecked &&
              questionIsCorrect(
                question,
                selectedOptionIds,
              );

            const isIncorrect =
              hasChecked &&
              !isCorrect;

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
                  Ejercicio{' '}
                  {question.id}
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

                <p
                  className={
                    styles.prompt
                  }
                >
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

                      const vocabularyIsOpen =
                        openVocabulary?.questionId ===
                          question.id &&
                        openVocabulary?.optionId ===
                          option.id;

                      return (
                        <div
                          key={
                            option.id
                          }
                          className={
                            styles.optionWrapper
                          }
                        >
                          <button
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
                              .filter(
                                Boolean,
                              )
                              .join(' ')}
                            disabled={
                              hasChecked ||
                              isSavingProgress
                            }
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
                            {
                              option.text
                            }
                          </button>

                          {option.translation ? (
                            <div
                              className={
                                styles.vocabularyArea
                              }
                            >
                              <button
                                type="button"
                                className={
                                  styles.vocabularyToggle
                                }
                                aria-expanded={
                                  vocabularyIsOpen
                                }
                                onClick={() =>
                                  toggleVocabulary(
                                    question.id,
                                    option.id,
                                  )
                                }
                              >
                                {vocabularyIsOpen
                                  ? 'Cerrar'
                                  : 'Ver palabra'}
                              </button>

                              {vocabularyIsOpen && (
                                <div
                                  className={
                                    styles.vocabularyBubble
                                  }
                                >
                                  <div
                                    className={
                                      styles.vocabularyWord
                                    }
                                  >
                                    <strong>
                                      {
                                        option.text
                                      }
                                    </strong>

                                    <span>
                                      {
                                        option.translation
                                      }
                                    </span>
                                  </div>

                                  <AudioPlayer
                                    text={
                                      option.text
                                    }
                                    language={
                                      question.language
                                    }
                                    mode="letterName"
                                  />

                                  <VocabularyButton
                                    word={
                                      option.text
                                    }
                                    translation={
                                      option.translation
                                    }
                                    lessonKey={
                                      lessonKey
                                    }
                                    exampleSentence={
                                      question.audioText
                                    }
                                  />
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>
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
                      Revisa las opciones
                      que seleccionaste e
                      inténtalo nuevamente.
                    </p>
                  </div>
                )}
              </article>
            );
          },
        )}
      </div>

      {!hasChecked && (
        <div
          className={styles.actions}
        >
          <button
            type="button"
            className={
              styles.checkButton
            }
            disabled={
              !allQuestionsAnswered ||
              isSavingProgress
            }
            onClick={() =>
              void checkExercise()
            }
          >
            {isSavingProgress
              ? 'Guardando...'
              : 'Corregir ejercicio'}
          </button>
        </div>
      )}

      {hasChecked && (
        <div
          className={
            styles.resultCard
          }
          aria-live="polite"
        >
          <div>
            <p
              className={
                styles.resultLabel
              }
            >
              TU RESULTADO
            </p>

            <h4>
              {correctAnswers} de{' '}
              {
                resolvedExercise
                  .questions.length
              }{' '}
              correctas
            </h4>

            <p>
              {passedCurrentAttempt
                ? '¡Excelente! Reconociste todos los sonidos.'
                : `Necesitas ${passingScore} respuestas correctas para aprobar. Puedes intentarlo de nuevo.`}
            </p>
          </div>

          <div
            className={
              styles.resultActions
            }
          >
            <button
              type="button"
              className={
                styles.retryButton
              }
              disabled={
                isSavingProgress
              }
              onClick={handleRetry}
            >
              Repetir ejercicio
            </button>

            {passedCurrentAttempt &&
              nextLessonHref && (
                <Link
                  href={nextLessonHref}
                  className={
                    styles.nextButton
                  }
                >
                  Siguiente lección →
                </Link>
              )}
          </div>
        </div>
      )}
    </section>

    {showLessonProgress && (
    <section
      className={styles.resultCard}
      aria-live="polite"
    >
      <div>
        <p
          className={
            styles.resultLabel
          }
        >
          TU PROGRESO
        </p>

        {isCompleted &&
        completionSource ===
          'automatic' ? (
          <>
            <h4>
              ¡La lección se completó
              automáticamente!
            </h4>

            <p>
              Alcanzaste al menos{' '}
              {Math.ceil(
                lessonQuestionCount * 0.7,
              )}{' '}
              de{' '}
              {lessonQuestionCount}{' '}
              preguntas correctas.
            </p>
          </>
        ) : isCompleted &&
          completionSource ===
            'manual' ? (
          <>
            <h4>
              Marcaste esta lección
              como completada.
            </h4>

            <p>
              La marcaste sin hacer
              el ejercicio porque ya
              dominabas el tema.
            </p>
          </>
        ) : canRestoreCompletion ? (
          <>
            <h4>
              Desmarcaste esta
              lección como
              completada.
            </h4>

            <p>
              Ya habías aprobado el
              ejercicio y puedes
              volver a marcarla.
            </p>
          </>
        ) : hasAttempted ? (
          <>
            <h4>
              Esta lección todavía
              no está completada.
            </h4>

            <p>
              Ya hiciste un intento.
              Para completarla
              necesitas obtener al
              menos{' '}
              {Math.ceil(
                lessonQuestionCount * 0.7,
              )}{' '}
              de{' '}
              {lessonQuestionCount}{' '}
              preguntas correctas.
            </p>
          </>
        ) : (
          <>
            <h4>
              ¿Ya dominas este tema?
            </h4>

            <p>
              Puedes marcar esta
              lección como
              completada sin hacer
              el ejercicio.
            </p>
          </>
        )}
      </div>

      <div
        className={
          styles.resultActions
        }
      >
        {isCompleted && (
          <button
            type="button"
            className={
              styles.retryButton
            }
            disabled={
              isSavingProgress
            }
            onClick={() =>
              void setCompletion(
                false,
              )
            }
          >
            Desmarcar como completada
          </button>
        )}

        {canMarkManually && (
          <button
            type="button"
            className={
              styles.nextButton
            }
            disabled={
              isSavingProgress
            }
            onClick={() =>
              void setCompletion(
                true,
              )
            }
          >
            Marcar como completada
          </button>
        )}

        {canRestoreCompletion && (
          <button
            type="button"
            className={
              styles.nextButton
            }
            disabled={
              isSavingProgress
            }
            onClick={() =>
              void setCompletion(
                true,
              )
            }
          >
            Volver a marcar como
            completada
          </button>
        )}
      </div>
    </section>
    )}
    </>
  );
}
