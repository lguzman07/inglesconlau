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

export type LessonExercise =
  | FillInTheBlanksExercise
  | DragAndDropExercise;

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