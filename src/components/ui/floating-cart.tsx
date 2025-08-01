"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FloatingCartProps {
  className?: string
}

export function FloatingCart({ className }: FloatingCartProps) {
  const { cartCount, getCartTotal, cartItems, removeFromCart } = useCart()
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  // Don't show on cart or checkout pages
  if (pathname?.includes('/cart') || pathname?.includes('/checkout')) {
    return null
  }

  // Don't show if cart is empty and user is not authenticated
  if (cartCount === 0 && !isAuthenticated) {
    return null
  }

  // Show with animation when cart has items
  const shouldShow = cartCount > 0 || isAuthenticated

  return (
    <div 
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
        shouldShow ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-75",
        className
      )}
    >
      <div 
        className="group relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Link href={isAuthenticated ? "/dashboard/cart" : "/auth/login"}>
          <Button
            size="lg"
            className={cn(
              "h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
              "bg-primary hover:bg-primary/90 hover:scale-110 text-primary-foreground",
              "border-2 border-white",
              cartCount > 0 && "ring-2 ring-primary/20 ring-offset-2"
            )}
          >
            <div className="relative">
              <ShoppingCart className="h-7 w-7" />
              {cartCount > 0 && (
                <Badge className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-red-500 hover:bg-red-500 text-white text-xs p-0 flex items-center justify-center border-2 border-white animate-bounce">
                  {cartCount > 99 ? '99+' : cartCount}
                </Badge>
              )}
            </div>
          </Button>
        </Link>

        {/* Mini Cart Preview - shows on hover */}
        {cartCount > 0 && isExpanded && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 opacity-0 animate-in slide-in-from-bottom-2 fade-in-0 duration-300 group-hover:opacity-100 pointer-events-auto z-50">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Shopping Cart</h3>
                <Badge variant="secondary">{cartCount} {cartCount === 1 ? 'item' : 'items'}</Badge>
              </div>
              
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {cartItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=40&h=40&fit=crop"
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.quantity}{item.unit} × ${item.price}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        removeFromCart(item.id)
                      }}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {cartCount > 3 && (
                  <div className="text-center py-2 text-sm text-gray-500">
                    And {cartCount - 3} more {cartCount - 3 === 1 ? 'item' : 'items'}...
                  </div>
                )}
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-lg text-primary">${getCartTotal().toFixed(2)}</span>
                </div>
                <Link href={isAuthenticated ? "/dashboard/cart" : "/auth/login"} className="block">
                  <Button className="w-full" size="sm">
                    View Full Cart
                  </Button>
                </Link>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute top-full right-6 border-l-4 border-r-4 border-t-4 border-transparent border-t-white drop-shadow-sm"></div>
          </div>
        )}
        
        {/* Simple tooltip for empty cart */}
        {cartCount === 0 && isAuthenticated && !isExpanded && (
          <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl border border-gray-700">
              <div className="text-gray-300">Your cart is empty</div>
              <div className="text-xs text-gray-400 mt-1">Start shopping!</div>
              {/* Tooltip Arrow */}
              <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 