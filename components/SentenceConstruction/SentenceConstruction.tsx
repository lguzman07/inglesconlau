'use client';

import Link from 'next/link';
import {
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import VocabularyButton from '@/components/VocabularyButton/VocabularyButton';
import type {
  SentenceConstructionQuestion,
} from '@/content/lecciones/types';
import { createClient } from '@/lib/supabase/client';

import styles from './SentenceConstruction.module.css';

type ProgressRow = {
  answers: Record<string, unknown>;
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

type SentenceConstructionProps = {
  title: string;
  instructions: string;
  lessonKey: string;
  exerciseKey?: string;
  lessonTotalQuestions?: number;
  showLessonProgress?: boolean;
  questions: SentenceConstructionQuestion[];
  nextLessonHref?: string;
  englishVariant?: 'en' | 'en-GB';
};

type OpenVocabulary = {
  questionId: number;
  wordIndex: number;
} | null;

function normalizeAnswer(
  value: string,
) {
  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, ' ')
    .replace(
      /\s+([,.!?;:])/g,
      '$1',
    )
    .replace(/[.!?]+$/g, '');
}

function getModelAnswer(
  question: SentenceConstructionQuestion,
) {
  return question.modelAnswer
    .map((item) => item.word)
    .join(' ')
    .replace(
      /\s+([,.!?;:])/g,
      '$1',
    );
}

function questionIsCorrect(
  question: SentenceConstructionQuestion,
  answer: string,
) {
  return [
    ...question.acceptedAnswers,
    getModelAnswer(question),
  ].some(
    (acceptedAnswer) =>
      normalizeAnswer(
        acceptedAnswer,
      ) ===
      normalizeAnswer(answer),
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
  ).reduce<
    Record<number, string>
  >(
    (
      result,
      [questionId, answer],
    ) => {
      if (
        typeof answer ===
        'string'
      ) {
        result[
          Number(questionId)
        ] = answer;
      }

      return result;
    },
    {},
  );
}

function resizeTextarea(
  textarea: HTMLTextAreaElement,
) {
  textarea.style.height =
    'auto';

  textarea.style.height =
    `${textarea.scrollHeight}px`;
}

export default function SentenceConstruction({
  title,
  instructions,
  lessonKey,
  exerciseKey = 'sentence-construction-1',
  questions,
  lessonTotalQuestions = questions.length,
  showLessonProgress = true,
  nextLessonHref,
  englishVariant = 'en',
}: SentenceConstructionProps) {
  const headingId = useId();

  const supabaseRef =
    useRef<
      ReturnType<
        typeof createClient
      > | null
    >(null);

  if (!supabaseRef.current) {
    supabaseRef.current =
      createClient();
  }

  const supabase =
    supabaseRef.current;

  const draftKey =
    `lesson-exercise-draft:${lessonKey}:${exerciseKey}`;

  const textareaRefs =
    useRef<
      Record<
        number,
        HTMLTextAreaElement | null
      >
    >({});

  const [
    answers,
    setAnswers,
  ] = useState<
    Record<number, string>
  >({});

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
    | 'manual'
    | 'automatic'
    | null
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
  ] = useState<
    string | null
  >(null);

  const [
    openVocabulary,
    setOpenVocabulary,
  ] = useState<OpenVocabulary>(
    null,
  );

  const [
    draftStatus,
    setDraftStatus,
  ] = useState<
    'idle' | 'saving' | 'saved'
  >('idle');

  const correctAnswers =
    questions.filter(
      (question) =>
        questionIsCorrect(
          question,
          answers[
            question.id
          ] ?? '',
        ),
    ).length;

  const passingScore =
    Math.ceil(
      questions.length * 0.7,
    );

  const lessonPassingScore =
    Math.ceil(
      lessonTotalQuestions *
        0.7,
    );

  const passedCurrentAttempt =
    hasChecked &&
    correctAnswers >=
      passingScore;

  const allQuestionsAnswered =
    questions.length > 0 &&
    questions.every(
      (question) =>
        Boolean(
          answers[
            question.id
          ]?.trim(),
        ),
    );

  const hasStarted =
    questions.some(
      (question) =>
        Boolean(
          answers[
            question.id
          ]?.trim(),
        ),
    );

  const canMarkManually =
    !hasAttempted &&
    !isCompleted;

  const canRestoreCompletion =
    !isCompleted &&
    hasPassedAttempt &&
    completionSource === null;

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
      let hasLocalDraft =
        false;

      try {
        const storedDraft =
          window.localStorage.getItem(
            draftKey,
          );

        if (storedDraft) {
          const parsedDraft =
            JSON.parse(
              storedDraft,
            ) as {
              answers?: unknown;
            };

          setAnswers(
            getAnswersFromDatabase(
              parsedDraft.answers,
            ),
          );

          setHasChecked(false);
          hasLocalDraft = true;
        }
      } catch {
        window.localStorage.removeItem(
          draftKey,
        );
      }

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
          .eq(
            'lesson_key',
            lessonKey,
          )
          .eq(
            'exercise_key',
            exerciseKey,
          )
          .maybeSingle(),

        supabase
          .from(
            'lesson_progress',
          )
          .select(
            'answers, score, total_questions, has_attempted, is_completed, completion_source',
          )
          .eq(
            'lesson_key',
            lessonKey,
          )
          .maybeSingle(),
      ]);

      if (
        exerciseResult.error ||
        lessonResult.error
      ) {
        setProgressError(
          exerciseResult.error
            ?.message ??
            lessonResult.error
              ?.message ??
            'No se pudo cargar el progreso.',
        );

        setIsLoadingProgress(
          false,
        );

        return;
      }

      if (
        exerciseResult.data &&
        !hasLocalDraft
      ) {
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

      if (
        lessonResult.data
      ) {
        applyProgress(
          lessonResult.data as ProgressRow,
        );
      }

      setIsLoadingProgress(
        false,
      );
    }

    void loadProgress();
  }, [
    draftKey,
    exerciseKey,
    lessonKey,
    supabase,
  ]);

  useEffect(() => {
    if (
      isLoadingProgress ||
      hasChecked
    ) {
      return;
    }

    setDraftStatus('saving');

    const timeoutId =
      window.setTimeout(
        () => {
          window.localStorage.setItem(
            draftKey,
            JSON.stringify({
              answers,
            }),
          );

          setDraftStatus(
            'saved',
          );
        },
        500,
      );

    return () =>
      window.clearTimeout(
        timeoutId,
      );
  }, [
    answers,
    draftKey,
    hasChecked,
    isLoadingProgress,
  ]);

  useEffect(() => {
    Object.values(
      textareaRefs.current,
    ).forEach(
      (textarea) => {
        if (textarea) {
          resizeTextarea(
            textarea,
          );
        }
      },
    );
  }, [answers]);

  function handleAnswerChange(
    questionId: number,
    value: string,
    textarea: HTMLTextAreaElement,
  ) {
    resizeTextarea(textarea);

    setAnswers(
      (current) => ({
        ...current,

        [questionId]:
          value,
      }),
    );

    setHasChecked(false);
    setOpenVocabulary(null);
  }

  async function handleCheckAnswers() {
    if (
      !allQuestionsAnswered
    ) {
      return;
    }

    setIsSavingProgress(true);
    setProgressError(null);

    const answersForDatabase =
      Object.fromEntries(
        questions.map(
          (question) => [
            question.id,

            answers[
              question.id
            ] ?? '',
          ],
        ),
      );

    const {
      data,
      error,
    } = await supabase.rpc(
      'save_lesson_exercise_attempt',
      {
        p_lesson_key:
          lessonKey,

        p_exercise_key:
          exerciseKey,

        p_answers:
          answersForDatabase,

        p_score:
          correctAnswers,

        p_total_questions:
          questions.length,

        p_lesson_total_questions:
          lessonTotalQuestions,
      },
    );

    if (
      error ||
      !data
    ) {
      setProgressError(
        error?.message ??
          'No se pudo guardar tu resultado. Inténtalo de nuevo.',
      );

      setIsSavingProgress(
        false,
      );

      return;
    }

    applyProgress(
      data as ProgressRow,
    );

    window.localStorage.removeItem(
      draftKey,
    );

    setDraftStatus('idle');
    setHasChecked(true);
    setOpenVocabulary(null);
    setIsSavingProgress(false);
  }

  function handleRetry() {
    window.localStorage.setItem(
      draftKey,

      JSON.stringify({
        answers: {},
      }),
    );

    setAnswers({});
    setHasChecked(false);
    setOpenVocabulary(null);
    setDraftStatus('saved');

    window.setTimeout(() => {
      const firstQuestion =
        questions[0];

      if (firstQuestion) {
        textareaRefs.current[
          firstQuestion.id
        ]?.focus();
      }
    }, 0);
  }

  async function setCompletion(
    completed: boolean,
  ) {
    setIsSavingProgress(true);
    setProgressError(null);

    const {
      data,
      error,
    } = await supabase.rpc(
      'set_lesson_completion',
      {
        p_lesson_key:
          lessonKey,

        p_completed:
          completed,
      },
    );

    if (
      error ||
      !data
    ) {
      setProgressError(
        error?.message ??
          'No se pudo actualizar el progreso. Inténtalo de nuevo.',
      );

      setIsSavingProgress(
        false,
      );

      return;
    }

    applyProgress(
      data as ProgressRow,
    );

    setIsSavingProgress(false);
  }

  function toggleVocabulary(
    questionId: number,
    wordIndex: number,
  ) {
    const isOpen =
      openVocabulary
        ?.questionId ===
        questionId &&
      openVocabulary
        .wordIndex ===
        wordIndex;

    setOpenVocabulary(
      isOpen
        ? null
        : {
            questionId,
            wordIndex,
          },
    );
  }

  if (isLoadingProgress) {
    return (
      <section
        className={
          styles.exercise
        }
        aria-live="polite"
      >
        Cargando tu último
        intento...
      </section>
    );
  }

  return (
    <>
      <section
        className={
          styles.exercise
        }
        aria-labelledby={
          headingId
        }
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
              CONSTRUYE LA ORACIÓN
            </span>

            <h3 id={headingId}>
              {title}
            </h3>

            <p>
              {instructions}
            </p>
          </div>

          <div
            className={
              styles.headerDetails
            }
          >
            <span
              className={
                styles.totalQuestions
              }
            >
              {questions.length}{' '}
              preguntas
            </span>

            {!hasChecked &&
              draftStatus !==
                'idle' && (
                <span
                  className={
                    styles.saveStatus
                  }
                  aria-live="polite"
                >
                  {draftStatus ===
                  'saving'
                    ? 'Guardando...'
                    : '✓ Guardado'}
                </span>
              )}
          </div>
        </div>

        {progressError && (
          <p
            className={
              styles.errorMessage
            }
            role="alert"
          >
            {progressError}
          </p>
        )}

        <div
          className={
            styles.questions
          }
        >
          {questions.map(
            (question) => {
              const answer =
                answers[
                  question.id
                ] ?? '';

              const answerIsCorrect =
                questionIsCorrect(
                  question,
                  answer,
                );

              const modelAnswer =
                getModelAnswer(
                  question,
                );

              return (
                <article
                  className={[
                    styles.questionCard,

                    hasChecked &&
                    answerIsCorrect
                      ? styles.correctCard
                      : '',

                    hasChecked &&
                    !answerIsCorrect
                      ? styles.incorrectCard
                      : '',
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(' ')}
                  key={
                    question.id
                  }
                >
                  <div
                    className={
                      styles.questionHeading
                    }
                  >
                    <span
                      className={
                        styles.questionNumber
                      }
                    >
                      {question.id}
                    </span>

                    <span
                      className={
                        styles.direction
                      }
                    >
                      Escribe esta
                      oración en inglés
                    </span>
                  </div>

                  <p
                    className={
                      styles.sourceSentence
                    }
                  >
                    {
                      question.sourceSentence
                    }
                  </p>

                  <label
                    className={
                      styles.answerLabel
                    }
                    htmlFor={`sentence-answer-${question.id}`}
                  >
                    Tu respuesta
                  </label>

                  <textarea
                    ref={(
                      textarea,
                    ) => {
                      textareaRefs.current[
                        question.id
                      ] = textarea;
                    }}
                    id={`sentence-answer-${question.id}`}
                    className={[
                      styles.answerTextarea,

                      hasChecked &&
                      answerIsCorrect
                        ? styles.correctInput
                        : '',

                      hasChecked &&
                      !answerIsCorrect
                        ? styles.incorrectInput
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
                    maxLength={300}
                    onChange={(
                      event,
                    ) =>
                      handleAnswerChange(
                        question.id,
                        event.target
                          .value,
                        event.target,
                      )
                    }
                    placeholder="Escribe la oración completa..."
                    rows={2}
                    spellCheck={
                      false
                    }
                    value={answer}
                  />

                  {hasChecked && (
                    <div
                      className={
                        answerIsCorrect
                          ? styles.correctFeedback
                          : styles.incorrectFeedback
                      }
                      role="status"
                    >
                      <strong>
                        {answerIsCorrect
                          ? '✓ ¡Correcto!'
                          : 'Vamos a revisarla.'}
                      </strong>

                      {!answerIsCorrect && (
                        <p>
                          Una respuesta
                          correcta es:
                        </p>
                      )}

                      <div
                        className={
                          styles.modelAnswer
                        }
                      >
                        <span>
                          {modelAnswer}
                        </span>

                        <AudioPlayer
                          text={
                            modelAnswer
                          }
                          language={
                            englishVariant
                          }
                        />
                      </div>

                      {question.explanation && (
                        <p
                          className={
                            styles.explanation
                          }
                        >
                          {
                            question.explanation
                          }
                        </p>
                      )}

                      <div
                        className={
                          styles.wordList
                        }
                      >
                        {question.modelAnswer.map(
                          (
                            item,
                            wordIndex,
                          ) => {
                            const vocabularyIsOpen =
                              openVocabulary
                                ?.questionId ===
                                question.id &&
                              openVocabulary
                                .wordIndex ===
                                wordIndex;

                            return (
                              <div
                                className={
                                  styles.wordWrapper
                                }
                                key={`${question.id}-${wordIndex}-${item.word}`}
                              >
                                <button
                                  type="button"
                                  className={
                                    styles.wordButton
                                  }
                                  aria-expanded={
                                    vocabularyIsOpen
                                  }
                                  onClick={() =>
                                    toggleVocabulary(
                                      question.id,
                                      wordIndex,
                                    )
                                  }
                                >
                                  {
                                    item.word
                                  }
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
                                          item.word
                                        }
                                      </strong>

                                      <span>
                                        {
                                          item.translation
                                        }
                                      </span>
                                    </div>

                                    <AudioPlayer
                                      text={
                                        item.word
                                      }
                                      language={
                                        englishVariant
                                      }
                                    />

                                    <VocabularyButton
                                      word={
                                        item.word
                                      }
                                      translation={
                                        item.translation
                                      }
                                      lessonKey={
                                        lessonKey
                                      }
                                      exampleSentence={
                                        modelAnswer
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            },
          )}
        </div>

        {!hasChecked && (
          <div
            className={
              styles.checkArea
            }
          >
            {!allQuestionsAnswered && (
              <p
                className={
                  styles.answerReminder
                }
              >
                Completa todas las
                oraciones para corregir
                el ejercicio.
              </p>
            )}

            {hasStarted && (
              <button
                type="button"
                className={
                  styles.retryButton
                }
                disabled={
                  isSavingProgress
                }
                onClick={
                  handleRetry
                }
              >
                Empezar de nuevo
              </button>
            )}

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
                void handleCheckAnswers()
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
                {questions.length}{' '}
                correctas
              </h4>

              <p>
                {passedCurrentAttempt
                  ? '¡Muy bien! Aprobaste este bloque.'
                  : `Necesitas ${passingScore} respuestas correctas en este bloque. Puedes intentarlo otra vez.`}
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
                onClick={
                  handleRetry
                }
              >
                Repetir ejercicio
              </button>

              {isCompleted &&
                nextLessonHref && (
                  <Link
                    href={
                      nextLessonHref
                    }
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
          className={
            styles.progressCard
          }
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
                  ¡La lección se
                  completó
                  automáticamente!
                </h4>

                <p>
                  Alcanzaste al menos{' '}
                  {lessonPassingScore}{' '}
                  de{' '}
                  {
                    lessonTotalQuestions
                  }{' '}
                  preguntas correctas.
                </p>
              </>
            ) : isCompleted &&
              completionSource ===
                'manual' ? (
              <>
                <h4>
                  Marcaste esta
                  lección como
                  completada.
                </h4>

                <p>
                  La marcaste porque
                  ya dominabas el
                  tema.
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
                  Ya la habías
                  aprobado y puedes
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
                  Completa todos los
                  bloques y consigue
                  al menos{' '}
                  {lessonPassingScore}{' '}
                  de{' '}
                  {
                    lessonTotalQuestions
                  }
                  .
                </p>
              </>
            ) : (
              <>
                <h4>
                  ¿Ya dominas este
                  tema?
                </h4>

                <p>
                  Puedes marcar esta
                  lección como
                  completada.
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
                Desmarcar como
                completada
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
                Marcar como
                completada
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