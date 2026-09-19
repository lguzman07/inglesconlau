type VerbTensesLevel =
  | 'a1'
  | 'a2'
  | 'b1'
  | 'b2'
  | 'c1';

export type VerbTensesLesson = {
  lessonKey: string;
  level: VerbTensesLevel;
  lessonNumber: number;
};

export type VerbTensesModule = {
  id: string;
  title: string;
  description: string;
  lessons: VerbTensesLesson[];
};

function createLessons(
  level: VerbTensesLevel,
  lessonNumbers: number[],
): VerbTensesLesson[] {
  return lessonNumbers.map((lessonNumber) => ({
    lessonKey: `${level}/${lessonNumber}`,
    level,
    lessonNumber,
  }));
}

function createLessonRange(
  level: VerbTensesLevel,
  firstLesson: number,
  lastLesson: number,
): VerbTensesLesson[] {
  return createLessons(
    level,
    Array.from(
      {
        length:
          lastLesson - firstLesson + 1,
      },
      (_, index) => firstLesson + index,
    ),
  );
}

export const verbTensesModules: VerbTensesModule[] = [
  {
    id: 'verb-be-foundations',

    title: 'Fundamentos del verbo be',

    description:
      'Comienza con am, is y are, sus contracciones, negativos, preguntas y respuestas cortas.',

    lessons: [
      ...createLessons('a1', [1, 7, 10, 11]),
    ],
  },

  {
    id: 'present-simple',

    title: 'Presente simple',

    description:
      'Aprende a hablar de rutinas, hábitos, gustos, hechos y acciones habituales.',

    lessons: [
      ...createLessons('a1', [27, 28, 29, 30]),
    ],
  },

  {
    id: 'present-continuous',

    title: 'Presente continuo',

    description:
      'Describe acciones que están ocurriendo ahora y aprende a diferenciarlas de los hábitos.',

    lessons: [
      ...createLessons('a1', [32, 33]),
      ...createLessons('a2', [1, 2]),
      ...createLessons('b1', [1]),
    ],
  },

  {
    id: 'past-simple',

    title: 'Pasado simple',

    description:
      'Habla de acontecimientos terminados, verbos regulares e irregulares y hábitos del pasado.',

    lessons: [
      ...createLessons('a1', [38, 39]),
      ...createLessons('a2', [3, 4, 6]),
      ...createLessons('b1', [7]),
    ],
  },

  {
    id: 'past-continuous',

    title: 'Pasado continuo',

    description:
      'Describe acciones en progreso en el pasado, interrupciones y acontecimientos simultáneos.',

    lessons: [
      ...createLessons('a2', [5, 7, 8]),
      ...createLessons('b1', [4]),
    ],
  },

  {
    id: 'present-perfect',

    title: 'Present perfect',

    description:
      'Conecta el pasado con el presente para hablar de experiencias, duración y acciones recientes.',

    lessons: [
      ...createLessonRange('a2', 9, 14),
      ...createLessons('b1', [2, 3]),
      ...createLessons('b2', [1, 3]),
    ],
  },

  {
    id: 'past-perfect',

    title: 'Past perfect',

    description:
      'Expresa qué acción ocurrió primero y construye narraciones con diferentes tiempos pasados.',

    lessons: [
      ...createLessons('b1', [5, 6]),
      ...createLessons('b2', [2]),
    ],
  },

  {
    id: 'future-forms',

    title: 'Formas del futuro',

    description:
      'Domina going to, will, present continuous, future continuous, future perfect y future in the past.',

    lessons: [
      ...createLessons('a1', [40]),
      ...createLessonRange('a2', 15, 18),
      ...createLessons('b1', [8, 9, 10]),
      ...createLessonRange('b2', 4, 7),
      ...createLessons('c1', [5, 6]),
    ],
  },

  {
    id: 'advanced-tense-control',

    title: 'Dominio avanzado de los tiempos verbales',

    description:
      'Consolida todos los tiempos y elige cada forma verbal según la perspectiva, el aspecto y el contexto.',

    lessons: [
      ...createLessonRange('b1', 1, 10),
      ...createLessonRange('c1', 1, 4),
    ],
  },
];

export const verbTensesLessonCount =
  verbTensesModules.reduce(
    (total, module) =>
      total + module.lessons.length,
    0,
  );