import type { LessonContent } from '../types';

const lessonA1018: LessonContent = {
  level: 'a1',
  number: 18,
  title: 'Cuerpo, animales y descripción de personas',
  subtitle: 'Aprende las partes del cuerpo, los animales, y a describir el aspecto y la personalidad de una persona.',
  videoTitle: 'Cuerpo, animales y descripción de personas',
  videoDescription: 'En este video aprenderás partes del cuerpo, animales, has/is para describir el aspecto y adjetivos de personalidad.',
  objective: 'Al terminar, podrás nombrar partes del cuerpo y animales, y describir cómo es una persona.',
  exercises: [
    {
      type: 'listening-choice',
      title: 'Escucha la parte del cuerpo',
      instructions: 'Escucha la palabra en inglés y elige su significado.',
      questions: [
        {
          id: 1,
          audioText: 'eyes',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'ojos', text: 'Ojos' },
            { id: 'orejas', text: 'Orejas' },
            { id: 'nariz', text: 'Nariz' },
          ],
          correctOptionIds: ['ojos'],
          explanation: 'eyes = ojos.',
        },
        {
          id: 2,
          audioText: 'ears',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'boca', text: 'Boca' },
            { id: 'orejas', text: 'Orejas' },
            { id: 'manos', text: 'Manos' },
          ],
          correctOptionIds: ['orejas'],
          explanation: 'ears = orejas.',
        },
        {
          id: 3,
          audioText: 'nose',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'nariz', text: 'Nariz' },
            { id: 'pies', text: 'Pies' },
            { id: 'ojos', text: 'Ojos' },
          ],
          correctOptionIds: ['nariz'],
          explanation: 'nose = nariz.',
        },
        {
          id: 4,
          audioText: 'mouth',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'manos', text: 'Manos' },
            { id: 'boca', text: 'Boca' },
            { id: 'orejas', text: 'Orejas' },
          ],
          correctOptionIds: ['boca'],
          explanation: 'mouth = boca.',
        },
        {
          id: 5,
          audioText: 'hands',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'manos', text: 'Manos' },
            { id: 'pies', text: 'Pies' },
            { id: 'nariz', text: 'Nariz' },
          ],
          correctOptionIds: ['manos'],
          explanation: 'hands = manos.',
        },
        {
          id: 6,
          audioText: 'feet',
          language: 'en',
          prompt: '¿Qué parte del cuerpo es?',
          options: [
            { id: 'ojos', text: 'Ojos' },
            { id: 'boca', text: 'Boca' },
            { id: 'pies', text: 'Pies' },
          ],
          correctOptionIds: ['pies'],
          explanation: 'feet = pies.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Escucha el animal',
      instructions: 'Escucha el animal en inglés y elige su significado.',
      questions: [
        {
          id: 7,
          audioText: 'dog',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'perro', text: 'Perro' },
            { id: 'gato', text: 'Gato' },
            { id: 'caballo', text: 'Caballo' },
          ],
          correctOptionIds: ['perro'],
          explanation: 'dog = perro.',
        },
        {
          id: 8,
          audioText: 'horse',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'pez', text: 'Pez' },
            { id: 'caballo', text: 'Caballo' },
            { id: 'vaca', text: 'Vaca' },
          ],
          correctOptionIds: ['caballo'],
          explanation: 'horse = caballo.',
        },
        {
          id: 9,
          audioText: 'monkey',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'mono', text: 'Mono' },
            { id: 'pájaro', text: 'Pájaro' },
            { id: 'conejo', text: 'Conejo' },
          ],
          correctOptionIds: ['mono'],
          explanation: 'monkey = mono.',
        },
        {
          id: 10,
          audioText: 'fish',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'perro', text: 'Perro' },
            { id: 'pez', text: 'Pez' },
            { id: 'mono', text: 'Mono' },
          ],
          correctOptionIds: ['pez'],
          explanation: 'fish = pez.',
        },
        {
          id: 11,
          audioText: 'bird',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'pájaro', text: 'Pájaro' },
            { id: 'gato', text: 'Gato' },
            { id: 'vaca', text: 'Vaca' },
          ],
          correctOptionIds: ['pájaro'],
          explanation: 'bird = pájaro.',
        },
        {
          id: 12,
          audioText: 'cow',
          language: 'en',
          prompt: '¿Qué animal es?',
          options: [
            { id: 'caballo', text: 'Caballo' },
            { id: 'vaca', text: 'Vaca' },
            { id: 'pez', text: 'Pez' },
          ],
          correctOptionIds: ['vaca'],
          explanation: 'cow = vaca.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Animales y descripción',
      instructions: 'Escribe la palabra en inglés. La pista en español aparece entre paréntesis.',
      questions: [
        {
          id: 13,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'bird', translation: 'pájaro' },
            { word: 'can', translation: 'puede' },
          ],
          after: [],
          answer: 'fly',
          hint: 'volar',
          sentenceTranslation: 'Un pájaro puede volar.',
        },
        {
          id: 14,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'fish', translation: 'pez' },
            { word: 'can', translation: 'puede' },
          ],
          after: [],
          answer: 'swim',
          hint: 'nadar',
          sentenceTranslation: 'Un pez puede nadar.',
        },
        {
          id: 15,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'horse', translation: 'caballo' },
            { word: 'can', translation: 'puede' },
          ],
          after: [],
          answer: 'run',
          hint: 'correr',
          sentenceTranslation: 'Un caballo puede correr.',
        },
        {
          id: 16,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'monkey', translation: 'mono' },
            { word: 'can', translation: 'puede' },
          ],
          after: [],
          answer: 'jump',
          hint: 'saltar',
          sentenceTranslation: 'Un mono puede saltar.',
        },
        {
          id: 17,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'has', translation: 'tiene' },
            { word: 'long', translation: 'largo' },
            { word: 'black', translation: 'negro' },
          ],
          after: [],
          answer: 'hair',
          hint: 'pelo',
          sentenceTranslation: 'Ella tiene el pelo largo y negro.',
        },
        {
          id: 18,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tengo' },
            { word: 'blue', translation: 'azules' },
          ],
          after: [],
          answer: 'eyes',
          hint: 'ojos',
          sentenceTranslation: 'Tengo los ojos azules.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Has, have o is',
      instructions: 'Escribe has, have o is. Para el pelo y los ojos usamos have/has. Para tall, funny, shy usamos is.',
      questions: [
        {
          id: 19,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'long', translation: 'largo' },
            { word: 'black', translation: 'negro' },
            { word: 'hair.', translation: 'pelo' },
          ],
          answer: 'has',
          sentenceTranslation: 'Ella tiene el pelo largo y negro.',
        },
        {
          id: 20,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'tall.', translation: 'alto' },
          ],
          answer: 'is',
          sentenceTranslation: 'Él es alto.',
        },
        {
          id: 21,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'blue', translation: 'azules' },
            { word: 'eyes.', translation: 'ojos' },
          ],
          answer: 'have',
          sentenceTranslation: 'Tengo los ojos azules.',
        },
        {
          id: 22,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'funny.', translation: 'gracioso' },
          ],
          answer: 'is',
          sentenceTranslation: 'Él es gracioso.',
        },
        {
          id: 23,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'shy.', translation: 'tímida' },
          ],
          answer: 'is',
          sentenceTranslation: 'Ella es tímida.',
        },
        {
          id: 24,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'short', translation: 'corto' },
            { word: 'brown', translation: 'marrón' },
            { word: 'hair.', translation: 'pelo' },
          ],
          answer: 'has',
          sentenceTranslation: 'Él tiene el pelo corto y marrón.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 25,
          tokens: [
            { id: 'q25-a', word: 'A', translation: 'un/una' },
            { id: 'q25-bird', word: 'bird', translation: 'pájaro' },
            { id: 'q25-can', word: 'can', translation: 'puede' },
            { id: 'q25-fly', word: 'fly.', translation: 'volar' },
          ],
          correctOrder: ['q25-a', 'q25-bird', 'q25-can', 'q25-fly'],
          sentenceTranslation: 'Un pájaro puede volar.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-she', word: 'She', translation: 'ella' },
            { id: 'q26-has', word: 'has', translation: 'tiene' },
            { id: 'q26-long', word: 'long', translation: 'largo' },
            { id: 'q26-black', word: 'black', translation: 'negro' },
            { id: 'q26-hair', word: 'hair.', translation: 'pelo' },
          ],
          correctOrder: ['q26-she', 'q26-has', 'q26-long', 'q26-black', 'q26-hair'],
          sentenceTranslation: 'Ella tiene el pelo largo y negro.',
        },
        {
          id: 27,
          tokens: [
            { id: 'q27-he', word: 'He', translation: 'él' },
            { id: 'q27-is', word: 'is', translation: 'es / está' },
            { id: 'q27-tall', word: 'tall.', translation: 'alto' },
          ],
          correctOrder: ['q27-he', 'q27-is', 'q27-tall'],
          sentenceTranslation: 'Él es alto.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-what', word: 'What', translation: 'qué' },
            { id: 'q28-does', word: 'does', translation: 'auxiliar' },
            { id: 'q28-he', word: 'he', translation: 'él' },
            { id: 'q28-look', word: 'look', translation: 'parece' },
            { id: 'q28-like', word: 'like?', translation: 'gustaría' },
          ],
          correctOrder: ['q28-what', 'q28-does', 'q28-he', 'q28-look', 'q28-like'],
          sentenceTranslation: '¿Cómo es él físicamente?',
        },
        {
          id: 29,
          tokens: [
            { id: 'q29-what', word: 'What', translation: 'qué' },
            { id: 'q29-is', word: 'is', translation: 'es / está' },
            { id: 'q29-she', word: 'she', translation: 'ella' },
            { id: 'q29-like', word: 'like?', translation: 'gustaría' },
          ],
          correctOrder: ['q29-what', 'q29-is', 'q29-she', 'q29-like'],
          sentenceTranslation: '¿Cómo es ella?',
        },
        {
          id: 30,
          tokens: [
            { id: 'q30-my', word: 'My', translation: 'mi' },
            { id: 'q30-brother', word: 'brother', translation: 'hermano' },
            { id: 'q30-is', word: 'is', translation: 'es / está' },
            {
              id: 'q30-friendly',
              word: 'friendly.',
              translation: 'amigable',
            },
          ],
          correctOrder: ['q30-my', 'q30-brother', 'q30-is', 'q30-friendly'],
          sentenceTranslation: 'Mi hermano es amigable.',
        },
      ],
    },
  ],
};

export default lessonA1018;
