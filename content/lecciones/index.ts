import { generatedLessons } from './generated';
import type { LessonContent } from './types';

export function getLessonContent(
  level: string,
  lessonNumber: number,
): LessonContent | null {
  const lessonKey =
    `${level.toLowerCase()}/${lessonNumber}`;

  return (
    generatedLessons[lessonKey] ??
    null
  );
}