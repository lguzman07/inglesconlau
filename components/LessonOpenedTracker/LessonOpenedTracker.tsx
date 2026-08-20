'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

const LAST_LESSON_STORAGE_KEY = 'inglesconlau-last-opened-lesson';

type LessonOpenedTrackerProps = {
  lessonKey: string;
};

export default function LessonOpenedTracker({
  lessonKey,
}: LessonOpenedTrackerProps) {
  useEffect(() => {
    window.localStorage.setItem(LAST_LESSON_STORAGE_KEY, lessonKey);

    const supabase = createClient();

    void supabase.rpc('open_lesson', {
      p_lesson_key: lessonKey,
    });
  }, [lessonKey]);

  return null;
}
