import type { LessonContent } from '../types';

const lessonA2003: LessonContent = {
  level: 'a2',

  number: 3,

  title: 'Verbos irregulares comunes',

  subtitle:
    'Aprende las tres formas de los verbos irregulares más comunes (V1, V2, V3) y practica con oraciones de ejemplo.',

  videoTitle: 'Verbos irregulares comunes',

  videoDescription:
    'En este video verás la diferencia entre verbos regulares e irregulares, y practicarás las formas V1, V2 y V3 de los verbos irregulares más comunes.',

  objective:
    'Al terminar, podrás usar correctamente los verbos irregulares más comunes en past simple y present perfect.',

  videoSrc: '94f7b88b-d009-481e-bfe6-66e49a19b257',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe la forma correcta del verbo irregular (V2 para past simple, V3 para present perfect). Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'my', translation: 'mi' },
            { word: 'notebook', translation: 'cuaderno' },
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'found',
          hint: 'find',
          sentenceTranslation: 'Encontré mi cuaderno ayer.',
        },

        {
          id: 2,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'the', translation: 'la' },
            { word: 'homework', translation: 'tarea' },
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'did',
          hint: 'do',
          sentenceTranslation: 'Hice la tarea ayer.',
        },

        {
          id: 3,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [
            { word: 'a', translation: 'una' },
            { word: 'letter', translation: 'carta' },
            { word: 'to', translation: 'a' },
            { word: 'her', translation: 'su' },
            { word: 'boyfriend.', translation: 'novio' },
          ],
          answer: 'wrote',
          hint: 'write',
          sentenceTranslation: 'Ella escribió una carta a su novio.',
        },

        {
          id: 4,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [{ word: 'coca-cola.', translation: 'coca-cola' }],
          answer: 'drank',
          hint: 'drink',
          sentenceTranslation: 'Ella tomó coca-cola.',
        },

        {
          id: 5,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'dinner', translation: 'la cena' },
            { word: 'last', translation: 'anoche' },
            { word: 'night.', translation: '' },
          ],
          answer: 'made',
          hint: 'make',
          sentenceTranslation: 'Preparé la cena anoche.',
        },

        {
          id: 6,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'have', translation: 'he' },
          ],
          after: [{ word: 'my', translation: 'mi' }, { word: 'pencil.', translation: 'lápiz' }],
          answer: 'found',
          hint: 'find',
          sentenceTranslation: 'He encontrado mi lápiz.',
        },

        {
          id: 7,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [{ word: 'her', translation: 'su' }, { word: 'project.', translation: 'proyecto' }],
          answer: 'done',
          hint: 'do',
          sentenceTranslation: 'Ella ha hecho su proyecto.',
        },

        {
          id: 8,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'have', translation: 'he' },
          ],
          after: [{ word: 'wine.', translation: 'vino' }],
          answer: 'drunk',
          hint: 'drink',
          sentenceTranslation: 'He tomado vino.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando el verbo irregular correcto.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Comencé mi tarea a las 4:00pm.',
          acceptedAnswers: [
            'I began my homework at 4:00pm',
            'I began my homework at 4:00pm.',
            'I began my homework at 4pm',
            'I began my homework at 4pm.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'began', translation: 'comencé' },
            { word: 'my', translation: 'mi' },
            { word: 'homework', translation: 'tarea' },
            { word: 'at', translation: 'a' },
            { word: '4:00pm.', translation: 'las 4:00pm' },
          ],
          explanation: 'Begin → began → begun. Past simple: began.',
        },

        {
          id: 10,
          sourceSentence: 'Mi hermana encontró sus llaves debajo de la mesa.',
          acceptedAnswers: [
            'My sister found her keys under the table',
            'My sister found her keys under the table.',
          ],
          modelAnswer: [
            { word: 'My', translation: 'mi' },
            { word: 'sister', translation: 'hermana' },
            { word: 'found', translation: 'encontró' },
            { word: 'her', translation: 'sus' },
            { word: 'keys', translation: 'llaves' },
            { word: 'under', translation: 'debajo de' },
            { word: 'the', translation: 'la' },
            { word: 'table.', translation: 'mesa' },
          ],
          explanation: 'Find → found → found. Past simple: found.',
        },

        {
          id: 11,
          sourceSentence: 'He leído este libro 3 veces.',
          acceptedAnswers: [
            'I have read this book 3 times',
            'I have read this book 3 times.',
            'I have read this book three times',
            'I have read this book three times.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
            { word: 'read', translation: 'leído' },
            { word: 'this', translation: 'este' },
            { word: 'book', translation: 'libro' },
            { word: '3', translation: '3' },
            { word: 'times.', translation: 'veces' },
          ],
          explanation: 'Read → read → read (se pronuncia distinto en pasado). Present perfect: have read.',
        },

        {
          id: 12,
          sourceSentence: 'Ella ha hablado sobre este tema antes.',
          acceptedAnswers: [
            'She has spoken about this topic before',
            'She has spoken about this topic before.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
            { word: 'spoken', translation: 'hablado' },
            { word: 'about', translation: 'sobre' },
            { word: 'this', translation: 'este' },
            { word: 'topic', translation: 'tema' },
            { word: 'before.', translation: 'antes' },
          ],
          explanation: 'Speak → spoke → spoken. Present perfect: has spoken.',
        },

        {
          id: 13,
          sourceSentence: 'Ella escribió su ensayo en dos horas.',
          acceptedAnswers: [
            'She wrote her essay in two hours',
            'She wrote her essay in two hours.',
            'She wrote her essay in 2 hours',
            'She wrote her essay in 2 hours.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'wrote', translation: 'escribió' },
            { word: 'her', translation: 'su' },
            { word: 'essay', translation: 'ensayo' },
            { word: 'in', translation: 'en' },
            { word: 'two', translation: 'dos' },
            { word: 'hours.', translation: 'horas' },
          ],
          explanation: 'Write → wrote → written. Past simple: wrote.',
        },

        {
          id: 14,
          sourceSentence: 'Él ha escrito su música.',
          acceptedAnswers: [
            'He has written his music',
            'He has written his music.',
          ],
          modelAnswer: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
            { word: 'written', translation: 'escrito' },
            { word: 'his', translation: 'su' },
            { word: 'music.', translation: 'música' },
          ],
          explanation: 'Write → wrote → written. Present perfect: has written.',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha y elige',

      instructions:
        'Escucha la oración y decide si describe una acción terminada en un momento específico del pasado, o una experiencia/resultado hasta ahora.',

      questions: [
        {
          id: 15,
          audioText: 'I went to the beach last month.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['past'],
          explanation:
            'Past simple + "last month" describe algo que pasó en un momento específico ya terminado.',
        },

        {
          id: 16,
          audioText: 'I have read this book three times.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['perfect'],
          explanation:
            'Present perfect describe una experiencia acumulada hasta el momento presente, sin decir cuándo.',
        },

        {
          id: 17,
          audioText: 'She wrote her essay in two hours.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['past'],
          explanation:
            'Past simple describe una acción completada en el pasado.',
        },

        {
          id: 18,
          audioText: 'She has done her project.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['perfect'],
          explanation:
            'Present perfect describe el resultado de una acción sin especificar cuándo pasó.',
        },

        {
          id: 19,
          audioText: 'I made dinner last night.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['past'],
          explanation:
            'Past simple + "last night" describe un momento específico ya terminado.',
        },

        {
          id: 20,
          audioText: 'I have found my pencil.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'past', text: 'Un momento específico del pasado' },
            { id: 'perfect', text: 'Una experiencia o resultado hasta ahora' },
          ],
          correctOptionIds: ['perfect'],
          explanation:
            'Present perfect describe el resultado presente de haber encontrado algo, sin decir cuándo.',
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
          id: 21,
          tokens: [
            { id: 'q21-i', word: 'I', translation: 'yo' },
            { id: 'q21-began', word: 'began', translation: 'comencé' },
            { id: 'q21-my', word: 'my', translation: 'mi' },
            { id: 'q21-homework', word: 'homework', translation: 'tarea' },
            { id: 'q21-at', word: 'at', translation: 'a' },
            { id: 'q21-4pm', word: '4pm.', translation: 'las 4pm' },
          ],
          correctOrder: [
            'q21-i',
            'q21-began',
            'q21-my',
            'q21-homework',
            'q21-at',
            'q21-4pm',
          ],
          sentenceTranslation: 'Comencé mi tarea a las 4pm.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q22-my', word: 'My', translation: 'mi' },
            { id: 'q22-sister', word: 'sister', translation: 'hermana' },
            { id: 'q22-found', word: 'found', translation: 'encontró' },
            { id: 'q22-her', word: 'her', translation: 'sus' },
            { id: 'q22-keys', word: 'keys.', translation: 'llaves' },
          ],
          correctOrder: ['q22-my', 'q22-sister', 'q22-found', 'q22-her', 'q22-keys'],
          sentenceTranslation: 'Mi hermana encontró sus llaves.',
        },

        {
          id: 23,
          tokens: [
            { id: 'q23-she', word: 'She', translation: 'ella' },
            { id: 'q23-has', word: 'has', translation: 'ha' },
            { id: 'q23-spoken', word: 'spoken', translation: 'hablado' },
            { id: 'q23-about', word: 'about', translation: 'sobre' },
            { id: 'q23-this', word: 'this', translation: 'este' },
            { id: 'q23-topic', word: 'topic.', translation: 'tema' },
          ],
          correctOrder: [
            'q23-she',
            'q23-has',
            'q23-spoken',
            'q23-about',
            'q23-this',
            'q23-topic',
          ],
          sentenceTranslation: 'Ella ha hablado sobre este tema.',
        },

        {
          id: 24,
          tokens: [
            { id: 'q24-i', word: 'I', translation: 'yo' },
            { id: 'q24-have', word: 'have', translation: 'he' },
            { id: 'q24-drunk', word: 'drunk', translation: 'tomado' },
            { id: 'q24-wine', word: 'wine.', translation: 'vino' },
          ],
          correctOrder: ['q24-i', 'q24-have', 'q24-drunk', 'q24-wine'],
          sentenceTranslation: 'He tomado vino.',
        },
      ],
    },
  ],
};

export default lessonA2003;
