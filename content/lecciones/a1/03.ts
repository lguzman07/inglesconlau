import type { LessonContent } from '../types';

const lessonA1003: LessonContent = {
  level: 'a1',

  number: 3,

  title: 'El alfabeto y sus grupos de sonido',

  subtitle:
    'Aprende a reconocer el sonido de cada letra del alfabeto y a distinguir letras que suenan parecido.',

  videoTitle: 'El alfabeto y sus grupos de sonido',

  videoDescription:
    'En este video aprenderás las 7 familias de sonido del alfabeto en inglés y cómo distinguir letras que se confunden fácilmente.',

  objective:
    'Al terminar, podrás reconocer de oído cada letra del alfabeto, incluso las que suenan parecido entre sí.',

  videoSrc: 'c310831d-3471-43ee-99f4-2c113ba45cfb',

  exercises: [
    {
      type: 'listening-choice',

      title: 'Escucha y elige la letra',

      instructions:
        'Escucha el sonido y toca la letra correcta. Presta atención: algunas opciones suenan muy parecido.',

      questions: [
        {
          id: 1,
          audioText: 'E',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'e', text: 'E' },
            { id: 'i', text: 'I' },
            { id: 'y', text: 'Y' },
          ],
          correctOptionIds: ['e'],
          explanation:
            'E suena /iː/. I y Y suenan /aɪ/ ("ai"), muy distinto a E.',
        },

        {
          id: 2,
          audioText: 'I',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'e', text: 'E' },
            { id: 'i', text: 'I' },
            { id: 'y', text: 'Y' },
          ],
          correctOptionIds: ['i'],
          explanation:
            'I y Y suenan exactamente igual: /aɪ/ ("ai"). Aquí se distinguen solo por contexto o escritura.',
        },

        {
          id: 3,
          audioText: 'Y',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'e', text: 'E' },
            { id: 'i', text: 'I' },
            { id: 'y', text: 'Y' },
          ],
          correctOptionIds: ['y'],
          explanation:
            'Y suena /aɪ/, igual que I. E suena distinto: /iː/.',
        },

        {
          id: 4,
          audioText: 'A',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'a', text: 'A' },
            { id: 'e', text: 'E' },
            { id: 'i', text: 'I' },
          ],
          correctOptionIds: ['a'],
          explanation:
            'A suena /eɪ/ ("ei"). No suena como la A en español.',
        },

        {
          id: 5,
          audioText: 'B',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'b', text: 'B' },
            { id: 'd', text: 'D' },
            { id: 'v', text: 'V' },
          ],
          correctOptionIds: ['b'],
          explanation:
            'B, D y V suenan muy parecido (todas terminan en /iː/). Escucha bien el sonido inicial.',
        },

        {
          id: 6,
          audioText: 'D',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'b', text: 'B' },
            { id: 'd', text: 'D' },
            { id: 'p', text: 'P' },
          ],
          correctOptionIds: ['d'],
          explanation:
            'D, B y P se confunden fácilmente porque todas terminan en /iː/.',
        },

        {
          id: 7,
          audioText: 'P',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'b', text: 'B' },
            { id: 'p', text: 'P' },
            { id: 't', text: 'T' },
          ],
          correctOptionIds: ['p'],
          explanation:
            'P, B y T suenan parecido. Escucha si el sonido inicial es más suave (B) o más fuerte (P, T).',
        },

        {
          id: 8,
          audioText: 'V',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'b', text: 'B' },
            { id: 'd', text: 'D' },
            { id: 'v', text: 'V' },
          ],
          correctOptionIds: ['v'],
          explanation:
            'V suena parecido a B y D. En inglés, V se pronuncia con los dientes tocando el labio.',
        },

        {
          id: 9,
          audioText: 'C',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'c', text: 'C' },
            { id: 'e', text: 'E' },
            { id: 't', text: 'T' },
          ],
          correctOptionIds: ['c'],
          explanation: 'C suena /siː/, parecido a E y T que también terminan en /iː/.',
        },

        {
          id: 10,
          audioText: 'T',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'c', text: 'C' },
            { id: 'e', text: 'E' },
            { id: 't', text: 'T' },
          ],
          correctOptionIds: ['t'],
          explanation: 'T suena /tiː/, parecido a C y E.',
        },

        {
          id: 11,
          audioText: 'G',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'g', text: 'G' },
            { id: 'j', text: 'J' },
          ],
          correctOptionIds: ['g'],
          explanation:
            'G suena /dʒiː/ y J suena /dʒeɪ/. Ambas empiezan igual, pero terminan distinto.',
        },

        {
          id: 12,
          audioText: 'J',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'g', text: 'G' },
            { id: 'j', text: 'J' },
            { id: 'k', text: 'K' },
          ],
          correctOptionIds: ['j'],
          explanation:
            'J suena /dʒeɪ/, parecido a G al inicio, pero termina como A, H y K.',
        },

        {
          id: 13,
          audioText: 'M',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'm', text: 'M' },
            { id: 'n', text: 'N' },
          ],
          correctOptionIds: ['m'],
          explanation: 'M suena /ɛm/ y N suena /ɛn/. Son muy parecidas.',
        },

        {
          id: 14,
          audioText: 'N',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'm', text: 'M' },
            { id: 'n', text: 'N' },
          ],
          correctOptionIds: ['n'],
          explanation: 'N suena /ɛn/, muy parecido a M.',
        },

        {
          id: 15,
          audioText: 'F',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'f', text: 'F' },
            { id: 's', text: 'S' },
            { id: 'l', text: 'L' },
          ],
          correctOptionIds: ['f'],
          explanation:
            'F, S y L suenan parecido porque todas terminan en el sonido /ɛ/.',
        },

        {
          id: 16,
          audioText: 'S',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'f', text: 'F' },
            { id: 's', text: 'S' },
            { id: 'x', text: 'X' },
          ],
          correctOptionIds: ['s'],
          explanation: 'S suena /ɛs/, parecido a F y X.',
        },

        {
          id: 17,
          audioText: 'L',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'f', text: 'F' },
            { id: 'l', text: 'L' },
            { id: 'm', text: 'M' },
          ],
          correctOptionIds: ['l'],
          explanation: 'L suena /ɛl/, parecido a F y M.',
        },

        {
          id: 18,
          audioText: 'X',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 's', text: 'S' },
            { id: 'x', text: 'X' },
            { id: 'z', text: 'Z' },
          ],
          correctOptionIds: ['x'],
          explanation: 'X suena /ɛks/, parecido a S y Z.',
        },

        {
          id: 19,
          audioText: 'Q',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'q', text: 'Q' },
            { id: 'u', text: 'U' },
            { id: 'w', text: 'W' },
          ],
          correctOptionIds: ['q'],
          explanation:
            'Q, U y W comparten el sonido final /uː/ ("u"). Escucha bien el inicio.',
        },

        {
          id: 20,
          audioText: 'U',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'q', text: 'Q' },
            { id: 'u', text: 'U' },
            { id: 'w', text: 'W' },
          ],
          correctOptionIds: ['u'],
          explanation: 'U suena /juː/, parecido a Q y W.',
        },

        {
          id: 21,
          audioText: 'O',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'o', text: 'O' },
            { id: 'u', text: 'U' },
            { id: 'a', text: 'A' },
          ],
          correctOptionIds: ['o'],
          explanation:
            'O suena /oʊ/ ("ou"), un sonido único que no comparte con ninguna otra letra.',
        },

        {
          id: 22,
          audioText: 'R',
          language: 'en',
          prompt: '¿Qué letra escuchaste?',
          options: [
            { id: 'r', text: 'R' },
            { id: 'h', text: 'H' },
            { id: 'w', text: 'W' },
          ],
          correctOptionIds: ['r'],
          explanation:
            'R suena /ɑːr/ ("ar"), muy distinto a como suena la R en español.',
        },
      ],
    },
  ],
};

export default lessonA1003;
