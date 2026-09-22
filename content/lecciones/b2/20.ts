import type { LessonContent } from '../types';

const lessonB2020: LessonContent = {
  level: 'b2',
  number: 20,
  title: 'Cleft sentences y énfasis',
  subtitle: 'Aprende a poner énfasis con What I need is..., It was... who... y did/does/do.',
  videoTitle: 'Cleft sentences y énfasis',
  videoDescription: 'En este video verás las oraciones hendidas (wh-cleft e it-cleft), All I want is..., y el énfasis con do, does y did.',
  objective: 'Al terminar, podrás enfatizar una parte de la oración usando cleft sentences y el auxiliar do.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'What, who, that o is',
      instructions: 'Escribe la palabra que falta: what, who, that, is o did.',
      questions: [
        {
          id: 1,
          before: [],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'need', translation: 'necesito' },
            { word: 'is', translation: 'es / está' },
            { word: 'a', translation: 'un/una' },
            { word: 'holiday.', translation: 'vacaciones' },
          ],
          answer: 'What',
          sentenceTranslation: 'Lo que necesito son unas vacaciones.',
        },
        {
          id: 2,
          before: [
            { word: 'It', translation: 'eso' },
            { word: 'was', translation: 'fue' },
            { word: 'John', translation: 'John' },
          ],
          after: [
            { word: 'broke', translation: 'rompió' },
            { word: 'the', translation: 'el/la' },
            { word: 'window.', translation: 'ventana' },
          ],
          answer: 'who',
          sentenceTranslation: 'Fue John quien rompió la ventana.',
        },
        {
          id: 3,
          before: [
            { word: 'All', translation: 'todo' },
            { word: 'I', translation: 'yo' },
            { word: 'want', translation: 'quiero' },
          ],
          after: [
            { word: 'peace.', translation: 'paz' },
          ],
          answer: 'is',
          sentenceTranslation: 'Todo lo que quiero es paz.',
        },
        {
          id: 4,
          before: [
            { word: 'It', translation: 'eso' },
            { word: 'was', translation: 'fue' },
            { word: 'in', translation: 'en' },
            { word: 'Paris', translation: 'París' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'met.', translation: 'conocimos' },
          ],
          answer: 'that',
          sentenceTranslation: 'Fue en París donde nos conocimos.',
        },
        {
          id: 5,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'reason', translation: 'razón' },
          ],
          after: [
            { word: 'I', translation: 'yo' },
            { word: 'called', translation: 'llamado' },
            { word: 'is', translation: 'es / está' },
            { word: 'simple.', translation: 'simple' },
          ],
          answer: 'why',
          sentenceTranslation: 'La razón por la que llamé es simple.',
        },
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'tell', translation: 'decir' },
            { word: 'you', translation: 'tú' },
            { word: 'about', translation: 'sobre' },
            { word: 'it!', translation: 'eso' },
          ],
          answer: 'did',
          sentenceTranslation: '¡Sí te lo dije!',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'know', translation: 'sabía' },
            { word: 'the', translation: 'el/la' },
            { word: 'answer.', translation: 'contestar' },
          ],
          answer: 'does',
          sentenceTranslation: 'Ella sí sabe la respuesta.',
        },
        {
          id: 8,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'she', translation: 'ella' },
            { word: 'wants', translation: 'quiere' },
          ],
          after: [
            { word: 'more', translation: 'más' },
            { word: 'time.', translation: 'hora' },
          ],
          answer: 'is',
          sentenceTranslation: 'Lo que ella quiere es más tiempo.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Más cleft sentences',
      instructions: 'Escribe la palabra que falta: is, that, where, do o who.',
      questions: [
        {
          id: 9,
          before: [
            { word: 'What', translation: 'qué' },
            { word: 'annoys', translation: 'molesta' },
            { word: 'me', translation: 'me' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'noise.', translation: 'ruido' },
          ],
          answer: 'is',
          sentenceTranslation: 'Lo que me molesta es el ruido.',
        },
        {
          id: 10,
          before: [
            { word: 'It', translation: 'eso' },
            { word: 'was', translation: 'fue' },
            { word: 'the', translation: 'el/la' },
            { word: 'noise', translation: 'ruido' },
          ],
          after: [
            { word: 'woke', translation: 'despertó' },
            { word: 'me.', translation: 'me' },
          ],
          answer: 'that',
          sentenceTranslation: 'Fue el ruido lo que me despertó.',
        },
        {
          id: 11,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'place', translation: 'lugar' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'met', translation: 'conocimos' },
            { word: 'was', translation: 'fue' },
            { word: 'a', translation: 'un/una' },
            { word: 'café.', translation: 'café' },
          ],
          answer: 'where',
          sentenceTranslation: 'El lugar donde nos conocimos fue un café.',
        },
        {
          id: 12,
          before: [],
          after: [
            { word: 'sit', translation: 'siéntate' },
            { word: 'down!', translation: 'por' },
          ],
          answer: 'Do',
          sentenceTranslation: '¡Siéntate, por favor!',
        },
        {
          id: 13,
          before: [
            { word: 'It', translation: 'eso' },
            { word: 'wasn’t', translation: 'no fui' },
            { word: 'me', translation: 'me' },
          ],
          after: [
            { word: 'said', translation: 'dijo' },
            { word: 'that.', translation: 'que' },
          ],
          answer: 'who',
          sentenceTranslation: 'No fui yo quien dijo eso.',
        },
        {
          id: 14,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'thing', translation: 'cosa' },
          ],
          after: [
            { word: 'bothers', translation: 'molesta' },
            { word: 'me', translation: 'me' },
            { word: 'is', translation: 'es / está' },
            { word: 'his', translation: 'su' },
            { word: 'attitude.', translation: 'actitud' },
          ],
          answer: 'that',
          sentenceTranslation: 'Lo que me molesta es su actitud.',
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
            { id: 'q15-what', word: 'What', translation: 'qué' },
            { id: 'q15-i', word: 'I', translation: 'yo' },
            { id: 'q15-need', word: 'need', translation: 'necesito' },
            { id: 'q15-is', word: 'is', translation: 'es / está' },
            { id: 'q15-a', word: 'a', translation: 'un/una' },
            {
              id: 'q15-holiday',
              word: 'holiday.',
              translation: 'vacaciones',
            },
          ],
          correctOrder: ['q15-what', 'q15-i', 'q15-need', 'q15-is', 'q15-a', 'q15-holiday'],
          sentenceTranslation: 'Lo que necesito son unas vacaciones.',
        },
        {
          id: 16,
          tokens: [
            { id: 'q16-it', word: 'It', translation: 'eso' },
            { id: 'q16-was', word: 'was', translation: 'fue' },
            { id: 'q16-john', word: 'John', translation: 'John' },
            { id: 'q16-who', word: 'who', translation: 'quien' },
            { id: 'q16-broke', word: 'broke', translation: 'rompió' },
            { id: 'q16-the', word: 'the', translation: 'el/la' },
            { id: 'q16-window', word: 'window.', translation: 'ventana' },
          ],
          correctOrder: ['q16-it', 'q16-was', 'q16-john', 'q16-who', 'q16-broke', 'q16-the', 'q16-window'],
          sentenceTranslation: 'Fue John quien rompió la ventana.',
        },
        {
          id: 17,
          tokens: [
            { id: 'q17-all', word: 'All', translation: 'todo' },
            { id: 'q17-i', word: 'I', translation: 'yo' },
            { id: 'q17-want', word: 'want', translation: 'quiero' },
            { id: 'q17-is', word: 'is', translation: 'es / está' },
            { id: 'q17-peace', word: 'peace.', translation: 'paz' },
          ],
          correctOrder: ['q17-all', 'q17-i', 'q17-want', 'q17-is', 'q17-peace'],
          sentenceTranslation: 'Todo lo que quiero es paz.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-it', word: 'It', translation: 'eso' },
            { id: 'q18-was', word: 'was', translation: 'fue' },
            { id: 'q18-in', word: 'in', translation: 'en' },
            { id: 'q18-paris', word: 'Paris', translation: 'París' },
            { id: 'q18-that', word: 'that', translation: 'que' },
            { id: 'q18-we', word: 'we', translation: 'nosotros' },
            { id: 'q18-met', word: 'met.', translation: 'conocimos' },
          ],
          correctOrder: ['q18-it', 'q18-was', 'q18-in', 'q18-paris', 'q18-that', 'q18-we', 'q18-met'],
          sentenceTranslation: 'Fue en París donde nos conocimos.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-i', word: 'I', translation: 'yo' },
            { id: 'q19-did', word: 'did', translation: 'auxiliar' },
            { id: 'q19-tell', word: 'tell', translation: 'decir' },
            { id: 'q19-you', word: 'you', translation: 'tú' },
            { id: 'q19-about', word: 'about', translation: 'sobre' },
            { id: 'q19-the', word: 'the', translation: 'el/la' },
            {
              id: 'q19-meeting',
              word: 'meeting!',
              translation: 'encontrándome',
            },
          ],
          correctOrder: ['q19-i', 'q19-did', 'q19-tell', 'q19-you', 'q19-about', 'q19-the', 'q19-meeting'],
          sentenceTranslation: '¡Sí te dije de la reunión!',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-what', word: 'What', translation: 'qué' },
            { id: 'q20-annoys', word: 'annoys', translation: 'molesta' },
            { id: 'q20-me', word: 'me', translation: 'me' },
            { id: 'q20-is', word: 'is', translation: 'es / está' },
            { id: 'q20-the', word: 'the', translation: 'el/la' },
            { id: 'q20-noise', word: 'noise.', translation: 'ruido' },
          ],
          correctOrder: ['q20-what', 'q20-annoys', 'q20-me', 'q20-is', 'q20-the', 'q20-noise'],
          sentenceTranslation: 'Lo que me molesta es el ruido.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué se enfatiza?',
      instructions: 'Escucha la oración y elige qué parte se enfatiza.',
      questions: [
        {
          id: 21,
          audioText: 'It was John who broke the window.',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Quién lo hizo' },
            { id: 'b', text: 'Qué se rompió' },
            { id: 'c', text: 'Cuándo pasó' },
          ],
          correctOptionIds: ['a'],
          explanation: 'It was John who = énfasis en quién.',
        },
        {
          id: 22,
          audioText: 'What I need is a holiday.',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Quién lo necesita' },
            { id: 'b', text: 'Lo que se necesita' },
            { id: 'c', text: 'Dónde ocurre' },
          ],
          correctOptionIds: ['b'],
          explanation: 'What I need is = énfasis en lo que se necesita.',
        },
        {
          id: 23,
          audioText: 'It was in Paris that we met.',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Dónde se conocieron' },
            { id: 'b', text: 'Cuándo se conocieron' },
            { id: 'c', text: 'Quién los presentó' },
          ],
          correctOptionIds: ['a'],
          explanation: 'It was in Paris that = énfasis en el lugar.',
        },
        {
          id: 24,
          audioText: 'It was last year that I moved.',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Dónde se mudó' },
            { id: 'b', text: 'Cuándo se mudó' },
            { id: 'c', text: 'Por qué se mudó' },
          ],
          correctOptionIds: ['b'],
          explanation: 'It was last year that = énfasis en el tiempo.',
        },
        {
          id: 25,
          audioText: 'I did tell you about it!',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Que sí lo dijo' },
            { id: 'b', text: 'Que no lo dijo' },
            { id: 'c', text: 'A quién se lo dijo' },
          ],
          correctOptionIds: ['a'],
          explanation: 'did tell = énfasis: sí lo dije.',
        },
        {
          id: 26,
          audioText: 'What annoys me is the noise.',
          language: 'en',
          prompt: '¿Qué se enfatiza?',
          options: [
            { id: 'a', text: 'Lo que molesta' },
            { id: 'b', text: 'Quién se molesta' },
            { id: 'c', text: 'Cuándo molesta' },
          ],
          correctOptionIds: ['a'],
          explanation: 'What annoys me is = énfasis en lo que molesta.',
        },
      ],
    },
  ],
};

export default lessonB2020;
