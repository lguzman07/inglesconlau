'use client';

import { useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import styles from './VocabularyButton.module.css';

type VocabularyButtonProps = {
  word: string;
  translation: string;
  lessonKey: string;
  exampleSentence?: string | null;
};

export default function VocabularyButton({
  word,
  translation,
  lessonKey,
  exampleSentence = null,
}: VocabularyButtonProps) {
  const supabaseRef =
    useRef<ReturnType<typeof createClient> | null>(null);

  if (!supabaseRef.current) {
    supabaseRef.current = createClient();
  }

  const supabase = supabaseRef.current;

  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function checkVocabulary() {
      setIsLoading(true);
      setError(null);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (cancelled) {
        return;
      }

      if (userError || !user) {
        setIsLoading(false);
        return;
      }

      const { data, error: vocabularyError } =
        await supabase
          .from('user_flashcards')
          .select('word')
          .eq('user_id', user.id);

      if (cancelled) {
        return;
      }

      if (vocabularyError) {
        setError(
          'No pudimos comprobar tu vocabulario.',
        );
        setIsLoading(false);
        return;
      }

      const normalizedWord = word
        .trim()
        .toLocaleLowerCase();

      const alreadySaved = (data ?? []).some(
        (item) =>
          String(item.word)
            .trim()
            .toLocaleLowerCase() === normalizedWord,
      );

      setIsSaved(alreadySaved);
      setIsLoading(false);
    }

    void checkVocabulary();

    return () => {
      cancelled = true;
    };
  }, [supabase, word]);

  async function addToVocabulary() {
    if (isSaved || isSaving) {
      return;
    }

    setError(null);
    setIsSaving(true);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setError(
        'Tu sesión terminó. Inicia sesión nuevamente.',
      );
      setIsSaving(false);
      return;
    }

    const { error: insertError } =
      await supabase
        .from('user_flashcards')
        .insert({
          user_id: user.id,
          word: word.trim(),
          translation: translation.trim(),
          example_sentence:
            exampleSentence?.trim() || null,
          lesson_key: lessonKey,
        });

    if (
      insertError &&
      insertError.code !== '23505'
    ) {
      setError(
        'No pudimos añadir esta palabra a tu vocabulario.',
      );
      setIsSaving(false);
      return;
    }

    setIsSaved(true);
    setIsSaving(false);
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.button} ${
          isSaved ? styles.saved : ''
        }`}
        disabled={
          isLoading ||
          isSaving ||
          isSaved
        }
        onClick={() =>
          void addToVocabulary()
        }
      >
        <span
          className={styles.icon}
          aria-hidden="true"
        >
          {isSaved ? '✓' : '+'}
        </span>

        <span>
          {isLoading
            ? 'Comprobando...'
            : isSaved
              ? 'En mi vocabulario'
              : isSaving
                ? 'Añadiendo...'
                : 'Añadir a mi vocabulario'}
        </span>
      </button>

      {error && (
        <span
          className={styles.error}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}