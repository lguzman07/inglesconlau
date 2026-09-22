import type { LessonContent } from '../types';

const lessonA2021: LessonContent = {
  level: 'a2',
  number: 21,
  title: 'Comida y cocina: métodos y recetas',
  subtitle: 'Aprende los métodos de cocción, las acciones de cocina y cómo seguir una receta paso a paso.',
  videoTitle: 'Comida y cocina: métodos y recetas',
  videoDescription: 'En este video verás boil, fry, bake, grill, roast y steam, y cómo seguir una receta con imperativos y secuenciadores.',
  objective: 'Al terminar, podrás entender y seguir una receta sencilla en inglés.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Métodos de cocción',
      instructions: 'Escribe el método de cocción que falta.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'eggs.', translation: 'huevos' },
          ],
          answer: 'boil',
          sentenceTranslation: 'Hierves los huevos.',
        },
        {
          id: 2,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'chicken.', translation: 'pollo' },
          ],
          answer: 'fry',
          sentenceTranslation: 'Fríes el pollo.',
        },
        {
          id: 3,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'cake.', translation: 'bizcocho' },
          ],
          answer: 'bake',
          sentenceTranslation: 'Horneas un bizcocho.',
        },
        {
          id: 4,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'meat.', translation: 'carne' },
          ],
          answer: 'grill',
          sentenceTranslation: 'Asas la carne a la parrilla.',
        },
        {
          id: 5,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'chicken.', translation: 'pollo' },
          ],
          answer: 'roast',
          sentenceTranslation: 'Asas el pollo al horno.',
        },
        {
          id: 6,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'vegetables.', translation: 'verduras' },
          ],
          answer: 'steam',
          sentenceTranslation: 'Cocinas las verduras al vapor.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Acciones e imperativos',
      instructions: 'Escribe el verbo que falta en la instrucción de la receta.',
      questions: [
        {
          id: 7,
          before: [],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'onions.', translation: 'cebollas' },
          ],
          answer: 'Chop',
          sentenceTranslation: 'Corta las cebollas.',
        },
        {
          id: 8,
          before: [],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'potatoes.', translation: 'papas' },
          ],
          answer: 'Peel',
          sentenceTranslation: 'Pela las papas.',
        },
        {
          id: 9,
          before: [],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'milk', translation: 'leche' },
            { word: 'into', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'bowl.', translation: 'tazón' },
          ],
          answer: 'Pour',
          sentenceTranslation: 'Vierte la leche en el tazón.',
        },
        {
          id: 10,
          before: [],
          after: [
            { word: 'two', translation: 'dos' },
            { word: 'eggs.', translation: 'huevos' },
          ],
          answer: 'Add',
          sentenceTranslation: 'Agrega dos huevos.',
        },
        {
          id: 11,
          before: [],
          after: [
            { word: 'well.', translation: 'bien' },
          ],
          answer: 'Mix',
          sentenceTranslation: 'Mezcla bien.',
        },
        {
          id: 12,
          before: [
            { word: 'Don’t', translation: 'no' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'salt.', translation: 'sal' },
          ],
          answer: 'forget',
          sentenceTranslation: 'No olvides la sal.',
        },
        {
          id: 13,
          before: [],
          after: [
            { word: 'for', translation: 'durante' },
            { word: '10', translation: '10' },
            { word: 'minutes.', translation: 'minutos' },
          ],
          answer: 'Cook',
          sentenceTranslation: 'Cocina por 10 minutos.',
        },
        {
          id: 14,
          before: [
            { word: 'Bake', translation: 'hornea' },
            { word: 'at', translation: 'a' },
            { word: '180', translation: '180' },
          ],
          after: [],
          answer: 'degrees',
          sentenceTranslation: 'Hornea a 180 grados.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Secuenciadores y cantidades',
      instructions: 'Escribe la palabra que falta: first, then, next, finally, cup, spoonful o pinch.',
      questions: [
        {
          id: 15,
          before: [],
          after: [
            { word: 'break', translation: 'rompe' },
            { word: 'two', translation: 'dos' },
            { word: 'eggs', translation: 'huevos' },
            { word: 'into', translation: 'en' },
            { word: 'a', translation: 'un/una' },
            { word: 'bowl.', translation: 'tazón' },
          ],
          answer: 'First',
          sentenceTranslation: 'Primero, rompe dos huevos en un tazón.',
        },
        {
          id: 16,
          before: [],
          after: [
            { word: 'add', translation: 'agrega' },
            { word: 'a', translation: 'un/una' },
            { word: 'little', translation: 'un poco' },
            { word: 'milk.', translation: 'leche' },
          ],
          answer: 'Then',
          sentenceTranslation: 'Luego agrega un poco de leche.',
        },
        {
          id: 17,
          before: [],
          after: [
            { word: 'mix', translation: 'mezcla' },
            { word: 'well.', translation: 'bien' },
          ],
          answer: 'Next',
          sentenceTranslation: 'Después, mezcla bien.',
        },
        {
          id: 18,
          before: [],
          after: [
            { word: 'add', translation: 'agrega' },
            { word: 'salt.', translation: 'sal' },
          ],
          answer: 'Finally',
          sentenceTranslation: 'Finalmente, agrega sal.',
        },
        {
          id: 19,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'flour.', translation: 'harina' },
          ],
          answer: 'cup',
          sentenceTranslation: 'Una taza de harina.',
        },
        {
          id: 20,
          before: [
            { word: 'A', translation: 'un/una' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'salt.', translation: 'sal' },
          ],
          answer: 'pinch',
          sentenceTranslation: 'Una pizca de sal.',
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
            { id: 'q21-chop', word: 'Chop', translation: 'cortar' },
            { id: 'q21-the', word: 'the', translation: 'el/la' },
            { id: 'q21-onions', word: 'onions.', translation: 'cebollas' },
          ],
          correctOrder: ['q21-chop', 'q21-the', 'q21-onions'],
          sentenceTranslation: 'Corta las cebollas.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-add', word: 'Add', translation: 'agrega' },
            { id: 'q22-two', word: 'two', translation: 'dos' },
            { id: 'q22-eggs', word: 'eggs.', translation: 'huevos' },
          ],
          correctOrder: ['q22-add', 'q22-two', 'q22-eggs'],
          sentenceTranslation: 'Agrega dos huevos.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-mix', word: 'Mix', translation: 'mezcla' },
            { id: 'q23-well', word: 'well.', translation: 'bien' },
          ],
          correctOrder: ['q23-mix', 'q23-well'],
          sentenceTranslation: 'Mezcla bien.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-bake', word: 'Bake', translation: 'hornea' },
            { id: 'q24-the', word: 'the', translation: 'el/la' },
            { id: 'q24-cake', word: 'cake', translation: 'bizcocho' },
            { id: 'q24-for', word: 'for', translation: 'durante' },
            { id: 'q24-30', word: '30', translation: '30' },
            { id: 'q24-minutes', word: 'minutes.', translation: 'minutos' },
          ],
          correctOrder: ['q24-bake', 'q24-the', 'q24-cake', 'q24-for', 'q24-30', 'q24-minutes'],
          sentenceTranslation: 'Hornea el bizcocho por 30 minutos.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-dont', word: 'Don’t', translation: 'no' },
            { id: 'q25-forget', word: 'forget', translation: 'olvides' },
            { id: 'q25-the', word: 'the', translation: 'el/la' },
            { id: 'q25-salt', word: 'salt.', translation: 'sal' },
          ],
          correctOrder: ['q25-dont', 'q25-forget', 'q25-the', 'q25-salt'],
          sentenceTranslation: 'No olvides la sal.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-first', word: 'First,', translation: 'primero' },
            { id: 'q26-break', word: 'break', translation: 'rompe' },
            { id: 'q26-two', word: 'two', translation: 'dos' },
            { id: 'q26-eggs', word: 'eggs.', translation: 'huevos' },
          ],
          correctOrder: ['q26-first', 'q26-break', 'q26-two', 'q26-eggs'],
          sentenceTranslation: 'Primero, rompe dos huevos.',
        },
      ],
    },
  ],
};

export default lessonA2021;
