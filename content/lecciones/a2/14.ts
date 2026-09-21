import type { LessonContent } from '../types';

const lessonA2014: LessonContent = {
  level: 'a2',
  number: 14,
  title: 'For y since; How long...?',
  subtitle: 'Aprende a decir cuánto tiempo llevas haciendo algo con for, since y How long...?',
  videoTitle: 'For y since; How long...?',
  videoDescription: 'En este video verás la diferencia entre for (duración) y since (punto de inicio) con present perfect, y la pregunta How long...?',
  objective: 'Al terminar, podrás usar for y since con present perfect y preguntar y responder How long...?',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'For o since',
      instructions: 'Escribe for (para una duración: five years) o since (para un momento de inicio: 2020).',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'lived', translation: 'vivido' },
            { word: 'here', translation: 'aquí' },
          ],
          after: [
            { word: 'five', translation: 'cinco' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'for',
          sentenceTranslation: 'He vivido aquí por cinco años.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
            { word: 'worked', translation: 'trabajado' },
            { word: 'here', translation: 'aquí' },
          ],
          after: [
            { word: '2020.', translation: '2020' },
          ],
          answer: 'since',
          sentenceTranslation: 'Ella ha trabajado aquí desde 2020.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'tengo' },
            { word: 'known', translation: 'conocido' },
            { word: 'him', translation: 'lo' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'long', translation: 'largo' },
            { word: 'time.', translation: 'tiempo' },
          ],
          answer: 'for',
          sentenceTranslation: 'Lo conocemos desde hace mucho tiempo.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'tiene' },
            { word: 'waited', translation: 'esperado' },
          ],
          after: [
            { word: 'an', translation: 'una' },
            { word: 'hour.', translation: 'hora' },
          ],
          answer: 'for',
          sentenceTranslation: 'Él ha esperado una hora.',
        },
        {
          id: 5,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'tengo' },
            { word: 'been', translation: 'estado' },
            { word: 'married', translation: 'casados' },
          ],
          after: [
            { word: '2015.', translation: '2015' },
          ],
          answer: 'since',
          sentenceTranslation: 'Están casados desde 2015.',
        },
        {
          id: 6,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
            { word: 'had', translation: 'tenido' },
            { word: 'this', translation: 'esta' },
            { word: 'car', translation: 'carro' },
          ],
          after: [
            { word: 'last', translation: 'pasado' },
            { word: 'year.', translation: 'año' },
          ],
          answer: 'since',
          sentenceTranslation: 'Ella tiene este carro desde el año pasado.',
        },
        {
          id: 7,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'studied', translation: 'estudiado' },
            { word: 'English', translation: 'inglés' },
          ],
          after: [
            { word: 'two', translation: 'dos' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'for',
          sentenceTranslation: 'He estudiado inglés por dos años.',
        },
        {
          id: 8,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'tiene' },
            { word: 'waited', translation: 'esperado' },
          ],
          after: [
            { word: '8:00.', translation: 'las 8:00' },
          ],
          answer: 'since',
          sentenceTranslation: 'Él ha esperado desde las 8:00.',
        },
        {
          id: 9,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'tengo' },
            { word: 'been', translation: 'estado' },
            { word: 'friends', translation: 'amigos' },
          ],
          after: [
            { word: 'they', translation: 'ellos' },
            { word: 'were', translation: 'eran' },
            { word: 'children.', translation: 'niños' },
          ],
          answer: 'since',
          sentenceTranslation: 'Son amigos desde que eran niños.',
        },
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'haven’t', translation: 'no he' },
            { word: 'seen', translation: 'visto' },
            { word: 'her', translation: 'su (de ella)' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'week.', translation: 'semana' },
          ],
          answer: 'for',
          sentenceTranslation: 'No la he visto por una semana.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'How long y participios',
      instructions: 'Escribe have, has o el participio del verbo entre paréntesis.',
      questions: [
        {
          id: 11,
          before: [
            { word: 'How', translation: 'cuánto' },
            { word: 'long', translation: 'largo' },
          ],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'lived', translation: 'vivido' },
            { word: 'here?', translation: 'aquí' },
          ],
          answer: 'have',
          sentenceTranslation: '¿Cuánto tiempo has vivido aquí?',
        },
        {
          id: 12,
          before: [
            { word: 'How', translation: 'cuánto' },
            { word: 'long', translation: 'largo' },
          ],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'worked', translation: 'trabajado' },
            { word: 'there?', translation: 'allí' },
          ],
          answer: 'has',
          sentenceTranslation: '¿Cuánto tiempo ha trabajado ella allí?',
        },
        {
          id: 13,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'him', translation: 'lo' },
            { word: 'for', translation: 'por' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'known',
          hint: 'know',
          sentenceTranslation: 'Lo conozco desde hace años.',
        },
        {
          id: 14,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
          ],
          after: [
            { word: 'here', translation: 'aquí' },
            { word: 'since', translation: 'desde' },
            { word: 'Monday.', translation: 'lunes' },
          ],
          answer: 'been',
          hint: 'be',
          sentenceTranslation: 'Ella ha estado aquí desde el lunes.',
        },
        {
          id: 15,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'this', translation: 'esta' },
            { word: 'house', translation: 'casa' },
            { word: 'for', translation: 'por' },
            { word: 'ten', translation: 'diez' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'had',
          hint: 'have',
          sentenceTranslation: 'Tenemos esta casa desde hace diez años.',
        },
        {
          id: 16,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'Miami', translation: 'Miami' },
            { word: 'since', translation: 'desde' },
            { word: '2019.', translation: '2019' },
          ],
          answer: 'lived',
          hint: 'live',
          sentenceTranslation: 'Han vivido en Miami desde 2019.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿For o since?',
      instructions: 'Escucha la oración y decide si se usó for (duración) o since (inicio).',
      questions: [
        {
          id: 17,
          audioText: 'I have lived here for five years.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['for'],
          explanation: 'for + duración: five years.',
        },
        {
          id: 18,
          audioText: 'She has worked here since 2020.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['since'],
          explanation: 'since + punto de inicio: 2020.',
        },
        {
          id: 19,
          audioText: 'He has waited for an hour.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['for'],
          explanation: 'for + duración: an hour.',
        },
        {
          id: 20,
          audioText: 'We haven’t talked since Monday.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['since'],
          explanation: 'since + punto de inicio: Monday.',
        },
        {
          id: 21,
          audioText: 'They have been friends for ten years.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['for'],
          explanation: 'for + duración: ten years.',
        },
        {
          id: 22,
          audioText: 'I have studied English since last year.',
          language: 'en',
          prompt: '¿Qué palabra escuchaste?',
          options: [
            { id: 'for', text: 'for' },
            { id: 'since', text: 'since' },
          ],
          correctOptionIds: ['since'],
          explanation: 'since + punto de inicio: last year.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 23,
          tokens: [
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-have', word: 'have', translation: 'tengo' },
            { id: 'q23-lived', word: 'lived', translation: 'vivido' },
            { id: 'q23-here', word: 'here', translation: 'aquí' },
            { id: 'q23-for', word: 'for', translation: 'por' },
            { id: 'q23-five', word: 'five', translation: 'cinco' },
            { id: 'q23-years', word: 'years.', translation: 'años' },
          ],
          correctOrder: ['q23-i', 'q23-have', 'q23-lived', 'q23-here', 'q23-for', 'q23-five', 'q23-years'],
          sentenceTranslation: 'He vivido aquí por cinco años.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-she', word: 'She', translation: 'ella' },
            { id: 'q24-has', word: 'has', translation: 'tiene' },
            { id: 'q24-worked', word: 'worked', translation: 'trabajado' },
            { id: 'q24-here', word: 'here', translation: 'aquí' },
            { id: 'q24-since', word: 'since', translation: 'desde' },
            { id: 'q24-2020', word: '2020.', translation: '2020' },
          ],
          correctOrder: ['q24-she', 'q24-has', 'q24-worked', 'q24-here', 'q24-since', 'q24-2020'],
          sentenceTranslation: 'Ella ha trabajado aquí desde 2020.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-how', word: 'How', translation: 'cuánto' },
            { id: 'q25-long', word: 'long', translation: 'largo' },
            { id: 'q25-have', word: 'have', translation: 'tengo' },
            { id: 'q25-you', word: 'you', translation: 'tú' },
            { id: 'q25-lived', word: 'lived', translation: 'vivido' },
            { id: 'q25-here', word: 'here?', translation: 'aquí' },
          ],
          correctOrder: ['q25-how', 'q25-long', 'q25-have', 'q25-you', 'q25-lived', 'q25-here'],
          sentenceTranslation: '¿Cuánto tiempo has vivido aquí?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-how', word: 'How', translation: 'cuánto' },
            { id: 'q26-long', word: 'long', translation: 'largo' },
            { id: 'q26-has', word: 'has', translation: 'tiene' },
            { id: 'q26-she', word: 'she', translation: 'ella' },
            { id: 'q26-worked', word: 'worked', translation: 'trabajado' },
            { id: 'q26-there', word: 'there?', translation: 'allí' },
          ],
          correctOrder: ['q26-how', 'q26-long', 'q26-has', 'q26-she', 'q26-worked', 'q26-there'],
          sentenceTranslation: '¿Cuánto tiempo ha trabajado ella allí?',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-i', word: 'I', translation: 'yo' },
            { id: 'q27-havent', word: 'haven’t', translation: 'no he' },
            { id: 'q27-seen', word: 'seen', translation: 'visto' },
            { id: 'q27-her', word: 'her', translation: 'su (de ella)' },
            { id: 'q27-for', word: 'for', translation: 'por' },
            { id: 'q27-a', word: 'a', translation: 'un/una' },
            { id: 'q27-week', word: 'week.', translation: 'semana' },
          ],
          correctOrder: ['q27-i', 'q27-havent', 'q27-seen', 'q27-her', 'q27-for', 'q27-a', 'q27-week'],
          sentenceTranslation: 'No la he visto por una semana.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-we', word: 'We', translation: 'nosotros' },
            { id: 'q28-havent', word: 'haven’t', translation: 'no he' },
            { id: 'q28-talked', word: 'talked', translation: 'hablado' },
            { id: 'q28-since', word: 'since', translation: 'desde' },
            { id: 'q28-monday', word: 'Monday.', translation: 'lunes' },
          ],
          correctOrder: ['q28-we', 'q28-havent', 'q28-talked', 'q28-since', 'q28-monday'],
          sentenceTranslation: 'No hemos hablado desde el lunes.',
        },
      ],
    },
  ],
};

export default lessonA2014;
