import type { LessonContent } from '../types';

const lessonA1022: LessonContent = {
  level: 'a1',
  number: 22,
  title: 'How much y how many; dinero y compras',
  subtitle: 'Aprende a preguntar cantidades y precios, y a comprar ropa y otras cosas.',
  videoTitle: 'How much y how many; dinero y compras',
  videoDescription: 'En este video verás how many y how much, expresiones de cantidad, precios, tallas y frases para comprar.',
  objective: 'Al terminar, podrás preguntar cantidades y precios, y desenvolverte al comprar.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'How much o how many',
      instructions: 'Escribe how, much, many o lot. How many va con sustantivos contables; how much, con incontables.',
      questions: [
        {
          id: 1,
          before: [],
          after: [
            { word: 'many', translation: 'muchos' },
            { word: 'apples', translation: 'manzanas' },
            { word: 'do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'have?', translation: 'tienes' },
          ],
          answer: 'How',
          sentenceTranslation: '¿Cuántas manzanas tienes?',
        },
        {
          id: 2,
          before: [],
          after: [
            { word: 'much', translation: 'cuánta' },
            { word: 'milk', translation: 'leche' },
            { word: 'do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'want?', translation: 'quieres' },
          ],
          answer: 'How',
          sentenceTranslation: '¿Cuánta leche quieres?',
        },
        {
          id: 3,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tienes' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'friends.', translation: 'amigos' },
          ],
          answer: 'lot',
          sentenceTranslation: 'Tengo muchos amigos.',
        },
        {
          id: 4,
          before: [
            { word: 'How', translation: 'cuántos' },
          ],
          after: [
            { word: 'is', translation: 'es' },
            { word: 'it?', translation: 'eso' },
          ],
          answer: 'much',
          sentenceTranslation: '¿Cuánto cuesta?',
        },
        {
          id: 5,
          before: [
            { word: 'How', translation: 'cuántos' },
          ],
          after: [
            { word: 'are', translation: 'son' },
            { word: 'the', translation: 'el/la' },
            { word: 'shoes?', translation: 'zapatos' },
          ],
          answer: 'much',
          sentenceTranslation: '¿Cuánto cuestan los zapatos?',
        },
        {
          id: 6,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'ten', translation: 'diez' },
          ],
          after: [],
          answer: 'dollars',
          sentenceTranslation: 'Son diez dólares.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Cantidades y compras',
      instructions: 'Escribe la palabra que falta: much, many, few, little, smaller, big, take u on.',
      questions: [
        {
          id: 7,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'isn’t', translation: 'no hay' },
          ],
          after: [
            { word: 'milk.', translation: 'leche' },
          ],
          answer: 'much',
          sentenceTranslation: 'No hay mucha leche.',
        },
        {
          id: 8,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'aren’t', translation: 'no hay' },
          ],
          after: [
            { word: 'chairs.', translation: 'sillas' },
          ],
          answer: 'many',
          sentenceTranslation: 'No hay muchas sillas.',
        },
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tienes' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'books.', translation: 'libros' },
          ],
          answer: 'few',
          sentenceTranslation: 'Tengo unos pocos libros.',
        },
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'need', translation: 'necesito' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'water.', translation: 'agua' },
          ],
          answer: 'little',
          sentenceTranslation: 'Necesito un poco de agua.',
        },
        {
          id: 11,
          before: [
            { word: 'Do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tienes' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'size?', translation: 'talla' },
          ],
          answer: 'smaller',
          sentenceTranslation: '¿Tiene una talla más pequeña?',
        },
        {
          id: 12,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'too', translation: 'demasiado' },
          ],
          after: [],
          answer: 'big',
          sentenceTranslation: 'Es demasiado grande.',
        },
        {
          id: 13,
          before: [
            { word: 'I’ll', translation: 'me' },
          ],
          after: [
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'take',
          sentenceTranslation: 'Me lo llevo.',
        },
        {
          id: 14,
          before: [
            { word: 'Can', translation: 'puedo' },
            { word: 'I', translation: 'yo' },
            { word: 'try', translation: 'probar' },
            { word: 'it', translation: 'eso' },
          ],
          after: [],
          answer: 'on',
          sentenceTranslation: '¿Puedo probármelo?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Cuánto cuesta?',
      instructions: 'Escucha el precio y elige la cantidad correcta.',
      questions: [
        {
          id: 15,
          audioText: 'It’s ten dollars.',
          language: 'en',
          prompt: '¿Cuánto cuesta?',
          options: [
            { id: 'a', text: '$10' },
            { id: 'b', text: '$100' },
            { id: 'c', text: '$12' },
          ],
          correctOptionIds: ['a'],
          explanation: 'ten = 10.',
        },
        {
          id: 16,
          audioText: 'It costs fifteen dollars.',
          language: 'en',
          prompt: '¿Cuánto cuesta?',
          options: [
            { id: 'a', text: '$50' },
            { id: 'b', text: '$15' },
            { id: 'c', text: '$5' },
          ],
          correctOptionIds: ['b'],
          explanation: 'fifteen = 15 (no fifty = 50).',
        },
        {
          id: 17,
          audioText: 'They’re thirty dollars.',
          language: 'en',
          prompt: '¿Cuánto cuestan?',
          options: [
            { id: 'a', text: '$13' },
            { id: 'b', text: '$30' },
            { id: 'c', text: '$3' },
          ],
          correctOptionIds: ['b'],
          explanation: 'thirty = 30 (no thirteen = 13).',
        },
        {
          id: 18,
          audioText: 'It’s fifty pesos.',
          language: 'en',
          prompt: '¿Cuánto cuesta?',
          options: [
            { id: 'a', text: '50 pesos' },
            { id: 'b', text: '15 pesos' },
            { id: 'c', text: '5 pesos' },
          ],
          correctOptionIds: ['a'],
          explanation: 'fifty = 50 (no fifteen = 15).',
        },
        {
          id: 19,
          audioText: 'They’re twenty dollars.',
          language: 'en',
          prompt: '¿Cuánto cuestan?',
          options: [
            { id: 'a', text: '$12' },
            { id: 'b', text: '$2' },
            { id: 'c', text: '$20' },
          ],
          correctOptionIds: ['c'],
          explanation: 'twenty = 20.',
        },
        {
          id: 20,
          audioText: 'It’s two dollars.',
          language: 'en',
          prompt: '¿Cuánto cuesta?',
          options: [
            { id: 'a', text: '$2' },
            { id: 'b', text: '$20' },
            { id: 'c', text: '$12' },
          ],
          correctOptionIds: ['a'],
          explanation: 'two = 2.',
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
            { id: 'q21-how', word: 'How', translation: 'cuántos' },
            { id: 'q21-much', word: 'much', translation: 'cuánta' },
            { id: 'q21-is', word: 'is', translation: 'es' },
            { id: 'q21-it', word: 'it?', translation: 'eso' },
          ],
          correctOrder: ['q21-how', 'q21-much', 'q21-is', 'q21-it'],
          sentenceTranslation: '¿Cuánto cuesta?',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-how', word: 'How', translation: 'cuántos' },
            { id: 'q22-many', word: 'many', translation: 'muchos' },
            { id: 'q22-apples', word: 'apples', translation: 'manzanas' },
            { id: 'q22-do', word: 'do', translation: 'auxiliar' },
            { id: 'q22-you', word: 'you', translation: 'tú' },
            { id: 'q22-have', word: 'have?', translation: 'tienes' },
          ],
          correctOrder: ['q22-how', 'q22-many', 'q22-apples', 'q22-do', 'q22-you', 'q22-have'],
          sentenceTranslation: '¿Cuántas manzanas tienes?',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-how', word: 'How', translation: 'cuántos' },
            { id: 'q23-much', word: 'much', translation: 'cuánta' },
            { id: 'q23-are', word: 'are', translation: 'son' },
            { id: 'q23-the', word: 'the', translation: 'el/la' },
            { id: 'q23-shoes', word: 'shoes?', translation: 'zapatos' },
          ],
          correctOrder: ['q23-how', 'q23-much', 'q23-are', 'q23-the', 'q23-shoes'],
          sentenceTranslation: '¿Cuánto cuestan los zapatos?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-can', word: 'Can', translation: 'puedo' },
            { id: 'q24-i', word: 'I', translation: 'yo' },
            { id: 'q24-try', word: 'try', translation: 'probar' },
            { id: 'q24-it', word: 'it', translation: 'eso' },
            { id: 'q24-on', word: 'on?', translation: 'puesto' },
          ],
          correctOrder: ['q24-can', 'q24-i', 'q24-try', 'q24-it', 'q24-on'],
          sentenceTranslation: '¿Puedo probármelo?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-do', word: 'Do', translation: 'auxiliar' },
            { id: 'q25-you', word: 'you', translation: 'tú' },
            { id: 'q25-have', word: 'have', translation: 'tienes' },
            { id: 'q25-a', word: 'a', translation: 'un/una' },
            {
              id: 'q25-smaller',
              word: 'smaller',
              translation: 'más pequeña',
            },
            { id: 'q25-size', word: 'size?', translation: 'talla' },
          ],
          correctOrder: ['q25-do', 'q25-you', 'q25-have', 'q25-a', 'q25-smaller', 'q25-size'],
          sentenceTranslation: '¿Tiene una talla más pequeña?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-ill', word: 'I’ll', translation: 'me' },
            { id: 'q26-take', word: 'take', translation: 'llevo' },
            { id: 'q26-it', word: 'it.', translation: 'eso' },
          ],
          correctOrder: ['q26-ill', 'q26-take', 'q26-it'],
          sentenceTranslation: 'Me lo llevo.',
        },
      ],
    },
  ],
};

export default lessonA1022;
