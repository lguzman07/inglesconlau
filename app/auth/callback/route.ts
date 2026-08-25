import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/inicio';
  }

  return value;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const keepSession = requestUrl.searchParams.get('keep_session') !== 'false';
  const deviceId = requestUrl.searchParams.get('device_id');
  const deviceName = requestUrl.searchParams.get('device_name');
  const nextPath = getSafeNextPath(requestUrl.searchParams.get('next'));
  const loginUrl = new URL('/iniciar-sesion', requestUrl.origin);
  loginUrl.searchParams.set('next', nextPath);

  function redirectToLogin(error: string) {
    loginUrl.searchParams.set('error', error);
    return NextResponse.redirect(loginUrl);
  }

  if (!code || !deviceId) return redirectToLogin('oauth_callback');

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
            if (keepSession) {
              cookieStore.set(name, value, options);
              return;
            }

            const { expires: _expires, maxAge: _maxAge, ...sessionOptions } =
              options;
            cookieStore.set(name, value, sessionOptions);
          });
        },
      },
    },
  );

  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) return redirectToLogin('oauth_callback');

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    await supabase.auth.signOut();
    return redirectToLogin('oauth_callback');
  }

  const { error: deviceError } = await supabase.rpc(
    'register_current_device',
    {
      p_device_id: deviceId,
      p_device_name: deviceName ?? 'Dispositivo',
    },
  );

  if (deviceError) {
    await supabase.auth.signOut();
    const reachedDeviceLimit = deviceError.message
      .toLowerCase()
      .includes('2 dispositivos activos');

    return redirectToLogin(
      reachedDeviceLimit ? 'device_limit' : 'oauth_callback',
    );
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl.origin));
}
