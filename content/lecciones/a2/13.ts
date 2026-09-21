import type { LessonContent } from '../types';

const lessonA2013: LessonContent = {
  level: 'a2',
  number: 13,
  title: 'Just, already, yet, still y recently con present perfect',
  subtitle: 'Aprende just, already, yet, still, recently y lately para hablar de lo que acaba de pasar o todavía no.',
  videoTitle: 'Just, already, yet, still y recently',
  videoDescription: 'En este video verás dónde colocar just, already, yet y still en el present perfect, y cuándo usar recently y lately.',
  objective: 'Al terminar, podrás usar just, already, yet, still, recently y lately correctamente con present perfect.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Just, already, yet o still',
      instructions: 'Escribe just (acaba de), already (ya), yet (todavía, en negativos y preguntas) o still (todavía, con molestia).',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'finished.', translation: 'terminado' },
          ],
          answer: 'just',
          sentenceTranslation: 'Acabo de terminar.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'eaten.', translation: 'comido' },
          ],
          answer: 'already',
          sentenceTranslation: 'Ella ya comió.',
        },
        {
          id: 3,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'haven’t', translation: 'no he' },
            { word: 'finished', translation: 'terminado' },
          ],
          after: [],
          answer: 'yet',
          sentenceTranslation: 'Todavía no he terminado.',
        },
        {
          id: 4,
          before: [
            { word: 'Have', translation: 'he' },
            { word: 'you', translation: 'tú' },
            { word: 'eaten', translation: 'comido' },
          ],
          after: [],
          answer: 'yet',
          sentenceTranslation: '¿Ya comiste?',
        },
        {
          id: 5,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'hasn’t', translation: 'no ha' },
            { word: 'called.', translation: 'llamó' },
          ],
          answer: 'still',
          sentenceTranslation: 'Ella todavía no ha llamado.',
        },
        {
          id: 6,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'seen', translation: 'visto' },
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'already',
          sentenceTranslation: 'Ya lo hemos visto.',
        },
        {
          id: 7,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'left.', translation: 'salido' },
          ],
          answer: 'just',
          sentenceTranslation: 'Ellos acaban de irse.',
        },
        {
          id: 8,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'hasn’t', translation: 'no ha' },
            { word: 'called', translation: 'llamó' },
          ],
          after: [],
          answer: 'yet',
          sentenceTranslation: 'Él todavía no ha llamado.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con el participio',
      instructions: 'Escribe el participio del verbo que aparece entre paréntesis.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
            { word: 'just', translation: 'acabo de' },
          ],
          after: [],
          answer: 'arrived',
          hint: 'arrive',
          sentenceTranslation: 'Acabo de llegar.',
        },
        {
          id: 10,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
            { word: 'already', translation: 'ya' },
          ],
          after: [],
          answer: 'called',
          hint: 'call',
          sentenceTranslation: 'Ella ya llamó.',
        },
        {
          id: 11,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'hasn’t', translation: 'no ha' },
          ],
          after: [
            { word: 'yet.', translation: 'todavía' },
          ],
          answer: 'eaten',
          hint: 'eat',
          sentenceTranslation: 'Él todavía no ha comido.',
        },
        {
          id: 12,
          before: [
            { word: 'Have', translation: 'he' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'Tom', translation: 'Tom' },
            { word: 'recently?', translation: 'recientemente' },
          ],
          answer: 'seen',
          hint: 'see',
          sentenceTranslation: '¿Has visto a Tom recientemente?',
        },
        {
          id: 13,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'lot', translation: 'mucho' },
            { word: 'lately.', translation: 'últimamente' },
          ],
          answer: 'changed',
          hint: 'change',
          sentenceTranslation: 'Han cambiado mucho últimamente.',
        },
        {
          id: 14,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he' },
            { word: 'already', translation: 'ya' },
          ],
          after: [
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'done',
          hint: 'do',
          sentenceTranslation: 'Ya lo hemos hecho.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué significa?',
      instructions: 'Escucha la oración y elige su significado.',
      questions: [
        {
          id: 15,
          audioText: 'I have just eaten.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Acabo de comer' },
            { id: 'b', text: 'Todavía no he comido' },
            { id: 'c', text: 'Ya comí hace tiempo' },
          ],
          correctOptionIds: ['a'],
          explanation: 'just = acabo de.',
        },
        {
          id: 16,
          audioText: 'I haven’t eaten yet.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Acabo de comer' },
            { id: 'b', text: 'Todavía no he comido' },
            { id: 'c', text: 'Ya comí' },
          ],
          correctOptionIds: ['b'],
          explanation: 'not ... yet = todavía no.',
        },
        {
          id: 17,
          audioText: 'I have already eaten.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Ya comí' },
            { id: 'b', text: 'Todavía no he comido' },
            { id: 'c', text: 'Acabo de comer' },
          ],
          correctOptionIds: ['a'],
          explanation: 'already = ya.',
        },
        {
          id: 18,
          audioText: 'She has just arrived.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Ella todavía no llega' },
            { id: 'b', text: 'Ella acaba de llegar' },
            { id: 'c', text: 'Ella ya se fue' },
          ],
          correctOptionIds: ['b'],
          explanation: 'just arrived = acaba de llegar.',
        },
        {
          id: 19,
          audioText: 'They haven’t left yet.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Ya se fueron' },
            { id: 'b', text: 'Todavía no se han ido' },
            { id: 'c', text: 'Acaban de irse' },
          ],
          correctOptionIds: ['b'],
          explanation: 'haven’t left yet = todavía no se han ido.',
        },
        {
          id: 20,
          audioText: 'He has already called.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Él ya llamó' },
            { id: 'b', text: 'Él todavía no llama' },
            { id: 'c', text: 'Él acaba de llamar' },
          ],
          correctOptionIds: ['a'],
          explanation: 'already called = ya llamó.',
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
            { id: 'q21-have', word: 'have', translation: 'he' },
            { id: 'q21-just', word: 'just', translation: 'acabo de' },
            {
              id: 'q21-finished',
              word: 'finished.',
              translation: 'terminado',
            },
          ],
          correctOrder: ['q21-i', 'q21-have', 'q21-just', 'q21-finished'],
          sentenceTranslation: 'Acabo de terminar.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-she', word: 'She', translation: 'ella' },
            { id: 'q22-has', word: 'has', translation: 'ha' },
            { id: 'q22-already', word: 'already', translation: 'ya' },
            { id: 'q22-eaten', word: 'eaten.', translation: 'comido' },
          ],
          correctOrder: ['q22-she', 'q22-has', 'q22-already', 'q22-eaten'],
          sentenceTranslation: 'Ella ya comió.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-havent', word: 'haven’t', translation: 'no he' },
            {
              id: 'q23-finished',
              word: 'finished',
              translation: 'terminado',
            },
            { id: 'q23-yet', word: 'yet.', translation: 'todavía' },
          ],
          correctOrder: ['q23-i', 'q23-havent', 'q23-finished', 'q23-yet'],
          sentenceTranslation: 'Todavía no he terminado.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-have', word: 'Have', translation: 'he' },
            { id: 'q24-you', word: 'you', translation: 'tú' },
            { id: 'q24-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q24-yet', word: 'yet?', translation: 'todavía' },
          ],
          correctOrder: ['q24-have', 'q24-you', 'q24-eaten', 'q24-yet'],
          sentenceTranslation: '¿Ya comiste?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-she', word: 'She', translation: 'ella' },
            { id: 'q25-still', word: 'still', translation: 'todavía' },
            { id: 'q25-hasnt', word: 'hasn’t', translation: 'no ha' },
            { id: 'q25-called', word: 'called.', translation: 'llamó' },
          ],
          correctOrder: ['q25-she', 'q25-still', 'q25-hasnt', 'q25-called'],
          sentenceTranslation: 'Ella todavía no ha llamado.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-they', word: 'They', translation: 'ellos' },
            { id: 'q26-have', word: 'have', translation: 'he' },
            { id: 'q26-just', word: 'just', translation: 'acabo de' },
            { id: 'q26-left', word: 'left.', translation: 'salido' },
          ],
          correctOrder: ['q26-they', 'q26-have', 'q26-just', 'q26-left'],
          sentenceTranslation: 'Ellos acaban de irse.',
        },
      ],
    },
  ],
};

export default lessonA2013;
