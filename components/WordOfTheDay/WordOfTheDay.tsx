import Link from 'next/link';

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
  exampleTranslation: string;
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
  { word: 'happy', translation: 'feliz', type: 'adjective', example: 'She feels happy today.', exampleTranslation: 'Ella se siente feliz hoy.' },
  { word: 'run', translation: 'correr', type: 'verb', example: 'They run every morning.', exampleTranslation: 'Ellos corren todas las mañanas.' },
  { word: 'quickly', translation: 'rápidamente', type: 'adverb', example: 'He finished the test quickly.', exampleTranslation: 'Él terminó el examen rápidamente.' },
  { word: 'house', translation: 'casa', type: 'noun', example: 'Our house has a red door.', exampleTranslation: 'Nuestra casa tiene una puerta roja.' },
  { word: 'friend', translation: 'amigo / amiga', type: 'noun', example: 'She is my best friend.', exampleTranslation: 'Ella es mi mejor amiga.' },
  { word: 'beautiful', translation: 'hermoso / hermosa', type: 'adjective', example: 'The sunset was beautiful.', exampleTranslation: 'El atardecer era hermoso.' },
  { word: 'eat', translation: 'comer', type: 'verb', example: 'We eat dinner at seven.', exampleTranslation: 'Cenamos a las siete.' },
  { word: 'always', translation: 'siempre', type: 'adverb', example: 'I always drink coffee in the morning.', exampleTranslation: 'Siempre tomo café en la mañana.' },
  { word: 'under', translation: 'debajo de', type: 'preposition', example: 'The cat is under the table.', exampleTranslation: 'El gato está debajo de la mesa.' },
  { word: 'and', translation: 'y', type: 'conjunction', example: 'I like tea and coffee.', exampleTranslation: 'Me gusta el té y el café.' },
  { word: 'wow', translation: '¡vaya! / ¡guau!', type: 'interjection', example: "Wow, that's amazing!", exampleTranslation: '¡Vaya, eso es increíble!' },
  { word: 'she', translation: 'ella', type: 'pronoun', example: 'She works at a hospital.', exampleTranslation: 'Ella trabaja en un hospital.' },
  { word: 'the', translation: 'el / la', type: 'article', example: 'The book is on the table.', exampleTranslation: 'El libro está sobre la mesa.' },
  { word: 'work', translation: 'trabajar', type: 'verb', example: 'I work from home.', exampleTranslation: 'Trabajo desde casa.' },
  { word: 'strong', translation: 'fuerte', type: 'adjective', example: 'He is very strong.', exampleTranslation: 'Él es muy fuerte.' },
  { word: 'slowly', translation: 'lentamente', type: 'adverb', example: 'Please speak slowly.', exampleTranslation: 'Por favor, habla lentamente.' },
  { word: 'between', translation: 'entre', type: 'preposition', example: 'The store is between the bank and the school.', exampleTranslation: 'La tienda está entre el banco y la escuela.' },
  { word: 'but', translation: 'pero', type: 'conjunction', example: 'I wanted to go, but I was tired.', exampleTranslation: 'Quería ir, pero estaba cansado o cansada.' },
  { word: 'oh', translation: '¡oh!', type: 'interjection', example: 'Oh, I forgot my keys!', exampleTranslation: '¡Oh, olvidé mis llaves!' },
  { word: 'they', translation: 'ellos / ellas', type: 'pronoun', example: 'They live in Santo Domingo.', exampleTranslation: 'Ellos viven en Santo Domingo.' },
  { word: 'book', translation: 'libro', type: 'noun', example: 'This book is very interesting.', exampleTranslation: 'Este libro es muy interesante.' },
  { word: 'learn', translation: 'aprender', type: 'verb', example: 'I want to learn English.', exampleTranslation: 'Quiero aprender inglés.' },
  { word: 'difficult', translation: 'difícil', type: 'adjective', example: 'This exercise is difficult.', exampleTranslation: 'Este ejercicio es difícil.' },
  { word: 'never', translation: 'nunca', type: 'adverb', example: 'She never arrives late.', exampleTranslation: 'Ella nunca llega tarde.' },
  { word: 'with', translation: 'con', type: 'preposition', example: 'I go to school with my sister.', exampleTranslation: 'Voy a la escuela con mi hermana.' },
  { word: 'or', translation: 'o', type: 'conjunction', example: 'Do you want tea or coffee?', exampleTranslation: '¿Quieres té o café?' },
  { word: 'wait', translation: 'esperar', type: 'verb', example: 'Please wait for me.', exampleTranslation: 'Por favor, espérame.' },
  { word: 'kind', translation: 'amable', type: 'adjective', example: 'Your teacher is very kind.', exampleTranslation: 'Tu profesor o profesora es muy amable.' },
  { word: 'today', translation: 'hoy', type: 'adverb', example: 'We have class today.', exampleTranslation: 'Tenemos clase hoy.' },
  { word: 'an', translation: 'un / una', type: 'article', example: 'She has an apple.', exampleTranslation: 'Ella tiene una manzana.' },
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

export default function WordOfTheDay({
  savedFlashcards,
  englishVariant = 'en',
}: {
  savedFlashcards?: number;
  englishVariant?: 'en' | 'en-GB';
}) {
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
            <AudioPlayer text={entry.word} language={englishVariant} />
          </div>

          <p className={styles.translation}>{entry.translation}</p>

          <div className={styles.typeTag}>
            <SymbolShape shape={typeInfo.shape} color={typeInfo.color} />
            <span>{typeInfo.label}</span>
          </div>

          <p className={styles.example}>&ldquo;{entry.example}&rdquo;</p>
          <p className={styles.exampleTranslation}>{entry.exampleTranslation}</p>
        </div>

        <VocabularyButton
          word={entry.word}
          translation={entry.translation}
          lessonKey="word-of-the-day"
          exampleSentence={entry.example}
        />
      </div>

      {typeof savedFlashcards === 'number' ? (
        <div className={styles.flashcardsFooter}>
          <span className={styles.flashcardsLabel}>Vocabulary Building</span>
          <strong className={styles.flashcardsCount}>{savedFlashcards}</strong>
          <Link href="/flashcards" className={styles.flashcardsLink}>
            Repasar flashcards →
          </Link>
        </div>
      ) : null}
    </section>
  );
}
