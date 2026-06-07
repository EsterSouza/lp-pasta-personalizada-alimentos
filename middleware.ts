import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // Ignorar rotas internas do Next.js, HMR, APIs e arquivos estáticos (.png, .webp, etc)
  if (
    url.startsWith('/_next') ||
    url.startsWith('/api') ||
    url.includes('.')
  ) {
    return NextResponse.next();
  }

  const COOKIE_NAME = 'ab-test-version';
  let version = request.cookies.get(COOKIE_NAME)?.value;

  if (!version) {
    version = Math.random() < 0.5 ? 'A' : 'B';
  }

  // Modificar os headers da requisição para injetar a versão do teste A/B no Server Component
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-ab-test-version', version);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Grava o cookie no navegador do usuário válido por 30 dias se ainda não existir
  if (!request.cookies.has(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, version, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/',
    });
  }

  return response;
}

// Configura o middleware para rodar apenas no acesso à página inicial e páginas principais
export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
