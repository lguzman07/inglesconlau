import type { LessonContent } from '../types';

const lessonA2001: LessonContent = {
  level: 'a2',

  number: 1,

  title: 'Hábitos vs acciones temporales',

  subtitle:
    'Aprende a distinguir entre hábitos y rutinas de todos los días y acciones que están pasando temporalmente.',

  videoTitle: 'Hábitos vs acciones temporales',

  videoDescription:
    'En este video verás la diferencia entre hablar de hábitos y rutinas, y hablar de acciones temporales.',

  objective:
    'Al terminar, podrás distinguir cuándo hablar de un hábito y cuándo hablar de algo temporal en inglés.',

  videoSrc: '9c2220de-de6d-4650-b381-cf7380ca4f6f',

  exercises: [
    {
      type: 'fill-in-the-blanks',

      title: 'Completa los espacios',

      instructions:
        'Escribe el verbo correcto en presente simple o presente continuo. Toca una palabra si quieres ver su traducción.',

      questions: [
        {
          id: 1,
          before: [
            { word: 'The', translation: 'El' },
            { word: 'dog', translation: 'perro' },
          ],
          after: [{ word: 'water.', translation: 'agua' }],
          answer: 'drinks',
          hint: 'drink',
          sentenceTranslation: 'El perro toma agua.',
        },

        {
          id: 2,
          before: [{ word: 'He', translation: 'Él' }],
          after: [
            { word: 'the', translation: 'las' },
            { word: 'boxes', translation: 'cajas' },
            { word: 'upstairs.', translation: 'arriba' },
          ],
          answer: 'carries',
          hint: 'carry',
          sentenceTranslation: 'Él carga las cajas al piso de arriba.',
        },

        {
          id: 3,
          before: [
            { word: 'The', translation: 'La' },
            { word: 'bee', translation: 'abeja' },
          ],
          after: [{ word: 'loudly.', translation: 'alto' }],
          answer: 'buzzes',
          hint: 'buzz',
          sentenceTranslation: 'La abeja zumba alto.',
        },

        {
          id: 4,
          before: [{ word: 'She', translation: 'Ella' }],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'school', translation: 'la escuela' },
            { word: 'every day.', translation: 'todos los días' },
          ],
          answer: 'goes',
          hint: 'go',
          sentenceTranslation: 'Ella va a la escuela todos los días.',
        },

        {
          id: 5,
          before: [
            { word: 'The', translation: 'El' },
            { word: 'eagle', translation: 'águila' },
            { word: 'is', translation: 'está' },
          ],
          after: [
            { word: 'high', translation: 'alto' },
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el' },
            { word: 'sky.', translation: 'cielo' },
          ],
          answer: 'flying',
          hint: 'fly',
          sentenceTranslation: 'El águila está volando alto en el cielo.',
        },

        {
          id: 6,
          before: [
            { word: 'She', translation: 'Ella' },
            { word: 'is', translation: 'está' },
          ],
          after: [
            { word: 'her', translation: 'su' },
            { word: 'CV.', translation: 'currículum' },
          ],
          answer: 'printing',
          hint: 'print',
          sentenceTranslation: 'Ella está imprimiendo su currículum.',
        },

        {
          id: 7,
          before: [
            { word: 'I', translation: 'Yo' },
            { word: 'am', translation: 'estoy' },
          ],
          after: [
            { word: 'a', translation: 'una' },
            { word: 'refund', translation: 'devolución' },
            { word: 'on', translation: 'de' },
            { word: 'these', translation: 'estos' },
            { word: 'items.', translation: 'artículos' },
          ],
          answer: 'getting',
          hint: 'get',
          sentenceTranslation:
            'Voy a hacer una devolución para estos productos.',
        },

        {
          id: 8,
          before: [
            { word: 'The', translation: 'El' },
            { word: 'boy', translation: 'niño' },
            { word: 'is', translation: 'está' },
          ],
          after: [
            { word: 'his', translation: 'su' },
            { word: 'shoe.', translation: 'zapato' },
          ],
          answer: 'tying',
          hint: 'tie',
          sentenceTranslation: 'El niño está atando sus zapatos.',
        },
      ],
    },

    {
      type: 'sentence-construction',

      title: 'Traduce las oraciones',

      instructions:
        'Lee cada oración en español y escríbela completa en inglés, usando presente simple o presente continuo.',

      questions: [
        {
          id: 9,
          sourceSentence: 'Ella toma agua.',
          acceptedAnswers: ['She drinks water', 'She drinks water.'],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'drinks', translation: 'toma' },
            { word: 'water.', translation: 'agua' },
          ],
          explanation:
            'Es un hábito, así que usamos presente simple: con he/she/it se agrega S al verbo.',
        },

        {
          id: 10,
          sourceSentence: 'Ellos están nadando en el lago.',
          acceptedAnswers: [
            'They are swimming in the lake',
            'They are swimming in the lake.',
            'They’re swimming in the lake',
            'They’re swimming in the lake.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'are', translation: 'están' },
            { word: 'swimming', translation: 'nadando' },
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el' },
            { word: 'lake.', translation: 'lago' },
          ],
          explanation:
            'Es algo que está pasando ahora mismo, así que usamos presente continuo: are + verbo-ing.',
        },

        {
          id: 11,
          sourceSentence: 'Él no está horneando las galletas.',
          acceptedAnswers: [
            'He is not baking the cookies',
            'He is not baking the cookies.',
            'He isn’t baking the cookies',
            'He isn’t baking the cookies.',
            'He’s not baking the cookies',
            'He’s not baking the cookies.',
          ],
          modelAnswer: [
            { word: 'He', translation: 'él' },
            { word: 'is', translation: 'está' },
            { word: 'not', translation: 'no' },
            { word: 'baking', translation: 'horneando' },
            { word: 'the', translation: 'las' },
            { word: 'cookies.', translation: 'galletas' },
          ],
          explanation:
            'Negativo en presente continuo: is/are + not + verbo-ing.',
        },

        {
          id: 12,
          sourceSentence: 'A ella no le gusta la música.',
          acceptedAnswers: [
            'She doesn’t like music',
            'She doesn’t like music.',
            'She does not like music',
            'She does not like music.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'doesn’t', translation: 'no' },
            { word: 'like', translation: 'gustar' },
            { word: 'music.', translation: 'música' },
          ],
          explanation:
            'Negativo en presente simple con he/she/it: usamos doesn’t + verbo base.',
        },

        {
          id: 13,
          sourceSentence: 'Ellos no están caminando juntos.',
          acceptedAnswers: [
            'They are not walking together',
            'They are not walking together.',
            'They aren’t walking together',
            'They aren’t walking together.',
            'They’re not walking together',
            'They’re not walking together.',
          ],
          modelAnswer: [
            { word: 'They', translation: 'ellos' },
            { word: 'are', translation: 'están' },
            { word: 'not', translation: 'no' },
            { word: 'walking', translation: 'caminando' },
            { word: 'together.', translation: 'juntos' },
          ],
          explanation:
            'Negativo en presente continuo con they: are + not + verbo-ing.',
        },

        {
          id: 14,
          sourceSentence: 'Ella no hace su tarea.',
          acceptedAnswers: [
            'She doesn’t do her homework',
            'She doesn’t do her homework.',
            'She does not do her homework',
            'She does not do her homework.',
          ],
          modelAnswer: [
            { word: 'She', translation: 'ella' },
            { word: 'doesn’t', translation: 'no' },
            { word: 'do', translation: 'hacer' },
            { word: 'her', translation: 'su' },
            { word: 'homework.', translation: 'tarea' },
          ],
          explanation:
            'Negativo en presente simple: doesn’t + verbo base (do, sin S).',
        },
      ],
    },

    {
      type: 'listening-choice',

      title: 'Escucha y elige',

      instructions:
        'Escucha la oración y decide si describe un hábito o una acción temporal.',

      questions: [
        {
          id: 15,
          audioText: 'She calls her mother every Sunday.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['habit'],
          explanation:
            'Presente simple + "every Sunday" indica un hábito o rutina.',
        },

        {
          id: 16,
          audioText: 'He is fixing the car at the moment.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['temp'],
          explanation:
            'Presente continuo + "at the moment" indica una acción temporal en curso.',
        },

        {
          id: 17,
          audioText: 'The children play soccer on Saturdays.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['habit'],
          explanation:
            'Presente simple + "on Saturdays" indica un hábito o rutina.',
        },

        {
          id: 18,
          audioText: 'I am getting a refund for these items right now.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['temp'],
          explanation:
            'Presente continuo + "right now" indica una acción temporal en curso.',
        },

        {
          id: 19,
          audioText: 'The eagle flies south every winter.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['habit'],
          explanation:
            'Presente simple + "every winter" indica un hábito o rutina.',
        },

        {
          id: 20,
          audioText: 'The eagle is flying high in the sky.',
          language: 'en',
          prompt: '¿Qué describe esta oración?',
          options: [
            { id: 'habit', text: 'Un hábito' },
            {
              id: 'temp',
              text: 'Algo que pasa ahora mismo',
            },
          ],
          correctOptionIds: ['temp'],
          explanation:
            'Presente continuo indica una acción temporal en curso, pasando justo ahora.',
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
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-am', word: 'am', translation: 'estoy' },
            { id: 'q20-walking', word: 'walking', translation: 'paseando' },
            { id: 'q20-my', word: 'my', translation: 'mi' },
            { id: 'q20-dog', word: 'dog', translation: 'perro' },
            { id: 'q20-right', word: 'right', translation: 'ahora' },
            { id: 'q20-now', word: 'now.', translation: 'mismo' },
          ],
          correctOrder: [
            'q20-i',
            'q20-am',
            'q20-walking',
            'q20-my',
            'q20-dog',
            'q20-right',
            'q20-now',
          ],
          sentenceTranslation: 'Estoy paseando a mi perro ahora mismo.',
        },

        {
          id: 22,
          tokens: [
            { id: 'q21-the', word: 'The', translation: 'La' },
            { id: 'q21-woman', word: 'woman', translation: 'mujer' },
            { id: 'q21-is', word: 'is', translation: 'está' },
            { id: 'q21-baking', word: 'baking', translation: 'horneando' },
            { id: 'q21-cupcakes', word: 'cupcakes.', translation: 'bizcochitos' },
          ],
          correctOrder: [
            'q21-the',
            'q21-woman',
            'q21-is',
            'q21-baking',
            'q21-cupcakes',
          ],
          sentenceTranslation: 'La mujer está horneando bizcochitos.',
        },

        {
          id: 23,
          tokens: [
            { id: 'q22-water', word: 'Water', translation: 'El agua' },
            { id: 'q22-boils', word: 'boils', translation: 'hierve' },
            { id: 'q22-at', word: 'at', translation: 'a' },
            { id: 'q22-100', word: '100', translation: '100' },
            { id: 'q22-degrees', word: 'degrees', translation: 'grados' },
            { id: 'q22-celsius', word: 'Celsius.', translation: 'Celsius' },
          ],
          correctOrder: [
            'q22-water',
            'q22-boils',
            'q22-at',
            'q22-100',
            'q22-degrees',
            'q22-celsius',
          ],
          sentenceTranslation: 'El agua hierve a 100 grados Celsius.',
        },

        {
          id: 24,
          tokens: [
            { id: 'q23-he', word: 'He', translation: 'Él' },
            { id: 'q23-makes', word: 'makes', translation: 'hace' },
            { id: 'q23-his', word: 'his', translation: 'su' },
            { id: 'q23-famous', word: 'famous', translation: 'famosa' },
            { id: 'q23-lasagna', word: 'lasagna.', translation: 'lasaña' },
          ],
          correctOrder: [
            'q23-he',
            'q23-makes',
            'q23-his',
            'q23-famous',
            'q23-lasagna',
          ],
          sentenceTranslation: 'Él hace su famosa lasaña.',
        },
      ],
    },
  ],
};

export default lessonA2001;
