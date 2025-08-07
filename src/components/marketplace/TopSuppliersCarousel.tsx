'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryItem {
  id: string
  name: string
  icon: React.ReactNode
}

const categoryItems: CategoryItem[] = [
  {
    id: '1',
    name: 'Package Foods',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410148/paper-bag_nvjnuh.png" alt="Paper Bag" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '2',
    name: 'Fresh Produce',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410148/salad_vsipso.png" alt="Fresh Produce" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '3',
    name: 'Fashion & Apparel',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754411064/Hanger_2_xlrkmw.png" alt="Fashion & Apparel" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '4',
    name: 'Beauty & Skincare',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410147/facial-cleanser_ze2h1j.png" alt="Facial Cleanser" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '5',
    name: 'Health & Medical\nSupplies',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754409923/first-aid-kit_xqyh3a.png" alt="First Aid Kit" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '6',
    name: 'Electronics & Gadget',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410967/devices_oz1u8d.png" alt="Electronics" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '7',
    name: 'Furniture & Home\nEssentials',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410905/Armchair_p3xnt3.png" alt="Furniture" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '8',
    name: 'Printer & Office\nSupplies',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410148/printer_umordz.png" alt="Printer" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '9',
    name: 'Fish & Seafood',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410148/fish_sfpsaf.png" alt="Fish" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  },
  {
    id: '10',
    name: 'Local Spices',
    icon: <Image src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754410148/salt_nfb76c.png" alt="Local Spices" width={32} height={32} style={{filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)'}} />
  }
]

export function TopSuppliersCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{color: 'rgba(10, 10, 10, 1)'}}>
          Explore Top Nigerian Categories <br />Coming to Kalabah          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto" style={{color: 'rgba(10, 10, 10, 0.7)'}}>
            These are some of the most in-demand categories suppliers are onboarding for. Expect quality local products and seamless sourcing.
          </p>
        </div>

        {/* Desktop Grid - 5 columns */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-12">
            {categoryItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="w-32 h-32 bg-white border rounded-full flex flex-col items-center justify-center group-hover:border-green-600 transition-all duration-200 p-4" style={{borderColor: 'rgba(10, 10, 10, 1)'}}>
                  <div className="group-hover:text-green-600 transition-colors mb-2" style={{color: 'rgba(10, 10, 10, 1)'}}>
                    {item.icon}
                  </div>
                  <span className="text-xs text-center leading-tight font-bold whitespace-pre-line" style={{color: 'rgba(10, 10, 10, 1)'}}>
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="relative group">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            >
              <div className="flex gap-4 py-4" style={{ width: 'max-content' }}>
                {categoryItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex flex-col items-center cursor-pointer group flex-shrink-0 w-20"
                  >
                    <div className="w-20 h-20 bg-white border rounded-full flex flex-col items-center justify-center group-hover:border-green-600 transition-all duration-200 p-2" style={{borderColor: 'rgba(10, 10, 10, 1)'}}>
                      <div className="group-hover:text-green-600 transition-colors mb-1" style={{color: 'rgba(10, 10, 10, 1)'}}>
                        {item.icon}
                      </div>
                      <span className="text-[8px] text-center leading-tight font-bold whitespace-pre-line" style={{color: 'rgba(10, 10, 10, 1)'}}>
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Show on Hover Only */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 