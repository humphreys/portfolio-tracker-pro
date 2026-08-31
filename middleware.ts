import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Pages that don't need authentication
const publicPages = ['/', '/login', '/signup', '/about']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Allow public pages
  if (publicPages.includes(pathname)) {
    return NextResponse.next()
  }

  // For now, allow everything
  // In Phase 2, we'll check for authentication here
  return NextResponse.next()
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}