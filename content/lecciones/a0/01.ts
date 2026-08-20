import type { LessonContent } from '../types';

const lessonA001: LessonContent = {
  level: 'a0',
  number: 1,
  title: 'Presentarte: I am / My name is',
  subtitle:
    'Aprende a decir quién eres, de dónde eres y cómo decir tu nombre en inglés.',
  videoSrc: '/videos/a0/01-placeholder.mp4',
  videoTitle: 'Preséntate en inglés',
  videoDescription:
    'En este video aprenderás a usar “I am” y “My name is” para hablar de ti.',
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
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            { word: 'a', translation: 'un / una' },
            { word: 'teacher.', translation: 'profesor / profesora' },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy profesor o profesora.',
        },
        {
          id: 2,
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            {
              word: 'Dominican.',
              translation: 'dominicano / dominicana',
            },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy dominicano o dominicana.',
        },
        {
          id: 3,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'name', translation: 'nombre' },
          ],
          after: [{ word: 'Ana.', translation: 'Ana' }],
          answer: 'is',
          sentenceTranslation: 'Mi nombre es Ana.',
        },
        {
          id: 4,
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            { word: 'a', translation: 'un / una' },
            { word: 'student.', translation: 'estudiante' },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy estudiante.',
        },
        {
          id: 5,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'name', translation: 'nombre' },
          ],
          after: [{ word: 'Carlos.', translation: 'Carlos' }],
          answer: 'is',
          sentenceTranslation: 'Mi nombre es Carlos.',
        },
        {
          id: 6,
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            { word: 'from', translation: 'de' },
            { word: 'the', translation: 'el / la' },
            {
              word: 'Dominican Republic.',
              translation: 'República Dominicana',
            },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy de República Dominicana.',
        },
        {
          id: 7,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'name', translation: 'nombre' },
          ],
          after: [{ word: 'María.', translation: 'María' }],
          answer: 'is',
          sentenceTranslation: 'Mi nombre es María.',
        },
        {
          id: 8,
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            { word: 'a', translation: 'un / una' },
            { word: 'doctor.', translation: 'médico / médica' },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy médico o médica.',
        },
        {
          id: 9,
          before: [{ word: 'I', translation: 'yo' }],
          after: [
            { word: 'from', translation: 'de' },
            { word: 'Santo Domingo.', translation: 'Santo Domingo' },
          ],
          answer: 'am',
          sentenceTranslation: 'Soy de Santo Domingo.',
        },
        {
          id: 10,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'name', translation: 'nombre' },
          ],
          after: [{ word: 'Daniel.', translation: 'Daniel' }],
          answer: 'is',
          sentenceTranslation: 'Mi nombre es Daniel.',
        },
      ],
    },
  ],
};

export default lessonA001;