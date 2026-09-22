import type { LessonContent } from '../types';

const lessonB2019: LessonContent = {
  level: 'b2',
  number: 19,
  title: 'Inversión tras adverbios negativos',
  subtitle: 'Aprende a invertir el auxiliar y el sujeto después de adverbios negativos como never, rarely, hardly y not only.',
  videoTitle: 'Inversión tras adverbios negativos',
  videoDescription: 'En este video verás Never have I..., Rarely does she..., Hardly had... when, No sooner... than y Not only... but also.',
  objective: 'Al terminar, podrás formar oraciones con inversión tras adverbios negativos para dar énfasis o formalidad.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Elige el auxiliar',
      instructions: 'Escribe el auxiliar correcto (have, has, do, does, did, had, is, should) que va antes del sujeto.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'Never', translation: 'nunca' },
          ],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'felt', translation: 'sentido' },
            { word: 'so', translation: 'tan' },
            { word: 'happy.', translation: 'feliz' },
          ],
          answer: 'have',
          sentenceTranslation: 'Nunca me he sentido tan feliz.',
        },
        {
          id: 2,
          before: [
            { word: 'Rarely', translation: 'raramente' },
          ],
          after: [
            { word: 'he', translation: 'él' },
            { word: 'arrive', translation: 'llega' },
            { word: 'late.', translation: 'tarde' },
          ],
          answer: 'does',
          sentenceTranslation: 'Rara vez llega tarde.',
        },
        {
          id: 3,
          before: [
            { word: 'Seldom', translation: 'rara vez' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'eat', translation: 'como' },
            { word: 'out.', translation: 'fuera' },
          ],
          answer: 'do',
          sentenceTranslation: 'Rara vez comemos fuera.',
        },
        {
          id: 4,
          before: [
            { word: 'Little', translation: 'poco' },
          ],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'know', translation: 'sabía' },
            { word: 'the', translation: 'el/la' },
            { word: 'truth.', translation: 'verdad' },
          ],
          answer: 'did',
          sentenceTranslation: 'Poco sabía ella la verdad.',
        },
        {
          id: 5,
          before: [
            { word: 'Hardly', translation: 'apenas' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'arrived', translation: 'llegamos' },
            { word: 'when', translation: 'cuando' },
            { word: 'it', translation: 'eso' },
            { word: 'rained.', translation: 'llovió' },
          ],
          answer: 'had',
          sentenceTranslation: 'Apenas habíamos llegado cuando llovió.',
        },
        {
          id: 6,
          before: [
            { word: 'No', translation: 'no' },
            { word: 'sooner', translation: 'antes' },
            { word: 'had', translation: 'había' },
            { word: 'she', translation: 'ella' },
            { word: 'left', translation: 'izquierda' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'phone', translation: 'teléfono' },
            { word: 'rang.', translation: 'sonó' },
          ],
          answer: 'than',
          sentenceTranslation: 'Apenas se fue cuando sonó el teléfono.',
        },
        {
          id: 7,
          before: [
            { word: 'Not', translation: 'no' },
            { word: 'only', translation: 'solo' },
          ],
          after: [
            { word: 'she', translation: 'ella' },
            { word: 'smart,', translation: 'inteligente' },
            { word: 'but', translation: 'pero' },
            { word: 'she', translation: 'ella' },
            { word: 'is', translation: 'es / está' },
            { word: 'also', translation: 'también' },
            { word: 'funny.', translation: 'gracioso' },
          ],
          answer: 'is',
          sentenceTranslation: 'No solo es inteligente, sino que también es graciosa.',
        },
        {
          id: 8,
          before: [
            { word: 'Under', translation: 'bajo' },
            { word: 'no', translation: 'no' },
            { word: 'circumstances', translation: 'circunstancias' },
          ],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'open', translation: 'abrir' },
            { word: 'it.', translation: 'eso' },
          ],
          answer: 'should',
          sentenceTranslation: 'Bajo ninguna circunstancia debes abrirlo.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Palabras que completan la estructura',
      instructions: 'Escribe la palabra que falta: also, then, until, when o el participio.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'Not', translation: 'no' },
            { word: 'only', translation: 'solo' },
            { word: 'did', translation: 'auxiliar' },
            { word: 'he', translation: 'él' },
            { word: 'lie,', translation: 'mintió' },
            { word: 'but', translation: 'pero' },
            { word: 'he', translation: 'él' },
          ],
          after: [
            { word: 'stole.', translation: 'robó' },
          ],
          answer: 'also',
          sentenceTranslation: 'No solo mintió, sino que también robó.',
        },
        {
          id: 10,
          before: [
            { word: 'Only', translation: 'solo' },
          ],
          after: [
            { word: 'did', translation: 'auxiliar' },
            { word: 'I', translation: 'yo' },
            { word: 'understand.', translation: 'entender' },
          ],
          answer: 'then',
          sentenceTranslation: 'Solo entonces entendí.',
        },
        {
          id: 11,
          before: [
            { word: 'Not', translation: 'no' },
          ],
          after: [
            { word: 'midnight', translation: 'medianoche' },
            { word: 'did', translation: 'auxiliar' },
            { word: 'they', translation: 'ellos' },
            { word: 'arrive.', translation: 'llega' },
          ],
          answer: 'until',
          sentenceTranslation: 'No fue hasta medianoche que llegaron.',
        },
        {
          id: 12,
          before: [
            { word: 'Hardly', translation: 'apenas' },
            { word: 'had', translation: 'había' },
            { word: 'we', translation: 'nosotros' },
            { word: 'arrived', translation: 'llegamos' },
          ],
          after: [
            { word: 'it', translation: 'eso' },
            { word: 'rained.', translation: 'llovió' },
          ],
          answer: 'when',
          sentenceTranslation: 'Apenas habíamos llegado cuando llovió.',
        },
        {
          id: 13,
          before: [
            { word: 'Rarely', translation: 'raramente' },
            { word: 'have', translation: 'tengo' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'such', translation: 'tal' },
            { word: 'nonsense.', translation: 'tontería' },
          ],
          answer: 'heard',
          hint: 'hear',
          sentenceTranslation: 'Rara vez he oído tal tontería.',
        },
        {
          id: 14,
          before: [
            { word: 'Never', translation: 'nunca' },
            { word: 'had', translation: 'había' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'snow.', translation: 'nieve' },
          ],
          answer: 'seen',
          hint: 'see',
          sentenceTranslation: 'Nunca habían visto nieve.',
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
            { id: 'q15-never', word: 'Never', translation: 'nunca' },
            { id: 'q15-have', word: 'have', translation: 'tengo' },
            { id: 'q15-i', word: 'I', translation: 'yo' },
            { id: 'q15-seen', word: 'seen', translation: 'visto' },
            { id: 'q15-such', word: 'such', translation: 'tal' },
            { id: 'q15-a', word: 'a', translation: 'un/una' },
            { id: 'q15-place', word: 'place.', translation: 'lugar' },
          ],
          correctOrder: ['q15-never', 'q15-have', 'q15-i', 'q15-seen', 'q15-such', 'q15-a', 'q15-place'],
          sentenceTranslation: 'Nunca he visto un lugar así.',
        },
        {
          id: 16,
          tokens: [
            { id: 'q16-rarely', word: 'Rarely', translation: 'raramente' },
            { id: 'q16-does', word: 'does', translation: 'auxiliar' },
            { id: 'q16-he', word: 'he', translation: 'él' },
            { id: 'q16-arrive', word: 'arrive', translation: 'llega' },
            { id: 'q16-late', word: 'late.', translation: 'tarde' },
          ],
          correctOrder: ['q16-rarely', 'q16-does', 'q16-he', 'q16-arrive', 'q16-late'],
          sentenceTranslation: 'Rara vez llega tarde.',
        },
        {
          id: 17,
          tokens: [
            { id: 'q17-hardly', word: 'Hardly', translation: 'apenas' },
            { id: 'q17-had', word: 'had', translation: 'había' },
            { id: 'q17-we', word: 'we', translation: 'nosotros' },
            { id: 'q17-arrived', word: 'arrived', translation: 'llegamos' },
            { id: 'q17-when', word: 'when', translation: 'cuando' },
            { id: 'q17-it', word: 'it', translation: 'eso' },
            { id: 'q17-rained', word: 'rained.', translation: 'llovió' },
          ],
          correctOrder: ['q17-hardly', 'q17-had', 'q17-we', 'q17-arrived', 'q17-when', 'q17-it', 'q17-rained'],
          sentenceTranslation: 'Apenas habíamos llegado cuando llovió.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-not', word: 'Not', translation: 'no' },
            { id: 'q18-only', word: 'only', translation: 'solo' },
            { id: 'q18-is', word: 'is', translation: 'es / está' },
            { id: 'q18-she', word: 'she', translation: 'ella' },
            { id: 'q18-smart', word: 'smart,', translation: 'inteligente' },
            { id: 'q18-but', word: 'but', translation: 'pero' },
            { id: 'q18-she-2', word: 'she', translation: 'ella' },
            { id: 'q18-is-2', word: 'is', translation: 'es / está' },
            { id: 'q18-also', word: 'also', translation: 'también' },
            { id: 'q18-funny', word: 'funny.', translation: 'gracioso' },
          ],
          correctOrder: ['q18-not', 'q18-only', 'q18-is', 'q18-she', 'q18-smart', 'q18-but', 'q18-she-2', 'q18-is-2', 'q18-also', 'q18-funny'],
          sentenceTranslation: 'No solo es inteligente, sino graciosa.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-under', word: 'Under', translation: 'bajo' },
            { id: 'q19-no', word: 'no', translation: 'no' },
            {
              id: 'q19-circumstances',
              word: 'circumstances',
              translation: 'circunstancias',
            },
            { id: 'q19-should', word: 'should', translation: 'debes' },
            { id: 'q19-you', word: 'you', translation: 'tú' },
            { id: 'q19-open', word: 'open', translation: 'abrir' },
            { id: 'q19-it', word: 'it.', translation: 'eso' },
          ],
          correctOrder: ['q19-under', 'q19-no', 'q19-circumstances', 'q19-should', 'q19-you', 'q19-open', 'q19-it'],
          sentenceTranslation: 'Bajo ninguna circunstancia debes abrirlo.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-only', word: 'Only', translation: 'solo' },
            { id: 'q20-then', word: 'then', translation: 'entonces' },
            { id: 'q20-did', word: 'did', translation: 'auxiliar' },
            { id: 'q20-i', word: 'I', translation: 'yo' },
            {
              id: 'q20-understand',
              word: 'understand.',
              translation: 'entender',
            },
          ],
          correctOrder: ['q20-only', 'q20-then', 'q20-did', 'q20-i', 'q20-understand'],
          sentenceTranslation: 'Solo entonces entendí.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Cuál es la versión normal?',
      instructions: 'Escucha la oración con inversión y elige la versión sin inversión.',
      questions: [
        {
          id: 21,
          audioText: 'Never have I felt so happy.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'I have never felt so happy.' },
            { id: 'b', text: 'I never felt so happy.' },
          ],
          correctOptionIds: ['a'],
          explanation: 'Never have I = I have never.',
        },
        {
          id: 22,
          audioText: 'Rarely does he arrive late.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'He rarely arrived late.' },
            { id: 'b', text: 'He rarely arrives late.' },
          ],
          correctOptionIds: ['b'],
          explanation: 'Rarely does he arrive = he rarely arrives.',
        },
        {
          id: 23,
          audioText: 'Hardly had we arrived when it rained.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'We had hardly arrived when it rained.' },
            { id: 'b', text: 'We hardly arrive when it rains.' },
          ],
          correctOptionIds: ['a'],
          explanation: 'Hardly had we arrived = we had hardly arrived.',
        },
        {
          id: 24,
          audioText: 'Little did she know the truth.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'She knew little the truth.' },
            { id: 'b', text: 'She knew little about the truth.' },
          ],
          correctOptionIds: ['b'],
          explanation: 'Little did she know = she knew little.',
        },
        {
          id: 25,
          audioText: 'Not only did he lie, but he also stole.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'He not only lied but also stole.' },
            { id: 'b', text: 'He lied and did not steal.' },
          ],
          correctOptionIds: ['a'],
          explanation: 'Not only did he lie = he not only lied.',
        },
        {
          id: 26,
          audioText: 'Seldom do we eat out.',
          language: 'en',
          prompt: '¿Cuál es la versión normal?',
          options: [
            { id: 'a', text: 'We seldom eat out.' },
            { id: 'b', text: 'We seldom ate out.' },
          ],
          correctOptionIds: ['a'],
          explanation: 'Seldom do we eat = we seldom eat.',
        },
      ],
    },
  ],
};

export default lessonB2019;
