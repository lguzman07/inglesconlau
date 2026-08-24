import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  verbTensesLessonCount,
  verbTensesModules,
} from '@/content/labs/verb-tenses';
import { getLessonTitle } from '@/content/lecciones/catalog';
import { createClient } from '@/lib/supabase/server';

import styles from './VerbTensesLab.module.css';

function getLabLessonHref(
  level: string,
  lessonNumber: number,
) {
  return `/lecciones/${level}/${lessonNumber}?ruta=verb-tenses`;
}

export default async function VerbTensesLabPage() {
  const supabase =
    createClient();

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  if (!user) {
    redirect('/iniciar-sesion');
  }

  const lessonKeys =
    verbTensesModules.flatMap(
      (module) =>
        module.lessons.map(
          (lesson) =>
            lesson.lessonKey,
        ),
    );

  const { data: progressData } =
    await supabase
      .from('lesson_progress')
      .select(
        'lesson_key, is_completed',
      )
      .eq('user_id', user.id)
      .eq('is_completed', true)
      .in('lesson_key', lessonKeys);

  const completedLessonKeys =
    new Set(
      (progressData ?? []).map(
        (progress: { lesson_key: string }) =>
          progress.lesson_key,
      ),
    );

  const completedLessons =
    lessonKeys.filter(
      (lessonKey) =>
        completedLessonKeys.has(
          lessonKey,
        ),
    ).length;

  const progressPercentage =
    verbTensesLessonCount > 0
      ? Math.round(
        (completedLessons /
          verbTensesLessonCount) *
        100,
      )
      : 0;

  const firstLesson =
    verbTensesModules[0]
      ?.lessons[0];

  return (
    <main className={styles.main}>
      <div
        className={
          styles.container
        }
      >
        <Link
          href="/lecciones"
          className={
            styles.backLink
          }
        >
          ← Volver a las lecciones
        </Link>

        <section
          className={styles.hero}
        >
          <div
            className={
              styles.heroContent
            }
          >
            <span
              className={
                styles.labBadge
              }
            >
              VERB TENSES LAB
            </span>

            <p
              className={
                styles.eyebrow
              }
            >
              RUTA TEMÁTICA
            </p>

            <h1
              className={styles.title}
            >
              Domina los tiempos
              verbales
            </h1>

            <p
              className={
                styles.description
              }
            >
              Estudia presente,
              pasado, futuro y
              tiempos perfectos
              siguiendo una ruta
              clara desde los
              fundamentos hasta el
              nivel avanzado.
            </p>

            {firstLesson && (
              <Link
                href={getLabLessonHref(
                  firstLesson.level,
                  firstLesson.lessonNumber,
                )}
                className={
                  styles.startButton
                }
              >
                Comenzar el Lab

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            )}
          </div>

          <div
            className={
              styles.progressCard
            }
          >
            <p
              className={
                styles.progressLabel
              }
            >
              TU PROGRESO
            </p>

            <strong
              className={
                styles.progressNumber
              }
            >
              {progressPercentage}%
            </strong>

            <p
              className={
                styles.progressText
              }
            >
              {completedLessons} de{' '}
              {verbTensesLessonCount}{' '}
              lecciones completadas
            </p>

            <div
              className={
                styles.progressTrack
              }
              role="progressbar"
              aria-label="Progreso del Verb Tenses Lab"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={
                progressPercentage
              }
            >
              <span
                className={
                  styles.progressFill
                }
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>

            <p
              className={
                styles.progressNote
              }
            >
              El progreso es el mismo
              que aparece en tu ruta
              guiada.
            </p>
          </div>
        </section>

        <section
          className={
            styles.introduction
          }
          aria-label="Cómo funciona el Lab"
        >
          <div
            className={
              styles.introductionIcon
            }
            aria-hidden="true"
          >
            ✓
          </div>

          <div>
            <h2>
              Una lección, dos formas
              de encontrarla
            </h2>

            <p>
              Estas no son lecciones
              duplicadas. Cada tarjeta
              abre la lección original
              de A0, A1, A2, B1, B1+,
              B2 o C1 y conserva tus
              respuestas y progreso.
            </p>
          </div>
        </section>

        <section
          className={
            styles.modulesSection
          }
          aria-labelledby="modules-heading"
        >
          <div
            className={
              styles.sectionHeading
            }
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                MÓDULOS
              </p>

              <h2 id="modules-heading">
                Tu ruta de tiempos
                verbales
              </h2>
            </div>

            <p>
              Actualmente hay{' '}
              {verbTensesLessonCount}{' '}
              lecciones disponibles en
              este Lab.
            </p>
          </div>

          <div
            className={
              styles.moduleList
            }
          >
            {verbTensesModules.map(
              (
                module,
                moduleIndex,
              ) => (
                <article
                  key={module.id}
                  className={
                    styles.moduleCard
                  }
                >
                  <header
                    className={
                      styles.moduleHeader
                    }
                  >
                    <span
                      className={
                        styles.moduleNumber
                      }
                    >
                      {String(
                        moduleIndex + 1,
                      ).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <div>
                      <p>
                        MÓDULO{' '}
                        {moduleIndex +
                          1}
                      </p>

                      <h3>
                        {module.title}
                      </h3>

                      <span>
                        {
                          module.description
                        }
                      </span>
                    </div>
                  </header>

                  <ol
                    className={
                      styles.lessonList
                    }
                  >
                    {module.lessons.map(
                      (
                        lesson,
                        lessonIndex,
                      ) => {
                        const isCompleted =
                          completedLessonKeys.has(
                            lesson.lessonKey,
                          );

                        const lessonTitle =
                          getLessonTitle(
                            lesson.level,
                            lesson.lessonNumber,
                          );

                        return (
                          <li
                            key={
                              lesson.lessonKey
                            }
                          >
                            <Link
                              href={getLabLessonHref(
                                lesson.level,
                                lesson.lessonNumber,
                              )}
                              className={
                                styles.lessonCard
                              }
                            >
                              <span
                                className={
                                  styles.lessonOrder
                                }
                              >
                                {String(
                                  lessonIndex +
                                  1,
                                ).padStart(
                                  2,
                                  '0',
                                )}
                              </span>

                              <div
                                className={
                                  styles.lessonContent
                                }
                              >
                                <div
                                  className={
                                    styles.lessonLabels
                                  }
                                >
                                  <span>
                                    {lesson.level.toUpperCase()}
                                  </span>

                                  <span>
                                    Lección{' '}
                                    {
                                      lesson.lessonNumber
                                    }
                                  </span>
                                </div>

                                <h4>
                                  {
                                    lessonTitle
                                  }
                                </h4>

                                <p>
                                  Abrir la
                                  lección
                                  original y
                                  continuar tu
                                  progreso.
                                </p>
                              </div>

                              <span
                                className={
                                  styles.openLesson
                                }
                              >
                                Abrir

                                <span
                                  aria-hidden="true"
                                >
                                  →
                                </span>
                              </span>

                              <span
                                className={`${styles.completedCheck} ${isCompleted
                                    ? styles.completedCheckActive
                                    : ''
                                  }`}
                                title={
                                  isCompleted
                                    ? 'Lección completada'
                                    : 'Lección pendiente'
                                }
                                aria-hidden="true"
                              >
                                {isCompleted
                                  ? '✓'
                                  : ''}
                              </span>
                            </Link>
                          </li>
                        );
                      },
                    )}
                  </ol>
                </article>
              ),
            )}
          </div>
        </section>

        <nav
          className={
            styles.bottomNavigation
          }
          aria-label="Navegación del Lab"
        >
          <Link
            href="/lecciones"
            className={
              styles.secondaryButton
            }
          >
            ← Ver todos los niveles
          </Link>

          {firstLesson && (
            <Link
              href={getLabLessonHref(
                firstLesson.level,
                firstLesson.lessonNumber,
              )}
              className={
                styles.primaryButton
              }
            >
              Ir a la primera lección

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}