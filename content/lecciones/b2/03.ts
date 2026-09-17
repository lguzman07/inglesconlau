import type { LessonContent } from '../types';

const lessonB2003: LessonContent = {
  level: 'b2',

  number: 3,

  title: 'Verbos irregulares comunes',

  subtitle:
    'Practica verbos irregulares comunes en past simple, present perfect y past perfect, con oraciones más complejas.',

  videoTitle: 'Verbos irregulares comunes',

  videoDescription:
    'En este video verás verbos irregulares comunes usados en past simple, present perfect y past perfect.',

  objective:
    'Al terminar, podrás elegir correctamente entre past simple, present perfect y past perfect usando verbos irregulares comunes.',

  videoSrc: '94f7b88b-d009-481e-bfe6-66e49a19b257',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe la forma correcta del verbo irregular en past simple, present perfect o past perfect, según el contexto. Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'my', translation: 'mi' },
            { word: 'notebook', translation: 'cuaderno' },
            { word: 'for', translation: 'para' },
            { word: 'the', translation: 'la' },
            { word: 'class.', translation: 'clase' },
          ],
          answer: 'brought',
          hint: 'bring',
          sentenceTranslation: 'Traje mi cuaderno para la clase.',
        },

        {
          id: 2,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'coca-cola', translation: 'coca-cola' },
            { word: 'at', translation: 'en' },
            { word: 'my', translation: 'la' },
            { word: 'sister’s', translation: 'de mi hermana' },
            { word: 'party,', translation: 'fiesta' },
            { word: 'and', translation: 'y' },
            { word: 'it', translation: 'me' },
            { word: 'gave', translation: 'dio' },
            { word: 'me', translation: '' },
            { word: 'a', translation: 'un' },
            { word: 'stomachache.', translation: 'dolor de estómago' },
          ],
          answer: 'drank',
          hint: 'drink',
          sentenceTranslation:
            'Tomé coca-cola en la fiesta de mi hermana, y me dio dolor de estómago.',
        },

        {
          id: 3,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'make', translation: 'hacer' },
            { word: 'a', translation: 'un' },
            { word: 'cake', translation: 'pastel' },
            { word: 'for', translation: 'para' },
            { word: 'the', translation: 'la' },
            { word: 'meeting.', translation: 'reunión' },
          ],
          answer: 'begun',
          hint: 'begin',
          sentenceTranslation: 'Ella ha comenzado a hacer un pastel para la reunión.',
        },

        {
          id: 4,
          before: [
            { word: 'He', translation: 'Él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'medicine', translation: 'medicina' },
            { word: 'because', translation: 'porque' },
            { word: 'he', translation: 'a él' },
            { word: 'likes', translation: 'le gusta' },
            { word: 'to', translation: '' },
            { word: 'help', translation: 'ayudar' },
            { word: 'sick', translation: 'a las personas' },
            { word: 'people.', translation: 'enfermas' },
          ],
          answer: 'chosen',
          hint: 'choose',
          sentenceTranslation:
            'Él ha elegido medicina porque le gusta ayudar a las personas enfermas.',
        },

        {
          id: 5,
          before: [
            { word: 'My', translation: 'El' },
            { word: 'friend’s', translation: 'hijo de mi amigo' },
            { word: 'son', translation: '' },
            { word: 'has', translation: 'se ha' },
          ],
          after: [{ word: 'his', translation: 'su' }, { word: 'finger.', translation: 'dedo' }],
          answer: 'cut',
          hint: 'cut',
          sentenceTranslation: 'El hijo de mi amigo se ha cortado el dedo.',
        },

        {
          id: 6,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'a', translation: 'una' },
            { word: 'bachelor’s', translation: 'licenciatura' },
            { word: 'in', translation: 'en' },
            { word: 'education.', translation: 'educación' },
          ],
          answer: 'gotten',
          hint: 'get',
          sentenceTranslation: 'He obtenido una licenciatura en educación.',
        },

        {
          id: 7,
          before: [
            { word: 'The', translation: 'Los' },
            { word: 'children', translation: 'niños' },
            { word: 'had', translation: 'se habían' },
          ],
          after: [
            { word: 'from', translation: 'de' },
            { word: 'the', translation: 'el' },
            { word: 'bear.', translation: 'oso' },
          ],
          answer: 'hidden',
          hint: 'hide',
          sentenceTranslation: 'Los niños se habían escondido del oso.',
        },

        {
          id: 8,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'had', translation: 'había' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'play', translation: 'tocar' },
            { word: 'the', translation: 'la' },
            { word: 'guitar.', translation: 'guitarra' },
          ],
          answer: 'learnt',
          hint: 'learn',
          sentenceTranslation: 'Había aprendido a tocar la guitarra.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando past simple, present perfect o past perfect según corresponda.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Fui a la playa el mes pasado.',
          acceptedAnswers: [
            'I went to the beach last month',
            'I went to the beach last month.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'went', translation: 'fui' },
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'la' },
            { word: 'beach', translation: 'playa' },
            { word: 'last', translation: 'el' },
            { word: 'month.', translation: 'mes pasado' },
          ],
          explanation: 'Go → went → gone. Past simple: went.',
        },

        {
          id: 10,
          sourceSentence:
            'Escribí una historia sobre una mujer que pasaba por un momento difícil.',
          acceptedAnswers: [
            'I wrote a story about a woman going through a difficult time',
            'I wrote a story about a woman going through a difficult time.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'wrote', translation: 'escribí' },
            { word: 'a', translation: 'una' },
            { word: 'story', translation: 'historia' },
            { word: 'about', translation: 'sobre' },
            { word: 'a', translation: 'una' },
            { word: 'woman', translation: 'mujer' },
            { word: 'going', translation: 'pasando' },
            { word: 'through', translation: 'por' },
            { word: 'a', translation: 'un' },
            { word: 'difficult', translation: 'difícil' },
            { word: 'time.', translation: 'momento' },
          ],
          explanation: 'Write → wrote → written. Past simple: wrote.',
        },

        {
          id: 11,
          sourceSentence: 'Ella ha comenzado a hacer un pastel para la reunión.',
          acceptedAnswers: [
            'She has begun to make a cake for the meeting',
            'She has begun to make a cake for the meeting.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
            { word: 'begun', translation: 'comenzado' },
            { word: 'to', translation: 'a' },
            { word: 'make', translation: 'hacer' },
            { word: 'a', translation: 'un' },
            { word: 'cake', translation: 'pastel' },
            { word: 'for', translation: 'para' },
            { word: 'the', translation: 'la' },
            { word: 'meeting.', translation: 'reunión' },
          ],
          explanation: 'Begin → began → begun. Present perfect: has begun.',
        },

        {
          id: 12,
          sourceSentence: 'Los niños se habían escondido del oso.',
          acceptedAnswers: [
            'The children had hidden from the bear',
            'The children had hidden from the bear.',
          ],
          modelAnswer: [
            { word: 'The', translation: 'los' },
            { word: 'children', translation: 'niños' },
            { word: 'had', translation: 'se habían' },
            { word: 'hidden', translation: 'escondido' },
            { word: 'from', translation: 'de' },
            { word: 'the', translation: 'el' },
            { word: 'bear.', translation: 'oso' },
          ],
          explanation:
            'Hide → hid → hidden. Past perfect (had + participio) describe algo que pasó antes de otro momento en el pasado.',
        },

        {
          id: 13,
          sourceSentence:
            'Habían tenido que comer comida china en el restaurante.',
          acceptedAnswers: [
            'They had had to eat Chinese food at the restaurant',
            'They had had to eat Chinese food at the restaurant.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'had', translation: 'habían' },
            { word: 'had', translation: 'tenido' },
            { word: 'to', translation: 'que' },
            { word: 'eat', translation: 'comer' },
            { word: 'Chinese', translation: 'china' },
            { word: 'food', translation: 'comida' },
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el' },
            { word: 'restaurant.', translation: 'restaurante' },
          ],
          explanation:
            'Have → had → had. En past perfect esto da "had had": el primer had es el auxiliar y el segundo es el participio de have.',
        },

        {
          id: 14,
          sourceSentence: 'Habías sido una buena estudiante.',
          acceptedAnswers: [
            'You had been a good student',
            'You had been a good student.',
          ],
          modelAnswer: [
            { word: 'You', translation: 'tú' },
            { word: 'had', translation: 'habías' },
            { word: 'been', translation: 'sido' },
            { word: 'a', translation: 'una' },
            { word: 'good', translation: 'buena' },
            { word: 'student.', translation: 'estudiante' },
          ],
          explanation: 'Be → was/were → been. Past perfect: had been.',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha y elige',

      instructions:
        'Escucha la oración y decide si está en past simple, present perfect o past perfect.',

      questions: [
        {
          id: 15,
          audioText: 'I went to the beach last month.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['simple'],
          explanation:
            'Past simple describe una acción completada en un momento específico del pasado.',
        },

        {
          id: 16,
          audioText:
            'He has chosen medicine because he likes to help sick people.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['perfect'],
          explanation:
            'Present perfect (has + participio) describe una decisión con relevancia en el presente.',
        },

        {
          id: 17,
          audioText: 'The children had hidden from the bear.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['pastperfect'],
          explanation:
            'Past perfect (had + participio) describe algo que pasó antes de otro momento en el pasado.',
        },

        {
          id: 18,
          audioText: 'My friend’s son has cut his finger.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['perfect'],
          explanation:
            'Present perfect (has + participio) describe un evento reciente con resultado presente.',
        },

        {
          id: 19,
          audioText: 'I had learnt to play the guitar.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['pastperfect'],
          explanation:
            'Past perfect (had + participio) describe algo que ya había pasado antes de otro momento en el pasado.',
        },

        {
          id: 20,
          audioText: 'I brought my notebook for the class.',
          language: 'en',
          prompt: '¿En qué tiempo verbal está esta oración?',
          options: [
            { id: 'simple', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
            { id: 'pastperfect', text: 'Past perfect' },
          ],
          correctOptionIds: ['simple'],
          explanation:
            'Past simple describe una acción completada en el pasado.',
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
            { id: 'q21-she', word: 'She', translation: 'ella' },
            { id: 'q21-has', word: 'has', translation: 'ha' },
            { id: 'q21-begun', word: 'begun', translation: 'comenzado' },
            { id: 'q21-to', word: 'to', translation: 'a' },
            { id: 'q21-make', word: 'make', translation: 'hacer' },
            { id: 'q21-a', word: 'a', translation: 'un' },
            { id: 'q21-cake', word: 'cake.', translation: 'pastel' },
          ],
          correctOrder: [
            'q21-she',
            'q21-has',
            'q21-begun',
            'q21-to',
            'q21-make',
            'q21-a',
            'q21-cake',
          ],
          sentenceTranslation: 'Ella ha comenzado a hacer un pastel.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q22-the', word: 'The', translation: 'los' },
            { id: 'q22-children', word: 'children', translation: 'niños' },
            { id: 'q22-had', word: 'had', translation: 'se habían' },
            { id: 'q22-hidden', word: 'hidden', translation: 'escondido' },
            { id: 'q22-from', word: 'from', translation: 'de' },
            { id: 'q22-the', word: 'the', translation: 'el' },
            { id: 'q22-bear', word: 'bear.', translation: 'oso' },
          ],
          correctOrder: [
            'q22-the',
            'q22-children',
            'q22-had',
            'q22-hidden',
            'q22-from',
            'q22-the',
            'q22-bear',
          ],
          sentenceTranslation: 'Los niños se habían escondido del oso.',
        },

        {
          id: 23,
          tokens: [
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-have', word: 'have', translation: 'he' },
            { id: 'q23-gotten', word: 'gotten', translation: 'obtenido' },
            { id: 'q23-a', word: 'a', translation: 'una' },
            { id: 'q23-bachelors', word: 'bachelor’s', translation: 'licenciatura' },
            { id: 'q23-in', word: 'in', translation: 'en' },
            { id: 'q23-education', word: 'education.', translation: 'educación' },
          ],
          correctOrder: [
            'q23-i',
            'q23-have',
            'q23-gotten',
            'q23-a',
            'q23-bachelors',
            'q23-in',
            'q23-education',
          ],
          sentenceTranslation: 'He obtenido una licenciatura en educación.',
        },

        {
          id: 24,
          tokens: [
            { id: 'q24-you', word: 'You', translation: 'tú' },
            { id: 'q24-had', word: 'had', translation: 'habías' },
            { id: 'q24-been', word: 'been', translation: 'sido' },
            { id: 'q24-a', word: 'a', translation: 'una' },
            { id: 'q24-good', word: 'good', translation: 'buena' },
            { id: 'q24-student', word: 'student.', translation: 'estudiante' },
          ],
          correctOrder: [
            'q24-you',
            'q24-had',
            'q24-been',
            'q24-a',
            'q24-good',
            'q24-student',
          ],
          sentenceTranslation: 'Habías sido una buena estudiante.',
        },
      ],
    },
  ],
};

export default lessonB2003;
