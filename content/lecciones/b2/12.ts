import type { LessonContent } from '../types';

const lessonB2012: LessonContent = {
  level: 'b2',
  number: 12,
  title: 'Modales perfectos',
  subtitle: 'Aprende a hacer deducciones, críticas y expresar arrepentimientos sobre el pasado con modal + have + participio.',
  videoTitle: 'Modales perfectos',
  videoDescription: 'En este video verás must have, can’t have, might have, should have y needn’t have para hablar del pasado.',
  objective: 'Al terminar, podrás usar modales perfectos para deducir, criticar y expresar arrepentimiento sobre el pasado.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Elige el modal',
      instructions: 'Escribe el modal correcto: must (casi seguro), might o may (posible), could (posibilidad o oportunidad perdida) o should (crítica o arrepentimiento).',
      questions: [
        {
          id: 1,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'left', translation: 'salido' },
            { word: 'early;', translation: 'temprano' },
            { word: 'her', translation: 'su' },
            { word: 'desk', translation: 'escritorio' },
            { word: 'is', translation: 'es / está' },
            { word: 'empty.', translation: 'vacío' },
          ],
          answer: 'must',
          sentenceTranslation: 'Debió de irse temprano; su escritorio está vacío.',
        },
        {
          id: 2,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'got', translation: 'perdido' },
            { word: 'lost.', translation: 'perdido' },
          ],
          answer: 'might',
          sentenceTranslation: 'Puede que se hayan perdido.',
        },
        {
          id: 3,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'called', translation: 'llamó' },
            { word: 'me.', translation: 'me' },
          ],
          answer: 'should',
          sentenceTranslation: 'Deberías haberme llamado.',
        },
        {
          id: 4,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'won', translation: 'ganado' },
            { word: 'the', translation: 'el/la' },
            { word: 'race.', translation: 'carrera' },
          ],
          answer: 'could',
          sentenceTranslation: 'Podría haber ganado la carrera.',
        },
        {
          id: 5,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'rained', translation: 'llovido' },
            { word: 'during', translation: 'durante' },
            { word: 'the', translation: 'el/la' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'may',
          sentenceTranslation: 'Puede que haya llovido durante la noche.',
        },
        {
          id: 6,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'studied', translation: 'estudiado' },
            { word: 'more.', translation: 'más' },
          ],
          answer: 'should',
          sentenceTranslation: 'Deberíamos haber estudiado más.',
        },
        {
          id: 7,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
            { word: 'tired.', translation: 'cansado' },
          ],
          answer: 'must',
          sentenceTranslation: 'Debió de estar cansado.',
        },
        {
          id: 8,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'have', translation: 'he' },
            { word: 'taken', translation: 'tomado' },
            { word: 'the', translation: 'el/la' },
            { word: 'train.', translation: 'tren' },
          ],
          answer: 'might',
          sentenceTranslation: 'Puede que haya tomado el tren.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con el participio',
      instructions: 'Escribe el participio del verbo entre paréntesis.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'must', translation: 'debió de' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'bus.', translation: 'autobús' },
          ],
          answer: 'missed',
          hint: 'miss',
          sentenceTranslation: 'Debió de perder el autobús.',
        },
        {
          id: 10,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'might', translation: 'pudo' },
            { word: 'have', translation: 'he' },
          ],
          after: [],
          answer: 'forgotten',
          hint: 'forget',
          sentenceTranslation: 'Puede que se haya olvidado.',
        },
        {
          id: 11,
          before: [
            { word: 'You', translation: 'tú' },
            { word: 'should', translation: 'debería' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'us.', translation: 'nos' },
          ],
          answer: 'told',
          hint: 'tell',
          sentenceTranslation: 'Deberías habernos dicho.',
        },
        {
          id: 12,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'could', translation: 'podría' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'by', translation: 'por / para' },
            { word: 'car.', translation: 'carro' },
          ],
          answer: 'gone',
          hint: 'go',
          sentenceTranslation: 'Podrían haber ido en carro.',
        },
        {
          id: 13,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'must', translation: 'debió de' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'tired.', translation: 'cansado' },
          ],
          answer: 'been',
          hint: 'be',
          sentenceTranslation: 'Debió de estar cansada.',
        },
        {
          id: 14,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'should', translation: 'debería' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'earlier.', translation: 'antes' },
          ],
          answer: 'left',
          hint: 'leave',
          sentenceTranslation: 'Deberíamos haber salido antes.',
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
            { id: 'q15-must', word: 'must', translation: 'debió de' },
            { id: 'q15-have', word: 'have', translation: 'he' },
            { id: 'q15-missed', word: 'missed', translation: 'perdido' },
            { id: 'q15-the', word: 'the', translation: 'el/la' },
            { id: 'q15-bus', word: 'bus.', translation: 'autobús' },
          ],
          correctOrder: ['q15-she', 'q15-must', 'q15-have', 'q15-missed', 'q15-the', 'q15-bus'],
          sentenceTranslation: 'Debió de perder el autobús.',
        },
        {
          id: 16,
          tokens: [
            { id: 'q16-he', word: 'He', translation: 'él' },
            { id: 'q16-cant', word: 'can’t', translation: 'no puede' },
            { id: 'q16-have', word: 'have', translation: 'he' },
            {
              id: 'q16-finished',
              word: 'finished',
              translation: 'terminado',
            },
            { id: 'q16-already', word: 'already.', translation: 'ya' },
          ],
          correctOrder: ['q16-he', 'q16-cant', 'q16-have', 'q16-finished', 'q16-already'],
          sentenceTranslation: 'No puede haber terminado ya.',
        },
        {
          id: 17,
          tokens: [
            { id: 'q17-they', word: 'They', translation: 'ellos' },
            { id: 'q17-might', word: 'might', translation: 'pudo' },
            { id: 'q17-have', word: 'have', translation: 'he' },
            { id: 'q17-taken', word: 'taken', translation: 'tomado' },
            { id: 'q17-the', word: 'the', translation: 'el/la' },
            { id: 'q17-train', word: 'train.', translation: 'tren' },
          ],
          correctOrder: ['q17-they', 'q17-might', 'q17-have', 'q17-taken', 'q17-the', 'q17-train'],
          sentenceTranslation: 'Puede que hayan tomado el tren.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-you', word: 'You', translation: 'tú' },
            { id: 'q18-should', word: 'should', translation: 'debería' },
            { id: 'q18-have', word: 'have', translation: 'he' },
            { id: 'q18-called', word: 'called', translation: 'llamó' },
            { id: 'q18-me', word: 'me.', translation: 'me' },
          ],
          correctOrder: ['q18-you', 'q18-should', 'q18-have', 'q18-called', 'q18-me'],
          sentenceTranslation: 'Deberías haberme llamado.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-we', word: 'We', translation: 'nosotros' },
            {
              id: 'q19-shouldnt',
              word: 'shouldn’t',
              translation: 'no debería',
            },
            { id: 'q19-have', word: 'have', translation: 'he' },
            { id: 'q19-left', word: 'left', translation: 'salido' },
            { id: 'q19-so', word: 'so', translation: 'tan' },
            { id: 'q19-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q19-we', 'q19-shouldnt', 'q19-have', 'q19-left', 'q19-so', 'q19-late'],
          sentenceTranslation: 'No deberíamos haber salido tan tarde.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-could', word: 'could', translation: 'podría' },
            { id: 'q20-have', word: 'have', translation: 'he' },
            { id: 'q20-won', word: 'won', translation: 'ganado' },
            { id: 'q20-the', word: 'the', translation: 'el/la' },
            { id: 'q20-race', word: 'race.', translation: 'carrera' },
          ],
          correctOrder: ['q20-i', 'q20-could', 'q20-have', 'q20-won', 'q20-the', 'q20-race'],
          sentenceTranslation: 'Podría haber ganado la carrera.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué expresa?',
      instructions: 'Escucha la oración y decide si expresa certeza, imposibilidad, posibilidad o crítica/arrepentimiento.',
      questions: [
        {
          id: 21,
          audioText: 'She must have missed the bus.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['sure'],
          explanation: 'must have = casi seguro.',
        },
        {
          id: 22,
          audioText: 'He can’t have finished already.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['impossible'],
          explanation: 'can’t have = imposible.',
        },
        {
          id: 23,
          audioText: 'They might have got lost.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['possible'],
          explanation: 'might have = posible.',
        },
        {
          id: 24,
          audioText: 'You should have called me.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['regret'],
          explanation: 'should have = crítica.',
        },
        {
          id: 25,
          audioText: 'I should have studied more.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['regret'],
          explanation: 'should have = arrepentimiento.',
        },
        {
          id: 26,
          audioText: 'It can’t have been Sam.',
          language: 'en',
          prompt: '¿Qué expresa?',
          options: [
            { id: 'sure', text: 'Casi seguro (must have)' },
            { id: 'impossible', text: 'Imposible (can’t have)' },
            { id: 'possible', text: 'Posible (might/could have)' },
            {
              id: 'regret',
              text: 'Crítica o arrepentimiento (should have)',
            },
          ],
          correctOptionIds: ['impossible'],
          explanation: 'can’t have been = imposible.',
        },
      ],
    },
  ],
};

export default lessonB2012;
