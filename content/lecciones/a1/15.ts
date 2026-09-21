import type { LessonContent } from '../types';

const lessonA1015: LessonContent = {
  level: 'a1',
  number: 15,
  title: 'Artículos, plurales y demostrativos',
  subtitle: 'Aprende a usar a, an y the, a formar plurales y a usar this, that, these y those.',
  videoTitle: 'Artículos, plurales y demostrativos',
  videoDescription: 'En este video verás a, an y the, las reglas del plural (+s, +es, -ies e irregulares) y this, that, these y those.',
  objective: 'Al terminar, podrás usar artículos, formar plurales y señalar cosas cercanas o lejanas en inglés.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'A, an o the',
      instructions: 'Escribe a (antes de consonante), an (antes de vocal) o the (algo específico).',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'dog.', translation: 'perro' },
          ],
          answer: 'a',
          sentenceTranslation: 'Tengo un perro.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
          ],
          after: [
            { word: 'apple.', translation: 'manzana' },
          ],
          answer: 'an',
          sentenceTranslation: 'Ella tiene una manzana.',
        },
        {
          id: 3,
          before: [],
          after: [
            { word: 'dog', translation: 'perro' },
            { word: 'is', translation: 'es / está' },
            { word: 'big.', translation: 'grande' },
          ],
          answer: 'The',
          sentenceTranslation: 'El perro es grande.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'eats', translation: 'come' },
          ],
          after: [
            { word: 'egg.', translation: 'huevo' },
          ],
          answer: 'an',
          sentenceTranslation: 'Él come un huevo.',
        },
        {
          id: 5,
          before: [
            { word: 'It’s', translation: 'es' },
          ],
          after: [
            { word: 'orange.', translation: 'naranja' },
          ],
          answer: 'an',
          sentenceTranslation: 'Es una naranja.',
        },
        {
          id: 6,
          before: [
            { word: 'This', translation: 'esto' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'book.', translation: 'libro' },
          ],
          answer: 'a',
          sentenceTranslation: 'Este es un libro.',
        },
        {
          id: 7,
          before: [
            { word: 'Please', translation: 'por favor' },
            { word: 'close', translation: 'cierra' },
          ],
          after: [
            { word: 'door.', translation: 'puerta' },
          ],
          answer: 'the',
          sentenceTranslation: 'Por favor cierra la puerta.',
        },
        {
          id: 8,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'a', translation: 'un/una' },
            { word: 'cat.', translation: 'gato' },
          ],
          after: [
            { word: 'cat', translation: 'gato' },
            { word: 'is', translation: 'es / está' },
            { word: 'black.', translation: 'negro' },
          ],
          answer: 'The',
          sentenceTranslation: 'Tengo un gato. El gato es negro.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Escribe el plural',
      instructions: 'Escribe el plural de la palabra que aparece entre paréntesis. Recuerda: +s, +es, y → ies o irregulares.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'two', translation: 'dos' },
          ],
          after: [],
          answer: 'books',
          hint: 'book',
          sentenceTranslation: 'Tengo dos libros.',
        },
        {
          id: 10,
          before: [
            { word: 'There', translation: 'hay' },
            { word: 'are', translation: 'son / están' },
            { word: 'three', translation: 'tres' },
          ],
          after: [],
          answer: 'boxes',
          hint: 'box',
          sentenceTranslation: 'Hay tres cajas.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
            { word: 'two', translation: 'dos' },
          ],
          after: [],
          answer: 'babies',
          hint: 'baby',
          sentenceTranslation: 'Ella tiene dos bebés.',
        },
        {
          id: 12,
          before: [
            { word: 'The', translation: 'el/la' },
          ],
          after: [
            { word: 'are', translation: 'son / están' },
            { word: 'here.', translation: 'aquí' },
          ],
          answer: 'men',
          hint: 'man',
          sentenceTranslation: 'Los hombres están aquí.',
        },
        {
          id: 13,
          before: [
            { word: 'Two', translation: 'dos' },
          ],
          after: [
            { word: 'are', translation: 'son / están' },
            { word: 'playing.', translation: 'jugando' },
          ],
          answer: 'children',
          hint: 'child',
          sentenceTranslation: 'Dos niños están jugando.',
        },
        {
          id: 14,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'two', translation: 'dos' },
          ],
          after: [],
          answer: 'watches',
          hint: 'watch',
          sentenceTranslation: 'Tengo dos relojes.',
        },
        {
          id: 15,
          before: [
            { word: 'Five', translation: 'cinco' },
          ],
          after: [
            { word: 'are', translation: 'son / están' },
            { word: 'here.', translation: 'aquí' },
          ],
          answer: 'people',
          hint: 'person',
          sentenceTranslation: 'Cinco personas están aquí.',
        },
        {
          id: 16,
          before: [
            { word: 'My', translation: 'mis' },
          ],
          after: [
            { word: 'hurt.', translation: 'duelen' },
          ],
          answer: 'feet',
          hint: 'foot',
          sentenceTranslation: 'Me duelen los pies.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'This, that, these o those',
      instructions: 'Escribe this, that, these o those según la distancia y si es una cosa o varias.',
      questions: [
        {
          id: 17,
          before: [],
          after: [
            { word: 'is', translation: 'es / está' },
            { word: 'my', translation: 'mis' },
            { word: 'book.', translation: 'libro' },
          ],
          answer: 'This',
          hint: 'cerca, una cosa',
          sentenceTranslation: 'Este es mi libro.',
        },
        {
          id: 18,
          before: [],
          after: [
            { word: 'is', translation: 'es / está' },
            { word: 'a', translation: 'un/una' },
            { word: 'tree.', translation: 'árbol' },
          ],
          answer: 'That',
          hint: 'lejos, una cosa',
          sentenceTranslation: 'Aquello es un árbol.',
        },
        {
          id: 19,
          before: [],
          after: [
            { word: 'are', translation: 'son / están' },
            { word: 'my', translation: 'mis' },
            { word: 'shoes.', translation: 'zapatos' },
          ],
          answer: 'These',
          hint: 'cerca, varias',
          sentenceTranslation: 'Estos son mis zapatos.',
        },
        {
          id: 20,
          before: [],
          after: [
            { word: 'are', translation: 'son / están' },
            { word: 'big', translation: 'grande' },
            { word: 'trees.', translation: 'árboles' },
          ],
          answer: 'Those',
          hint: 'lejos, varias',
          sentenceTranslation: 'Aquellos son árboles grandes.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Una cosa o varias?',
      instructions: 'Escucha la oración y decide si habla de una cosa o de varias.',
      questions: [
        {
          id: 21,
          audioText: 'This is my book.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['one'],
          explanation: 'This is + singular.',
        },
        {
          id: 22,
          audioText: 'These are my books.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['many'],
          explanation: 'These are + plural.',
        },
        {
          id: 23,
          audioText: 'Those are big trees.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['many'],
          explanation: 'Those are + plural.',
        },
        {
          id: 24,
          audioText: 'That is a big tree.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['one'],
          explanation: 'That is + singular.',
        },
        {
          id: 25,
          audioText: 'I have two dogs.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['many'],
          explanation: 'two dogs: plural.',
        },
        {
          id: 26,
          audioText: 'She has a cat.',
          language: 'en',
          prompt: '¿Una cosa o varias?',
          options: [
            { id: 'one', text: 'Una cosa' },
            { id: 'many', text: 'Varias cosas' },
          ],
          correctOptionIds: ['one'],
          explanation: 'a cat: singular.',
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
            { id: 'q27-this', word: 'This', translation: 'esto' },
            { id: 'q27-is', word: 'is', translation: 'es / está' },
            { id: 'q27-an', word: 'an', translation: 'un/una' },
            { id: 'q27-orange', word: 'orange.', translation: 'naranja' },
          ],
          correctOrder: ['q27-this', 'q27-is', 'q27-an', 'q27-orange'],
          sentenceTranslation: 'Esto es una naranja.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-these', word: 'These', translation: 'estos' },
            { id: 'q28-are', word: 'are', translation: 'son / están' },
            { id: 'q28-my', word: 'my', translation: 'mis' },
            { id: 'q28-shoes', word: 'shoes.', translation: 'zapatos' },
          ],
          correctOrder: ['q28-these', 'q28-are', 'q28-my', 'q28-shoes'],
          sentenceTranslation: 'Estos son mis zapatos.',
        },
        {
          id: 29,
          tokens: [
            { id: 'q29-those', word: 'Those', translation: 'esos' },
            { id: 'q29-are', word: 'are', translation: 'son / están' },
            { id: 'q29-big', word: 'big', translation: 'grande' },
            { id: 'q29-trees', word: 'trees.', translation: 'árboles' },
          ],
          correctOrder: ['q29-those', 'q29-are', 'q29-big', 'q29-trees'],
          sentenceTranslation: 'Aquellos son árboles grandes.',
        },
        {
          id: 30,
          tokens: [
            { id: 'q30-i', word: 'I', translation: 'yo' },
            { id: 'q30-have', word: 'have', translation: 'tengo' },
            { id: 'q30-a', word: 'a', translation: 'un/una' },
            { id: 'q30-dog', word: 'dog.', translation: 'perro' },
          ],
          correctOrder: ['q30-i', 'q30-have', 'q30-a', 'q30-dog'],
          sentenceTranslation: 'Tengo un perro.',
        },
        {
          id: 31,
          tokens: [
            { id: 'q31-the', word: 'The', translation: 'el/la' },
            { id: 'q31-dog', word: 'dog', translation: 'perro' },
            { id: 'q31-is', word: 'is', translation: 'es / está' },
            { id: 'q31-big', word: 'big.', translation: 'grande' },
          ],
          correctOrder: ['q31-the', 'q31-dog', 'q31-is', 'q31-big'],
          sentenceTranslation: 'El perro es grande.',
        },
        {
          id: 32,
          tokens: [
            { id: 'q32-that', word: 'That', translation: 'eso' },
            { id: 'q32-is', word: 'is', translation: 'es / está' },
            { id: 'q32-the', word: 'the', translation: 'el/la' },
            { id: 'q32-door', word: 'door.', translation: 'puerta' },
          ],
          correctOrder: ['q32-that', 'q32-is', 'q32-the', 'q32-door'],
          sentenceTranslation: 'Aquella es la puerta.',
        },
      ],
    },
  ],
};

export default lessonA1015;
