import type { LessonContent } from '../types';

const lessonA1013: LessonContent = {
  level: 'a1',
  number: 13,
  title: 'Países, nacionalidades y profesiones',
  subtitle: 'Aprende los nombres de países, nacionalidades y profesiones, y cómo decir de dónde eres y qué haces.',
  videoTitle: 'Países, nacionalidades y profesiones',
  videoDescription: 'En este video aprenderás países, nacionalidades y profesiones, y las preguntas Where are you from? y What do you do?',
  objective: 'Al terminar, podrás decir de dónde eres, tu nacionalidad y tu profesión en inglés.',
  exercises: [
    {
      type: 'listening-choice',
      title: 'Escucha la nacionalidad',
      instructions: 'Escucha la nacionalidad en inglés y elige el país.',
      questions: [
        {
          id: 1,
          audioText: 'Dominican',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'do', text: 'República Dominicana' },
            { id: 'us', text: 'Estados Unidos' },
            { id: 'mx', text: 'México' },
          ],
          correctOptionIds: ['do'],
          explanation: 'Dominican = de la República Dominicana.',
        },
        {
          id: 2,
          audioText: 'American',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'co', text: 'Colombia' },
            { id: 'us', text: 'Estados Unidos' },
            { id: 'es', text: 'España' },
          ],
          correctOptionIds: ['us'],
          explanation: 'American = de Estados Unidos.',
        },
        {
          id: 3,
          audioText: 'Mexican',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'mx', text: 'México' },
            { id: 'br', text: 'Brasil' },
            { id: 'ca', text: 'Canadá' },
          ],
          correctOptionIds: ['mx'],
          explanation: 'Mexican = de México.',
        },
        {
          id: 4,
          audioText: 'Colombian',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'fr', text: 'Francia' },
            { id: 'co', text: 'Colombia' },
            { id: 'do', text: 'República Dominicana' },
          ],
          correctOptionIds: ['co'],
          explanation: 'Colombian = de Colombia.',
        },
        {
          id: 5,
          audioText: 'Brazilian',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'br', text: 'Brasil' },
            { id: 'us', text: 'Estados Unidos' },
            { id: 'es', text: 'España' },
          ],
          correctOptionIds: ['br'],
          explanation: 'Brazilian = de Brasil.',
        },
        {
          id: 6,
          audioText: 'Canadian',
          language: 'en',
          prompt: '¿De qué país es?',
          options: [
            { id: 'mx', text: 'México' },
            { id: 'fr', text: 'Francia' },
            { id: 'ca', text: 'Canadá' },
          ],
          correctOptionIds: ['ca'],
          explanation: 'Canadian = de Canadá.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: 'Escucha la profesión',
      instructions: 'Escucha la profesión en inglés y elige su significado.',
      questions: [
        {
          id: 7,
          audioText: 'nurse',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'enfermero/a', text: 'enfermero/a' },
            { id: 'abogado/a', text: 'abogado/a' },
            { id: 'chef', text: 'chef' },
          ],
          correctOptionIds: ['enfermero/a'],
          explanation: 'nurse = enfermero/a.',
        },
        {
          id: 8,
          audioText: 'lawyer',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'abogado/a', text: 'abogado/a' },
            { id: 'maestro/a', text: 'maestro/a' },
            { id: 'mesero/a', text: 'mesero/a' },
          ],
          correctOptionIds: ['abogado/a'],
          explanation: 'lawyer = abogado/a.',
        },
        {
          id: 9,
          audioText: 'chef',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'ingeniero/a', text: 'ingeniero/a' },
            { id: 'cocinero/a', text: 'cocinero/a' },
            { id: 'doctor/a', text: 'doctor/a' },
          ],
          correctOptionIds: ['cocinero/a'],
          explanation: 'chef = cocinero/a.',
        },
        {
          id: 10,
          audioText: 'waiter',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'mesero/a', text: 'mesero/a' },
            { id: 'artista', text: 'artista' },
            { id: 'policía', text: 'policía' },
          ],
          correctOptionIds: ['mesero/a'],
          explanation: 'waiter = mesero/a.',
        },
        {
          id: 11,
          audioText: 'engineer',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'agricultor/a', text: 'agricultor/a' },
            { id: 'ingeniero/a', text: 'ingeniero/a' },
            { id: 'estudiante', text: 'estudiante' },
          ],
          correctOptionIds: ['ingeniero/a'],
          explanation: 'engineer = ingeniero/a.',
        },
        {
          id: 12,
          audioText: 'farmer',
          language: 'en',
          prompt: '¿Qué profesión es?',
          options: [
            { id: 'conductor/a', text: 'conductor/a' },
            { id: 'agricultor/a', text: 'agricultor/a' },
            { id: 'enfermero/a', text: 'enfermero/a' },
          ],
          correctOptionIds: ['agricultor/a'],
          explanation: 'farmer = agricultor/a.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Completa los espacios',
      instructions: 'Escribe la palabra que falta. Recuerda: a antes de consonante, an antes de vocal.',
      questions: [
        {
          id: 13,
          before: [
            { word: 'Where', translation: 'dónde' },
            { word: 'are', translation: 'eres / son' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'from',
          sentenceTranslation: '¿De dónde eres?',
        },
        {
          id: 14,
          before: [
            { word: 'I’m', translation: 'yo soy' },
            { word: 'from', translation: 'de' },
            { word: 'the', translation: 'el/la' },
            { word: 'Dominican', translation: 'dominicana' },
          ],
          after: [],
          answer: 'Republic',
          sentenceTranslation: 'Soy de la República Dominicana.',
        },
        {
          id: 15,
          before: [
            { word: 'Tom', translation: 'Tom' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [],
          answer: 'American',
          hint: 'Estados Unidos',
          sentenceTranslation: 'Tom es estadounidense.',
        },
        {
          id: 16,
          before: [
            { word: 'Maria', translation: 'María' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [],
          answer: 'Colombian',
          hint: 'Colombia',
          sentenceTranslation: 'María es colombiana.',
        },
        {
          id: 17,
          before: [
            { word: 'I’m', translation: 'yo soy' },
          ],
          after: [
            { word: 'teacher.', translation: 'maestro/a' },
          ],
          answer: 'a',
          sentenceTranslation: 'Soy maestra.',
        },
        {
          id: 18,
          before: [
            { word: 'She’s', translation: 'ella es' },
          ],
          after: [
            { word: 'engineer.', translation: 'ingeniero/a' },
          ],
          answer: 'an',
          sentenceTranslation: 'Ella es ingeniera.',
        },
        {
          id: 19,
          before: [
            { word: 'He’s', translation: 'él' },
          ],
          after: [
            { word: 'chef.', translation: 'cocinero/a' },
          ],
          answer: 'a',
          sentenceTranslation: 'Él es cocinero.',
        },
        {
          id: 20,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'do', translation: 'haces' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'do',
          sentenceTranslation: '¿A qué te dedicas?',
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
            { id: 'q21-where', word: 'Where', translation: 'dónde' },
            { id: 'q21-are', word: 'are', translation: 'eres / son' },
            { id: 'q21-you', word: 'you', translation: 'tú' },
            { id: 'q21-from', word: 'from?', translation: 'de' },
          ],
          correctOrder: ['q21-where', 'q21-are', 'q21-you', 'q21-from'],
          sentenceTranslation: '¿De dónde eres?',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-am', word: 'am', translation: 'soy' },
            { id: 'q22-from', word: 'from', translation: 'de' },
            { id: 'q22-mexico', word: 'Mexico.', translation: 'México' },
          ],
          correctOrder: ['q22-i', 'q22-am', 'q22-from', 'q22-mexico'],
          sentenceTranslation: 'Soy de México.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-maria', word: 'Maria', translation: 'María' },
            { id: 'q23-is', word: 'is', translation: 'es / está' },
            {
              id: 'q23-colombian',
              word: 'Colombian.',
              translation: 'colombiana',
            },
          ],
          correctOrder: ['q23-maria', 'q23-is', 'q23-colombian'],
          sentenceTranslation: 'María es colombiana.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-she', word: 'She', translation: 'ella' },
            { id: 'q24-is', word: 'is', translation: 'es / está' },
            { id: 'q24-an', word: 'an', translation: 'un/una' },
            {
              id: 'q24-engineer',
              word: 'engineer.',
              translation: 'ingeniero/a',
            },
          ],
          correctOrder: ['q24-she', 'q24-is', 'q24-an', 'q24-engineer'],
          sentenceTranslation: 'Ella es ingeniera.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-he', word: 'He', translation: 'él' },
            { id: 'q25-is', word: 'is', translation: 'es / está' },
            { id: 'q25-a', word: 'a', translation: 'un/una' },
            { id: 'q25-chef', word: 'chef.', translation: 'cocinero/a' },
          ],
          correctOrder: ['q25-he', 'q25-is', 'q25-a', 'q25-chef'],
          sentenceTranslation: 'Él es cocinero.',
        },
        {
          id: 26,
          tokens: [
            { id: 'q26-what', word: 'What', translation: 'qué' },
            { id: 'q26-do', word: 'do', translation: 'haces' },
            { id: 'q26-you', word: 'you', translation: 'tú' },
            { id: 'q26-do-2', word: 'do?', translation: 'haces' },
          ],
          correctOrder: ['q26-what', 'q26-do', 'q26-you', 'q26-do-2'],
          sentenceTranslation: '¿A qué te dedicas?',
        },
      ],
    },
  ],
};

export default lessonA1013;
