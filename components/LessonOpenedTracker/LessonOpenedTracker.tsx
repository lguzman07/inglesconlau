'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

type LessonOpenedTrackerProps = {
  lessonKey: string;
};

export default function LessonOpenedTracker({
  lessonKey,
}: LessonOpenedTrackerProps) {
  useEffect(() => {
    const supabase = createClient();

    void supabase.rpc('open_lesson', {
      p_lesson_key: lessonKey,
    });
  }, [lessonKey]);

  return null;
}