'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SubCategory {
  name: string
  count: number
}

interface Category {
  id: string
  name: string
  icon: string
  count: number
  subcategories: SubCategory[]
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics & Electrical',
    icon: '⚡',
    count: 1250,
    subcategories: [
      { name: 'Consumer Electronics', count: 450 },
      { name: 'Industrial Electronics', count: 320 },
      { name: 'LED Lighting', count: 280 },
      { name: 'Power Equipment', count: 200 }
    ]
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial Equipment',
    icon: '⚙️',
    count: 980,
    subcategories: [
      { name: 'Industrial Pumps', count: 210 },
      { name: 'Processing Equipment', count: 185 },
      { name: 'Construction Machinery', count: 165 },
      { name: 'Agricultural Equipment', count: 420 }
    ]
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: '🧵',
    count: 750,
    subcategories: [
      { name: 'Cotton Fabric', count: 280 },
      { name: 'Garments', count: 220 },
      { name: 'Home Textiles', count: 150 },
      { name: 'Technical Textiles', count: 100 }
    ]
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    icon: '🍯',
    count: 1100,
    subcategories: [
      { name: 'Honey & Natural Products', count: 320 },
      { name: 'Cocoa & Coffee', count: 280 },
      { name: 'Spices & Seasonings', count: 250 },
      { name: 'Processed Foods', count: 250 }
    ]
  },
  {
    id: 'construction',
    name: 'Construction & Building Materials',
    icon: '🏗️',
    count: 650,
    subcategories: [
      { name: 'Building Materials', count: 280 },
      { name: 'Hardware & Tools', count: 180 },
      { name: 'Decorative Materials', count: 120 },
      { name: 'Safety Equipment', count: 70 }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive & Transportation',
    icon: '🚛',
    count: 420,
    subcategories: [
      { name: 'Auto Parts', count: 180 },
      { name: 'Commercial Vehicles', count: 120 },
      { name: 'Accessories', count: 80 },
      { name: 'Transportation Services', count: 40 }
    ]
  },
  {
    id: 'health',
    name: 'Health & Medical',
    icon: '🏥',
    count: 380,
    subcategories: [
      { name: 'Medical Equipment', count: 150 },
      { name: 'Pharmaceuticals', count: 120 },
      { name: 'Health Supplements', count: 70 },
      { name: 'Medical Supplies', count: 40 }
    ]
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Materials',
    icon: '🧪',
    count: 520,
    subcategories: [
      { name: 'Industrial Chemicals', count: 180 },
      { name: 'Packaging Materials', count: 150 },
      { name: 'Raw Materials', count: 120 },
      { name: 'Specialty Chemicals', count: 70 }
    ]
  }
]

interface CategorySidebarProps {
  className?: string
  onCategorySelect?: (categoryId: string) => void
  selectedCategory?: string
}

export function CategorySidebar({ className, onCategorySelect, selectedCategory }: CategorySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect?.(categoryId)
    if (!expandedCategories.has(categoryId)) {
      toggleCategory(categoryId)
    }
  }

  return (
    <div className={cn("w-64 bg-white border-r border-border h-full overflow-y-auto", className)}>
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-lg text-foreground">Product Categories</h3>
        <p className="text-sm text-muted-foreground mt-1">Browse by industry</p>
      </div>
      
      <div className="p-2">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category.id)
          const isSelected = selectedCategory === category.id
          
          return (
            <div key={category.id} className="mb-1">
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-muted/50 transition-colors",
                  isSelected && "bg-primary/10 text-primary"
                )}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.count.toLocaleString()} products</div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              
              {isExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {category.subcategories.map((subcategory, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span>{subcategory.name}</span>
                        <span className="text-xs">({subcategory.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 