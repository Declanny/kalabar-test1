'use client'

import React from 'react'
import { ProductCard } from './ProductCard'

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
  moq: string
  supplier: {
    name: string
    avatar?: string
    location: string
    rating: number
    verified: boolean
    responseRate: string
  }
  marketplaceUrl: string
  marketplaceName: string
  category: string
  tags: string[]
}

interface ProductGridProps {
  products: Product[]
  onContactSupplier?: (product: Product) => void
  className?: string
  title?: string
  showTitle?: boolean
}

export function ProductGrid({ 
  products, 
  onContactSupplier, 
  className = '', 
  title = 'Featured Products',
  showTitle = true 
}: ProductGridProps) {
  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground">
              Discover quality products from verified suppliers across Africa
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onContactSupplier={onContactSupplier}
            />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found. Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  )
} 