import type { LessonContent } from '../types';

const lessonB2007: LessonContent = {
  level: 'b2',
  number: 7,
  title: 'Was going to y would',
  subtitle: 'Aprende a usar would para predicciones y promesas en el pasado, y a distinguirlo de was going to.',
  videoTitle: 'Was going to y would',
  videoDescription: 'En este video verás would como futuro desde el pasado, su relación con el discurso indirecto y su contraste con was going to.',
  objective: 'Al terminar, podrás usar would para predicciones y promesas en el pasado y distinguirlo de was/were going to.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Would o not',
      instructions: 'Escribe would o not para completar la oración.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'thought', translation: 'pensé' },
            { word: 'it', translation: 'eso' },
          ],
          after: [
            { word: 'rain.', translation: 'lluvia' },
          ],
          answer: 'would',
          sentenceTranslation: 'Pensé que llovería.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'said', translation: 'dijimos' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'call', translation: 'llamar' },
            { word: 'me.', translation: 'me / a mí' },
          ],
          answer: 'would',
          sentenceTranslation: 'Ella dijo que me llamaría.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'knew', translation: 'sabía' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'would',
          sentenceTranslation: 'Sabíamos que llegarían tarde.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'promised', translation: 'prometió' },
            { word: 'he', translation: 'él' },
          ],
          after: [
            { word: 'help.', translation: 'ayudar' },
          ],
          answer: 'would',
          sentenceTranslation: 'Él prometió que ayudaría.',
        },
        {
          id: 5,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'believed', translation: 'creyó' },
            { word: 'the', translation: 'el/la' },
            { word: 'plan', translation: 'plan' },
          ],
          after: [
            { word: 'work.', translation: 'trabajo' },
          ],
          answer: 'would',
          sentenceTranslation: 'Creyeron que el plan funcionaría.',
        },
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'knew', translation: 'sabía' },
            { word: 'he', translation: 'él' },
            { word: 'would', translation: 'condicional' },
          ],
          after: [
            { word: 'come.', translation: 'venir' },
          ],
          answer: 'not',
          sentenceTranslation: 'Sabía que él no vendría.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'said', translation: 'dijimos' },
            { word: 'she', translation: 'ella' },
            { word: 'would', translation: 'condicional' },
          ],
          after: [
            { word: 'tell', translation: 'decir' },
            { word: 'anyone.', translation: 'nadie' },
          ],
          answer: 'not',
          sentenceTranslation: 'Ella dijo que no le diría a nadie.',
        },
        {
          id: 8,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'promised', translation: 'prometió' },
            { word: 'they', translation: 'ellos' },
            { word: 'would', translation: 'condicional' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'not',
          sentenceTranslation: 'Prometieron que no llegarían tarde.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Del futuro al discurso indirecto',
      instructions: 'Lo que la persona dijo en futuro (will) pasa a would cuando lo cuentas en pasado. Escribe would o not.',
      questions: [
        {
          id: 9,
          before: [
            { word: '“It', translation: 'eso' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'rain.”', translation: 'lluvia' },
            { word: 'He', translation: 'él' },
            { word: 'thought', translation: 'pensé' },
            { word: 'it', translation: 'eso' },
          ],
          after: [
            { word: 'rain.', translation: 'lluvia' },
          ],
          answer: 'would',
          sentenceTranslation: '“Va a llover.” Él pensó que llovería.',
        },
        {
          id: 10,
          before: [
            { word: '“We', translation: 'nosotros' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'be', translation: 'ser / estar' },
            { word: 'late.”', translation: 'tarde' },
            { word: 'They', translation: 'ellos' },
            { word: 'said', translation: 'dijimos' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'be', translation: 'ser / estar' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'would',
          sentenceTranslation: '“Llegaremos tarde.” Dijeron que llegarían tarde.',
        },
        {
          id: 11,
          before: [
            { word: '“I', translation: 'yo' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'win.”', translation: 'ganar' },
            { word: 'She', translation: 'ella' },
            { word: 'knew', translation: 'sabía' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'win.', translation: 'ganar' },
          ],
          answer: 'would',
          sentenceTranslation: '“Voy a ganar.” Ella sabía que ganaría.',
        },
        {
          id: 12,
          before: [
            { word: '“I', translation: 'yo' },
            { word: 'won’t', translation: 'no (futuro)' },
            { word: 'tell', translation: 'decir' },
            { word: 'anyone.”', translation: 'nadie' },
            { word: 'He', translation: 'él' },
            { word: 'said', translation: 'dijimos' },
            { word: 'he', translation: 'él' },
            { word: 'would', translation: 'condicional' },
          ],
          after: [
            { word: 'tell', translation: 'decir' },
            { word: 'anyone.', translation: 'nadie' },
          ],
          answer: 'not',
          sentenceTranslation: '“No le diré a nadie.” Él dijo que no le diría a nadie.',
        },
        {
          id: 13,
          before: [
            { word: '“We', translation: 'nosotros' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'come', translation: 'venir' },
            { word: 'early.”', translation: 'temprano' },
            { word: 'They', translation: 'ellos' },
            { word: 'promised', translation: 'prometió' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'come', translation: 'venir' },
            { word: 'early.', translation: 'temprano' },
          ],
          answer: 'would',
          sentenceTranslation: '“Vendremos temprano.” Prometieron que vendrían temprano.',
        },
        {
          id: 14,
          before: [
            { word: '“I', translation: 'yo' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'pass', translation: 'aprobar' },
            { word: 'the', translation: 'el/la' },
            { word: 'exam.”', translation: 'examen' },
            { word: 'She', translation: 'ella' },
            { word: 'thought', translation: 'pensé' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'pass', translation: 'aprobar' },
            { word: 'the', translation: 'el/la' },
            { word: 'exam.', translation: 'examen' },
          ],
          answer: 'would',
          sentenceTranslation: '“Voy a aprobar el examen.” Ella pensó que aprobaría el examen.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 15,
          tokens: [
            { id: 'q15-she', word: 'She', translation: 'ella' },
            { id: 'q15-said', word: 'said', translation: 'dijimos' },
            { id: 'q15-he', word: 'he', translation: 'él' },
            { id: 'q15-would', word: 'would', translation: 'condicional' },
            { id: 'q15-help', word: 'help', translation: 'ayudar' },
            { id: 'q15-me', word: 'me.', translation: 'me / a mí' },
          ],
          correctOrder: ['q15-she', 'q15-said', 'q15-he', 'q15-would', 'q15-help', 'q15-me'],
          sentenceTranslation: 'Ella dijo que él me ayudaría.',
        },
        {
          id: 16,
          tokens: [
            { id: 'q16-i', word: 'I', translation: 'yo' },
            { id: 'q16-knew', word: 'knew', translation: 'sabía' },
            { id: 'q16-she', word: 'she', translation: 'ella' },
            { id: 'q16-would', word: 'would', translation: 'condicional' },
            { id: 'q16-win', word: 'win.', translation: 'ganar' },
          ],
          correctOrder: ['q16-i', 'q16-knew', 'q16-she', 'q16-would', 'q16-win'],
          sentenceTranslation: 'Sabía que ella ganaría.',
        },
        {
          id: 17,
          tokens: [
            { id: 'q17-i', word: 'I', translation: 'yo' },
            { id: 'q17-thought', word: 'thought', translation: 'pensé' },
            { id: 'q17-it', word: 'it', translation: 'eso' },
            { id: 'q17-would', word: 'would', translation: 'condicional' },
            { id: 'q17-rain', word: 'rain.', translation: 'lluvia' },
          ],
          correctOrder: ['q17-i', 'q17-thought', 'q17-it', 'q17-would', 'q17-rain'],
          sentenceTranslation: 'Pensé que llovería.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-i', word: 'I', translation: 'yo' },
            { id: 'q18-knew', word: 'knew', translation: 'sabía' },
            { id: 'q18-he', word: 'he', translation: 'él' },
            {
              id: 'q18-wouldnt',
              word: 'wouldn’t',
              translation: 'no (condicional)',
            },
            { id: 'q18-come', word: 'come.', translation: 'venir' },
          ],
          correctOrder: ['q18-i', 'q18-knew', 'q18-he', 'q18-wouldnt', 'q18-come'],
          sentenceTranslation: 'Sabía que él no vendría.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-did', word: 'Did', translation: 'hice' },
            { id: 'q19-you', word: 'you', translation: 'tú' },
            { id: 'q19-know', word: 'know', translation: 'saber' },
            { id: 'q19-he', word: 'he', translation: 'él' },
            { id: 'q19-would', word: 'would', translation: 'condicional' },
            { id: 'q19-leave', word: 'leave?', translation: 'irse' },
          ],
          correctOrder: ['q19-did', 'q19-you', 'q19-know', 'q19-he', 'q19-would', 'q19-leave'],
          sentenceTranslation: '¿Sabías que él se iría?',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-did', word: 'Did', translation: 'hice' },
            { id: 'q20-he', word: 'he', translation: 'él' },
            { id: 'q20-say', word: 'say', translation: 'decir' },
            { id: 'q20-she', word: 'she', translation: 'ella' },
            { id: 'q20-would', word: 'would', translation: 'condicional' },
            { id: 'q20-come', word: 'come?', translation: 'venir' },
          ],
          correctOrder: ['q20-did', 'q20-he', 'q20-say', 'q20-she', 'q20-would', 'q20-come'],
          sentenceTranslation: '¿Dijo él que ella vendría?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Plan o predicción?',
      instructions: 'Escucha la oración. Was/were going to expresa un plan o intención; would expresa una predicción o promesa.',
      questions: [
        {
          id: 21,
          audioText: 'I was going to call you, but I forgot.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['plan'],
          explanation: 'was going to expresa un plan que tenías.',
        },
        {
          id: 22,
          audioText: 'I knew she would pass the exam.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['would'],
          explanation: 'I knew she would... es una predicción.',
        },
        {
          id: 23,
          audioText: 'He said he would help me.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['would'],
          explanation: 'He said he would... es una promesa contada en pasado.',
        },
        {
          id: 24,
          audioText: 'They were going to move, but they changed their minds.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['plan'],
          explanation: 'were going to expresa un plan que cambió.',
        },
        {
          id: 25,
          audioText: 'She promised she would be there.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['would'],
          explanation: 'promised she would... es una promesa.',
        },
        {
          id: 26,
          audioText: 'We were going to eat out, but the restaurant was closed.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'plan', text: 'Un plan o intención (was going to)' },
            { id: 'would', text: 'Una predicción o promesa (would)' },
          ],
          correctOptionIds: ['plan'],
          explanation: 'were going to ..., but ... es un plan que no se cumplió.',
        },
      ],
    },
  ],
};

export default lessonB2007;
