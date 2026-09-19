import type { LessonContent } from '../types';

const lessonA2005: LessonContent = {
  level: 'a2',
  number: 5,
  title: 'Past continuous',
  subtitle: 'Aprende a hablar de lo que estaba pasando en un momento del pasado, con oraciones afirmativas, negativas y preguntas.',
  videoTitle: 'Past continuous',
  videoDescription: 'En este video verás cómo se forma el past continuous con was/were + verbo con ING, y las reglas de ortografía del ING.',
  objective: 'Al terminar, podrás decir qué estaba pasando en un momento del pasado, y hacer oraciones negativas y preguntas.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Completa con ING',
      instructions: 'Escribe el verbo con ING. Recuerda las reglas: quitar la E, mantener la Y, cambiar IE por Y o duplicar la consonante.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'party.', translation: 'fiesta' },
          ],
          answer: 'dancing',
          hint: 'dance',
          sentenceTranslation: 'Ella estaba bailando en la fiesta.',
        },
        {
          id: 2,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'were', translation: 'estaban' },
          ],
          after: [
            { word: 'letters', translation: 'cartas' },
            { word: 'to', translation: 'a' },
            { word: 'their', translation: 'su' },
            { word: 'friends.', translation: 'amigos' },
          ],
          answer: 'writing',
          hint: 'write',
          sentenceTranslation: 'Ellos estaban escribiendo cartas a sus amigos.',
        },
        {
          id: 3,
          before: [
            { word: 'I', translation: 'yo' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: '7:00.', translation: 'las 7:00' },
          ],
          answer: 'studying',
          hint: 'study',
          sentenceTranslation: 'Yo estaba estudiando a las 7:00.',
        },
        {
          id: 4,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'end', translation: 'final' },
            { word: 'of', translation: 'de' },
            { word: 'the', translation: 'el/la' },
            { word: 'movie.', translation: 'película' },
          ],
          answer: 'crying',
          hint: 'cry',
          sentenceTranslation: 'Él estaba llorando al final de la película.',
        },
        {
          id: 5,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'flowers', translation: 'flores' },
            { word: 'were', translation: 'estaban' },
          ],
          after: [
            { word: 'without', translation: 'sin' },
            { word: 'water.', translation: 'agua' },
          ],
          answer: 'dying',
          hint: 'die',
          sentenceTranslation: 'Las flores se estaban muriendo sin agua.',
        },
        {
          id: 6,
          before: [
            { word: 'We', translation: 'nosotros' },
            { word: 'were', translation: 'estaban' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'trip', translation: 'viaje' },
            { word: 'to', translation: 'a' },
            { word: 'the', translation: 'el/la' },
            { word: 'beach.', translation: 'playa' },
          ],
          answer: 'planning',
          hint: 'plan',
          sentenceTranslation: 'Estábamos planeando un viaje a la playa.',
        },
        {
          id: 7,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'car', translation: 'carro' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'at', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'red', translation: 'rojo' },
            { word: 'light.', translation: 'luz' },
          ],
          answer: 'stopping',
          hint: 'stop',
          sentenceTranslation: 'El carro se estaba deteniendo en el semáforo.',
        },
        {
          id: 8,
          before: [
            { word: 'She', translation: 'ella' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'her', translation: 'su' },
            { word: 'best', translation: 'mejor' },
            { word: 'friend.', translation: 'amigo/a' },
          ],
          answer: 'hugging',
          hint: 'hug',
          sentenceTranslation: 'Ella estaba abrazando a su mejor amiga.',
        },
        {
          id: 9,
          before: [
            { word: 'He', translation: 'él' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'park.', translation: 'parque' },
          ],
          answer: 'running',
          hint: 'run',
          sentenceTranslation: 'Él estaba corriendo en el parque.',
        },
        {
          id: 10,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'boy', translation: 'niño' },
            { word: 'was', translation: 'estaba' },
          ],
          after: [
            { word: 'on', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'grass.', translation: 'césped' },
          ],
          answer: 'lying',
          hint: 'lie',
          sentenceTranslation: 'El niño estaba acostado en el césped.',
        },
        {
          id: 11,
          before: [
            { word: 'They', translation: 'ellos' },
            { word: 'were', translation: 'estaban' },
          ],
          after: [
            { word: 'the', translation: 'el/la' },
            { word: 'door.', translation: 'puerta' },
          ],
          answer: 'opening',
          hint: 'open',
          sentenceTranslation: 'Ellos estaban abriendo la puerta.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: '¿Was o were?',
      instructions: 'Escribe was o were según el sujeto. I, he, she, it → was. You, we, they → were.',
      questions: [
        {
          id: 12,
          before: [
            { word: 'At', translation: 'en' },
            { word: '8:00', translation: 'las 8:00' },
            { word: 'last', translation: 'pasado' },
            { word: 'night,', translation: 'noche' },
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'watching', translation: 'viendo' },
            { word: 'TV.', translation: 'televisión' },
          ],
          answer: 'was',
          sentenceTranslation: 'Anoche a las 8:00, yo estaba viendo televisión.',
        },
        {
          id: 13,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'playing', translation: 'jugando' },
            { word: 'soccer', translation: 'fútbol' },
            { word: 'all', translation: 'todo' },
            { word: 'afternoon.', translation: 'tarde' },
          ],
          answer: 'were',
          sentenceTranslation: 'Ellos estaban jugando fútbol toda la tarde.',
        },
        {
          id: 14,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'cooking', translation: 'cocinando' },
            { word: 'dinner', translation: 'cena' },
            { word: 'when', translation: 'cuando' },
            { word: 'I', translation: 'yo' },
            { word: 'arrived.', translation: 'llegué' },
          ],
          answer: 'was',
          sentenceTranslation: 'Ella estaba cocinando la cena cuando llegué.',
        },
        {
          id: 15,
          before: [
            { word: 'You', translation: 'tú' },
          ],
          after: [
            { word: 'walking', translation: 'caminando' },
            { word: 'home', translation: 'a casa' },
            { word: 'at', translation: 'en' },
            { word: '6:00.', translation: 'las 6:00' },
          ],
          answer: 'were',
          sentenceTranslation: 'Tú estabas caminando a casa a las 6:00.',
        },
        {
          id: 16,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'studying', translation: 'estudiando' },
            { word: 'in', translation: 'en' },
            { word: 'the', translation: 'el/la' },
            { word: 'library.', translation: 'biblioteca' },
          ],
          answer: 'were',
          sentenceTranslation: 'Estábamos estudiando en la biblioteca.',
        },
        {
          id: 17,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'sleeping', translation: 'durmiendo' },
            { word: 'at', translation: 'en' },
            { word: 'midnight.', translation: 'medianoche' },
          ],
          answer: 'was',
          sentenceTranslation: 'Él estaba durmiendo a medianoche.',
        },
        {
          id: 18,
          before: [
            { word: 'The', translation: 'el/la' },
            { word: 'kids', translation: 'niños' },
          ],
          after: [
            { word: 'making', translation: 'haciendo' },
            { word: 'noise.', translation: 'ruido' },
          ],
          answer: 'were',
          sentenceTranslation: 'Los niños estaban haciendo ruido.',
        },
        {
          id: 19,
          before: [
            { word: 'It', translation: 'eso' },
          ],
          after: [
            { word: 'raining', translation: 'lloviendo' },
            { word: 'all', translation: 'todo' },
            { word: 'day.', translation: 'día' },
          ],
          answer: 'was',
          sentenceTranslation: 'Estuvo lloviendo todo el día.',
        },
      ],
    },
    {
      type: 'drag-and-drop',
      title: 'Ordena las palabras',
      instructions: 'Arrastra las palabras para formar la oración correcta. Las opciones aparecen en orden aleatorio.',
      questions: [
        {
          id: 20,
          tokens: [
            { id: 'q20-i', word: 'I', translation: 'yo' },
            { id: 'q20-wasnt', word: 'wasn’t', translation: 'no estaba' },
            { id: 'q20-doing', word: 'doing', translation: 'haciendo' },
            { id: 'q20-my', word: 'my', translation: 'mi' },
            { id: 'q20-homework', word: 'homework.', translation: 'tarea' },
          ],
          correctOrder: ['q20-i', 'q20-wasnt', 'q20-doing', 'q20-my', 'q20-homework'],
          sentenceTranslation: 'Yo no estaba haciendo mi tarea.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-they', word: 'They', translation: 'ellos' },
            {
              id: 'q21-werent',
              word: 'weren’t',
              translation: 'no estaban',
            },
            {
              id: 'q21-walking',
              word: 'walking',
              translation: 'caminando',
            },
            { id: 'q21-home', word: 'home.', translation: 'a casa' },
          ],
          correctOrder: ['q21-they', 'q21-werent', 'q21-walking', 'q21-home'],
          sentenceTranslation: 'Ellos no estaban caminando a casa.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-she', word: 'She', translation: 'ella' },
            { id: 'q22-wasnt', word: 'wasn’t', translation: 'no estaba' },
            { id: 'q22-making', word: 'making', translation: 'haciendo' },
            { id: 'q22-dinner', word: 'dinner.', translation: 'cena' },
          ],
          correctOrder: ['q22-she', 'q22-wasnt', 'q22-making', 'q22-dinner'],
          sentenceTranslation: 'Ella no estaba haciendo la cena.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-was', word: 'Was', translation: 'estaba' },
            { id: 'q23-she', word: 'she', translation: 'ella' },
            { id: 'q23-doing', word: 'doing', translation: 'haciendo' },
            { id: 'q23-her', word: 'her', translation: 'su' },
            { id: 'q23-homework', word: 'homework?', translation: 'tarea' },
          ],
          correctOrder: ['q23-was', 'q23-she', 'q23-doing', 'q23-her', 'q23-homework'],
          sentenceTranslation: '¿Estaba ella haciendo su tarea?',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-were', word: 'Were', translation: 'estaban' },
            { id: 'q24-you', word: 'you', translation: 'tú' },
            {
              id: 'q24-walking',
              word: 'walking',
              translation: 'caminando',
            },
            { id: 'q24-home', word: 'home?', translation: 'a casa' },
          ],
          correctOrder: ['q24-were', 'q24-you', 'q24-walking', 'q24-home'],
          sentenceTranslation: '¿Estabas caminando a casa?',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-were', word: 'Were', translation: 'estaban' },
            { id: 'q25-they', word: 'they', translation: 'ellos' },
            { id: 'q25-making', word: 'making', translation: 'haciendo' },
            { id: 'q25-dinner', word: 'dinner?', translation: 'cena' },
          ],
          correctOrder: ['q25-were', 'q25-they', 'q25-making', 'q25-dinner'],
          sentenceTranslation: '¿Estaban haciendo la cena?',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿Qué estaban haciendo?',
      instructions: 'Escucha la oración y elige qué estaba haciendo la persona.',
      questions: [
        {
          id: 26,
          audioText: 'She was cooking dinner.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Cooking dinner' },
            { id: 'b', text: 'Watching TV' },
            { id: 'c', text: 'Playing soccer' },
          ],
          correctOptionIds: ['a'],
          explanation: 'was cooking = estaba cocinando.',
        },
        {
          id: 27,
          audioText: 'They were playing soccer in the park.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Studying' },
            { id: 'b', text: 'Playing soccer' },
            { id: 'c', text: 'Sleeping' },
          ],
          correctOptionIds: ['b'],
          explanation: 'were playing soccer = estaban jugando fútbol.',
        },
        {
          id: 28,
          audioText: 'I was studying at 7:00.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Cooking' },
            { id: 'b', text: 'Studying' },
            { id: 'c', text: 'Running' },
          ],
          correctOptionIds: ['b'],
          explanation: 'was studying = estaba estudiando.',
        },
        {
          id: 29,
          audioText: 'He was running in the park.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Running' },
            { id: 'b', text: 'Sleeping' },
            { id: 'c', text: 'Cooking dinner' },
          ],
          correctOptionIds: ['a'],
          explanation: 'was running = estaba corriendo.',
        },
        {
          id: 30,
          audioText: 'We were watching a movie.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Playing soccer' },
            { id: 'b', text: 'Studying' },
            { id: 'c', text: 'Watching a movie' },
          ],
          correctOptionIds: ['c'],
          explanation: 'were watching a movie = estábamos viendo una película.',
        },
        {
          id: 31,
          audioText: 'The baby was sleeping.',
          language: 'en',
          prompt: '¿Qué estaba haciendo?',
          options: [
            { id: 'a', text: 'Sleeping' },
            { id: 'b', text: 'Crying' },
            { id: 'c', text: 'Playing' },
          ],
          correctOptionIds: ['a'],
          explanation: 'was sleeping = estaba durmiendo.',
        },
      ],
    },
  ],
};

export default lessonA2005;
