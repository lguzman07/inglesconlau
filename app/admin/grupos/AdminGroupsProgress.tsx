'use client';

import { useMemo, useState } from 'react';

import { lessonTitles } from '@/content/lecciones/catalog';
import { createClient } from '@/lib/supabase/client';

import styles from './page.module.css';

export type GroupSchedule = {
  id: string;
  code: string;
  label: string;
  level: string;
  starts_at: string;
  ends_at: string;
};

const levelOrder = [
  { slug: 'a1', code: 'A1' },
  { slug: 'a2', code: 'A2' },
  { slug: 'b1', code: 'B1' },
  { slug: 'b2', code: 'B2' },
  { slug: 'c1', code: 'C1' },
];

function givenKey(scheduleId: string, lessonNumber: number) {
  return `${scheduleId}/${lessonNumber}`;
}

function formatTime(value: string) {
  const [hoursText, minutesText] = value.split(':');
  const hours = Number(hoursText);
  const minutes = Number(minutesText);
  const period = hours >= 12 ? 'p. m.' : 'a. m.';
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}

function getLessonNumbers(level: string) {
  const titles = lessonTitles[level] ?? {};

  return Object.keys(titles)
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0)
    .sort((a, b) => a - b);
}

export default function AdminGroupsProgress({
  schedules,
  initialGiven,
}: {
  schedules: GroupSchedule[];
  initialGiven: string[];
}) {
  const [activeLevel, setActiveLevel] = useState<string>('all');
  const [given, setGiven] = useState(
    () => new Set(initialGiven),
  );
  const [savingKey, setSavingKey] = useState<string | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState('');

  const levelsWithSchedules = useMemo(
    () =>
      levelOrder.filter((level) =>
        schedules.some((schedule) => schedule.level === level.slug),
      ),
    [schedules],
  );

  const visibleSchedules =
    activeLevel === 'all'
      ? schedules
      : schedules.filter(
          (schedule) => schedule.level === activeLevel,
        );

  async function toggleGiven(
    schedule: GroupSchedule,
    lessonNumber: number,
  ) {
    const key = givenKey(schedule.id, lessonNumber);

    if (savingKey) return;

    setSavingKey(key);
    setErrorMessage('');

    const supabase = createClient();
    const isCurrentlyGiven = given.has(key);

    if (isCurrentlyGiven) {
      const { error } = await supabase
        .from('group_schedule_lesson_log')
        .delete()
        .eq('schedule_id', schedule.id)
        .eq('lesson_number', lessonNumber);

      if (error) {
        setErrorMessage(
          'No pudimos guardar el cambio. ' + error.message,
        );
      } else {
        setGiven((current) => {
          const next = new Set(current);
          next.delete(key);
          return next;
        });
      }
    } else {
      const { error } = await supabase
        .from('group_schedule_lesson_log')
        .upsert({
          schedule_id: schedule.id,
          lesson_number: lessonNumber,
        });

      if (error) {
        setErrorMessage(
          'No pudimos guardar el cambio. ' + error.message,
        );
      } else {
        setGiven((current) => {
          const next = new Set(current);
          next.add(key);
          return next;
        });
      }
    }

    setSavingKey(null);
  }

  return (
    <div className={styles.panel}>
      <div className={styles.filterRow}>
        <div className={styles.levelFilter}>
          <button
            type="button"
            className={
              activeLevel === 'all'
                ? styles.levelFilterActive
                : ''
            }
            onClick={() => setActiveLevel('all')}
          >
            Todos
          </button>

          {levelsWithSchedules.map((level) => (
            <button
              key={level.slug}
              type="button"
              className={
                activeLevel === level.slug
                  ? styles.levelFilterActive
                  : ''
              }
              onClick={() => setActiveLevel(level.slug)}
            >
              {level.code}
            </button>
          ))}
        </div>
      </div>

      {errorMessage && (
        <p className={styles.errorBox} role="alert">
          {errorMessage}
        </p>
      )}

      {visibleSchedules.length === 0 ? (
        <p className={styles.emptyState}>
          No hay grupos configurados todavía.
        </p>
      ) : (
        visibleSchedules.map((schedule) => {
          const lessonNumbers = getLessonNumbers(
            schedule.level,
          );

          const givenCount = lessonNumbers.filter((number) =>
            given.has(givenKey(schedule.id, number)),
          ).length;

          return (
            <details
              key={schedule.id}
              className={styles.groupCard}
            >
              <summary>
                <span className={styles.levelBadge}>
                  {schedule.level.toUpperCase()}
                </span>

                <span className={styles.groupTitle}>
                  {schedule.label}
                </span>

                <span className={styles.groupTime}>
                  {formatTime(schedule.starts_at)}–
                  {formatTime(schedule.ends_at)}
                </span>

                <span className={styles.groupCounts}>
                  🎓 {givenCount}/{lessonNumbers.length} dadas
                </span>
              </summary>

              <ul className={styles.lessonChecklist}>
                {lessonNumbers.map((number) => {
                  const key = givenKey(schedule.id, number);
                  const isGiven = given.has(key);

                  return (
                    <li
                      key={key}
                      className={styles.lessonChecklistRow}
                    >
                      <span
                        className={
                          styles.lessonChecklistNumber
                        }
                      >
                        {String(number).padStart(2, '0')}
                      </span>

                      <span
                        className={styles.lessonChecklistTitle}
                      >
                        {lessonTitles[schedule.level]?.[number]}
                      </span>

                      <button
                        type="button"
                        className={`${styles.givenButton} ${
                          isGiven ? styles.givenButtonDone : ''
                        }`}
                        disabled={savingKey === key}
                        onClick={() =>
                          void toggleGiven(schedule, number)
                        }
                      >
                        {isGiven ? '✓' : '○'} Dada en vivo
                      </button>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })
      )}
    </div>
  );
}
