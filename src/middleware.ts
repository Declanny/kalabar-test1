import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define allowed paths
  const ALLOWED_PATHS = [
    '/',
    '/supplier',
    '/about',
    '/contact',
    '/blog',
    '/waiting-list'
  ]

  // Allow Next.js internal paths and static assets
  if (path.startsWith('/_next') || path.startsWith('/api') || path.startsWith('/public') || path.startsWith('/logos') || path.startsWith('/images') || path.startsWith('/icons') || path.startsWith('/avatars')) {
    return NextResponse.next()
  }

  // Allow blog detail pages
  if (path.startsWith('/blog/')) {
    return NextResponse.next()
  }

  // Check if path is exactly in allowed paths
  if (ALLOWED_PATHS.includes(path)) {
    return NextResponse.next()
  }

  // Redirect everything else to waiting list
  return NextResponse.redirect(new URL('/waiting-list', request.url))
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     * 4. Static assets (logos, images, icons, avatars)
     */
    '/((?!_next/static|_next/image|favicon.ico|logos|images|icons|avatars).*)',
  ],
} 