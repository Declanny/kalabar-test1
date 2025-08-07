'use client'

import React from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-white">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-2">About Us</h1>
              <p className="text-gray-600 text-lg sm:text-xl">
              Africa&apos;s Largest B2B ecommerce platform</p>
            </div>
          </div>
        </div>

        {/* About Section - Two Column Layout */}
        <div className="pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
              {/* Left Side - Content */}
              <div className="text-center lg:text-left">
                <div className="space-y-8 sm:space-y-14 mb-8 sm:mb-20">
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    Before there was e-commerce, there was African commerce. Kalabah is reigniting the legacy of trans-Saharan trade routes, indigenous credit systems, and internationally recognized markets — from Kurmi to Aba.
                  </p>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    We&apos;re not building just another platform. We&apos;re building the digital restoration of Africa&apos;s trading empires. This is Kalabah. The past and future of African B2B.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/waiting-list?action=true">
                    <Button 
                      className="text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-lg"
                      style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
                    >
                      JOIN WAIT LIST
                    </Button>
                  </Link>
                  <Link href="/supplier">
                    <Button 
                      variant="outline" 
                      className="bg-white hover:bg-gray-50 px-8 py-4 rounded-lg font-medium text-lg"
                      style={{
                        borderColor: 'rgba(46, 125, 50, 1)',
                        color: 'rgba(46, 125, 50, 1)'
                      }}
                    >
                      BECOME A SUPPLIER
                    </Button>
                  </Link>
                </div>
              </div>


              {/* Vertical Line */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-300 transform -translate-x-1/2"></div>

              {/* Right Side - Image */}
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754492907/9fcd4da1d24758a1bc6134a87169b72502816c35_s9wuuu.png"
                  alt="Kalabah B2B Marketplace - African Commerce Legacy"
                  className="w-full sm:w-4/5 lg:w-4/5 h-auto rounded-xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 