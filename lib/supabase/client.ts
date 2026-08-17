import { createBrowserClient } from '@supabase/ssr';

const KEEP_SESSION_KEY = 'inglesconlau-keep-session';

export function createClient() {
  const keepSession =
    typeof window === 'undefined' ||
    window.localStorage.getItem(KEEP_SESSION_KEY) !== 'false';

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: {
        persistSession: true,
        storage: keepSession ? window.localStorage : window.sessionStorage,
      },
    }
  );
}