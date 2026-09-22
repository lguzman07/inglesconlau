import type { LessonContent } from '../types';

const lessonA1020: LessonContent = {
  level: 'a1',
  number: 20,
  title: 'Comida y bebidas; contables e incontables',
  subtitle: 'Aprende comida y bebidas, y cuándo usar a/an, some o any con sustantivos contables e incontables.',
  videoTitle: 'Comida y bebidas; contables e incontables',
  videoDescription: 'En este video aprenderás comida y bebidas, sustantivos contables e incontables y envases como a glass of o a piece of.',
  objective: 'Al terminar, podrás decir qué comes y bebes, y usar a/an, some y any correctamente.',
  exercises: [
    {
      type: 'listening-choice',
      title: 'Escucha la comida',
      instructions: 'Escucha la palabra en inglés y elige su significado.',
      questions: [
        {
          id: 1,
          audioText: 'apple',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'manzana', text: 'Manzana' },
            { id: 'pan', text: 'Pan' },
            { id: 'huevo', text: 'Huevo' },
          ],
          correctOptionIds: ['manzana'],
          explanation: 'apple = manzana.',
        },
        {
          id: 2,
          audioText: 'bread',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'arroz', text: 'Arroz' },
            { id: 'pan', text: 'Pan' },
            { id: 'queso', text: 'Queso' },
          ],
          correctOptionIds: ['pan'],
          explanation: 'bread = pan.',
        },
        {
          id: 3,
          audioText: 'rice',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'arroz', text: 'Arroz' },
            { id: 'pollo', text: 'Pollo' },
            { id: 'manzana', text: 'Manzana' },
          ],
          correctOptionIds: ['arroz'],
          explanation: 'rice = arroz.',
        },
        {
          id: 4,
          audioText: 'chicken',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'pollo', text: 'Pollo' },
            { id: 'queso', text: 'Queso' },
            { id: 'pan', text: 'Pan' },
          ],
          correctOptionIds: ['pollo'],
          explanation: 'chicken = pollo.',
        },
        {
          id: 5,
          audioText: 'cheese',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'huevo', text: 'Huevo' },
            { id: 'queso', text: 'Queso' },
            { id: 'arroz', text: 'Arroz' },
          ],
          correctOptionIds: ['queso'],
          explanation: 'cheese = queso.',
        },
        {
          id: 6,
          audioText: 'egg',
          language: 'en',
          prompt: '¿Qué comida es?',
          options: [
            { id: 'huevo', text: 'Huevo' },
            { id: 'manzana', text: 'Manzana' },
            { id: 'pollo', text: 'Pollo' },
          ],
          correctOptionIds: ['huevo'],
          explanation: 'egg = huevo.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Escucha la bebida',
      instructions: 'Escucha la palabra en inglés y elige su significado.',
      questions: [
        {
          id: 7,
          audioText: 'water',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'agua', text: 'Agua' },
            { id: 'leche', text: 'Leche' },
            { id: 'té', text: 'Té' },
          ],
          correctOptionIds: ['agua'],
          explanation: 'water = agua.',
        },
        {
          id: 8,
          audioText: 'juice',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'café', text: 'Café' },
            { id: 'jugo', text: 'Jugo' },
            { id: 'agua', text: 'Agua' },
          ],
          correctOptionIds: ['jugo'],
          explanation: 'juice = jugo.',
        },
        {
          id: 9,
          audioText: 'milk',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'leche', text: 'Leche' },
            { id: 'jugo', text: 'Jugo' },
            { id: 'té', text: 'Té' },
          ],
          correctOptionIds: ['leche'],
          explanation: 'milk = leche.',
        },
        {
          id: 10,
          audioText: 'coffee',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'té', text: 'Té' },
            { id: 'café', text: 'Café' },
            { id: 'leche', text: 'Leche' },
          ],
          correctOptionIds: ['café'],
          explanation: 'coffee = café.',
        },
        {
          id: 11,
          audioText: 'tea',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'té', text: 'Té' },
            { id: 'agua', text: 'Agua' },
            { id: 'jugo', text: 'Jugo' },
          ],
          correctOptionIds: ['té'],
          explanation: 'tea = té.',
        },
        {
          id: 12,
          audioText: 'soda',
          language: 'en',
          prompt: '¿Qué bebida es?',
          options: [
            { id: 'leche', text: 'Leche' },
            { id: 'café', text: 'Café' },
            { id: 'refresco', text: 'Refresco' },
          ],
          correctOptionIds: ['refresco'],
          explanation: 'soda = refresco.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'A, an, some o any',
      instructions: 'Escribe a, an, some o any. Con sustantivos contables usamos a/an; con incontables, some; en negativos y preguntas, any.',
      questions: [
        {
          id: 13,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'eat', translation: 'como' },
          ],
          after: [
            { word: 'egg', translation: 'huevo' },
            { word: 'for', translation: 'para' },
            { word: 'breakfast.', translation: 'desayuno' },
          ],
          answer: 'an',
          sentenceTranslation: 'Como un huevo en el desayuno.',
        },
        {
          id: 14,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'rice.', translation: 'arroz' },
          ],
          answer: 'some',
          sentenceTranslation: 'Tengo algo de arroz.',
        },
        {
          id: 15,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'don’t', translation: 'no' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'milk.', translation: 'leche' },
          ],
          answer: 'any',
          sentenceTranslation: 'No tengo leche.',
        },
        {
          id: 16,
          before: [
            { word: 'Do', translation: 'gustan' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tengo' },
          ],
          after: [
            { word: 'eggs?', translation: 'huevos' },
          ],
          answer: 'any',
          sentenceTranslation: '¿Tienes huevos?',
        },
        {
          id: 17,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'drink', translation: 'bebo' },
            { word: 'a', translation: 'un/una' },
            { word: 'glass', translation: 'vaso' },
            { word: 'of', translation: 'de' },
          ],
          after: [],
          answer: 'water',
          sentenceTranslation: 'Bebo un vaso de agua.',
        },
        {
          id: 18,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'eats', translation: 'come' },
          ],
          after: [
            { word: 'banana.', translation: 'banana' },
          ],
          answer: 'a',
          sentenceTranslation: 'Ella come una banana.',
        },
        {
          id: 19,
          before: [
            { word: 'Two', translation: 'dos' },
          ],
          after: [],
          answer: 'apples',
          hint: 'apple',
          sentenceTranslation: 'Dos manzanas.',
        },
        {
          id: 20,
          before: [
            { word: 'Can', translation: 'puede' },
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'a', translation: 'un/una' },
            { word: 'cup', translation: 'taza' },
            { word: 'of', translation: 'de' },
          ],
          after: [
            { word: 'please?', translation: 'por favor' },
          ],
          answer: 'coffee',
          sentenceTranslation: '¿Me da una taza de café, por favor?',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Envases y porciones',
      instructions: 'Escribe la palabra que falta: glass, cup, bottle, piece o slice.',
      questions: [
        {
          id: 21,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'water.', translation: 'agua' },
          ],
          answer: 'glass',
          sentenceTranslation: 'Un vaso de agua.',
        },
        {
          id: 22,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'coffee.', translation: 'café' },
          ],
          answer: 'cup',
          sentenceTranslation: 'Una taza de café.',
        },
        {
          id: 23,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'juice.', translation: 'jugo' },
          ],
          answer: 'bottle',
          sentenceTranslation: 'Una botella de jugo.',
        },
        {
          id: 24,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'bread.', translation: 'pan' },
          ],
          answer: 'piece',
          sentenceTranslation: 'Un trozo de pan.',
        },
        {
          id: 25,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'pizza.', translation: 'pizza' },
          ],
          answer: 'slice',
          sentenceTranslation: 'Una rebanada de pizza.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 26,
          tokens: [
            { id: 'q26-i', word: 'I', translation: 'yo' },
            { id: 'q26-eat', word: 'eat', translation: 'como' },
            { id: 'q26-an', word: 'an', translation: 'un/una' },
            { id: 'q26-egg', word: 'egg', translation: 'huevo' },
            { id: 'q26-for', word: 'for', translation: 'para' },
            {
              id: 'q26-breakfast',
              word: 'breakfast.',
              translation: 'desayuno',
            },
          ],
          correctOrder: ['q26-i', 'q26-eat', 'q26-an', 'q26-egg', 'q26-for', 'q26-breakfast'],
          sentenceTranslation: 'Como un huevo en el desayuno.',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-i', word: 'I', translation: 'yo' },
            { id: 'q27-have', word: 'have', translation: 'tengo' },
            { id: 'q27-some', word: 'some', translation: 'algo de' },
            { id: 'q27-rice', word: 'rice.', translation: 'arroz' },
          ],
          correctOrder: ['q27-i', 'q27-have', 'q27-some', 'q27-rice'],
          sentenceTranslation: 'Tengo algo de arroz.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-i', word: 'I', translation: 'yo' },
            { id: 'q28-dont', word: 'don’t', translation: 'no' },
            { id: 'q28-have', word: 'have', translation: 'tengo' },
            { id: 'q28-any', word: 'any', translation: 'nada de' },
            { id: 'q28-milk', word: 'milk.', translation: 'leche' },
          ],
          correctOrder: ['q28-i', 'q28-dont', 'q28-have', 'q28-any', 'q28-milk'],
          sentenceTranslation: 'No tengo leche.',
        },
        {
          id: 29,
          tokens: [
            { id: 'q29-do', word: 'Do', translation: 'gustan' },
            { id: 'q29-you', word: 'you', translation: 'tú' },
            { id: 'q29-have', word: 'have', translation: 'tengo' },
            { id: 'q29-any', word: 'any', translation: 'nada de' },
            { id: 'q29-eggs', word: 'eggs?', translation: 'huevos' },
          ],
          correctOrder: ['q29-do', 'q29-you', 'q29-have', 'q29-any', 'q29-eggs'],
          sentenceTranslation: '¿Tienes huevos?',
        },
        {
          id: 30,
          tokens: [
            { id: 'q30-i', word: 'I', translation: 'yo' },
            { id: 'q30-like', word: 'like', translation: 'gustaría' },
            { id: 'q30-pizza', word: 'pizza.', translation: 'pizza' },
          ],
          correctOrder: ['q30-i', 'q30-like', 'q30-pizza'],
          sentenceTranslation: 'Me gusta la pizza.',
        },
        {
          id: 31,
          tokens: [
            { id: 'q31-can', word: 'Can', translation: 'puede' },
            { id: 'q31-i', word: 'I', translation: 'yo' },
            { id: 'q31-have', word: 'have', translation: 'tengo' },
            { id: 'q31-a', word: 'a', translation: 'un/una' },
            { id: 'q31-coffee', word: 'coffee,', translation: 'café' },
            { id: 'q31-please', word: 'please?', translation: 'por favor' },
          ],
          correctOrder: ['q31-can', 'q31-i', 'q31-have', 'q31-a', 'q31-coffee', 'q31-please'],
          sentenceTranslation: '¿Me da un café, por favor?',
        },
      ],
    },
  ],
};

export default lessonA1020;
