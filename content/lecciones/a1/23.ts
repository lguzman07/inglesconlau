import type { LessonContent } from '../types';

const lessonA1023: LessonContent = {
  level: 'a1',
  number: 23,
  title: 'Pedir comida y bebida; need, want y want to',
  subtitle: 'Aprende a pedir comida con Can I have... e I’d like..., y a usar need, want y want to.',
  videoTitle: 'Pedir comida y bebida; need, want y want to',
  videoDescription: 'En este video verás Can I have..., I’d like..., Would you like...?, y need, want y want to.',
  objective: 'Al terminar, podrás pedir comida y bebida con cortesía, y decir lo que necesitas y quieres.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Pedir con cortesía',
      instructions: 'Escribe la palabra que falta: can, like, would, all o are.',
      questions: [
        {
          id: 1,
          before: [],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'have', translation: 'tienes' },
            { word: 'a', translation: 'un/una' },
            { word: 'coffee,', translation: 'café' },
            { word: 'please?', translation: 'por favor' },
          ],
          answer: 'Can',
          sentenceTranslation: '¿Me da un café, por favor?',
        },
        {
          id: 2,
          before: [
            { word: 'I’d', translation: 'quisiera' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'sandwich,', translation: 'sándwich' },
            { word: 'please.', translation: 'por favor' },
          ],
          answer: 'like',
          sentenceTranslation: 'Quisiera un sándwich, por favor.',
        },
        {
          id: 3,
          before: [],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'like', translation: 'gustar' },
            { word: 'some', translation: 'algo de' },
            { word: 'tea?', translation: 'té' },
          ],
          answer: 'Would',
          sentenceTranslation: '¿Te gustaría un poco de té?',
        },
        {
          id: 4,
          before: [
            { word: 'That’s', translation: 'eso es' },
          ],
          after: [
            { word: 'thank', translation: 'gracias' },
            { word: 'you.', translation: 'tú' },
          ],
          answer: 'all',
          sentenceTranslation: 'Eso es todo, gracias.',
        },
        {
          id: 5,
          before: [
            { word: 'Here', translation: 'aquí' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'are',
          sentenceTranslation: 'Aquí tiene.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Need, want y want to',
      instructions: 'Escribe need, needs, want, wants o to.',
      questions: [
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'pen.', translation: 'bolígrafo' },
          ],
          answer: 'need',
          sentenceTranslation: 'Necesito un bolígrafo.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'help.', translation: 'ayuda' },
          ],
          answer: 'needs',
          sentenceTranslation: 'Ella necesita ayuda.',
        },
        {
          id: 8,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'coffee.', translation: 'café' },
          ],
          answer: 'want',
          sentenceTranslation: 'Quiero un café.',
        },
        {
          id: 9,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'sandwich.', translation: 'sándwich' },
          ],
          answer: 'wants',
          sentenceTranslation: 'Él quiere un sándwich.',
        },
        {
          id: 10,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'want', translation: 'quieres' },
          ],
          after: [
            { word: 'eat.', translation: 'comer' },
          ],
          answer: 'to',
          sentenceTranslation: 'Quiero comer.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'wants', translation: 'quiere' },
          ],
          after: [
            { word: 'sleep.', translation: 'dormir' },
          ],
          answer: 'to',
          sentenceTranslation: 'Ella quiere dormir.',
        },
        {
          id: 12,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'don’t', translation: 'no' },
            { word: 'want', translation: 'quieres' },
          ],
          after: [
            { word: 'go.', translation: 'ir' },
          ],
          answer: 'to',
          sentenceTranslation: 'No quiero ir.',
        },
        {
          id: 13,
          before: [
            { word: 'Do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'tea?', translation: 'té' },
          ],
          answer: 'want',
          sentenceTranslation: '¿Quieres té?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué está pasando?',
      instructions: 'Escucha la frase y decide si la persona pide algo, ofrece algo o pregunta.',
      questions: [
        {
          id: 14,
          audioText: 'Can I have a coffee, please?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['orders'],
          explanation: 'Can I have... = pedir.',
        },
        {
          id: 15,
          audioText: 'Would you like some water?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['offers'],
          explanation: 'Would you like... = ofrecer.',
        },
        {
          id: 16,
          audioText: 'I’d like a sandwich, please.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['orders'],
          explanation: 'I’d like... = pedir.',
        },
        {
          id: 17,
          audioText: 'What would you like?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['asks'],
          explanation: 'What would you like? = pregunta qué quieres.',
        },
        {
          id: 18,
          audioText: 'Anything else?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['asks'],
          explanation: 'Anything else? = pregunta si quieres algo más.',
        },
        {
          id: 19,
          audioText: 'That’s all, thank you.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'orders', text: 'Pide algo' },
            { id: 'offers', text: 'Ofrece algo' },
            { id: 'asks', text: 'Pregunta qué quieres' },
            { id: 'ends', text: 'Termina el pedido' },
          ],
          correctOptionIds: ['ends'],
          explanation: 'That’s all = termina el pedido.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 20,
          tokens: [
            { id: 'q20-can', word: 'Can', translation: 'puedo' },
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-have', word: 'have', translation: 'tienes' },
            { id: 'q20-a', word: 'a', translation: 'un/una' },
            { id: 'q20-coffee', word: 'coffee,', translation: 'café' },
            { id: 'q20-please', word: 'please?', translation: 'por favor' },
          ],
          correctOrder: ['q20-can', 'q20-i', 'q20-have', 'q20-a', 'q20-coffee', 'q20-please'],
          sentenceTranslation: '¿Me da un café, por favor?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-id', word: 'I’d', translation: 'quisiera' },
            { id: 'q21-like', word: 'like', translation: 'gustar' },
            { id: 'q21-a', word: 'a', translation: 'un/una' },
            {
              id: 'q21-sandwich',
              word: 'sandwich,',
              translation: 'sándwich',
            },
            { id: 'q21-please', word: 'please.', translation: 'por favor' },
          ],
          correctOrder: ['q21-id', 'q21-like', 'q21-a', 'q21-sandwich', 'q21-please'],
          sentenceTranslation: 'Quisiera un sándwich, por favor.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-would', word: 'Would', translation: 'te gustaría' },
            { id: 'q22-you', word: 'you', translation: 'tú' },
            { id: 'q22-like', word: 'like', translation: 'gustar' },
            { id: 'q22-some', word: 'some', translation: 'algo de' },
            { id: 'q22-tea', word: 'tea?', translation: 'té' },
          ],
          correctOrder: ['q22-would', 'q22-you', 'q22-like', 'q22-some', 'q22-tea'],
          sentenceTranslation: '¿Te gustaría un poco de té?',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-need', word: 'need', translation: 'necesito' },
            { id: 'q23-a', word: 'a', translation: 'un/una' },
            { id: 'q23-pen', word: 'pen.', translation: 'bolígrafo' },
          ],
          correctOrder: ['q23-i', 'q23-need', 'q23-a', 'q23-pen'],
          sentenceTranslation: 'Necesito un bolígrafo.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-i', word: 'I', translation: 'yo' },
            { id: 'q24-want', word: 'want', translation: 'quieres' },
            { id: 'q24-to', word: 'to', translation: 'a' },
            { id: 'q24-eat', word: 'eat.', translation: 'comer' },
          ],
          correctOrder: ['q24-i', 'q24-want', 'q24-to', 'q24-eat'],
          sentenceTranslation: 'Quiero comer.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-thats', word: 'That’s', translation: 'eso es' },
            { id: 'q25-all', word: 'all,', translation: 'todo' },
            { id: 'q25-thank', word: 'thank', translation: 'gracias' },
            { id: 'q25-you', word: 'you.', translation: 'tú' },
          ],
          correctOrder: ['q25-thats', 'q25-all', 'q25-thank', 'q25-you'],
          sentenceTranslation: 'Eso es todo, gracias.',
        },
      ],
    },
  ],
};

export default lessonA1023;
