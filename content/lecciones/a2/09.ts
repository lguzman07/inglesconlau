import type { LessonContent } from '../types';

const lessonA2009: LessonContent = {
  level: 'a2',
  number: 9,
  title: 'Present perfect: introducción',
  subtitle: 'Aprende a formar el present perfect con have/has + participio y a escribir los participios regulares.',
  videoTitle: 'Present perfect: introducción',
  videoDescription: 'En este video verás cómo formar el present perfect y las reglas de ortografía del participio regular (-ED).',
  objective: 'Al terminar, podrás formar el present perfect con verbos regulares en afirmativo, negativo y preguntas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Escribe el participio',
      instructions: 'Escribe el participio del verbo. Recuerda las reglas: ED, D, IED o duplicar la consonante.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'my', translation: 'mi' },
            { word: 'room.', translation: 'cuarto' },
          ],
          answer: 'cleaned',
          hint: 'clean',
          sentenceTranslation: 'He limpiado mi cuarto.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'this', translation: 'esto' },
            { word: 'movie.', translation: 'película' },
          ],
          answer: 'watched',
          hint: 'watch',
          sentenceTranslation: 'Ella ha visto esta película.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'party.', translation: 'fiesta' },
          ],
          answer: 'danced',
          hint: 'dance',
          sentenceTranslation: 'Hemos bailado en la fiesta.',
        },
        {
          id: 4,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'lot.', translation: 'mucho' },
          ],
          answer: 'cried',
          hint: 'cry',
          sentenceTranslation: 'Ella ha llorado mucho.',
        },
        {
          id: 5,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'again.', translation: 'otra vez' },
          ],
          answer: 'tried',
          hint: 'try',
          sentenceTranslation: 'Él ha intentado otra vez.',
        },
        {
          id: 6,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'kids', translation: 'niños' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'all', translation: 'todo' },
            { word: 'day.', translation: 'día' },
          ],
          answer: 'played',
          hint: 'play',
          sentenceTranslation: 'Los niños han jugado todo el día.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'show.', translation: 'espectáculo' },
          ],
          answer: 'enjoyed',
          hint: 'enjoy',
          sentenceTranslation: 'Ella ha disfrutado el espectáculo.',
        },
        {
          id: 8,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'trip.', translation: 'viaje' },
          ],
          answer: 'planned',
          hint: 'plan',
          sentenceTranslation: 'Han planeado un viaje.',
        },
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'car.', translation: 'carro' },
          ],
          answer: 'stopped',
          hint: 'stop',
          sentenceTranslation: 'He detenido el carro.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: '¿Have o has?',
      instructions: 'Escribe have o has según el sujeto. I, you, we, they → have. He, she, it → has.',
      questions: [
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'finished', translation: 'terminado' },
            { word: 'my', translation: 'mi' },
            { word: 'homework.', translation: 'tarea' },
          ],
          answer: 'have',
          sentenceTranslation: 'He terminado mi tarea.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'lived', translation: 'vivido' },
            { word: 'here', translation: 'aquí' },
            { word: 'for', translation: 'durante' },
            { word: 'two', translation: 'dos' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'has',
          sentenceTranslation: 'Ella ha vivido aquí dos años.',
        },
        {
          id: 12,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'visited', translation: 'visitamos' },
            { word: 'Spain.', translation: 'España' },
          ],
          answer: 'have',
          sentenceTranslation: 'Han visitado España.',
        },
        {
          id: 13,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'cleaned', translation: 'limpiado' },
            { word: 'his', translation: 'su' },
            { word: 'room.', translation: 'cuarto' },
          ],
          answer: 'has',
          sentenceTranslation: 'Él ha limpiado su cuarto.',
        },
        {
          id: 14,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'watched', translation: 'visto' },
            { word: 'the', translation: 'el/la' },
            { word: 'movie.', translation: 'película' },
          ],
          answer: 'have',
          sentenceTranslation: 'Hemos visto la película.',
        },
        {
          id: 15,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'rained', translation: 'llovido' },
            { word: 'all', translation: 'todo' },
            { word: 'day.', translation: 'día' },
          ],
          answer: 'has',
          sentenceTranslation: 'Ha llovido todo el día.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Present perfect o past simple?',
      instructions: 'Escucha la oración y decide si usa present perfect (have/has + participio) o past simple.',
      questions: [
        {
          id: 16,
          audioText: 'I have cleaned my room.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'have cleaned = present perfect.',
        },
        {
          id: 17,
          audioText: 'I cleaned my room yesterday.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['past'],
          explanation: 'cleaned + yesterday = past simple.',
        },
        {
          id: 18,
          audioText: 'She has watched this movie.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'has watched = present perfect.',
        },
        {
          id: 19,
          audioText: 'They visited Spain last year.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['past'],
          explanation: 'visited + last year = past simple.',
        },
        {
          id: 20,
          audioText: 'We have planned a trip.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'have planned = present perfect.',
        },
        {
          id: 21,
          audioText: 'He stopped the car.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            {
              id: 'perfect',
              text: 'Present perfect (have/has + participio)',
            },
            { id: 'past', text: 'Past simple' },
          ],
          correctOptionIds: ['past'],
          explanation: 'stopped = past simple.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 22,
          tokens: [
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-have', word: 'have', translation: 'he / hemos' },
            {
              id: 'q22-finished',
              word: 'finished',
              translation: 'terminado',
            },
            { id: 'q22-my', word: 'my', translation: 'mi' },
            { id: 'q22-homework', word: 'homework.', translation: 'tarea' },
          ],
          correctOrder: ['q22-i', 'q22-have', 'q22-finished', 'q22-my', 'q22-homework'],
          sentenceTranslation: 'He terminado mi tarea.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-she', word: 'She', translation: 'ella' },
            { id: 'q23-hasnt', word: 'hasn’t', translation: 'no ha' },
            { id: 'q23-cleaned', word: 'cleaned', translation: 'limpiado' },
            { id: 'q23-her', word: 'her', translation: 'ella' },
            { id: 'q23-room', word: 'room.', translation: 'cuarto' },
          ],
          correctOrder: ['q23-she', 'q23-hasnt', 'q23-cleaned', 'q23-her', 'q23-room'],
          sentenceTranslation: 'Ella no ha limpiado su cuarto.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-they', word: 'They', translation: 'ellos' },
            { id: 'q24-havent', word: 'haven’t', translation: 'no han' },
            {
              id: 'q24-visited',
              word: 'visited',
              translation: 'visitamos',
            },
            { id: 'q24-spain', word: 'Spain.', translation: 'España' },
          ],
          correctOrder: ['q24-they', 'q24-havent', 'q24-visited', 'q24-spain'],
          sentenceTranslation: 'No han visitado España.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-have', word: 'Have', translation: 'he / hemos' },
            { id: 'q25-you', word: 'you', translation: 'tú' },
            {
              id: 'q25-finished',
              word: 'finished',
              translation: 'terminado',
            },
            { id: 'q25-your', word: 'your', translation: 'tu' },
            { id: 'q25-homework', word: 'homework?', translation: 'tarea' },
          ],
          correctOrder: ['q25-have', 'q25-you', 'q25-finished', 'q25-your', 'q25-homework'],
          sentenceTranslation: '¿Has terminado tu tarea?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-has', word: 'Has', translation: 'ha' },
            { id: 'q26-she', word: 'she', translation: 'ella' },
            { id: 'q26-cleaned', word: 'cleaned', translation: 'limpiado' },
            { id: 'q26-her', word: 'her', translation: 'ella' },
            { id: 'q26-room', word: 'room?', translation: 'cuarto' },
          ],
          correctOrder: ['q26-has', 'q26-she', 'q26-cleaned', 'q26-her', 'q26-room'],
          sentenceTranslation: '¿Ha limpiado ella su cuarto?',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-we', word: 'We', translation: 'nosotros' },
            { id: 'q27-have', word: 'have', translation: 'he / hemos' },
            {
              id: 'q27-visited',
              word: 'visited',
              translation: 'visitamos',
            },
            { id: 'q27-spain', word: 'Spain.', translation: 'España' },
          ],
          correctOrder: ['q27-we', 'q27-have', 'q27-visited', 'q27-spain'],
          sentenceTranslation: 'Hemos visitado España.',
        },
      ],
    },
  ],
};

export default lessonA2009;
