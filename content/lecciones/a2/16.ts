import type { LessonContent } from '../types';

const lessonA2016: LessonContent = {
  level: 'a2',
  number: 16,
  title: 'Futuro con will: predicciones',
  subtitle: 'Aprende a hacer predicciones con will, I think y probably.',
  videoTitle: 'Futuro con will: predicciones',
  videoDescription: 'En este video verás will para predicciones, las palabras I think, probably, definitely y maybe, y la diferencia con going to.',
  objective: 'Al terminar, podrás hacer predicciones sobre el futuro con will y expresar cuánta seguridad tienes.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Will y palabras de certeza',
      instructions: 'Escribe will, probably o definitely.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'think', translation: 'creo' },
            { word: 'it', translation: 'eso' },
          ],
          after: [
            { word: 'rain', translation: 'llover' },
            { word: 'tomorrow.', translation: 'mañana' },
          ],
          answer: 'will',
          sentenceTranslation: 'Creo que lloverá mañana.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'will', translation: 'auxiliar de futuro' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'probably',
          sentenceTranslation: 'Ella probablemente llegará tarde.',
        },
        {
          id: 3,
          before: [
            { word: 'People', translation: 'personas' },
          ],
          after: [
            { word: 'live', translation: 'vivir' },
            { word: 'on', translation: 'sobre' },
            { word: 'Mars.', translation: 'Marte' },
          ],
          answer: 'will',
          sentenceTranslation: 'La gente vivirá en Marte.',
        },
        {
          id: 4,
          before: [
            { word: 'Robots', translation: 'robots' },
          ],
          after: [
            { word: 'do', translation: 'hacer' },
            { word: 'many', translation: 'muchos' },
            { word: 'jobs.', translation: 'trabajos' },
          ],
          answer: 'will',
          sentenceTranslation: 'Los robots harán muchos trabajos.',
        },
        {
          id: 5,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'don’t', translation: 'no' },
            { word: 'think', translation: 'creo' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'win.', translation: 'ganar' },
          ],
          answer: 'will',
          sentenceTranslation: 'No creo que ganen.',
        },
        {
          id: 6,
          before: [],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'rain', translation: 'llover' },
            { word: 'tomorrow?', translation: 'mañana' },
          ],
          answer: 'Will',
          sentenceTranslation: '¿Lloverá mañana?',
        },
        {
          id: 7,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'a', translation: 'un/una' },
            { word: 'great', translation: 'gran' },
            { word: 'day.', translation: 'día' },
          ],
          answer: 'will',
          sentenceTranslation: 'Será un gran día.',
        },
        {
          id: 8,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'will', translation: 'auxiliar de futuro' },
          ],
          after: [
            { word: 'win.', translation: 'ganar' },
          ],
          answer: 'definitely',
          sentenceTranslation: 'Sin duda ganarán.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Think, definitely, maybe o probably',
      instructions: 'Escribe la palabra que falta: think, definitely, maybe o probably.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'be', translation: 'ser / estar' },
            { word: 'sunny.', translation: 'soleado' },
          ],
          answer: 'think',
          sentenceTranslation: 'Creo que estará soleado.',
        },
        {
          id: 10,
          before: [
            { word: 'It', translation: 'eso' },
            { word: 'will', translation: 'auxiliar de futuro' },
          ],
          after: [
            { word: 'rain.', translation: 'llover' },
          ],
          answer: 'definitely',
          sentenceTranslation: 'Sin duda lloverá.',
        },
        {
          id: 11,
          before: [],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'come.', translation: 'venir' },
          ],
          answer: 'Maybe',
          sentenceTranslation: 'Quizás ella venga.',
        },
        {
          id: 12,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'will', translation: 'auxiliar de futuro' },
          ],
          after: [
            { word: 'win.', translation: 'ganar' },
          ],
          answer: 'probably',
          sentenceTranslation: 'Ella probablemente ganará.',
        },
        {
          id: 13,
          before: [
            { word: 'Yes,', translation: 'sí' },
            { word: 'it', translation: 'eso' },
          ],
          after: [],
          answer: 'will',
          sentenceTranslation: 'Sí, lo hará.',
        },
        {
          id: 14,
          before: [
            { word: 'What', translation: 'qué' },
          ],
          after: [
            { word: 'happen?', translation: 'pasar' },
          ],
          answer: 'will',
          sentenceTranslation: '¿Qué pasará?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué tan seguro está?',
      instructions: 'Escucha la oración y decide qué tan seguro está el hablante.',
      questions: [
        {
          id: 15,
          audioText: 'It will definitely rain.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['sure'],
          explanation: 'definitely = muy seguro.',
        },
        {
          id: 16,
          audioText: 'She will probably win.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['probable'],
          explanation: 'probably = probable.',
        },
        {
          id: 17,
          audioText: 'Maybe she will come.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['possible'],
          explanation: 'maybe = posible.',
        },
        {
          id: 18,
          audioText: 'I’m sure they will win.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['sure'],
          explanation: 'I’m sure = muy seguro.',
        },
        {
          id: 19,
          audioText: 'I think it will rain.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['probable'],
          explanation: 'I think = probable.',
        },
        {
          id: 20,
          audioText: 'Maybe it will be sunny.',
          language: 'en',
          prompt: '¿Qué tan seguro está?',
          options: [
            { id: 'sure', text: 'Muy seguro' },
            { id: 'probable', text: 'Probable' },
            { id: 'possible', text: 'Posible' },
          ],
          correctOptionIds: ['possible'],
          explanation: 'maybe = posible.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 21,
          tokens: [
            { id: 'q21-i', word: 'I', translation: 'yo' },
            { id: 'q21-think', word: 'think', translation: 'creo' },
            { id: 'q21-it', word: 'it', translation: 'eso' },
            {
              id: 'q21-will',
              word: 'will',
              translation: 'auxiliar de futuro',
            },
            { id: 'q21-rain', word: 'rain', translation: 'llover' },
            {
              id: 'q21-tomorrow',
              word: 'tomorrow.',
              translation: 'mañana',
            },
          ],
          correctOrder: ['q21-i', 'q21-think', 'q21-it', 'q21-will', 'q21-rain', 'q21-tomorrow'],
          sentenceTranslation: 'Creo que lloverá mañana.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-she', word: 'She', translation: 'ella' },
            {
              id: 'q22-will',
              word: 'will',
              translation: 'auxiliar de futuro',
            },
            {
              id: 'q22-probably',
              word: 'probably',
              translation: 'probablemente',
            },
            { id: 'q22-be', word: 'be', translation: 'ser / estar' },
            { id: 'q22-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q22-she', 'q22-will', 'q22-probably', 'q22-be', 'q22-late'],
          sentenceTranslation: 'Ella probablemente llegará tarde.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-it', word: 'It', translation: 'eso' },
            { id: 'q23-wont', word: 'won’t', translation: 'no' },
            { id: 'q23-rain', word: 'rain.', translation: 'llover' },
          ],
          correctOrder: ['q23-it', 'q23-wont', 'q23-rain'],
          sentenceTranslation: 'No lloverá.',
        },
        {
          id: 24,
          tokens: [
            {
              id: 'q24-will',
              word: 'Will',
              translation: 'auxiliar de futuro',
            },
            { id: 'q24-it', word: 'it', translation: 'eso' },
            { id: 'q24-rain', word: 'rain', translation: 'llover' },
            {
              id: 'q24-tomorrow',
              word: 'tomorrow?',
              translation: 'mañana',
            },
          ],
          correctOrder: ['q24-will', 'q24-it', 'q24-rain', 'q24-tomorrow'],
          sentenceTranslation: '¿Lloverá mañana?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-i', word: 'I', translation: 'yo' },
            { id: 'q25-dont', word: 'don’t', translation: 'no' },
            { id: 'q25-think', word: 'think', translation: 'creo' },
            { id: 'q25-they', word: 'they', translation: 'ellos' },
            {
              id: 'q25-will',
              word: 'will',
              translation: 'auxiliar de futuro',
            },
            { id: 'q25-win', word: 'win.', translation: 'ganar' },
          ],
          correctOrder: ['q25-i', 'q25-dont', 'q25-think', 'q25-they', 'q25-will', 'q25-win'],
          sentenceTranslation: 'No creo que ganen.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-people', word: 'People', translation: 'personas' },
            {
              id: 'q26-will',
              word: 'will',
              translation: 'auxiliar de futuro',
            },
            { id: 'q26-live', word: 'live', translation: 'vivir' },
            { id: 'q26-on', word: 'on', translation: 'sobre' },
            { id: 'q26-mars', word: 'Mars.', translation: 'Marte' },
          ],
          correctOrder: ['q26-people', 'q26-will', 'q26-live', 'q26-on', 'q26-mars'],
          sentenceTranslation: 'La gente vivirá en Marte.',
        },
      ],
    },
  ],
};

export default lessonA2016;
