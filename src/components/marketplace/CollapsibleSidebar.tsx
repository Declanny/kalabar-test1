'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Category {
  id: string
  name: string
  icon: string
  count: number
}

const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: '⚡', count: 1250 },
  { id: 'machinery', name: 'Machinery', icon: '⚙️', count: 980 },
  { id: 'textiles', name: 'Textiles', icon: '🧵', count: 750 },
  { id: 'food', name: 'Food & Beverage', icon: '🍯', count: 1100 },
  { id: 'construction', name: 'Construction', icon: '🏗️', count: 650 },
  { id: 'automotive', name: 'Automotive', icon: '🚛', count: 420 },
  { id: 'health', name: 'Health & Medical', icon: '🏥', count: 380 },
  { id: 'chemicals', name: 'Chemicals', icon: '🧪', count: 520 }
]

interface CollapsibleSidebarProps {
  className?: string
  onCategorySelect?: (categoryId: string) => void
  selectedCategory?: string
}

export function CollapsibleSidebar({ className, onCategorySelect, selectedCategory }: CollapsibleSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-4 border-b border-gray-200 bg-white">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Categories
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        w-full lg:w-64 bg-white border-r border-gray-200 h-full
        ${className}
      `}>
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Categories</h3>
        </div>
        
        <div className="p-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id
            
            return (
              <button
                key={category.id}
                onClick={() => {
                  onCategorySelect?.(category.id)
                  setIsOpen(false) // Close on mobile after selection
                }}
                className={`
                  w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-gray-50 transition-colors
                  ${isSelected ? 'bg-gray-100' : ''}
                `}
                style={isSelected ? {color: 'var(--primary)'} : {}}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.count.toLocaleString()}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
} 