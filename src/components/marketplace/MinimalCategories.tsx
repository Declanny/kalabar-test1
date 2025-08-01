'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

const categories = [
  { id: 'electronics', name: 'Electronics', icon: '⚡', count: '1.2k suppliers' },
  { id: 'machinery', name: 'Machinery', icon: '⚙️', count: '980 suppliers' },
  { id: 'textiles', name: 'Textiles', icon: '🧵', count: '750 suppliers' },
  { id: 'food', name: 'Food & Beverage', icon: '🍯', count: '1.1k suppliers' },
  { id: 'construction', name: 'Construction', icon: '🏗️', count: '650 suppliers' },
  { id: 'automotive', name: 'Automotive', icon: '🚛', count: '420 suppliers' },
  { id: 'health', name: 'Health & Medical', icon: '🏥', count: '380 suppliers' },
  { id: 'chemicals', name: 'Chemicals', icon: '🧪', count: '520 suppliers' }
]

interface MinimalCategoriesProps {
  onCategoryClick?: (categoryId: string) => void
}

export function MinimalCategories({ onCategoryClick }: MinimalCategoriesProps) {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Find products from verified suppliers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group cursor-pointer p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 bg-white text-center"
              onClick={() => onCategoryClick?.(category.id)}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-medium text-sm text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">
                {category.count}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-opacity"
            style={{color: 'var(--primary)'}}
          >
            View all categories
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
} 