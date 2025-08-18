'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Grid3X3, Shield, CreditCard } from 'lucide-react'

interface ValueCard {
  id: number
  title: string
  description: string
}

const valueCards: ValueCard[] = [
  {
    id: 1,
    title: "Millions of business offerings",
    description: "Explore products and suppliers for your business from millions of offerings worldwide."
  },
  {
    id: 2,
    title: "Assured quality and transactions",
    description: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery."
  },
  {
    id: 3,
    title: "One-stop trading solution",
    description: "Order seamlessly from product/supplier search to order management, payment, and fulfillment."
  }
]

const EnhancedKalabahSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full py-8 lg:py-10 bg-gradient-to-br from-[#050c05] via-[#030703] to-[#1a3a1a]">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Main Rectangle Section */}
        <div className="flex flex-col lg:flex-row min-h-[200px] lg:min-h-[160px]">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-[35%] p-4 lg:p-8 flex flex-col justify-center bg-transparent">
            <div className="space-y-4 lg:space-y-4 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Kalabah is Nigeria&apos;s <br/>
                <span className="text-white/80">B2B Digital Marketplace</span>
              </h1>
              
              <div className="space-y-3 lg:space-y-3">
                <p className="text-base lg:text-base text-white font-bold">We connect:</p>
                <div className="space-y-2 lg:space-y-1">
                  <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-3">
                    <div className="w-2 h-2 lg:w-2 lg:h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-white text-sm lg:text-sm font-bold">Manufacturers to retailers globally</p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-3">
                    <div className="w-2 h-2 lg:w-2 lg:h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-white text-sm lg:text-sm font-bold">Farmers to processors and exporters</p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-3">
                    <div className="w-2 h-2 lg:w-2 lg:h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-white text-sm lg:text-sm font-bold">Producers to distributors nationwide</p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-3">
                    <div className="w-2 h-2 lg:w-2 lg:h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-white text-sm lg:text-sm font-bold">Suppliers to buyers everywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="lg:w-[65%] p-4 lg:p-6 bg-transparent relative overflow-hidden mt-4 lg:mt-0">
            {/* Carousel Container */}
            <div className="relative h-full">
              
              {/* Carousel Track */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide h-full"
              >
                <div className="flex gap-4 lg:gap-3 h-full pb-2" style={{ width: 'max-content' }}>
                  {valueCards.map((card, index) => (
                    <div 
                      key={card.id} 
                      className="flex-shrink-0 w-[260px] lg:w-[280px] h-[220px] lg:h-[280px]"
                    >
                      <div className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer group bg-white/20 backdrop-blur-sm border border-white/30 h-full">
                        
                        <div className="relative p-5 lg:p-6 text-white flex flex-col justify-between h-full">
                          
                          {/* Icon */}
                          <div className="flex justify-center lg:justify-start mb-3 lg:mb-1">
                            <div className="bg-white/20 p-3 lg:p-3 rounded-full">
                              {index === 0 && <Grid3X3 className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 1 && <Shield className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 2 && <CreditCard className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow flex flex-col justify-center">
                            <h3 className="text-base lg:text-lg font-bold mb-3 lg:mb-3 leading-tight text-center lg:text-left text-white">
                              {card.title}
                            </h3>
                            <p className="text-white/90 text-sm lg:text-sm leading-relaxed text-center lg:text-left font-medium lg:font-bold">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows - Mobile only */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105 lg:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-105 lg:hidden"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scroll Indicator Dots - Mobile only */}
            <div className="flex justify-center space-x-2 mt-4 lg:hidden">
              {valueCards.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 bg-white/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EnhancedKalabahSection as FeaturedCategoriesSection }