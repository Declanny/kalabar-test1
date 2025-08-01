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
    title: 'Fresh Cola Nuts',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg',
    backgroundColor: 'bg-green-50',
    productCount: 340
  },
  {
    id: '2', 
    title: 'Premium Bitter Cola',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif',
    backgroundColor: 'bg-amber-50',
    productCount: 220
  },
  {
    id: '3',
    title: 'Nigerian Cola Nut',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg',
    backgroundColor: 'bg-emerald-50',
    productCount: 180
  },
  {
    id: '4',
    title: 'Raw Cocoa Beans',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    backgroundColor: 'bg-orange-50',
    productCount: 450
  },
  {
    id: '5',
    title: 'Aba Fabrics',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    backgroundColor: 'bg-purple-50',
    productCount: 290
  },
  {
    id: '6',
    title: 'Moringa Seeds',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    backgroundColor: 'bg-green-50',
    productCount: 160
  },
  {
    id: '7',
    title: 'Premium Cloves',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    backgroundColor: 'bg-orange-50',
    productCount: 320
  },
  {
    id: '8',
    title: 'African Crafts',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    backgroundColor: 'bg-amber-50',
    productCount: 125
  },
  {
    id: '9',
    title: 'Organic Honey',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    backgroundColor: 'bg-yellow-50',
    productCount: 280
  },
  {
    id: '10',
    title: 'Shea Butter',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    backgroundColor: 'bg-amber-50',
    productCount: 195
  },
  {
    id: '11',
    title: 'Palm Oil',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    backgroundColor: 'bg-red-50',
    productCount: 410
  },
  {
    id: '12',
    title: 'African Black Soap',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    backgroundColor: 'bg-gray-50',
    productCount: 230
  }
]

interface CategoryGridProps {
  title?: string
  onCategoryClick?: (categoryId: string) => void
}

export function CategoryGrid({ title = "Shop by Category", onCategoryClick }: CategoryGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      {title && (
        <div className="px-2 py-4 border-b border-gray-100">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      )}

      {/* Cards Container */}
      <div className="flex-1 relative group">
        <div 
          ref={scrollContainerRef}
          className="absolute inset-0 overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <div className="h-full flex gap-3 px-2 py-4" style={{ width: 'max-content' }}>
          {categoryGridItems.map((item) => (
            <Card 
              key={item.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 group overflow-hidden flex-shrink-0 w-[280px]"
              onClick={() => onCategoryClick?.(item.id)}
            >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-60 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Product Count Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                        {item.productCount.toLocaleString()}+ Products
                      </span>
                    </div>
                </div>
                  
                  {/* Product Info */}
                  <div className="p-3 flex-1 flex flex-col bg-white">
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600 text-base">
                  {item.title}
                </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Starting from $9.99
                </p>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>

        {/* Navigation Arrows - Show on Hover */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
} 