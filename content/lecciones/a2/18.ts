import type { LessonContent } from '../types';

const lessonA2018: LessonContent = {
  level: 'a2',
  number: 18,
  title: 'Present continuous para planes futuros',
  subtitle: 'Aprende a usar el present continuous para planes acordados y a compararlo con will y going to.',
  videoTitle: 'Present continuous para planes futuros',
  videoDescription: 'En este video verás el present continuous para planes acordados, y cuándo usar will, going to o present continuous.',
  objective: 'Al terminar, podrás elegir entre will, going to y present continuous para hablar del futuro.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con el verbo con ING',
      instructions: 'Escribe el verbo con ING para hablar de un plan acordado.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'Ana', translation: 'Ana' },
            { word: 'tomorrow.', translation: 'mañana' },
          ],
          answer: 'meeting',
          hint: 'meet',
          sentenceTranslation: 'Me voy a encontrar con Ana mañana.',
        },
        {
          id: 2,
          before: [
            { word: 'We’re', translation: 'estamos' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'Miami', translation: 'Miami' },
            { word: 'on', translation: 'el' },
            { word: 'Friday.', translation: 'viernes' },
          ],
          answer: 'flying',
          hint: 'fly',
          sentenceTranslation: 'Volamos a Miami el viernes.',
        },
        {
          id: 3,
          before: [
            { word: 'She’s', translation: 'ella está' },
          ],
          after: [
            { word: 'her', translation: 'su' },
            { word: 'course', translation: 'curso' },
            { word: 'next', translation: 'próximo' },
            { word: 'month.', translation: 'mes' },
          ],
          answer: 'starting',
          hint: 'start',
          sentenceTranslation: 'Ella empieza su curso el mes que viene.',
        },
        {
          id: 4,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'are', translation: 'son / estás' },
          ],
          after: [
            { word: 'tonight.', translation: 'esta noche' },
          ],
          answer: 'coming',
          hint: 'come',
          sentenceTranslation: 'Ellos vienen esta noche.',
        },
        {
          id: 5,
          before: [
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'exam', translation: 'examen' },
            { word: 'on', translation: 'el' },
            { word: 'Friday.', translation: 'viernes' },
          ],
          answer: 'taking',
          hint: 'take',
          sentenceTranslation: 'Hago el examen el viernes.',
        },
        {
          id: 6,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'doctor', translation: 'médico' },
            { word: 'at', translation: 'a' },
            { word: '5:00.', translation: 'las 5:00' },
          ],
          answer: 'seeing',
          hint: 'see',
          sentenceTranslation: 'Él va al médico a las 5:00.',
        },
        {
          id: 7,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'time', translation: 'hora' },
            { word: 'are', translation: 'son / estás' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'leaving',
          hint: 'leave',
          sentenceTranslation: '¿A qué hora sales?',
        },
        {
          id: 8,
          before: [
            { word: 'Are', translation: 'son / estás' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'anything', translation: 'algo' },
            { word: 'tonight?', translation: 'esta noche' },
          ],
          answer: 'doing',
          hint: 'do',
          sentenceTranslation: '¿Haces algo esta noche?',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Will, going to o present continuous',
      instructions: 'Escribe will, going, flying o seeing. Will = decisión en el momento o predicción; going to = intención o evidencia; present continuous = plan acordado.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'phone', translation: 'teléfono' },
            { word: 'is', translation: 'es / está' },
            { word: 'ringing.', translation: 'sonando' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'answer', translation: 'contestar' },
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'will',
          sentenceTranslation: 'El teléfono suena. Lo contesto.',
        },
        {
          id: 10,
          before: [
            { word: 'Look', translation: 'parece' },
            { word: 'at', translation: 'a' },
            { word: 'the', translation: 'el/la' },
            { word: 'clouds!', translation: 'nubes' },
            { word: 'It’s', translation: 'es' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'rain.', translation: 'llover' },
          ],
          answer: 'going',
          sentenceTranslation: '¡Mira las nubes! Va a llover.',
        },
        {
          id: 11,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'a', translation: 'un/una' },
            { word: 'ticket.', translation: 'boleto' },
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'Miami', translation: 'Miami' },
            { word: 'on', translation: 'el' },
            { word: 'Friday.', translation: 'viernes' },
          ],
          answer: 'flying',
          sentenceTranslation: 'Tengo un boleto. Vuelo a Miami el viernes.',
        },
        {
          id: 12,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'think', translation: 'creo' },
            { word: 'it', translation: 'eso' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'sunny', translation: 'soleado' },
            { word: 'tomorrow.', translation: 'mañana' },
          ],
          answer: 'will',
          sentenceTranslation: 'Creo que estará soleado mañana.',
        },
        {
          id: 13,
          before: [
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'study', translation: 'estudiar' },
            { word: 'medicine.', translation: 'medicina' },
          ],
          answer: 'going',
          sentenceTranslation: 'Voy a estudiar medicina.',
        },
        {
          id: 14,
          before: [
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'doctor', translation: 'médico' },
            { word: 'at', translation: 'a' },
            { word: '5:00.', translation: 'las 5:00' },
          ],
          answer: 'seeing',
          sentenceTranslation: 'Voy al médico a las 5:00.',
        },
        {
          id: 15,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'cold.', translation: 'frío' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'close', translation: 'cerrar' },
            { word: 'the', translation: 'el/la' },
            { word: 'window.', translation: 'ventana' },
          ],
          answer: 'will',
          sentenceTranslation: 'Hace frío. Cerraré la ventana.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué expresa?',
      instructions: 'Escucha la oración y decide qué expresa.',
      questions: [
        {
          id: 16,
          audioText: 'The phone is ringing. I’ll answer it.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['now'],
          explanation: 'will = decisión en el momento.',
        },
        {
          id: 17,
          audioText: 'Look at the clouds! It’s going to rain.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['plan'],
          explanation: 'going to + evidencia.',
        },
        {
          id: 18,
          audioText: 'I’m meeting Ana at 5:00.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['arranged'],
          explanation: 'present continuous = plan acordado.',
        },
        {
          id: 19,
          audioText: 'It’s cold. I’ll close the window.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['now'],
          explanation: 'will = decisión en el momento.',
        },
        {
          id: 20,
          audioText: 'I’m going to study medicine.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['plan'],
          explanation: 'going to = intención.',
        },
        {
          id: 21,
          audioText: 'We’re flying to Miami on Friday.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'now', text: 'Decisión en el momento' },
            { id: 'plan', text: 'Intención o predicción con evidencia' },
            { id: 'arranged', text: 'Plan acordado' },
          ],
          correctOptionIds: ['arranged'],
          explanation: 'present continuous = plan acordado.',
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
            { id: 'q22-im', word: 'I’m', translation: 'yo estoy' },
            {
              id: 'q22-meeting',
              word: 'meeting',
              translation: 'encontrándome',
            },
            { id: 'q22-ana', word: 'Ana', translation: 'Ana' },
            {
              id: 'q22-tomorrow',
              word: 'tomorrow.',
              translation: 'mañana',
            },
          ],
          correctOrder: ['q22-im', 'q22-meeting', 'q22-ana', 'q22-tomorrow'],
          sentenceTranslation: 'Me voy a encontrar con Ana mañana.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-were', word: 'We’re', translation: 'estamos' },
            { id: 'q23-flying', word: 'flying', translation: 'volando' },
            { id: 'q23-to', word: 'to', translation: 'a' },
            { id: 'q23-miami', word: 'Miami', translation: 'Miami' },
            { id: 'q23-on', word: 'on', translation: 'el' },
            { id: 'q23-friday', word: 'Friday.', translation: 'viernes' },
          ],
          correctOrder: ['q23-were', 'q23-flying', 'q23-to', 'q23-miami', 'q23-on', 'q23-friday'],
          sentenceTranslation: 'Volamos a Miami el viernes.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-she', word: 'She', translation: 'ella' },
            { id: 'q24-isnt', word: 'isn’t', translation: 'no' },
            {
              id: 'q24-working',
              word: 'working',
              translation: 'trabajando',
            },
            {
              id: 'q24-tomorrow',
              word: 'tomorrow.',
              translation: 'mañana',
            },
          ],
          correctOrder: ['q24-she', 'q24-isnt', 'q24-working', 'q24-tomorrow'],
          sentenceTranslation: 'Ella no trabaja mañana.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-are', word: 'Are', translation: 'son / estás' },
            { id: 'q25-you', word: 'you', translation: 'tú' },
            { id: 'q25-doing', word: 'doing', translation: 'haciendo' },
            { id: 'q25-anything', word: 'anything', translation: 'algo' },
            {
              id: 'q25-tonight',
              word: 'tonight?',
              translation: 'esta noche',
            },
          ],
          correctOrder: ['q25-are', 'q25-you', 'q25-doing', 'q25-anything', 'q25-tonight'],
          sentenceTranslation: '¿Haces algo esta noche?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-what', word: 'What', translation: 'qué' },
            { id: 'q26-time', word: 'time', translation: 'hora' },
            { id: 'q26-are', word: 'are', translation: 'son / estás' },
            { id: 'q26-you', word: 'you', translation: 'tú' },
            {
              id: 'q26-leaving',
              word: 'leaving?',
              translation: 'saliendo',
            },
          ],
          correctOrder: ['q26-what', 'q26-time', 'q26-are', 'q26-you', 'q26-leaving'],
          sentenceTranslation: '¿A qué hora sales?',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-im', word: 'I’m', translation: 'yo estoy' },
            { id: 'q27-going', word: 'going', translation: 'a' },
            { id: 'q27-to', word: 'to', translation: 'a' },
            { id: 'q27-study', word: 'study', translation: 'estudiar' },
            {
              id: 'q27-medicine',
              word: 'medicine.',
              translation: 'medicina',
            },
          ],
          correctOrder: ['q27-im', 'q27-going', 'q27-to', 'q27-study', 'q27-medicine'],
          sentenceTranslation: 'Voy a estudiar medicina.',
        },
      ],
    },
  ],
};

export default lessonA2018;
