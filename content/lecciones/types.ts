export type TranslatableWord = {
  word: string;
  translation: string;
};

/* ==========================================
   Fill in the blanks
========================================== */

export type FillInTheBlanksQuestion = {
  id: number;
  before: TranslatableWord[];
  after: TranslatableWord[];
  answer: string;
  sentenceTranslation: string;
};

export type FillInTheBlanksExercise = {
  type: 'fill-in-the-blanks';
  title: string;
  instructions: string;
  questions: FillInTheBlanksQuestion[];
};

/* ==========================================
   Drag and Drop
========================================== */

export type DragAndDropToken = {
  id: string;
  word: string;
  translation: string;
};

export type DragAndDropQuestion = {
  id: number;
  tokens: DragAndDropToken[];
  correctOrder: string[];
  sentenceTranslation: string;
};

export type DragAndDropExercise = {
  type: 'drag-and-drop';
  title: string;
  instructions: string;
  questions: DragAndDropQuestion[];
};

/* ==========================================
   Montessori
========================================== */

export type MontessoriShape =
  | 'circle'
  | 'triangle'
  | 'small-circle'
  | 'small-triangle'
  | 'crescent'
  | 'bar'
  | 'keyhole';

export type MontessoriColor =
  | 'red'
  | 'black'
  | 'blue'
  | 'light-blue'
  | 'purple'
  | 'green'
  | 'pink'
  | 'orange'
  | 'yellow';

export type MontessoriWord = {
  id: string;
  word: string;
  translation: string;
};

export type MontessoriSymbol = {
  id: string;
  shape: MontessoriShape;
  color: MontessoriColor;
  label: string;
};

export type MontessoriPlacement = {
  wordId: string;
  symbolId: string;
};

export type MontessoriQuestion = {
  id: number;
  words: MontessoriWord[];
  symbols: MontessoriSymbol[];
  correctPlacements: MontessoriPlacement[];
  sentenceTranslation: string;
};

export type MontessoriExercise = {
  type: 'montessori';
  title: string;
  instructions: string;
  questions: MontessoriQuestion[];
};

/* ==========================================
   Listening Choice
========================================== */

export type ListeningChoiceOption = {
  id: string;
  text: string;
  translation?: string;
};

export type ListeningChoiceQuestion = {
  id: number;
  audioText: string;
  language: 'en' | 'en-GB';
  prompt: string;
  options: ListeningChoiceOption[];
  correctOptionIds: string[];
  explanation?: string;
};

export type ListeningChoiceExercise = {
  type: 'listening-choice';
  title: string;
  instructions: string;
  questions: ListeningChoiceQuestion[];
};

/* ==========================================
   Construcción de oraciones desde cero
========================================== */

export type SentenceConstructionQuestion = {
  id: number;

  /*
   * Oración que la estudiante verá en español.
   * Debe escribirla completamente en inglés.
   */
  sourceSentence: string;

  /*
   * Permite aceptar más de una respuesta correcta.
   * La primera será la respuesta principal.
   */
  acceptedAnswers: string[];

  /*
   * Palabras de la respuesta modelo.
   * Permite mostrar traducciones palabra por palabra.
   */
  modelAnswer: TranslatableWord[];

  explanation?: string;
};

export type SentenceConstructionExercise = {
  type: 'sentence-construction';
  title: string;
  instructions: string;
  questions: SentenceConstructionQuestion[];
};

/* ==========================================
   Detecta y corrige el error
========================================== */

export type ErrorCorrectionQuestion = {
  id: number;

  /*
   * Oración incorrecta dividida en palabras.
   * Las traducciones podrán mostrarse al tocar cada palabra.
   */
  sentence: TranslatableWord[];

  /*
   * Posición de la palabra incorrecta dentro de sentence.
   * La primera palabra tiene el índice 0.
   */
  incorrectWordIndex: number;

  /*
   * Palabra correcta que debe escribir la estudiante.
   */
  answer: string;

  /*
   * Oración completa después de corregir el error.
   */
  correctSentence: TranslatableWord[];

  sentenceTranslation: string;

  explanation?: string;
};

export type ErrorCorrectionExercise = {
  type: 'error-correction';
  title: string;
  instructions: string;
  questions: ErrorCorrectionQuestion[];
};

/* ==========================================
   Todos los tipos de ejercicios
========================================== */

export type LessonExercise =
  | FillInTheBlanksExercise
  | DragAndDropExercise
  | MontessoriExercise
  | ListeningChoiceExercise
  | SentenceConstructionExercise
  | ErrorCorrectionExercise;

/* ==========================================
   Contenido de una lección
========================================== */

export type LessonContent = {
  level: string;
  number: number;
  title: string;
  subtitle: string;
  videoSrc?: string;
  videoTitle: string;
  videoDescription: string;
  objective: string;
  pdfUrl?: string;
  exercises: LessonExercise[];
};