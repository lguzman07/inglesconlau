import type { LessonContent } from '../types';

const lessonA003: LessonContent = {
  level: 'a0',

  number: 3,

  title: 'Letras A, H, J, K: familia /eɪ/',

  subtitle:
    'Practica las letras A, H, J y K mientras reconoces nombres y acciones en inglés.',

  videoSrc: '/videos/a0/03-placeholder.mp4',

  videoTitle: 'A, H, J y K en inglés',

  videoDescription:
    'En este video practicarás los nombres de las letras A, H, J y K y escucharás palabras que comienzan con ellas.',

  objective:
    'Al terminar, podrás reconocer las letras A, H, J y K y relacionarlas con palabras sencillas en inglés.',

  exercises: [
    {
      type: 'montessori',

      title: 'Nombres y acciones con A, H, J y K',

      instructions:
        'Selecciona el círculo para los nombres y el triángulo para las acciones. Luego coloca el símbolo debajo de cada palabra.',

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
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q1-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
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

          sentenceTranslation: 'Ana salta.',
        },

        {
          id: 2,

          words: [
            {
              id: 'q2-henry',
              word: 'Henry',
              translation: 'Henry',
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
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q2-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q2-henry',
              symbolId: 'q2-noun',
            },
            {
              wordId: 'q2-helps',
              symbolId: 'q2-verb',
            },
          ],

          sentenceTranslation: 'Henry ayuda.',
        },

        {
          id: 3,

          words: [
            {
              id: 'q3-jack',
              word: 'Jack',
              translation: 'Jack',
            },
            {
              id: 'q3-kicks',
              word: 'kicks',
              translation: 'patea',
            },
          ],

          symbols: [
            {
              id: 'q3-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q3-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q3-jack',
              symbolId: 'q3-noun',
            },
            {
              wordId: 'q3-kicks',
              symbolId: 'q3-verb',
            },
          ],

          sentenceTranslation: 'Jack patea.',
        },

        {
          id: 4,

          words: [
            {
              id: 'q4-kate',
              word: 'Kate',
              translation: 'Kate',
            },
            {
              id: 'q4-asks',
              word: 'asks',
              translation: 'pregunta',
            },
          ],

          symbols: [
            {
              id: 'q4-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q4-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q4-kate',
              symbolId: 'q4-noun',
            },
            {
              wordId: 'q4-asks',
              symbolId: 'q4-verb',
            },
          ],

          sentenceTranslation: 'Kate pregunta.',
        },

        {
          id: 5,

          words: [
            {
              id: 'q5-apple',
              word: 'apple',
              translation: 'manzana',
            },
            {
              id: 'q5-jumps',
              word: 'jumps',
              translation: 'salta',
            },
          ],

          symbols: [
            {
              id: 'q5-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q5-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q5-apple',
              symbolId: 'q5-noun',
            },
            {
              wordId: 'q5-jumps',
              symbolId: 'q5-verb',
            },
          ],

          sentenceTranslation:
            'Apple es un nombre. Jumps es una acción.',
        },

        {
          id: 6,

          words: [
            {
              id: 'q6-house',
              word: 'house',
              translation: 'casa',
            },
            {
              id: 'q6-helps',
              word: 'helps',
              translation: 'ayuda',
            },
          ],

          symbols: [
            {
              id: 'q6-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q6-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q6-house',
              symbolId: 'q6-noun',
            },
            {
              wordId: 'q6-helps',
              symbolId: 'q6-verb',
            },
          ],

          sentenceTranslation:
            'House es un nombre. Helps es una acción.',
        },

        {
          id: 7,

          words: [
            {
              id: 'q7-jacket',
              word: 'jacket',
              translation: 'chaqueta',
            },
            {
              id: 'q7-asks',
              word: 'asks',
              translation: 'pregunta',
            },
          ],

          symbols: [
            {
              id: 'q7-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q7-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q7-jacket',
              symbolId: 'q7-noun',
            },
            {
              wordId: 'q7-asks',
              symbolId: 'q7-verb',
            },
          ],

          sentenceTranslation:
            'Jacket es un nombre. Asks es una acción.',
        },

        {
          id: 8,

          words: [
            {
              id: 'q8-kitchen',
              word: 'kitchen',
              translation: 'cocina',
            },
            {
              id: 'q8-kicks',
              word: 'kicks',
              translation: 'patea',
            },
          ],

          symbols: [
            {
              id: 'q8-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q8-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q8-kitchen',
              symbolId: 'q8-noun',
            },
            {
              wordId: 'q8-kicks',
              symbolId: 'q8-verb',
            },
          ],

          sentenceTranslation:
            'Kitchen es un nombre. Kicks es una acción.',
        },

        {
          id: 9,

          words: [
            {
              id: 'q9-animal',
              word: 'animal',
              translation: 'animal',
            },
            {
              id: 'q9-helps',
              word: 'helps',
              translation: 'ayuda',
            },
          ],

          symbols: [
            {
              id: 'q9-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q9-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q9-animal',
              symbolId: 'q9-noun',
            },
            {
              wordId: 'q9-helps',
              symbolId: 'q9-verb',
            },
          ],

          sentenceTranslation:
            'Animal es un nombre. Helps es una acción.',
        },

        {
          id: 10,

          words: [
            {
              id: 'q10-juice',
              word: 'juice',
              translation: 'jugo',
            },
            {
              id: 'q10-jumps',
              word: 'jumps',
              translation: 'salta',
            },
          ],

          symbols: [
            {
              id: 'q10-noun',
              shape: 'circle',
              color: 'red',
              label: 'Nombre',
            },
            {
              id: 'q10-verb',
              shape: 'triangle',
              color: 'red',
              label: 'Acción',
            },
          ],

          correctPlacements: [
            {
              wordId: 'q10-juice',
              symbolId: 'q10-noun',
            },
            {
              wordId: 'q10-jumps',
              symbolId: 'q10-verb',
            },
          ],

          sentenceTranslation:
            'Juice es un nombre. Jumps es una acción.',
        },
      ],
    },
  ],
};

export default lessonA003;