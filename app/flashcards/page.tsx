'use client';

import Link from 'next/link';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import styles from './page.module.css';

type Flashcard = {
  id: string;
  word: string;
  translation: string;
  example_sentence: string | null;
  lesson_key: string | null;
  created_at: string;
};

type EnglishPronunciation =
  | 'american'
  | 'british';

const SILENT_AUDIO_SRC =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQAAAAAAA==';

export default function FlashcardsPage() {
  const router = useRouter();

  const [flashcards, setFlashcards] =
    useState<Flashcard[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [errorMessage, setErrorMessage] =
    useState('');

  const [audioError, setAudioError] =
    useState('');

  const [flippedIds, setFlippedIds] =
    useState<Set<string>>(
      new Set(),
    );

  const [deletingId, setDeletingId] =
    useState<string | null>(
      null,
    );

  const [pendingDeleteId, setPendingDeleteId] =
    useState<string | null>(
      null,
    );

  const [search, setSearch] =
    useState('');

  const [dueCount, setDueCount] =
    useState<number | null>(null);

  const [
    englishPronunciation,
    setEnglishPronunciation,
  ] =
    useState<EnglishPronunciation>(
      'american',
    );

  const [playingText, setPlayingText] =
    useState<string | null>(
      null,
    );

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null,
    );

  const audioUrlRef =
    useRef<string | null>(
      null,
    );

  const audioRequestIdRef =
    useRef(0);

  useEffect(() => {
    async function loadFlashcards() {
      const supabase =
        createClient();

      const {
        data: { user },
        error: userError,
      } =
        await supabase.auth.getUser();

      if (
        userError ||
        !user
      ) {
        router.replace(
          '/iniciar-sesion',
        );

        return;
      }

      const [
        flashcardsResult,
        profileResult,
      ] =
        await Promise.all([
          supabase
            .from(
              'user_flashcards',
            )
            .select(
              `
                id,
                word,
                translation,
                example_sentence,
                lesson_key,
                created_at
              `,
            )
            .eq(
              'user_id',
              user.id,
            )
            .order(
              'created_at',
              {
                ascending: false,
              },
            ),

          supabase
            .from('profiles')
            .select(
              'english_pronunciation',
            )
            .eq(
              'id',
              user.id,
            )
            .maybeSingle(),
        ]);

      if (
        flashcardsResult.error
      ) {
        setErrorMessage(
          'No pudimos cargar tus flashcards.',
        );

        setIsLoading(false);

        return;
      }

      setFlashcards(
        (
          flashcardsResult.data ??
          []
        ) as Flashcard[],
      );

      const pronunciation =
        profileResult.data
          ?.english_pronunciation;

      if (
        pronunciation ===
          'american' ||
        pronunciation ===
          'british'
      ) {
        setEnglishPronunciation(
          pronunciation,
        );
      }

      setIsLoading(false);

      const dueResult = await supabase
        .from('user_flashcards')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .lte('due_at', new Date().toISOString());

      if (!dueResult.error) {
        setDueCount(dueResult.count ?? 0);
      }
    }

    void loadFlashcards();
  }, [router]);

  useEffect(() => {
    return () => {
      audioRequestIdRef.current +=
        1;

      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (
        audioUrlRef.current
      ) {
        URL.revokeObjectURL(
          audioUrlRef.current,
        );
      }
    };
  }, []);

  const filteredFlashcards =
    useMemo(() => {
      const normalizedSearch =
        search
          .trim()
          .toLocaleLowerCase();

      if (!normalizedSearch) {
        return flashcards;
      }

      return flashcards.filter(
        (flashcard) =>
          flashcard.word
            .toLocaleLowerCase()
            .includes(
              normalizedSearch,
            ) ||
          flashcard.translation
            .toLocaleLowerCase()
            .includes(
              normalizedSearch,
            ) ||
          flashcard.example_sentence
            ?.toLocaleLowerCase()
            .includes(
              normalizedSearch,
            ),
      );
    }, [flashcards, search]);

  function toggleCard(
    id: string,
  ) {
    setFlippedIds(
      (current) => {
        const next =
          new Set(current);

        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }

        return next;
      },
    );
  }

  function stopAudio() {
    audioRequestIdRef.current +=
      1;

    if (audioRef.current) {
      audioRef.current.pause();

      audioRef.current.removeAttribute(
        'src',
      );

      audioRef.current.load();

      audioRef.current =
        null;
    }

    if (
      audioUrlRef.current
    ) {
      URL.revokeObjectURL(
        audioUrlRef.current,
      );

      audioUrlRef.current =
        null;
    }

    setPlayingText(null);
  }

  async function playAudio(
    text: string,
  ) {
    if (
      playingText === text
    ) {
      stopAudio();

      return;
    }

    stopAudio();
    setAudioError('');

    const requestId =
      audioRequestIdRef.current +
      1;

    audioRequestIdRef.current =
      requestId;

    setPlayingText(text);

    const audio =
      new Audio();

    audio.setAttribute(
      'playsinline',
      '',
    );

    audio.preload =
      'auto';

    audioRef.current =
      audio;

    audio.src =
      SILENT_AUDIO_SRC;

    const unlockPromise =
      audio.play();

    if (unlockPromise) {
      unlockPromise
        .then(() => {
          audio.pause();

          try {
            audio.currentTime =
              0;
          } catch {
            // Safari puede impedirlo.
          }
        })
        .catch(() => {
          // Continuamos con el audio real.
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

            body: JSON.stringify(
              {
                text,

                language:
                  englishPronunciation ===
                  'british'
                    ? 'en-GB'
                    : 'en',
              },
            ),
          },
        );

      if (!response.ok) {
        const errorText =
          await response.text();

        setPlayingText(null);

        setAudioError(
          `No pudimos reproducir el audio. ${errorText}`,
        );

        return;
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

      audio.src =
        audioUrl;

      audio.load();

      audio.onended = () => {
        if (
          requestId ===
          audioRequestIdRef.current
        ) {
          setPlayingText(
            null,
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

      audio.onerror = () => {
        if (
          requestId ===
          audioRequestIdRef.current
        ) {
          setPlayingText(
            null,
          );

          setAudioError(
            'El navegador no pudo reproducir el audio.',
          );
        }
      };

      await audio.play();
    } catch (error) {
      setPlayingText(null);

      setAudioError(
        error instanceof Error
          ? error.message
          : 'No pudimos reproducir el audio.',
      );
    }
  }

  async function handleDelete(
    id: string,
  ) {
    if (deletingId) {
      return;
    }

    setPendingDeleteId(null);
    setDeletingId(id);
    setErrorMessage('');

    const supabase =
      createClient();

    const {
      data: { user },
    } =
      await supabase.auth.getUser();

    if (!user) {
      setErrorMessage(
        'Tu sesión terminó. Inicia sesión nuevamente.',
      );

      setDeletingId(null);

      return;
    }

    const { error } =
      await supabase
        .from(
          'user_flashcards',
        )
        .delete()
        .eq('id', id)
        .eq(
          'user_id',
          user.id,
        );

    if (error) {
      setErrorMessage(
        'No pudimos eliminar esta palabra.',
      );

      setDeletingId(null);

      return;
    }

    setFlashcards(
      (current) =>
        current.filter(
          (flashcard) =>
            flashcard.id !== id,
        ),
    );

    setFlippedIds(
      (current) => {
        const next =
          new Set(current);

        next.delete(id);

        return next;
      },
    );

    setDeletingId(null);
  }

  if (isLoading) {
    return (
      <main
        className={
          styles.page
        }
      >
        <div
          className={
            styles.container
          }
        >
          <p
            className={
              styles.loading
            }
          >
            Cargando tus
            flashcards...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={styles.page}
    >
      <div
        className={
          styles.container
        }
      >
        <header
          className={
            styles.header
          }
        >
          <div>
            <p
              className={
                styles.eyebrow
              }
            >
              VOCABULARY BUILDING
            </p>

            <h1>
              Tus flashcards
            </h1>

            <p
              className={
                styles.description
              }
            >
              Aquí encontrarás
              las palabras que
              hayas añadido desde
              tus lecciones para
              repasarlas cuando
              quieras.
            </p>
          </div>

          <Link
            href="/inicio"
            className={
              styles.backLink
            }
          >
            ← Volver al inicio
          </Link>
        </header>

        <section
          className={
            styles.summaryCard
          }
        >
          <div>
            <span
              className={
                styles.summaryLabel
              }
            >
              PALABRAS GUARDADAS
            </span>

            <strong
              className={
                styles.summaryNumber
              }
            >
              {
                flashcards.length
              }
            </strong>
          </div>

          <div
            className={
              styles.summaryActions
            }
          >
            {dueCount !== null &&
            dueCount > 0 ? (
              <span
                className={
                  styles.dueBadge
                }
              >
                {dueCount}{' '}
                {dueCount === 1
                  ? 'palabra'
                  : 'palabras'}{' '}
                para repasar hoy
              </span>
            ) : null}

            <Link
              href="/flashcards/practicar"
              className={
                styles.practiceButton
              }
            >
              Practicar →
            </Link>
          </div>
        </section>

        {errorMessage && (
          <p
            className={
              styles.errorMessage
            }
            role="alert"
          >
            {errorMessage}
          </p>
        )}

        {audioError && (
          <p
            className={
              styles.errorMessage
            }
            role="alert"
          >
            {audioError}
          </p>
        )}

        {flashcards.length ===
        0 ? (
          <section
            className={
              styles.emptyState
            }
          >
            <div
              className={
                styles.emptyIcon
              }
            >
              Aa
            </div>

            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                TODAVÍA NO HAY
                PALABRAS
              </p>

              <h2>
                Construye tu
                vocabulario poco
                a poco
              </h2>

              <p>
                Cuando encuentres
                una palabra nueva
                en una lección,
                usa{' '}
                <strong>
                  Add to
                  flashcards
                </strong>
                . Aparecerá
                automáticamente
                aquí.
              </p>

              <Link
                href="/lecciones"
                className={
                  styles.primaryLink
                }
              >
                Explorar lecciones
              </Link>
            </div>
          </section>
        ) : (
          <>
            <div
              className={
                styles.toolbar
              }
            >
              <label
                className={
                  styles.searchField
                }
              >
                <span
                  className={
                    styles.searchLabel
                  }
                >
                  Buscar
                </span>

                <input
                  type="search"
                  value={search}
                  onChange={(
                    event,
                  ) =>
                    setSearch(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Busca una palabra o traducción"
                />
              </label>

              <span
                className={
                  styles.resultCount
                }
              >
                {
                  filteredFlashcards.length
                }{' '}
                {filteredFlashcards.length ===
                1
                  ? 'palabra'
                  : 'palabras'}
              </span>
            </div>

            {filteredFlashcards.length ===
            0 ? (
              <section
                className={
                  styles.noResults
                }
              >
                <h2>
                  No encontramos
                  esa palabra
                </h2>

                <p>
                  Prueba con otro
                  término en inglés
                  o español.
                </p>
              </section>
            ) : (
              <section
                className={
                  styles.grid
                }
                aria-label="Tus flashcards"
              >
                {filteredFlashcards.map(
                  (
                    flashcard,
                  ) => {
                    const isFlipped =
                      flippedIds.has(
                        flashcard.id,
                      );

                    const isPlayingWord =
                      playingText ===
                      flashcard.word;

                    const isPlayingSentence =
                      flashcard.example_sentence
                        ? playingText ===
                          flashcard.example_sentence
                        : false;

                    return (
                      <article
                        className={
                          styles.cardWrapper
                        }
                        key={
                          flashcard.id
                        }
                      >
                        <div
                          className={
                            styles.flashcardContainer
                          }
                        >
                          <button
                            type="button"
                            className={`${styles.flashcard} ${
                              isFlipped
                                ? styles.flashcardFlipped
                                : ''
                            }`}
                            onClick={() =>
                              toggleCard(
                                flashcard.id,
                              )
                            }
                            aria-pressed={
                              isFlipped
                            }
                          >
                            <span
                              className={
                                styles.cardHint
                              }
                            >
                              {isFlipped
                                ? 'ESPAÑOL'
                                : 'ENGLISH'}
                            </span>

                            <strong
                              className={
                                styles.cardWord
                              }
                            >
                              {isFlipped
                                ? flashcard.translation
                                : flashcard.word}
                            </strong>

                            <span
                              className={
                                styles.flipHint
                              }
                            >
                              {isFlipped
                                ? 'Toca para ver el inglés'
                                : 'Toca para ver el español'}
                            </span>
                          </button>

                          <button
                            type="button"
                            className={
                              styles.audioButton
                            }
                            onClick={(
                              event,
                            ) => {
                              event.stopPropagation();

                              void playAudio(
                                flashcard.word,
                              );
                            }}
                            aria-label={`Escuchar ${flashcard.word}`}
                          >
                            {isPlayingWord
                              ? '■'
                              : '🔊'}
                          </button>
                        </div>

                        <div
                          className={
                            styles.cardDetails
                          }
                        >
                          {flashcard.example_sentence && (
                            <div
                              className={
                                styles.exampleRow
                              }
                            >
                              <p
                                className={
                                  styles.exampleSentence
                                }
                              >
                                “
                                {
                                  flashcard.example_sentence
                                }
                                ”
                              </p>

                              <button
                                type="button"
                                className={
                                  styles.sentenceAudioButton
                                }
                                onClick={() =>
                                  void playAudio(
                                    flashcard.example_sentence!,
                                  )
                                }
                                aria-label="Escuchar oración"
                              >
                                {isPlayingSentence
                                  ? '■'
                                  : '🔊'}
                              </button>
                            </div>
                          )}

                          {flashcard.lesson_key && (
                            <Link
                              href={`/lecciones/${flashcard.lesson_key}`}
                              className={
                                styles.lessonLink
                              }
                            >
                              Ver lección
                              de origen →
                            </Link>
                          )}

                          {pendingDeleteId ===
                          flashcard.id ? (
                            <div
                              className={
                                styles.deleteConfirm
                              }
                              role="group"
                              aria-label="Confirmar eliminación"
                            >
                              <span>
                                ¿Eliminar esta palabra?
                              </span>

                              <div
                                className={
                                  styles.deleteConfirmButtons
                                }
                              >
                                <button
                                  type="button"
                                  className={
                                    styles.deleteConfirmYes
                                  }
                                  disabled={
                                    deletingId ===
                                    flashcard.id
                                  }
                                  onClick={() =>
                                    void handleDelete(
                                      flashcard.id,
                                    )
                                  }
                                >
                                  {deletingId ===
                                  flashcard.id
                                    ? 'Eliminando...'
                                    : 'Sí, eliminar'}
                                </button>

                                <button
                                  type="button"
                                  className={
                                    styles.deleteConfirmNo
                                  }
                                  disabled={
                                    deletingId ===
                                    flashcard.id
                                  }
                                  onClick={() =>
                                    setPendingDeleteId(
                                      null,
                                    )
                                  }
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className={
                                styles.deleteButton
                              }
                              onClick={() =>
                                setPendingDeleteId(
                                  flashcard.id,
                                )
                              }
                            >
                              Eliminar
                            </button>
                          )}
                        </div>
                      </article>
                    );
                  },
                )}
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}