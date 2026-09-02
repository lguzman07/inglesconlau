import type { LessonContent } from '../types';

const lessonA1003: LessonContent = {
  level: 'a1',

  number: 3,

  title: 'A, H, J, K: familia /eɪ/',

  subtitle:
    'Practica A, H, J y K al escuchar, mientras comienzas a reconocer nouns y verbs en oraciones sencillas.',

  videoTitle: 'A, H, J y K en inglés',

  videoDescription:
    'Practica las letras A, H, J y K con palabras y oraciones sencillas en inglés.',

  objective:
    'Al terminar, podrás reconocer A, H, J y K al escucharlas y comenzar a identificar nouns y verbs dentro de una oración.',

  exercises: [
    {
      type: 'montessori',

      title: 'Nouns y verbs en oraciones',

      instructions:
        'Lee cada oración. Arrastra Noun o Verb debajo de cada palabra, o selecciona el símbolo y luego toca el espacio correspondiente.',

      questions: [
        {
          id: 1,

          words: [
            {
              id: 'q1-anna',
              word: 'Anna',
              translation: 'Ana',
            },
            {
              id: 'q1-jumps',
              word: 'jumps',
              translation: 'salta',
            },
          ],

          symbols: [
            {
              id: 'q1-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q1-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q1-anna',
              symbolId: 'q1-noun',
            },
            {
              wordId: 'q1-jumps',
              symbolId: 'q1-verb',
            },
          ],

          sentenceTranslation: 'Anna salta.',
        },

        {
          id: 2,

          words: [
            {
              id: 'q2-harry',
              word: 'Harry',
              translation: 'Harry',
            },
            {
              id: 'q2-helps',
              word: 'helps',
              translation: 'ayuda',
            },
          ],

          symbols: [
            {
              id: 'q2-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q2-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q2-harry',
              symbolId: 'q2-noun',
            },
            {
              wordId: 'q2-helps',
              symbolId: 'q2-verb',
            },
          ],

          sentenceTranslation: 'Harry ayuda.',
        },

        {
          id: 3,

          words: [
            {
              id: 'q3-kate',
              word: 'Kate',
              translation: 'Kate',
            },
            {
              id: 'q3-asks',
              word: 'asks',
              translation: 'pregunta',
            },
          ],

          symbols: [
            {
              id: 'q3-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q3-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q3-kate',
              symbolId: 'q3-noun',
            },
            {
              wordId: 'q3-asks',
              symbolId: 'q3-verb',
            },
          ],

          sentenceTranslation: 'Kate pregunta.',
        },

        {
          id: 4,

          words: [
            {
              id: 'q4-karla',
              word: 'Karla',
              translation: 'Karla',
            },
            {
              id: 'q4-jumps',
              word: 'jumps',
              translation: 'salta',
            },
          ],

          symbols: [
            {
              id: 'q4-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q4-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q4-karla',
              symbolId: 'q4-noun',
            },
            {
              wordId: 'q4-jumps',
              symbolId: 'q4-verb',
            },
          ],

          sentenceTranslation: 'Karla salta.',
        },

        {
          id: 5,

          words: [
            {
              id: 'q5-anna',
              word: 'Anna',
              translation: 'Ana',
            },
            {
              id: 'q5-helps',
              word: 'helps',
              translation: 'ayuda a',
            },
            {
              id: 'q5-jack',
              word: 'Jack',
              translation: 'Jack',
            },
          ],

          symbols: [
            {
              id: 'q5-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q5-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q5-anna',
              symbolId: 'q5-noun',
            },
            {
              wordId: 'q5-helps',
              symbolId: 'q5-verb',
            },
            {
              wordId: 'q5-jack',
              symbolId: 'q5-noun',
            },
          ],

          sentenceTranslation: 'Anna ayuda a Jack.',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha A, H, J y K',

      instructions:
        'Escucha el nombre de la letra y selecciona la letra correcta.',

      questions: [
        {
          id: 1,
          audioText: 'A',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            {
              id: 'q1-a',
              text: 'A',
              translation: 'letra A',
            },
            {
              id: 'q1-h',
              text: 'H',
              translation: 'letra H',
            },
            {
              id: 'q1-j',
              text: 'J',
              translation: 'letra J',
            },
          ],
          correctOptionIds: ['q1-a'],
          explanation:
            'La letra A se pronuncia /eɪ/ en inglés.',
        },

        {
          id: 2,
          audioText: 'H',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            {
              id: 'q2-k',
              text: 'K',
              translation: 'letra K',
            },
            {
              id: 'q2-h',
              text: 'H',
              translation: 'letra H',
            },
            {
              id: 'q2-a',
              text: 'A',
              translation: 'letra A',
            },
          ],
          correctOptionIds: ['q2-h'],
          explanation:
            'H se pronuncia /eɪtʃ/ en inglés.',
        },

        {
          id: 3,
          audioText: 'J',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            {
              id: 'q3-j',
              text: 'J',
              translation: 'letra J',
            },
            {
              id: 'q3-a',
              text: 'A',
              translation: 'letra A',
            },
            {
              id: 'q3-k',
              text: 'K',
              translation: 'letra K',
            },
          ],
          correctOptionIds: ['q3-j'],
          explanation:
            'J se pronuncia /dʒeɪ/ en inglés.',
        },

        {
          id: 4,
          audioText: 'K',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            {
              id: 'q4-h',
              text: 'H',
              translation: 'letra H',
            },
            {
              id: 'q4-j',
              text: 'J',
              translation: 'letra J',
            },
            {
              id: 'q4-k',
              text: 'K',
              translation: 'letra K',
            },
          ],
          correctOptionIds: ['q4-k'],
          explanation:
            'K se pronuncia /keɪ/ en inglés.',
        },

        {
          id: 5,
          audioText: 'A',
          language: 'en',
          prompt:
            'Escucha otra vez. ¿Cuál pertenece a la familia /eɪ/?',
          options: [
            {
              id: 'q5-a',
              text: 'A',
              translation: 'letra A',
            },
            {
              id: 'q5-e',
              text: 'E',
              translation: 'letra E',
            },
            {
              id: 'q5-i',
              text: 'I',
              translation: 'letra I',
            },
          ],
          correctOptionIds: ['q5-a'],
          explanation:
            'A pertenece a esta familia porque su nombre se pronuncia /eɪ/.',
        },
      ],
    },
  ],
};

export default lessonA1003;