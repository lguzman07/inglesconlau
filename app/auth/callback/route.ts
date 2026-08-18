import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const loginUrl = new URL('/iniciar-sesion', requestUrl.origin);

  if (!code) {
    loginUrl.searchParams.set('error', 'oauth_callback');
    return NextResponse.redirect(loginUrl);
  }

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    loginUrl.searchParams.set('error', 'oauth_callback');
    return NextResponse.redirect(loginUrl);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    loginUrl.searchParams.set('error', 'oauth_callback');
    return NextResponse.redirect(loginUrl);
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select(
      'full_name, birth_date, country, gender, english_level, learning_goal'
    )
    .eq('id', user.id)
    .maybeSingle();

  const profileIsComplete = Boolean(
    profile?.full_name?.trim() &&
      profile?.birth_date &&
      profile?.country?.trim() &&
      profile?.gender &&
      profile?.english_level &&
      profile?.learning_goal
  );

  const destination = profileIsComplete
    ? '/inicio'
    : '/completar-perfil';

  return NextResponse.redirect(new URL(destination, requestUrl.origin));
}