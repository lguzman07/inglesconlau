'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import styles from './FillInTheBlanks.module.css';

type TranslatableWord = {
  word: string;
  translation: string;
};

export type FillInTheBlanksQuestion = {
  id: number;
  before: TranslatableWord[];
  after: TranslatableWord[];
  answer: string;
  sentenceTranslation: string;
};

type ProgressRow = {
  answers: Record<string, string>;
  score: number | null;
  total_questions: number;
  has_attempted: boolean;
  is_completed: boolean;
  completion_source: 'manual' | 'automatic' | null;
};

type ActiveBubble =
  | {
      type: 'word';
      questionId: number;
      wordIndex: number;
    }
  | {
      type: 'sentence';
      questionId: number;
    }
  | null;

type FillInTheBlanksProps = {
  title: string;
  instructions: string;
  lessonKey: string;
  questions: FillInTheBlanksQuestion[];
  nextLessonHref?: string;
  englishVariant?: 'en' | 'en-GB';
};

const SILENT_AUDIO_SRC =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQAAAAAAA==';

function normalizeAnswer(value: string) {
  return value.trim().toLocaleLowerCase();
}

function getSentence(question: FillInTheBlanksQuestion) {
  return [
    ...question.before.map((item) => item.word),
    question.answer,
    ...question.after.map((item) => item.word),
  ].join(' ');
}

function getAnswersFromDatabase(value: unknown) {
  if (
    !value ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return {};
  }

  return Object.entries(value).reduce<Record<number, string>>(
    (result, [questionId, answer]) => {
      if (typeof answer === 'string') {
        result[Number(questionId)] = answer;
      }

      return result;
    },
    {},
  );
}

export default function FillInTheBlanks({
  title,
  instructions,
  lessonKey,
  questions,
  nextLessonHref,
  englishVariant = 'en',
}: FillInTheBlanksProps) {
  const supabaseRef =
    useRef<ReturnType<typeof createClient> | null>(null);

  if (!supabaseRef.current) {
    supabaseRef.current = createClient();
  }

  const supabase = supabaseRef.current;

  const [answers, setAnswers] = useState<
    Record<number, string>
  >({});

  const [hasChecked, setHasChecked] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [completionSource, setCompletionSource] =
    useState<'manual' | 'automatic' | null>(null);

  const [hasPassedAttempt, setHasPassedAttempt] =
    useState(false);

  const [isLoadingProgress, setIsLoadingProgress] =
    useState(true);

  const [isSavingProgress, setIsSavingProgress] =
    useState(false);

  const [progressError, setProgressError] =
    useState<string | null>(null);

  const [activeBubble, setActiveBubble] =
    useState<ActiveBubble>(null);

  const [playingText, setPlayingText] =
    useState<string | null>(null);

  const [audioError, setAudioError] =
    useState<string | null>(null);

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const audioUrlRef =
    useRef<string | null>(null);

  const audioRequestIdRef =
    useRef(0);

  const correctAnswers = questions.filter(
    (question) =>
      normalizeAnswer(
        answers[question.id] ?? '',
      ) === normalizeAnswer(question.answer),
  ).length;

  const passedCurrentAttempt =
    hasChecked && correctAnswers >= 7;

  const canMarkManually =
    !hasAttempted && !isCompleted;

  const canRestoreCompletion =
    !isCompleted &&
    hasPassedAttempt &&
    completionSource === null;

  function applyProgress(progress: ProgressRow) {
    setHasAttempted(progress.has_attempted);
    setIsCompleted(progress.is_completed);
    setCompletionSource(progress.completion_source);

    setHasPassedAttempt(
      progress.score !== null &&
        progress.score * 10 >=
          progress.total_questions * 7,
    );
  }

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
        const progress =
          data as ProgressRow;

        setAnswers(
          getAnswersFromDatabase(
            progress.answers,
          ),
        );

        setHasChecked(
          progress.has_attempted,
        );

        applyProgress(progress);
      }

      setIsLoadingProgress(false);
    }

    void loadProgress();
  }, [lessonKey, supabase]);

  useEffect(() => {
    function closeBubble(
      event: MouseEvent,
    ) {
      const target = event.target;

      if (
        target instanceof Element &&
        !target.closest(
          `.${styles.translationAnchor}`,
        )
      ) {
        setActiveBubble(null);
      }
    }

    document.addEventListener(
      'mousedown',
      closeBubble,
    );

    return () =>
      document.removeEventListener(
        'mousedown',
        closeBubble,
      );
  }, []);

  useEffect(() => {
    return () => {
      audioRequestIdRef.current += 1;

      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (audioUrlRef.current) {
        URL.revokeObjectURL(
          audioUrlRef.current,
        );
      }
    };
  }, []);

  function handleAnswerChange(
    questionId: number,
    value: string,
  ) {
    setAnswers(
      (currentAnswers) => ({
        ...currentAnswers,
        [questionId]: value,
      }),
    );

    setHasChecked(false);
  }

  async function handleCheckAnswers() {
    setIsSavingProgress(true);
    setProgressError(null);

    const answersForDatabase =
      Object.fromEntries(
        questions.map((question) => [
          question.id,
          answers[question.id] ?? '',
        ]),
      );

    const { data, error } =
      await supabase.rpc(
        'save_lesson_attempt',
        {
          p_lesson_key: lessonKey,
          p_answers:
            answersForDatabase,
          p_score:
            correctAnswers,
          p_total_questions:
            questions.length,
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
    setActiveBubble(null);
    setIsSavingProgress(false);
  }

  function handleRetry() {
    setAnswers({});
    setHasChecked(false);
    setActiveBubble(null);
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
          p_lesson_key:
            lessonKey,
          p_completed:
            completed,
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

  function stopAudio() {
    audioRequestIdRef.current += 1;

    if (audioRef.current) {
      audioRef.current.pause();

      audioRef.current.removeAttribute(
        'src',
      );

      audioRef.current.load();

      audioRef.current = null;
    }

    if (audioUrlRef.current) {
      URL.revokeObjectURL(
        audioUrlRef.current,
      );

      audioUrlRef.current = null;
    }

    setPlayingText(null);
  }

  async function playAudio(
    text: string,
  ) {
    if (playingText === text) {
      stopAudio();
      return;
    }

    stopAudio();

    setAudioError(null);

    const requestId =
      audioRequestIdRef.current + 1;

    audioRequestIdRef.current =
      requestId;

    setPlayingText(text);

    const audio = new Audio();

    audio.setAttribute(
      'playsinline',
      '',
    );

    audio.preload = 'auto';

    audioRef.current = audio;

    /*
      iOS/iPadOS Safari:
      intentamos activar el elemento de audio
      directamente durante el toque del usuario,
      pero NO esperamos este play().
    */
    audio.src = SILENT_AUDIO_SRC;

    const unlockPromise =
      audio.play();

    if (unlockPromise) {
      unlockPromise
        .then(() => {
          audio.pause();

          try {
            audio.currentTime = 0;
          } catch {
            // Safari puede impedir cambiar
            // currentTime en el audio silencioso.
          }
        })
        .catch(() => {
          /*
            No detenemos el proceso.
            Continuamos buscando el audio real.
          */
        });
    }

    try {
      const response =
        await fetch(
          '/api/tts',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body: JSON.stringify({
              text,
              language:
                englishVariant,
            }),
          },
        );

      if (!response.ok) {
        const errorText =
          await response.text();

        console.error(
          'TTS request failed:',
          {
            status:
              response.status,
            body:
              errorText,
          },
        );

        throw new Error(
          'TTS request failed',
        );
      }

      const audioBlob =
        await response.blob();

      if (
        !audioBlob.size ||
        requestId !==
          audioRequestIdRef.current
      ) {
        return;
      }

      const audioUrl =
        URL.createObjectURL(
          audioBlob,
        );

      audioUrlRef.current =
        audioUrl;

      audio.pause();

      audio.src = audioUrl;

      audio.load();

      audio.onended = () => {
        if (
          requestId ===
          audioRequestIdRef.current
        ) {
          setPlayingText(null);
        }

        if (
          audioUrlRef.current ===
          audioUrl
        ) {
          URL.revokeObjectURL(
            audioUrl,
          );

          audioUrlRef.current =
            null;
        }
      };

      audio.onerror = () => {
        if (
          requestId ===
          audioRequestIdRef.current
        ) {
          setPlayingText(null);

          setAudioError(
            'No se pudo reproducir el audio. Inténtalo otra vez.',
          );
        }

        if (
          audioUrlRef.current ===
          audioUrl
        ) {
          URL.revokeObjectURL(
            audioUrl,
          );

          audioUrlRef.current =
            null;
        }
      };

      await audio.play();
    } catch (error) {
      console.error(
        'Audio playback error:',
        error,
      );

      if (
        requestId ===
        audioRequestIdRef.current
      ) {
        setPlayingText(null);

        setAudioError(
          'No se pudo generar o reproducir el audio. Inténtalo otra vez.',
        );
      }
    }
  }

  function renderWord(
    item: TranslatableWord,
    questionId: number,
    wordIndex: number,
  ) {
    const isOpen =
      activeBubble?.type ===
        'word' &&
      activeBubble.questionId ===
        questionId &&
      activeBubble.wordIndex ===
        wordIndex;

    return (
      <span
        className={
          styles.translationAnchor
        }
        key={`${questionId}-${wordIndex}-${item.word}`}
      >
        <button
          type="button"
          className={
            styles.wordButton
          }
          onClick={() =>
            setActiveBubble(
              isOpen
                ? null
                : {
                    type: 'word',
                    questionId,
                    wordIndex,
                  },
            )
          }
        >
          {item.word}
        </button>

        {isOpen && (
          <span
            className={
              styles.translationBubble
            }
          >
            <span>
              {item.translation}
            </span>

            <button
              type="button"
              className={
                styles.audioButton
              }
              onClick={() =>
                void playAudio(
                  item.word,
                )
              }
            >
              {playingText ===
              item.word
                ? 'Detener audio'
                : '🔊 Escuchar'}
            </button>
          </span>
        )}
      </span>
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
        Cargando tu último intento...
      </section>
    );
  }

  return (
    <>
      <section
        className={
          styles.exercise
        }
        aria-labelledby="exercise-title"
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
              FILL IN THE BLANKS
            </span>

            <h3 id="exercise-title">
              {title}
            </h3>

            <p>
              {instructions}
            </p>
          </div>

          <span
            className={
              styles.totalQuestions
            }
          >
            {questions.length}{' '}
            preguntas
          </span>
        </div>

        {audioError && (
          <p
            className={
              styles.incorrectFeedback
            }
            role="alert"
          >
            {audioError}
          </p>
        )}

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
          className={
            styles.questions
          }
        >
          {questions.map(
            (question) => {
              const answerIsCorrect =
                normalizeAnswer(
                  answers[
                    question.id
                  ] ?? '',
                ) ===
                normalizeAnswer(
                  question.answer,
                );

              const inputState =
                hasChecked
                  ? answerIsCorrect
                    ? styles.correctInput
                    : styles.incorrectInput
                  : '';

              const sentence =
                getSentence(
                  question,
                );

              const sentenceBubbleOpen =
                activeBubble?.type ===
                  'sentence' &&
                activeBubble.questionId ===
                  question.id;

              return (
                <article
                  className={
                    styles.questionCard
                  }
                  key={
                    question.id
                  }
                >
                  <span
                    className={
                      styles.questionNumber
                    }
                  >
                    {question.id}
                  </span>

                  <div
                    className={
                      styles.questionContent
                    }
                  >
                    <div
                      className={
                        styles.sentenceRow
                      }
                    >
                      <p
                        className={
                          styles.sentence
                        }
                      >
                        {question.before.map(
                          (
                            item,
                            index,
                          ) =>
                            renderWord(
                              item,
                              question.id,
                              index,
                            ),
                        )}

                        <input
                          aria-label={`Respuesta para la pregunta ${question.id}`}
                          autoComplete="off"
                          className={`${styles.answerInput} ${inputState}`}
                          disabled={
                            hasChecked ||
                            isSavingProgress
                          }
                          maxLength={
                            40
                          }
                          onChange={(
                            event,
                          ) =>
                            handleAnswerChange(
                              question.id,
                              event
                                .target
                                .value,
                            )
                          }
                          placeholder="..."
                          spellCheck={
                            false
                          }
                          type="text"
                          value={
                            answers[
                              question
                                .id
                            ] ?? ''
                          }
                        />

                        {question.after.map(
                          (
                            item,
                            index,
                          ) =>
                            renderWord(
                              item,
                              question.id,
                              question
                                .before
                                .length +
                                index,
                            ),
                        )}
                      </p>

                      <span
                        className={
                          styles.translationAnchor
                        }
                      >
                        <button
                          type="button"
                          className={
                            styles.translateSentenceButton
                          }
                          onClick={() =>
                            setActiveBubble(
                              sentenceBubbleOpen
                                ? null
                                : {
                                    type:
                                      'sentence',
                                    questionId:
                                      question.id,
                                  },
                            )
                          }
                        >
                          Traducir
                          oración
                        </button>

                        {sentenceBubbleOpen && (
                          <span
                            className={`${styles.translationBubble} ${styles.sentenceBubble}`}
                          >
                            <span>
                              {
                                question.sentenceTranslation
                              }
                            </span>

                            <button
                              type="button"
                              className={
                                styles.audioButton
                              }
                              onClick={() =>
                                void playAudio(
                                  sentence,
                                )
                              }
                            >
                              {playingText ===
                              sentence
                                ? 'Detener audio'
                                : '🔊 Escuchar'}
                            </button>
                          </span>
                        )}
                      </span>
                    </div>

                    {hasChecked && (
                      <p
                        className={
                          answerIsCorrect
                            ? styles.correctFeedback
                            : styles.incorrectFeedback
                        }
                      >
                        {answerIsCorrect ? (
                          <>
                            ✓
                            Correcto
                          </>
                        ) : (
                          <>
                            La
                            respuesta
                            es{' '}
                            <strong>
                              {
                                question.answer
                              }
                            </strong>
                            .
                          </>
                        )}
                      </p>
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
            className={
              styles.checkButton
            }
            disabled={
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
                {correctAnswers}{' '}
                de{' '}
                {questions.length}{' '}
                correctas
              </h4>

              <p>
                {passedCurrentAttempt
                  ? '¡Muy bien! Aprobaste este ejercicio.'
                  : 'Necesitas 7 respuestas correctas para aprobar. Puedes intentarlo de nuevo.'}
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
                Repetir
                ejercicio
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
                    Siguiente
                    lección →
                  </Link>
                )}
            </div>
          </div>
        )}
      </section>

      <section
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
                Aprobaste el
                ejercicio con 7 de
                10 o más respuestas
                correctas.
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
                La marcaste sin
                hacer el ejercicio
                porque ya dominabas
                el tema.
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
                Ya habías aprobado
                el ejercicio y
                puedes volver a
                marcarla.
              </p>
            </>
          ) : hasAttempted ? (
            <>
              <h4>
                Esta lección todavía
                no está completada.
              </h4>

              <p>
                Ya hiciste un
                intento. Para
                completarla
                necesitas obtener al
                menos 7 de 10
                respuestas
                correctas.
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
    </>
  );
}