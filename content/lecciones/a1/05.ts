import type { LessonContent } from '../types';

const lessonA1005: LessonContent = {
  level: 'a1',
  number: 5,

  title: 'Correos electrónicos: at, dot, confirmar y corregir letras',

  subtitle:
    'Aprende a decir tu correo electrónico en voz alta usando at y dot, y a confirmar o corregir letras.',

  videoTitle: 'Cómo decir tu correo electrónico',

  videoDescription:
    'En este video aprenderás a decir un correo electrónico en voz alta usando at y dot, y frases para confirmar o corregir.',

  objective:
    'Al terminar, podrás decir tu correo electrónico en voz alta y pedirle a alguien que confirme o corrija una letra.',

  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa el correo electrónico',
      instructions:
        'Escribe la palabra que falta en cada espacio: at o dot. Toca una palabra si quieres ver su traducción.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'laura', translation: 'laura' },
          ],
          after: [
            { word: 'gmail', translation: 'gmail' },
            { word: 'dot', translation: 'punto' },
            { word: 'com.', translation: 'com' },
          ],
          answer: 'at',
          sentenceTranslation: 'Mi correo es laura arroba gmail punto com.',
        },
        {
          id: 2,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'ana', translation: 'ana' },
            { word: 'at', translation: 'arroba' },
            { word: 'gmail', translation: 'gmail' },
          ],
          after: [{ word: 'com.', translation: 'com' }],
          answer: 'dot',
          sentenceTranslation: 'Mi correo es ana arroba gmail punto com.',
        },
        {
          id: 3,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'daniel', translation: 'daniel' },
          ],
          after: [
            { word: 'hotmail', translation: 'hotmail' },
            { word: 'dot', translation: 'punto' },
            { word: 'com.', translation: 'com' },
          ],
          answer: 'at',
          sentenceTranslation: 'Mi correo es daniel arroba hotmail punto com.',
        },
        {
          id: 4,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'sofia', translation: 'sofía' },
            { word: 'at', translation: 'arroba' },
            { word: 'yahoo', translation: 'yahoo' },
          ],
          after: [{ word: 'com.', translation: 'com' }],
          answer: 'dot',
          sentenceTranslation: 'Mi correo es sofia arroba yahoo punto com.',
        },
        {
          id: 5,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'carlos', translation: 'carlos' },
          ],
          after: [
            { word: 'gmail', translation: 'gmail' },
            { word: 'dot', translation: 'punto' },
            { word: 'com.', translation: 'com' },
          ],
          answer: 'at',
          sentenceTranslation: 'Mi correo es carlos arroba gmail punto com.',
        },
      ],
    },

    {
      type: 'listening-choice',
      title: 'Escucha el correo electrónico',
      instructions:
        'Escucha el correo electrónico y selecciona la opción escrita correctamente.',
      questions: [
        {
          id: 1,
          audioText: 'laura at gmail dot com',
          language: 'en',
          prompt: '¿Cuál es el correo correcto?',
          options: [
            { id: 'q1-a', text: 'laura@gmail.com', translation: 'correcto' },
            { id: 'q1-b', text: 'laura.gmail@com', translation: 'incorrecto' },
            { id: 'q1-c', text: 'lauragmail.com', translation: 'incorrecto' },
          ],
          correctOptionIds: ['q1-a'],
          explanation: 'At es @ y dot es el punto antes de com.',
        },
        {
          id: 2,
          audioText: 'ana at hotmail dot com',
          language: 'en',
          prompt: '¿Cuál es el correo correcto?',
          options: [
            { id: 'q2-a', text: 'ana@hotmail,com', translation: 'incorrecto' },
            { id: 'q2-b', text: 'anahotmail@com', translation: 'incorrecto' },
            { id: 'q2-c', text: 'ana@hotmail.com', translation: 'correcto' },
          ],
          correctOptionIds: ['q2-c'],
          explanation: 'Dot siempre es un punto (.), nunca una coma.',
        },
        {
          id: 3,
          audioText: 'daniel at yahoo dot com',
          language: 'en',
          prompt: '¿Cuál es el correo correcto?',
          options: [
            { id: 'q3-a', text: 'daniel.yahoo@com', translation: 'incorrecto' },
            { id: 'q3-b', text: 'danielyahoo.com', translation: 'incorrecto' },
            { id: 'q3-c', text: 'daniel@yahoo.com', translation: 'correcto' },
          ],
          correctOptionIds: ['q3-c'],
          explanation: 'At va antes del dominio (yahoo), dot va antes de com.',
        },
        {
          id: 4,
          audioText: 'sofia at gmail dot com',
          language: 'en',
          prompt: '¿Cuál es el correo correcto?',
          options: [
            { id: 'q4-a', text: 'sofia@gmail.com', translation: 'correcto' },
            { id: 'q4-b', text: 'sofiagmail@com', translation: 'incorrecto' },
            { id: 'q4-c', text: 'sofia.gmail.com', translation: 'incorrecto' },
          ],
          correctOptionIds: ['q4-a'],
          explanation: 'At es @ y siempre va antes del nombre del dominio.',
        },
        {
          id: 5,
          audioText: 'carlos at hotmail dot com',
          language: 'en',
          prompt: '¿Cuál es el correo correcto?',
          options: [
            { id: 'q5-a', text: 'carlos hotmail.com', translation: 'incorrecto' },
            { id: 'q5-b', text: 'carlos@hotmail,com', translation: 'incorrecto' },
            { id: 'q5-c', text: 'carlos@hotmail.com', translation: 'correcto' },
          ],
          correctOptionIds: ['q5-c'],
          explanation: 'Dot siempre es un punto (.), nunca una coma.',
        },
      ],
    },

    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras (confirmar y corregir)',
      instructions:
        'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 6,
          tokens: [
            { id: 'q6-email', word: 'email?', translation: 'correo' },
            { id: 'q6-your', word: 'your', translation: 'tu' },
            { id: 'q6-can', word: 'Can', translation: 'poder (pregunta)' },
            { id: 'q6-confirm', word: 'confirm', translation: 'confirmar' },
            { id: 'q6-you', word: 'you', translation: 'tú' },
          ],
          correctOrder: ['q6-can', 'q6-you', 'q6-confirm', 'q6-your', 'q6-email'],
          sentenceTranslation: '¿Puedes confirmar tu correo?',
        },
        {
          id: 7,
          tokens: [
            { id: 'q7-please', word: 'please.', translation: 'por favor' },
            { id: 'q7-email', word: 'email,', translation: 'correo' },
            { id: 'q7-repeat', word: 'Repeat', translation: 'repite' },
            { id: 'q7-your', word: 'your', translation: 'tu' },
          ],
          correctOrder: ['q7-repeat', 'q7-your', 'q7-email', 'q7-please'],
          sentenceTranslation: 'Repite tu correo, por favor.',
        },
        {
          id: 8,
          tokens: [
            { id: 'q8-please', word: 'please.', translation: 'por favor' },
            { id: 'q8-the', word: 'the', translation: 'la' },
            { id: 'q8-correct', word: 'Correct', translation: 'corrige' },
            { id: 'q8-letter', word: 'letter,', translation: 'letra' },
          ],
          correctOrder: ['q8-correct', 'q8-the', 'q8-letter', 'q8-please'],
          sentenceTranslation: 'Corrige la letra, por favor.',
        },
        {
          id: 9,
          tokens: [
            { id: 'q9-lowercase', word: 'lowercase.', translation: 'minúscula' },
            { id: 'q9-all', word: 'all', translation: 'todo' },
            { id: 'q9-its', word: 'It’s', translation: 'es' },
          ],
          correctOrder: ['q9-its', 'q9-all', 'q9-lowercase'],
          sentenceTranslation: 'Es todo en minúsculas.',
        },
        {
          id: 10,
          tokens: [
            { id: 'q10-com', word: 'com.', translation: 'com' },
            { id: 'q10-laura', word: 'laura', translation: 'laura' },
            { id: 'q10-dot', word: 'dot', translation: 'punto' },
            { id: 'q10-my', word: 'My', translation: 'mi' },
            { id: 'q10-gmail', word: 'gmail', translation: 'gmail' },
            { id: 'q10-at', word: 'at', translation: 'arroba' },
            { id: 'q10-emailis', word: 'email is', translation: 'correo es' },
          ],
          correctOrder: [
            'q10-my',
            'q10-emailis',
            'q10-laura',
            'q10-at',
            'q10-gmail',
            'q10-dot',
            'q10-com',
          ],
          sentenceTranslation: 'Mi correo es laura arroba gmail punto com.',
        },
      ],
    },
  ],
};

export default lessonA1005;
