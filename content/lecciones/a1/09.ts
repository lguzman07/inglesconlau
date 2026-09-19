import type { LessonContent } from '../types';

const lessonA1009: LessonContent = {
  level: 'a1',
  number: 9,
  title: 'This is, It is y color + objeto',
  subtitle: 'Aprende a presentar objetos con this y that, y a describirlos con color, tamaño y forma.',
  videoTitle: 'This is, It is y color + objeto',
  videoDescription: 'En este video aprenderás this is, that is, it is, el orden color + objeto y cuándo usar a o an.',
  objective: 'Al terminar, podrás presentar y describir objetos con oraciones como This is a red pen.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa los espacios',
      instructions: 'Escribe la palabra que falta. Toca una palabra si quieres ver su traducción.',
      questions: [
        {
          id: 1,
          before: [],
          after: [
            { word: 'is', translation: 'es' },
            { word: 'my', translation: 'mi' },
            { word: 'book.', translation: 'libro' },
          ],
          answer: 'This',
          hint: 'cerca',
          sentenceTranslation: 'Este es mi libro.',
        },
        {
          id: 2,
          before: [],
          after: [
            { word: 'is', translation: 'es' },
            { word: 'a', translation: 'un/una' },
            { word: 'door.', translation: 'puerta' },
          ],
          answer: 'That',
          hint: 'lejos',
          sentenceTranslation: 'Aquella es una puerta.',
        },
        {
          id: 3,
          before: [],
          after: [
            { word: 'is', translation: 'es' },
            { word: 'red.', translation: 'rojo' },
          ],
          answer: 'It',
          sentenceTranslation: 'Es rojo.',
        },
        {
          id: 4,
          before: [
            { word: 'It’s', translation: 'es' },
            { word: 'a', translation: 'un/una' },
            { word: 'big', translation: 'grande' },
          ],
          after: [
            { word: 'table.', translation: 'mesa' },
          ],
          answer: 'blue',
          hint: 'azul',
          sentenceTranslation: 'Es una mesa grande azul.',
        },
        {
          id: 5,
          before: [
            { word: 'It’s', translation: 'es' },
          ],
          after: [
            { word: 'orange', translation: 'naranja' },
            { word: 'pen.', translation: 'bolígrafo' },
          ],
          answer: 'an',
          sentenceTranslation: 'Es un bolígrafo naranja.',
        },
        {
          id: 6,
          before: [
            { word: 'It’s', translation: 'es' },
          ],
          after: [
            { word: 'red', translation: 'rojo' },
            { word: 'pen.', translation: 'bolígrafo' },
          ],
          answer: 'a',
          sentenceTranslation: 'Es un bolígrafo rojo.',
        },
        {
          id: 7,
          before: [],
          after: [
            { word: 'color', translation: 'color' },
            { word: 'is', translation: 'es' },
            { word: 'it?', translation: 'eso' },
          ],
          answer: 'What',
          sentenceTranslation: '¿De qué color es?',
        },
        {
          id: 8,
          before: [],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'big', translation: 'grande' },
            { word: 'or', translation: 'o' },
            { word: 'small?', translation: 'pequeño' },
          ],
          answer: 'Is',
          sentenceTranslation: '¿Es grande o pequeño?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Cerca o lejos?',
      instructions: 'Escucha la oración. This se usa para cosas cerca; that, para cosas lejos.',
      questions: [
        {
          id: 9,
          audioText: 'This is a pen.',
          language: 'en',
          prompt: '¿La cosa está cerca o lejos?',
          options: [
            { id: 'near', text: 'Cerca (this)' },
            { id: 'far', text: 'Lejos (that)' },
          ],
          correctOptionIds: ['near'],
          explanation: 'this = cerca.',
        },
        {
          id: 10,
          audioText: 'That is a door.',
          language: 'en',
          prompt: '¿La cosa está cerca o lejos?',
          options: [
            { id: 'near', text: 'Cerca (this)' },
            { id: 'far', text: 'Lejos (that)' },
          ],
          correctOptionIds: ['far'],
          explanation: 'that = lejos.',
        },
        {
          id: 11,
          audioText: 'This is my desk.',
          language: 'en',
          prompt: '¿La cosa está cerca o lejos?',
          options: [
            { id: 'near', text: 'Cerca (this)' },
            { id: 'far', text: 'Lejos (that)' },
          ],
          correctOptionIds: ['near'],
          explanation: 'this = cerca.',
        },
        {
          id: 12,
          audioText: 'That is a big window.',
          language: 'en',
          prompt: '¿La cosa está cerca o lejos?',
          options: [
            { id: 'near', text: 'Cerca (this)' },
            { id: 'far', text: 'Lejos (that)' },
          ],
          correctOptionIds: ['far'],
          explanation: 'that = lejos.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Describe el objeto',
      instructions: 'Escucha la oración y elige la respuesta correcta.',
      questions: [
        {
          id: 13,
          audioText: 'It’s a red pen.',
          language: 'en',
          prompt: '¿De qué color es?',
          options: [
            { id: 'red', text: 'Rojo' },
            { id: 'blue', text: 'Azul' },
          ],
          correctOptionIds: ['red'],
          explanation: 'red significa rojo.',
        },
        {
          id: 14,
          audioText: 'It’s a big blue table.',
          language: 'en',
          prompt: '¿Cómo es la mesa?',
          options: [
            { id: 'a', text: 'Grande y azul' },
            { id: 'b', text: 'Pequeña y roja' },
            { id: 'c', text: 'Grande y roja' },
          ],
          correctOptionIds: ['a'],
          explanation: 'big = grande, blue = azul.',
        },
        {
          id: 15,
          audioText: 'It’s an orange pen.',
          language: 'en',
          prompt: '¿Qué artículo se usó?',
          options: [
            { id: 'a', text: 'a' },
            { id: 'an', text: 'an' },
          ],
          correctOptionIds: ['an'],
          explanation: 'Se usa an antes de un sonido de vocal: an orange.',
        },
        {
          id: 16,
          audioText: 'It’s a small green book.',
          language: 'en',
          prompt: '¿Cómo es el libro?',
          options: [
            { id: 'a', text: 'Pequeño y verde' },
            { id: 'b', text: 'Grande y verde' },
            { id: 'c', text: 'Pequeño y azul' },
          ],
          correctOptionIds: ['a'],
          explanation: 'small = pequeño, green = verde.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 17,
          tokens: [
            { id: 'q17-this', word: 'This', translation: 'esto' },
            { id: 'q17-is', word: 'is', translation: 'es' },
            { id: 'q17-my', word: 'my', translation: 'mi' },
            { id: 'q17-bag', word: 'bag.', translation: 'bolso' },
          ],
          correctOrder: ['q17-this', 'q17-is', 'q17-my', 'q17-bag'],
          sentenceTranslation: 'Esta es mi bolsa.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-that', word: 'That', translation: 'eso' },
            { id: 'q18-is', word: 'is', translation: 'es' },
            { id: 'q18-a', word: 'a', translation: 'un/una' },
            { id: 'q18-big', word: 'big', translation: 'grande' },
            { id: 'q18-window', word: 'window.', translation: 'ventana' },
          ],
          correctOrder: ['q18-that', 'q18-is', 'q18-a', 'q18-big', 'q18-window'],
          sentenceTranslation: 'Aquella es una ventana grande.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-it', word: 'It', translation: 'eso' },
            { id: 'q19-is', word: 'is', translation: 'es' },
            { id: 'q19-a', word: 'a', translation: 'un/una' },
            { id: 'q19-blue', word: 'blue', translation: 'azul' },
            { id: 'q19-pen', word: 'pen.', translation: 'bolígrafo' },
          ],
          correctOrder: ['q19-it', 'q19-is', 'q19-a', 'q19-blue', 'q19-pen'],
          sentenceTranslation: 'Es un bolígrafo azul.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-is', word: 'Is', translation: 'es' },
            { id: 'q20-it', word: 'it', translation: 'eso' },
            { id: 'q20-big', word: 'big', translation: 'grande' },
            { id: 'q20-or', word: 'or', translation: 'o' },
            { id: 'q20-small', word: 'small?', translation: 'pequeño' },
          ],
          correctOrder: ['q20-is', 'q20-it', 'q20-big', 'q20-or', 'q20-small'],
          sentenceTranslation: '¿Es grande o pequeño?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-its', word: 'It’s', translation: 'es' },
            { id: 'q21-a', word: 'a', translation: 'un/una' },
            { id: 'q21-small', word: 'small', translation: 'pequeño' },
            { id: 'q21-green', word: 'green', translation: 'verde' },
            { id: 'q21-book', word: 'book.', translation: 'libro' },
          ],
          correctOrder: ['q21-its', 'q21-a', 'q21-small', 'q21-green', 'q21-book'],
          sentenceTranslation: 'Es un libro verde pequeño.',
        },
      ],
    },
  ],
};

export default lessonA1009;
