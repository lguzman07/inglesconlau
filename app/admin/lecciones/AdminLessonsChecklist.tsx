'use client';

import { useMemo, useState } from 'react';

import styles from './page.module.css';

export type LessonChecklistItem = {
  level: string;
  number: number;
  title: string;
  hasPdf: boolean;
  hasExercises: boolean;
  hasVideo: boolean;
};

type LevelInfo = { slug: string; code: string };

const levelLabels: Record<string, string> = {
  a1: 'Principiante',
  a2: 'Básico',
  b1: 'Intermedio',
  b2: 'Intermedio avanzado',
  c1: 'Avanzado',
};

function lessonKey(lesson: { level: string; number: number }) {
  return `${lesson.level}/${lesson.number}`;
}

export default function AdminLessonsChecklist({
  levels,
  initialLessons,
}: {
  levels: LevelInfo[];
  initialLessons: LessonChecklistItem[];
}) {
  const [lessons] = useState(initialLessons);
  const [activeLevel, setActiveLevel] = useState<string>('all');
  const [onlyPending, setOnlyPending] = useState(false);

  const totals = useMemo(() => {
    const byLevel = new Map<string, { total: number; video: number; pdf: number; exercises: number }>();

    for (const lesson of lessons) {
      const current = byLevel.get(lesson.level) ?? { total: 0, video: 0, pdf: 0, exercises: 0 };
      current.total += 1;
      if (lesson.hasVideo) current.video += 1;
      if (lesson.hasPdf) current.pdf += 1;
      if (lesson.hasExercises) current.exercises += 1;
      byLevel.set(lesson.level, current);
    }

    return byLevel;
  }, [lessons]);

  const overall = useMemo(() => {
    let total = 0;
    let video = 0;
    let pdf = 0;
    let exercises = 0;

    for (const lesson of lessons) {
      total += 1;
      if (lesson.hasVideo) video += 1;
      if (lesson.hasPdf) pdf += 1;
      if (lesson.hasExercises) exercises += 1;
    }

    return { total, video, pdf, exercises };
  }, [lessons]);

  const visibleLevels = activeLevel === 'all' ? levels : levels.filter((level) => level.slug === activeLevel);

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <div>
          <h2>Resumen general</h2>
          <p>
            {overall.video} / {overall.total} con video · {overall.pdf} / {overall.total} con PDF ·{' '}
            {overall.exercises} / {overall.total} con ejercicios
          </p>
        </div>
      </div>

      <div className={styles.filterRow}>
        <div className={styles.levelFilter}>
          <button
            type="button"
            className={activeLevel === 'all' ? styles.levelFilterActive : ''}
            onClick={() => setActiveLevel('all')}
          >
            Todos
          </button>
          {levels.map((level) => (
            <button
              key={level.slug}
              type="button"
              className={activeLevel === level.slug ? styles.levelFilterActive : ''}
              onClick={() => setActiveLevel(level.slug)}
            >
              {level.code}
            </button>
          ))}
        </div>

        <label className={styles.activeToggle}>
          <input
            type="checkbox"
            checked={onlyPending}
            onChange={(event) => setOnlyPending(event.target.checked)}
          />
          Mostrar solo pendientes
        </label>
      </div>

      {visibleLevels.map((level) => {
        const levelLessons = lessons
          .filter((lesson) => lesson.level === level.slug)
          .filter((lesson) => !onlyPending || !(lesson.hasVideo && lesson.hasPdf && lesson.hasExercises));

        const levelTotals = totals.get(level.slug) ?? { total: 0, video: 0, pdf: 0, exercises: 0 };

        return (
          <details key={level.slug} className={styles.levelGroup} open={activeLevel !== 'all'}>
            <summary>
              <span className={styles.levelBadge}>{level.code}</span>
              <span className={styles.levelGroupTitle}>{levelLabels[level.slug] ?? level.slug}</span>
              <span className={styles.levelGroupCounts}>
                🎬 {levelTotals.video}/{levelTotals.total} · 📄 {levelTotals.pdf}/{levelTotals.total} · 📝{' '}
                {levelTotals.exercises}/{levelTotals.total}
              </span>
            </summary>

            {levelLessons.length === 0 ? (
              <p className={styles.emptyState}>No hay lecciones pendientes en este nivel. 🎉</p>
            ) : (
              <ul className={styles.lessonChecklist}>
                {levelLessons.map((lesson) => {
                  const key = lessonKey(lesson);

                  return (
                    <li key={key} className={styles.lessonChecklistRow}>
                      <span className={styles.lessonChecklistNumber}>
                        {String(lesson.number).padStart(2, '0')}
                      </span>

                      <span className={styles.lessonChecklistTitle}>{lesson.title}</span>

                      <span className={styles.lessonChecklistParts}>
                        <span
                          className={`${styles.partPill} ${lesson.hasVideo ? styles.partPillDone : styles.partPillPending} ${styles.partPillReadOnly}`}
                          title="Se detecta automáticamente del contenido publicado"
                        >
                          {lesson.hasVideo ? '✓' : '○'} Video
                        </span>

                        <span
                          className={`${styles.partPill} ${lesson.hasPdf ? styles.partPillDone : styles.partPillPending} ${styles.partPillReadOnly}`}
                          title="Se detecta automáticamente del contenido publicado"
                        >
                          {lesson.hasPdf ? '✓' : '○'} PDF
                        </span>

                        <span
                          className={`${styles.partPill} ${lesson.hasExercises ? styles.partPillDone : styles.partPillPending} ${styles.partPillReadOnly}`}
                          title="Se detecta automáticamente del contenido publicado"
                        >
                          {lesson.hasExercises ? '✓' : '○'} Ejercicios
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </details>
        );
      })}
    </div>
  );
}
