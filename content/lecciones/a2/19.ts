import type { LessonContent } from '../types';

const lessonA2019: LessonContent = {
  level: 'a2',
  number: 19,
  title: 'Viajes: hoteles, aeropuerto y billetes',
  subtitle: 'Aprende vocabulario y frases para planear un viaje, reservar un hotel, moverte por el aeropuerto y comprar boletos.',
  videoTitle: 'Viajes: hoteles, aeropuerto y billetes',
  videoDescription: 'En este video verás frases para reservar un hotel, resolver problemas, pasar por el aeropuerto y comprar boletos de avión.',
  objective: 'Al terminar, podrás desenvolverte en un viaje: hotel, aeropuerto, vuelos retrasados o cancelados y boletos.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'En el hotel y el aeropuerto',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I’d', translation: 'me gustaría' },
            { word: 'like', translation: 'gustaría' },
            { word: 'to', translation: 'a' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'room', translation: 'habitación' },
            { word: 'for', translation: 'para' },
            { word: 'two', translation: 'dos' },
            { word: 'nights.', translation: 'noches' },
          ],
          answer: 'book',
          sentenceTranslation: 'Me gustaría reservar una habitación por dos noches.',
        },
        {
          id: 2,
          before: [
            { word: 'Do', translation: 'gustan' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tengo' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'room?', translation: 'habitación' },
          ],
          answer: 'double',
          sentenceTranslation: '¿Tiene una habitación doble?',
        },
        {
          id: 3,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'time', translation: 'hora' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [],
          answer: 'check-out',
          sentenceTranslation: '¿A qué hora es la salida del hotel?',
        },
        {
          id: 4,
          before: [
            { word: 'Where', translation: 'dónde' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'five?', translation: 'cinco' },
          ],
          answer: 'gate',
          sentenceTranslation: '¿Dónde está la puerta cinco?',
        },
        {
          id: 5,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'flight', translation: 'vuelo' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [],
          answer: 'delayed',
          sentenceTranslation: 'Mi vuelo está retrasado.',
        },
        {
          id: 6,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'flight', translation: 'vuelo' },
            { word: 'was', translation: 'fue' },
          ],
          after: [],
          answer: 'cancelled',
          sentenceTranslation: 'El vuelo fue cancelado.',
        },
        {
          id: 7,
          before: [
            { word: 'How', translation: 'cuánto' },
            { word: 'much', translation: 'cuesta' },
            { word: 'is', translation: 'es / está' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'ticket', translation: 'boleto' },
            { word: 'to', translation: 'a' },
            { word: 'Madrid?', translation: 'Madrid' },
          ],
          answer: 'return',
          sentenceTranslation: '¿Cuánto cuesta un boleto de ida y vuelta a Madrid?',
        },
        {
          id: 8,
          before: [
            { word: 'I’d', translation: 'me gustaría' },
            { word: 'like', translation: 'gustaría' },
            { word: 'a', translation: 'un/una' },
            { word: 'window', translation: 'ventana' },
          ],
          after: [],
          answer: 'seat',
          sentenceTranslation: 'Me gustaría un asiento de ventana.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Más vocabulario de viaje',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'need', translation: 'necesito' },
            { word: 'my', translation: 'mi' },
          ],
          after: [],
          answer: 'passport',
          sentenceTranslation: 'Necesito mi pasaporte.',
        },
        {
          id: 10,
          before: [
            { word: 'Please', translation: 'por favor' },
            { word: 'show', translation: 'muestra' },
            { word: 'your', translation: 'tu' },
          ],
          after: [
            { word: 'pass.', translation: 'tarjeta' },
          ],
          answer: 'boarding',
          sentenceTranslation: 'Por favor muestre su tarjeta de embarque.',
        },
        {
          id: 11,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'one', translation: 'una' },
          ],
          after: [],
          answer: 'suitcase',
          sentenceTranslation: 'Tengo una maleta.',
        },
        {
          id: 12,
          before: [
            { word: 'Is', translation: 'es / está' },
            { word: 'it', translation: 'eso' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'flight?', translation: 'vuelo' },
          ],
          answer: 'direct',
          sentenceTranslation: '¿Es un vuelo directo?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué significa?',
      instructions: 'Escucha la frase de viaje y elige su significado.',
      questions: [
        {
          id: 13,
          audioText: 'My flight is delayed.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'Mi vuelo está retrasado' },
            { id: 'b', text: 'Mi vuelo está cancelado' },
            { id: 'c', text: 'Mi vuelo llega a tiempo' },
          ],
          correctOptionIds: ['a'],
          explanation: 'delayed = retrasado.',
        },
        {
          id: 14,
          audioText: 'The flight was cancelled.',
          language: 'en',
          prompt: '¿Qué significa?',
          options: [
            { id: 'a', text: 'El vuelo salió tarde' },
            { id: 'b', text: 'El vuelo fue cancelado' },
            { id: 'c', text: 'El vuelo es directo' },
          ],
          correctOptionIds: ['b'],
          explanation: 'cancelled = cancelado.',
        },
        {
          id: 15,
          audioText: 'Where is gate five?',
          language: 'en',
          prompt: '¿Qué pregunta?',
          options: [
            { id: 'a', text: 'Dónde está la puerta cinco' },
            { id: 'b', text: 'Cuánto cuesta el boleto' },
            { id: 'c', text: 'A qué hora es la salida' },
          ],
          correctOptionIds: ['a'],
          explanation: 'gate = puerta de embarque.',
        },
        {
          id: 16,
          audioText: 'I’d like to book a room for two nights.',
          language: 'en',
          prompt: '¿Qué quiere?',
          options: [
            { id: 'a', text: 'Cambiar de habitación' },
            { id: 'b', text: 'Reservar una habitación por dos noches' },
            { id: 'c', text: 'Pagar la cuenta' },
          ],
          correctOptionIds: ['b'],
          explanation: 'book = reservar.',
        },
        {
          id: 17,
          audioText: 'How much is a return ticket to Madrid?',
          language: 'en',
          prompt: '¿Qué pregunta?',
          options: [
            {
              id: 'a',
              text: 'Cuánto cuesta un boleto de ida y vuelta a Madrid',
            },
            { id: 'b', text: 'A qué hora sale el vuelo' },
            { id: 'c', text: 'Dónde está el hotel' },
          ],
          correctOptionIds: ['a'],
          explanation: 'return ticket = boleto de ida y vuelta.',
        },
        {
          id: 18,
          audioText: 'What time is check-out?',
          language: 'en',
          prompt: '¿Qué pregunta?',
          options: [
            { id: 'a', text: 'A qué hora es la salida del hotel' },
            { id: 'b', text: 'A qué hora es el desayuno' },
            { id: 'c', text: 'A qué hora es la llegada' },
          ],
          correctOptionIds: ['a'],
          explanation: 'check-out = salida del hotel.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 19,
          tokens: [
            { id: 'q19-id', word: 'I’d', translation: 'me gustaría' },
            { id: 'q19-like', word: 'like', translation: 'gustaría' },
            { id: 'q19-to', word: 'to', translation: 'a' },
            { id: 'q19-book', word: 'book', translation: 'reservar' },
            { id: 'q19-a', word: 'a', translation: 'un/una' },
            { id: 'q19-room', word: 'room', translation: 'habitación' },
            { id: 'q19-for', word: 'for', translation: 'para' },
            { id: 'q19-two', word: 'two', translation: 'dos' },
            { id: 'q19-nights', word: 'nights.', translation: 'noches' },
          ],
          correctOrder: ['q19-id', 'q19-like', 'q19-to', 'q19-book', 'q19-a', 'q19-room', 'q19-for', 'q19-two', 'q19-nights'],
          sentenceTranslation: 'Me gustaría reservar una habitación por dos noches.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-do', word: 'Do', translation: 'gustan' },
            { id: 'q20-you', word: 'you', translation: 'tú' },
            { id: 'q20-have', word: 'have', translation: 'tengo' },
            { id: 'q20-a', word: 'a', translation: 'un/una' },
            { id: 'q20-double', word: 'double', translation: 'doble' },
            { id: 'q20-room', word: 'room?', translation: 'habitación' },
          ],
          correctOrder: ['q20-do', 'q20-you', 'q20-have', 'q20-a', 'q20-double', 'q20-room'],
          sentenceTranslation: '¿Tiene una habitación doble?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-what', word: 'What', translation: 'qué' },
            { id: 'q21-time', word: 'time', translation: 'hora' },
            { id: 'q21-is', word: 'is', translation: 'es / está' },
            {
              id: 'q21-checkout',
              word: 'check-out?',
              translation: 'salida del hotel',
            },
          ],
          correctOrder: ['q21-what', 'q21-time', 'q21-is', 'q21-checkout'],
          sentenceTranslation: '¿A qué hora es la salida?',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-my', word: 'My', translation: 'mi' },
            { id: 'q22-flight', word: 'flight', translation: 'vuelo' },
            { id: 'q22-is', word: 'is', translation: 'es / está' },
            {
              id: 'q22-delayed',
              word: 'delayed.',
              translation: 'retrasado',
            },
          ],
          correctOrder: ['q22-my', 'q22-flight', 'q22-is', 'q22-delayed'],
          sentenceTranslation: 'Mi vuelo está retrasado.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-where', word: 'Where', translation: 'dónde' },
            { id: 'q23-is', word: 'is', translation: 'es / está' },
            {
              id: 'q23-gate',
              word: 'gate',
              translation: 'puerta de embarque',
            },
            { id: 'q23-five', word: 'five?', translation: 'cinco' },
          ],
          correctOrder: ['q23-where', 'q23-is', 'q23-gate', 'q23-five'],
          sentenceTranslation: '¿Dónde está la puerta cinco?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-id', word: 'I’d', translation: 'me gustaría' },
            { id: 'q24-like', word: 'like', translation: 'gustaría' },
            { id: 'q24-a', word: 'a', translation: 'un/una' },
            { id: 'q24-window', word: 'window', translation: 'ventana' },
            { id: 'q24-seat', word: 'seat.', translation: 'asiento' },
          ],
          correctOrder: ['q24-id', 'q24-like', 'q24-a', 'q24-window', 'q24-seat'],
          sentenceTranslation: 'Me gustaría un asiento de ventana.',
        },
      ],
    },
  ],
};

export default lessonA2019;
