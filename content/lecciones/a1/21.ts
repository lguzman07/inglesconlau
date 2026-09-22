import type { LessonContent } from '../types';

const lessonA1021: LessonContent = {
  level: 'a1',
  number: 21,
  title: 'Likes y dislikes',
  subtitle: 'Aprende a decir lo que te gusta y lo que no, y a preguntar por los gustos de otros.',
  videoTitle: 'Likes y dislikes',
  videoDescription: 'En este video aprenderás I like, I don’t like, likes y doesn’t like, y las preguntas Do you like...? y Does she like...?',
  objective: 'Al terminar, podrás hablar de lo que te gusta y no te gusta, y preguntar por los gustos de otras personas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Like, love, hate y likes',
      instructions: 'Escribe like, love, hate o likes. Con he y she usamos likes.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'pizza.', translation: 'pizza' },
          ],
          answer: 'like',
          sentenceTranslation: 'Me gusta la pizza.',
        },
        {
          id: 2,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'music.', translation: 'música' },
          ],
          answer: 'love',
          sentenceTranslation: 'Me encanta la música.',
        },
        {
          id: 3,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'cold', translation: 'frío' },
            { word: 'weather.', translation: 'clima' },
          ],
          answer: 'hate',
          sentenceTranslation: 'Odio el clima frío.',
        },
        {
          id: 4,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'cats.', translation: 'gatos' },
          ],
          answer: 'likes',
          sentenceTranslation: 'A ella le gustan los gatos.',
        },
        {
          id: 5,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'coffee.', translation: 'café' },
          ],
          answer: 'likes',
          sentenceTranslation: 'A él le gusta el café.',
        },
        {
          id: 6,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'tea.', translation: 'té' },
          ],
          answer: 'like',
          sentenceTranslation: 'A ellos les gusta el té.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Preguntas y negativos',
      instructions: 'Escribe do, does o not.',
      questions: [
        {
          id: 7,
          before: [],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'like', translation: 'gustar' },
            { word: 'pizza?', translation: 'pizza' },
          ],
          answer: 'Do',
          sentenceTranslation: '¿Te gusta la pizza?',
        },
        {
          id: 8,
          before: [],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'like', translation: 'gustar' },
            { word: 'music?', translation: 'música' },
          ],
          answer: 'Does',
          sentenceTranslation: '¿Le gusta la música a ella?',
        },
        {
          id: 9,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'does', translation: 'auxiliar' },
          ],
          after: [
            { word: 'like', translation: 'gustar' },
            { word: 'fish.', translation: 'pescado' },
          ],
          answer: 'not',
          sentenceTranslation: 'A él no le gusta el pescado.',
        },
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'like', translation: 'gustar' },
            { word: 'tea', translation: 'té' },
          ],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'is', translation: 'es' },
            { word: 'hot.', translation: 'caliente' },
          ],
          answer: 'because',
          sentenceTranslation: 'Me gusta el té porque está caliente.',
        },
        {
          id: 11,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'like', translation: 'gustar' },
            { word: 'fish', translation: 'pescado' },
          ],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'don’t', translation: 'no' },
            { word: 'like', translation: 'gustar' },
            { word: 'chicken.', translation: 'pollo' },
          ],
          answer: 'but',
          sentenceTranslation: 'Me gusta el pescado pero no el pollo.',
        },
        {
          id: 12,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'likes', translation: 'le gusta' },
          ],
          after: [],
          answer: 'reading',
          hint: 'read',
          sentenceTranslation: 'A ella le gusta leer.',
        },
        {
          id: 13,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'like', translation: 'gustar' },
          ],
          after: [],
          answer: 'swimming',
          hint: 'swim',
          sentenceTranslation: 'Me gusta nadar.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Le gusta o no?',
      instructions: 'Escucha la oración y decide si a la persona le gusta o no le gusta.',
      questions: [
        {
          id: 14,
          audioText: 'I like pizza.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'like = gusta.',
        },
        {
          id: 15,
          audioText: 'I don’t like fish.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['no'],
          explanation: 'don’t like = no gusta.',
        },
        {
          id: 16,
          audioText: 'I love music.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'love = encanta.',
        },
        {
          id: 17,
          audioText: 'I hate cold weather.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['no'],
          explanation: 'hate = odia.',
        },
        {
          id: 18,
          audioText: 'She doesn’t like dogs.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['no'],
          explanation: 'doesn’t like = no le gusta.',
        },
        {
          id: 19,
          audioText: 'He likes coffee.',
          language: 'en',
          prompt: '¿Le gusta o no le gusta?',
          options: [
            { id: 'yes', text: 'Le gusta' },
            { id: 'no', text: 'No le gusta' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'likes = le gusta.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 20,
          tokens: [
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-like', word: 'like', translation: 'gustar' },
            { id: 'q20-pizza', word: 'pizza.', translation: 'pizza' },
          ],
          correctOrder: ['q20-i', 'q20-like', 'q20-pizza'],
          sentenceTranslation: 'Me gusta la pizza.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-she', word: 'She', translation: 'ella' },
            { id: 'q21-likes', word: 'likes', translation: 'le gusta' },
            { id: 'q21-reading', word: 'reading.', translation: 'leer' },
          ],
          correctOrder: ['q21-she', 'q21-likes', 'q21-reading'],
          sentenceTranslation: 'A ella le gusta leer.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-he', word: 'He', translation: 'él' },
            { id: 'q22-doesnt', word: 'doesn’t', translation: 'no' },
            { id: 'q22-like', word: 'like', translation: 'gustar' },
            { id: 'q22-fish', word: 'fish.', translation: 'pescado' },
          ],
          correctOrder: ['q22-he', 'q22-doesnt', 'q22-like', 'q22-fish'],
          sentenceTranslation: 'A él no le gusta el pescado.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-do', word: 'Do', translation: 'auxiliar' },
            { id: 'q23-you', word: 'you', translation: 'tú' },
            { id: 'q23-like', word: 'like', translation: 'gustar' },
            { id: 'q23-pizza', word: 'pizza?', translation: 'pizza' },
          ],
          correctOrder: ['q23-do', 'q23-you', 'q23-like', 'q23-pizza'],
          sentenceTranslation: '¿Te gusta la pizza?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-does', word: 'Does', translation: 'auxiliar' },
            { id: 'q24-she', word: 'she', translation: 'ella' },
            { id: 'q24-like', word: 'like', translation: 'gustar' },
            { id: 'q24-music', word: 'music?', translation: 'música' },
          ],
          correctOrder: ['q24-does', 'q24-she', 'q24-like', 'q24-music'],
          sentenceTranslation: '¿Le gusta la música a ella?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-i', word: 'I', translation: 'yo' },
            { id: 'q25-like', word: 'like', translation: 'gustar' },
            { id: 'q25-tea', word: 'tea', translation: 'té' },
            { id: 'q25-because', word: 'because', translation: 'porque' },
            { id: 'q25-it', word: 'it', translation: 'eso' },
            { id: 'q25-is', word: 'is', translation: 'es' },
            { id: 'q25-hot', word: 'hot.', translation: 'caliente' },
          ],
          correctOrder: ['q25-i', 'q25-like', 'q25-tea', 'q25-because', 'q25-it', 'q25-is', 'q25-hot'],
          sentenceTranslation: 'Me gusta el té porque está caliente.',
        },
      ],
    },
  ],
};

export default lessonA1021;
