'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import styles from './LessonSearch.module.css';

export type SearchableLesson = {
  level: string;
  number: number;
  title: string;
  altTitle?: string;
};

type LessonSearchProps = {
  lessons: SearchableLesson[];
};

const MAX_RESULTS = 20;

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, '')
    .toLowerCase();
}

export default function LessonSearch({ lessons }: LessonSearchProps) {
  const [query, setQuery] = useState('');

  const indexed = useMemo(
    () =>
      lessons.map((lesson) => ({
        ...lesson,
        haystack: normalize(
          `${lesson.title} ${lesson.altTitle ?? ''}`,
        ),
      })),
    [lessons],
  );

  const terms = normalize(query).split(/\s+/).filter(Boolean);

  const results =
    terms.length === 0
      ? []
      : indexed.filter((lesson) =>
          terms.every((term) => lesson.haystack.includes(term)),
        );

  return (
    <div className={styles.search}>
      <label htmlFor="lesson-search" className={styles.label}>
        Buscar una lección por nombre
      </label>

      <div className={styles.inputWrap}>
        <span className={styles.icon} aria-hidden="true">
          ⌕
        </span>

        <input
          id="lesson-search"
          type="search"
          className={styles.input}
          placeholder="Ej.: present perfect, colores, restaurante…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
      </div>

      {terms.length > 0 ? (
        <div aria-live="polite">
          {results.length === 0 ? (
            <p className={styles.empty}>
              No encontramos lecciones con “{query.trim()}”.
            </p>
          ) : (
            <>
              <p className={styles.count}>
                {results.length === 1
                  ? '1 lección encontrada'
                  : `${results.length} lecciones encontradas`}
                {results.length > MAX_RESULTS
                  ? ` · mostrando las primeras ${MAX_RESULTS}`
                  : ''}
              </p>

              <ul className={styles.results}>
                {results.slice(0, MAX_RESULTS).map((lesson) => (
                  <li key={`${lesson.level}/${lesson.number}`}>
                    <Link
                      href={`/lecciones/${lesson.level}/${lesson.number}`}
                      className={styles.result}
                    >
                      <span className={styles.badge}>
                        {lesson.level.toUpperCase()} · {lesson.number}
                      </span>

                      <span className={styles.resultTitle}>
                        {lesson.title}
                      </span>

                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
