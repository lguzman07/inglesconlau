import type { LessonContent } from '../types';

const lessonA1007: LessonContent = {
  level: 'a1',
  number: 7,

  title: 'Saludos y despedidas según la hora del día',

  subtitle:
    'Aprende a saludar y despedirte en inglés según la hora del día: morning, afternoon, evening y night.',

  videoTitle: 'Saludos y despedidas',

  videoDescription:
    'En este video aprenderás a usar Good morning, Good afternoon, Good evening y Good night, y frases para despedirte.',

  objective:
    'Al terminar, podrás saludar y despedirte correctamente según la hora del día.',

  exercises: [
    {
      type: 'sentence-construction',
      title: 'Saluda y despídete',
      instructions:
        'Lee cada oración en español y escríbela completa en inglés.',
      questions: [
        {
          id: 1,
          sourceSentence: 'Buenos días.',
          acceptedAnswers: ['Good morning', 'Good morning.'],
          modelAnswer: [
            { word: 'Good', translation: 'buen / buena' },
            { word: 'morning.', translation: 'mañana' },
          ],
          explanation:
            'Good morning se usa desde que te levantas hasta el mediodía.',
        },
        {
          id: 2,
          sourceSentence: 'Buenas tardes.',
          acceptedAnswers: ['Good afternoon', 'Good afternoon.'],
          modelAnswer: [
            { word: 'Good', translation: 'buen / buena' },
            { word: 'afternoon.', translation: 'tarde' },
          ],
          explanation:
            'Good afternoon se usa desde el mediodía hasta antes del atardecer.',
        },
        {
          id: 3,
          sourceSentence: 'Buenas noches. (al despedirte)',
          acceptedAnswers: ['Good night', 'Good night.'],
          modelAnswer: [
            { word: 'Good', translation: 'buen / buena' },
            { word: 'night.', translation: 'noche' },
          ],
          explanation:
            'Good night se usa solo para despedirte, no para saludar al llegar.',
        },
        {
          id: 4,
          sourceSentence: 'Adiós, nos vemos pronto.',
          acceptedAnswers: [
            'Goodbye, see you soon',
            'Goodbye, see you soon.',
          ],
          modelAnswer: [
            { word: 'Goodbye,', translation: 'adiós' },
            { word: 'see', translation: 'ver' },
            { word: 'you', translation: 'te' },
            { word: 'soon.', translation: 'pronto' },
          ],
          explanation: 'See you soon significa nos vemos pronto.',
        },
        {
          id: 5,
          sourceSentence: 'Nos vemos más tarde.',
          acceptedAnswers: ['See you later', 'See you later.'],
          modelAnswer: [
            { word: 'See', translation: 'ver' },
            { word: 'you', translation: 'te' },
            { word: 'later.', translation: 'más tarde' },
          ],
          explanation:
            'See you later es una despedida informal muy común.',
        },
      ],
    },

    {
      type: 'fill-in-the-blanks',
      title: 'Completa el saludo según la hora',
      instructions:
        'Mira la hora y escribe la palabra que falta: morning, afternoon, evening o night.',
      questions: [
        {
          id: 6,
          before: [
            { word: 'It’s', translation: 'son las' },
            { word: '8', translation: '8' },
            { word: 'AM.', translation: 'a.m.' },
            { word: 'Good', translation: 'buen / buena' },
          ],
          after: [],
          answer: 'morning!',
          sentenceTranslation: 'Son las 8 a.m. ¡Buenos días!',
        },
        {
          id: 7,
          before: [
            { word: 'It’s', translation: 'son las' },
            { word: '10', translation: '10' },
            { word: 'AM.', translation: 'a.m.' },
            { word: 'Good', translation: 'buen / buena' },
          ],
          after: [],
          answer: 'morning!',
          sentenceTranslation: 'Son las 10 a.m. ¡Buenos días!',
        },
        {
          id: 8,
          before: [
            { word: 'It’s', translation: 'son las' },
            { word: '2', translation: '2' },
            { word: 'PM.', translation: 'p.m.' },
            { word: 'Good', translation: 'buen / buena' },
          ],
          after: [],
          answer: 'afternoon!',
          sentenceTranslation: 'Son las 2 p.m. ¡Buenas tardes!',
        },
        {
          id: 9,
          before: [
            { word: 'It’s', translation: 'son las' },
            { word: '7', translation: '7' },
            { word: 'PM.', translation: 'p.m.' },
            { word: 'Good', translation: 'buen / buena' },
          ],
          after: [],
          answer: 'evening!',
          sentenceTranslation: 'Son las 7 p.m. ¡Buenas tardes/noches!',
        },
        {
          id: 10,
          before: [
            { word: 'It’s', translation: 'son las' },
            { word: '11', translation: '11' },
            { word: 'PM.', translation: 'p.m.' },
            { word: 'Good', translation: 'buen / buena' },
          ],
          after: [],
          answer: 'night!',
          sentenceTranslation: 'Son las 11 p.m. ¡Buenas noches!',
        },
      ],
    },

    {
      type: 'montessori',
      title: 'Saludo o despedida',
      instructions:
        'Lee cada frase. Arrastra Greeting o Farewell debajo, o selecciona el símbolo y luego toca la frase.',
      questions: [
        {
          id: 1,
          words: [
            { id: 'q1-phrase', word: 'Good morning.', translation: 'buenos días' },
          ],
          symbols: [
            { id: 'q1-greeting', shape: 'circle', color: 'yellow', label: 'Greeting' },
            { id: 'q1-farewell', shape: 'triangle', color: 'purple', label: 'Farewell' },
          ],
          correctPlacements: [
            { wordId: 'q1-phrase', symbolId: 'q1-greeting' },
          ],
          sentenceTranslation: 'Good morning es un saludo.',
        },
        {
          id: 2,
          words: [
            { id: 'q2-phrase', word: 'Good night.', translation: 'buenas noches (despedida)' },
          ],
          symbols: [
            { id: 'q2-greeting', shape: 'circle', color: 'yellow', label: 'Greeting' },
            { id: 'q2-farewell', shape: 'triangle', color: 'purple', label: 'Farewell' },
          ],
          correctPlacements: [
            { wordId: 'q2-phrase', symbolId: 'q2-farewell' },
          ],
          sentenceTranslation: 'Good night es una despedida, no un saludo.',
        },
        {
          id: 3,
          words: [
            { id: 'q3-phrase', word: 'Goodbye.', translation: 'adiós' },
          ],
          symbols: [
            { id: 'q3-greeting', shape: 'circle', color: 'yellow', label: 'Greeting' },
            { id: 'q3-farewell', shape: 'triangle', color: 'purple', label: 'Farewell' },
          ],
          correctPlacements: [
            { wordId: 'q3-phrase', symbolId: 'q3-farewell' },
          ],
          sentenceTranslation: 'Goodbye es una despedida.',
        },
        {
          id: 4,
          words: [
            { id: 'q4-phrase', word: 'Hello.', translation: 'hola' },
          ],
          symbols: [
            { id: 'q4-greeting', shape: 'circle', color: 'yellow', label: 'Greeting' },
            { id: 'q4-farewell', shape: 'triangle', color: 'purple', label: 'Farewell' },
          ],
          correctPlacements: [
            { wordId: 'q4-phrase', symbolId: 'q4-greeting' },
          ],
          sentenceTranslation: 'Hello es un saludo.',
        },
        {
          id: 5,
          words: [
            { id: 'q5-phrase', word: 'See you later.', translation: 'nos vemos más tarde' },
          ],
          symbols: [
            { id: 'q5-greeting', shape: 'circle', color: 'yellow', label: 'Greeting' },
            { id: 'q5-farewell', shape: 'triangle', color: 'purple', label: 'Farewell' },
          ],
          correctPlacements: [
            { wordId: 'q5-phrase', symbolId: 'q5-farewell' },
          ],
          sentenceTranslation: 'See you later es una despedida.',
        },
      ],
    },
  ],
};

export default lessonA1007;
