type VerbTensesLesson = {
  lessonKey: string;
  level: string;
  lessonNumber: number;
};

type VerbTensesModule = {
  id: string;
  title: string;
  description: string;
  lessons: VerbTensesLesson[];
};

function lesson(
  level: string,
  lessonNumber: number,
): VerbTensesLesson {
  return {
    lessonKey: `${level}/${lessonNumber}`,
    level,
    lessonNumber,
  };
}

export const verbTensesModules: VerbTensesModule[] = [
  {
    id: 'foundations-with-be',

    title: 'Fundamentos con be',

    description:
      'Empieza con am, is, are y las contracciones esenciales que necesitarás para estudiar los tiempos verbales.',

    lessons: [
      lesson('a0', 1),
      lesson('a0', 2),
      lesson('a1', 6),
      lesson('a1', 7),
    ],
  },

  {
    id: 'present-simple',

    title: 'Present simple',

    description:
      'Aprende a hablar de rutinas, hábitos, hechos y situaciones permanentes.',

    lessons: [
      lesson('a1', 112),
      lesson('a1', 113),
      lesson('a1', 114),
      lesson('a1', 115),
      lesson('a1', 116),
      lesson('a1', 117),
      lesson('a1', 118),
      lesson('a1', 119),
      lesson('a1', 122),
    ],
  },

  {
    id: 'present-continuous',

    title: 'Present continuous',

    description:
      'Habla de acciones que ocurren ahora, situaciones temporales y diferencias con el presente simple.',

    lessons: [
      lesson('a1', 202),
      lesson('a1', 203),
      lesson('a1', 204),
      lesson('a1', 205),
      lesson('a1', 206),
      lesson('a1', 208),
      lesson('a2', 1),
      lesson('a2', 2),
      lesson('b1', 1),
    ],
  },

  {
    id: 'past-simple',

    title: 'Past simple',

    description:
      'Aprende a hablar de acciones y situaciones terminadas en el pasado.',

    lessons: [
      lesson('a1', 252),
      lesson('a1', 253),
      lesson('a1', 254),
      lesson('a1', 257),
      lesson('a1', 258),
      lesson('a1', 259),
      lesson('a1', 260),
      lesson('a1', 262),
      lesson('a1', 263),
    ],
  },

  {
    id: 'past-continuous',

    title: 'Past continuous',

    description:
      'Describe acciones que estaban ocurriendo y combínalas con acontecimientos en pasado simple.',

    lessons: [
      lesson('a2', 7),
      lesson('a2', 8),
      lesson('a2', 9),
      lesson('a2', 10),
      lesson('a2', 11),
      lesson('a2', 13),
      lesson('b1', 6),
    ],
  },

  {
    id: 'present-perfect',

    title: 'Present perfect',

    description:
      'Conecta el pasado con el presente para hablar de experiencias, resultados y duración.',

    lessons: [
      lesson('a2', 15),
      lesson('a2', 16),
      lesson('a2', 17),
      lesson('a2', 18),
      lesson('a2', 19),
      lesson('a2', 20),
      lesson('a2', 21),
      lesson('a2', 22),
      lesson('a2', 25),
      lesson('a2', 26),
      lesson('b1', 2),
      lesson('b1', 3),
    ],
  },

  {
    id: 'present-perfect-continuous',

    title: 'Present perfect continuous',

    description:
      'Expresa acciones que comenzaron en el pasado y continúan o tienen efectos visibles en el presente.',

    lessons: [
      lesson('b1', 4),
      lesson('b1', 5),
      lesson('b1-plus', 2),
      lesson('b2', 1),
    ],
  },

  {
    id: 'past-perfect',

    title: 'Past perfect y past perfect continuous',

    description:
      'Organiza acontecimientos pasados y explica qué había sucedido antes de otro momento.',

    lessons: [
      lesson('b1', 7),
      lesson('b1', 8),
      lesson('b1-plus', 3),
      lesson('b2', 2),
    ],
  },

  {
    id: 'future-forms',

    title: 'Going to, will y planes futuros',

    description:
      'Habla de planes, decisiones, predicciones, promesas y acontecimientos futuros.',

    lessons: [
      lesson('a1', 266),
      lesson('a1', 267),
      lesson('a1', 268),
      lesson('a1', 269),
      lesson('a2', 28),
      lesson('a2', 29),
      lesson('a2', 30),
      lesson('a2', 31),
      lesson('a2', 32),
      lesson('a2', 33),
      lesson('a2', 34),
      lesson('b1', 14),
      lesson('b1', 16),
    ],
  },

  {
    id: 'advanced-future-forms',

    title: 'Future continuous y future perfect',

    description:
      'Describe acciones en progreso, acciones completadas y duración en momentos futuros.',

    lessons: [
      lesson('b1', 15),
      lesson('b1-plus', 5),
      lesson('b1-plus', 6),
      lesson('b2', 4),
      lesson('b2', 5),
    ],
  },

  {
    id: 'advanced-tense-control',

    title: 'Control avanzado de tiempos verbales',

    description:
      'Combina tiempos verbales, controla la perspectiva temporal y expresa relaciones complejas entre pasado, presente y futuro.',

    lessons: [
      lesson('b1-plus', 1),
      lesson('b1-plus', 4),
      lesson('b2', 3),
      lesson('b2', 6),
      lesson('b2', 7),
      lesson('c1', 1),
      lesson('c1', 2),
      lesson('c1', 4),
      lesson('c1', 5),
      lesson('c1', 6),
      lesson('c1', 61),
    ],
  },
];

export const verbTensesLessonCount =
  verbTensesModules.reduce(
    (total, module) =>
      total + module.lessons.length,
    0,
  );