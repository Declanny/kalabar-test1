'use client'

import React, { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryGridItem {
  id: string
  title: string
  image: string
  backgroundColor: string
  productCount: number
}

const categoryGridItems: CategoryGridItem[] = [
  {
    id: '1',
    title: 'Ofada Rice',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1754870058/OfadaRice_a7yurq.jpg',
    backgroundColor: 'bg-yellow-50',
    productCount: 185
  },
  {
    id: '2',
    title: 'Traditional Soup',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1754869423/soup_uuu66u.webp',
    backgroundColor: 'bg-amber-50',
    productCount: 195
  },
  {
    id: '3',
    title: 'Organic Cloves',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1754869419/text2_uyghjo.webp',
    backgroundColor: 'bg-purple-50',
    productCount: 410
  },
  {
    id: '4',
    title: 'Mixed Beans & Grains',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1754869416/teext_jv3l4t.avif',
    backgroundColor: 'bg-blue-50',
    productCount: 230
  },
  {
    id: '5',
    title: 'Cocoa Pods',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg',
    backgroundColor: 'bg-green-50',
    productCount: 340
  },
  {
    id: '6',
    title: 'Premium Bitter Cola',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif',
    backgroundColor: 'bg-amber-50',
    productCount: 220
  },
  {
    id: '7',
    title: 'Nigerian Cola Nut',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg',
    backgroundColor: 'bg-emerald-50',
    productCount: 180
  },
  {
    id: '8',
    title: 'Raw Cocoa Beans',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    backgroundColor: 'bg-orange-50',
    productCount: 450
  },
  {
    id: '9',
    title: 'Aba Fabrics',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    backgroundColor: 'bg-purple-50',
    productCount: 290
  },
  {
    id: '10',
    title: 'Moringa Seeds',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    backgroundColor: 'bg-green-50',
    productCount: 160
  },
  {
    id: '11',
    title: 'Premium Cloves',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    backgroundColor: 'bg-orange-50',
    productCount: 320
  },
  {
    id: '12',
    title: 'African Black Soap',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1754869428/textsoap_o4lddz.avif',
    backgroundColor: 'bg-gray-50',
    productCount: 280
  }
]

interface CategoryGridProps {
  title?: string
  headerContent?: React.ReactNode
  onCategoryClick?: (categoryId: string) => void
}

export function CategoryGrid({ title, headerContent, onCategoryClick }: CategoryGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      {headerContent && (
        <div className="mb-3 sm:mb-4">
          {headerContent}
        </div>
      )}

      {/* Cards Container */}
      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <div className="flex gap-3 sm:gap-4 lg:gap-6 py-4" style={{ width: 'max-content' }}>
          {categoryGridItems.map((item) => (
            <Card 
              key={item.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 group overflow-hidden flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[280px]"
              onClick={() => onCategoryClick?.(item.id)}
            >
                <div className="p-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 sm:h-52 lg:h-60 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Product Count Badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <span className="bg-green-600 text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                        {item.productCount.toLocaleString()}+ Products
                      </span>
                    </div>
                </div>
                  
                  {/* Product Info */}
                  <div className="p-2 sm:p-3 flex-1 flex flex-col bg-white">
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600 text-sm sm:text-base">
                  {item.title}
                </h4>
                  </div>
              </div>
            </Card>
          ))}
        </div>
        </div>

        {/* Navigation Arrows - Show on Hover (Desktop) and Always (Mobile) */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 z-10"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
} 