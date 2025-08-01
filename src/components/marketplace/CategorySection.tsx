'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

import { CategoryGrid } from './CategoryGrid'
import { Button } from '@/components/ui/button'
import AdvertisingBanner from './AdvertisingBanner'
import Link from 'next/link'

interface Category {
  id: string
  name: string
  icon: string
  productCount: number
  subcategories?: string[]
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics & Electrical',
    icon: '⚡',
    productCount: 45234,
    subcategories: ['LED Lighting', 'Consumer Electronics', 'Industrial Electronics', 'Power Equipment']
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial Equipment',
    icon: '⚙️',
    productCount: 32156,
    subcategories: ['Industrial Pumps', 'Agricultural Equipment', 'Construction Machinery', 'Processing Equipment']
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: '🧵',
    productCount: 28973,
    subcategories: ['Cotton Fabric', 'Garments', 'Home Textiles', 'Technical Textiles']
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    icon: '🍯',
    productCount: 35421,
    subcategories: ['Honey Products', 'Cocoa & Coffee', 'Spices', 'Processed Foods']
  },
  {
    id: 'construction',
    name: 'Construction & Building Materials',
    icon: '🏗️',
    productCount: 22847,
    subcategories: ['Building Materials', 'Tools', 'Safety Equipment', 'Hardware']
  },
  {
    id: 'automotive',
    name: 'Automotive & Transportation',
    icon: '🚛',
    productCount: 15632,
    subcategories: ['Auto Parts', 'Commercial Vehicles', 'Accessories', 'Services']
  },
  {
    id: 'health',
    name: 'Health & Medical',
    icon: '🏥',
    productCount: 12458,
    subcategories: ['Medical Equipment', 'Pharmaceuticals', 'Health Supplements', 'Medical Supplies']
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Materials',
    icon: '🧪',
    productCount: 18965,
    subcategories: ['Industrial Chemicals', 'Packaging Materials', 'Raw Materials', 'Specialty Chemicals']
  }
]

const featuredCategories = [
  {
    id: 'agriculture-featured',
    name: 'Agricultural Products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    productCount: 2340,
    bgColor: 'bg-green-50'
  },
  {
    id: 'textiles-featured',
    name: 'Traditional Textiles',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    productCount: 1850,
    bgColor: 'bg-purple-50'
  },
  {
    id: 'herbs-featured',
    name: 'Herbal Products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    productCount: 1230,
    bgColor: 'bg-green-50'
  },
  {
    id: 'spices-featured',
    name: 'Premium Spices',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    productCount: 980,
    bgColor: 'bg-orange-50'
  },
  {
    id: 'crafts-featured',
    name: 'African Crafts',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    productCount: 650,
    bgColor: 'bg-amber-50'
  },
  {
    id: 'electronics-featured',
    name: 'Electronics',
    image: '💡',
    productCount: 3420,
    bgColor: 'bg-blue-50'
  }
]

interface CategorySectionProps {
  onCategorySelect?: (categoryId: string) => void
}

export function CategorySection({ onCategorySelect }: CategorySectionProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    window.location.href = '/waiting-list?action=true'
  }

  return (
    <div className="flex flex-col lg:flex-row bg-white">
      {/* Left Navigation - Full width on mobile, 20% on desktop */}
      <div className="w-full lg:w-[20%] border-b lg:border-b-0 lg:border-r border-gray-200 p-1.5 sm:p-3 lg:p-4">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900 mb-1.5 sm:mb-3 lg:mb-4">All Categories</h3>
        {/* Mobile: Horizontal scroll, Desktop: Vertical list */}
        <div className="lg:space-y-1">
          <div className="flex lg:flex-col gap-1 sm:gap-2 lg:gap-0 overflow-x-auto lg:overflow-x-visible pb-0.5 sm:pb-2 lg:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.id}
                className="relative flex-shrink-0 lg:flex-shrink"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
                <Link href="/waiting-list?action=true">
              <button
                    className="w-full min-w-[120px] lg:min-w-0 flex items-center justify-between p-1 sm:p-2 lg:p-4 text-left hover:bg-gray-50 rounded-lg transition-colors group"
              >
                    <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                      <span className="text-sm sm:text-base lg:text-lg">{category.icon}</span>
                      <div className="hidden lg:block">
                        <div className="font-medium text-xs sm:text-sm text-gray-900 group-hover:text-green-600 py-1">
                      {category.name}
                    </div>
                      </div>
                      <div className="lg:hidden">
                        <div className="font-medium text-xs text-gray-900 group-hover:text-green-600">
                          {category.name}
                    </div>
                  </div>
                </div>
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-green-600 hidden lg:block" />
              </button>
                </Link>

                {/* Subcategories Dropdown - Only on desktop */}
              {hoveredCategory === category.id && category.subcategories && (
                  <div className="hidden lg:block absolute left-full top-0 z-10 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 ml-2">
                  <div className="space-y-2">
                    {category.subcategories.map((sub, index) => (
                        <Link href="/waiting-list?action=true" key={index}>
                      <button
                        className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded transition-colors"
                      >
                        {sub}
                      </button>
                        </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
                    </div>

      {/* Right Side - Full width on mobile, 80% on desktop */}
      <div className="w-full lg:w-[80%] p-2 sm:p-4 lg:p-6">
        {/* Main Banner */}
        <div className="mb-2 sm:mb-6">
          <AdvertisingBanner variant="default" />
        </div>

        {/* Two Banners - Bottom */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
          <div>
            <AdvertisingBanner variant="large" />
          </div>
          <div>
            <AdvertisingBanner variant="large" />
          </div>
        </div>
      </div>
    </div>
  )
} 