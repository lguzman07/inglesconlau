import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { lessonTitles } from '@/content/lecciones/catalog';
import { getLessonContent } from '@/content/lecciones';
import { createClient } from '@/lib/supabase/server';

import AdminLessonsChecklist, { type LessonChecklistItem } from './AdminLessonsChecklist';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contenido de lecciones',
  description: 'Revisa qué lecciones tienen video y ejercicios listos.',
};

const levelOrder = [
  { slug: 'a1', code: 'A1' },
  { slug: 'a2', code: 'A2' },
  { slug: 'b1', code: 'B1' },
  { slug: 'b2', code: 'B2' },
  { slug: 'c1', code: 'C1' },
];

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
        hasExercises: (content?.exercises?.length ?? 0) > 0,
        hasVideo: Boolean(content?.videoSrc),
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

  const roster = buildLessonRoster();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/inicio" className={styles.backLink}>← Volver al inicio</Link>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ADMINISTRACIÓN</p>
          <h1>Contenido de lecciones</h1>
          <p>
            Revisa, nivel por nivel, qué lecciones ya tienen video y ejercicios interactivos.
            Los dos se detectan automáticamente del contenido publicado.
          </p>
        </header>
        <AdminLessonsChecklist levels={levelOrder} initialLessons={roster} />
      </div>
    </main>
  );
}
