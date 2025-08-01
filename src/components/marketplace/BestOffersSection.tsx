'use client'

import React from 'react'
import { CategoryGrid } from './CategoryGrid'

interface BestOffersSectionProps {
  onCategoryClick?: (categoryId: string) => void
}

export const BestOffersSection: React.FC<BestOffersSectionProps> = ({ onCategoryClick }) => {
  const handleCategoryClick = () => {
    window.location.href = '/waiting-list?action=true'
  }

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <CategoryGrid title="Best Offers" onCategoryClick={handleCategoryClick} />
        </div>
      </div>
    </div>
  )
} 