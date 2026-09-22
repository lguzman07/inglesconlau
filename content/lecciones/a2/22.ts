import type { LessonContent } from '../types';

const lessonA2022: LessonContent = {
  level: 'a2',
  number: 22,
  title: 'En el restaurante',
  subtitle: 'Aprende a pedir, pedir recomendaciones, hablar de alergias y quejarte con cortesía en un restaurante.',
  videoTitle: 'En el restaurante',
  videoDescription: 'En este video verás cómo pedir comida, pedir recomendaciones, hablar de alergias y restricciones, y quejarte educadamente.',
  objective: 'Al terminar, podrás desenvolverte en un restaurante: pedir, preguntar por alergias y quejarte con cortesía.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Pedir y recomendar',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'table', translation: 'mesa' },
            { word: 'for', translation: 'durante' },
            { word: 'two,', translation: 'dos' },
          ],
          after: [],
          answer: 'please',
          sentenceTranslation: 'Una mesa para dos, por favor.',
        },
        {
          id: 2,
          before: [
            { word: 'I’d', translation: 'me' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'chicken,', translation: 'pollo' },
            { word: 'please.', translation: 'por favor' },
          ],
          answer: 'like',
          sentenceTranslation: 'Quisiera el pollo, por favor.',
        },
        {
          id: 3,
          before: [
            { word: 'I’ll', translation: 'yo' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'soup.', translation: 'sopa' },
          ],
          answer: 'have',
          sentenceTranslation: 'Tomaré la sopa.',
        },
        {
          id: 4,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'recommend',
          sentenceTranslation: '¿Qué recomienda?',
        },
        {
          id: 5,
          before: [
            { word: 'What’s', translation: 'cuál es' },
            { word: 'the', translation: 'el/la' },
          ],
          after: [
            { word: 'today?', translation: 'hoy' },
          ],
          answer: 'special',
          sentenceTranslation: '¿Cuál es el especial de hoy?',
        },
        {
          id: 6,
          before: [
            { word: 'Is', translation: 'está' },
            { word: 'it', translation: 'eso' },
          ],
          after: [],
          answer: 'spicy',
          sentenceTranslation: '¿Es picante?',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Alergias y quejas',
      instructions: 'Escribe la palabra que falta.',
      questions: [
        {
          id: 7,
          before: [
            { word: 'I’m', translation: 'yo estoy' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'nuts.', translation: 'nueces' },
          ],
          answer: 'allergic',
          sentenceTranslation: 'Soy alérgico a las nueces.',
        },
        {
          id: 8,
          before: [
            { word: 'Does', translation: 'auxiliar' },
            { word: 'it', translation: 'eso' },
          ],
          after: [
            { word: 'gluten?', translation: 'gluten' },
          ],
          answer: 'contain',
          sentenceTranslation: '¿Contiene gluten?',
        },
        {
          id: 9,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'eat', translation: 'comer' },
            { word: 'dairy.', translation: 'lácteos' },
          ],
          answer: 'can’t',
          sentenceTranslation: 'No puedo comer lácteos.',
        },
        {
          id: 10,
          before: [
            { word: 'Do', translation: 'auxiliar' },
            { word: 'you', translation: 'tú' },
            { word: 'have', translation: 'tomaré' },
            { word: 'a', translation: 'un/una' },
          ],
          after: [
            { word: 'option?', translation: 'opción' },
          ],
          answer: 'vegan',
          sentenceTranslation: '¿Tiene una opción vegana?',
        },
        {
          id: 11,
          before: [
            { word: 'Excuse', translation: 'disculpe' },
            { word: 'me,', translation: 'me' },
            { word: 'this', translation: 'esto' },
          ],
          after: [
            { word: 'what', translation: 'qué' },
            { word: 'I', translation: 'yo' },
            { word: 'ordered.', translation: 'pedí' },
          ],
          answer: 'isn’t',
          sentenceTranslation: 'Disculpe, esto no es lo que pedí.',
        },
        {
          id: 12,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'soup', translation: 'sopa' },
            { word: 'is', translation: 'está' },
          ],
          after: [],
          answer: 'cold',
          sentenceTranslation: 'La sopa está fría.',
        },
        {
          id: 13,
          before: [
            { word: 'Could', translation: 'podría' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'el/la' },
            { word: 'manager?', translation: 'gerente' },
          ],
          answer: 'speak',
          sentenceTranslation: '¿Podría hablar con el gerente?',
        },
        {
          id: 14,
          before: [
            { word: 'Could', translation: 'podría' },
            { word: 'we', translation: 'nosotros' },
            { word: 'have', translation: 'tomaré' },
            { word: 'the', translation: 'el/la' },
          ],
          after: [
            { word: 'please?', translation: 'por favor' },
          ],
          answer: 'bill',
          sentenceTranslation: '¿Nos trae la cuenta, por favor?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué está haciendo?',
      instructions: 'Escucha la frase y decide qué está haciendo la persona.',
      questions: [
        {
          id: 15,
          audioText: 'I’d like the chicken, please.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['order'],
          explanation: 'I’d like... = pedir.',
        },
        {
          id: 16,
          audioText: 'What do you recommend?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['recommend'],
          explanation: 'What do you recommend? = pedir recomendación.',
        },
        {
          id: 17,
          audioText: 'I’m allergic to nuts.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['allergy'],
          explanation: 'allergic to = alergia.',
        },
        {
          id: 18,
          audioText: 'Excuse me, this isn’t what I ordered.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['complain'],
          explanation: 'this isn’t what I ordered = queja.',
        },
        {
          id: 19,
          audioText: 'Does it contain gluten?',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['allergy'],
          explanation: 'pregunta por gluten = alergia/restricción.',
        },
        {
          id: 20,
          audioText: 'The soup is cold.',
          language: 'en',
          prompt: '¿Qué hace la persona?',
          options: [
            { id: 'order', text: 'Pedir comida' },
            { id: 'recommend', text: 'Pedir una recomendación' },
            { id: 'allergy', text: 'Hablar de una alergia' },
            { id: 'complain', text: 'Quejarse' },
          ],
          correctOptionIds: ['complain'],
          explanation: 'the soup is cold = queja.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 19,
          tokens: [
            { id: 'q19-a', word: 'A', translation: 'un/una' },
            { id: 'q19-table', word: 'table', translation: 'mesa' },
            { id: 'q19-for', word: 'for', translation: 'durante' },
            { id: 'q19-two', word: 'two,', translation: 'dos' },
            { id: 'q19-please', word: 'please.', translation: 'por favor' },
          ],
          correctOrder: ['q19-a', 'q19-table', 'q19-for', 'q19-two', 'q19-please'],
          sentenceTranslation: 'Una mesa para dos, por favor.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-what', word: 'What', translation: 'qué' },
            { id: 'q20-do', word: 'do', translation: 'auxiliar' },
            { id: 'q20-you', word: 'you', translation: 'tú' },
            {
              id: 'q20-recommend',
              word: 'recommend?',
              translation: 'recomienda',
            },
          ],
          correctOrder: ['q20-what', 'q20-do', 'q20-you', 'q20-recommend'],
          sentenceTranslation: '¿Qué recomienda?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-im', word: 'I’m', translation: 'yo estoy' },
            {
              id: 'q21-allergic',
              word: 'allergic',
              translation: 'alérgico',
            },
            { id: 'q21-to', word: 'to', translation: 'a' },
            { id: 'q21-nuts', word: 'nuts.', translation: 'nueces' },
          ],
          correctOrder: ['q21-im', 'q21-allergic', 'q21-to', 'q21-nuts'],
          sentenceTranslation: 'Soy alérgico a las nueces.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-this', word: 'This', translation: 'esto' },
            { id: 'q22-isnt', word: 'isn’t', translation: 'no es' },
            { id: 'q22-what', word: 'what', translation: 'qué' },
            { id: 'q22-i', word: 'I', translation: 'yo' },
            { id: 'q22-ordered', word: 'ordered.', translation: 'pedí' },
          ],
          correctOrder: ['q22-this', 'q22-isnt', 'q22-what', 'q22-i', 'q22-ordered'],
          sentenceTranslation: 'Esto no es lo que pedí.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-could', word: 'Could', translation: 'podría' },
            { id: 'q23-we', word: 'we', translation: 'nosotros' },
            { id: 'q23-have', word: 'have', translation: 'tomaré' },
            { id: 'q23-the', word: 'the', translation: 'el/la' },
            { id: 'q23-bill', word: 'bill,', translation: 'cuenta' },
            { id: 'q23-please', word: 'please?', translation: 'por favor' },
          ],
          correctOrder: ['q23-could', 'q23-we', 'q23-have', 'q23-the', 'q23-bill', 'q23-please'],
          sentenceTranslation: '¿Nos trae la cuenta, por favor?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-do', word: 'Do', translation: 'auxiliar' },
            { id: 'q24-you', word: 'you', translation: 'tú' },
            { id: 'q24-have', word: 'have', translation: 'tomaré' },
            { id: 'q24-a', word: 'a', translation: 'un/una' },
            { id: 'q24-vegan', word: 'vegan', translation: 'vegano' },
            { id: 'q24-option', word: 'option?', translation: 'opción' },
          ],
          correctOrder: ['q24-do', 'q24-you', 'q24-have', 'q24-a', 'q24-vegan', 'q24-option'],
          sentenceTranslation: '¿Tiene una opción vegana?',
        },
      ],
    },
  ],
};

export default lessonA2022;
