"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'buyer' | 'supplier' | 'admin'
  requireVerification?: boolean
}

export function ProtectedRoute({ 
  children, 
  requiredRole, 
  requireVerification = true 
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      // Redirect if not authenticated
      if (!isAuthenticated) {
        router.push('/auth/login')
        return
      }

      // Redirect if email not verified
      if (requireVerification && !user?.verified) {
        router.push(`/auth/verify-email?email=${encodeURIComponent(user?.email || '')}`)
        return
      }

      // Redirect if role doesn't match
      if (requiredRole && user?.role !== requiredRole) {
        router.push('/dashboard')
        return
      }
    }
  }, [isAuthenticated, user, isLoading, router, requiredRole, requireVerification])

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render if not authenticated or not verified
  if (!isAuthenticated || (requireVerification && !user?.verified)) {
    return null
  }

  // Don't render if role doesn't match
  if (requiredRole && user?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
} 