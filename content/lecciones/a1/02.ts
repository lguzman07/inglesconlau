import type { LessonContent } from '../types';

const lessonA1002: LessonContent = {
  level: 'a1',

  number: 2,

  title:
    'Tu familia: this is my..., mother, father, sister y brother',

  subtitle:
    'Aprende a presentar a tu familia en inglés usando this is my... con mother, father, sister y brother.',

  videoTitle: 'Presenta a tu familia en inglés',

  videoDescription:
    'En este video aprenderás a usar “this is my...” para presentar a tu mother, father, sister y brother.',

  objective:
    'Al terminar, podrás presentar a los miembros de tu familia usando this is my... con mother, father, sister y brother.',

  pdfUrl: '/pdfs/A1/lesson-2.pdf',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe la palabra que falta en cada espacio. Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,

          before: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
          ],

          after: [],

          answer: 'mother.',

          sentenceTranslation: 'Esta es mi madre.',
        },

        {
          id: 2,

          before: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
          ],

          after: [],

          answer: 'father.',

          sentenceTranslation: 'Este es mi padre.',
        },

        {
          id: 3,

          before: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
          ],

          after: [],

          answer: 'sister.',

          sentenceTranslation: 'Esta es mi hermana.',
        },

        {
          id: 4,

          before: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
          ],

          after: [],

          answer: 'brother.',

          sentenceTranslation: 'Este es mi hermano.',
        },

        {
          id: 5,

          before: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
          ],

          after: [],

          answer: 'family.',

          sentenceTranslation: 'Esta es mi familia.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Presenta a tu familia',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés.',

      questions: [
        {
          id: 6,

          sourceSentence: 'Esta es mi madre.',

          acceptedAnswers: [
            'This is my mother',
            'This is my mother.',
          ],

          modelAnswer: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
            {
              word: 'mother.',
              translation: 'madre',
            },
          ],

          explanation:
            'Usamos this is my... para presentar a una persona, como un miembro de tu familia.',
        },

        {
          id: 7,

          sourceSentence: 'Este es mi padre.',

          acceptedAnswers: [
            'This is my father',
            'This is my father.',
          ],

          modelAnswer: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
            {
              word: 'father.',
              translation: 'padre',
            },
          ],

          explanation:
            'This is my... no cambia según si la persona es hombre o mujer, siempre se usa this is.',
        },

        {
          id: 8,

          sourceSentence: 'Esta es mi hermana.',

          acceptedAnswers: [
            'This is my sister',
            'This is my sister.',
          ],

          modelAnswer: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
            {
              word: 'sister.',
              translation: 'hermana',
            },
          ],

          explanation:
            'Sister significa hermana. El orden siempre es this is my + persona.',
        },

        {
          id: 9,

          sourceSentence: 'Este es mi hermano.',

          acceptedAnswers: [
            'This is my brother',
            'This is my brother.',
          ],

          modelAnswer: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
            {
              word: 'brother.',
              translation: 'hermano',
            },
          ],

          explanation:
            'Brother significa hermano. Recuerda usar my antes del miembro de la familia.',
        },

        {
          id: 10,

          sourceSentence: 'Esta es mi familia.',

          acceptedAnswers: [
            'This is my family',
            'This is my family.',
          ],

          modelAnswer: [
            {
              word: 'This',
              translation: 'esta / este',
            },
            {
              word: 'is',
              translation: 'es',
            },
            {
              word: 'my',
              translation: 'mi',
            },
            {
              word: 'family.',
              translation: 'familia',
            },
          ],

          explanation:
            'Family significa familia. This is my family sirve para presentar a todo tu grupo familiar.',
        },
      ],
    },

    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras (this is my...)',
      instructions:
        'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',

      questions: [
        {
          id: 11,
          tokens: [
            {
              id: 'q11-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q11-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q11-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q11-mother',
              word: 'mother.',
              translation: 'madre',
            },
          ],
          correctOrder: [
            'q11-this',
            'q11-is',
            'q11-my',
            'q11-mother',
          ],
          sentenceTranslation: 'Esta es mi madre.',
        },

        {
          id: 12,
          tokens: [
            {
              id: 'q12-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q12-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q12-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q12-father',
              word: 'father.',
              translation: 'padre',
            },
          ],
          correctOrder: [
            'q12-this',
            'q12-is',
            'q12-my',
            'q12-father',
          ],
          sentenceTranslation: 'Este es mi padre.',
        },

        {
          id: 13,
          tokens: [
            {
              id: 'q13-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q13-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q13-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q13-sister',
              word: 'sister.',
              translation: 'hermana',
            },
          ],
          correctOrder: [
            'q13-this',
            'q13-is',
            'q13-my',
            'q13-sister',
          ],
          sentenceTranslation: 'Esta es mi hermana.',
        },

        {
          id: 14,
          tokens: [
            {
              id: 'q14-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q14-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q14-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q14-brother',
              word: 'brother.',
              translation: 'hermano',
            },
          ],
          correctOrder: [
            'q14-this',
            'q14-is',
            'q14-my',
            'q14-brother',
          ],
          sentenceTranslation: 'Este es mi hermano.',
        },

        {
          id: 15,
          tokens: [
            {
              id: 'q15-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q15-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q15-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q15-family',
              word: 'family.',
              translation: 'familia',
            },
          ],
          correctOrder: [
            'q15-this',
            'q15-is',
            'q15-my',
            'q15-family',
          ],
          sentenceTranslation: 'Esta es mi familia.',
        },

        {
          id: 16,
          tokens: [
            {
              id: 'q16-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q16-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q16-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q16-sister',
              word: 'sister',
              translation: 'hermana',
            },
            {
              id: 'q16-sofia',
              word: 'Sofia.',
              translation: 'Sofía',
            },
          ],
          correctOrder: [
            'q16-this',
            'q16-is',
            'q16-my',
            'q16-sister',
            'q16-sofia',
          ],
          sentenceTranslation: 'Esta es mi hermana Sofía.',
        },

        {
          id: 17,
          tokens: [
            {
              id: 'q17-this',
              word: 'This',
              translation: 'esta / este',
            },
            {
              id: 'q17-is',
              word: 'is',
              translation: 'es',
            },
            {
              id: 'q17-my',
              word: 'my',
              translation: 'mi',
            },
            {
              id: 'q17-happy',
              word: 'happy',
              translation: 'feliz',
            },
            {
              id: 'q17-brother',
              word: 'brother.',
              translation: 'hermano',
            },
          ],
          correctOrder: [
            'q17-this',
            'q17-is',
            'q17-my',
            'q17-happy',
            'q17-brother',
          ],
          sentenceTranslation: 'Este es mi hermano feliz.',
        },

        {
          id: 18,
          tokens: [
            {
              id: 'q18-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q18-family',
              word: 'family',
              translation: 'familia',
            },
            {
              id: 'q18-is',
              word: 'is',
              translation: 'es / está',
            },
            {
              id: 'q18-happy',
              word: 'happy.',
              translation: 'feliz',
            },
          ],
          correctOrder: [
            'q18-my',
            'q18-family',
            'q18-is',
            'q18-happy',
          ],
          sentenceTranslation: 'Mi familia es feliz.',
        },
      ],
    },
  ],
};

export default lessonA1002;
