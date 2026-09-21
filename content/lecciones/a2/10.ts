import type { LessonContent } from '../types';

const lessonA2010: LessonContent = {
  level: 'a2',
  number: 10,
  title: 'Participios irregulares frecuentes',
  subtitle: 'Aprende los participios irregulares más comunes y úsalos en present perfect.',
  videoTitle: 'Participios irregulares frecuentes',
  videoDescription: 'En este video verás los participios irregulares agrupados por patrón y cómo usarlos con have y has.',
  objective: 'Al terminar, podrás reconocer y usar los participios irregulares más comunes en present perfect.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Escribe el participio',
      instructions: 'Escribe el participio irregular del verbo que aparece entre paréntesis.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'that', translation: 'esa' },
            { word: 'movie.', translation: 'película' },
          ],
          answer: 'seen',
          hint: 'see',
          sentenceTranslation: 'He visto esa película.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'lunch.', translation: 'almuerzo' },
          ],
          answer: 'eaten',
          hint: 'eat',
          sentenceTranslation: 'Ella ha almorzado.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'our', translation: 'nuestra' },
            { word: 'homework.', translation: 'tarea' },
          ],
          answer: 'done',
          hint: 'do',
          sentenceTranslation: 'Hemos hecho nuestra tarea.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'an', translation: 'un/una' },
            { word: 'email.', translation: 'correo' },
          ],
          answer: 'written',
          hint: 'write',
          sentenceTranslation: 'Él ha escrito un correo.',
        },
        {
          id: 5,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'home.', translation: 'a casa' },
          ],
          answer: 'gone',
          hint: 'go',
          sentenceTranslation: 'Se han ido a casa.',
        },
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'bus.', translation: 'autobús' },
          ],
          answer: 'taken',
          hint: 'take',
          sentenceTranslation: 'He tomado el autobús.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'window.', translation: 'ventana' },
          ],
          answer: 'broken',
          hint: 'break',
          sentenceTranslation: 'Ella ha roto la ventana.',
        },
        {
          id: 8,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'to', translation: 'con' },
            { word: 'the', translation: 'el/la' },
            { word: 'teacher.', translation: 'maestra' },
          ],
          answer: 'spoken',
          hint: 'speak',
          sentenceTranslation: 'Él ha hablado con la maestra.',
        },
        {
          id: 9,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'him', translation: 'lo' },
            { word: 'for', translation: 'por' },
            { word: 'years.', translation: 'años' },
          ],
          answer: 'known',
          hint: 'know',
          sentenceTranslation: 'Lo conocemos desde hace años.',
        },
        {
          id: 10,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'kids', translation: 'niños' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'lot.', translation: 'mucho' },
          ],
          answer: 'grown',
          hint: 'grow',
          sentenceTranslation: 'Los niños han crecido mucho.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'to', translation: 'con' },
            { word: 'Mexico.', translation: 'México' },
          ],
          answer: 'flown',
          hint: 'fly',
          sentenceTranslation: 'Ella ha volado a México.',
        },
        {
          id: 12,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'juice.', translation: 'jugo' },
          ],
          answer: 'drunk',
          hint: 'drink',
          sentenceTranslation: 'Han bebido el jugo.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Participios especiales',
      instructions: 'Escribe el participio. Algunos son iguales al pasado (had, made) y otros son especiales (been, come, run).',
      questions: [
        {
          id: 13,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'great', translation: 'gran' },
            { word: 'day.', translation: 'día' },
          ],
          answer: 'had',
          hint: 'have',
          sentenceTranslation: 'He tenido un gran día.',
        },
        {
          id: 14,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'cake.', translation: 'bizcocho' },
          ],
          answer: 'made',
          hint: 'make',
          sentenceTranslation: 'Ella ha hecho un bizcocho.',
        },
        {
          id: 15,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'keys.', translation: 'llaves' },
          ],
          answer: 'found',
          hint: 'find',
          sentenceTranslation: 'Hemos encontrado las llaves.',
        },
        {
          id: 16,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'car.', translation: 'carro' },
          ],
          answer: 'bought',
          hint: 'buy',
          sentenceTranslation: 'Él ha comprado un carro.',
        },
        {
          id: 17,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'to', translation: 'con' },
            { word: 'Paris.', translation: 'París' },
          ],
          answer: 'been',
          hint: 'be',
          sentenceTranslation: 'He estado en París.',
        },
        {
          id: 18,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'early.', translation: 'temprano' },
          ],
          answer: 'come',
          hint: 'come',
          sentenceTranslation: 'Él ha llegado temprano.',
        },
        {
          id: 19,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'he / hemos' },
          ],
          after: [
            { word: 'five', translation: 'cinco' },
            { word: 'miles.', translation: 'millas' },
          ],
          answer: 'run',
          hint: 'run',
          sentenceTranslation: 'Han corrido cinco millas.',
        },
        {
          id: 20,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'doctor.', translation: 'doctora' },
          ],
          answer: 'become',
          hint: 'become',
          sentenceTranslation: 'Ella se ha convertido en doctora.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Escucha el participio',
      instructions: 'Escucha la oración y elige el participio que se usó.',
      questions: [
        {
          id: 21,
          audioText: 'I have seen that movie.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'seen', text: 'seen' },
            { id: 'saw', text: 'saw' },
            { id: 'see', text: 'see' },
          ],
          correctOptionIds: ['seen'],
          explanation: 'have + seen: participio de see.',
        },
        {
          id: 22,
          audioText: 'She has eaten lunch.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'ate', text: 'ate' },
            { id: 'eaten', text: 'eaten' },
            { id: 'eat', text: 'eat' },
          ],
          correctOptionIds: ['eaten'],
          explanation: 'has + eaten: participio de eat.',
        },
        {
          id: 23,
          audioText: 'We have done our homework.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'did', text: 'did' },
            { id: 'do', text: 'do' },
            { id: 'done', text: 'done' },
          ],
          correctOptionIds: ['done'],
          explanation: 'have + done: participio de do.',
        },
        {
          id: 24,
          audioText: 'He has written an email.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'written', text: 'written' },
            { id: 'wrote', text: 'wrote' },
            { id: 'write', text: 'write' },
          ],
          correctOptionIds: ['written'],
          explanation: 'has + written: participio de write.',
        },
        {
          id: 25,
          audioText: 'They have gone home.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'went', text: 'went' },
            { id: 'gone', text: 'gone' },
            { id: 'go', text: 'go' },
          ],
          correctOptionIds: ['gone'],
          explanation: 'have + gone: participio de go.',
        },
        {
          id: 26,
          audioText: 'I have taken the bus.',
          language: 'en',
          prompt: '¿Qué forma del verbo escuchaste?',
          options: [
            { id: 'taken', text: 'taken' },
            { id: 'took', text: 'took' },
            { id: 'take', text: 'take' },
          ],
          correctOptionIds: ['taken'],
          explanation: 'have + taken: participio de take.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 27,
          tokens: [
            { id: 'q27-i', word: 'I', translation: 'yo' },
            { id: 'q27-havent', word: 'haven’t', translation: 'no han' },
            { id: 'q27-seen', word: 'seen', translation: 'visto' },
            { id: 'q27-that', word: 'that', translation: 'esa' },
            { id: 'q27-movie', word: 'movie.', translation: 'película' },
          ],
          correctOrder: ['q27-i', 'q27-havent', 'q27-seen', 'q27-that', 'q27-movie'],
          sentenceTranslation: 'No he visto esa película.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-she', word: 'She', translation: 'ella' },
            { id: 'q28-hasnt', word: 'hasn’t', translation: 'no ha' },
            { id: 'q28-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q28-yet', word: 'yet.', translation: 'todavía' },
          ],
          correctOrder: ['q28-she', 'q28-hasnt', 'q28-eaten', 'q28-yet'],
          sentenceTranslation: 'Ella todavía no ha comido.',
        },
        {
          id: 29,
          tokens: [
            { id: 'q29-they', word: 'They', translation: 'ellos' },
            { id: 'q29-havent', word: 'haven’t', translation: 'no han' },
            { id: 'q29-done', word: 'done', translation: 'hecho' },
            { id: 'q29-the', word: 'the', translation: 'el/la' },
            { id: 'q29-homework', word: 'homework.', translation: 'tarea' },
          ],
          correctOrder: ['q29-they', 'q29-havent', 'q29-done', 'q29-the', 'q29-homework'],
          sentenceTranslation: 'No han hecho la tarea.',
        },
        {
          id: 30,
          tokens: [
            { id: 'q30-have', word: 'Have', translation: 'he / hemos' },
            { id: 'q30-you', word: 'you', translation: 'tú' },
            { id: 'q30-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q30-yet', word: 'yet?', translation: 'todavía' },
          ],
          correctOrder: ['q30-have', 'q30-you', 'q30-eaten', 'q30-yet'],
          sentenceTranslation: '¿Ya comiste?',
        },
        {
          id: 31,
          tokens: [
            { id: 'q31-has', word: 'Has', translation: 'ha' },
            { id: 'q31-he', word: 'he', translation: 'él' },
            { id: 'q31-written', word: 'written', translation: 'escrito' },
            { id: 'q31-the', word: 'the', translation: 'el/la' },
            { id: 'q31-email', word: 'email?', translation: 'correo' },
          ],
          correctOrder: ['q31-has', 'q31-he', 'q31-written', 'q31-the', 'q31-email'],
          sentenceTranslation: '¿Ha escrito él el correo?',
        },
        {
          id: 32,
          tokens: [
            { id: 'q32-have', word: 'Have', translation: 'he / hemos' },
            { id: 'q32-they', word: 'they', translation: 'ellos' },
            { id: 'q32-gone', word: 'gone', translation: 'ido' },
            { id: 'q32-home', word: 'home?', translation: 'a casa' },
          ],
          correctOrder: ['q32-have', 'q32-they', 'q32-gone', 'q32-home'],
          sentenceTranslation: '¿Se han ido a casa?',
        },
      ],
    },
  ],
};

export default lessonA2010;
