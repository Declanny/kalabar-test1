'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function WaitingListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-gray-900">
              Join the Future of
              <span className="block mt-1 sm:mt-2" style={{color: 'rgba(46, 125, 50, 1)'}}>African B2B Trade</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              Be among the first to access Africa&apos;s most innovative B2B marketplace.
            </p>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-8 sm:mb-12 border border-gray-200" style={{backgroundColor: 'rgba(245, 245, 245, 1)'}}>
              <div className="max-w-md mx-auto">
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Reserve Your Spot</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Get notified when we launch and receive exclusive early-access benefits.</p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <Button 
                    className="w-full text-white px-6 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:scale-105 transition-all duration-300 mb-4"
                    style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
                  >
                    Join Waiting List
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>

                  <div className="flex justify-center space-x-6">
                    <Link href="/blog" className="text-sm" style={{color: 'rgba(46, 125, 50, 1)'}}>
                      Read Our Blog
                    </Link>
                    <Link href="/contact" className="text-sm" style={{color: 'rgba(46, 125, 50, 1)'}}>
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