import type { LessonContent } from '../types';

const lessonB2021: LessonContent = {
  level: 'b2',
  number: 21,
  title: 'Nominalización',
  subtitle: 'Aprende a transformar verbos y adjetivos en sustantivos para un estilo más formal y académico.',
  videoTitle: 'Nominalización',
  videoDescription: 'En este video verás cómo convertir verbos y adjetivos en sustantivos (decide → decision, improve → improvement) para escribir de forma más formal.',
  objective: 'Al terminar, podrás transformar verbos y adjetivos en sustantivos para escribir con un estilo más formal.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Verbo a sustantivo',
      instructions: 'Escribe el sustantivo que corresponde al verbo entre paréntesis.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'Their', translation: 'su' },
            { word: 'quick', translation: 'rápida' },
          ],
          after: [
            { word: 'surprised', translation: 'sorprendió' },
            { word: 'us.', translation: 'nos' },
          ],
          answer: 'decision',
          hint: 'decide',
          sentenceTranslation: 'Su decisión rápida nos sorprendió.',
        },
        {
          id: 2,
          before: [
            { word: 'The', translation: 'el/la' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'the', translation: 'el/la' },
            { word: 'company', translation: 'compañía' },
            { word: 'created', translation: 'creó' },
            { word: 'jobs.', translation: 'empleos' },
          ],
          answer: 'expansion',
          hint: 'expand',
          sentenceTranslation: 'La expansión de la empresa creó empleos.',
        },
        {
          id: 3,
          before: [
            { word: 'Our', translation: 'nuestro' },
          ],
          after: [
            { word: 'taught', translation: 'enseñó' },
            { word: 'us', translation: 'nos' },
            { word: 'a', translation: 'un/una' },
            { word: 'lot.', translation: 'mucho' },
          ],
          answer: 'failure',
          hint: 'fail',
          sentenceTranslation: 'Nuestro fracaso nos enseñó mucho.',
        },
        {
          id: 4,
          before: [
            { word: 'On', translation: 'puesto' },
            { word: 'his', translation: 'su' },
          ],
          after: [
            { word: 'we', translation: 'nosotros' },
            { word: 'left.', translation: 'nos fuimos' },
          ],
          answer: 'arrival',
          hint: 'arrive',
          sentenceTranslation: 'A su llegada, nos fuimos.',
        },
        {
          id: 5,
          before: [
            { word: 'The', translation: 'el/la' },
          ],
          after: [
            { word: 'of', translation: 'de' },
            { word: 'new', translation: 'nueva' },
            { word: 'laws', translation: 'leyes' },
            { word: 'reduced', translation: 'redujo' },
            { word: 'crime.', translation: 'crimen' },
          ],
          answer: 'introduction',
          hint: 'introduce',
          sentenceTranslation: 'La introducción de nuevas leyes redujo el crimen.',
        },
        {
          id: 6,
          before: [
            { word: 'A', translation: 'un/una' },
            { word: 'sharp', translation: 'fuerte' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'prices', translation: 'precios' },
            { word: 'worried', translation: 'preocupó' },
            { word: 'consumers.', translation: 'consumidores' },
          ],
          answer: 'rise',
          hint: 'rise',
          sentenceTranslation: 'Una fuerte subida de precios preocupó a los consumidores.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Adjetivo a sustantivo',
      instructions: 'Escribe el sustantivo que corresponde al adjetivo entre paréntesis.',
      questions: [
        {
          id: 7,
          before: [
            { word: 'Her', translation: 'su' },
          ],
          after: [
            { word: 'is', translation: 'está' },
            { word: 'clear.', translation: 'clara' },
          ],
          answer: 'ability',
          hint: 'able',
          sentenceTranslation: 'Su capacidad es clara.',
        },
        {
          id: 8,
          before: [
            { word: 'Its', translation: 'su' },
          ],
          after: [
            { word: 'is', translation: 'está' },
            { word: 'obvious.', translation: 'evidente' },
          ],
          answer: 'importance',
          hint: 'important',
          sentenceTranslation: 'Su importancia es evidente.',
        },
        {
          id: 9,
          before: [
            { word: 'The', translation: 'el/la' },
          ],
          after: [
            { word: 'was', translation: 'estaba' },
            { word: 'significant.', translation: 'significativa' },
          ],
          answer: 'improvement',
          hint: 'improve',
          sentenceTranslation: 'La mejora fue significativa.',
        },
        {
          id: 10,
          before: [
            { word: 'Their', translation: 'su' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'cooperate', translation: 'cooperar' },
            { word: 'delayed', translation: 'retrasó' },
            { word: 'the', translation: 'el/la' },
            { word: 'project.', translation: 'proyecto' },
          ],
          answer: 'refusal',
          hint: 'refuse',
          sentenceTranslation: 'Su negativa a cooperar retrasó el proyecto.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Cuál es el sustantivo correcto?',
      instructions: 'Escucha la oración informal y elige el sustantivo que la convierte en formal.',
      questions: [
        {
          id: 11,
          audioText: 'They decided quickly.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'decision' },
            { id: 'b', text: 'decide' },
          ],
          correctOptionIds: ['a'],
          explanation: 'decide → decision.',
        },
        {
          id: 12,
          audioText: 'The company expanded.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'expand' },
            { id: 'b', text: 'expansion' },
          ],
          correctOptionIds: ['b'],
          explanation: 'expand → expansion.',
        },
        {
          id: 13,
          audioText: 'We failed.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'failure' },
            { id: 'b', text: 'fail' },
          ],
          correctOptionIds: ['a'],
          explanation: 'fail → failure.',
        },
        {
          id: 14,
          audioText: 'Prices rose.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'rise' },
            { id: 'b', text: 'rose' },
          ],
          correctOptionIds: ['a'],
          explanation: 'rise (sustantivo) es la forma correcta.',
        },
        {
          id: 15,
          audioText: 'She is able.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'able' },
            { id: 'b', text: 'ability' },
          ],
          correctOptionIds: ['b'],
          explanation: 'able → ability.',
        },
        {
          id: 16,
          audioText: 'It is important.',
          language: 'en',
          prompt: '¿Qué sustantivo usas?',
          options: [
            { id: 'a', text: 'importance' },
            { id: 'b', text: 'important' },
          ],
          correctOptionIds: ['a'],
          explanation: 'important → importance.',
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
            { id: 'q17-their', word: 'Their', translation: 'su' },
            { id: 'q17-quick', word: 'quick', translation: 'rápida' },
            {
              id: 'q17-decision',
              word: 'decision',
              translation: 'decisión',
            },
            {
              id: 'q17-surprised',
              word: 'surprised',
              translation: 'sorprendió',
            },
            { id: 'q17-us', word: 'us.', translation: 'nos' },
          ],
          correctOrder: ['q17-their', 'q17-quick', 'q17-decision', 'q17-surprised', 'q17-us'],
          sentenceTranslation: 'Su decisión rápida nos sorprendió.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-the', word: 'The', translation: 'el/la' },
            {
              id: 'q18-expansion',
              word: 'expansion',
              translation: 'expansión',
            },
            { id: 'q18-of', word: 'of', translation: 'de' },
            { id: 'q18-the-2', word: 'the', translation: 'el/la' },
            { id: 'q18-company', word: 'company', translation: 'compañía' },
            { id: 'q18-created', word: 'created', translation: 'creó' },
            { id: 'q18-jobs', word: 'jobs.', translation: 'empleos' },
          ],
          correctOrder: ['q18-the', 'q18-expansion', 'q18-of', 'q18-the-2', 'q18-company', 'q18-created', 'q18-jobs'],
          sentenceTranslation: 'La expansión de la empresa creó empleos.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-our', word: 'Our', translation: 'nuestro' },
            { id: 'q19-failure', word: 'failure', translation: 'fracaso' },
            { id: 'q19-taught', word: 'taught', translation: 'enseñó' },
            { id: 'q19-us', word: 'us', translation: 'nos' },
            { id: 'q19-a', word: 'a', translation: 'un/una' },
            { id: 'q19-lot', word: 'lot.', translation: 'mucho' },
          ],
          correctOrder: ['q19-our', 'q19-failure', 'q19-taught', 'q19-us', 'q19-a', 'q19-lot'],
          sentenceTranslation: 'Nuestro fracaso nos enseñó mucho.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-on', word: 'On', translation: 'puesto' },
            { id: 'q20-his', word: 'his', translation: 'su' },
            { id: 'q20-arrival', word: 'arrival,', translation: 'llegada' },
            { id: 'q20-we', word: 'we', translation: 'nosotros' },
            { id: 'q20-left', word: 'left.', translation: 'nos fuimos' },
          ],
          correctOrder: ['q20-on', 'q20-his', 'q20-arrival', 'q20-we', 'q20-left'],
          sentenceTranslation: 'A su llegada, nos fuimos.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-her', word: 'Her', translation: 'su' },
            {
              id: 'q21-ability',
              word: 'ability',
              translation: 'capacidad',
            },
            { id: 'q21-is', word: 'is', translation: 'está' },
            { id: 'q21-clear', word: 'clear.', translation: 'clara' },
          ],
          correctOrder: ['q21-her', 'q21-ability', 'q21-is', 'q21-clear'],
          sentenceTranslation: 'Su capacidad es clara.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-its', word: 'Its', translation: 'su' },
            {
              id: 'q22-importance',
              word: 'importance',
              translation: 'importancia',
            },
            { id: 'q22-is', word: 'is', translation: 'está' },
            {
              id: 'q22-obvious',
              word: 'obvious.',
              translation: 'evidente',
            },
          ],
          correctOrder: ['q22-its', 'q22-importance', 'q22-is', 'q22-obvious'],
          sentenceTranslation: 'Su importancia es evidente.',
        },
      ],
    },
  ],
};

export default lessonB2021;
