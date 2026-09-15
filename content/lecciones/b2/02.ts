import type { LessonContent } from '../types';

const lessonB2002: LessonContent = {
  level: 'b2',

  number: 2,

  title: 'Past perfect simple vs continuous',

  subtitle:
    'Aprende a distinguir cuándo usar past perfect simple y cuándo usar past perfect continuous.',

  videoTitle: 'Past perfect simple vs continuous',

  videoDescription:
    'En este video verás la diferencia entre past perfect simple y past perfect continuous, y cuándo usar cada uno.',

  objective:
    'Al terminar, podrás elegir correctamente entre past perfect simple y continuous según el contexto de la oración.',

  videoSrc: 'dcd5ef60-6975-4946-b6ee-7d8122f0b1e2',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe el verbo correcto en past perfect simple (had + participio) o past perfect continuous (had been + verbo-ing). Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [
            { word: 'By', translation: 'Para' },
            { word: 'the', translation: 'el' },
            { word: 'time', translation: 'momento' },
            { word: 'I', translation: 'yo' },
            { word: 'arrived,', translation: 'llegué' },
            { word: 'she', translation: 'ella' },
            { word: 'had', translation: 'había' },
            { word: 'already', translation: 'ya' },
          ],
          after: [{ word: 'dinner.', translation: 'la cena' }],
          answer: 'finished',
          hint: 'finish',
          sentenceTranslation:
            'Para cuando llegué, ella ya había terminado la cena.',
        },

        {
          id: 2,
          before: [
            { word: 'They', translation: 'Ellos' },
            { word: 'had', translation: 'habían' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'for', translation: 'por' },
            { word: 'three', translation: 'tres' },
            { word: 'hours', translation: 'horas' },
            { word: 'when', translation: 'cuando' },
            { word: 'the', translation: 'el' },
            { word: 'bus', translation: 'autobús' },
            { word: 'finally', translation: 'finalmente' },
            { word: 'arrived.', translation: 'llegó' },
          ],
          answer: 'waiting',
          hint: 'wait',
          sentenceTranslation:
            'Ellos tenían tres horas esperando cuando el autobús finalmente llegó.',
        },

        {
          id: 3,
          before: [
            { word: 'He', translation: 'Él' },
            { word: 'was', translation: 'estaba' },
            { word: 'tired', translation: 'cansado' },
            { word: 'because', translation: 'porque' },
            { word: 'he', translation: 'él' },
            { word: 'had', translation: 'había' },
            { word: 'been', translation: 'estado' },
          ],
          after: [{ word: 'all', translation: 'toda' }, { word: 'morning.', translation: 'la mañana' }],
          answer: 'working',
          hint: 'work',
          sentenceTranslation:
            'Él estaba cansado porque había estado trabajando toda la mañana.',
        },

        {
          id: 4,
          before: [
            { word: 'We', translation: 'Nosotros' },
            { word: 'had', translation: 'habíamos' },
            { word: 'never', translation: 'nunca' },
          ],
          after: [
            { word: 'that', translation: 'ese' },
            { word: 'restaurant', translation: 'restaurante' },
            { word: 'before', translation: 'antes de' },
            { word: 'that', translation: 'esa' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'tried',
          hint: 'try',
          sentenceTranslation:
            'Nunca habíamos probado ese restaurante antes de esa noche.',
        },

        {
          id: 5,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'had', translation: 'había' },
          ],
          after: [
            { word: 'the', translation: 'el' },
            { word: 'book', translation: 'libro' },
            { word: 'before', translation: 'antes de que' },
            { word: 'the', translation: 'la' },
            { word: 'teacher', translation: 'profesora' },
            { word: 'asked', translation: 'preguntara' },
            { word: 'about', translation: 'sobre' },
            { word: 'it.', translation: 'él' },
          ],
          answer: 'read',
          hint: 'read',
          sentenceTranslation:
            'Ella había leído el libro antes de que la profesora preguntara sobre él.',
        },

        {
          id: 6,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'had', translation: 'había' },
            { word: 'been', translation: 'estado' },
          ],
          after: [
            { word: 'for', translation: 'por' },
            { word: 'an', translation: 'una' },
            { word: 'hour', translation: 'hora' },
            { word: 'when', translation: 'cuando' },
            { word: 'my', translation: 'mi' },
            { word: 'phone', translation: 'teléfono' },
            { word: 'rang.', translation: 'sonó' },
          ],
          answer: 'studying',
          hint: 'study',
          sentenceTranslation:
            'Yo tenía una hora estudiando cuando sonó mi teléfono.',
        },

        {
          id: 7,
          before: [
            { word: 'They', translation: 'Ellos' },
            { word: 'had', translation: 'habían' },
          ],
          after: [
            { word: 'the', translation: 'la' },
            { word: 'house', translation: 'casa' },
            { word: 'before', translation: 'antes de que' },
            { word: 'the', translation: 'los' },
            { word: 'guests', translation: 'invitados' },
            { word: 'arrived.', translation: 'llegaran' },
          ],
          answer: 'cleaned',
          hint: 'clean',
          sentenceTranslation:
            'Ellos habían limpiado la casa antes de que llegaran los invitados.',
        },

        {
          id: 8,
          before: [
            { word: 'He', translation: 'Él' },
            { word: 'had', translation: 'había' },
          ],
          after: [
            { word: 'exercise', translation: 'ejercicio' },
            { word: 'for', translation: 'por' },
            { word: 'two', translation: 'dos' },
            { word: 'hours', translation: 'horas' },
            { word: 'before', translation: 'antes de' },
            { word: 'he', translation: 'él' },
            { word: 'finally', translation: 'finalmente' },
            { word: 'took', translation: 'tomó' },
            { word: 'a', translation: 'un' },
            { word: 'break.', translation: 'descanso' },
          ],
          answer: 'done',
          hint: 'do',
          sentenceTranslation:
            'Él había hecho ejercicio por dos horas antes de finalmente tomar un descanso.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando past perfect simple o past perfect continuous.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Ya me había ido cuando ella llamó.',
          acceptedAnswers: [
            'I had already left when she called',
            'I had already left when she called.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'had', translation: 'había' },
            { word: 'already', translation: 'ya' },
            { word: 'left', translation: 'ido' },
            { word: 'when', translation: 'cuando' },
            { word: 'she', translation: 'ella' },
            { word: 'called.', translation: 'llamó' },
          ],
          explanation:
            'Past perfect simple describe una acción ya completada antes de otro momento en el pasado.',
        },

        {
          id: 10,
          sourceSentence: 'Habían reservado el hotel antes del viaje.',
          acceptedAnswers: [
            'They had booked the hotel before the trip',
            'They had booked the hotel before the trip.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'had', translation: 'habían' },
            { word: 'booked', translation: 'reservado' },
            { word: 'the', translation: 'el' },
            { word: 'hotel', translation: 'hotel' },
            { word: 'before', translation: 'antes de' },
            { word: 'the', translation: 'el' },
            { word: 'trip.', translation: 'viaje' },
          ],
          explanation:
            'Had + participio describe el resultado de una acción completada antes de otro momento pasado.',
        },

        {
          id: 11,
          sourceSentence: 'Él nunca había probado sushi antes de esa noche.',
          acceptedAnswers: [
            'He had never tried sushi before that night',
            'He had never tried sushi before that night.',
          ],
          modelAnswer: [
            { word: 'He', translation: 'él' },
            { word: 'had', translation: 'había' },
            { word: 'never', translation: 'nunca' },
            { word: 'tried', translation: 'probado' },
            { word: 'sushi', translation: 'sushi' },
            { word: 'before', translation: 'antes de' },
            { word: 'that', translation: 'esa' },
            { word: 'night.', translation: 'noche' },
          ],
          explanation:
            'Never se coloca entre had y el participio: had + never + participio.',
        },

        {
          id: 12,
          sourceSentence: 'Ella tenía tres horas manejando cuando empezó a llover.',
          acceptedAnswers: [
            'She had been driving for three hours when it started to rain',
            'She had been driving for three hours when it started to rain.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'had', translation: 'había' },
            { word: 'been', translation: 'estado' },
            { word: 'driving', translation: 'manejando' },
            { word: 'for', translation: 'por' },
            { word: 'three', translation: 'tres' },
            { word: 'hours', translation: 'horas' },
            { word: 'when', translation: 'cuando' },
            { word: 'it', translation: 'esto' },
            { word: 'started', translation: 'empezó' },
            { word: 'to', translation: 'a' },
            { word: 'rain.', translation: 'llover' },
          ],
          explanation:
            'Past perfect continuous (had been + verbo-ing) enfatiza la duración de una acción antes de otro momento pasado.',
        },

        {
          id: 13,
          sourceSentence: 'Ella tenía dos horas estudiando cuando su amiga llamó.',
          acceptedAnswers: [
            'She had been studying for two hours when her friend called',
            'She had been studying for two hours when her friend called.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'had', translation: 'había' },
            { word: 'been', translation: 'estado' },
            { word: 'studying', translation: 'estudiando' },
            { word: 'for', translation: 'por' },
            { word: 'two', translation: 'dos' },
            { word: 'hours', translation: 'horas' },
            { word: 'when', translation: 'cuando' },
            { word: 'her', translation: 'su' },
            { word: 'friend', translation: 'amiga' },
            { word: 'called.', translation: 'llamó' },
          ],
          explanation:
            'Past perfect continuous con "for + tiempo" describe cuánto llevaba pasando la acción.',
        },

        {
          id: 14,
          sourceSentence:
            'Ellos no habían estado durmiendo bien antes de que comenzara el examen.',
          acceptedAnswers: [
            'They had not been sleeping well before the exam started',
            'They had not been sleeping well before the exam started.',
            'They hadn’t been sleeping well before the exam started',
            'They hadn’t been sleeping well before the exam started.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'had', translation: 'habían' },
            { word: 'not', translation: 'no' },
            { word: 'been', translation: 'estado' },
            { word: 'sleeping', translation: 'durmiendo' },
            { word: 'well', translation: 'bien' },
            { word: 'before', translation: 'antes de que' },
            { word: 'the', translation: 'el' },
            { word: 'exam', translation: 'examen' },
            { word: 'started.', translation: 'comenzara' },
          ],
          explanation:
            'Negativo en past perfect continuous: had + not + been + verbo-ing.',
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
          id: 15,
          audioText: 'She had finished the report when her manager arrived.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Past perfect simple describe el resultado de una acción ya completada antes de otro momento pasado.',
        },

        {
          id: 16,
          audioText:
            'She had been driving for three hours when it started to rain.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Past perfect continuous enfatiza cuánto tiempo llevaba pasando la acción.',
        },

        {
          id: 17,
          audioText: 'He had been working all morning.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Had been + verbo-ing enfatiza la duración de la acción antes de otro momento pasado.',
        },

        {
          id: 18,
          audioText: 'They had booked the hotel before the trip.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Past perfect simple describe el resultado de una acción ya completada.',
        },

        {
          id: 19,
          audioText: 'The kitten hadn’t been eating before going to the vet.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['duration'],
          explanation:
            'Past perfect continuous negativo describe una acción que no estaba ocurriendo durante un período.',
        },

        {
          id: 20,
          audioText: 'He had never tried sushi before that night.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'result', text: 'Un resultado completado' },
            {
              id: 'duration',
              text: 'Una acción en progreso, con duración',
            },
          ],
          correctOptionIds: ['result'],
          explanation:
            'Past perfect simple describe el resultado de una experiencia (o falta de ella) antes de otro momento pasado.',
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
            { id: 'q21-had', word: 'had', translation: 'había' },
            { id: 'q21-finished', word: 'finished', translation: 'terminado' },
            { id: 'q21-the', word: 'the', translation: 'el' },
            { id: 'q21-report', word: 'report.', translation: 'informe' },
          ],
          correctOrder: [
            'q21-she',
            'q21-had',
            'q21-finished',
            'q21-the',
            'q21-report',
          ],
          sentenceTranslation: 'Ella había terminado el informe.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q22-he', word: 'He', translation: 'él' },
            { id: 'q22-hadnt', word: 'hadn’t', translation: 'no había' },
            { id: 'q22-woken', word: 'woken', translation: 'despertado' },
            { id: 'q22-up', word: 'up', translation: '' },
            { id: 'q22-when', word: 'when', translation: 'cuando' },
            { id: 'q22-the', word: 'the', translation: 'la' },
            { id: 'q22-alarm', word: 'alarm', translation: 'alarma' },
            { id: 'q22-rang', word: 'rang.', translation: 'sonó' },
          ],
          correctOrder: [
            'q22-he',
            'q22-hadnt',
            'q22-woken',
            'q22-up',
            'q22-when',
            'q22-the',
            'q22-alarm',
            'q22-rang',
          ],
          sentenceTranslation:
            'Él no se había despertado cuando sonó la alarma.',
        },

        {
          id: 23,
          tokens: [
            { id: 'q23-had', word: 'Had', translation: '¿Había' },
            { id: 'q23-you', word: 'you', translation: 'tú' },
            { id: 'q23-eaten', word: 'eaten', translation: 'comido' },
            { id: 'q23-before', word: 'before', translation: 'antes de que' },
            { id: 'q23-the', word: 'the', translation: 'la' },
            { id: 'q23-meeting', word: 'meeting', translation: 'reunión' },
            { id: 'q23-started', word: 'started?', translation: 'empezara' },
          ],
          correctOrder: [
            'q23-had',
            'q23-you',
            'q23-eaten',
            'q23-before',
            'q23-the',
            'q23-meeting',
            'q23-started',
          ],
          sentenceTranslation: '¿Habías comido antes de que empezara la reunión?',
        },

        {
          id: 24,
          tokens: [
            { id: 'q24-had', word: 'Had', translation: '¿Había' },
            { id: 'q24-the', word: 'the', translation: 'el/la' },
            { id: 'q24-baby', word: 'baby', translation: 'bebé' },
            { id: 'q24-been', word: 'been', translation: 'estado' },
            {
              id: 'q24-presenting',
              word: 'presenting',
              translation: 'presentando',
            },
            { id: 'q24-a', word: 'a', translation: 'una' },
            { id: 'q24-fever', word: 'fever', translation: 'fiebre' },
            {
              id: 'q24-before',
              word: 'before',
              translation: 'antes de',
            },
            { id: 'q24-today', word: 'today?', translation: 'hoy' },
          ],
          correctOrder: [
            'q24-had',
            'q24-the',
            'q24-baby',
            'q24-been',
            'q24-presenting',
            'q24-a',
            'q24-fever',
            'q24-before',
            'q24-today',
          ],
          sentenceTranslation: '¿El bebé había tenido fiebre antes de hoy?',
        },
      ],
    },
  ],
};

export default lessonB2002;
