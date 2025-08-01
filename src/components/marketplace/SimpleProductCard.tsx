'use client'

import React from 'react'
import { ExternalLink, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Product {
  id: string
  name: string
  image: string
  priceRange: {
    min: number
    max: number
    currency: string
    unit: string
  }
  supplier: {
    name: string
    location: string
    verified: boolean
  }
  marketplaceUrl: string
  marketplaceName: string
}

interface SimpleProductCardProps {
  product: Product
  className?: string
}

export function SimpleProductCard({ product, className }: SimpleProductCardProps) {
  const handleViewProduct = () => {
    window.open(product.marketplaceUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className={`group cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 bg-white ${className}`}>
      <CardContent className="p-4">
        {/* Product Image */}
        <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:bg-gray-100 transition-colors">
          {product.image}
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
          {product.name}
        </h3>

        {/* Price */}
        <div className="text-lg font-semibold mb-3" style={{color: 'var(--primary)'}}>
          {product.priceRange.currency}{product.priceRange.min}
          {product.priceRange.max > product.priceRange.min && 
            ` - ${product.priceRange.currency}${product.priceRange.max}`
          }
          <span className="text-sm text-gray-500 font-normal">/{product.priceRange.unit}</span>
        </div>

        {/* Supplier Info */}
        <div className="text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <span>{product.supplier.name}</span>
            {product.supplier.verified && (
              <span className="text-green-600">✓</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="h-3 w-3" />
            <span>{product.supplier.location}</span>
          </div>
        </div>

        {/* Contact Button */}
        <Button 
          onClick={handleViewProduct}
          size="sm" 
          className="w-full text-xs"
          style={{backgroundColor: 'var(--primary)'}}
        >
          Contact Supplier
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      </CardContent>
    </Card>
  )
} 