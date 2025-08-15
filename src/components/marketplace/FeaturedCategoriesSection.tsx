'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Factory, Users, Truck, Globe } from 'lucide-react'
import { imagePresets } from '@/lib/image-utils'

// Mock Button component since we don't have access to the actual one
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
)

// Mock RedirectToWaitingList component
const RedirectToWaitingList = ({ children }) => children

interface CategoryCard {
  id: string
  title: string
  image: string
  productCount: number
  description: string
  supplierCount: number
  badge?: string
}

const categoryCards: CategoryCard[] = [
  {
    id: '1',
    title: 'Agricultural Products',
    image: imagePresets.card('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755106969/f5134be67e74890149720c5ba97af9ad0676faaa_gqsff2.png'),
    productCount: 12500,
    supplierCount: 850,
    description: 'Cassava, cocoa, palm oil, yam, rice',
    badge: 'View more'
  },
  {
    id: '2',
    title: 'Textiles & Fashion',
    image: imagePresets.card('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg'),
    productCount: 8900,
    supplierCount: 420,
    description: 'Ankara fabrics, traditional wear',
    badge: 'View more'
  },
  {
    id: '3',
    title: 'Food & Beverages',
    image: imagePresets.card('https://res.cloudinary.com/dqbbm0guw/image/upload/v1754869419/text2_uyghjo.webp'),
    productCount: 6500,
    supplierCount: 380,
    description: 'Processed foods, beverages, spices',
    badge: 'View more'
  },
  {
    id: '4',
    title: 'Manufacturing & Industrial',
    image: imagePresets.card('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg'),
    productCount: 4200,
    supplierCount: 290,
    description: 'Machinery, tools, industrial equipment',
    badge: 'View more'
  }
]

export function EnhancedKalabahSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }



  return (
    <div className="w-full py-6 lg:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Main Rectangle Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[160px]">
            
            {/* Left Side - Text Content */}
            <div className="lg:w-[40%] p-3 lg:p-8 flex flex-col justify-center bg-gray-100">
              <div className="space-y-2 lg:space-y-4 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Kalabah is Nigeria's <br/>
                  <span className="text-[#00C298]">B2B Digital Marketplace</span>
                </h1>
                
                <div className="space-y-1.5 lg:space-y-3">
                  <p className="text-sm lg:text-base text-gray-700 font-medium">We connect:</p>
                  <div className="space-y-0.5 lg:space-y-1">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#00C298] rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs lg:text-sm">Manufacturers to retailers globally</p>
                      <div className="w-1.5 h-1.5 lg:hidden bg-[#00C298] rounded-full flex-shrink-0"></div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#00C298] rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs lg:text-sm">Farmers to processors and exporters</p>
                      <div className="w-1.5 h-1.5 lg:hidden bg-[#00C298] rounded-full flex-shrink-0"></div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#00C298] rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs lg:text-sm">Producers to distributors nationwide</p>
                      <div className="w-1.5 h-1.5 lg:hidden bg-[#00C298] rounded-full flex-shrink-0"></div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#00C298] rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs lg:text-sm">Suppliers to buyers everywhere</p>
                      <div className="w-1.5 h-1.5 lg:hidden bg-[#00C298] rounded-full flex-shrink-0"></div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* Right Side - Carousel */}
            <div className="lg:w-[60%] p-3 lg:p-6 bg-gray-100 relative overflow-hidden">
              {/* Carousel Container */}
              <div className="relative h-full">
                
                {/* Carousel Track */}
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto overflow-y-hidden scrollbar-hide h-full"
                >
                  <div className="flex gap-2 lg:gap-3 h-full" style={{ width: 'max-content' }}>
                  {categoryCards.map((card, index) => (
                    <div 
                      key={card.id} 
                      className="flex-shrink-0 w-[140px] lg:w-[250px] px-0.5 lg:px-0"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group h-full">
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover min-h-[120px] group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-3 left-3 lg:top-4 lg:left-4 hidden lg:block">
                          <span className="bg-white/20 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-semibold backdrop-blur-sm">
                            Coming Soon
                          </span>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-3 text-white">
                          <h3 className="text-sm lg:text-base font-bold mb-0.5 lg:mb-1">{card.title}</h3>
                          <p className="text-white/90 text-xs mb-1 lg:mb-2 leading-relaxed hidden lg:block">{card.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs lg:text-sm font-medium lg:hidden">Coming Soon</span>
                            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Hidden on mobile */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 hidden lg:block"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 hidden lg:block"
              >
                <ChevronRight className="w-6 h-6" />
              </button>


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export { EnhancedKalabahSection as FeaturedCategoriesSection }