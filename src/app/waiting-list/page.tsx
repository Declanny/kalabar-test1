'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function WaitingListPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gradient-to-br from-green-25 to-emerald-25">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-3 py-1 mb-4 sm:mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
              <span className="text-xs sm:text-sm font-medium text-gray-700">Coming in 2025</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-gray-900">
              Join the Future of
              <span className="block mt-1 sm:mt-2" style={{color: 'rgba(46, 125, 50, 1)'}}>African B2B Trade</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              Be among the first to access Africa's most innovative B2B marketplace. 
              Join our waiting list to get early access and exclusive benefits.
            </p>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl mb-8 sm:mb-12">
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

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link href="/blog" className="w-full sm:w-auto">
                      <Button 
                        variant="outline"
                        className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                        style={{
                          borderColor: 'rgba(46, 125, 50, 1)',
                          color: 'rgba(46, 125, 50, 1)'
                        }}
                      >
                        Read Our Blog
                      </Button>
                    </Link>
                    
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button 
                        variant="outline"
                        className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                        style={{
                          borderColor: 'rgba(46, 125, 50, 1)',
                          color: 'rgba(46, 125, 50, 1)'
                        }}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1" style={{color: 'rgba(46, 125, 50, 1)'}}>2M+</div>
                <div className="text-xs sm:text-sm text-gray-600">Expected Monthly Users</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1" style={{color: 'rgba(245, 124, 0, 1)'}}>54</div>
                <div className="text-xs sm:text-sm text-gray-600">African Countries</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1" style={{color: 'rgba(46, 125, 50, 1)'}}>$2B+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projected Trade Volume</div>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1" style={{color: 'rgba(245, 124, 0, 1)'}}>5K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Pre-registered Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 