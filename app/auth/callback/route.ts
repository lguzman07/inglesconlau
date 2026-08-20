import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);

  const code =
    requestUrl.searchParams.get('code');

  const keepSession =
    requestUrl.searchParams.get(
      'keep_session',
    ) !== 'false';

  const deviceId =
    requestUrl.searchParams.get(
      'device_id',
    );

  const deviceName =
    requestUrl.searchParams.get(
      'device_name',
    );

  const loginUrl =
    new URL(
      '/iniciar-sesion',
      requestUrl.origin,
    );

  if (!code) {
    loginUrl.searchParams.set(
      'error',
      'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  if (!deviceId) {
    loginUrl.searchParams.set(
      'error',
      'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  const cookieStore =
    await cookies();

  const supabase =
    createServerClient(
      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,
      process.env
        .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },

          setAll(cookiesToSet) {
            cookiesToSet.forEach(
              ({
                name,
                value,
                options,
              }) => {
                if (keepSession) {
                  cookieStore.set(
                    name,
                    value,
                    options,
                  );

                  return;
                }

                const {
                  expires: _expires,
                  maxAge: _maxAge,
                  ...sessionOptions
                } = options;

                cookieStore.set(
                  name,
                  value,
                  sessionOptions,
                );
              },
            );
          },
        },
      },
    );

  const {
    error: exchangeError,
  } =
    await supabase.auth.exchangeCodeForSession(
      code,
    );

  if (exchangeError) {
    loginUrl.searchParams.set(
      'error',
      'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  const {
    data: { user },
  } =
    await supabase.auth.getUser();

  if (!user) {
    await supabase.auth.signOut();

    loginUrl.searchParams.set(
      'error',
      'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  const {
    error: deviceError,
  } =
    await supabase.rpc(
      'register_current_device',
      {
        p_device_id: deviceId,
        p_device_name:
          deviceName ??
          'Dispositivo',
      },
    );

  if (deviceError) {
    await supabase.auth.signOut();

    const reachedDeviceLimit =
      deviceError.message
        .toLowerCase()
        .includes(
          '2 dispositivos activos',
        );

    loginUrl.searchParams.set(
      'error',
      reachedDeviceLimit
        ? 'device_limit'
        : 'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  const {
    data: profile,
    error: profileError,
  } =
    await supabase
      .from('profiles')
      .select(
        'full_name, birth_date, country, gender, english_level, learning_goal',
      )
      .eq('id', user.id)
      .maybeSingle();

  if (profileError) {
    loginUrl.searchParams.set(
      'error',
      'oauth_callback',
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  const profileIsComplete =
    Boolean(
      profile?.full_name?.trim() &&
        profile?.birth_date &&
        profile?.country?.trim() &&
        profile?.gender &&
        profile?.english_level &&
        profile?.learning_goal,
    );

  return NextResponse.redirect(
    new URL(
      profileIsComplete
        ? '/inicio'
        : '/completar-perfil',
      requestUrl.origin,
    ),
  );
}