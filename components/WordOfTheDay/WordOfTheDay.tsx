import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import SymbolShape from '@/components/MontessoriExercise/SymbolShape';
import VocabularyButton from '@/components/VocabularyButton/VocabularyButton';

import styles from './WordOfTheDay.module.css';

type WordType =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'article'
  | 'pronoun'
  | 'conjunction'
  | 'interjection';

type WordEntry = {
  word: string;
  translation: string;
  type: WordType;
  example: string;
};

const WORD_TYPE_INFO: Record<WordType, { label: string; shape: string; color: string }> = {
  noun: { label: 'Sustantivo', shape: 'triangle', color: 'black' },
  verb: { label: 'Verbo', shape: 'circle', color: 'red' },
  adjective: { label: 'Adjetivo', shape: 'triangle-small', color: 'blue' },
  adverb: { label: 'Adverbio', shape: 'circle-small', color: 'orange' },
  preposition: { label: 'Preposición', shape: 'crescent', color: 'green' },
  article: { label: 'Artículo', shape: 'triangle-small', color: 'light-blue' },
  pronoun: { label: 'Pronombre', shape: 'triangle', color: 'purple' },
  conjunction: { label: 'Conjunción', shape: 'bar', color: 'pink' },
  interjection: { label: 'Interjección', shape: 'keyhole', color: 'yellow' },
};

const WORDS: WordEntry[] = [
  { word: 'happy', translation: 'feliz', type: 'adjective', example: 'She feels happy today.' },
  { word: 'run', translation: 'correr', type: 'verb', example: 'They run every morning.' },
  { word: 'quickly', translation: 'rápidamente', type: 'adverb', example: 'He finished the test quickly.' },
  { word: 'house', translation: 'casa', type: 'noun', example: 'Our house has a red door.' },
  { word: 'friend', translation: 'amigo / amiga', type: 'noun', example: 'She is my best friend.' },
  { word: 'beautiful', translation: 'hermoso / hermosa', type: 'adjective', example: 'The sunset was beautiful.' },
  { word: 'eat', translation: 'comer', type: 'verb', example: 'We eat dinner at seven.' },
  { word: 'always', translation: 'siempre', type: 'adverb', example: 'I always drink coffee in the morning.' },
  { word: 'under', translation: 'debajo de', type: 'preposition', example: 'The cat is under the table.' },
  { word: 'and', translation: 'y', type: 'conjunction', example: 'I like tea and coffee.' },
  { word: 'wow', translation: '¡vaya! / ¡guau!', type: 'interjection', example: "Wow, that's amazing!" },
  { word: 'she', translation: 'ella', type: 'pronoun', example: 'She works at a hospital.' },
  { word: 'the', translation: 'el / la', type: 'article', example: 'The book is on the table.' },
  { word: 'work', translation: 'trabajar', type: 'verb', example: 'I work from home.' },
  { word: 'strong', translation: 'fuerte', type: 'adjective', example: 'He is very strong.' },
  { word: 'slowly', translation: 'lentamente', type: 'adverb', example: 'Please speak slowly.' },
  { word: 'between', translation: 'entre', type: 'preposition', example: 'The store is between the bank and the school.' },
  { word: 'but', translation: 'pero', type: 'conjunction', example: 'I wanted to go, but I was tired.' },
  { word: 'oh', translation: '¡oh!', type: 'interjection', example: 'Oh, I forgot my keys!' },
  { word: 'they', translation: 'ellos / ellas', type: 'pronoun', example: 'They live in Santo Domingo.' },
  { word: 'book', translation: 'libro', type: 'noun', example: 'This book is very interesting.' },
  { word: 'learn', translation: 'aprender', type: 'verb', example: 'I want to learn English.' },
  { word: 'difficult', translation: 'difícil', type: 'adjective', example: 'This exercise is difficult.' },
  { word: 'never', translation: 'nunca', type: 'adverb', example: 'She never arrives late.' },
  { word: 'with', translation: 'con', type: 'preposition', example: 'I go to school with my sister.' },
  { word: 'or', translation: 'o', type: 'conjunction', example: 'Do you want tea or coffee?' },
  { word: 'wait', translation: 'esperar', type: 'verb', example: 'Please wait for me.' },
  { word: 'kind', translation: 'amable', type: 'adjective', example: 'Your teacher is very kind.' },
  { word: 'today', translation: 'hoy', type: 'adverb', example: 'We have class today.' },
  { word: 'an', translation: 'un / una', type: 'article', example: 'She has an apple.' },
];

function getDominicanToday() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'America/Santo_Domingo',
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getDayOfYear(dateKey: string) {
  const date = new Date(`${dateKey}T00:00:00Z`);
  const startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  return Math.floor((date.getTime() - startOfYear.getTime()) / 86_400_000);
}

export default function WordOfTheDay() {
  const todayKey = getDominicanToday();
  const index = getDayOfYear(todayKey) % WORDS.length;
  const entry = WORDS[index];
  const typeInfo = WORD_TYPE_INFO[entry.type];

  return (
    <section className={styles.card} aria-labelledby="word-of-the-day-title">
      <p className={styles.eyebrow}>PALABRA DEL DÍA</p>

      <div className={styles.content}>
        <div className={styles.wordBlock}>
          <div className={styles.wordRow}>
            <h2 id="word-of-the-day-title" className={styles.word}>
              {entry.word}
            </h2>
            <AudioPlayer text={entry.word} language="en" />
          </div>

          <p className={styles.translation}>{entry.translation}</p>

          <div className={styles.typeTag}>
            <SymbolShape shape={typeInfo.shape} color={typeInfo.color} />
            <span>{typeInfo.label}</span>
          </div>

          <p className={styles.example}>&ldquo;{entry.example}&rdquo;</p>
        </div>

        <VocabularyButton
          word={entry.word}
          translation={entry.translation}
          lessonKey="word-of-the-day"
          exampleSentence={entry.example}
        />
      </div>
    </section>
  );
}
