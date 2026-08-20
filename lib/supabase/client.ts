import { createBrowserClient } from '@supabase/ssr';

const KEEP_SESSION_KEY = 'inglesconlau-keep-session';

export function saveKeepSessionPreference(keepSession: boolean) {
  window.localStorage.setItem(KEEP_SESSION_KEY, String(keepSession));
}

function getSupabaseCookieNames() {
  return document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter(
      (name) =>
        name.startsWith('sb-') &&
        (name.includes('auth-token') || name.includes('code-verifier')),
    );
}

export function clearStoredSupabaseSessions() {
  if (typeof window === 'undefined') {
    return;
  }

  const storageKeys = (storage: Storage) => {
    const keys: string[] = [];

    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);

      if (
        key?.startsWith('sb-') &&
        (key.includes('auth-token') || key.includes('code-verifier'))
      ) {
        keys.push(key);
      }
    }

    return keys;
  };

  [...storageKeys(window.localStorage), ...storageKeys(window.sessionStorage)]
    .forEach((key) => {
      window.localStorage.removeItem(key);
      window.sessionStorage.removeItem(key);
    });

  getSupabaseCookieNames().forEach((name) => {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
  });
}

export function makeSupabaseCookiesSessionOnly() {
  if (typeof window === 'undefined') {
    return;
  }

  getSupabaseCookieNames().forEach((name) => {
    const value = document.cookie
      .split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${name}=`))
      ?.slice(name.length + 1);

    if (!value) {
      return;
    }

    const secure = window.location.protocol === 'https:' ? '; Secure' : '';

    // Al no incluir Max-Age ni Expires, esta es una cookie de sesión.
    document.cookie = `${name}=${value}; Path=/; SameSite=Lax${secure}`;
  });
}

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}