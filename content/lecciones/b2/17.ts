import type { LessonContent } from '../types';

const lessonB2017: LessonContent = {
  level: 'b2',
  number: 17,
  title: 'Reporting verbs: deny, admit, insist y recommend',
  subtitle: 'Aprende los verbos de reporte y los patrones que los acompañan: -ing, that, to y preposiciones.',
  videoTitle: 'Reporting verbs',
  videoDescription: 'En este video verás deny, admit, insist, recommend, suggest y otros verbos de reporte con sus patrones.',
  objective: 'Al terminar, podrás usar reporting verbs con el patrón correcto para resumir lo que otros dijeron.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Verbo + -ing',
      instructions: 'Escribe el verbo con -ing para completar el patrón.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'denied', translation: 'negó' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'money.', translation: 'dinero' },
          ],
          answer: 'taking',
          hint: 'take',
          sentenceTranslation: 'Negó haber tomado el dinero.',
        },
        {
          id: 2,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'admitted', translation: 'admitió' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'mistake.', translation: 'error' },
          ],
          answer: 'making',
          hint: 'make',
          sentenceTranslation: 'Admitió haber cometido un error.',
        },
        {
          id: 3,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'insisted', translation: 'insistió' },
            { word: 'on', translation: 'sobre' },
          ],
          after: [],
          answer: 'paying',
          hint: 'pay',
          sentenceTranslation: 'Insistió en pagar.',
        },
        {
          id: 4,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'recommend', translation: 'recomiendo' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'soup.', translation: 'sopa' },
          ],
          answer: 'trying',
          hint: 'try',
          sentenceTranslation: 'Recomiendo probar la sopa.',
        },
        {
          id: 5,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'suggested', translation: 'sugirió' },
          ],
          after: [
            { word: 'by', translation: '' },
            { word: 'train.', translation: 'tren' },
          ],
          answer: 'going',
          hint: 'go',
          sentenceTranslation: 'Sugirió ir en tren.',
        },
        {
          id: 6,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'apologized', translation: 'se disculpó' },
            { word: 'for', translation: 'por' },
          ],
          after: [
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'being',
          hint: 'be',
          sentenceTranslation: 'Se disculpó por llegar tarde.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'accused', translation: 'acusó' },
            { word: 'him', translation: 'lo' },
            { word: 'of', translation: 'de' },
          ],
          after: [],
          answer: 'lying',
          hint: 'lie',
          sentenceTranslation: 'Lo acusó de mentir.',
        },
        {
          id: 8,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'thanked', translation: 'agradecimos' },
            { word: 'her', translation: 'su' },
            { word: 'for', translation: 'por' },
          ],
          after: [],
          answer: 'helping',
          hint: 'help',
          sentenceTranslation: 'Le agradecimos por ayudar.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Preposición o to',
      instructions: 'Escribe la palabra que falta: on, for, of o to.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'insisted', translation: 'insistió' },
          ],
          after: [
            { word: 'paying.', translation: 'pagar' },
          ],
          answer: 'on',
          sentenceTranslation: 'Insistió en pagar.',
        },
        {
          id: 10,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'apologized', translation: 'se disculpó' },
          ],
          after: [
            { word: 'being', translation: 'llegar' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'for',
          sentenceTranslation: 'Se disculpó por llegar tarde.',
        },
        {
          id: 11,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'accused', translation: 'acusó' },
            { word: 'him', translation: 'lo' },
          ],
          after: [
            { word: 'lying.', translation: 'mentir' },
          ],
          answer: 'of',
          sentenceTranslation: 'Lo acusó de mentir.',
        },
        {
          id: 12,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'refused', translation: 'rechazaron' },
          ],
          after: [
            { word: 'sign.', translation: 'firmar' },
          ],
          answer: 'to',
          sentenceTranslation: 'Se negaron a firmar.',
        },
        {
          id: 13,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'advised', translation: 'aconsejó' },
            { word: 'him', translation: 'lo' },
          ],
          after: [
            { word: 'see', translation: 'ver' },
            { word: 'a', translation: 'un/una' },
            { word: 'doctor.', translation: 'médico' },
          ],
          answer: 'to',
          sentenceTranslation: 'Le aconsejó ver a un médico.',
        },
        {
          id: 14,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'thanked', translation: 'agradecimos' },
            { word: 'her', translation: 'su' },
          ],
          after: [
            { word: 'helping.', translation: 'ayudar' },
          ],
          answer: 'for',
          sentenceTranslation: 'Le agradecimos por ayudar.',
        },
        {
          id: 15,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'promised', translation: 'prometió' },
          ],
          after: [
            { word: 'help.', translation: 'ayudar' },
          ],
          answer: 'to',
          sentenceTranslation: 'Prometió ayudar.',
        },
        {
          id: 16,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'blamed', translation: 'culparon' },
            { word: 'me', translation: 'me' },
          ],
          after: [
            { word: 'losing', translation: 'perderlo' },
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'for',
          sentenceTranslation: 'Me culparon por perderlo.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 17,
          tokens: [
            { id: 'q17-he', word: 'He', translation: 'él' },
            { id: 'q17-denied', word: 'denied', translation: 'negó' },
            { id: 'q17-taking', word: 'taking', translation: 'tomar' },
            { id: 'q17-the', word: 'the', translation: 'el/la' },
            { id: 'q17-money', word: 'money.', translation: 'dinero' },
          ],
          correctOrder: ['q17-he', 'q17-denied', 'q17-taking', 'q17-the', 'q17-money'],
          sentenceTranslation: 'Negó haber tomado el dinero.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-she', word: 'She', translation: 'ella' },
            {
              id: 'q18-admitted',
              word: 'admitted',
              translation: 'admitió',
            },
            { id: 'q18-making', word: 'making', translation: 'cometer' },
            { id: 'q18-a', word: 'a', translation: 'un/una' },
            { id: 'q18-mistake', word: 'mistake.', translation: 'error' },
          ],
          correctOrder: ['q18-she', 'q18-admitted', 'q18-making', 'q18-a', 'q18-mistake'],
          sentenceTranslation: 'Admitió haber cometido un error.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-she', word: 'She', translation: 'ella' },
            {
              id: 'q19-insisted',
              word: 'insisted',
              translation: 'insistió',
            },
            { id: 'q19-on', word: 'on', translation: 'sobre' },
            { id: 'q19-paying', word: 'paying.', translation: 'pagar' },
          ],
          correctOrder: ['q19-she', 'q19-insisted', 'q19-on', 'q19-paying'],
          sentenceTranslation: 'Insistió en pagar.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-i', word: 'I', translation: 'yo' },
            {
              id: 'q20-recommend',
              word: 'recommend',
              translation: 'recomiendo',
            },
            { id: 'q20-trying', word: 'trying', translation: 'probar' },
            { id: 'q20-the', word: 'the', translation: 'el/la' },
            { id: 'q20-soup', word: 'soup.', translation: 'sopa' },
          ],
          correctOrder: ['q20-i', 'q20-recommend', 'q20-trying', 'q20-the', 'q20-soup'],
          sentenceTranslation: 'Recomiendo probar la sopa.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-he', word: 'He', translation: 'él' },
            {
              id: 'q21-apologized',
              word: 'apologized',
              translation: 'se disculpó',
            },
            { id: 'q21-for', word: 'for', translation: 'por' },
            { id: 'q21-being', word: 'being', translation: 'llegar' },
            { id: 'q21-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q21-he', 'q21-apologized', 'q21-for', 'q21-being', 'q21-late'],
          sentenceTranslation: 'Se disculpó por llegar tarde.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-they', word: 'They', translation: 'ellos' },
            {
              id: 'q22-refused',
              word: 'refused',
              translation: 'rechazaron',
            },
            { id: 'q22-to', word: 'to', translation: 'a' },
            { id: 'q22-sign', word: 'sign', translation: 'firmar' },
            { id: 'q22-the', word: 'the', translation: 'el/la' },
            {
              id: 'q22-contract',
              word: 'contract.',
              translation: 'contrato',
            },
          ],
          correctOrder: ['q22-they', 'q22-refused', 'q22-to', 'q22-sign', 'q22-the', 'q22-contract'],
          sentenceTranslation: 'Se negaron a firmar el contrato.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué patrón sigue?',
      instructions: 'Escucha la oración y elige el patrón que sigue el verbo de reporte.',
      questions: [
        {
          id: 23,
          audioText: 'She admitted making a mistake.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['ing'],
          explanation: 'admit + -ing.',
        },
        {
          id: 24,
          audioText: 'They refused to pay.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['to'],
          explanation: 'refuse + to.',
        },
        {
          id: 25,
          audioText: 'She advised him to rest.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['person'],
          explanation: 'advise + persona + to.',
        },
        {
          id: 26,
          audioText: 'He apologized for being late.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['ing'],
          explanation: 'apologize for + -ing.',
        },
        {
          id: 27,
          audioText: 'I recommend trying it.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['ing'],
          explanation: 'recommend + -ing.',
        },
        {
          id: 28,
          audioText: 'He promised to help.',
          language: 'en',
          prompt: '¿Qué patrón?',
          options: [
            { id: 'ing', text: 'Verbo + -ing' },
            { id: 'to', text: 'Verbo + to + verbo' },
            { id: 'person', text: 'Verbo + persona + to + verbo' },
          ],
          correctOptionIds: ['to'],
          explanation: 'promise + to.',
        },
      ],
    },
  ],
};

export default lessonB2017;
