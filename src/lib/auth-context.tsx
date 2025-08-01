"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
  role: 'buyer' | 'supplier' | 'seller' | 'both' | 'admin'
  company?: string
  verified: boolean
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (userData: {email: string, password: string, [key: string]: any}) => Promise<void>
  verifyEmail: (code: string) => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth on app load
    const storedUser = localStorage.getItem('kalabah_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login - in real app, call API
      const mockUser: User = {
        id: '1',
        email,
        name: email === 'buyer@test.com' ? 'Sarah Chen' : 'Adebayo Okafor',
        role: email === 'buyer@test.com' ? 'buyer' : email === 'admin@test.com' ? 'admin' : 'supplier',
        company: email === 'buyer@test.com' ? 'Global Foods Ltd' : 'AgroExports Nigeria Ltd',
        verified: true,
        avatar: '/avatars/user.jpg'
      }
      
      setUser(mockUser)
      localStorage.setItem('kalabah_user', JSON.stringify(mockUser))
    } catch {
      throw new Error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: {email: string, password: string, [key: string]: any}) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock registration - in real app, call API
      const mockUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: `${userData.firstName} ${userData.lastName}`,
        role: userData.userType,
        company: userData.companyName,
        verified: false, // Needs email verification
        avatar: '/avatars/user.jpg'
      }
      
      setUser(mockUser)
      localStorage.setItem('kalabah_user', JSON.stringify(mockUser))
    } catch {
      throw new Error('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  const verifyEmail = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (user) {
        const verifiedUser = { ...user, verified: true }
        setUser(verifiedUser)
        localStorage.setItem('kalabah_user', JSON.stringify(verifiedUser))
      }
    } catch {
      throw new Error('Email verification failed')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('kalabah_user')
  }

  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
    verifyEmail,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 