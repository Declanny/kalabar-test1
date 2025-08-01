'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface CategoryItem {
  id: string
  name: string
  image: string
  supplierCount: number
  popularProducts: string[]
  topRegions: string[]
}

interface CategoryRowProps {
  title: string
  items: CategoryItem[]
  onItemClick?: (item: CategoryItem) => void
  className?: string
}

export function CategoryRow({ title, items, onItemClick, className }: CategoryRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`py-6 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('left')}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scroll('right')}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
            {items.map((item) => (
              <Card
                key={item.id}
                className="w-80 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onItemClick?.(item)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {item.image}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base text-foreground mb-1 truncate">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.supplierCount.toLocaleString()} suppliers
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Popular products:</p>
                          <p className="text-xs text-foreground truncate">
                            {item.popularProducts.slice(0, 2).join(', ')}
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground truncate">
                            {item.topRegions.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 