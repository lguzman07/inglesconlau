import type { LessonContent } from '../types';

const lessonB2001: LessonContent = {
  level: 'b2',

  number: 1,

  title: 'Present perfect simple vs continuous avanzado',

  subtitle:
    'Aprende a distinguir cuándo usar present perfect simple y cuándo usar present perfect continuous, con un enfoque más avanzado.',

  videoTitle: 'Present perfect simple vs continuous',

  videoDescription:
    'En este video verás la diferencia entre present perfect simple y present perfect continuous, y cuándo usar cada uno.',

  objective:
    'Al terminar, podrás elegir correctamente entre present perfect simple y continuous según el contexto de la oración.',

  videoSrc: '175e9031-2aa7-4f63-be02-c5988d300f18',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe el verbo correcto en present perfect simple (have/has + participio) o present perfect continuous (have/has been + verbo-ing). Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'three', translation: 'tres' },
            { word: 'reports', translation: 'informes' },
            { word: 'this', translation: 'esta' },
            { word: 'week.', translation: 'semana' },
          ],
          answer: 'finished',
          hint: 'finish',
          sentenceTranslation: 'Ella ha terminado tres informes esta semana.',
        },

        {
          id: 2,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'for', translation: 'por' },
            { word: 'two', translation: 'dos' },
            { word: 'hours', translation: 'horas' },
            { word: 'and', translation: 'y' },
            { word: 'I’m', translation: 'estoy' },
            { word: 'exhausted.', translation: 'agotada' },
          ],
          answer: 'studying',
          hint: 'study',
          sentenceTranslation:
            'He estado estudiando por dos horas y estoy agotada.',
        },

        {
          id: 3,
          before: [
            { word: 'They', translation: 'Ellos' },
            { word: 'have', translation: 'han' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'that', translation: 'esa' },
            { word: 'house', translation: 'casa' },
            { word: 'since', translation: 'desde' },
            { word: '2015.', translation: '2015' },
          ],
          answer: 'lived',
          hint: 'live',
          sentenceTranslation: 'Ellos han vivido en esa casa desde el 2015.',
        },

        {
          id: 4,
          before: [
            { word: 'He', translation: 'Él' },
            { word: 'has', translation: 'ha' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'all', translation: 'toda' },
            { word: 'morning', translation: 'la mañana' },
            { word: 'and', translation: 'y' },
            { word: 'the', translation: 'la' },
            { word: 'kitchen', translation: 'cocina' },
            { word: 'still', translation: 'todavía' },
            { word: 'smells', translation: 'huele' },
            { word: 'amazing.', translation: 'increíble' },
          ],
          answer: 'cooking',
          hint: 'cook',
          sentenceTranslation:
            'Él ha estado cocinando toda la mañana y la cocina todavía huele increíble.',
        },

        {
          id: 5,
          before: [
            { word: 'We', translation: 'Nosotros' },
            { word: 'have', translation: 'hemos' },
          ],
          after: [
            { word: 'the', translation: 'el' },
            { word: 'whole', translation: 'todo' },
            { word: 'project.', translation: 'proyecto' },
          ],
          answer: 'finished',
          hint: 'finish',
          sentenceTranslation: 'Hemos terminado todo el proyecto.',
        },

        {
          id: 6,
          before: [
            { word: 'My', translation: 'Mis' },
            { word: 'eyes', translation: 'ojos' },
            { word: 'hurt', translation: 'duelen' },
            { word: 'because', translation: 'porque' },
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'a', translation: 'una' },
            { word: 'screen', translation: 'pantalla' },
            { word: 'all', translation: 'todo' },
            { word: 'day.', translation: 'el día' },
          ],
          answer: 'looking',
          hint: 'look',
          sentenceTranslation:
            'Me duelen los ojos porque he estado mirando una pantalla todo el día.',
        },

        {
          id: 7,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'has', translation: 'ha' },
          ],
          after: [
            { word: 'her', translation: 'sus' },
            { word: 'keys', translation: 'llaves' },
            { word: 'again.', translation: 'otra vez' },
          ],
          answer: 'lost',
          hint: 'lose',
          sentenceTranslation: 'Ella ha perdido sus llaves otra vez.',
        },

        {
          id: 8,
          before: [
            { word: 'They', translation: 'Ellos' },
            { word: 'have', translation: 'han' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'about', translation: 'sobre' },
            { word: 'moving', translation: 'mudarse' },
            { word: 'for', translation: 'por' },
            { word: 'months,', translation: 'meses' },
            { word: 'but', translation: 'pero' },
            { word: 'nothing', translation: 'nada' },
            { word: 'is', translation: 'está' },
            { word: 'decided', translation: 'decidido' },
            { word: 'yet.', translation: 'todavía' },
          ],
          answer: 'talking',
          hint: 'talk',
          sentenceTranslation:
            'Ellos han estado hablando sobre mudarse por meses, pero nada está decidido todavía.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando present perfect simple o present perfect continuous.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Ella ha terminado el reporte.',
          acceptedAnswers: [
            'She has finished the report',
            'She has finished the report.',
            'She’s finished the report',
            'She’s finished the report.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
            { word: 'finished', translation: 'terminado' },
            { word: 'the', translation: 'el' },
            { word: 'report.', translation: 'reporte' },
          ],
          explanation:
            'Usamos present perfect simple para hablar del resultado de una acción ya completada: have/has + participio.',
        },

        {
          id: 10,
          sourceSentence: 'He estado esperando aquí por una hora.',
          acceptedAnswers: [
            'I have been waiting here for an hour',
            'I have been waiting here for an hour.',
            'I’ve been waiting here for an hour',
            'I’ve been waiting here for an hour.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
            { word: 'waiting', translation: 'esperando' },
            { word: 'here', translation: 'aquí' },
            { word: 'for', translation: 'por' },
            { word: 'an', translation: 'una' },
            { word: 'hour.', translation: 'hora' },
          ],
          explanation:
            'Usamos present perfect continuous para enfatizar la duración de una acción que sigue en progreso: have/has been + verbo-ing.',
        },

        {
          id: 11,
          sourceSentence: 'Ellos no han terminado la casa todavía.',
          acceptedAnswers: [
            'They have not finished the house yet',
            'They have not finished the house yet.',
            'They haven’t finished the house yet',
            'They haven’t finished the house yet.',
            'They’ve not finished the house yet',
            'They’ve not finished the house yet.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'have', translation: 'han' },
            { word: 'not', translation: 'no' },
            { word: 'finished', translation: 'terminado' },
            { word: 'the', translation: 'la' },
            { word: 'house', translation: 'casa' },
            { word: 'yet.', translation: 'todavía' },
          ],
          explanation:
            'Negativo en present perfect simple: have/has + not + participio.',
        },

        {
          id: 12,
          sourceSentence: 'Ella no ha estado durmiendo bien esta semana.',
          acceptedAnswers: [
            'She has not been sleeping well this week',
            'She has not been sleeping well this week.',
            'She hasn’t been sleeping well this week',
            'She hasn’t been sleeping well this week.',
            'She’s not been sleeping well this week',
            'She’s not been sleeping well this week.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'ha' },
            { word: 'not', translation: 'no' },
            { word: 'been', translation: 'estado' },
            { word: 'sleeping', translation: 'durmiendo' },
            { word: 'well', translation: 'bien' },
            { word: 'this', translation: 'esta' },
            { word: 'week.', translation: 'semana' },
          ],
          explanation:
            'Negativo en present perfect continuous: have/has + not + been + verbo-ing.',
        },

        {
          id: 13,
          sourceSentence: 'Hemos vivido aquí por diez años.',
          acceptedAnswers: [
            'We have lived here for ten years',
            'We have lived here for ten years.',
            'We’ve lived here for ten years',
            'We’ve lived here for ten years.',
          ],
          modelAnswer: [
            { word: 'We', translation: 'nosotros' },
            { word: 'have', translation: 'hemos' },
            { word: 'lived', translation: 'vivido' },
            { word: 'here', translation: 'aquí' },
            { word: 'for', translation: 'por' },
            { word: 'ten', translation: 'diez' },
            { word: 'years.', translation: 'años' },
          ],
          explanation:
            'Con verbos de estado (como live) que describen una situación permanente, se prefiere present perfect simple aunque haya duración con "for".',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha y elige',

      instructions:
        'Escucha la oración y decide si describe un resultado completado o una acción en progreso con duración.',

      questions: [
        {
          id: 14,
          audioText: 'She has finished the report.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Present perfect simple describe el resultado de una acción ya completada.',
        },

        {
          id: 15,
          audioText: 'I have been waiting here for an hour.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Present perfect continuous enfatiza la duración de una acción que sigue en progreso.',
        },

        {
          id: 16,
          audioText: 'He has been cooking all morning.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Present perfect continuous enfatiza cuánto tiempo lleva pasando la acción.',
        },

        {
          id: 17,
          audioText: 'We have eaten lunch already.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Present perfect simple describe el resultado de una acción ya terminada.',
        },

        {
          id: 18,
          audioText: 'She has been feeling sick since Monday.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Present perfect continuous se usa con "since" para mostrar duración desde un punto en el pasado.',
        },

        {
          id: 19,
          audioText: 'I have lost my keys again.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            {
              id: 'result',
              text: 'Un resultado completado',
            },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Present perfect simple describe el resultado presente de una acción pasada: las llaves están perdidas ahora.',
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
          id: 20,
          tokens: [
            { id: 'q18-she', word: 'She', translation: 'ella' },
            { id: 'q18-has', word: 'has', translation: 'ha' },
            { id: 'q18-been', word: 'been', translation: 'estado' },
            { id: 'q18-working', word: 'working', translation: 'trabajando' },
            { id: 'q18-here', word: 'here', translation: 'aquí' },
            { id: 'q18-since', word: 'since', translation: 'desde' },
            { id: 'q18-may', word: 'May.', translation: 'mayo' },
          ],
          correctOrder: [
            'q18-she',
            'q18-has',
            'q18-been',
            'q18-working',
            'q18-here',
            'q18-since',
            'q18-may',
          ],
          sentenceTranslation: 'Ella ha estado trabajando aquí desde mayo.',
        },

        {
          id: 21,
          tokens: [
            { id: 'q19-we', word: 'We', translation: 'nosotros' },
            { id: 'q19-have', word: 'have', translation: 'hemos' },
            { id: 'q19-already', word: 'already', translation: 'ya' },
            { id: 'q19-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q19-lunch.', word: 'lunch.', translation: 'almuerzo' },
          ],
          correctOrder: [
            'q19-we',
            'q19-have',
            'q19-already',
            'q19-eaten',
            'q19-lunch.',
          ],
          sentenceTranslation: 'Ya hemos almorzado.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-havent', word: 'haven’t', translation: 'no he' },
            { id: 'q20-seen', word: 'seen', translation: 'visto' },
            { id: 'q20-her', word: 'her', translation: 'a ella' },
            { id: 'q20-today.', word: 'today.', translation: 'hoy' },
          ],
          correctOrder: [
            'q20-i',
            'q20-havent',
            'q20-seen',
            'q20-her',
            'q20-today.',
          ],
          sentenceTranslation: 'No la he visto hoy.',
        },

        {
          id: 23,
          tokens: [
            { id: 'q21-he', word: 'He', translation: 'él' },
            { id: 'q21-has', word: 'has', translation: 'ha' },
            { id: 'q21-been', word: 'been', translation: 'estado' },
            { id: 'q21-feeling', word: 'feeling', translation: 'sintiéndose' },
            { id: 'q21-sick', word: 'sick', translation: 'enfermo' },
            { id: 'q21-since', word: 'since', translation: 'desde' },
            { id: 'q21-monday.', word: 'Monday.', translation: 'el lunes' },
          ],
          correctOrder: [
            'q21-he',
            'q21-has',
            'q21-been',
            'q21-feeling',
            'q21-sick',
            'q21-since',
            'q21-monday.',
          ],
          sentenceTranslation: 'Él se ha estado sintiendo enfermo desde el lunes.',
        },
      ],
    },
  ],
};

export default lessonB2001;
