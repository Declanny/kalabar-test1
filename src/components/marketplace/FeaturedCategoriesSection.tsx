'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Grid3X3, Shield, CreditCard, Globe, Lock } from 'lucide-react'

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
  },
  {
    id: 4,
    title: "Global supplier network",
    description: "Connect with verified suppliers from around the world to expand your business opportunities."
  },
  {
    id: 5,
    title: "Secure payment processing",
    description: "Complete transactions safely with our secure payment system and buyer protection guarantees."
  }
]

const EnhancedKalabahSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full py-8 lg:py-10 bg-gradient-to-br from-[#050c05] via-[#030703] to-[#1a3a1a]">
      <div className="w-full px-4 sm:px-6 lg:px-0">
        
        {/* Main Rectangle Section */}
        <div className="flex flex-col min-h-[200px] lg:min-h-[160px]">
          
          {/* Full Width Carousel */}
          <div className="w-full p-4 lg:p-2 bg-transparent relative overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-full">
              
                            {/* Carousel Track */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide h-full flex justify-center"
              >
                <div className="flex gap-3 lg:gap-4 h-full pb-2" style={{ width: 'max-content' }}>
                  {valueCards.map((card, index) => (
                    <div 
                      key={card.id} 
                      className="flex-shrink-0 w-[220px] lg:w-[240px] h-[200px] lg:h-[260px]"
                    >
                      <div className="relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer group bg-white/20 backdrop-blur-sm border border-white/30 h-full">
                        
                        <div className="relative p-3 lg:p-4 text-white flex flex-col justify-between h-full">
                          
                          {/* Icon */}
                          <div className="flex justify-center lg:justify-start mb-3 lg:mb-1">
                            <div className="bg-white/20 p-3 lg:p-3 rounded-full">
                              {index === 0 && <Grid3X3 className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 1 && <Shield className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 2 && <CreditCard className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 3 && <Globe className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
                              {index === 4 && <Lock className="w-7 h-7 lg:w-8 lg:h-8 text-white" />}
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