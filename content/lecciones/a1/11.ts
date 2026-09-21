import type { LessonContent } from '../types';

const lessonA1011: LessonContent = {
  level: 'a1',
  number: 11,
  title: 'Verbo be: negativo, preguntas y respuestas cortas',
  subtitle: 'Aprende a decir no con be, a hacer preguntas y a dar respuestas cortas.',
  videoTitle: 'Verbo be: negativo, preguntas y respuestas cortas',
  videoDescription: 'En este video verás am not, isn’t, aren’t, cómo preguntar con be y las respuestas cortas Yes, I am / No, he isn’t.',
  objective: 'Al terminar, podrás hacer oraciones negativas y preguntas con be, y responder con respuestas cortas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Negativo y preguntas',
      instructions: 'Escribe la palabra que falta: not, am, is o are.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'am', translation: 'soy / estoy' },
          ],
          after: [
            { word: 'tired.', translation: 'cansado' },
          ],
          answer: 'not',
          sentenceTranslation: 'No estoy cansado.',
        },
        {
          id: 2,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'my', translation: 'mi' },
            { word: 'brother.', translation: 'hermano' },
          ],
          answer: 'not',
          sentenceTranslation: 'Él no es mi hermano.',
        },
        {
          id: 3,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'are', translation: 'eres / son' },
          ],
          after: [
            { word: 'here.', translation: 'aquí' },
          ],
          answer: 'not',
          sentenceTranslation: 'Ellos no están aquí.',
        },
        {
          id: 4,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'teacher.', translation: 'maestra' },
          ],
          answer: 'not',
          sentenceTranslation: 'Ella no es maestra.',
        },
        {
          id: 5,
          before: [],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'a', translation: 'un/una' },
            { word: 'student?', translation: 'estudiante' },
          ],
          answer: 'Are',
          sentenceTranslation: '¿Eres estudiante?',
        },
        {
          id: 6,
          before: [],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'your', translation: 'tu' },
            { word: 'sister?', translation: 'hermana' },
          ],
          answer: 'Is',
          sentenceTranslation: '¿Es ella tu hermana?',
        },
        {
          id: 7,
          before: [],
          after: [
            { word: 'they', translation: 'ellos' },
            { word: 'from', translation: 'de' },
            { word: 'Cuba?', translation: 'Cuba' },
          ],
          answer: 'Are',
          sentenceTranslation: '¿Son de Cuba?',
        },
        {
          id: 8,
          before: [],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'late?', translation: 'tarde' },
          ],
          answer: 'Am',
          sentenceTranslation: '¿Llego tarde?',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Respuestas cortas',
      instructions: 'Completa la respuesta corta con am, is o are.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'Are', translation: 'eres / son' },
            { word: 'you', translation: 'tú' },
            { word: 'a', translation: 'un/una' },
            { word: 'student?', translation: 'estudiante' },
            { word: 'Yes,', translation: 'sí' },
            { word: 'I', translation: 'yo' },
          ],
          after: [],
          answer: 'am',
          sentenceTranslation: '¿Eres estudiante? Sí, lo soy.',
        },
        {
          id: 10,
          before: [
            { word: 'Is', translation: 'es / está' },
            { word: 'she', translation: 'ella' },
            { word: 'your', translation: 'tu' },
            { word: 'sister?', translation: 'hermana' },
            { word: 'Yes,', translation: 'sí' },
            { word: 'she', translation: 'ella' },
          ],
          after: [],
          answer: 'is',
          sentenceTranslation: '¿Es ella tu hermana? Sí, lo es.',
        },
        {
          id: 11,
          before: [
            { word: 'Are', translation: 'eres / son' },
            { word: 'they', translation: 'ellos' },
            { word: 'from', translation: 'de' },
            { word: 'Cuba?', translation: 'Cuba' },
            { word: 'Yes,', translation: 'sí' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [],
          answer: 'are',
          sentenceTranslation: '¿Son de Cuba? Sí, lo son.',
        },
        {
          id: 12,
          before: [
            { word: 'Is', translation: 'es / está' },
            { word: 'he', translation: 'él' },
            { word: 'your', translation: 'tu' },
            { word: 'teacher?', translation: 'maestra' },
            { word: 'No,', translation: 'no' },
            { word: 'he', translation: 'él' },
          ],
          after: [
            { word: 'not.', translation: 'no' },
          ],
          answer: 'is',
          sentenceTranslation: '¿Es él tu maestro? No, no lo es.',
        },
        {
          id: 13,
          before: [
            { word: 'Are', translation: 'eres / son' },
            { word: 'we', translation: 'nosotros' },
            { word: 'late?', translation: 'tarde' },
            { word: 'Yes,', translation: 'sí' },
            { word: 'we', translation: 'nosotros' },
          ],
          after: [],
          answer: 'are',
          sentenceTranslation: '¿Llegamos tarde? Sí, llegamos.',
        },
        {
          id: 14,
          before: [
            { word: 'Am', translation: 'soy / estoy' },
            { word: 'I', translation: 'yo' },
            { word: 'right?', translation: 'correcto' },
            { word: 'Yes,', translation: 'sí' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'are',
          sentenceTranslation: '¿Tengo razón? Sí, la tienes.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Sí o no?',
      instructions: 'Escucha la respuesta corta y decide si es afirmativa o negativa.',
      questions: [
        {
          id: 15,
          audioText: 'Yes, she is.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'Yes = sí.',
        },
        {
          id: 16,
          audioText: 'No, he isn’t.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['no'],
          explanation: 'isn’t = is not: respuesta negativa.',
        },
        {
          id: 17,
          audioText: 'Yes, we are.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'Yes = sí.',
        },
        {
          id: 18,
          audioText: 'No, they aren’t.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['no'],
          explanation: 'aren’t = are not: respuesta negativa.',
        },
        {
          id: 19,
          audioText: 'Yes, I am.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['yes'],
          explanation: 'Yes = sí.',
        },
        {
          id: 20,
          audioText: 'No, I’m not.',
          language: 'en',
          prompt: '¿Qué significa la respuesta?',
          options: [
            { id: 'yes', text: 'Sí' },
            { id: 'no', text: 'No' },
          ],
          correctOptionIds: ['no'],
          explanation: 'I’m not = I am not: respuesta negativa.',
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
            { id: 'q21-are', word: 'Are', translation: 'eres / son' },
            { id: 'q21-you', word: 'you', translation: 'tú' },
            { id: 'q21-a', word: 'a', translation: 'un/una' },
            {
              id: 'q21-student',
              word: 'student?',
              translation: 'estudiante',
            },
          ],
          correctOrder: ['q21-are', 'q21-you', 'q21-a', 'q21-student'],
          sentenceTranslation: '¿Eres estudiante?',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-she', word: 'She', translation: 'ella' },
            { id: 'q22-isnt', word: 'isn’t', translation: 'no es' },
            { id: 'q22-my', word: 'my', translation: 'mi' },
            { id: 'q22-sister', word: 'sister.', translation: 'hermana' },
          ],
          correctOrder: ['q22-she', 'q22-isnt', 'q22-my', 'q22-sister'],
          sentenceTranslation: 'Ella no es mi hermana.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-what', word: 'What', translation: 'cuál' },
            { id: 'q23-is', word: 'is', translation: 'es / está' },
            { id: 'q23-your', word: 'your', translation: 'tu' },
            { id: 'q23-name', word: 'name?', translation: 'nombre' },
          ],
          correctOrder: ['q23-what', 'q23-is', 'q23-your', 'q23-name'],
          sentenceTranslation: '¿Cuál es tu nombre?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-where', word: 'Where', translation: 'dónde' },
            { id: 'q24-are', word: 'are', translation: 'eres / son' },
            { id: 'q24-you', word: 'you', translation: 'tú' },
            { id: 'q24-from', word: 'from?', translation: 'de' },
          ],
          correctOrder: ['q24-where', 'q24-are', 'q24-you', 'q24-from'],
          sentenceTranslation: '¿De dónde eres?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-how', word: 'How', translation: 'cuán' },
            { id: 'q25-old', word: 'old', translation: 'años' },
            { id: 'q25-are', word: 'are', translation: 'eres / son' },
            { id: 'q25-you', word: 'you?', translation: 'tú' },
          ],
          correctOrder: ['q25-how', 'q25-old', 'q25-are', 'q25-you'],
          sentenceTranslation: '¿Cuántos años tienes?',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-i', word: 'I', translation: 'yo' },
            { id: 'q26-am', word: 'am', translation: 'soy / estoy' },
            { id: 'q26-not', word: 'not', translation: 'no' },
            { id: 'q26-tired', word: 'tired.', translation: 'cansado' },
          ],
          correctOrder: ['q26-i', 'q26-am', 'q26-not', 'q26-tired'],
          sentenceTranslation: 'No estoy cansado.',
        },
      ],
    },
  ],
};

export default lessonA1011;
