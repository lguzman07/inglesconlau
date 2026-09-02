import type { LessonContent } from '../types';

const lessonA1004: LessonContent = {
  level: 'a1',
  number: 4,

  title:
    'How do you spell it?: deletrear nombre y apellido, mayúsculas y minúsculas',

  subtitle:
    'Aprende a preguntar y responder cómo se deletrea un nombre, y a distinguir mayúscula (capital letter) de minúscula (lowercase letter).',

  videoTitle: 'How do you spell it?',

  videoDescription:
    'En este video aprenderás a preguntar cómo se deletrea un nombre y a decir si una letra es mayúscula o minúscula.',

  objective:
    'Al terminar, podrás preguntar "How do you spell it?" y responder deletreando tu nombre y apellido correctamente.',

  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa la pregunta',
      instructions:
        'Escribe la palabra que falta en cada espacio. Toca una palabra si quieres ver su traducción.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [{ word: 'name?', translation: 'nombre' }],
          answer: 'your',
          sentenceTranslation: '¿Cómo se deletrea tu nombre?',
        },
        {
          id: 2,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [
            { word: 'last', translation: 'último' },
            { word: 'name?', translation: 'nombre' },
          ],
          answer: 'your',
          sentenceTranslation: '¿Cómo se deletrea tu apellido?',
        },
        {
          id: 3,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [],
          answer: 'it?',
          sentenceTranslation: '¿Cómo se deletrea eso?',
        },
        {
          id: 4,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [
            { word: 'first', translation: 'primero' },
            { word: 'name?', translation: 'nombre' },
          ],
          answer: 'your',
          sentenceTranslation: '¿Cómo se deletrea tu primer nombre?',
        },
        {
          id: 5,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [
            { word: 'full', translation: 'completo' },
            { word: 'name?', translation: 'nombre' },
          ],
          answer: 'your',
          sentenceTranslation: '¿Cómo se deletrea tu nombre completo?',
        },
      ],
    },

    {
      type: 'sentence-construction',
      title: 'Pregunta y responde sobre deletrear',
      instructions:
        'Lee cada oración en español y escríbela completa en inglés.',
      questions: [
        {
          id: 6,
          sourceSentence: '¿Cómo se deletrea tu nombre?',
          acceptedAnswers: [
            'How do you spell your name',
            'How do you spell your name?',
          ],
          modelAnswer: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
            { word: 'your', translation: 'tu' },
            { word: 'name?', translation: 'nombre' },
          ],
          explanation:
            'Usamos How do you spell...? para pedir que alguien deletree una palabra.',
        },
        {
          id: 7,
          sourceSentence: 'Es con mayúscula.',
          acceptedAnswers: [
            'It is a capital letter',
            'It is a capital letter.',
            "It's a capital letter",
            "It's a capital letter.",
          ],
          modelAnswer: [
            { word: 'It', translation: 'eso / ello' },
            { word: 'is', translation: 'es' },
            { word: 'a', translation: 'un / una' },
            { word: 'capital', translation: 'mayúscula' },
            { word: 'letter.', translation: 'letra' },
          ],
          explanation:
            'Capital letter significa letra mayúscula.',
        },
        {
          id: 8,
          sourceSentence: 'Es con minúscula.',
          acceptedAnswers: [
            'It is a lowercase letter',
            'It is a lowercase letter.',
            "It's a lowercase letter",
            "It's a lowercase letter.",
          ],
          modelAnswer: [
            { word: 'It', translation: 'eso / ello' },
            { word: 'is', translation: 'es' },
            { word: 'a', translation: 'un / una' },
            { word: 'lowercase', translation: 'minúscula' },
            { word: 'letter.', translation: 'letra' },
          ],
          explanation:
            'Lowercase letter significa letra minúscula.',
        },
        {
          id: 9,
          sourceSentence: 'Mi apellido se escribe G-U-Z-M-A-N.',
          acceptedAnswers: [
            'My last name is spelled G-U-Z-M-A-N',
            'My last name is spelled G-U-Z-M-A-N.',
          ],
          modelAnswer: [
            { word: 'My', translation: 'mi' },
            { word: 'last', translation: 'último' },
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'spelled', translation: 'deletreado' },
            { word: 'G-U-Z-M-A-N.', translation: 'G-U-Z-M-A-N' },
          ],
          explanation:
            'Usamos is spelled para decir cómo se escribe una palabra letra por letra.',
        },
        {
          id: 10,
          sourceSentence: '¿Puedes deletrearlo, por favor?',
          acceptedAnswers: [
            'Can you spell it, please',
            'Can you spell it, please?',
          ],
          modelAnswer: [
            { word: 'Can', translation: 'poder (pregunta)' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
            { word: 'it,', translation: 'eso' },
            { word: 'please?', translation: 'por favor' },
          ],
          explanation:
            'Can you...? es una forma cortés de pedirle algo a alguien.',
        },
      ],
    },

    {
      type: 'listening-choice',
      title: 'Escucha la pregunta',
      instructions:
        'Escucha la oración completa y selecciona la opción que escuchaste.',
      questions: [
        {
          id: 1,
          audioText: 'How do you spell your name?',
          language: 'en',
          prompt: '¿Qué pregunta escuchaste?',
          options: [
            {
              id: 'q1-a',
              text: 'How do you spell your name?',
              translation: '¿Cómo se deletrea tu nombre?',
            },
            {
              id: 'q1-b',
              text: 'What is your name?',
              translation: '¿Cuál es tu nombre?',
            },
            {
              id: 'q1-c',
              text: 'Where are you from?',
              translation: '¿De dónde eres?',
            },
          ],
          correctOptionIds: ['q1-a'],
          explanation:
            'How do you spell your name? pregunta cómo se deletrea, letra por letra.',
        },
        {
          id: 2,
          audioText: 'How do you spell your last name?',
          language: 'en',
          prompt: '¿Qué pregunta escuchaste?',
          options: [
            {
              id: 'q2-a',
              text: 'How do you spell your name?',
              translation: '¿Cómo se deletrea tu nombre?',
            },
            {
              id: 'q2-b',
              text: 'How do you spell your last name?',
              translation: '¿Cómo se deletrea tu apellido?',
            },
            {
              id: 'q2-c',
              text: 'I am a student.',
              translation: 'Soy estudiante.',
            },
          ],
          correctOptionIds: ['q2-b'],
          explanation:
            'Last name significa apellido.',
        },
        {
          id: 3,
          audioText: 'It is a capital letter.',
          language: 'en',
          prompt: '¿Qué oración escuchaste?',
          options: [
            {
              id: 'q3-a',
              text: 'It is a lowercase letter.',
              translation: 'Es una letra minúscula.',
            },
            {
              id: 'q3-b',
              text: 'It is a capital letter.',
              translation: 'Es una letra mayúscula.',
            },
            {
              id: 'q3-c',
              text: 'This is my family.',
              translation: 'Esta es mi familia.',
            },
          ],
          correctOptionIds: ['q3-b'],
          explanation:
            'Capital letter significa letra mayúscula.',
        },
        {
          id: 4,
          audioText: 'It is a lowercase letter.',
          language: 'en',
          prompt: '¿Qué oración escuchaste?',
          options: [
            {
              id: 'q4-a',
              text: 'It is a lowercase letter.',
              translation: 'Es una letra minúscula.',
            },
            {
              id: 'q4-b',
              text: 'It is a capital letter.',
              translation: 'Es una letra mayúscula.',
            },
            {
              id: 'q4-c',
              text: 'How do you spell it?',
              translation: '¿Cómo se deletrea eso?',
            },
          ],
          correctOptionIds: ['q4-a'],
          explanation:
            'Lowercase letter significa letra minúscula.',
        },
        {
          id: 5,
          audioText: 'Can you spell it, please?',
          language: 'en',
          prompt: '¿Qué pregunta escuchaste?',
          options: [
            {
              id: 'q5-a',
              text: 'How are you?',
              translation: '¿Cómo estás?',
            },
            {
              id: 'q5-b',
              text: 'What is your name?',
              translation: '¿Cuál es tu nombre?',
            },
            {
              id: 'q5-c',
              text: 'Can you spell it, please?',
              translation: '¿Puedes deletrearlo, por favor?',
            },
          ],
          correctOptionIds: ['q5-c'],
          explanation:
            'Can you...please? es una forma cortés de pedir algo.',
        },
      ],
    },
  ],
};

export default lessonA1004;
