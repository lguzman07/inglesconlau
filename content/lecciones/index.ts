import lessonA001 from './a0/01';
import lessonA002 from './a0/02';
import type { LessonContent } from './types';

const lessons: Record<string, LessonContent> = {
  'a0/1': lessonA001,
  'a0/2': lessonA002,
};

export function getLessonContent(
  level: string,
  lessonNumber: number,
): LessonContent | null {
  return (
    lessons[`${level.toLowerCase()}/${lessonNumber}`] ??
    null
  );
}