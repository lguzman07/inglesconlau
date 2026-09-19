import type { LessonContent } from '../types';

const lessonA2006: LessonContent = {
  level: 'a2',
  number: 6,
  title: 'Secuenciadores y narrar el pasado',
  subtitle: 'Aprende a ordenar acciones con first, then, next, after that y finally, para contar una rutina o una historia paso a paso.',
  videoTitle: 'Secuenciadores y narrar el pasado',
  videoDescription: 'En este video verás cómo usar secuenciadores para ordenar acciones y narrar historias en el pasado.',
  objective: 'Al terminar, podrás contar una rutina o una historia en el pasado, en orden, usando secuenciadores.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Elige el secuenciador',
      instructions: 'Escribe el secuenciador que falta: first, then, next, after, later, finally o end.',
      questions: [
        {
          id: 1,
          before: [],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'packed', translation: 'empacamos' },
            { word: 'our', translation: 'nuestro' },
            { word: 'bags.', translation: 'maletas' },
          ],
          answer: 'First',
          hint: 'primero',
          sentenceTranslation: 'Primero empacamos nuestras maletas.',
        },
        {
          id: 2,
          before: [],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'drove', translation: 'manejamos' },
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'el/la' },
            { word: 'beach.', translation: 'playa' },
          ],
          answer: 'Then',
          hint: 'luego',
          sentenceTranslation: 'Luego manejamos a la playa.',
        },
        {
          id: 3,
          before: [],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'swam', translation: 'nadamos' },
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'sea.', translation: 'mar' },
          ],
          answer: 'Next',
          hint: 'a continuación',
          sentenceTranslation: 'Después nadamos en el mar.',
        },
        {
          id: 4,
          before: [],
          after: [
            { word: 'that,', translation: 'eso' },
            { word: 'we', translation: 'nosotros' },
            { word: 'ate', translation: 'comimos' },
            { word: 'lunch.', translation: 'almuerzo' },
          ],
          answer: 'After',
          hint: 'después de eso',
          sentenceTranslation: 'Después de eso, almorzamos.',
        },
        {
          id: 5,
          before: [],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'played', translation: 'jugamos' },
            { word: 'volleyball.', translation: 'voleibol' },
          ],
          answer: 'Later',
          hint: 'más tarde',
          sentenceTranslation: 'Más tarde jugamos voleibol.',
        },
        {
          id: 6,
          before: [],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'went', translation: 'fuimos' },
            { word: 'home.', translation: 'a casa' },
          ],
          answer: 'Finally',
          hint: 'finalmente',
          sentenceTranslation: 'Finalmente fuimos a casa.',
        },
        {
          id: 7,
          before: [
            { word: 'At', translation: 'en' },
            { word: 'the', translation: 'el/la' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'said', translation: 'dijimos' },
            { word: 'goodbye.', translation: 'adiós' },
          ],
          answer: 'end',
          hint: 'al final',
          sentenceTranslation: 'Al final, nos despedimos.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Cuenta la historia en pasado',
      instructions: 'Escribe el verbo en past simple. Recuerda que algunos verbos son irregulares.',
      questions: [
        {
          id: 8,
          before: [
            { word: 'First,', translation: 'primero' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'up', translation: 'arriba' },
            { word: 'at', translation: 'en' },
            { word: '7:00.', translation: 'las 7:00' },
          ],
          answer: 'woke',
          hint: 'wake',
          sentenceTranslation: 'Primero, me desperté a las 7:00.',
        },
        {
          id: 9,
          before: [
            { word: 'Then,', translation: 'luego' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'shower.', translation: 'ducha' },
          ],
          answer: 'took',
          hint: 'take',
          sentenceTranslation: 'Luego, me di una ducha.',
        },
        {
          id: 10,
          before: [
            { word: 'After', translation: 'después' },
            { word: 'that,', translation: 'eso' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'breakfast.', translation: 'desayuno' },
          ],
          answer: 'had',
          hint: 'have',
          sentenceTranslation: 'Después de eso, desayuné.',
        },
        {
          id: 11,
          before: [
            { word: 'Finally,', translation: 'finalmente' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'for', translation: 'para' },
            { word: 'work.', translation: 'trabajo' },
          ],
          answer: 'left',
          hint: 'leave',
          sentenceTranslation: 'Finalmente, salí para el trabajo.',
        },
        {
          id: 12,
          before: [
            { word: 'First,', translation: 'primero' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'cake.', translation: 'bizcocho' },
          ],
          answer: 'bought',
          hint: 'buy',
          sentenceTranslation: 'Primero, ella compró un bizcocho.',
        },
        {
          id: 13,
          before: [
            { word: 'Then,', translation: 'luego' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'her', translation: 'su' },
            { word: 'friends.', translation: 'amigos' },
          ],
          answer: 'invited',
          hint: 'invite',
          sentenceTranslation: 'Luego, ella invitó a sus amigos.',
        },
        {
          id: 14,
          before: [
            { word: 'After', translation: 'después' },
            { word: 'that,', translation: 'eso' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'all', translation: 'todo' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'danced',
          hint: 'dance',
          sentenceTranslation: 'Después de eso, bailaron toda la noche.',
        },
        {
          id: 15,
          before: [
            { word: 'Finally,', translation: 'finalmente' },
            { word: 'everyone', translation: 'todos' },
          ],
          after: [
            { word: 'home.', translation: 'a casa' },
          ],
          answer: 'went',
          hint: 'go',
          sentenceTranslation: 'Finalmente, todos fueron a casa.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué pasó primero?',
      instructions: 'Escucha las dos acciones y elige la que pasó primero.',
      questions: [
        {
          id: 16,
          audioText: 'First, we packed our bags. Then, we drove to the beach.',
          language: 'en',
          prompt: '¿Qué hicieron primero?',
          options: [
            { id: 'a', text: 'Empacaron las maletas' },
            { id: 'b', text: 'Manejaron a la playa' },
          ],
          correctOptionIds: ['a'],
          explanation: 'First indica la primera acción: packed our bags.',
        },
        {
          id: 17,
          audioText: 'First, I took a shower. After that, I had breakfast.',
          language: 'en',
          prompt: '¿Qué hizo primero?',
          options: [
            { id: 'a', text: 'Desayunó' },
            { id: 'b', text: 'Se duchó' },
          ],
          correctOptionIds: ['b'],
          explanation: 'First indica la primera acción: took a shower.',
        },
        {
          id: 18,
          audioText: 'We ate lunch. Later, we played volleyball.',
          language: 'en',
          prompt: '¿Qué hicieron después?',
          options: [
            { id: 'a', text: 'Almorzaron' },
            { id: 'b', text: 'Jugaron voleibol' },
          ],
          correctOptionIds: ['b'],
          explanation: 'Later significa más tarde: jugaron voleibol después.',
        },
        {
          id: 19,
          audioText: 'She bought a cake. Then, she invited her friends.',
          language: 'en',
          prompt: '¿Qué hizo después?',
          options: [
            { id: 'a', text: 'Compró un bizcocho' },
            { id: 'b', text: 'Invitó a sus amigos' },
          ],
          correctOptionIds: ['b'],
          explanation: 'Then significa luego: invitó a sus amigos después.',
        },
        {
          id: 20,
          audioText: 'Finally, everyone went home.',
          language: 'en',
          prompt: '¿Qué secuenciador escuchaste?',
          options: [
            { id: 'first', text: 'First' },
            { id: 'then', text: 'Then' },
            { id: 'finally', text: 'Finally' },
          ],
          correctOptionIds: ['finally'],
          explanation: 'Finally significa finalmente, la última acción.',
        },
        {
          id: 21,
          audioText: 'Next, we swam in the sea.',
          language: 'en',
          prompt: '¿Qué secuenciador escuchaste?',
          options: [
            { id: 'next', text: 'Next' },
            { id: 'first', text: 'First' },
            { id: 'finally', text: 'Finally' },
          ],
          correctOptionIds: ['next'],
          explanation: 'Next significa a continuación.',
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
            { id: 'q22-first', word: 'First,', translation: 'primero' },
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-woke', word: 'woke', translation: 'desperté' },
            { id: 'q22-up', word: 'up', translation: 'arriba' },
            { id: 'q22-at', word: 'at', translation: 'en' },
            { id: 'q22-700', word: '7:00.', translation: 'las 7:00' },
          ],
          correctOrder: ['q22-first', 'q22-i', 'q22-woke', 'q22-up', 'q22-at', 'q22-700'],
          sentenceTranslation: 'Primero, me desperté a las 7:00.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-then', word: 'Then,', translation: 'luego' },
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-took', word: 'took', translation: 'tomé' },
            { id: 'q23-a', word: 'a', translation: 'un/una' },
            { id: 'q23-shower', word: 'shower.', translation: 'ducha' },
          ],
          correctOrder: ['q23-then', 'q23-i', 'q23-took', 'q23-a', 'q23-shower'],
          sentenceTranslation: 'Luego, me di una ducha.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-after', word: 'After', translation: 'después' },
            { id: 'q24-that', word: 'that,', translation: 'eso' },
            { id: 'q24-i', word: 'I', translation: 'yo' },
            { id: 'q24-had', word: 'had', translation: 'tuve' },
            {
              id: 'q24-breakfast',
              word: 'breakfast.',
              translation: 'desayuno',
            },
          ],
          correctOrder: ['q24-after', 'q24-that', 'q24-i', 'q24-had', 'q24-breakfast'],
          sentenceTranslation: 'Después de eso, desayuné.',
        },
        {
          id: 25,
          tokens: [
            {
              id: 'q25-finally',
              word: 'Finally,',
              translation: 'finalmente',
            },
            { id: 'q25-i', word: 'I', translation: 'yo' },
            { id: 'q25-left', word: 'left', translation: 'salí' },
            { id: 'q25-for', word: 'for', translation: 'para' },
            { id: 'q25-work', word: 'work.', translation: 'trabajo' },
          ],
          correctOrder: ['q25-finally', 'q25-i', 'q25-left', 'q25-for', 'q25-work'],
          sentenceTranslation: 'Finalmente, salí para el trabajo.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-next', word: 'Next,', translation: 'después' },
            { id: 'q26-we', word: 'we', translation: 'nosotros' },
            { id: 'q26-swam', word: 'swam', translation: 'nadamos' },
            { id: 'q26-in', word: 'in', translation: 'en' },
            { id: 'q26-the', word: 'the', translation: 'el/la' },
            { id: 'q26-sea', word: 'sea.', translation: 'mar' },
          ],
          correctOrder: ['q26-next', 'q26-we', 'q26-swam', 'q26-in', 'q26-the', 'q26-sea'],
          sentenceTranslation: 'Después, nadamos en el mar.',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-later', word: 'Later,', translation: 'más tarde' },
            { id: 'q27-they', word: 'they', translation: 'ellos' },
            { id: 'q27-ate', word: 'ate', translation: 'comimos' },
            { id: 'q27-lunch', word: 'lunch.', translation: 'almuerzo' },
          ],
          correctOrder: ['q27-later', 'q27-they', 'q27-ate', 'q27-lunch'],
          sentenceTranslation: 'Más tarde, ellos almorzaron.',
        },
      ],
    },
  ],
};

export default lessonA2006;
