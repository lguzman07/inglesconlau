'use client';

import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';

import type { DialogueExercise as DialogueExerciseContent } from '@/content/lecciones/types';

import styles from './DialogueExercise.module.css';

type DialogueExerciseProps = {
  exercise: DialogueExerciseContent;
};

export default function DialogueExercise({
  exercise,
}: DialogueExerciseProps) {
  return (
    <section
      className={styles.exercise}
      aria-labelledby="dialogue-title"
    >
      <div className={styles.exerciseHeader}>
        <div>
          <span className={styles.exerciseType}>
            DIÁLOGO
          </span>

          <h3 id="dialogue-title">
            {exercise.title}
          </h3>

          <p>{exercise.instructions}</p>
        </div>

        <span className={styles.totalLines}>
          {exercise.lines.length} líneas
        </span>
      </div>

      <div className={styles.lines}>
        {exercise.lines.map((line, index) => {
          const isSpeakerA = index % 2 === 0;

          return (
            <div
              key={line.id}
              className={[
                styles.line,
                isSpeakerA
                  ? styles.speakerA
                  : styles.speakerB,
              ].join(' ')}
            >
              <span className={styles.speakerLabel}>
                {line.speaker
                  .slice(0, 1)
                  .toUpperCase()}
              </span>

              <div className={styles.bubble}>
                <p className={styles.speakerName}>
                  {line.speaker}
                </p>

                <p className={styles.english}>
                  {line.english}
                </p>

                <p className={styles.spanish}>
                  {line.spanish}
                </p>
              </div>

              <AudioPlayer
                text={line.english}
                language="en"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
