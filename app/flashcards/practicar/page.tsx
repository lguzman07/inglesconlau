'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import styles from './Practicar.module.css';

type ReviewFields = {
  ease_factor: number;
  interval_days: number;
  repetitions: number;
};

type SourceCard = ReviewFields & {
  id: string;
  word: string;
  translation: string;
};

type ExerciseType = 'choice' | 'type';

type SessionCard = SourceCard & {
  exerciseType: ExerciseType;
  choices: string[];
};

type AnswerState = {
  isAnswered: boolean;
  isCorrect: boolean;
  selectedChoice: string | null;
  typedValue: string;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildSessionQueue(
  cards: SourceCard[],
  wordPool: string[],
): SessionCard[] {
  const distinctPool = Array.from(new Set(wordPool));

  return shuffle(cards).map((card) => {
    const canUseChoice = distinctPool.length >= 4;
    const exerciseType: ExerciseType =
      canUseChoice && Math.random() < 0.5
        ? 'choice'
        : canUseChoice
          ? 'type'
          : 'type';

    if (exerciseType !== 'choice') {
      return { ...card, exerciseType, choices: [] };
    }

    const distractors = shuffle(
      distinctPool.filter((word) => word !== card.word),
    ).slice(0, 3);

    return {
      ...card,
      exerciseType,
      choices: shuffle([card.word, ...distractors]),
    };
  });
}

function computeNextReview(
  current: ReviewFields,
  isCorrect: boolean,
): ReviewFields & { due_at: string; last_reviewed_at: string } {
  let { ease_factor, interval_days, repetitions } = current;

  if (isCorrect) {
    repetitions += 1;

    if (repetitions === 1) interval_days = 1;
    else if (repetitions === 2) interval_days = 6;
    else interval_days = Math.max(1, Math.round(interval_days * ease_factor));

    ease_factor = Math.min(3, ease_factor + 0.1);
  } else {
    repetitions = 0;
    interval_days = 1;
    ease_factor = Math.max(1.3, ease_factor - 0.2);
  }

  const due_at = new Date(
    Date.now() + interval_days * 24 * 60 * 60 * 1000,
  ).toISOString();

  return {
    ease_factor,
    interval_days,
    repetitions,
    due_at,
    last_reviewed_at: new Date().toISOString(),
  };
}

const SESSION_LIMIT = 15;

export default function PracticarPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalSavedWords, setTotalSavedWords] = useState(0);
  const [dueCards, setDueCards] = useState<SourceCard[] | null>(null);
  const [queue, setQueue] = useState<SessionCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState<AnswerState>({
    isAnswered: false,
    isCorrect: false,
    selectedChoice: null,
    typedValue: '',
  });
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const currentCard = queue[currentIndex] ?? null;

  useEffect(() => {
    async function loadSession() {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace('/iniciar-sesion');
        return;
      }

      const [dueResult, allResult] = await Promise.all([
        supabase
          .from('user_flashcards')
          .select(
            'id, word, translation, ease_factor, interval_days, repetitions',
          )
          .eq('user_id', user.id)
          .lte('due_at', new Date().toISOString())
          .order('due_at', { ascending: true })
          .limit(SESSION_LIMIT),
        supabase
          .from('user_flashcards')
          .select('word')
          .eq('user_id', user.id),
      ]);

      if (dueResult.error || allResult.error) {
        setErrorMessage(
          'No pudimos cargar tus palabras para practicar. Inténtalo de nuevo.',
        );
        setIsLoading(false);
        return;
      }

      const due = (dueResult.data ?? []) as SourceCard[];
      const allWords = (
        (allResult.data ?? []) as { word: string }[]
      ).map((row) => row.word);

      setTotalSavedWords(allWords.length);
      setDueCards(due);
      setQueue(buildSessionQueue(due, allWords));
      setIsLoading(false);
    }

    void loadSession();
  }, [router]);

  async function startPracticingAllAnyway() {
    setIsLoading(true);
    setErrorMessage('');

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace('/iniciar-sesion');
      return;
    }

    const { data, error } = await supabase
      .from('user_flashcards')
      .select(
        'id, word, translation, ease_factor, interval_days, repetitions',
      )
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(SESSION_LIMIT);

    if (error) {
      setErrorMessage(
        'No pudimos cargar tus palabras para practicar. Inténtalo de nuevo.',
      );
      setIsLoading(false);
      return;
    }

    const cards = (data ?? []) as SourceCard[];
    setDueCards(cards);
    setQueue(buildSessionQueue(cards, cards.map((c) => c.word)));
    setCurrentIndex(0);
    setSessionCorrect(0);
    setIsLoading(false);
  }

  function resetAnswerState() {
    setAnswer({
      isAnswered: false,
      isCorrect: false,
      selectedChoice: null,
      typedValue: '',
    });
  }

  async function saveReviewResult(isCorrect: boolean) {
    if (!currentCard) return;

    setIsSaving(true);

    const nextReview = computeNextReview(
      {
        ease_factor: currentCard.ease_factor,
        interval_days: currentCard.interval_days,
        repetitions: currentCard.repetitions,
      },
      isCorrect,
    );

    const supabase = createClient();

    await supabase
      .from('user_flashcards')
      .update(nextReview)
      .eq('id', currentCard.id);

    setIsSaving(false);
  }

  function handleChoiceSelect(choice: string) {
    if (answer.isAnswered || !currentCard) return;

    const isCorrect = choice === currentCard.word;

    setAnswer({
      isAnswered: true,
      isCorrect,
      selectedChoice: choice,
      typedValue: '',
    });

    if (isCorrect) setSessionCorrect((count) => count + 1);
    void saveReviewResult(isCorrect);
  }

  function handleTypeSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (answer.isAnswered || !currentCard) return;

    const isCorrect =
      answer.typedValue.trim().toLocaleLowerCase() ===
      currentCard.word.trim().toLocaleLowerCase();

    setAnswer((current) => ({
      ...current,
      isAnswered: true,
      isCorrect,
    }));

    if (isCorrect) setSessionCorrect((count) => count + 1);
    void saveReviewResult(isCorrect);
  }

  function handleNext() {
    resetAnswerState();
    setCurrentIndex((index) => index + 1);
  }

  if (isLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.loading}>Preparando tu práctica...</p>
        </div>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.errorMessage} role="alert">
            {errorMessage}
          </p>
          <Link href="/flashcards" className={styles.secondaryLink}>
            ← Volver a mis flashcards
          </Link>
        </div>
      </main>
    );
  }

  if (totalSavedWords === 0) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.emptyState}>
            <p className={styles.eyebrow}>PRACTICAR</p>
            <h1>Todavía no tienes palabras guardadas</h1>
            <p>
              Guarda palabras desde tus lecciones para poder practicarlas
              aquí.
            </p>
            <Link href="/lecciones" className={styles.primaryLink}>
              Explorar lecciones
            </Link>
          </section>
        </div>
      </main>
    );
  }

  if (dueCards && dueCards.length === 0 && queue.length === 0) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.emptyState}>
            <p className={styles.eyebrow}>PRACTICAR</p>
            <h1>¡Ya repasaste todo por hoy!</h1>
            <p>
              No tienes palabras pendientes de repaso en este momento.
              Vuelve más tarde, o practica todas tus palabras de todas
              formas.
            </p>
            <div className={styles.emptyActions}>
              <button
                type="button"
                className={styles.primaryLink}
                onClick={() => void startPracticingAllAnyway()}
              >
                Practicar todas de todas formas
              </button>
              <Link href="/flashcards" className={styles.secondaryLink}>
                ← Volver a mis flashcards
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (!currentCard) {
    const total = queue.length;
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.emptyState}>
            <p className={styles.eyebrow}>¡LISTO!</p>
            <h1>
              Acertaste {sessionCorrect} de {total}{' '}
              {total === 1 ? 'palabra' : 'palabras'}
            </h1>
            <p>
              {sessionCorrect === total
                ? 'Excelente trabajo, dominaste todas las palabras de hoy.'
                : 'Sigue practicando: las palabras que fallaste volverán a aparecer pronto.'}
            </p>
            <div className={styles.emptyActions}>
              <Link href="/flashcards" className={styles.primaryLink}>
                Volver a mis flashcards
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/flashcards" className={styles.backLink}>
            ← Salir de la práctica
          </Link>
          <span className={styles.progress}>
            {currentIndex + 1} de {queue.length}
          </span>
        </header>

        <section className={styles.card}>
          <p className={styles.prompt}>
            {currentCard.exerciseType === 'choice'
              ? '¿Cuál es la palabra en inglés?'
              : 'Escribe la palabra en inglés'}
          </p>

          <strong className={styles.translation}>
            {currentCard.translation}
          </strong>

          {currentCard.exerciseType === 'choice' ? (
            <div className={styles.choices}>
              {currentCard.choices.map((choice) => {
                const isSelected = answer.selectedChoice === choice;
                const isCorrectChoice = choice === currentCard.word;

                const stateClass = !answer.isAnswered
                  ? ''
                  : isCorrectChoice
                    ? styles.choiceCorrect
                    : isSelected
                      ? styles.choiceIncorrect
                      : '';

                return (
                  <button
                    key={choice}
                    type="button"
                    className={`${styles.choiceButton} ${stateClass}`}
                    disabled={answer.isAnswered}
                    onClick={() => handleChoiceSelect(choice)}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          ) : (
            <form
              className={styles.typeForm}
              onSubmit={handleTypeSubmit}
            >
              <input
                type="text"
                className={`${styles.typeInput} ${
                  answer.isAnswered
                    ? answer.isCorrect
                      ? styles.typeInputCorrect
                      : styles.typeInputIncorrect
                    : ''
                }`}
                value={answer.typedValue}
                disabled={answer.isAnswered}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                onChange={(event) =>
                  setAnswer((current) => ({
                    ...current,
                    typedValue: event.target.value,
                  }))
                }
              />

              {!answer.isAnswered && (
                <button type="submit" className={styles.checkButton}>
                  Comprobar
                </button>
              )}
            </form>
          )}

          {answer.isAnswered && (
            <div
              className={`${styles.feedback} ${
                answer.isCorrect
                  ? styles.feedbackCorrect
                  : styles.feedbackIncorrect
              }`}
              role="status"
            >
              {answer.isCorrect ? (
                <p>¡Correcto!</p>
              ) : (
                <p>
                  La palabra correcta es <strong>{currentCard.word}</strong>
                </p>
              )}

              <button
                type="button"
                className={styles.nextButton}
                disabled={isSaving}
                onClick={handleNext}
              >
                Siguiente →
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
