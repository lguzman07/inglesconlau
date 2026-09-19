import type { LessonContent } from '../types';

const lessonA2004: LessonContent = {
  level: 'a2',
  number: 4,
  title: 'Past simple: verbos regulares, negativo y preguntas',
  subtitle: 'Aprende a formar el past simple con verbos regulares, y a hacer oraciones negativas y preguntas con did.',
  videoTitle: 'Past simple: verbos regulares, negativo y preguntas',
  videoDescription: 'En este video verás las reglas para añadir ED a los verbos regulares y cómo usar didn’t y did en negativos y preguntas.',
  objective: 'Al terminar, podrás hablar de acciones terminadas en el pasado con verbos regulares, y hacer oraciones negativas y preguntas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con el pasado',
      instructions: 'Escribe el verbo en past simple (regular). Recuerda las reglas: ED, D, IED o duplicar la consonante.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'her', translation: 'su' },
            { word: 'room', translation: 'cuarto' },
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'cleaned',
          hint: 'clean',
          sentenceTranslation: 'Ella limpió su cuarto ayer.',
        },
        {
          id: 2,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'movie', translation: 'película' },
            { word: 'last', translation: 'pasado' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'watched',
          hint: 'watch',
          sentenceTranslation: 'Ellos vieron una película anoche.',
        },
        {
          id: 3,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'party', translation: 'fiesta' },
            { word: 'on', translation: 'en' },
            { word: 'Saturday.', translation: 'sábado' },
          ],
          answer: 'danced',
          hint: 'dance',
          sentenceTranslation: 'Bailamos en la fiesta el sábado.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'near', translation: 'cerca de' },
            { word: 'the', translation: 'el/la' },
            { word: 'beach', translation: 'playa' },
            { word: 'last', translation: 'pasado' },
            { word: 'year.', translation: 'año' },
          ],
          answer: 'lived',
          hint: 'live',
          sentenceTranslation: 'Él vivió cerca de la playa el año pasado.',
        },
        {
          id: 5,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'baby', translation: 'bebé' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'her', translation: 'su' },
            { word: 'mother.', translation: 'mamá' },
          ],
          answer: 'smiled',
          hint: 'smile',
          sentenceTranslation: 'La bebé le sonrió a su mamá.',
        },
        {
          id: 6,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'for', translation: 'para' },
            { word: 'the', translation: 'el/la' },
            { word: 'exam', translation: 'examen' },
            { word: 'all', translation: 'todo' },
            { word: 'weekend.', translation: 'fin de semana' },
          ],
          answer: 'studied',
          hint: 'study',
          sentenceTranslation: 'Estudié para el examen todo el fin de semana.',
        },
        {
          id: 7,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'when', translation: 'cuando' },
            { word: 'she', translation: 'ella' },
            { word: 'watched', translation: 'vio' },
            { word: 'the', translation: 'el/la' },
            { word: 'movie.', translation: 'película' },
          ],
          answer: 'cried',
          hint: 'cry',
          sentenceTranslation: 'Ella lloró cuando vio la película.',
        },
        {
          id: 8,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'kids', translation: 'niños' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'park', translation: 'parque' },
            { word: 'all', translation: 'todo' },
            { word: 'afternoon.', translation: 'tarde' },
          ],
          answer: 'played',
          hint: 'play',
          sentenceTranslation: 'Los niños jugaron en el parque toda la tarde.',
        },
        {
          id: 9,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'a', translation: 'un/una' },
            { word: 'hotel', translation: 'hotel' },
            { word: 'near', translation: 'cerca de' },
            { word: 'the', translation: 'el/la' },
            { word: 'beach.', translation: 'playa' },
          ],
          answer: 'stayed',
          hint: 'stay',
          sentenceTranslation: 'Nos quedamos en un hotel cerca de la playa.',
        },
        {
          id: 10,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'car', translation: 'carro' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'red', translation: 'rojo' },
            { word: 'light.', translation: 'luz' },
          ],
          answer: 'stopped',
          hint: 'stop',
          sentenceTranslation: 'El carro se detuvo en la luz roja.',
        },
        {
          id: 11,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'trip', translation: 'viaje' },
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'el/la' },
            { word: 'beach.', translation: 'playa' },
          ],
          answer: 'planned',
          hint: 'plan',
          sentenceTranslation: 'Planearon un viaje a la playa.',
        },
        {
          id: 12,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'his', translation: 'su' },
            { word: 'phone', translation: 'teléfono' },
            { word: 'on', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'floor.', translation: 'piso' },
          ],
          answer: 'dropped',
          hint: 'drop',
          sentenceTranslation: 'Él dejó caer su teléfono al piso.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Después de did, verbo base',
      instructions: 'Después de did o didn’t, el verbo vuelve a su forma base (sin ED). Escribe la forma base del verbo que aparece entre paréntesis.',
      questions: [
        {
          id: 13,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'didn’t', translation: 'no (pasado)' },
          ],
          after: [
            { word: 'to', translation: 'a' },
            { word: 'school', translation: 'escuela' },
            { word: 'yesterday.', translation: 'ayer' },
          ],
          answer: 'walk',
          hint: 'walked',
          sentenceTranslation: 'Ella no caminó a la escuela ayer.',
        },
        {
          id: 14,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'didn’t', translation: 'no (pasado)' },
          ],
          after: [
            { word: 'TV', translation: 'televisión' },
            { word: 'last', translation: 'pasado' },
            { word: 'night.', translation: 'noche' },
          ],
          answer: 'watch',
          hint: 'watched',
          sentenceTranslation: 'No vi televisión anoche.',
        },
        {
          id: 15,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'didn’t', translation: 'no (pasado)' },
          ],
          after: [
            { word: 'for', translation: 'para' },
            { word: 'the', translation: 'el/la' },
            { word: 'test.', translation: 'examen' },
          ],
          answer: 'study',
          hint: 'studied',
          sentenceTranslation: 'Ellos no estudiaron para el examen.',
        },
        {
          id: 16,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'didn’t', translation: 'no (pasado)' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'new', translation: 'nueva' },
            { word: 'song.', translation: 'canción' },
          ],
          answer: 'like',
          hint: 'liked',
          sentenceTranslation: 'No le gustó la canción nueva.',
        },
        {
          id: 17,
          before: [
            { word: 'Did', translation: 'auxiliar de pasado' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'your', translation: 'tu' },
            { word: 'room?', translation: 'cuarto' },
          ],
          answer: 'clean',
          hint: 'cleaned',
          sentenceTranslation: '¿Limpiaste tu cuarto?',
        },
        {
          id: 18,
          before: [
            { word: 'Did', translation: 'auxiliar de pasado' },
            { word: 'she', translation: 'ella' },
          ],
          after: [
            { word: 'you', translation: 'tú' },
            { word: 'yesterday?', translation: 'ayer' },
          ],
          answer: 'call',
          hint: 'called',
          sentenceTranslation: '¿Ella te llamó ayer?',
        },
        {
          id: 19,
          before: [
            { word: 'Did', translation: 'auxiliar de pasado' },
            { word: 'they', translation: 'ellos' },
          ],
          after: [
            { word: 'soccer', translation: 'fútbol' },
            { word: 'on', translation: 'en' },
            { word: 'Sunday?', translation: 'domingo' },
          ],
          answer: 'play',
          hint: 'played',
          sentenceTranslation: '¿Jugaron fútbol el domingo?',
        },
        {
          id: 20,
          before: [
            { word: 'Did', translation: 'auxiliar de pasado' },
            { word: 'he', translation: 'él' },
          ],
          after: [
            { word: 'his', translation: 'su' },
            { word: 'brother?', translation: 'hermano' },
          ],
          answer: 'help',
          hint: 'helped',
          sentenceTranslation: '¿Le ayudó a su hermano?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Presente o pasado?',
      instructions: 'Escucha la oración y decide si habla del presente o del pasado.',
      questions: [
        {
          id: 21,
          audioText: 'She cleaned her room.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['past'],
          explanation: 'cleaned lleva ED: es pasado.',
        },
        {
          id: 22,
          audioText: 'They watch TV every night.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['present'],
          explanation: 'watch sin ED y every night: es presente.',
        },
        {
          id: 23,
          audioText: 'We studied English yesterday.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['past'],
          explanation: 'studied lleva IED y yesterday: es pasado.',
        },
        {
          id: 24,
          audioText: 'He plays soccer on Sundays.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['present'],
          explanation: 'plays es presente (verbo con S para he).',
        },
        {
          id: 25,
          audioText: 'The kids played in the park.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['past'],
          explanation: 'played lleva ED: es pasado.',
        },
        {
          id: 26,
          audioText: 'I stopped at the red light.',
          language: 'en',
          prompt: '¿Presente o pasado?',
          options: [
            { id: 'present', text: 'Presente' },
            { id: 'past', text: 'Pasado' },
          ],
          correctOptionIds: ['past'],
          explanation: 'stopped duplica la P y lleva ED: es pasado.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 27,
          tokens: [
            { id: 'q27-she', word: 'She', translation: 'ella' },
            { id: 'q27-didnt', word: 'didn’t', translation: 'no (pasado)' },
            { id: 'q27-walk', word: 'walk', translation: 'caminar' },
            { id: 'q27-to', word: 'to', translation: 'a' },
            { id: 'q27-school', word: 'school', translation: 'escuela' },
            {
              id: 'q27-yesterday',
              word: 'yesterday.',
              translation: 'ayer',
            },
          ],
          correctOrder: ['q27-she', 'q27-didnt', 'q27-walk', 'q27-to', 'q27-school', 'q27-yesterday'],
          sentenceTranslation: 'Ella no caminó a la escuela ayer.',
        },
        {
          id: 28,
          tokens: [
            { id: 'q28-i', word: 'I', translation: 'yo' },
            { id: 'q28-didnt', word: 'didn’t', translation: 'no (pasado)' },
            { id: 'q28-watch', word: 'watch', translation: 'ver' },
            { id: 'q28-tv', word: 'TV', translation: 'televisión' },
            { id: 'q28-last', word: 'last', translation: 'pasado' },
            { id: 'q28-night', word: 'night.', translation: 'noche' },
          ],
          correctOrder: ['q28-i', 'q28-didnt', 'q28-watch', 'q28-tv', 'q28-last', 'q28-night'],
          sentenceTranslation: 'No vi televisión anoche.',
        },
        {
          id: 29,
          tokens: [
            { id: 'q29-they', word: 'They', translation: 'ellos' },
            { id: 'q29-didnt', word: 'didn’t', translation: 'no (pasado)' },
            { id: 'q29-play', word: 'play', translation: 'jugar' },
            { id: 'q29-soccer', word: 'soccer', translation: 'fútbol' },
            { id: 'q29-today', word: 'today.', translation: 'hoy' },
          ],
          correctOrder: ['q29-they', 'q29-didnt', 'q29-play', 'q29-soccer', 'q29-today'],
          sentenceTranslation: 'Ellos no jugaron fútbol hoy.',
        },
        {
          id: 30,
          tokens: [
            {
              id: 'q30-did',
              word: 'Did',
              translation: 'auxiliar de pasado',
            },
            { id: 'q30-you', word: 'you', translation: 'tú' },
            { id: 'q30-clean', word: 'clean', translation: 'limpiar' },
            { id: 'q30-your', word: 'your', translation: 'tu' },
            { id: 'q30-room', word: 'room?', translation: 'cuarto' },
          ],
          correctOrder: ['q30-did', 'q30-you', 'q30-clean', 'q30-your', 'q30-room'],
          sentenceTranslation: '¿Limpiaste tu cuarto?',
        },
        {
          id: 31,
          tokens: [
            {
              id: 'q31-did',
              word: 'Did',
              translation: 'auxiliar de pasado',
            },
            { id: 'q31-she', word: 'she', translation: 'ella' },
            { id: 'q31-visit', word: 'visit', translation: 'visitar' },
            { id: 'q31-her', word: 'her', translation: 'su' },
            {
              id: 'q31-grandmother',
              word: 'grandmother?',
              translation: 'abuela',
            },
          ],
          correctOrder: ['q31-did', 'q31-she', 'q31-visit', 'q31-her', 'q31-grandmother'],
          sentenceTranslation: '¿Ella visitó a su abuela?',
        },
        {
          id: 32,
          tokens: [
            {
              id: 'q32-did',
              word: 'Did',
              translation: 'auxiliar de pasado',
            },
            { id: 'q32-they', word: 'they', translation: 'ellos' },
            { id: 'q32-walk', word: 'walk', translation: 'caminar' },
            { id: 'q32-to', word: 'to', translation: 'a' },
            { id: 'q32-school', word: 'school', translation: 'escuela' },
            {
              id: 'q32-together',
              word: 'together?',
              translation: 'juntos',
            },
          ],
          correctOrder: ['q32-did', 'q32-they', 'q32-walk', 'q32-to', 'q32-school', 'q32-together'],
          sentenceTranslation: '¿Caminaron juntos a la escuela?',
        },
      ],
    },
  ],
};

export default lessonA2004;
