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

export async function getAudio(text: string): Promise<Blob | null> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.get(text.toLowerCase());

    request.onsuccess = () => {
      console.log('CACHE GET:', text.toLowerCase(), request.result);
      resolve(request.result ?? null);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function saveAudio(text: string, blob: Blob) {
  const db = await openDB();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    store.put(blob, text.toLowerCase());

    transaction.oncomplete = () => {
      console.log('CACHE SAVE:', text.toLowerCase());
      resolve();
    };

    transaction.oncomplete = () => resolve();

    transaction.onerror = () => reject(transaction.error);
  });
}
