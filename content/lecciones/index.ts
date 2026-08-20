import lessonA001 from './a0/01';
import type { LessonContent } from './types';

const lessons: Record<string, LessonContent> = {
  'a0/1': lessonA001,
};

export function getLessonContent(
  level: string,
  lessonNumber: number,
): LessonContent | null {
  return lessons[`${level.toLowerCase()}/${lessonNumber}`] ?? null;
}