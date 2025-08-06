'use client'

import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { ToastProvider } from "@/lib/toast-provider"
import { FloatingCart } from "@/components/ui/floating-cart"
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Paths that are allowed to be viewed
    const allowedPaths = ['/', '/supplier', '/about', '/blog', '/waiting-list', '/contact']

    // Check if current path is allowed
    const isAllowedPath = allowedPaths.some(path => pathname === path) || 
                         pathname.startsWith('/blog/') || 
                         pathname.startsWith('/_next/') ||
                         pathname.startsWith('/api/') ||
                         pathname === '/favicon.ico'

    // If path is not allowed, redirect to waiting list
    if (!isAllowedPath) {
      router.push('/waiting-list')
    }
  }, [pathname, router])

  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <AuthProvider>
          <CartProvider>
            {children}
            <FloatingCart />
            <ToastProvider />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
