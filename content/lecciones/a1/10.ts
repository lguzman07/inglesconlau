import type { LessonContent } from '../types';

const lessonA1010: LessonContent = {
  level: 'a1',
  number: 10,
  title: 'Pronombres personales y el verbo be',
  subtitle: 'Aprende los pronombres personales y el verbo be (am, is, are) con sus contracciones.',
  videoTitle: 'Pronombres personales y el verbo be',
  videoDescription: 'En este video aprenderás I, you, he, she, it, we y they con am, is y are, y las contracciones I’m, you’re, he’s...',
  objective: 'Al terminar, podrás hablar de ti y de otras personas usando los pronombres personales y el verbo be.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Am, is o are',
      instructions: 'Escribe am, is o are. I → am. He, she, it → is. You, we, they → are.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'Laura.', translation: 'Laura' },
          ],
          answer: 'am',
          sentenceTranslation: 'Yo soy Laura.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'doctor.', translation: 'doctora' },
          ],
          answer: 'is',
          sentenceTranslation: 'Ella es doctora.',
        },
        {
          id: 3,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'students.', translation: 'estudiantes' },
          ],
          answer: 'are',
          sentenceTranslation: 'Ellos son estudiantes.',
        },
        {
          id: 4,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'friends.', translation: 'amigos' },
          ],
          answer: 'are',
          sentenceTranslation: 'Somos amigos.',
        },
        {
          id: 5,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'my', translation: 'mi' },
            { word: 'brother.', translation: 'hermano' },
          ],
          answer: 'is',
          sentenceTranslation: 'Él es mi hermano.',
        },
        {
          id: 6,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'dog.', translation: 'perro' },
          ],
          answer: 'is',
          sentenceTranslation: 'Es un perro.',
        },
        {
          id: 7,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'are',
          sentenceTranslation: 'Llegas tarde.',
        },
        {
          id: 8,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'happy.', translation: 'feliz' },
          ],
          answer: 'am',
          sentenceTranslation: 'Estoy feliz.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Elige el pronombre',
      instructions: 'Escribe el pronombre en inglés. La pista en español aparece entre paréntesis.',
      questions: [
        {
          id: 9,
          before: [],
          after: [
            { word: 'is', translation: 'es / está' },
            { word: 'my', translation: 'mi' },
            { word: 'brother.', translation: 'hermano' },
          ],
          answer: 'He',
          hint: 'él',
          sentenceTranslation: 'Él es mi hermano.',
        },
        {
          id: 10,
          before: [],
          after: [
            { word: 'is', translation: 'es / está' },
            { word: 'a', translation: 'un/una' },
            { word: 'doctor.', translation: 'doctora' },
          ],
          answer: 'She',
          hint: 'ella',
          sentenceTranslation: 'Ella es doctora.',
        },
        {
          id: 11,
          before: [],
          after: [
            { word: 'are', translation: 'eres / son' },
            { word: 'friends.', translation: 'amigos' },
          ],
          answer: 'We',
          hint: 'nosotros',
          sentenceTranslation: 'Nosotros somos amigos.',
        },
        {
          id: 12,
          before: [],
          after: [
            { word: 'are', translation: 'eres / son' },
            { word: 'students.', translation: 'estudiantes' },
          ],
          answer: 'They',
          hint: 'ellos',
          sentenceTranslation: 'Ellos son estudiantes.',
        },
        {
          id: 13,
          before: [],
          after: [
            { word: 'am', translation: 'soy / estoy' },
            { word: 'happy.', translation: 'feliz' },
          ],
          answer: 'I',
          hint: 'yo',
          sentenceTranslation: 'Yo estoy feliz.',
        },
        {
          id: 14,
          before: [],
          after: [
            { word: 'is', translation: 'es / está' },
            { word: 'a', translation: 'un/una' },
            { word: 'dog.', translation: 'perro' },
          ],
          answer: 'It',
          hint: 'eso',
          sentenceTranslation: 'Es un perro.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿De quién habla?',
      instructions: 'Escucha la oración con contracción y elige de quién habla.',
      questions: [
        {
          id: 15,
          audioText: 'I’m a teacher.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['yo'],
          explanation: 'I’m = I am: habla de sí mismo.',
        },
        {
          id: 16,
          audioText: 'He’s my brother.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['el'],
          explanation: 'He’s = he is: habla de un hombre.',
        },
        {
          id: 17,
          audioText: 'She’s tall.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['ella'],
          explanation: 'She’s = she is: habla de una mujer.',
        },
        {
          id: 18,
          audioText: 'We’re friends.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['nosotros'],
          explanation: 'We’re = we are: habla de un grupo con él/ella.',
        },
        {
          id: 19,
          audioText: 'They’re students.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['ellos'],
          explanation: 'They’re = they are: habla de otras personas.',
        },
        {
          id: 20,
          audioText: 'You’re late.',
          language: 'en',
          prompt: '¿De quién habla?',
          options: [
            { id: 'yo', text: 'Yo' },
            { id: 'el', text: 'Él' },
            { id: 'ella', text: 'Ella' },
            { id: 'nosotros', text: 'Nosotros' },
            { id: 'ellos', text: 'Ellos' },
            { id: 'tu', text: 'Tú' },
          ],
          correctOptionIds: ['tu'],
          explanation: 'You’re = you are: le habla a alguien.',
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
            { id: 'q21-i', word: 'I', translation: 'yo' },
            { id: 'q21-am', word: 'am', translation: 'soy / estoy' },
            { id: 'q21-laura', word: 'Laura.', translation: 'Laura' },
          ],
          correctOrder: ['q21-i', 'q21-am', 'q21-laura'],
          sentenceTranslation: 'Yo soy Laura.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-she', word: 'She', translation: 'ella' },
            { id: 'q22-is', word: 'is', translation: 'es / está' },
            { id: 'q22-a', word: 'a', translation: 'un/una' },
            { id: 'q22-doctor', word: 'doctor.', translation: 'doctora' },
          ],
          correctOrder: ['q22-she', 'q22-is', 'q22-a', 'q22-doctor'],
          sentenceTranslation: 'Ella es doctora.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-they', word: 'They', translation: 'ellos' },
            { id: 'q23-are', word: 'are', translation: 'eres / son' },
            {
              id: 'q23-students',
              word: 'students.',
              translation: 'estudiantes',
            },
          ],
          correctOrder: ['q23-they', 'q23-are', 'q23-students'],
          sentenceTranslation: 'Ellos son estudiantes.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-we', word: 'We', translation: 'nosotros' },
            { id: 'q24-are', word: 'are', translation: 'eres / son' },
            { id: 'q24-friends', word: 'friends.', translation: 'amigos' },
          ],
          correctOrder: ['q24-we', 'q24-are', 'q24-friends'],
          sentenceTranslation: 'Somos amigos.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-he', word: 'He', translation: 'él' },
            { id: 'q25-is', word: 'is', translation: 'es / está' },
            { id: 'q25-my', word: 'my', translation: 'mi' },
            { id: 'q25-brother', word: 'brother.', translation: 'hermano' },
          ],
          correctOrder: ['q25-he', 'q25-is', 'q25-my', 'q25-brother'],
          sentenceTranslation: 'Él es mi hermano.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-you', word: 'You', translation: 'tú' },
            { id: 'q26-are', word: 'are', translation: 'eres / son' },
            { id: 'q26-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q26-you', 'q26-are', 'q26-late'],
          sentenceTranslation: 'Llegas tarde.',
        },
      ],
    },
  ],
};

export default lessonA1010;
