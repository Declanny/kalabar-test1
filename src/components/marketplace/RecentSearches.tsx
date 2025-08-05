'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'

const recentSearches = [
  'LED Lights',
  'Industrial Pumps', 
  'Cotton Fabric',
  'Stainless Steel Pipes',
  'Electronic Components',
  'Safety Equipment',
  'Medical Devices',
  'Auto Parts',
  'Building Materials',
  'Food Processing',
  'Solar Panels',
  'Textile Machinery',
  'Chemical Products',
  'Agricultural Tools'
]

interface RecentSearchesProps {
  onSearchClick?: (search: string) => void
}

export function RecentSearches({ onSearchClick }: RecentSearchesProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2 sm:py-3 lg:py-4">
      <div className="w-full px-10">
        {/* Mobile: Stacked layout with header on top */}
        <div className="block sm:hidden">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Recently searched:
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {recentSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-green-100 hover:text-green-700 hover:border-green-200 transition-all duration-200 text-xs px-2 py-1 bg-white text-gray-600 border border-gray-200 rounded-full hover:shadow-sm"
                onClick={() => onSearchClick?.(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Desktop: Horizontal layout */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Recently searched:
          </span>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-green-100 hover:text-green-700 hover:border-green-200 transition-all duration-200 text-xs px-3 py-1 bg-white text-gray-600 border border-gray-200 rounded-full hover:shadow-sm"
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