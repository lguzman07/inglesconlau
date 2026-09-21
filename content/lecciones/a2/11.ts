import type { LessonContent } from '../types';

const lessonA2011: LessonContent = {
  level: 'a2',
  number: 11,
  title: 'Experiencias con ever y never',
  subtitle: 'Aprende a hablar de experiencias de vida con ever y never, y la diferencia entre been y gone.',
  videoTitle: 'Experiencias con ever y never',
  videoDescription: 'En este video verás Have you ever...?, never, las respuestas cortas y la diferencia entre been y gone.',
  objective: 'Al terminar, podrás preguntar y contar experiencias de vida con present perfect, ever y never.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Ever o never',
      instructions: 'Escribe ever (en preguntas) o never (en afirmaciones con significado negativo).',
      questions: [
        {
          id: 1,
          before: [
            { word: 'Have', translation: 'he / hemos' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'visited', translation: 'visitado' },
            { word: 'Miami?', translation: 'Miami' },
          ],
          answer: 'ever',
          sentenceTranslation: '¿Has visitado Miami alguna vez?',
        },
        {
          id: 2,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'flown', translation: 'volado' },
            { word: 'in', translation: 'en' },
            { word: 'a', translation: 'un/una' },
            { word: 'plane.', translation: 'avión' },
          ],
          answer: 'never',
          sentenceTranslation: 'Nunca he volado en avión.',
        },
        {
          id: 3,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'eaten', translation: 'comido' },
            { word: 'sushi.', translation: 'sushi' },
          ],
          answer: 'never',
          sentenceTranslation: 'Ella nunca ha comido sushi.',
        },
        {
          id: 4,
          before: [
            { word: 'Has', translation: 'ha' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'met', translation: 'conocido' },
            { word: 'a', translation: 'un/una' },
            { word: 'famous', translation: 'famosa' },
            { word: 'person?', translation: 'persona' },
          ],
          answer: 'ever',
          sentenceTranslation: '¿Ha conocido ella a una persona famosa alguna vez?',
        },
        {
          id: 5,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'been', translation: 'estado' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'never',
          sentenceTranslation: 'Nunca hemos llegado tarde.',
        },
        {
          id: 6,
          before: [
            { word: 'Have', translation: 'he / hemos' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'seen', translation: 'visto' },
            { word: 'snow?', translation: 'nieve' },
          ],
          answer: 'ever',
          sentenceTranslation: '¿Han visto nieve alguna vez?',
        },
        {
          id: 7,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'tried', translation: 'probado' },
            { word: 'sushi.', translation: 'sushi' },
          ],
          answer: 'never',
          sentenceTranslation: 'Él nunca ha probado sushi.',
        },
        {
          id: 8,
          before: [
            { word: 'Have', translation: 'he / hemos' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'ridden', translation: 'montado' },
            { word: 'a', translation: 'un/una' },
            { word: 'horse?', translation: 'caballo' },
          ],
          answer: 'ever',
          sentenceTranslation: '¿Has montado a caballo alguna vez?',
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
            { word: 'Have', translation: 'he / hemos' },
            { word: 'you', translation: 'tú' },
            { word: 'ever', translation: 'alguna vez' },
          ],
          after: [
            { word: 'Spain?', translation: 'España' },
          ],
          answer: 'visited',
          hint: 'visit',
          sentenceTranslation: '¿Has visitado España alguna vez?',
        },
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
            { word: 'never', translation: 'nunca' },
          ],
          after: [
            { word: 'sushi.', translation: 'sushi' },
          ],
          answer: 'eaten',
          hint: 'eat',
          sentenceTranslation: 'Nunca he comido sushi.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'to', translation: 'con' },
            { word: 'Paris', translation: 'París' },
            { word: 'twice.', translation: 'dos veces' },
          ],
          answer: 'been',
          hint: 'be',
          sentenceTranslation: 'Ella ha estado en París dos veces.',
        },
        {
          id: 12,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he / hemos' },
            { word: 'never', translation: 'nunca' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'a', translation: 'un/una' },
            { word: 'plane.', translation: 'avión' },
          ],
          answer: 'flown',
          hint: 'fly',
          sentenceTranslation: 'Nunca han volado en avión.',
        },
        {
          id: 13,
          before: [
            { word: 'Have', translation: 'he / hemos' },
            { word: 'you', translation: 'tú' },
            { word: 'ever', translation: 'alguna vez' },
          ],
          after: [
            { word: 'your', translation: 'tu' },
            { word: 'phone?', translation: 'teléfono' },
          ],
          answer: 'lost',
          hint: 'lose',
          sentenceTranslation: '¿Has perdido tu teléfono alguna vez?',
        },
        {
          id: 14,
          before: [
            { word: 'Have', translation: 'he / hemos' },
            { word: 'you', translation: 'tú' },
            { word: 'ever', translation: 'alguna vez' },
          ],
          after: [
            { word: 'camping?', translation: 'de campamento' },
          ],
          answer: 'gone',
          hint: 'go',
          sentenceTranslation: '¿Has ido de campamento alguna vez?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Been, gone y respuestas cortas',
      instructions: 'Escucha la oración. She has been to Paris = ya volvió. She has gone to Paris = todavía está allá.',
      questions: [
        {
          id: 15,
          audioText: 'She has been to Paris.',
          language: 'en',
          prompt: '¿Dónde está ella ahora?',
          options: [
            { id: 'back', text: 'Ya volvió' },
            { id: 'there', text: 'Todavía está en París' },
          ],
          correctOptionIds: ['back'],
          explanation: 'has been to = fue y ya regresó.',
        },
        {
          id: 16,
          audioText: 'She has gone to Paris.',
          language: 'en',
          prompt: '¿Dónde está ella ahora?',
          options: [
            { id: 'back', text: 'Ya volvió' },
            { id: 'there', text: 'Todavía está en París' },
          ],
          correctOptionIds: ['there'],
          explanation: 'has gone to = fue y todavía está allá.',
        },
        {
          id: 17,
          audioText: 'He has been to Mexico twice.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Estuvo en México dos veces' },
            { id: 'b', text: 'Está en México ahora' },
          ],
          correctOptionIds: ['a'],
          explanation: 'has been to = experiencia: dos veces.',
        },
        {
          id: 18,
          audioText: 'They have gone to the beach.',
          language: 'en',
          prompt: '¿Dónde están?',
          options: [
            { id: 'a', text: 'En la playa ahora' },
            { id: 'b', text: 'Ya volvieron de la playa' },
          ],
          correctOptionIds: ['a'],
          explanation: 'have gone to = todavía están allá.',
        },
        {
          id: 19,
          audioText: 'Yes, she has.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'yes', text: 'Sí, lo ha hecho' },
            { id: 'no', text: 'No, no lo ha hecho' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'Yes, she has = sí, lo ha hecho.',
        },
        {
          id: 20,
          audioText: 'No, never.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'once', text: 'Lo ha hecho una vez' },
            { id: 'never', text: 'Nunca lo ha hecho' },
          ],
          correctOptionIds: ['never'],
          explanation: 'never = nunca.',
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
            { id: 'q21-have', word: 'Have', translation: 'he / hemos' },
            { id: 'q21-you', word: 'you', translation: 'tú' },
            { id: 'q21-ever', word: 'ever', translation: 'alguna vez' },
            { id: 'q21-visited', word: 'visited', translation: 'visitado' },
            { id: 'q21-spain', word: 'Spain?', translation: 'España' },
          ],
          correctOrder: ['q21-have', 'q21-you', 'q21-ever', 'q21-visited', 'q21-spain'],
          sentenceTranslation: '¿Has visitado España alguna vez?',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-have', word: 'have', translation: 'he / hemos' },
            { id: 'q22-never', word: 'never', translation: 'nunca' },
            { id: 'q22-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q22-sushi', word: 'sushi.', translation: 'sushi' },
          ],
          correctOrder: ['q22-i', 'q22-have', 'q22-never', 'q22-eaten', 'q22-sushi'],
          sentenceTranslation: 'Nunca he comido sushi.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-she', word: 'She', translation: 'ella' },
            { id: 'q23-has', word: 'has', translation: 'ha' },
            { id: 'q23-been', word: 'been', translation: 'estado' },
            { id: 'q23-to', word: 'to', translation: 'con' },
            { id: 'q23-paris', word: 'Paris', translation: 'París' },
            { id: 'q23-twice', word: 'twice.', translation: 'dos veces' },
          ],
          correctOrder: ['q23-she', 'q23-has', 'q23-been', 'q23-to', 'q23-paris', 'q23-twice'],
          sentenceTranslation: 'Ella ha estado en París dos veces.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-they', word: 'They', translation: 'ellos' },
            { id: 'q24-have', word: 'have', translation: 'he / hemos' },
            { id: 'q24-never', word: 'never', translation: 'nunca' },
            { id: 'q24-flown', word: 'flown', translation: 'volado' },
            { id: 'q24-in', word: 'in', translation: 'en' },
            { id: 'q24-a', word: 'a', translation: 'un/una' },
            { id: 'q24-plane', word: 'plane.', translation: 'avión' },
          ],
          correctOrder: ['q24-they', 'q24-have', 'q24-never', 'q24-flown', 'q24-in', 'q24-a', 'q24-plane'],
          sentenceTranslation: 'Nunca han volado en avión.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-has', word: 'Has', translation: 'ha' },
            { id: 'q25-she', word: 'she', translation: 'ella' },
            { id: 'q25-ever', word: 'ever', translation: 'alguna vez' },
            { id: 'q25-met', word: 'met', translation: 'conocido' },
            { id: 'q25-a', word: 'a', translation: 'un/una' },
            { id: 'q25-famous', word: 'famous', translation: 'famosa' },
            { id: 'q25-person', word: 'person?', translation: 'persona' },
          ],
          correctOrder: ['q25-has', 'q25-she', 'q25-ever', 'q25-met', 'q25-a', 'q25-famous', 'q25-person'],
          sentenceTranslation: '¿Ha conocido ella a una persona famosa?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-we', word: 'We', translation: 'nosotros' },
            { id: 'q26-have', word: 'have', translation: 'he / hemos' },
            { id: 'q26-never', word: 'never', translation: 'nunca' },
            { id: 'q26-been', word: 'been', translation: 'estado' },
            { id: 'q26-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q26-we', 'q26-have', 'q26-never', 'q26-been', 'q26-late'],
          sentenceTranslation: 'Nunca hemos llegado tarde.',
        },
      ],
    },
  ],
};

export default lessonA2011;
