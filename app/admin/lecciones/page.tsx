import fs from 'node:fs';
import path from 'node:path';

import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { lessonTitles } from '@/content/lecciones/catalog';
import { getLessonContent } from '@/content/lecciones';
import { createClient } from '@/lib/supabase/server';

import AdminLessonsChecklist, { type LessonChecklistItem } from './AdminLessonsChecklist';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contenido de lecciones | Inglés con Lau',
  description: 'Revisa qué lecciones tienen video, PDF y ejercicios listos.',
};

const levelOrder = [
  { slug: 'a1', code: 'A1' },
  { slug: 'a2', code: 'A2' },
  { slug: 'b1', code: 'B1' },
  { slug: 'b2', code: 'B2' },
  { slug: 'c1', code: 'C1' },
];

function publicFileExists(publicUrl: string | undefined) {
  if (!publicUrl) return false;

  const relativePath = publicUrl.replace(/^\/+/, '');
  const absolutePath = path.join(process.cwd(), 'public', relativePath);

  try {
    return fs.existsSync(absolutePath);
  } catch {
    return false;
  }
}

function buildLessonRoster(): LessonChecklistItem[] {
  const roster: LessonChecklistItem[] = [];

  for (const { slug: level } of levelOrder) {
    const titles = lessonTitles[level] ?? {};

    const lessonNumbers = Object.keys(titles)
      .map(Number)
      .filter((number) => Number.isInteger(number) && number > 0)
      .sort((a, b) => a - b);

    for (const lessonNumber of lessonNumbers) {
      const title = titles[lessonNumber];
      const content = getLessonContent(level, lessonNumber);

      roster.push({
        level,
        number: lessonNumber,
        title,
        hasPdf: publicFileExists(content?.pdfUrl),
        hasExercises: (content?.exercises?.length ?? 0) > 0,
        hasVideo: false,
        videoSrcBroken: Boolean(content?.videoSrc) && !publicFileExists(content?.videoSrc),
      });
    }
  }

  return roster;
}

export default async function AdminLeccionesPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/iniciar-sesion?next=%2Fadmin%2Flecciones');

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') redirect('/inicio');

  const { data: videoStatusRows, error } = await supabase.rpc('admin_list_lesson_video_status');

  const recordedKeys = new Set(
    (videoStatusRows ?? [])
      .filter((row: { is_recorded: boolean }) => row.is_recorded)
      .map((row: { level: string; lesson_number: number }) => `${row.level}/${row.lesson_number}`),
  );

  const roster = buildLessonRoster().map((lesson) => ({
    ...lesson,
    hasVideo: recordedKeys.has(`${lesson.level}/${lesson.number}`),
  }));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Contenido de lecciones</h1>
          <p>
            Revisa, nivel por nivel, qué lecciones ya tienen video, PDF y ejercicios interactivos.
            El PDF y los ejercicios se detectan automáticamente del contenido publicado; marca el
            video a mano cuando lo grabes y subas.
          </p>
        </header>
        {error ? (
          <div className={styles.errorBox} role="alert">
            <p>No pudimos cargar el estado de los videos.</p>
            <p>{error.message}</p>
          </div>
        ) : (
          <AdminLessonsChecklist levels={levelOrder} initialLessons={roster} />
        )}
      </div>
    </main>
  );
}
