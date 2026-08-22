export type TranslatableWord = {
  word: string;
  translation: string;
};

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

export type ListeningChoiceOption = {
  id: string;
  text: string;
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

export type LessonExercise =
  | FillInTheBlanksExercise
  | DragAndDropExercise
  | MontessoriExercise
  | ListeningChoiceExercise;

export type LessonContent = {
  level: string;

  number: number;

  title: string;

  subtitle: string;

  videoSrc?: string;

  videoTitle: string;

  videoDescription: string;

  objective: string;

  exercises: LessonExercise[];
};