import type { LessonContent } from '../types';

const lessonA2002: LessonContent = {
  level: 'a2',

  number: 2,

  title: 'Verbos de estado',

  subtitle:
    'Aprende cuáles verbos describen un estado, sentimiento o posesión, y por qué normalmente no se usan en tiempo continuo.',

  videoTitle: 'Verbos de estado',

  videoDescription:
    'En este video verás qué son los verbos de estado y cuándo NO debes usar el tiempo continuo con ellos.',

  objective:
    'Al terminar, podrás reconocer los verbos de estado y usarlos correctamente en presente simple en lugar de presente continuo.',

  videoSrc: '3b046261-1e12-4009-b763-00750fdeedef',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe el verbo de estado en presente simple (no en continuo). Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [
            { word: 'the', translation: 'la' },
            { word: 'answer.', translation: 'respuesta' },
          ],
          answer: 'knows',
          hint: 'know',
          sentenceTranslation: 'Ella sabe la respuesta.',
        },

        {
          id: 2,
          before: [{ word: 'He', translation: 'Él' }],
          after: [
            { word: 'his', translation: 'su' },
            { word: 'lesson.', translation: 'lección' },
          ],
          answer: 'understands',
          hint: 'understand',
          sentenceTranslation: 'Él entiende su lección.',
        },

        {
          id: 3,
          before: [{ word: 'I', translation: 'Yo' }],
          after: [
            { word: 'with', translation: 'con' },
            { word: 'my', translation: 'mi' },
            { word: 'teacher.', translation: 'profesora' },
          ],
          answer: 'agree',
          hint: 'agree',
          sentenceTranslation: 'Estoy de acuerdo con mi profesora.',
        },

        {
          id: 4,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [
            { word: 'this', translation: 'este' },
            { word: 'restaurant.', translation: 'restaurante' },
          ],
          answer: 'loves',
          hint: 'love',
          sentenceTranslation: 'A ella le encanta este restaurante.',
        },

        {
          id: 5,
          before: [{ word: 'He', translation: 'Él' }],
          after: [
            { word: 'his', translation: 'su' },
            { word: 'jacket.', translation: 'chaqueta' },
          ],
          answer: 'needs',
          hint: 'need',
          sentenceTranslation: 'Él necesita su chaqueta.',
        },

        {
          id: 6,
          before: [{ word: 'They', translation: 'Ellos' }],
          after: [{ word: 'K-pop.', translation: 'K-pop' }],
          answer: 'prefer',
          hint: 'prefer',
          sentenceTranslation: 'Ellos prefieren el K-pop.',
        },

        {
          id: 7,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [{ word: 'a', translation: 'un' }, { word: 'car.', translation: 'carro' }],
          answer: 'owns',
          hint: 'own',
          sentenceTranslation: 'Ella es dueña de un carro.',
        },

        {
          id: 8,
          before: [
            { word: 'The', translation: 'El' },
            { word: 'coat', translation: 'abrigo' },
          ],
          after: [{ word: 'warm.', translation: 'cálido' }],
          answer: 'feels',
          hint: 'feel',
          sentenceTranslation: 'El abrigo se siente cálido.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando el verbo de estado en presente simple.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Amo a mi cachorro.',
          acceptedAnswers: [
            'I love my puppy',
            'I love my puppy.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'love', translation: 'amo' },
            { word: 'my', translation: 'mi' },
            { word: 'puppy.', translation: 'cachorro' },
          ],
          explanation:
            'Love es un verbo de estado (sentimiento): siempre en presente simple, nunca en continuo.',
        },

        {
          id: 10,
          sourceSentence: 'No me gusta el aguacate.',
          acceptedAnswers: [
            'I dislike avocado',
            'I dislike avocado.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'dislike', translation: 'no me gusta' },
            { word: 'avocado.', translation: 'aguacate' },
          ],
          explanation:
            'Dislike ya expresa la idea negativa, no necesita "don’t".',
        },

        {
          id: 11,
          sourceSentence: '¿Prefieres café?',
          acceptedAnswers: [
            'Do you prefer coffee',
            'Do you prefer coffee?',
          ],
          modelAnswer: [
            { word: 'Do', translation: '¿' },
            { word: 'you', translation: 'tú' },
            { word: 'prefer', translation: 'prefieres' },
            { word: 'coffee?', translation: 'café' },
          ],
          explanation:
            'Pregunta en presente simple: Do + you + verbo base + ?',
        },

        {
          id: 12,
          sourceSentence: '¿Quieres ir a la playa?',
          acceptedAnswers: [
            'Do you want to go to the beach',
            'Do you want to go to the beach?',
          ],
          modelAnswer: [
            { word: 'Do', translation: '¿' },
            { word: 'you', translation: 'tú' },
            { word: 'want', translation: 'quieres' },
            { word: 'to', translation: 'a' },
            { word: 'go', translation: 'ir' },
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'la' },
            { word: 'beach?', translation: 'playa' },
          ],
          explanation:
            'Want es un verbo de estado: se usa en presente simple aunque hable de un deseo.',
        },

        {
          id: 13,
          sourceSentence: 'No necesito agua.',
          acceptedAnswers: [
            'I do not need water',
            'I do not need water.',
            'I don’t need water',
            'I don’t need water.',
          ],
          modelAnswer: [
            { word: 'I', translation: 'yo' },
            { word: 'do', translation: 'no' },
            { word: 'not', translation: '' },
            { word: 'need', translation: 'necesito' },
            { word: 'water.', translation: 'agua' },
          ],
          explanation:
            'Negativo en presente simple: do not / don’t + verbo base.',
        },

        {
          id: 14,
          sourceSentence: 'Él no ama a mi hermana.',
          acceptedAnswers: [
            'He does not love my sister',
            'He does not love my sister.',
            'He doesn’t love my sister',
            'He doesn’t love my sister.',
          ],
          modelAnswer: [
            { word: 'He', translation: 'él' },
            { word: 'doesn’t', translation: 'no' },
            { word: 'love', translation: 'ama' },
            { word: 'my', translation: 'a mi' },
            { word: 'sister.', translation: 'hermana' },
          ],
          explanation:
            'Con he/she/it, el negativo usa does not / doesn’t + verbo base.',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha y elige',

      instructions:
        'Escucha la oración y decide si está bien dicha o si tiene un error de verbo de estado en continuo.',

      questions: [
        {
          id: 15,
          audioText: 'I am knowing the answer.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['incorrect'],
          explanation:
            'Know es un verbo de estado, no se usa en continuo. La forma correcta es "I know the answer."',
        },

        {
          id: 16,
          audioText: 'I love this restaurant.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['correct'],
          explanation:
            'Love es un verbo de estado y aquí está bien usado en presente simple.',
        },

        {
          id: 17,
          audioText: 'I am needing my jacket.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['incorrect'],
          explanation:
            'Need es un verbo de estado. La forma correcta es "I need my jacket."',
        },

        {
          id: 18,
          audioText: 'I own my keys.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['correct'],
          explanation:
            'Own (posesión) es un verbo de estado y está bien en presente simple.',
        },

        {
          id: 19,
          audioText: 'I am possessing my phone.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['incorrect'],
          explanation:
            'Possess es un verbo de estado. La forma correcta es "I possess my phone."',
        },

        {
          id: 20,
          audioText: 'The soup is tasting good.',
          language: 'en',
          prompt: '¿Es correcta esta oración?',
          options: [
            { id: 'correct', text: 'Correcta' },
            { id: 'incorrect', text: 'Incorrecta' },
          ],
          correctOptionIds: ['incorrect'],
          explanation:
            'Cuando "taste" describe una cualidad (a qué sabe algo), es de estado. La forma correcta es "The soup tastes good."',
        },
      ],
    },

    {
      type: 'drag-and-drop',

      title: 'Ordena las palabras',

      instructions:
        'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',

      questions: [
        {
          id: 21,
          tokens: [
            { id: 'q21-i', word: 'I', translation: 'yo' },
            { id: 'q21-dislike', word: 'dislike', translation: 'no me gusta' },
            { id: 'q21-avocado', word: 'avocado.', translation: 'el aguacate' },
          ],
          correctOrder: [
            'q21-i',
            'q21-dislike',
            'q21-avocado',
          ],
          sentenceTranslation: 'No me gusta el aguacate.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q22-do', word: 'Do', translation: '¿' },
            { id: 'q22-you', word: 'you', translation: 'tú' },
            { id: 'q22-prefer', word: 'prefer', translation: 'prefieres' },
            { id: 'q22-coffee', word: 'coffee?', translation: 'café' },
          ],
          correctOrder: [
            'q22-do',
            'q22-you',
            'q22-prefer',
            'q22-coffee',
          ],
          sentenceTranslation: '¿Prefieres café?',
        },

        {
          id: 23,
          tokens: [
            { id: 'q23-he', word: 'He', translation: 'Él' },
            { id: 'q23-doesnt', word: 'doesn’t', translation: 'no' },
            { id: 'q23-love', word: 'love', translation: 'ama' },
            { id: 'q23-my', word: 'my', translation: 'a mi' },
            { id: 'q23-sister', word: 'sister.', translation: 'hermana' },
          ],
          correctOrder: [
            'q23-he',
            'q23-doesnt',
            'q23-love',
            'q23-my',
            'q23-sister',
          ],
          sentenceTranslation: 'Él no ama a mi hermana.',
        },

        {
          id: 24,
          tokens: [
            { id: 'q24-she', word: 'She', translation: 'Ella' },
            { id: 'q24-does', word: 'does', translation: 'no' },
            { id: 'q24-not', word: 'not', translation: '' },
            { id: 'q24-have', word: 'have', translation: 'tiene' },
            { id: 'q24-a', word: 'a', translation: 'un' },
            { id: 'q24-car', word: 'car.', translation: 'carro' },
          ],
          correctOrder: [
            'q24-she',
            'q24-does',
            'q24-not',
            'q24-have',
            'q24-a',
            'q24-car',
          ],
          sentenceTranslation: 'Ella no tiene un carro.',
        },
      ],
    },
  ],
};

export default lessonA2002;
