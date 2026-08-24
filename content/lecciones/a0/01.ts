import type { LessonContent } from '../types';

const lessonA001: LessonContent = {
  level: 'a0',

  number: 1,

  title: 'Presentarte: I am / My name is',

  subtitle:
    'Aprende a decir quién eres, de dónde eres y cómo decir tu nombre en inglés.',



  objective:
    'Al terminar, podrás decir tu nombre, tu profesión y de dónde eres.',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe am o is en cada espacio. Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,

          before: [
            {
              word: 'I',
              translation: 'yo',
            },
          ],

          after: [
            {
              word: 'a',
              translation: 'un / una',
            },

            {
              word: 'teacher.',
              translation:
                'profesor / profesora',
            },
          ],

          answer: 'am',

          sentenceTranslation:
            'Soy profesor o profesora.',
        },

        {
          id: 2,

          before: [
            {
              word: 'I',
              translation: 'yo',
            },
          ],

          after: [
            {
              word: 'Dominican.',
              translation:
                'dominicano / dominicana',
            },
          ],

          answer: 'am',

          sentenceTranslation:
            'Soy dominicano o dominicana.',
        },

        {
          id: 3,

          before: [
            {
              word: 'My',
              translation: 'mi',
            },

            {
              word: 'name',
              translation: 'nombre',
            },
          ],

          after: [
            {
              word: 'Ana.',
              translation: 'Ana',
            },
          ],

          answer: 'is',

          sentenceTranslation:
            'Mi nombre es Ana.',
        },

        {
          id: 4,

          before: [
            {
              word: 'I',
              translation: 'yo',
            },
          ],

          after: [
            {
              word: 'a',
              translation: 'un / una',
            },

            {
              word: 'student.',
              translation: 'estudiante',
            },
          ],

          answer: 'am',

          sentenceTranslation:
            'Soy estudiante.',
        },

        {
          id: 5,

          before: [
            {
              word: 'My',
              translation: 'mi',
            },

            {
              word: 'name',
              translation: 'nombre',
            },
          ],

          after: [
            {
              word: 'Carlos.',
              translation: 'Carlos',
            },
          ],

          answer: 'is',

          sentenceTranslation:
            'Mi nombre es Carlos.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Construye tu presentación',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés.',

      questions: [
        {
          id: 6,

          sourceSentence:
            'Yo soy estudiante.',

          acceptedAnswers: [
            'I am a student',
            'I am a student.',
          ],

          modelAnswer: [
            {
              word: 'I',
              translation: 'yo',
            },

            {
              word: 'am',
              translation: 'soy / estoy',
            },

            {
              word: 'a',
              translation: 'un / una',
            },

            {
              word: 'student.',
              translation: 'estudiante',
            },
          ],

          explanation:
            'Usamos I am para decir quiénes somos. Antes de una profesión o descripción singular usamos a.',
        },

        {
          id: 7,

          sourceSentence:
            'Yo soy dominicana.',

          acceptedAnswers: [
            'I am Dominican',
            'I am Dominican.',
          ],

          modelAnswer: [
            {
              word: 'I',
              translation: 'yo',
            },

            {
              word: 'am',
              translation: 'soy / estoy',
            },

            {
              word: 'Dominican.',
              translation:
                'dominicano / dominicana',
            },
          ],

          explanation:
            'Las nacionalidades se escriben con mayúscula en inglés.',
        },

        {
          id: 8,

          sourceSentence:
            'Mi nombre es María.',

          acceptedAnswers: [
            'My name is María',
            'My name is María.',
            'My name is Maria',
            'My name is Maria.',
          ],

          modelAnswer: [
            {
              word: 'My',
              translation: 'mi',
            },

            {
              word: 'name',
              translation: 'nombre',
            },

            {
              word: 'is',
              translation: 'es',
            },

            {
              word: 'María.',
              translation: 'María',
            },
          ],

          explanation:
            'Con My name usamos is porque name es singular.',
        },

        {
          id: 9,

          sourceSentence:
            'Yo soy de Santo Domingo.',

          acceptedAnswers: [
            'I am from Santo Domingo',
            'I am from Santo Domingo.',
          ],

          modelAnswer: [
            {
              word: 'I',
              translation: 'yo',
            },

            {
              word: 'am',
              translation: 'soy / estoy',
            },

            {
              word: 'from',
              translation: 'de',
            },

            {
              word: 'Santo',
              translation: 'Santo',
            },

            {
              word: 'Domingo.',
              translation: 'Domingo',
            },
          ],

          explanation:
            'Usamos be from para expresar de dónde somos.',
        },

        {
          id: 10,

          sourceSentence:
            'Yo soy profesora.',

          acceptedAnswers: [
            'I am a teacher',
            'I am a teacher.',
          ],

          modelAnswer: [
            {
              word: 'I',
              translation: 'yo',
            },

            {
              word: 'am',
              translation: 'soy / estoy',
            },

            {
              word: 'a',
              translation: 'un / una',
            },

            {
              word: 'teacher.',
              translation:
                'profesor / profesora',
            },
          ],

          explanation:
            'Usamos a antes de una profesión singular: a teacher.',
        },
      ],
    },
  ],
};

export default lessonA001;