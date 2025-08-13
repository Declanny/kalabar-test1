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
        {/* Header Section - Mobile: Cover Image with Overlay, Desktop: Regular */}
        <div className="relative">
          {/* Mobile Background Image with Overlay - Perfect Rectangle */}
          <div 
            className="md:hidden relative bg-cover bg-center bg-no-repeat aspect-[5/2] flex items-center"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093063/6e75d6b6e03a4a10bf59ed95ceed99df8b28c49a_s0sgwh.jpg)'
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white drop-shadow-lg">About Us</h1>
                <p className="text-gray-100 text-lg sm:text-xl drop-shadow-md">
                  Africa&apos;s Largest B2B ecommerce platform
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden md:block bg-white border-b">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold mb-2">About Us</h1>
                <p className="text-gray-600 text-lg sm:text-xl">
                  Africa&apos;s Largest B2B ecommerce platform
                </p>
              </div>
            </div>
          </div>
        </div>
 
        {/* About Section - Two Column Layout */}
        <div className="pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
              {/* Left Side - Content */}
              <div className="text-center lg:text-left">
                <div className="space-y-8 sm:space-y-14 mb-8 sm:mb-10">
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
                       className="text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-lg"
                      style={{backgroundColor: '#00C298'}}
                    >
                      JOIN WAIT LIST
                    </Button>
                  </Link>
                  <Link href="/supplier">
                    <Button
                       variant="outline"
                       className="bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg"
                      style={{
                        borderColor: '#00C298',
                        color: '#00C298'
                      }}
                    >
                      BECOME A SUPPLIER
                    </Button>
                  </Link>
                </div>
              </div>
                
              {/* Vertical Line - Hidden on Mobile since image is now in header */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-300 transform -translate-x-1/2"></div>
               
              {/* Right Side - Image (Hidden on Mobile, shown on Desktop) */}
              <div className="relative hidden md:block">
                <img
                   src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093063/6e75d6b6e03a4a10bf59ed95ceed99df8b28c49a_s0sgwh.jpg"
                  alt="Kalabah B2B Marketplace - African Commerce Legacy"
                  className="w-full sm:w-4/5 lg:w-full h-auto mx-auto"
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