'use client'

import React from 'react'
import { ExternalLink, Truck, ZoomIn } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

interface B2BProduct {
  id: string
  name: string
  image: string
  price: string
  moq: string
  salesCount: string
  supplier: {
    name: string
    years: string
    country: string
    countryCode: string
  }
  deliveryEstimate: string
  marketplaceUrl: string
  hasZoom?: boolean
}

interface B2BProductCardProps {
  product: B2BProduct
  onContactSupplier?: (product: B2BProduct) => void
}

export function B2BProductCard({ product, onContactSupplier }: B2BProductCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/waiting-list')
  }

  return (
    <Card 
      className="group cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-200 bg-white overflow-hidden"
      onClick={handleCardClick}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
          {product.image.startsWith('http') ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                // Fallback to a default image or emoji if the image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="text-5xl">📦</div>';
              }}
            />
          ) : (
            <div className="text-5xl group-hover:scale-105 transition-transform duration-200 p-2">{product.image}</div>
          )}
          
          {/* Verified Badge - Top Left */}
          <div className="absolute top-2 left-2">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-lg font-medium flex items-center space-x-1 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Verified</span>
            </div>
          </div>
          
          {/* Zoom Icon Overlay */}
          {product.hasZoom && (
            <div className="absolute top-2 right-2">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white rounded-full p-1.5 shadow-sm">
                  <ZoomIn className="h-3 w-3 text-gray-600" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-sm text-gray-900 line-clamp-2 leading-tight mb-2">
            {product.name}
          </h3>

          {/* Price */}
          <div className="text-xl font-bold text-gray-900 mb-3">
            {product.price}
          </div>

          {/* MOQ and Sales */}
          <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
            <span>{product.moq}</span>
            <span>{product.salesCount}</span>
          </div>

          {/* Supplier Info */}
          <div className="text-xs text-gray-500">
            {product.supplier.years} · {product.supplier.countryCode}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 