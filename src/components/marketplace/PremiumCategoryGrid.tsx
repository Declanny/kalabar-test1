'use client'

import React from 'react'
import { ArrowRight, Users, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface CategoryData {
  id: string
  name: string
  icon: string
  supplierCount: number
  productCount: number
  description: string
  topProducts: string[]
  trending: boolean
  bgColor: string
  textColor: string
}

const categories: CategoryData[] = [
  {
    id: 'electronics',
    name: 'Electronics & Electrical',
    icon: '⚡',
    supplierCount: 1250,
    productCount: 45000,
    description: 'LED lights, consumer electronics, industrial equipment',
    topProducts: ['LED Lights', 'Power Equipment', 'Control Systems'],
    trending: true,
    bgColor: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-600'
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    icon: '⚙️',
    supplierCount: 980,
    productCount: 32000,
    description: 'Industrial pumps, agricultural equipment, processing machines',
    topProducts: ['Industrial Pumps', 'Agricultural Equipment', 'Processing Machines'],
    trending: true,
    bgColor: 'from-orange-500 to-orange-600',
    textColor: 'text-orange-600'
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: '🧵',
    supplierCount: 750,
    productCount: 28000,
    description: 'Cotton fabric, garments, home textiles, technical fabrics',
    topProducts: ['Cotton Fabric', 'Garments', 'Home Textiles'],
    trending: false,
    bgColor: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-600'
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    icon: '🍯',
    supplierCount: 1100,
    productCount: 38000,
    description: 'Honey, cocoa, spices, processed foods, natural products',
    topProducts: ['Honey Products', 'Cocoa Beans', 'Spices'],
    trending: true,
    bgColor: 'from-green-500 to-green-600',
    textColor: 'text-green-600'
  },
  {
    id: 'construction',
    name: 'Construction & Building',
    icon: '🏗️',
    supplierCount: 650,
    productCount: 22000,
    description: 'Building materials, tools, decorative materials, safety equipment',
    topProducts: ['Building Materials', 'Tools', 'Safety Equipment'],
    trending: false,
    bgColor: 'from-gray-500 to-gray-600',
    textColor: 'text-gray-600'
  },
  {
    id: 'automotive',
    name: 'Automotive & Transport',
    icon: '🚛',
    supplierCount: 420,
    productCount: 15000,
    description: 'Auto parts, commercial vehicles, accessories, services',
    topProducts: ['Auto Parts', 'Commercial Vehicles', 'Accessories'],
    trending: false,
    bgColor: 'from-red-500 to-red-600',
    textColor: 'text-red-600'
  },
  {
    id: 'health',
    name: 'Health & Medical',
    icon: '🏥',
    supplierCount: 380,
    productCount: 12000,
    description: 'Medical equipment, pharmaceuticals, health supplements',
    topProducts: ['Medical Equipment', 'Pharmaceuticals', 'Supplements'],
    trending: true,
    bgColor: 'from-teal-500 to-teal-600',
    textColor: 'text-teal-600'
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Materials',
    icon: '🧪',
    supplierCount: 520,
    productCount: 18000,
    description: 'Industrial chemicals, packaging materials, raw materials',
    topProducts: ['Industrial Chemicals', 'Packaging', 'Raw Materials'],
    trending: false,
    bgColor: 'from-indigo-500 to-indigo-600',
    textColor: 'text-indigo-600'
  }
]

interface PremiumCategoryGridProps {
  onCategoryClick?: (category: CategoryData) => void
}

export function PremiumCategoryGrid({ onCategoryClick }: PremiumCategoryGridProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover millions of products from trusted suppliers across Africa's top industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white"
              onClick={() => onCategoryClick?.(category)}
            >
              <div className={`h-2 bg-gradient-to-r ${category.bgColor}`}></div>
              
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  {/* Icon and Category Name */}
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-gray-700">
                          {category.name}
                        </h3>
                        {category.trending && (
                          <Badge className="bg-red-100 text-red-700 text-xs">
                            🔥 Trending
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
                        <Users className="h-3 w-3" />
                        <span className="text-xs">Suppliers</span>
                      </div>
                      <div className="font-bold text-gray-900">
                        {category.supplierCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
                        <Package className="h-3 w-3" />
                        <span className="text-xs">Products</span>
                      </div>
                      <div className="font-bold text-gray-900">
                        {category.productCount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Top Products */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Popular Products
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {category.topProducts.slice(0, 2).map((product, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full group-hover:${category.textColor} group-hover:border-current transition-colors`}
                  >
                    View All Products
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 