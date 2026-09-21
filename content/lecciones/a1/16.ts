import type { LessonContent } from '../types';

const lessonA1016: LessonContent = {
  level: 'a1',
  number: 16,
  title: 'There is / There are',
  subtitle: 'Aprende a decir qué hay y dónde, con preguntas, negativos, some, any, in, on y under.',
  videoTitle: 'There is / There are',
  videoDescription: 'En este video verás there is y there are, negativos, preguntas, some y any, y las preposiciones in, on y under.',
  objective: 'Al terminar, podrás decir qué hay en un lugar y dónde están las cosas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'There is o there are',
      instructions: 'Escribe is o are. There is + una cosa. There are + varias cosas.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'There', translation: 'hay' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'book', translation: 'libro' },
            { word: 'on', translation: 'sobre' },
            { word: 'the', translation: 'el/la' },
            { word: 'table.', translation: 'mesa' },
          ],
          answer: 'is',
          sentenceTranslation: 'Hay un libro sobre la mesa.',
        },
        {
          id: 2,
          before: [
            { word: 'There', translation: 'hay' },
          ],
          after: [
            { word: 'two', translation: 'dos' },
            { word: 'chairs.', translation: 'sillas' },
          ],
          answer: 'are',
          sentenceTranslation: 'Hay dos sillas.',
        },
        {
          id: 3,
          before: [
            { word: 'There', translation: 'hay' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'cat', translation: 'gato' },
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'box.', translation: 'caja' },
          ],
          answer: 'is',
          sentenceTranslation: 'Hay un gato en la caja.',
        },
        {
          id: 4,
          before: [
            { word: 'There', translation: 'hay' },
          ],
          after: [
            { word: 'three', translation: 'tres' },
            { word: 'books.', translation: 'libros' },
          ],
          answer: 'are',
          sentenceTranslation: 'Hay tres libros.',
        },
        {
          id: 5,
          before: [],
          after: [
            { word: 'there', translation: 'hay' },
            { word: 'a', translation: 'un/una' },
            { word: 'bed?', translation: 'cama' },
          ],
          answer: 'Is',
          sentenceTranslation: '¿Hay una cama?',
        },
        {
          id: 6,
          before: [],
          after: [
            { word: 'there', translation: 'hay' },
            { word: 'any', translation: 'ningún / algún' },
            { word: 'books?', translation: 'libros' },
          ],
          answer: 'Are',
          sentenceTranslation: '¿Hay libros?',
        },
        {
          id: 7,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'TV.', translation: 'televisión' },
          ],
          answer: 'not',
          sentenceTranslation: 'No hay televisión.',
        },
        {
          id: 8,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'are', translation: 'son / están' },
          ],
          after: [
            { word: 'any', translation: 'ningún / algún' },
            { word: 'chairs.', translation: 'sillas' },
          ],
          answer: 'not',
          sentenceTranslation: 'No hay sillas.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Some, any y preposiciones',
      instructions: 'Escribe some, any, in, on o under.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'are', translation: 'son / están' },
          ],
          after: [
            { word: 'apples.', translation: 'manzanas' },
          ],
          answer: 'some',
          sentenceTranslation: 'Hay algunas manzanas.',
        },
        {
          id: 10,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'aren’t', translation: 'no hay' },
          ],
          after: [
            { word: 'apples.', translation: 'manzanas' },
          ],
          answer: 'any',
          sentenceTranslation: 'No hay manzanas.',
        },
        {
          id: 11,
          before: [
            { word: 'Are', translation: 'son / están' },
            { word: 'there', translation: 'hay' },
          ],
          after: [
            { word: 'books?', translation: 'libros' },
          ],
          answer: 'any',
          sentenceTranslation: '¿Hay libros?',
        },
        {
          id: 12,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'cat', translation: 'gato' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'sofa.', translation: 'sofá' },
          ],
          answer: 'on',
          sentenceTranslation: 'El gato está sobre el sofá.',
        },
        {
          id: 13,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'ball', translation: 'pelota' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'box.', translation: 'caja' },
          ],
          answer: 'in',
          sentenceTranslation: 'La pelota está en la caja.',
        },
        {
          id: 14,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'shoes', translation: 'zapatos' },
            { word: 'are', translation: 'son / están' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'bed.', translation: 'cama' },
          ],
          answer: 'under',
          sentenceTranslation: 'Los zapatos están debajo de la cama.',
        },
        {
          id: 15,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'are', translation: 'son / están' },
          ],
          after: [
            { word: 'oranges.', translation: 'naranjas' },
          ],
          answer: 'some',
          sentenceTranslation: 'Hay algunas naranjas.',
        },
        {
          id: 16,
          before: [
            { word: 'Is', translation: 'es / está' },
            { word: 'there', translation: 'hay' },
          ],
          after: [
            { word: 'milk?', translation: 'leche' },
          ],
          answer: 'any',
          sentenceTranslation: '¿Hay leche?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Dónde está?',
      instructions: 'Escucha la oración y elige dónde está la cosa.',
      questions: [
        {
          id: 17,
          audioText: 'The cat is on the sofa.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['on'],
          explanation: 'on = sobre.',
        },
        {
          id: 18,
          audioText: 'The ball is in the box.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['in'],
          explanation: 'in = dentro.',
        },
        {
          id: 19,
          audioText: 'The shoes are under the bed.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['under'],
          explanation: 'under = debajo.',
        },
        {
          id: 20,
          audioText: 'The book is on the table.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['on'],
          explanation: 'on = sobre.',
        },
        {
          id: 21,
          audioText: 'The keys are in the bag.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['in'],
          explanation: 'in = dentro.',
        },
        {
          id: 22,
          audioText: 'The cat is under the chair.',
          language: 'en',
          prompt: '¿Dónde está?',
          options: [
            { id: 'on', text: 'Sobre (on)' },
            { id: 'in', text: 'Dentro (in)' },
            { id: 'under', text: 'Debajo (under)' },
          ],
          correctOptionIds: ['under'],
          explanation: 'under = debajo.',
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
            { id: 'q23-there', word: 'There', translation: 'hay' },
            { id: 'q23-is', word: 'is', translation: 'es / está' },
            { id: 'q23-a', word: 'a', translation: 'un/una' },
            { id: 'q23-book', word: 'book', translation: 'libro' },
            { id: 'q23-on', word: 'on', translation: 'sobre' },
            { id: 'q23-the', word: 'the', translation: 'el/la' },
            { id: 'q23-table', word: 'table.', translation: 'mesa' },
          ],
          correctOrder: ['q23-there', 'q23-is', 'q23-a', 'q23-book', 'q23-on', 'q23-the', 'q23-table'],
          sentenceTranslation: 'Hay un libro sobre la mesa.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-there', word: 'There', translation: 'hay' },
            { id: 'q24-are', word: 'are', translation: 'son / están' },
            { id: 'q24-two', word: 'two', translation: 'dos' },
            { id: 'q24-chairs', word: 'chairs.', translation: 'sillas' },
          ],
          correctOrder: ['q24-there', 'q24-are', 'q24-two', 'q24-chairs'],
          sentenceTranslation: 'Hay dos sillas.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-there', word: 'There', translation: 'hay' },
            { id: 'q25-isnt', word: 'isn’t', translation: 'no hay' },
            { id: 'q25-a', word: 'a', translation: 'un/una' },
            { id: 'q25-tv', word: 'TV.', translation: 'televisión' },
          ],
          correctOrder: ['q25-there', 'q25-isnt', 'q25-a', 'q25-tv'],
          sentenceTranslation: 'No hay televisión.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-is', word: 'Is', translation: 'es / está' },
            { id: 'q26-there', word: 'there', translation: 'hay' },
            { id: 'q26-a', word: 'a', translation: 'un/una' },
            { id: 'q26-bed', word: 'bed?', translation: 'cama' },
          ],
          correctOrder: ['q26-is', 'q26-there', 'q26-a', 'q26-bed'],
          sentenceTranslation: '¿Hay una cama?',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-are', word: 'Are', translation: 'son / están' },
            { id: 'q27-there', word: 'there', translation: 'hay' },
            { id: 'q27-any', word: 'any', translation: 'ningún / algún' },
            { id: 'q27-books', word: 'books?', translation: 'libros' },
          ],
          correctOrder: ['q27-are', 'q27-there', 'q27-any', 'q27-books'],
          sentenceTranslation: '¿Hay libros?',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-there', word: 'There', translation: 'hay' },
            { id: 'q28-arent', word: 'aren’t', translation: 'no hay' },
            { id: 'q28-any', word: 'any', translation: 'ningún / algún' },
            { id: 'q28-apples', word: 'apples.', translation: 'manzanas' },
          ],
          correctOrder: ['q28-there', 'q28-arent', 'q28-any', 'q28-apples'],
          sentenceTranslation: 'No hay manzanas.',
        },
      ],
    },
  ],
};

export default lessonA1016;
