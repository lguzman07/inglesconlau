import type { LessonContent } from '../types';

const lessonA1002: LessonContent = {
  level: 'a1',

  number: 2,

  title: 'Tu familia',

  subtitle:
    'Aprende a presentar a tu familia usando this is / these are y palabras como mother, father, sister y brother.',

  videoTitle: 'Tu familia',

  videoDescription:
    'En este video aprenderás a presentar a los miembros de tu familia en inglés.',

  objective:
    'Al terminar, podrás presentar a los miembros de tu familia usando this is y these are.',

  videoSrc: '414101fd-2166-45b1-85fa-0d0691f3f1de',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe la palabra correcta. Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [
            { word: 'This', translation: 'Esta' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
          ],
          after: [],
          answer: 'mom.',
          hint: 'mamá',
          sentenceTranslation: 'Esta es mi mamá.',
        },

        {
          id: 2,
          before: [
            { word: 'This', translation: 'Este' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
          ],
          after: [],
          answer: 'dad.',
          hint: 'papá',
          sentenceTranslation: 'Este es mi papá.',
        },

        {
          id: 3,
          before: [
            { word: 'These', translation: 'Estos' },
            { word: 'are', translation: 'son' },
            { word: 'my', translation: 'mis' },
          ],
          after: [],
          answer: 'parents.',
          hint: 'padres',
          sentenceTranslation: 'Estos son mis padres.',
        },

        {
          id: 4,
          before: [
            { word: 'This', translation: 'Este' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
          ],
          after: [],
          answer: 'brother.',
          hint: 'hermano',
          sentenceTranslation: 'Este es mi hermano.',
        },

        {
          id: 5,
          before: [
            { word: 'This', translation: 'Esta' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
          ],
          after: [],
          answer: 'sister.',
          hint: 'hermana',
          sentenceTranslation: 'Esta es mi hermana.',
        },

        {
          id: 6,
          before: [
            { word: 'These', translation: 'Estos' },
            { word: 'are', translation: 'son' },
            { word: 'my', translation: 'mis' },
          ],
          after: [],
          answer: 'siblings.',
          hint: 'hermanos',
          sentenceTranslation: 'Estos son mis hermanos.',
        },

        {
          id: 7,
          before: [],
          after: [
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'mom.', translation: 'mamá' },
          ],
          answer: 'This',
          hint: 'este/esta',
          sentenceTranslation: 'Esta es mi mamá.',
        },

        {
          id: 8,
          before: [],
          after: [
            { word: 'are', translation: 'son' },
            { word: 'my', translation: 'mis' },
            { word: 'sisters.', translation: 'hermanas' },
          ],
          answer: 'These',
          hint: 'estos/estas',
          sentenceTranslation: 'Estas son mis hermanas.',
        },

        {
          id: 9,
          before: [
            { word: 'This', translation: 'Este' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'brother.', translation: 'hermano' },
          ],
          after: [
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'Noel.', translation: 'Noel' },
          ],
          answer: 'His',
          hint: 'su (de él)',
          sentenceTranslation: 'Este es mi hermano. Su nombre es Noel.',
        },

        {
          id: 10,
          before: [
            { word: 'This', translation: 'Esta' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'mom.', translation: 'mamá' },
          ],
          after: [
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'Mary.', translation: 'Mary' },
          ],
          answer: 'Her',
          hint: 'su (de ella)',
          sentenceTranslation: 'Esta es mi mamá. Su nombre es Mary.',
        },

        {
          id: 11,
          before: [
            { word: 'This', translation: 'Este' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'dad.', translation: 'papá' },
          ],
          after: [
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'Raul.', translation: 'Raúl' },
          ],
          answer: 'His',
          hint: 'su (de él)',
          sentenceTranslation: 'Este es mi papá. Su nombre es Raúl.',
        },

        {
          id: 12,
          before: [
            { word: 'This', translation: 'Esta' },
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'mom.', translation: 'mamá' },
          ],
          after: [
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'Joanna.', translation: 'Joanna' },
          ],
          answer: 'Her',
          hint: 'su (de ella)',
          sentenceTranslation: 'Esta es mi mamá. Su nombre es Joanna.',
        },
      ],
    },

    {
      type: 'drag-and-drop',

      title: 'Ordena las palabras',

      instructions:
        'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',

      questions: [
        {
          id: 13,
          tokens: [
            { id: 'q13-this', word: 'This', translation: 'esta' },
            { id: 'q13-is', word: 'is', translation: 'es' },
            { id: 'q13-my', word: 'my', translation: 'mi' },
            { id: 'q13-mom', word: 'mom.', translation: 'mamá' },
          ],
          correctOrder: ['q13-this', 'q13-is', 'q13-my', 'q13-mom'],
          sentenceTranslation: 'Esta es mi mamá.',
        },

        {
          id: 14,
          tokens: [
            { id: 'q14-this', word: 'This', translation: 'este' },
            { id: 'q14-is', word: 'is', translation: 'es' },
            { id: 'q14-my', word: 'my', translation: 'mi' },
            { id: 'q14-dad', word: 'dad.', translation: 'papá' },
          ],
          correctOrder: ['q14-this', 'q14-is', 'q14-my', 'q14-dad'],
          sentenceTranslation: 'Este es mi papá.',
        },

        {
          id: 15,
          tokens: [
            { id: 'q15-these', word: 'These', translation: 'estos' },
            { id: 'q15-are', word: 'are', translation: 'son' },
            { id: 'q15-my', word: 'my', translation: 'mis' },
            { id: 'q15-parents', word: 'parents.', translation: 'padres' },
          ],
          correctOrder: ['q15-these', 'q15-are', 'q15-my', 'q15-parents'],
          sentenceTranslation: 'Estos son mis padres.',
        },

        {
          id: 16,
          tokens: [
            { id: 'q16-this', word: 'This', translation: 'este' },
            { id: 'q16-is', word: 'is', translation: 'es' },
            { id: 'q16-my', word: 'my', translation: 'mi' },
            { id: 'q16-brother', word: 'brother.', translation: 'hermano' },
          ],
          correctOrder: ['q16-this', 'q16-is', 'q16-my', 'q16-brother'],
          sentenceTranslation: 'Este es mi hermano.',
        },

        {
          id: 17,
          tokens: [
            { id: 'q17-this', word: 'This', translation: 'esta' },
            { id: 'q17-is', word: 'is', translation: 'es' },
            { id: 'q17-my', word: 'my', translation: 'mi' },
            { id: 'q17-sister', word: 'sister.', translation: 'hermana' },
          ],
          correctOrder: ['q17-this', 'q17-is', 'q17-my', 'q17-sister'],
          sentenceTranslation: 'Esta es mi hermana.',
        },

        {
          id: 18,
          tokens: [
            { id: 'q18-these', word: 'These', translation: 'estos' },
            { id: 'q18-are', word: 'are', translation: 'son' },
            { id: 'q18-my', word: 'my', translation: 'mis' },
            { id: 'q18-siblings', word: 'siblings.', translation: 'hermanos' },
          ],
          correctOrder: ['q18-these', 'q18-are', 'q18-my', 'q18-siblings'],
          sentenceTranslation: 'Estos son mis hermanos.',
        },

        {
          id: 19,
          tokens: [
            { id: 'q19-her', word: 'Her', translation: 'su (de ella)' },
            { id: 'q19-name', word: 'name', translation: 'nombre' },
            { id: 'q19-is', word: 'is', translation: 'es' },
            { id: 'q19-mary', word: 'Mary.', translation: 'Mary' },
          ],
          correctOrder: ['q19-her', 'q19-name', 'q19-is', 'q19-mary'],
          sentenceTranslation: 'Su nombre es Mary.',
        },

        {
          id: 20,
          tokens: [
            { id: 'q20-his', word: 'His', translation: 'su (de él)' },
            { id: 'q20-name', word: 'name', translation: 'nombre' },
            { id: 'q20-is', word: 'is', translation: 'es' },
            { id: 'q20-carlos', word: 'Carlos.', translation: 'Carlos' },
          ],
          correctOrder: ['q20-his', 'q20-name', 'q20-is', 'q20-carlos'],
          sentenceTranslation: 'Su nombre es Carlos.',
        },
      ],
    },
  ],
};

export default lessonA1002;
