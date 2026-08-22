import type { LessonContent } from '../types';

const lessonA003: LessonContent = {
  level: 'a0',

  number: 3,

  title: 'A, H, J, K: familia /eɪ/',

  subtitle:
    'Practica palabras con A, H, J y K mientras reconoces nouns y verbs dentro de oraciones sencillas.',

  videoSrc: '/videos/a0/03-placeholder.mp4',

  videoTitle: 'A, H, J y K en inglés',

  videoDescription:
    'Practica las letras A, H, J y K con palabras y oraciones sencillas en inglés.',

  objective:
    'Al terminar, podrás reconocer palabras relacionadas con las letras A, H, J y K y comenzar a identificar nouns y verbs dentro de una oración.',

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

          sentenceTranslation:
            'Anna ayuda a Jack.',
        },

        {
          id: 6,

          words: [
            {
              id: 'q6-harry',
              word: 'Harry',
              translation: 'Harry',
            },
            {
              id: 'q6-helps',
              word: 'helps',
              translation: 'ayuda a',
            },
            {
              id: 'q6-kate',
              word: 'Kate',
              translation: 'Kate',
            },
          ],

          symbols: [
            {
              id: 'q6-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q6-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q6-harry',
              symbolId: 'q6-noun',
            },
            {
              wordId: 'q6-helps',
              symbolId: 'q6-verb',
            },
            {
              wordId: 'q6-kate',
              symbolId: 'q6-noun',
            },
          ],

          sentenceTranslation:
            'Harry ayuda a Kate.',
        },

        {
          id: 7,

          words: [
            {
              id: 'q7-jack',
              word: 'Jack',
              translation: 'Jack',
            },
            {
              id: 'q7-helps',
              word: 'helps',
              translation: 'ayuda a',
            },
            {
              id: 'q7-karla',
              word: 'Karla',
              translation: 'Karla',
            },
          ],

          symbols: [
            {
              id: 'q7-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q7-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q7-jack',
              symbolId: 'q7-noun',
            },
            {
              wordId: 'q7-helps',
              symbolId: 'q7-verb',
            },
            {
              wordId: 'q7-karla',
              symbolId: 'q7-noun',
            },
          ],

          sentenceTranslation:
            'Jack ayuda a Karla.',
        },

        {
          id: 8,

          words: [
            {
              id: 'q8-kate',
              word: 'Kate',
              translation: 'Kate',
            },
            {
              id: 'q8-likes',
              word: 'likes',
              translation: 'le gustan',
            },
            {
              id: 'q8-apples',
              word: 'apples',
              translation: 'manzanas',
            },
          ],

          symbols: [
            {
              id: 'q8-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q8-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q8-kate',
              symbolId: 'q8-noun',
            },
            {
              wordId: 'q8-likes',
              symbolId: 'q8-verb',
            },
            {
              wordId: 'q8-apples',
              symbolId: 'q8-noun',
            },
          ],

          sentenceTranslation:
            'A Kate le gustan las manzanas.',
        },

        {
          id: 9,

          words: [
            {
              id: 'q9-harry',
              word: 'Harry',
              translation: 'Harry',
            },
            {
              id: 'q9-has',
              word: 'has',
              translation: 'tiene',
            },
            {
              id: 'q9-jackets',
              word: 'jackets',
              translation: 'chaquetas',
            },
          ],

          symbols: [
            {
              id: 'q9-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q9-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q9-harry',
              symbolId: 'q9-noun',
            },
            {
              wordId: 'q9-has',
              symbolId: 'q9-verb',
            },
            {
              wordId: 'q9-jackets',
              symbolId: 'q9-noun',
            },
          ],

          sentenceTranslation:
            'Harry tiene chaquetas.',
        },

        {
          id: 10,

          words: [
            {
              id: 'q10-anna',
              word: 'Anna',
              translation: 'Ana',
            },
            {
              id: 'q10-gives',
              word: 'gives',
              translation: 'le da',
            },
            {
              id: 'q10-jack',
              word: 'Jack',
              translation: 'Jack',
            },
            {
              id: 'q10-apples',
              word: 'apples',
              translation: 'manzanas',
            },
          ],

          symbols: [
            {
              id: 'q10-noun',
              shape: 'triangle',
              color: 'black',
              label: 'Noun',
            },
            {
              id: 'q10-verb',
              shape: 'circle',
              color: 'red',
              label: 'Verb',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q10-anna',
              symbolId: 'q10-noun',
            },
            {
              wordId: 'q10-gives',
              symbolId: 'q10-verb',
            },
            {
              wordId: 'q10-jack',
              symbolId: 'q10-noun',
            },
            {
              wordId: 'q10-apples',
              symbolId: 'q10-noun',
            },
          ],

          sentenceTranslation:
            'Anna le da manzanas a Jack.',
        },
      ],
    },
  ],
};

export default lessonA003;