import type { LessonContent } from '../types';

const lessonA1002: LessonContent = {
  level: 'a1',
  number: 2,
  title: 'Contracciones: I’m / My name’s',
  subtitle:
    'Aprende las formas cortas de “I am” y “My name is” para presentarte de manera natural.',
  videoTitle: 'Cómo usar I’m y My name’s',
  videoDescription:
    'En este video aprenderás a formar y pronunciar las contracciones “I’m” y “My name’s”.',
  objective:
    'Al terminar, podrás presentarte usando correctamente “I’m” y “My name’s”.',

  exercises: [
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions:
        'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',

      questions: [
        {
          id: 1,
          tokens: [
            {
              id: 'q1-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q1-laura',
              word: 'Laura.',
              translation: 'Laura',
            },
          ],
          correctOrder: ['q1-im', 'q1-laura'],
          sentenceTranslation: 'Soy Laura.',
        },

        {
          id: 2,
          tokens: [
            {
              id: 'q2-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q2-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q2-ana',
              word: 'Ana.',
              translation: 'Ana',
            },
          ],
          correctOrder: ['q2-my', 'q2-names', 'q2-ana'],
          sentenceTranslation: 'Mi nombre es Ana.',
        },

        {
          id: 3,
          tokens: [
            {
              id: 'q3-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q3-a',
              word: 'a',
              translation: 'un / una',
            },
            {
              id: 'q3-student',
              word: 'student.',
              translation: 'estudiante',
            },
          ],
          correctOrder: ['q3-im', 'q3-a', 'q3-student'],
          sentenceTranslation: 'Soy estudiante.',
        },

        {
          id: 4,
          tokens: [
            {
              id: 'q4-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q4-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q4-daniel',
              word: 'Daniel.',
              translation: 'Daniel',
            },
          ],
          correctOrder: ['q4-my', 'q4-names', 'q4-daniel'],
          sentenceTranslation: 'Mi nombre es Daniel.',
        },

        {
          id: 5,
          tokens: [
            {
              id: 'q5-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q5-happy',
              word: 'happy.',
              translation: 'feliz',
            },
          ],
          correctOrder: ['q5-im', 'q5-happy'],
          sentenceTranslation: 'Estoy feliz.',
        },

        {
          id: 6,
          tokens: [
            {
              id: 'q6-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q6-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q6-sofia',
              word: 'Sofia.',
              translation: 'Sofía',
            },
          ],
          correctOrder: ['q6-my', 'q6-names', 'q6-sofia'],
          sentenceTranslation: 'Mi nombre es Sofía.',
        },

        {
          id: 7,
          tokens: [
            {
              id: 'q7-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q7-from',
              word: 'from',
              translation: 'de',
            },
            {
              id: 'q7-santo',
              word: 'Santo',
              translation: 'Santo',
            },
            {
              id: 'q7-domingo',
              word: 'Domingo.',
              translation: 'Domingo',
            },
          ],
          correctOrder: [
            'q7-im',
            'q7-from',
            'q7-santo',
            'q7-domingo',
          ],
          sentenceTranslation: 'Soy de Santo Domingo.',
        },

        {
          id: 8,
          tokens: [
            {
              id: 'q8-my',
              word: 'My',
              translation: 'mi',
            },
            {
              id: 'q8-names',
              word: 'name’s',
              translation: 'nombre es',
            },
            {
              id: 'q8-carlos',
              word: 'Carlos.',
              translation: 'Carlos',
            },
          ],
          correctOrder: ['q8-my', 'q8-names', 'q8-carlos'],
          sentenceTranslation: 'Mi nombre es Carlos.',
        },

        {
          id: 9,
          tokens: [
            {
              id: 'q9-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q9-dominican',
              word: 'Dominican.',
              translation: 'dominicano / dominicana',
            },
          ],
          correctOrder: ['q9-im', 'q9-dominican'],
          sentenceTranslation: 'Soy dominicano o dominicana.',
        },

        {
          id: 10,
          tokens: [
            {
              id: 'q10-im',
              word: 'I’m',
              translation: 'yo soy / yo estoy',
            },
            {
              id: 'q10-a',
              word: 'a',
              translation: 'un / una',
            },
            {
              id: 'q10-teacher',
              word: 'teacher.',
              translation: 'profesor / profesora',
            },
          ],
          correctOrder: ['q10-im', 'q10-a', 'q10-teacher'],
          sentenceTranslation: 'Soy profesor o profesora.',
        },
      ],
    },
  ],
};

export default lessonA1002;