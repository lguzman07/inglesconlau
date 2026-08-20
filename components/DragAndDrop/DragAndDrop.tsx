'use client';

import Link from 'next/link';
import {
  DragEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import { createClient } from '@/lib/supabase/client';
import type {
  DragAndDropQuestion,
  DragAndDropToken,
} from '@/content/lecciones/types';
import styles from './DragAndDrop.module.css';

type ProgressRow = {
  answers: Record<string, string>;
  score: number | null;
  total_questions: number;
  has_attempted: boolean;
  is_completed: boolean;
  completion_source: 'manual' | 'automatic' | null;
};

type DraggedToken = {
  questionId: number;
  tokenId: string;
};

type DragAndDropProps = {
  title: string;
  instructions: string;
  lessonKey: string;
  questions: DragAndDropQuestion[];
  nextLessonHref?: string;
  englishVariant?: 'en' | 'en-GB';
};

function shuffle<T>(items: T[]) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function arraysAreEqual(first: string[], second: string[]) {
  return (
    first.length === second.length &&
    first.every((value, index) => value === second[index])
  );
}

function getAnswersFromDatabase(value: unknown) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.entries(value).reduce<Record<number, string[]>>(
    (result, [questionId, answer]) => {
      if (typeof answer === 'string' && answer) {
        result[Number(questionId)] = answer.split('|');
      }

      return result;
    },
    {},
  );
}

function getToken(
  question: DragAndDropQuestion,
  tokenId: string,
): DragAndDropToken | undefined {
  return question.tokens.find((token) => token.id === tokenId);
}

function getCorrectSentence(question: DragAndDropQuestion) {
  return question.correctOrder
    .map((tokenId) => getToken(question, tokenId)?.word ?? '')
    .filter(Boolean)
    .join(' ');
}

export default function DragAndDrop({
  title,
  instructions,
  lessonKey,
  questions,
  nextLessonHref,
  englishVariant = 'en',
}: DragAndDropProps) {
  const supabaseRef = useRef<ReturnType<typeof createClient> | null>(
    null,
  );

  if (!supabaseRef.current) {
    supabaseRef.current = createClient();
  }

  const supabase = supabaseRef.current;

  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [questionOrder, setQuestionOrder] = useState<number[]>(
    questions.map((question) => question.id),
  );
  const [bankOrder, setBankOrder] = useState<Record<number, string[]>>(
    () =>
      Object.fromEntries(
        questions.map((question) => [
          question.id,
          question.tokens.map((token) => token.id),
        ]),
      ),
  );

  const [hasChecked, setHasChecked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionSource, setCompletionSource] = useState<
    'manual' | 'automatic' | null
  >(null);
  const [hasPassedAttempt, setHasPassedAttempt] = useState(false);
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);
  const [isSavingProgress, setIsSavingProgress] = useState(false);
  const [progressError, setProgressError] = useState<string | null>(
    null,
  );

  const correctAnswers = questions.filter((question) =>
    arraysAreEqual(
      answers[question.id] ?? [],
      question.correctOrder,
    ),
  ).length;

  const passingScore = Math.ceil(questions.length * 0.7);

  const passedCurrentAttempt =
    hasChecked && correctAnswers >= passingScore;

  const canMarkManually = !hasAttempted && !isCompleted;

  const canRestoreCompletion =
    !isCompleted &&
    hasPassedAttempt &&
    completionSource === null;

  function randomizeExercise() {
    setQuestionOrder(
      shuffle(questions.map((question) => question.id)),
    );

    setBankOrder(
      Object.fromEntries(
        questions.map((question) => [
          question.id,
          shuffle(question.tokens.map((token) => token.id)),
        ]),
      ),
    );
  }

  function applyProgress(progress: ProgressRow) {
    setHasAttempted(progress.has_attempted);
    setIsCompleted(progress.is_completed);
    setCompletionSource(progress.completion_source);

    setHasPassedAttempt(
      progress.score !== null &&
        progress.score * 10 >= progress.total_questions * 7,
    );
  }

  useEffect(() => {
    randomizeExercise();

    // La mezcla solo debe ejecutarse al abrir la lección.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function loadProgress() {
      const { data, error } = await supabase
        .from('lesson_progress')
        .select(
          'answers, score, total_questions, has_attempted, is_completed, completion_source',
        )
        .eq('lesson_key', lessonKey)
        .maybeSingle();

      if (error) {
        setProgressError(error.message);
        setIsLoadingProgress(false);
        return;
      }

      if (data) {
        const progress = data as ProgressRow;

        setAnswers(getAnswersFromDatabase(progress.answers));
        setHasChecked(progress.has_attempted);
        applyProgress(progress);
      }

      setIsLoadingProgress(false);
    }

    void loadProgress();
  }, [lessonKey, supabase]);

  function getDraggedToken(event: DragEvent) {
    try {
      return JSON.parse(
        event.dataTransfer.getData('application/json'),
      ) as DraggedToken;
    } catch {
      return null;
    }
  }

  function startDragging(
    event: DragEvent,
    questionId: number,
    tokenId: string,
  ) {
    const draggedToken: DraggedToken = {
      questionId,
      tokenId,
    };

    event.dataTransfer.effectAllowed = 'move';

    event.dataTransfer.setData(
      'application/json',
      JSON.stringify(draggedToken),
    );
  }

  function addTokenToAnswer(
    questionId: number,
    tokenId: string,
  ) {
    if (hasChecked || isSavingProgress) return;

    setAnswers((current) => {
      const currentAnswer = current[questionId] ?? [];

      if (currentAnswer.includes(tokenId)) {
        return current;
      }

      return {
        ...current,
        [questionId]: [...currentAnswer, tokenId],
      };
    });
  }

  function removeTokenFromAnswer(
    questionId: number,
    tokenId: string,
  ) {
    if (hasChecked || isSavingProgress) return;

    setAnswers((current) => ({
      ...current,
      [questionId]: (current[questionId] ?? []).filter(
        (id) => id !== tokenId,
      ),
    }));
  }

  function moveTokenBefore(
    questionId: number,
    draggedTokenId: string,
    destinationTokenId: string,
  ) {
    if (hasChecked || isSavingProgress) return;

    setAnswers((current) => {
      const currentAnswer = current[questionId] ?? [];

      const withoutDraggedToken = currentAnswer.filter(
        (tokenId) => tokenId !== draggedTokenId,
      );

      const destinationIndex =
        withoutDraggedToken.indexOf(destinationTokenId);

      if (destinationIndex === -1) {
        return {
          ...current,
          [questionId]: [
            ...withoutDraggedToken,
            draggedTokenId,
          ],
        };
      }

      const nextAnswer = [...withoutDraggedToken];

      nextAnswer.splice(
        destinationIndex,
        0,
        draggedTokenId,
      );

      return {
        ...current,
        [questionId]: nextAnswer,
      };
    });
  }

  function dropInsideAnswer(
    event: DragEvent,
    questionId: number,
    destinationTokenId?: string,
  ) {
    event.preventDefault();

    const draggedToken = getDraggedToken(event);

    if (
      !draggedToken ||
      draggedToken.questionId !== questionId
    ) {
      return;
    }

    if (destinationTokenId) {
      moveTokenBefore(
        questionId,
        draggedToken.tokenId,
        destinationTokenId,
      );

      return;
    }

    setAnswers((current) => {
      const withoutDraggedToken = (
        current[questionId] ?? []
      ).filter(
        (tokenId) =>
          tokenId !== draggedToken.tokenId,
      );

      return {
        ...current,
        [questionId]: [
          ...withoutDraggedToken,
          draggedToken.tokenId,
        ],
      };
    });
  }

  function dropInsideBank(
    event: DragEvent,
    questionId: number,
  ) {
    event.preventDefault();

    const draggedToken = getDraggedToken(event);

    if (
      !draggedToken ||
      draggedToken.questionId !== questionId
    ) {
      return;
    }

    removeTokenFromAnswer(
      questionId,
      draggedToken.tokenId,
    );
  }

  async function handleCheckAnswers() {
    setIsSavingProgress(true);
    setProgressError(null);

    const answersForDatabase = Object.fromEntries(
      questions.map((question) => [
        question.id,
        (answers[question.id] ?? []).join('|'),
      ]),
    );

    const { data, error } = await supabase.rpc(
      'save_lesson_attempt',
      {
        p_lesson_key: lessonKey,
        p_answers: answersForDatabase,
        p_score: correctAnswers,
        p_total_questions: questions.length,
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

    applyProgress(data as ProgressRow);

    setHasChecked(true);
    setIsSavingProgress(false);
  }

  function handleRetry() {
    setAnswers({});
    setHasChecked(false);

    randomizeExercise();
  }

  async function setCompletion(
    completed: boolean,
  ) {
    setIsSavingProgress(true);
    setProgressError(null);

    const { data, error } = await supabase.rpc(
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

    applyProgress(data as ProgressRow);

    setIsSavingProgress(false);
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
        aria-labelledby="drag-exercise-title"
      >
        <div className={styles.exerciseHeader}>
          <div>
            <span className={styles.exerciseType}>
              DRAG AND DROP
            </span>

            <h3 id="drag-exercise-title">
              {title}
            </h3>

            <p>{instructions}</p>

            <p className={styles.clickHelp}>
              También puedes tocar una palabra para moverla.
            </p>
          </div>

          <span className={styles.totalQuestions}>
            {questions.length} preguntas
          </span>
        </div>

        {progressError && (
          <p
            className={styles.incorrectFeedback}
            role="alert"
          >
            {progressError}
          </p>
        )}

        <div className={styles.questions}>
          {questionOrder.map(
            (questionId, visibleIndex) => {
              const question = questions.find(
                (item) => item.id === questionId,
              );

              if (!question) return null;

              const selectedTokenIds =
                answers[question.id] ?? [];

              const availableTokenIds = (
                bankOrder[question.id] ??
                question.tokens.map(
                  (token) => token.id,
                )
              ).filter(
                (tokenId) =>
                  !selectedTokenIds.includes(
                    tokenId,
                  ),
              );

              const answerIsCorrect =
                arraysAreEqual(
                  selectedTokenIds,
                  question.correctOrder,
                );

              return (
                <article
                  className={styles.questionCard}
                  key={question.id}
                >
                  <span
                    className={
                      styles.questionNumber
                    }
                  >
                    {visibleIndex + 1}
                  </span>

                  <div
                    className={
                      styles.questionContent
                    }
                  >
                    <p
                      className={
                        styles.questionInstruction
                      }
                    >
                      Forma la oración correcta.
                    </p>

                    <div
                      className={styles.wordBank}
                      onDragOver={(event) =>
                        event.preventDefault()
                      }
                      onDrop={(event) =>
                        dropInsideBank(
                          event,
                          question.id,
                        )
                      }
                      aria-label={`Palabras disponibles para la pregunta ${
                        visibleIndex + 1
                      }`}
                    >
                      {availableTokenIds.map(
                        (tokenId) => {
                          const token =
                            getToken(
                              question,
                              tokenId,
                            );

                          if (!token) {
                            return null;
                          }

                          return (
                            <button
                              type="button"
                              className={
                                styles.wordChip
                              }
                              draggable={
                                !hasChecked &&
                                !isSavingProgress
                              }
                              disabled={
                                hasChecked ||
                                isSavingProgress
                              }
                              key={token.id}
                              onClick={() =>
                                addTokenToAnswer(
                                  question.id,
                                  token.id,
                                )
                              }
                              onDragStart={(
                                event,
                              ) =>
                                startDragging(
                                  event,
                                  question.id,
                                  token.id,
                                )
                              }
                              title={
                                token.translation
                              }
                            >
                              {token.word}
                            </button>
                          );
                        },
                      )}

                      {availableTokenIds.length ===
                        0 && (
                        <span
                          className={
                            styles.emptyBank
                          }
                        >
                          Todas las palabras están
                          abajo.
                        </span>
                      )}
                    </div>

                    <div
                      className={`${styles.answerZone} ${
                        hasChecked
                          ? answerIsCorrect
                            ? styles.correctZone
                            : styles.incorrectZone
                          : ''
                      }`}
                      onDragOver={(event) =>
                        event.preventDefault()
                      }
                      onDrop={(event) =>
                        dropInsideAnswer(
                          event,
                          question.id,
                        )
                      }
                      aria-label={`Tu respuesta para la pregunta ${
                        visibleIndex + 1
                      }`}
                    >
                      {selectedTokenIds.length ===
                      0 ? (
                        <span
                          className={
                            styles.answerPlaceholder
                          }
                        >
                          Arrastra las palabras aquí
                        </span>
                      ) : (
                        selectedTokenIds.map(
                          (tokenId) => {
                            const token =
                              getToken(
                                question,
                                tokenId,
                              );

                            if (!token) {
                              return null;
                            }

                            return (
                              <button
                                type="button"
                                className={
                                  styles.selectedChip
                                }
                                draggable={
                                  !hasChecked &&
                                  !isSavingProgress
                                }
                                disabled={
                                  hasChecked ||
                                  isSavingProgress
                                }
                                key={token.id}
                                onClick={() =>
                                  removeTokenFromAnswer(
                                    question.id,
                                    token.id,
                                  )
                                }
                                onDragOver={(
                                  event,
                                ) =>
                                  event.preventDefault()
                                }
                                onDragStart={(
                                  event,
                                ) =>
                                  startDragging(
                                    event,
                                    question.id,
                                    token.id,
                                  )
                                }
                                onDrop={(
                                  event,
                                ) => {
                                  event.stopPropagation();

                                  dropInsideAnswer(
                                    event,
                                    question.id,
                                    token.id,
                                  );
                                }}
                                title={`${token.translation}. Toca para devolverla.`}
                              >
                                {token.word}
                              </button>
                            );
                          },
                        )
                      )}
                    </div>

                    {hasChecked && (
                      <div
                        className={
                          answerIsCorrect
                            ? styles.correctFeedback
                            : styles.incorrectFeedback
                        }
                      >
                        {answerIsCorrect ? (
                          <p>✓ Correcto</p>
                        ) : (
                          <>
                            <p>
                              La respuesta correcta
                              es:
                            </p>

                            <strong>
                              {getCorrectSentence(
                                question,
                              )}
                            </strong>
                          </>
                        )}

                        <p
                          className={
                            styles.translation
                          }
                        >
                          {
                            question.sentenceTranslation
                          }
                        </p>

                        <div
                          className={
                            styles.sentenceAudio
                          }
                        >
                          <span
                            className={
                              styles.sentenceAudioLabel
                            }
                          >
                            Escuchar oración
                          </span>

                          <AudioPlayer
                            text={getCorrectSentence(
                              question,
                            )}
                            language={
                              englishVariant
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            },
          )}
        </div>

        {!hasChecked && (
          <button
            type="button"
            className={styles.checkButton}
            disabled={isSavingProgress}
            onClick={() =>
              void handleCheckAnswers()
            }
          >
            {isSavingProgress
              ? 'Guardando...'
              : 'Corregir ejercicio'}
          </button>
        )}

        {hasChecked && (
          <div
            className={styles.resultCard}
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
                {questions.length} correctas
              </h4>

              <p>
                {passedCurrentAttempt
                  ? '¡Muy bien! Aprobaste este ejercicio.'
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
                onClick={
                  handleRetry
                }
              >
                Repetir ejercicio
              </button>

              {passedCurrentAttempt &&
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
                Aprobaste el ejercicio con 7
                de 10 o más respuestas
                correctas.
              </p>
            </>
          ) : isCompleted &&
            completionSource ===
              'manual' ? (
            <>
              <h4>
                Marcaste esta lección como
                completada.
              </h4>

              <p>
                La marcaste sin hacer el
                ejercicio porque ya dominabas
                el tema.
              </p>
            </>
          ) : canRestoreCompletion ? (
            <>
              <h4>
                Desmarcaste esta lección como
                completada.
              </h4>

              <p>
                Ya habías aprobado el ejercicio
                y puedes volver a marcarla.
              </p>
            </>
          ) : hasAttempted ? (
            <>
              <h4>
                Esta lección todavía no está
                completada.
              </h4>

              <p>
                Ya hiciste un intento. Para
                completarla necesitas obtener
                al menos 7 de 10 respuestas
                correctas.
              </p>
            </>
          ) : (
            <>
              <h4>
                ¿Ya dominas este tema?
              </h4>

              <p>
                Puedes marcar esta lección como
                completada sin hacer el
                ejercicio.
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
                void setCompletion(false)
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
                void setCompletion(true)
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
                void setCompletion(true)
              }
            >
              Volver a marcar como completada
            </button>
          )}
        </div>
      </section>
    </>
  );
}