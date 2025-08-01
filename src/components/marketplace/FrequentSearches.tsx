'use client'

import React from 'react'
import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const frequentSearches = [
  'LED Lights',
  'Industrial Pumps', 
  'Cotton Fabric',
  'Cocoa Beans',
  'Medical Equipment',
  'Construction Materials',
  'Auto Parts',
  'Processing Equipment',
  'Honey Products',
  'Spices & Seasonings',
  'Agricultural Equipment',
  'Power Equipment',
  'Technical Textiles',
  'Industrial Chemicals',
  'Safety Equipment',
  'Food Processing',
  'Packaging Materials',
  'Electronic Components',
  'Building Materials',
  'Transportation Services'
]

interface FrequentSearchesProps {
  onSearchClick?: (search: string) => void
  className?: string
}

export function FrequentSearches({ onSearchClick, className }: FrequentSearchesProps) {
  return (
    <div className={`bg-white border-t border-b border-gray-100 py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Searches</h3>
          <p className="text-sm text-gray-600">Find what businesses are looking for</p>
        </div>
        
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-3 max-w-5xl justify-center">
            {frequentSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-emerald-100 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200 whitespace-nowrap text-sm px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-full font-medium hover:shadow-md hover:-translate-y-0.5"
                onClick={() => onSearchClick?.(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 