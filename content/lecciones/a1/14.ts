import type { LessonContent } from '../types';

const lessonA1014: LessonContent = {
  level: 'a1',
  number: 14,
  title: 'Tu familia, posesivos y have/has',
  subtitle: 'Aprende a hablar de tu familia con adjetivos posesivos, el genitivo sajón y have/has.',
  videoTitle: 'Tu familia, posesivos y have/has',
  videoDescription: 'En este video verás my, your, his, her, our y their, el genitivo sajón (Ana’s mother) y have/has para posesión.',
  objective: 'Al terminar, podrás hablar de tu familia y de lo que tienes usando posesivos, ’s y have/has.',
  exercises: [
    {
      type: 'fill-in-the-blanks',
      title: 'Adjetivos posesivos',
      instructions: 'Escribe el adjetivo posesivo en inglés: my, your, his, her, our o their. La pista en español aparece entre paréntesis.',
      questions: [
        {
          id: 1,
          before: [
            { word: 'This', translation: 'esta' },
            { word: 'is', translation: 'es' },
          ],
          after: [
            { word: 'mother.', translation: 'mamá' },
          ],
          answer: 'my',
          hint: 'mi',
          sentenceTranslation: 'Esta es mi mamá.',
        },
        {
          id: 2,
          before: [],
          after: [
            { word: 'sister', translation: 'hermana' },
            { word: 'is', translation: 'es' },
            { word: 'tall.', translation: 'alta' },
          ],
          answer: 'Your',
          hint: 'tu',
          sentenceTranslation: 'Tu hermana es alta.',
        },
        {
          id: 3,
          before: [],
          after: [
            { word: 'brother', translation: 'hermano' },
            { word: 'is', translation: 'es' },
            { word: 'a', translation: 'un/una' },
            { word: 'doctor.', translation: 'doctor' },
          ],
          answer: 'Her',
          hint: 'de ella',
          sentenceTranslation: 'Su hermano es doctor.',
        },
        {
          id: 4,
          before: [],
          after: [
            { word: 'house', translation: 'casa' },
            { word: 'is', translation: 'es' },
            { word: 'big.', translation: 'grande' },
          ],
          answer: 'Our',
          hint: 'nuestra',
          sentenceTranslation: 'Nuestra casa es grande.',
        },
        {
          id: 5,
          before: [],
          after: [
            { word: 'dog', translation: 'perro' },
            { word: 'is', translation: 'es' },
            { word: 'small.', translation: 'pequeño' },
          ],
          answer: 'Their',
          hint: 'de ellos',
          sentenceTranslation: 'Su perro es pequeño.',
        },
        {
          id: 6,
          before: [],
          after: [
            { word: 'name', translation: 'nombre' },
            { word: 'is', translation: 'es' },
            { word: 'Tom.', translation: 'Tom' },
          ],
          answer: 'His',
          hint: 'de él',
          sentenceTranslation: 'Su nombre es Tom.',
        },
      ],
    },
    {
      type: 'fill-in-the-blanks',
      title: 'Have o has',
      instructions: 'Escribe have o has. I, you, we, they → have. He, she, it → has.',
      questions: [
        {
          id: 7,
          before: [
            { word: 'I', translation: 'yo' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'brother.', translation: 'hermano' },
          ],
          answer: 'have',
          sentenceTranslation: 'Tengo un hermano.',
        },
        {
          id: 8,
          before: [
            { word: 'She', translation: 'ella' },
          ],
          after: [
            { word: 'two', translation: 'dos' },
            { word: 'sisters.', translation: 'hermanas' },
          ],
          answer: 'has',
          sentenceTranslation: 'Ella tiene dos hermanas.',
        },
        {
          id: 9,
          before: [
            { word: 'They', translation: 'ellos' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'big', translation: 'grande' },
            { word: 'house.', translation: 'casa' },
          ],
          answer: 'have',
          sentenceTranslation: 'Ellos tienen una casa grande.',
        },
        {
          id: 10,
          before: [
            { word: 'He', translation: 'él' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'car.', translation: 'carro' },
          ],
          answer: 'has',
          sentenceTranslation: 'Él tiene un carro.',
        },
        {
          id: 11,
          before: [
            { word: 'We', translation: 'nosotros' },
          ],
          after: [
            { word: 'two', translation: 'dos' },
            { word: 'dogs.', translation: 'perros' },
          ],
          answer: 'have',
          sentenceTranslation: 'Tenemos dos perros.',
        },
        {
          id: 12,
          before: [
            { word: 'Do', translation: 'tienes' },
            { word: 'you', translation: 'tú' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'sister?', translation: 'hermana' },
          ],
          answer: 'have',
          sentenceTranslation: '¿Tienes una hermana?',
        },
        {
          id: 13,
          before: [
            { word: 'Tom', translation: 'Tom' },
          ],
          after: [
            { word: 'a', translation: 'un/una' },
            { word: 'cat.', translation: 'gato' },
          ],
          answer: 'has',
          sentenceTranslation: 'Tom tiene un gato.',
        },
      ],
    },
    {
      type: 'listening-choice',
      title: '¿De quién es?',
      instructions: 'Escucha la oración y elige de quién habla.',
      questions: [
        {
          id: 14,
          audioText: 'His name is Tom.',
          language: 'en',
          prompt: '¿De quién es el nombre?',
          options: [
            { id: 'el', text: 'De él' },
            { id: 'ella', text: 'De ella' },
          ],
          correctOptionIds: ['el'],
          explanation: 'his = su (de él).',
        },
        {
          id: 15,
          audioText: 'Her name is Ana.',
          language: 'en',
          prompt: '¿De quién es el nombre?',
          options: [
            { id: 'el', text: 'De él' },
            { id: 'ella', text: 'De ella' },
          ],
          correctOptionIds: ['ella'],
          explanation: 'her = su (de ella).',
        },
        {
          id: 16,
          audioText: 'This is Ana’s mother.',
          language: 'en',
          prompt: '¿De quién es la mamá?',
          options: [
            { id: 'a', text: 'De Ana' },
            { id: 'b', text: 'De Tom' },
          ],
          correctOptionIds: ['a'],
          explanation: 'Ana’s mother = la mamá de Ana.',
        },
        {
          id: 17,
          audioText: 'Their dog is small.',
          language: 'en',
          prompt: '¿De quién es el perro?',
          options: [
            { id: 'a', text: 'De ellos' },
            { id: 'b', text: 'Nuestro' },
          ],
          correctOptionIds: ['a'],
          explanation: 'their = su (de ellos).',
        },
        {
          id: 18,
          audioText: 'Our house is big.',
          language: 'en',
          prompt: '¿De quién es la casa?',
          options: [
            { id: 'a', text: 'De ellos' },
            { id: 'b', text: 'Nuestra' },
          ],
          correctOptionIds: ['b'],
          explanation: 'our = nuestro/a.',
        },
        {
          id: 19,
          audioText: 'This is my parents’ house.',
          language: 'en',
          prompt: '¿De quién es la casa?',
          options: [
            { id: 'a', text: 'De mis padres' },
            { id: 'b', text: 'De mi hermano' },
          ],
          correctOptionIds: ['a'],
          explanation: 'my parents’ house = la casa de mis padres.',
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
            { id: 'q20-this', word: 'This', translation: 'esta' },
            { id: 'q20-is', word: 'is', translation: 'es' },
            { id: 'q20-my', word: 'my', translation: 'mi' },
            { id: 'q20-mother', word: 'mother.', translation: 'mamá' },
          ],
          correctOrder: ['q20-this', 'q20-is', 'q20-my', 'q20-mother'],
          sentenceTranslation: 'Esta es mi mamá.',
        },
        {
          id: 21,
          tokens: [
            { id: 'q21-her', word: 'Her', translation: 'su (de ella)' },
            { id: 'q21-brother', word: 'brother', translation: 'hermano' },
            { id: 'q21-is', word: 'is', translation: 'es' },
            { id: 'q21-a', word: 'a', translation: 'un/una' },
            { id: 'q21-doctor', word: 'doctor.', translation: 'doctor' },
          ],
          correctOrder: ['q21-her', 'q21-brother', 'q21-is', 'q21-a', 'q21-doctor'],
          sentenceTranslation: 'Su hermano es doctor.',
        },
        {
          id: 22,
          tokens: [
            { id: 'q22-anas', word: 'Ana’s', translation: 'de Ana' },
            { id: 'q22-mother', word: 'mother', translation: 'mamá' },
            { id: 'q22-is', word: 'is', translation: 'es' },
            { id: 'q22-a', word: 'a', translation: 'un/una' },
            { id: 'q22-teacher', word: 'teacher.', translation: 'maestra' },
          ],
          correctOrder: ['q22-anas', 'q22-mother', 'q22-is', 'q22-a', 'q22-teacher'],
          sentenceTranslation: 'La mamá de Ana es maestra.',
        },
        {
          id: 23,
          tokens: [
            { id: 'q23-i', word: 'I', translation: 'yo' },
            { id: 'q23-have', word: 'have', translation: 'tengo' },
            { id: 'q23-two', word: 'two', translation: 'dos' },
            {
              id: 'q23-brothers',
              word: 'brothers.',
              translation: 'hermanos',
            },
          ],
          correctOrder: ['q23-i', 'q23-have', 'q23-two', 'q23-brothers'],
          sentenceTranslation: 'Tengo dos hermanos.',
        },
        {
          id: 24,
          tokens: [
            { id: 'q24-she', word: 'She', translation: 'ella' },
            { id: 'q24-has', word: 'has', translation: 'tiene' },
            { id: 'q24-a', word: 'a', translation: 'un/una' },
            { id: 'q24-big', word: 'big', translation: 'grande' },
            { id: 'q24-house', word: 'house.', translation: 'casa' },
          ],
          correctOrder: ['q24-she', 'q24-has', 'q24-a', 'q24-big', 'q24-house'],
          sentenceTranslation: 'Ella tiene una casa grande.',
        },
        {
          id: 25,
          tokens: [
            { id: 'q25-do', word: 'Do', translation: 'tienes' },
            { id: 'q25-you', word: 'you', translation: 'tú' },
            { id: 'q25-have', word: 'have', translation: 'tengo' },
            { id: 'q25-a', word: 'a', translation: 'un/una' },
            { id: 'q25-sister', word: 'sister?', translation: 'hermana' },
          ],
          correctOrder: ['q25-do', 'q25-you', 'q25-have', 'q25-a', 'q25-sister'],
          sentenceTranslation: '¿Tienes una hermana?',
        },
      ],
    },
  ],
};

export default lessonA1014;
