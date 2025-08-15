'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { imagePresets } from '@/lib/image-utils'

interface CategoryItem {
  id: string
  name: string
  imageUrl: string
  isPng?: boolean
}

const categoryItems: CategoryItem[] = [
  {
    id: '1',
    name: 'Package Foods',
    imageUrl: imagePresets.card('https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg')
  },
  {
    id: '2',
    name: 'Fresh Produce',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/932802fd03458d93b4c8a1441d79dbdb3e6ffc72_hsj4i4.jpg'
  },
  {
    id: '3',
    name: 'Fashion & Apparel',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg'
  },
  {
    id: '4',
    name: 'Beauty & Skincare',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg'
  },
  {
    id: '5',
    name: 'Health & Medical\nSupplies',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097120/6bac793d5143f8fb4887e3a79710a86dd0f896f6_fakarv.png',
    isPng: false
  },
  {
    id: '6',
    name: 'Electronics & Gadget',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg'
  },
  {
    id: '7',
    name: 'Furniture & Home\nEssentials',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
    isPng: false
  },
  {
    id: '8',
    name: 'Printer & Office\nSupplies',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097972/3d-icon-with-printer_fxnxua.png',
    isPng: false
  },
  {
    id: '9',
    name: 'Fish & Seafood',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097071/4056ae4af584814c355ec61044d7cc5470d0b830_cyensm.jpg'
  },
  {
    id: '10',
    name: 'Local Spices',
    imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097791/Local-spice_mskpgv.webp'
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

  const getCircleStyle = (isPng?: boolean) => {
    if (isPng) {
      return {
        background: 'linear-gradient(135deg, #10B981, #3B82F6)',
        border: 'none'
      }
    }
    return {
      backgroundColor: '#F5F5F5',
      border: '2px solid #F5F5F5'
    }
  }

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3" style={{color: 'rgba(10, 10, 10, 1)'}}>
            Explore Top Nigerian Categories <br />Coming to Kalabah          
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto" style={{color: 'rgba(10, 10, 10, 0.7)'}}>
            These are some of the most in-demand categories suppliers are onboarding for. Expect quality local products and seamless sourcing.
          </p>
        </div>

        {/* Desktop Grid - 5 columns */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-12">
            {categoryItems.map((item) => (
              <Link 
                key={item.id}
                href="/waiting-list"
                className="flex flex-col items-center cursor-pointer group"
              >
                <div 
                  className="w-40 h-40 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 overflow-hidden relative"
                  style={getCircleStyle(item.isPng)}
                >
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name}
                    width={160}
                    height={160}
                    className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                      item.isPng ? 'w-24 h-24' : 'w-full h-full rounded-full'
                    }`}
                    style={item.isPng ? {} : {}}
                  />
                </div>
                <span className="text-sm text-center leading-tight font-bold mt-3 whitespace-pre-line" style={{color: 'rgba(10, 10, 10, 1)'}}>
                  {item.name}
                </span>
              </Link>
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
              <div className="flex gap-6 py-4" style={{ width: 'max-content' }}>
                {categoryItems.map((item) => (
                  <Link 
                    key={item.id}
                    href="/waiting-list"
                    className="flex flex-col items-center cursor-pointer group flex-shrink-0"
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300 overflow-hidden relative"
                      style={getCircleStyle(item.isPng)}
                    >
                      <Image 
                        src={item.imageUrl} 
                        alt={item.name}
                        width={80}
                        height={80}
                        className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                          item.isPng ? 'w-12 h-12' : 'w-full h-full rounded-full'
                        }`}
                      />
                    </div>
                    <span className="text-xs text-center leading-tight font-bold mt-2 whitespace-pre-line w-20" style={{color: 'rgba(10, 10, 10, 1)'}}>
                      {item.name}
                    </span>
                  </Link>
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