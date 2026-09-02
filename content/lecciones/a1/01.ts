import type { LessonContent } from '../types';

const lessonA1001: LessonContent = {
  level: 'a1',

  number: 1,

  title: 'Presentarte: I am / My name is (con contracciones I’m / My name’s)',

  subtitle:
    'Aprende a decir quién eres, de dónde eres y cómo decir tu nombre en inglés, incluyendo las formas cortas I’m y My name’s.',

  videoTitle: 'Preséntate en inglés',

  videoDescription:
    'En este video aprenderás a usar “I am” y “My name is”, y sus contracciones “I’m” y “My name’s”, para hablar de ti.',

  objective:
    'Al terminar, podrás decir tu nombre, tu profesión y de dónde eres, usando tanto la forma completa como la contracción.',

  pdfUrl: '/pdfs/A1/lesson-1.pdf',

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

    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras (contracciones)',
      instructions:
        'Arrastra las palabras para formar la oración correcta usando I’m o name’s. Las opciones aparecen en orden aleatorio.',

      questions: [
        {
          id: 11,
          tokens: [
            {
              id: 'q11-laura',
              word: 'Laura.',
              translation: 'Laura',
            },
            {
              id: 'q11-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
          ],
          correctOrder: ['q11-im', 'q11-laura'],
          sentenceTranslation: 'Soy Laura.',
        },

        {
          id: 12,
          tokens: [
            {
              id: 'q12-ana',
              word: 'Ana.',
              translation: 'Ana',
            },
            {
              id: 'q12-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q12-my',
              word: 'My',
              translation: 'mi',
            },
          ],
          correctOrder: ['q12-my', 'q12-names', 'q12-ana'],
          sentenceTranslation: 'Mi nombre es Ana.',
        },

        {
          id: 13,
          tokens: [
            {
              id: 'q13-student',
              word: 'student.',
              translation: 'estudiante',
            },
            {
              id: 'q13-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q13-a',
              word: 'a',
              translation: 'un / una',
            },
          ],
          correctOrder: ['q13-im', 'q13-a', 'q13-student'],
          sentenceTranslation: 'Soy estudiante.',
        },

        {
          id: 14,
          tokens: [
            {
              id: 'q14-daniel',
              word: 'Daniel.',
              translation: 'Daniel',
            },
            {
              id: 'q14-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q14-names',
              word: 'name’s',
              translation: 'nombre es',
            },
          ],
          correctOrder: ['q14-my', 'q14-names', 'q14-daniel'],
          sentenceTranslation: 'Mi nombre es Daniel.',
        },

        {
          id: 15,
          tokens: [
            {
              id: 'q15-happy',
              word: 'happy.',
              translation: 'feliz',
            },
            {
              id: 'q15-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
          ],
          correctOrder: ['q15-im', 'q15-happy'],
          sentenceTranslation: 'Estoy feliz.',
        },

        {
          id: 16,
          tokens: [
            {
              id: 'q16-sofia',
              word: 'Sofia.',
              translation: 'Sofía',
            },
            {
              id: 'q16-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q16-my',
              word: 'My',
              translation: 'mi',
            },
          ],
          correctOrder: ['q16-my', 'q16-names', 'q16-sofia'],
          sentenceTranslation: 'Mi nombre es Sofía.',
        },

        {
          id: 17,
          tokens: [
            {
              id: 'q17-domingo',
              word: 'Domingo.',
              translation: 'Domingo',
            },
            {
              id: 'q17-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q17-santo',
              word: 'Santo',
              translation: 'Santo',
            },
            {
              id: 'q17-from',
              word: 'from',
              translation: 'de',
            },
          ],
          correctOrder: [
            'q17-im',
            'q17-from',
            'q17-santo',
            'q17-domingo',
          ],
          sentenceTranslation: 'Soy de Santo Domingo.',
        },

        {
          id: 18,
          tokens: [
            {
              id: 'q18-carlos',
              word: 'Carlos.',
              translation: 'Carlos',
            },
            {
              id: 'q18-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q18-names',
              word: 'name’s',
              translation: 'nombre es',
            },
          ],
          correctOrder: ['q18-my', 'q18-names', 'q18-carlos'],
          sentenceTranslation: 'Mi nombre es Carlos.',
        },

        {
          id: 19,
          tokens: [
            {
              id: 'q19-dominican',
              word: 'Dominican.',
              translation: 'dominicano / dominicana',
            },
            {
              id: 'q19-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
          ],
          correctOrder: ['q19-im', 'q19-dominican'],
          sentenceTranslation: 'Soy dominicano o dominicana.',
        },

        {
          id: 20,
          tokens: [
            {
              id: 'q20-teacher',
              word: 'teacher.',
              translation: 'profesor / profesora',
            },
            {
              id: 'q20-a',
              word: 'a',
              translation: 'un / una',
            },
            {
              id: 'q20-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
          ],
          correctOrder: ['q20-im', 'q20-a', 'q20-teacher'],
          sentenceTranslation: 'Soy profesor o profesora.',
        },
      ],
    },
  ],
};

export default lessonA1001;