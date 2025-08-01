'use client'

import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function AlibabaStyleLayout() {
  // Categories for sidebar
  const categories = [
    { icon: '⭐', name: 'Categories for you' },
    { icon: '🏭', name: 'Industrial Machinery' },
    { icon: '👕', name: 'Apparel & Accessories' },
    { icon: '📱', name: 'Consumer Electronics' },
    { icon: '🏠', name: 'Home & Garden' },
    { icon: '⚽', name: 'Sports & Entertainment' }
  ]

  // Frequently searched items
  const frequentlySearched = [
    {
      title: 'Wedding Dresses',
      image: '👰',
      bgColor: 'bg-pink-50'
    },
    {
      title: 'Mobile Phones',
      image: '📱',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Jewelry',
      image: '💍',
      bgColor: 'bg-yellow-50'
    }
  ]

  // Promotional banners
  const promoProducts = [
    {
      image: '📦',
      price: '£0.5238',
      soldCount: '1.2K+ sold',
      bgColor: 'bg-red-100'
    },
    {
      image: '🔧',
      price: '£6.62',
      soldCount: '910+ sold',
      bgColor: 'bg-orange-100'
    },
    {
      image: '💊',
      price: '£0.1123',
      soldCount: 'Delivery by 15 Aug',
      bgColor: 'bg-blue-100'
    },
    {
      image: '🧤',
      price: '£1.13',
      soldCount: '870+ sold',
      bgColor: 'bg-gray-100'
    }
  ]

  const customProducts = [
    {
      image: '🟡',
      price: '£5.08',
      moq: 'MOQ: 1',
      label: 'Logo/graphic design'
    },
    {
      image: '📊',
      price: '£1.41',
      moq: 'MOQ: 100',
      label: 'Logo/graphic design'
    },
    {
      image: '👠',
      price: '£3.39',
      moq: 'MOQ: 2',
      label: 'Logo/graphic design'
    },
    {
      image: '🏷️',
      price: '£24.70',
      moq: 'MOQ: 2',
      label: 'Name plate'
    }
  ]

  // Top deals products
  const topDeals = [
    {
      image: '🎯',
      price: '£0.6061',
      originalPrice: '£0.6734',
      moq: 'MOQ: 5',
      label: 'Flash Deal'
    },
    {
      image: '🚲',
      price: '£1,889.98',
      moq: 'MOQ: 1'
    },
    {
      image: '❄️',
      price: '£523.75',
      moq: 'MOQ: 1'
    },
    {
      image: '🏍️',
      price: '£449.15',
      originalPrice: '£774.40',
      moq: 'MOQ: 1'
    },
    {
      image: '📱',
      price: '£1.88',
      moq: 'MOQ: 1'
    },
    {
      image: '🚴',
      price: '£596.03',
      moq: 'MOQ: 1'
    }
  ]

  return (
    <div className="flex bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Top Section: Frequently Searched + Supplier Banner */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Frequently Searched Items */}
          {frequentlySearched.map((item, index) => (
            <Card key={index} className={`${item.bgColor} border-0 cursor-pointer hover:shadow-lg transition-shadow`}>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-2">Frequently searched</p>
                  <p className="font-semibold text-gray-900 mb-3">{item.title}</p>
                  <div className="text-4xl mb-2">{item.image}</div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Suppliers Banner */}
          <Card className="bg-gradient-to-r from-blue-200 to-blue-300 border-0 cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Suppliers from northern China</h3>
                <div className="text-4xl mb-3">🏗️</div>
                <Button 
                  className="bg-blue-900 hover:bg-blue-800 text-white rounded-full"
                  size="sm"
                >
                  View more
                </Button>
                <div className="flex justify-center mt-2 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-800' : 'bg-blue-600'}`} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Section */}
        <div className="text-center mb-6">
          <p className="text-gray-500">————— Recommended for your business —————</p>
        </div>

        {/* Promotional Banners */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Alibaba Guaranteed */}
          <Card className="bg-gradient-to-r from-red-400 to-red-500 text-white border-0">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">
                  <span style={{color: 'var(--primary-gold)'}}>Kalabah</span> Guaranteed
                </h3>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1">✓ Quick order and pay</span>
                  <span className="flex items-center gap-1">✓ On-time delivery</span>
                  <span className="flex items-center gap-1">✓ Money-back guarantee</span>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full">
                  Explore now
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {promoProducts.map((product, index) => (
                  <Card key={index} className="bg-white border-0">
                    <CardContent className="p-3">
                      <div className="text-center">
                        <div className="text-2xl mb-2">{product.image}</div>
                        <p className="font-bold text-gray-900">{product.price}</p>
                        <p className="text-xs text-gray-600">{product.soldCount}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fast Customization */}
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">⚡ Fast customization</h3>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1">✓ Low MOQ</span>
                  <span className="flex items-center gap-1">✓ 14-day dispatch</span>
                  <span className="flex items-center gap-1">✓ True to design</span>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full">
                  Explore now
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {customProducts.map((product, index) => (
                  <Card key={index} className="bg-white border-0">
                    <CardContent className="p-3">
                      <div className="text-center">
                        <div className="text-2xl mb-2">{product.image}</div>
                        <p className="font-bold text-gray-900">{product.price}</p>
                        <p className="text-xs text-gray-600">{product.moq}</p>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {product.label}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Deals Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top Deals</h2>
              <p className="text-gray-600">Score the lowest prices on Kalabah.com</p>
            </div>
            <Button variant="outline" className="text-sm" style={{color: 'var(--primary)'}}>
              View more →
            </Button>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {topDeals.map((product, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-3">
                  <div className="text-center">
                    {product.label && (
                      <Badge className="bg-red-500 text-white text-xs mb-2">
                        🔥 {product.label}
                      </Badge>
                    )}
                    <div className="text-3xl mb-3">{product.image}</div>
                    <div className="space-y-1">
                      <p className="font-bold text-red-600">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-xs text-gray-500 line-through">{product.originalPrice}</p>
                      )}
                      <p className="text-xs text-gray-600">{product.moq}</p>
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