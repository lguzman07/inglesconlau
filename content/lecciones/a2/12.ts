import type { LessonContent } from '../types';

const lessonA2012: LessonContent = {
  level: 'a2',
  number: 12,
  title: 'Present perfect vs past simple',
  subtitle: 'Aprende cuándo usar present perfect y cuándo past simple según haya o no un tiempo específico.',
  videoTitle: 'Present perfect vs past simple',
  videoDescription: 'En este video verás la diferencia entre present perfect (experiencia, sin tiempo específico) y past simple (tiempo terminado).',
  objective: 'Al terminar, podrás elegir entre present perfect y past simple según la expresión de tiempo y el significado.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con el verbo',
      instructions: 'Escribe el verbo en past simple o en participio, según la oración. Si hay un tiempo terminado (last year, yesterday, in 2019), usa past simple.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'Spain', translation: 'España' },
            { word: 'last', translation: 'pasado' },
            { word: 'year.', translation: 'año' },
          ],
          answer: 'visited',
          hint: 'visit',
          sentenceTranslation: 'Visité España el año pasado.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'Paris', translation: 'París' },
            { word: 'for', translation: 'por' },
            { word: 'two', translation: 'dos' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'lived',
          hint: 'live',
          sentenceTranslation: 'Ella ha vivido en París por dos años.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'that', translation: 'esa' },
            { word: 'movie', translation: 'película' },
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'watched',
          hint: 'watch',
          sentenceTranslation: 'Vimos esa película ayer.',
        },
        {
          id: 4,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'their', translation: 'su' },
            { word: 'homework.', translation: 'tarea' },
          ],
          answer: 'finished',
          hint: 'finish',
          sentenceTranslation: 'Han terminado su tarea.',
        },
        {
          id: 5,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'me', translation: 'me' },
            { word: 'two', translation: 'dos' },
            { word: 'days', translation: 'días' },
            { word: 'ago.', translation: 'hace' },
          ],
          answer: 'called',
          hint: 'call',
          sentenceTranslation: 'Él me llamó hace dos días.',
        },
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'my', translation: 'mis' },
            { word: 'keys.', translation: 'llaves' },
          ],
          answer: 'lost',
          hint: 'lose',
          sentenceTranslation: 'He perdido mis llaves.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'Paris', translation: 'París' },
            { word: 'in', translation: 'en' },
            { word: '2019.', translation: '2019' },
          ],
          answer: 'lived',
          hint: 'live',
          sentenceTranslation: 'Ella vivió en París en 2019.',
        },
        {
          id: 8,
          before: [
            { word: 'Have', translation: 'he' },
            { word: 'you', translation: 'tú' },
            { word: 'ever', translation: 'alguna vez' },
          ],
          after: [
            { word: 'sushi?', translation: 'sushi' },
          ],
          answer: 'tried',
          hint: 'try',
          sentenceTranslation: '¿Has probado sushi alguna vez?',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Did, have o has',
      instructions: 'Escribe did, have o has. Did va con past simple; have/has, con present perfect.',
      questions: [
        {
          id: 9,
          before: [],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'visit', translation: 'visitar' },
            { word: 'Spain', translation: 'España' },
            { word: 'last', translation: 'pasado' },
            { word: 'year?', translation: 'año' },
          ],
          answer: 'Did',
          sentenceTranslation: '¿Visitaste España el año pasado?',
        },
        {
          id: 10,
          before: [],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'ever', translation: 'alguna vez' },
            { word: 'visited', translation: 'visité' },
            { word: 'Spain?', translation: 'España' },
          ],
          answer: 'Have',
          sentenceTranslation: '¿Has visitado España alguna vez?',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'called', translation: 'llamó' },
            { word: 'me', translation: 'me' },
            { word: 'three', translation: 'tres' },
            { word: 'times.', translation: 'veces' },
          ],
          answer: 'has',
          sentenceTranslation: 'Ella me ha llamado tres veces.',
        },
        {
          id: 12,
          before: [],
          after: [
            { word: 'they', translation: 'ellos' },
            { word: 'watch', translation: 'ver' },
            { word: 'the', translation: 'el/la' },
            { word: 'movie', translation: 'película' },
            { word: 'on', translation: 'en' },
            { word: 'Saturday?', translation: 'sábado' },
          ],
          answer: 'Did',
          sentenceTranslation: '¿Vieron la película el sábado?',
        },
        {
          id: 13,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'never', translation: 'nunca' },
            { word: 'eaten', translation: 'comido' },
            { word: 'sushi.', translation: 'sushi' },
          ],
          answer: 'have',
          sentenceTranslation: 'Nunca he comido sushi.',
        },
        {
          id: 14,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'not', translation: 'no' },
            { word: 'go', translation: 'ir' },
            { word: 'last', translation: 'pasado' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'did',
          sentenceTranslation: 'No fuimos anoche.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Past simple o present perfect?',
      instructions: 'Escucha la oración y decide qué tiempo usa.',
      questions: [
        {
          id: 15,
          audioText: 'I visited Spain last year.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['past'],
          explanation: 'last year es un tiempo terminado: past simple.',
        },
        {
          id: 16,
          audioText: 'I have visited Spain.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'sin tiempo específico: present perfect.',
        },
        {
          id: 17,
          audioText: 'She called me yesterday.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['past'],
          explanation: 'yesterday: past simple.',
        },
        {
          id: 18,
          audioText: 'She has called me three times.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'three times hasta ahora: present perfect.',
        },
        {
          id: 19,
          audioText: 'We watched a movie on Saturday.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['past'],
          explanation: 'on Saturday: past simple.',
        },
        {
          id: 20,
          audioText: 'We have watched that movie.',
          language: 'en',
          prompt: '¿Qué tiempo escuchaste?',
          options: [
            { id: 'past', text: 'Past simple' },
            { id: 'perfect', text: 'Present perfect' },
          ],
          correctOptionIds: ['perfect'],
          explanation: 'experiencia sin tiempo: present perfect.',
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
            { id: 'q21-visited', word: 'visited', translation: 'visité' },
            { id: 'q21-spain', word: 'Spain', translation: 'España' },
            { id: 'q21-last', word: 'last', translation: 'pasado' },
            { id: 'q21-year', word: 'year.', translation: 'año' },
          ],
          correctOrder: ['q21-i', 'q21-visited', 'q21-spain', 'q21-last', 'q21-year'],
          sentenceTranslation: 'Visité España el año pasado.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-have', word: 'have', translation: 'he' },
            { id: 'q22-visited', word: 'visited', translation: 'visité' },
            { id: 'q22-spain', word: 'Spain.', translation: 'España' },
          ],
          correctOrder: ['q22-i', 'q22-have', 'q22-visited', 'q22-spain'],
          sentenceTranslation: 'He visitado España.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-did', word: 'Did', translation: 'auxiliar' },
            { id: 'q23-you', word: 'you', translation: 'tú' },
            { id: 'q23-visit', word: 'visit', translation: 'visitar' },
            { id: 'q23-spain', word: 'Spain', translation: 'España' },
            { id: 'q23-last', word: 'last', translation: 'pasado' },
            { id: 'q23-year', word: 'year?', translation: 'año' },
          ],
          correctOrder: ['q23-did', 'q23-you', 'q23-visit', 'q23-spain', 'q23-last', 'q23-year'],
          sentenceTranslation: '¿Visitaste España el año pasado?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-have', word: 'Have', translation: 'he' },
            { id: 'q24-you', word: 'you', translation: 'tú' },
            { id: 'q24-ever', word: 'ever', translation: 'alguna vez' },
            { id: 'q24-visited', word: 'visited', translation: 'visité' },
            { id: 'q24-spain', word: 'Spain?', translation: 'España' },
          ],
          correctOrder: ['q24-have', 'q24-you', 'q24-ever', 'q24-visited', 'q24-spain'],
          sentenceTranslation: '¿Has visitado España alguna vez?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-she', word: 'She', translation: 'ella' },
            { id: 'q25-lived', word: 'lived', translation: 'vivió' },
            { id: 'q25-in', word: 'in', translation: 'en' },
            { id: 'q25-paris', word: 'Paris', translation: 'París' },
            { id: 'q25-in-2', word: 'in', translation: 'en' },
            { id: 'q25-2019', word: '2019.', translation: '2019' },
          ],
          correctOrder: ['q25-she', 'q25-lived', 'q25-in', 'q25-paris', 'q25-in-2', 'q25-2019'],
          sentenceTranslation: 'Ella vivió en París en 2019.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-she', word: 'She', translation: 'ella' },
            { id: 'q26-has', word: 'has', translation: 'ha' },
            { id: 'q26-lived', word: 'lived', translation: 'vivió' },
            { id: 'q26-in', word: 'in', translation: 'en' },
            { id: 'q26-paris', word: 'Paris', translation: 'París' },
            { id: 'q26-for', word: 'for', translation: 'por' },
            { id: 'q26-two', word: 'two', translation: 'dos' },
            { id: 'q26-years', word: 'years.', translation: 'años' },
          ],
          correctOrder: ['q26-she', 'q26-has', 'q26-lived', 'q26-in', 'q26-paris', 'q26-for', 'q26-two', 'q26-years'],
          sentenceTranslation: 'Ella ha vivido en París por dos años.',
        },
      ],
    },
  ],
};

export default lessonA2012;
