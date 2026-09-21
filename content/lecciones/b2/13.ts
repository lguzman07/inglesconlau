import type { LessonContent } from '../types';

const lessonB2013: LessonContent = {
  level: 'b2',
  number: 13,
  title: 'Voz pasiva avanzada',
  subtitle: 'Aprende la voz pasiva en distintos tiempos, con modales y en preguntas y negativos.',
  videoTitle: 'Voz pasiva avanzada',
  videoDescription: 'En este video verás la voz pasiva en presente, pasado, perfecto, continuo y con modales, y cuándo usar by.',
  objective: 'Al terminar, podrás formar oraciones pasivas en varios tiempos, con modales, preguntas y negativos.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Be, been, being o has',
      instructions: 'Escribe la forma de be o have que falta: was, were, are, been, being o has.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'bridge', translation: 'puente' },
          ],
          after: [
            { word: 'built', translation: 'construido' },
            { word: 'in', translation: 'en' },
            { word: '1990.', translation: '1990' },
          ],
          answer: 'was',
          sentenceTranslation: 'El puente fue construido en 1990.',
        },
        {
          id: 2,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'windows', translation: 'ventanas' },
          ],
          after: [
            { word: 'cleaned', translation: 'limpiadas' },
            { word: 'daily.', translation: 'a diario' },
          ],
          answer: 'are',
          sentenceTranslation: 'Las ventanas se limpian a diario.',
        },
        {
          id: 3,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'keys', translation: 'llaves' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'found.', translation: 'encontradas' },
          ],
          answer: 'been',
          sentenceTranslation: 'Las llaves han sido encontradas.',
        },
        {
          id: 4,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'road', translation: 'camino' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'repaired.', translation: 'reparado' },
          ],
          answer: 'being',
          sentenceTranslation: 'El camino está siendo reparado.',
        },
        {
          id: 5,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'project', translation: 'proyecto' },
          ],
          after: [
            { word: 'been', translation: 'estado' },
            { word: 'finished.', translation: 'terminado' },
          ],
          answer: 'has',
          sentenceTranslation: 'El proyecto ha sido terminado.',
        },
        {
          id: 6,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'results', translation: 'resultados' },
            { word: 'will', translation: 'auxiliar de futuro' },
            { word: 'have', translation: 'he' },
          ],
          after: [
            { word: 'announced', translation: 'anunciado' },
            { word: 'by', translation: 'por / para' },
            { word: 'Friday.', translation: 'viernes' },
          ],
          answer: 'been',
          sentenceTranslation: 'Los resultados habrán sido anunciados para el viernes.',
        },
        {
          id: 7,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'letters', translation: 'cartas' },
          ],
          after: [
            { word: 'sent', translation: 'enviadas' },
            { word: 'on', translation: 'en' },
            { word: 'Monday.', translation: 'lunes' },
          ],
          answer: 'were',
          sentenceTranslation: 'Las cartas fueron enviadas el lunes.',
        },
        {
          id: 8,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'house', translation: 'casa' },
            { word: 'had', translation: 'había' },
          ],
          after: [
            { word: 'sold', translation: 'vendida' },
            { word: 'before', translation: 'antes' },
            { word: 'we', translation: 'nosotros' },
            { word: 'arrived.', translation: 'llegado' },
          ],
          answer: 'been',
          sentenceTranslation: 'La casa había sido vendida antes de que llegáramos.',
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
            { word: 'The', translation: 'el/la' },
            { word: 'report', translation: 'informe' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'every', translation: 'cada' },
            { word: 'week.', translation: 'semana' },
          ],
          answer: 'written',
          hint: 'write',
          sentenceTranslation: 'El informe se escribe cada semana.',
        },
        {
          id: 10,
          before: [
            { word: 'My', translation: 'mis' },
            { word: 'car', translation: 'carro' },
            { word: 'was', translation: 'fue' },
          ],
          after: [
            { word: 'last', translation: 'pasado' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'stolen',
          hint: 'steal',
          sentenceTranslation: 'Me robaron el carro anoche.',
        },
        {
          id: 11,
          before: [
            { word: 'English', translation: 'inglés' },
            { word: 'is', translation: 'es / está' },
          ],
          after: [
            { word: 'worldwide.', translation: 'en todo el mundo' },
          ],
          answer: 'spoken',
          hint: 'speak',
          sentenceTranslation: 'El inglés se habla en todo el mundo.',
        },
        {
          id: 12,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'cake', translation: 'bizcocho' },
            { word: 'was', translation: 'fue' },
          ],
          after: [
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'made',
          hint: 'make',
          sentenceTranslation: 'El bizcocho fue hecho ayer.',
        },
        {
          id: 13,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'documents', translation: 'documentos' },
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
          ],
          after: [],
          answer: 'signed',
          hint: 'sign',
          sentenceTranslation: 'Los documentos han sido firmados.',
        },
        {
          id: 14,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'form', translation: 'formulario' },
            { word: 'must', translation: 'debió de' },
            { word: 'be', translation: 'ser / estar' },
          ],
          after: [],
          answer: 'completed',
          hint: 'complete',
          sentenceTranslation: 'El formulario debe ser completado.',
        },
        {
          id: 15,
          before: [
            { word: 'This', translation: 'este' },
            { word: 'mistake', translation: 'error' },
            { word: 'could', translation: 'podría' },
            { word: 'have', translation: 'he' },
            { word: 'been', translation: 'estado' },
          ],
          after: [],
          answer: 'avoided',
          hint: 'avoid',
          sentenceTranslation: 'Este error pudo haberse evitado.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 16,
          tokens: [
            { id: 'q16-the', word: 'The', translation: 'el/la' },
            { id: 'q16-bridge', word: 'bridge', translation: 'puente' },
            { id: 'q16-was', word: 'was', translation: 'fue' },
            { id: 'q16-built', word: 'built', translation: 'construido' },
            { id: 'q16-in', word: 'in', translation: 'en' },
            { id: 'q16-1990', word: '1990.', translation: '1990' },
          ],
          correctOrder: ['q16-the', 'q16-bridge', 'q16-was', 'q16-built', 'q16-in', 'q16-1990'],
          sentenceTranslation: 'El puente fue construido en 1990.',
        },
        {
          id: 17,
          tokens: [
            { id: 'q17-the', word: 'The', translation: 'el/la' },
            { id: 'q17-road', word: 'road', translation: 'camino' },
            { id: 'q17-is', word: 'is', translation: 'es / está' },
            { id: 'q17-being', word: 'being', translation: 'siendo' },
            {
              id: 'q17-repaired',
              word: 'repaired.',
              translation: 'reparado',
            },
          ],
          correctOrder: ['q17-the', 'q17-road', 'q17-is', 'q17-being', 'q17-repaired'],
          sentenceTranslation: 'El camino está siendo reparado.',
        },
        {
          id: 18,
          tokens: [
            { id: 'q18-the', word: 'The', translation: 'el/la' },
            { id: 'q18-keys', word: 'keys', translation: 'llaves' },
            { id: 'q18-have', word: 'have', translation: 'he' },
            { id: 'q18-been', word: 'been', translation: 'estado' },
            { id: 'q18-found', word: 'found.', translation: 'encontradas' },
          ],
          correctOrder: ['q18-the', 'q18-keys', 'q18-have', 'q18-been', 'q18-found'],
          sentenceTranslation: 'Las llaves han sido encontradas.',
        },
        {
          id: 19,
          tokens: [
            { id: 'q19-the', word: 'The', translation: 'el/la' },
            {
              id: 'q19-suspect',
              word: 'suspect',
              translation: 'sospechoso',
            },
            { id: 'q19-is', word: 'is', translation: 'es / está' },
            { id: 'q19-being', word: 'being', translation: 'siendo' },
            {
              id: 'q19-questioned',
              word: 'questioned',
              translation: 'interrogado',
            },
            { id: 'q19-by', word: 'by', translation: 'por / para' },
            { id: 'q19-the-2', word: 'the', translation: 'el/la' },
            { id: 'q19-police', word: 'police.', translation: 'policía' },
          ],
          correctOrder: ['q19-the', 'q19-suspect', 'q19-is', 'q19-being', 'q19-questioned', 'q19-by', 'q19-the-2', 'q19-police'],
          sentenceTranslation: 'El sospechoso está siendo interrogado por la policía.',
        },
        {
          id: 20,
          tokens: [
            { id: 'q20-was', word: 'Was', translation: 'fue' },
            { id: 'q20-the', word: 'the', translation: 'el/la' },
            { id: 'q20-door', word: 'door', translation: 'puerta' },
            { id: 'q20-locked', word: 'locked?', translation: 'cerrada' },
          ],
          correctOrder: ['q20-was', 'q20-the', 'q20-door', 'q20-locked'],
          sentenceTranslation: '¿Estaba cerrada la puerta?',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-when', word: 'When', translation: 'cuándo' },
            { id: 'q21-was', word: 'was', translation: 'fue' },
            { id: 'q21-the', word: 'the', translation: 'el/la' },
            { id: 'q21-bridge', word: 'bridge', translation: 'puente' },
            { id: 'q21-built', word: 'built?', translation: 'construido' },
          ],
          correctOrder: ['q21-when', 'q21-was', 'q21-the', 'q21-bridge', 'q21-built'],
          sentenceTranslation: '¿Cuándo fue construido el puente?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Voz activa o pasiva?',
      instructions: 'Escucha la oración y decide si está en voz activa o pasiva.',
      questions: [
        {
          id: 22,
          audioText: 'The police arrested the thief.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['active'],
          explanation: 'El sujeto hace la acción: voz activa.',
        },
        {
          id: 23,
          audioText: 'The thief was arrested.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['passive'],
          explanation: 'was + participio: voz pasiva.',
        },
        {
          id: 24,
          audioText: 'They built the bridge in 1990.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['active'],
          explanation: 'They built: voz activa.',
        },
        {
          id: 25,
          audioText: 'The bridge was built in 1990.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['passive'],
          explanation: 'was built: voz pasiva.',
        },
        {
          id: 26,
          audioText: 'The keys have been found.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['passive'],
          explanation: 'have been found: voz pasiva.',
        },
        {
          id: 27,
          audioText: 'Someone stole my car.',
          language: 'en',
          prompt: '¿Qué voz escuchaste?',
          options: [
            { id: 'active', text: 'Voz activa' },
            { id: 'passive', text: 'Voz pasiva' },
          ],
          correctOptionIds: ['active'],
          explanation: 'Someone stole: voz activa.',
        },
      ],
    },
  ],
};

export default lessonB2013;
