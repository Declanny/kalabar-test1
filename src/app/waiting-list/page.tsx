'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { wishlistApi } from '@/lib/wishlist-api'

export default function WaitingListPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-gray-900">
              Join the Future of
              <span className="block mt-1 sm:mt-2" style={{color: '#00C298'}}>African B2B Trade</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              Be among the first to access Africa&apos;s most innovative B2B marketplace.
            </p>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12 border border-gray-200" style={{backgroundColor: 'rgba(245, 245, 245, 1)'}}>
              <div className="max-w-md mx-auto">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Reserve Your Spot</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Get notified when we launch and receive exclusive early-access benefits.</p>
                
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault()
                  if (!email.trim()) {
                    setMessage('Please enter a valid email address')
                    setIsSuccess(false)
                    return
                  }
                  
                  setLoading(true)
                  setMessage('')
                  
                  try {
                    const result = await wishlistApi.addToWishlist(email)
                    if (result.success) {
                      setMessage('Successfully joined the waiting list! We\'ll notify you when we launch.')
                      setIsSuccess(true)
                      setEmail('')
                    } else {
                      setMessage(result.message || 'Failed to join waiting list. Please try again.')
                      setIsSuccess(false)
                    }
                  } catch (error) {
                    console.error('Error joining waiting list:', error)
                    setMessage('Failed to join waiting list. Please try again.')
                    setIsSuccess(false)
                  } finally {
                    setLoading(false)
                  }
                }}>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00C298]"
                      disabled={loading}
                    />
                  </div>
                  
                  {message && (
                    <div className={`text-sm p-3 rounded-lg ${
                      isSuccess 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {message}
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full text-white px-6 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:scale-105 transition-all duration-300 mb-4"
                    style={{backgroundColor: '#00C298'}}
                    disabled={loading}
                  >
                    {loading ? 'Joining...' : 'Join Waiting List'}
                    {!loading && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                  </Button>

                  <div className="flex justify-center space-x-6">
                    <Link href="/blog" className="text-sm" style={{color: '#00C298'}}>
                      Read Our Blog
                    </Link>
                    <Link href="/contact" className="text-sm" style={{color: '#00C298'}}>
                      Contact Us
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 