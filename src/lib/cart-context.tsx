"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

interface CartItem {
  id: number
  name: string
  supplier: string
  supplierLocation: string
  category: string
  price: number
  currency: string
  quantity: number
  unit: string
  moq: number
  maxOrder: number
  image: string
  inStock: boolean
  leadTime: string
  certifications?: string[]
}

interface CartContextType {
  cartItems: CartItem[]
  cartCount: number
  addToCart: (product: {id: number, name: string, price: string, [key: string]: any}, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('kalabah_cart')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kalabah_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product: {id: number, name: string, price: string, [key: string]: any}, quantity: number = product.moq || 1) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      // Update existing item quantity
      const newQuantity = existingItem.quantity + quantity
      if (newQuantity <= product.maxOrder) {
        updateQuantity(product.id, newQuantity)
        toast.success(`Updated ${product.name} quantity in cart`)
      } else {
        toast.error(`Maximum order quantity is ${product.maxOrder}${product.unit}`)
      }
    } else {
      // Add new item to cart
      const cartItem: CartItem = {
        id: product.id,
        name: product.name,
        supplier: product.supplier,
        supplierLocation: product.location || product.supplierLocation || 'Unknown Location',
        category: product.category || 'General',
        price: product.price,
        currency: product.currency || 'USD',
        quantity: quantity,
        unit: product.unit || 'kg',
        moq: product.moq || 1,
        maxOrder: product.maxOrder || 10000,
        image: product.image,
        inStock: product.inStock !== false,
        leadTime: product.leadTime || '7-14 days',
        certifications: product.certifications || []
      }
      
      setCartItems(prev => [...prev, cartItem])
      toast.success(`Added ${product.name} to cart`)
    }
  }

  const removeFromCart = (productId: number) => {
    const item = cartItems.find(item => item.id === productId)
    setCartItems(prev => prev.filter(item => item.id !== productId))
    if (item) {
      toast.success(`Removed ${item.name} from cart`)
    }
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems(prev => prev.map(item => 
      item.id === productId 
        ? { ...item, quantity: Math.min(quantity, item.maxOrder) }
        : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
    toast.success('Cart cleared')
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 