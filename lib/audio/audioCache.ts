const DB_NAME = 'english-with-lau';
const STORE_NAME = 'tts-cache';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);

    request.onerror = () => reject(request.error);
  });
}

function getCacheKey(text: string, language: string) {
  return `${language}:${text.trim().toLowerCase()}`;
}

export async function getAudio(
  text: string,
  language: string
): Promise<Blob | null> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);

    const cacheKey = getCacheKey(text, language);
    const request = store.get(cacheKey);

    request.onsuccess = () => {
      console.log('CACHE GET:', cacheKey, request.result);
      resolve(request.result ?? null);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function saveAudio(
  text: string,
  language: string,
  blob: Blob
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const cacheKey = getCacheKey(text, language);

    store.put(blob, cacheKey);

    transaction.oncomplete = () => {
      console.log('CACHE SAVE:', cacheKey);
      resolve();
    };

    transaction.onerror = () => reject(transaction.error);
  });
}