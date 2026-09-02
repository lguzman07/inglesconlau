import type { LessonContent } from '../types';

const lessonA1006: LessonContent = {
  level: 'a1',
  number: 6,

  title: 'Dictado de nombres, apellidos y correos electrónicos',

  subtitle:
    'Practica escuchar y escribir correctamente nombres, apellidos y correos electrónicos en inglés.',

  videoTitle: 'Practica de dictado',

  videoDescription:
    'En este video practicarás escuchar nombres, apellidos y correos electrónicos, y escribirlos correctamente.',

  objective:
    'Al terminar, podrás escuchar un nombre, apellido o correo electrónico y escribirlo correctamente.',

  exercises: [
    {
      type: 'listening-choice',
      title: 'Escucha y elige lo correcto',
      instructions:
        'Escucha con atención y selecciona la opción escrita correctamente.',
      questions: [
        {
          id: 1,
          audioText: 'Laura Guzman',
          language: 'en',
          prompt: '¿Cuál está escrito correctamente?',
          options: [
            { id: 'q1-a', text: 'Laura Guzman', translation: 'correcto' },
            { id: 'q1-b', text: 'laura guzman', translation: 'incorrecto' },
            { id: 'q1-c', text: 'Laura Guzmann', translation: 'incorrecto' },
          ],
          correctOptionIds: ['q1-a'],
          explanation:
            'Los nombres y apellidos siempre empiezan con mayúscula.',
        },
        {
          id: 2,
          audioText: 'Daniel Perez',
          language: 'en',
          prompt: '¿Cuál está escrito correctamente?',
          options: [
            { id: 'q2-a', text: 'daniel perez', translation: 'incorrecto' },
            { id: 'q2-b', text: 'Daniel Peres', translation: 'incorrecto' },
            { id: 'q2-c', text: 'Daniel Perez', translation: 'correcto' },
          ],
          correctOptionIds: ['q2-c'],
          explanation:
            'Escucha cada letra con cuidado antes de escribir el apellido.',
        },
        {
          id: 3,
          audioText: 'sofia at yahoo dot com',
          language: 'en',
          prompt: '¿Cuál correo está escrito correctamente?',
          options: [
            { id: 'q3-a', text: 'sofia@yahoo,com', translation: 'incorrecto' },
            { id: 'q3-b', text: 'sofiayahoo.com', translation: 'incorrecto' },
            { id: 'q3-c', text: 'sofia@yahoo.com', translation: 'correcto' },
          ],
          correctOptionIds: ['q3-c'],
          explanation: 'At es @ y dot es un punto (.), no una coma.',
        },
        {
          id: 4,
          audioText: 'Carlos Martinez',
          language: 'en',
          prompt: '¿Cuál está escrito correctamente?',
          options: [
            { id: 'q4-a', text: 'Carlos Martinez', translation: 'correcto' },
            { id: 'q4-b', text: 'Carlos Martines', translation: 'incorrecto' },
            { id: 'q4-c', text: 'carlos martinez', translation: 'incorrecto' },
          ],
          correctOptionIds: ['q4-a'],
          explanation:
            'Presta atención a cada letra, sobre todo cerca del final del apellido.',
        },
        {
          id: 5,
          audioText: 'ana at gmail dot com',
          language: 'en',
          prompt: '¿Cuál correo está escrito correctamente?',
          options: [
            { id: 'q5-a', text: 'ana.gmail@com', translation: 'incorrecto' },
            { id: 'q5-b', text: 'anagmail.com', translation: 'incorrecto' },
            { id: 'q5-c', text: 'ana@gmail.com', translation: 'correcto' },
          ],
          correctOptionIds: ['q5-c'],
          explanation: 'At siempre va antes del dominio (gmail, yahoo, hotmail).',
        },
      ],
    },

    {
      type: 'fill-in-the-blanks',
      title: 'Repaso: correos y deletreo',
      instructions:
        'Escribe la palabra que falta en cada espacio. Toca una palabra si quieres ver su traducción.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'elena', translation: 'elena' },
          ],
          after: [
            { word: 'gmail', translation: 'gmail' },
            { word: 'dot', translation: 'punto' },
            { word: 'com.', translation: 'com' },
          ],
          answer: 'at',
          sentenceTranslation: 'Mi correo es elena arroba gmail punto com.',
        },
        {
          id: 2,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'jose', translation: 'josé' },
            { word: 'at', translation: 'arroba' },
            { word: 'hotmail', translation: 'hotmail' },
          ],
          after: [{ word: 'com.', translation: 'com' }],
          answer: 'dot',
          sentenceTranslation: 'Mi correo es jose arroba hotmail punto com.',
        },
        {
          id: 3,
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
          id: 4,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'email', translation: 'correo electrónico' },
            { word: 'is', translation: 'es' },
            { word: 'maria', translation: 'maría' },
          ],
          after: [
            { word: 'yahoo', translation: 'yahoo' },
            { word: 'dot', translation: 'punto' },
            { word: 'com.', translation: 'com' },
          ],
          answer: 'at',
          sentenceTranslation: 'Mi correo es maria arroba yahoo punto com.',
        },
        {
          id: 5,
          before: [
            { word: 'How', translation: 'cómo' },
            { word: 'do', translation: 'auxiliar de pregunta' },
            { word: 'you', translation: 'tú' },
            { word: 'spell', translation: 'deletrear' },
          ],
          after: [{ word: 'email?', translation: 'correo' }],
          answer: 'your',
          sentenceTranslation: '¿Cómo se deletrea tu correo?',
        },
      ],
    },

    {
      type: 'sentence-construction',
      title: 'Frases para el dictado',
      instructions:
        'Lee cada oración en español y escríbela completa en inglés.',
      questions: [
        {
          id: 6,
          sourceSentence: 'Escucha con atención.',
          acceptedAnswers: ['Listen carefully', 'Listen carefully.'],
          modelAnswer: [
            { word: 'Listen', translation: 'escucha' },
            { word: 'carefully.', translation: 'con atención' },
          ],
          explanation:
            'Carefully significa con atención o cuidadosamente.',
        },
        {
          id: 7,
          sourceSentence: '¿Puedes repetir eso?',
          acceptedAnswers: ['Can you repeat that', 'Can you repeat that?'],
          modelAnswer: [
            { word: 'Can', translation: 'poder (pregunta)' },
            { word: 'you', translation: 'tú' },
            { word: 'repeat', translation: 'repetir' },
            { word: 'that?', translation: 'eso' },
          ],
          explanation:
            'Can you...? es una forma cortés de pedir que alguien repita algo.',
        },
        {
          id: 8,
          sourceSentence: 'Escribe tu nombre completo.',
          acceptedAnswers: [
            'Write your full name',
            'Write your full name.',
          ],
          modelAnswer: [
            { word: 'Write', translation: 'escribe' },
            { word: 'your', translation: 'tu' },
            { word: 'full', translation: 'completo' },
            { word: 'name.', translation: 'nombre' },
          ],
          explanation: 'Full name significa nombre completo.',
        },
        {
          id: 9,
          sourceSentence: '¿Está bien escrito?',
          acceptedAnswers: [
            'Is it spelled correctly',
            'Is it spelled correctly?',
          ],
          modelAnswer: [
            { word: 'Is', translation: 'es / está' },
            { word: 'it', translation: 'eso' },
            { word: 'spelled', translation: 'deletreado' },
            { word: 'correctly?', translation: 'correctamente' },
          ],
          explanation:
            'Usamos spelled correctly para preguntar si algo está bien escrito.',
        },
        {
          id: 10,
          sourceSentence: 'Sí, está correcto.',
          acceptedAnswers: ['Yes, that is correct', 'Yes, that is correct.'],
          modelAnswer: [
            { word: 'Yes,', translation: 'sí' },
            { word: 'that', translation: 'eso' },
            { word: 'is', translation: 'es / está' },
            { word: 'correct.', translation: 'correcto' },
          ],
          explanation:
            'That is correct confirma que algo está bien.',
        },
      ],
    },
  ],
};

export default lessonA1006;
