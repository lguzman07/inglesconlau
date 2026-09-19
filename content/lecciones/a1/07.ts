import type { LessonContent } from '../types';

const lessonA1007: LessonContent = {
  level: 'a1',
  number: 7,
  title: 'Saludos, despedidas y How are you?',
  subtitle: 'Aprende a saludar y despedirte según la hora del día, a decir cómo estás y a preguntar y decir la edad.',
  videoTitle: 'Saludos, despedidas y How are you?',
  videoDescription: 'En este video aprenderás good morning, good afternoon, good evening, cómo responder a How are you? y cómo decir tu edad.',
  objective: 'Al terminar, podrás saludar y despedirte, decir cómo te sientes y preguntar y decir la edad en inglés.',
  exercises: [
    {
      type: 'listening-choice',
      title: '¿Cuándo se dice?',
      instructions: 'Escucha el saludo o la despedida y elige cuándo se usa.',
      questions: [
        {
          id: 1,
          audioText: 'Good morning!',
          language: 'en',
          prompt: '¿Cuándo se dice esto?',
          options: [
            { id: 'morning', text: 'Por la mañana' },
            { id: 'afternoon', text: 'Por la tarde' },
            { id: 'night', text: 'Al despedirte de noche' },
          ],
          correctOptionIds: ['morning'],
          explanation: 'Good morning se usa por la mañana, hasta el mediodía.',
        },
        {
          id: 2,
          audioText: 'Good afternoon!',
          language: 'en',
          prompt: '¿Cuándo se dice esto?',
          options: [
            { id: 'morning', text: 'Por la mañana' },
            { id: 'afternoon', text: 'Por la tarde' },
            { id: 'night', text: 'Al despedirte de noche' },
          ],
          correctOptionIds: ['afternoon'],
          explanation: 'Good afternoon se usa desde el mediodía hasta la tarde.',
        },
        {
          id: 3,
          audioText: 'Good evening!',
          language: 'en',
          prompt: '¿Cuándo se dice esto?',
          options: [
            { id: 'afternoon', text: 'Por la tarde' },
            { id: 'evening', text: 'Al llegar por la noche' },
            { id: 'morning', text: 'Por la mañana' },
          ],
          correctOptionIds: ['evening'],
          explanation: 'Good evening se usa para saludar cuando llegas por la noche.',
        },
        {
          id: 4,
          audioText: 'Good night!',
          language: 'en',
          prompt: '¿Cuándo se dice esto?',
          options: [
            { id: 'evening', text: 'Al llegar por la noche' },
            { id: 'night', text: 'Al despedirte de noche' },
            { id: 'morning', text: 'Por la mañana' },
          ],
          correctOptionIds: ['night'],
          explanation: 'Good night se usa para despedirte de noche o antes de dormir.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Cómo está la persona?',
      instructions: 'Escucha cómo responde la persona a "How are you?" y elige cómo está.',
      questions: [
        {
          id: 5,
          audioText: 'I’m tired.',
          language: 'en',
          prompt: '¿Cómo está la persona?',
          options: [
            { id: 'tired', text: 'Cansada' },
            { id: 'great', text: 'Muy bien' },
            { id: 'bad', text: 'Mal' },
          ],
          correctOptionIds: ['tired'],
          explanation: 'tired significa cansado/a.',
        },
        {
          id: 6,
          audioText: 'I’m great!',
          language: 'en',
          prompt: '¿Cómo está la persona?',
          options: [
            { id: 'sosos', text: 'Más o menos' },
            { id: 'great', text: 'Muy bien' },
            { id: 'bad', text: 'Mal' },
          ],
          correctOptionIds: ['great'],
          explanation: 'great significa muy bien, excelente.',
        },
        {
          id: 7,
          audioText: 'I’m so-so.',
          language: 'en',
          prompt: '¿Cómo está la persona?',
          options: [
            { id: 'sosos', text: 'Más o menos' },
            { id: 'great', text: 'Muy bien' },
            { id: 'tired', text: 'Cansada' },
          ],
          correctOptionIds: ['sosos'],
          explanation: 'so-so significa más o menos.',
        },
        {
          id: 8,
          audioText: 'I’m bad.',
          language: 'en',
          prompt: '¿Cómo está la persona?',
          options: [
            { id: 'great', text: 'Muy bien' },
            { id: 'bad', text: 'Mal' },
            { id: 'sosos', text: 'Más o menos' },
          ],
          correctOptionIds: ['bad'],
          explanation: 'bad significa mal.',
        },
        {
          id: 9,
          audioText: 'I’m fine, thanks.',
          language: 'en',
          prompt: '¿Cómo está la persona?',
          options: [
            { id: 'fine', text: 'Bien' },
            { id: 'bad', text: 'Mal' },
            { id: 'tired', text: 'Cansada' },
          ],
          correctOptionIds: ['fine'],
          explanation: 'fine significa bien.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Completa los espacios',
      instructions: 'Escribe la palabra que falta. Toca una palabra si quieres ver su traducción.',
      questions: [
        {
          id: 10,
          before: [],
          after: [
            { word: 'morning!', translation: 'mañana' },
          ],
          answer: 'Good',
          sentenceTranslation: '¡Buenos días!',
        },
        {
          id: 11,
          before: [
            { word: 'How', translation: 'cómo' },
          ],
          after: [
            { word: 'you?', translation: 'tú' },
          ],
          answer: 'are',
          sentenceTranslation: '¿Cómo estás?',
        },
        {
          id: 12,
          before: [
            { word: 'I’m', translation: 'yo soy / estoy' },
          ],
          after: [
            { word: 'thanks.', translation: 'gracias' },
            { word: 'And', translation: 'y' },
            { word: 'you?', translation: 'tú' },
          ],
          answer: 'fine',
          sentenceTranslation: 'Estoy bien, gracias. ¿Y tú?',
        },
        {
          id: 13,
          before: [],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'meet', translation: 'conocer' },
            { word: 'you.', translation: 'tú' },
          ],
          answer: 'Nice',
          sentenceTranslation: 'Mucho gusto.',
        },
        {
          id: 14,
          before: [
            { word: 'How', translation: 'cómo' },
          ],
          after: [
            { word: 'are', translation: 'hay / son' },
            { word: 'you?', translation: 'tú' },
          ],
          answer: 'old',
          sentenceTranslation: '¿Cuántos años tienes?',
        },
        {
          id: 15,
          before: [
            { word: 'I’m', translation: 'yo soy / estoy' },
            { word: 'twenty-five', translation: 'veinticinco' },
            { word: 'years', translation: 'años' },
          ],
          after: [],
          answer: 'old',
          sentenceTranslation: 'Tengo veinticinco años.',
        },
        {
          id: 16,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'thirty', translation: 'treinta' },
            { word: 'years', translation: 'años' },
            { word: 'old.', translation: 'años (de edad)' },
          ],
          answer: 'is',
          sentenceTranslation: 'Ella tiene treinta años.',
        },
        {
          id: 17,
          before: [
            { word: 'See', translation: 'ver' },
            { word: 'you', translation: 'tú' },
          ],
          after: [],
          answer: 'tomorrow',
          sentenceTranslation: '¡Nos vemos mañana!',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 18,
          tokens: [
            { id: 'q18-good', word: 'Good', translation: 'buenos' },
            { id: 'q18-morning', word: 'morning,', translation: 'mañana' },
            { id: 'q18-how', word: 'how', translation: 'cómo' },
            { id: 'q18-are', word: 'are', translation: 'hay / son' },
            { id: 'q18-you', word: 'you?', translation: 'tú' },
          ],
          correctOrder: ['q18-good', 'q18-morning', 'q18-how', 'q18-are', 'q18-you'],
          sentenceTranslation: 'Buenos días, ¿cómo estás?',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-im', word: 'I’m', translation: 'yo soy / estoy' },
            { id: 'q19-fine', word: 'fine,', translation: 'bien' },
            { id: 'q19-thanks', word: 'thanks.', translation: 'gracias' },
          ],
          correctOrder: ['q19-im', 'q19-fine', 'q19-thanks'],
          sentenceTranslation: 'Estoy bien, gracias.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-how', word: 'How', translation: 'cómo' },
            { id: 'q20-old', word: 'old', translation: 'años (de edad)' },
            { id: 'q20-are', word: 'are', translation: 'hay / son' },
            { id: 'q20-you', word: 'you?', translation: 'tú' },
          ],
          correctOrder: ['q20-how', 'q20-old', 'q20-are', 'q20-you'],
          sentenceTranslation: '¿Cuántos años tienes?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-she', word: 'She', translation: 'ella' },
            { id: 'q21-is', word: 'is', translation: 'es' },
            { id: 'q21-thirty', word: 'thirty', translation: 'treinta' },
            { id: 'q21-years', word: 'years', translation: 'años' },
            { id: 'q21-old', word: 'old.', translation: 'años (de edad)' },
          ],
          correctOrder: ['q21-she', 'q21-is', 'q21-thirty', 'q21-years', 'q21-old'],
          sentenceTranslation: 'Ella tiene treinta años.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-nice', word: 'Nice', translation: 'gusto' },
            { id: 'q22-to', word: 'to', translation: 'a' },
            { id: 'q22-meet', word: 'meet', translation: 'conocer' },
            { id: 'q22-you', word: 'you.', translation: 'tú' },
          ],
          correctOrder: ['q22-nice', 'q22-to', 'q22-meet', 'q22-you'],
          sentenceTranslation: 'Mucho gusto.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-see', word: 'See', translation: 'ver' },
            { id: 'q23-you', word: 'you', translation: 'tú' },
            {
              id: 'q23-tomorrow',
              word: 'tomorrow.',
              translation: 'mañana',
            },
          ],
          correctOrder: ['q23-see', 'q23-you', 'q23-tomorrow'],
          sentenceTranslation: 'Nos vemos mañana.',
        },
      ],
    },
  ],
};

export default lessonA1007;
