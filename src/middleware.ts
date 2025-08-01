import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Only these paths are allowed to be viewed
  const ALLOWED_PATHS = [
    '/',                // Main landing page
    '/supplier',        // Supplier landing page
    '/blog',           // Blog listing
    '/waiting-list',   // Waiting list page itself
    '/_next',          // Next.js assets
    '/api',            // API routes
    '/public'          // Public assets
  ]

  // Allow blog detail pages
  if (path.startsWith('/blog/')) {
    return NextResponse.next()
  }

  // Check if the current path is allowed
  const isAllowedPath = ALLOWED_PATHS.some(allowedPath => 
    path === allowedPath || path.startsWith(allowedPath)
  )

  // If it's not an allowed path, redirect to waiting list
  if (!isAllowedPath) {
    return NextResponse.redirect(new URL('/waiting-list', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 