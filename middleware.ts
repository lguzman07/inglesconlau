import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const username = process.env.SITE_USERNAME;
  const password = process.env.SITE_PASSWORD;

  if (!username || !password) {
    return new NextResponse('Private site configuration is missing.', {
      status: 503,
    });
  }

  const authorization = request.headers.get('authorization');

  if (authorization?.startsWith('Basic ')) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(':');
      const enteredUsername = decoded.slice(0, separator);
      const enteredPassword = decoded.slice(separator + 1);

      if (
        enteredUsername === username &&
        enteredPassword === password
      ) {
        return NextResponse.next();
      }
    } catch {
      // The browser will request the credentials again.
    }
  }

  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Inglés con Lau"',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};