import type { LessonContent } from '../types';

const lessonA2023: LessonContent = {
  level: 'a2',
  number: 23,
  title: 'Compras, devoluciones y pedidos por internet',
  subtitle: 'Aprende a describir productos, devolver o cambiar algo, y resolver problemas con pedidos por internet.',
  videoTitle: 'Compras, devoluciones y pedidos por internet',
  videoDescription: 'En este video verás cómo describir productos, hacer devoluciones y cambios, y hablar de problemas con pedidos en línea.',
  objective: 'Al terminar, podrás describir productos, hacer devoluciones y hablar de problemas con un pedido.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'En la tienda',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'a', translation: 'un/una' },
            { word: 'black', translation: 'negra' },
            { word: 'leather', translation: 'cuero' },
          ],
          after: [],
          answer: 'jacket',
          sentenceTranslation: 'Es una chaqueta de cuero negra.',
        },
        {
          id: 2,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'made', translation: 'hecho' },
            { word: 'of', translation: 'de' },
          ],
          after: [],
          answer: 'cotton',
          sentenceTranslation: 'Está hecho de algodón.',
        },
        {
          id: 3,
          before: [
            { word: 'Can', translation: 'puede' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'on?', translation: 'puesto' },
          ],
          answer: 'try',
          sentenceTranslation: '¿Puedo probármelo?',
        },
        {
          id: 4,
          before: [
            { word: 'Do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tomaré' },
            { word: 'this', translation: 'esto' },
            { word: 'in', translation: 'en' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'size?', translation: 'talla' },
          ],
          answer: 'larger',
          sentenceTranslation: '¿Tiene esto en una talla más grande?',
        },
        {
          id: 5,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'fit.', translation: 'queda' },
          ],
          answer: 'doesn’t',
          sentenceTranslation: 'No me queda.',
        },
        {
          id: 6,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'too', translation: 'demasiado' },
          ],
          after: [],
          answer: 'small',
          sentenceTranslation: 'Es demasiado pequeño.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Devoluciones y pedidos',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 7,
          before: [
            { word: 'I’d', translation: 'me' },
            { word: 'like', translation: 'quisiera' },
            { word: 'to', translation: 'a' },
          ],
          after: [
            { word: 'this.', translation: 'esto' },
          ],
          answer: 'return',
          sentenceTranslation: 'Quisiera devolver esto.',
        },
        {
          id: 8,
          before: [
            { word: 'Can', translation: 'puede' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'for', translation: 'durante' },
            { word: 'a', translation: 'un/una' },
            { word: 'different', translation: 'diferente' },
            { word: 'size?', translation: 'talla' },
          ],
          answer: 'exchange',
          sentenceTranslation: '¿Puedo cambiarlo por otra talla?',
        },
        {
          id: 9,
          before: [
            { word: 'Do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tomaré' },
            { word: 'the', translation: 'el/la' },
          ],
          after: [],
          answer: 'receipt',
          sentenceTranslation: '¿Tiene el recibo?',
        },
        {
          id: 10,
          before: [
            { word: 'I’d', translation: 'me' },
            { word: 'like', translation: 'quisiera' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [],
          answer: 'refund',
          sentenceTranslation: 'Quisiera un reembolso.',
        },
        {
          id: 11,
          before: [
            { word: 'My', translation: 'mi' },
            { word: 'order', translation: 'pedido' },
          ],
          after: [
            { word: 'arrived.', translation: 'llegó' },
          ],
          answer: 'hasn’t',
          sentenceTranslation: 'Mi pedido no ha llegado.',
        },
        {
          id: 12,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'received', translation: 'recibí' },
            { word: 'the', translation: 'el/la' },
          ],
          after: [
            { word: 'size.', translation: 'talla' },
          ],
          answer: 'wrong',
          sentenceTranslation: 'Recibí la talla equivocada.',
        },
        {
          id: 13,
          before: [
            { word: 'The', translation: 'el/la' },
          ],
          after: [
            { word: 'is', translation: 'está' },
            { word: 'damaged.', translation: 'dañado' },
          ],
          answer: 'package',
          sentenceTranslation: 'El paquete está dañado.',
        },
        {
          id: 14,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'free', translation: 'gratis' },
          ],
          after: [],
          answer: 'delivery',
          sentenceTranslation: 'Es entrega gratis.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué problema tiene?',
      instructions: 'Escucha la frase y decide qué tipo de problema describe.',
      questions: [
        {
          id: 15,
          audioText: 'I received the wrong size.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['size'],
          explanation: 'wrong size = talla equivocada.',
        },
        {
          id: 16,
          audioText: 'My order hasn’t arrived yet.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['late'],
          explanation: 'hasn’t arrived = no ha llegado.',
        },
        {
          id: 17,
          audioText: 'The package is damaged.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['damaged'],
          explanation: 'damaged = dañado.',
        },
        {
          id: 18,
          audioText: 'It doesn’t fit.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['fit'],
          explanation: 'doesn’t fit = no queda bien.',
        },
        {
          id: 19,
          audioText: 'The item is different from the photo.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['damaged'],
          explanation: 'no coincide con la foto: problema con el producto.',
        },
        {
          id: 20,
          audioText: 'It’s too small.',
          language: 'en',
          prompt: '¿Qué problema es?',
          options: [
            { id: 'size', text: 'Talla equivocada' },
            { id: 'late', text: 'No ha llegado' },
            { id: 'damaged', text: 'Está dañado' },
            { id: 'fit', text: 'No queda bien' },
          ],
          correctOptionIds: ['fit'],
          explanation: 'too small = no queda bien.',
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
            { id: 'q19-can', word: 'Can', translation: 'puede' },
            { id: 'q19-i', word: 'I', translation: 'yo' },
            { id: 'q19-try', word: 'try', translation: 'probar' },
            { id: 'q19-it', word: 'it', translation: 'eso' },
            { id: 'q19-on', word: 'on?', translation: 'puesto' },
          ],
          correctOrder: ['q19-can', 'q19-i', 'q19-try', 'q19-it', 'q19-on'],
          sentenceTranslation: '¿Puedo probármelo?',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-id', word: 'I’d', translation: 'me' },
            { id: 'q20-like', word: 'like', translation: 'quisiera' },
            { id: 'q20-to', word: 'to', translation: 'a' },
            { id: 'q20-return', word: 'return', translation: 'devolver' },
            { id: 'q20-this', word: 'this', translation: 'esto' },
            { id: 'q20-jacket', word: 'jacket.', translation: 'chaqueta' },
          ],
          correctOrder: ['q20-id', 'q20-like', 'q20-to', 'q20-return', 'q20-this', 'q20-jacket'],
          sentenceTranslation: 'Quisiera devolver esta chaqueta.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-my', word: 'My', translation: 'mi' },
            { id: 'q21-order', word: 'order', translation: 'pedido' },
            { id: 'q21-hasnt', word: 'hasn’t', translation: 'no ha' },
            { id: 'q21-arrived', word: 'arrived', translation: 'llegó' },
            { id: 'q21-yet', word: 'yet.', translation: 'todavía' },
          ],
          correctOrder: ['q21-my', 'q21-order', 'q21-hasnt', 'q21-arrived', 'q21-yet'],
          sentenceTranslation: 'Mi pedido todavía no ha llegado.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-received', word: 'received', translation: 'recibí' },
            { id: 'q22-the', word: 'the', translation: 'el/la' },
            { id: 'q22-wrong', word: 'wrong', translation: 'equivocada' },
            { id: 'q22-size', word: 'size.', translation: 'talla' },
          ],
          correctOrder: ['q22-i', 'q22-received', 'q22-the', 'q22-wrong', 'q22-size'],
          sentenceTranslation: 'Recibí la talla equivocada.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-do', word: 'Do', translation: 'auxiliar' },
            { id: 'q23-you', word: 'you', translation: 'tú' },
            { id: 'q23-have', word: 'have', translation: 'tomaré' },
            { id: 'q23-the', word: 'the', translation: 'el/la' },
            { id: 'q23-receipt', word: 'receipt?', translation: 'recibo' },
          ],
          correctOrder: ['q23-do', 'q23-you', 'q23-have', 'q23-the', 'q23-receipt'],
          sentenceTranslation: '¿Tiene el recibo?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-the', word: 'The', translation: 'el/la' },
            { id: 'q24-package', word: 'package', translation: 'paquete' },
            { id: 'q24-is', word: 'is', translation: 'está' },
            { id: 'q24-damaged', word: 'damaged.', translation: 'dañado' },
          ],
          correctOrder: ['q24-the', 'q24-package', 'q24-is', 'q24-damaged'],
          sentenceTranslation: 'El paquete está dañado.',
        },
      ],
    },
  ],
};

export default lessonA2023;
