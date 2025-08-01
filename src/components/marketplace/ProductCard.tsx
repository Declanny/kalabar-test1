'use client'

import React from 'react'
import { ExternalLink, MapPin, Package, Shield, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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

interface ProductCardProps {
  product: Product
  onContactSupplier?: (product: Product) => void
  className?: string
}

export function ProductCard({ product, onContactSupplier, className }: ProductCardProps) {
  const handleViewOnMarketplace = () => {
    window.open(product.marketplaceUrl, '_blank', 'noopener,noreferrer')
  }

  const handleContactSupplier = () => {
    onContactSupplier?.(product)
  }

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow group ${className}`}>
      <div className="relative">
        <div className="aspect-square bg-muted flex items-center justify-center text-4xl">
          {product.image}
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base text-foreground line-clamp-2 mb-1">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-primary">
              {product.priceRange.currency}{product.priceRange.min}
              {product.priceRange.max > product.priceRange.min && 
                ` - ${product.priceRange.currency}${product.priceRange.max}`
              }
            </span>
            <span className="text-muted-foreground">/{product.priceRange.unit}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Package className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">MOQ: {product.moq}</span>
        </div>

        <div className="flex items-center gap-3 py-2 border-t border-border">
          <Avatar className="h-8 w-8">
            <AvatarImage src={product.supplier.avatar} alt={product.supplier.name} />
            <AvatarFallback className="text-xs">
              {product.supplier.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-foreground truncate">
                {product.supplier.name}
              </span>
              {product.supplier.verified && (
                <Shield className="h-3 w-3 text-green-600" />
              )}
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{product.supplier.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{product.supplier.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            onClick={handleContactSupplier}
            className="w-full"
            size="sm"
          >
            Contact Supplier
          </Button>
          
          <Button
            onClick={handleViewOnMarketplace}
            variant="outline"
            className="w-full"
            size="sm"
          >
            <ExternalLink className="h-3 w-3 mr-2" />
            View on {product.marketplaceName}
          </Button>
        </div>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 