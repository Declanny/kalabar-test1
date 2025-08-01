"use client"

import React, { Suspense } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Package } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

function DashboardContent({
  children,
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useAuth()
  
  // Get role from URL params or user data, default to supplier
  const userRole = searchParams.get('role') === 'buyer' ? 'buyer' : 
                   searchParams.get('role') === 'seller' ? 'seller' :
                   searchParams.get('role') === 'both' ? 'both' :
                   searchParams.get('role') === 'supplier' ? 'supplier' :
                   user?.role || 'supplier'
  
  const switchRole = (newRole: 'buyer' | 'supplier' | 'seller' | 'both') => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('role', newRole)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Role Switcher Bar - Only show if user can switch roles */}
        {(user?.role === 'admin' || user?.role === 'both') && (
          <div className="border-b bg-muted/30 px-4 py-2 sticky top-0 z-40 backdrop-blur-sm">
            <div className="container-responsive flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Dashboard Mode:</span>
                  <Badge variant={userRole === 'buyer' ? 'default' : 'secondary'}>
                    {userRole === 'buyer' ? (
                      <>
                        <Users className="h-3 w-3 mr-1" />
                        Buyer
                      </>
                    ) : (
                      <>
                        <Package className="h-3 w-3 mr-1" />
                        Supplier
                      </>
                    )}
                  </Badge>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant={userRole === 'supplier' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => switchRole('supplier')}
                >
                  <Package className="h-4 w-4 mr-2" />
                  Supplier
                </Button>
                <Button
                  variant={userRole === 'seller' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => switchRole('seller')}
                >
                  <Package className="h-4 w-4 mr-2" />
                  Seller
                </Button>
                <Button
                  variant={userRole === 'both' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => switchRole('both')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Both
                </Button>
                <Button
                  variant={userRole === 'buyer' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => switchRole('buyer')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Buyer
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Layout */}
        <div className="flex h-[calc(100vh-5rem)]">
          {/* Sidebar */}
          <Sidebar userRole={userRole} className="sticky top-0 h-full" />
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-muted/10">
            <div className="p-3 sm:p-4 lg:p-6 max-w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  )
} 