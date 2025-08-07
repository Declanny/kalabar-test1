'use client'

import React, { useState } from 'react'
import { ChevronRight, Grid, Apple, Building2, Shirt, Sparkles, Heart, Headphones, Sofa, Printer, Leaf, Package } from 'lucide-react'
import Link from 'next/link'
import AdvertisingBanner from './AdvertisingBanner'

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  productCount: number
  subcategories?: string[]
}

const categories: Category[] = [
  {
    id: 'food-agricultural',
    name: 'Food & Agricultural Produce',
    icon: <Apple className="w-5 h-5" />,
    productCount: 45234,
    subcategories: ['Fresh Fruits & Vegetables', 'Grains & Cereals', 'Dairy Products', 'Meat & Poultry', 'Seafood & Fish']
  },
  {
    id: 'building-materials',
    name: 'Building Materials',
    icon: <Building2 className="w-5 h-5" />,
    productCount: 32156,
    subcategories: ['Cement & Concrete', 'Steel & Metal Products', 'Wood & Timber', 'Plumbing Materials', 'Electrical Supplies']
  },
  {
    id: 'packaged-consumer-goods',
    name: 'Packaged Consumer Goods',
    icon: <Package className="w-5 h-5" />,
    productCount: 28973,
    subcategories: ['Beverages & Drinks', 'Snacks & Confectionery', 'Personal Care Products', 'Household Items', 'Baby Products']
  },
  {
    id: 'fashion-apparel',
    name: 'Fashion & Apparel',
    icon: <Shirt className="w-5 h-5" />,
    productCount: 35421,
    subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Children\'s Wear', 'Fashion Accessories', 'Footwear']
  },
  {
    id: 'beauty-skincare',
    name: 'Beauty & Skincare Products',
    icon: <Sparkles className="w-5 h-5" />,
    productCount: 22847,
    subcategories: ['Skincare Products', 'Makeup & Cosmetics', 'Hair Care Products', 'Fragrances & Perfumes', 'Beauty Tools']
  },
  {
    id: 'electronics-gadgets',
    name: 'Electronics & Gadgets',
    icon: <Headphones className="w-5 h-5" />,
    productCount: 15632,
    subcategories: ['Mobile Phones & Tablets', 'Computers & Laptops', 'Audio Equipment', 'Cameras & Photography', 'Smart Devices']
  },
  {
    id: 'health-medical',
    name: 'Health & Medical Supplies',
    icon: <Heart className="w-5 h-5" />,
    productCount: 12458,
    subcategories: ['Pharmaceuticals & Medicines', 'Medical Equipment', 'First Aid Supplies', 'Health Supplements', 'Medical Devices']
  },
  {
    id: 'furniture-home',
    name: 'Furniture & Home Essentials',
    icon: <Sofa className="w-5 h-5" />,
    productCount: 18965,
    subcategories: ['Living Room Furniture', 'Bedroom Furniture', 'Kitchen & Dining Furniture', 'Office Furniture', 'Home Decor']
  },
  {
    id: 'printing-office',
    name: 'Printing & Office Supplies',
    icon: <Printer className="w-5 h-5" />,
    productCount: 15632,
    subcategories: ['Paper Products', 'Writing Supplies', 'Office Equipment', 'Printing Services', 'Stationery Items']
  },
  {
    id: 'raw-materials-agro',
    name: 'Raw Materials & Agro Inputs',
    icon: <Leaf className="w-5 h-5" />,
    productCount: 12458,
    subcategories: ['Fertilizers & Soil Nutrients', 'Pesticides & Herbicides', 'Seeds & Seedlings', 'Animal Feed', 'Agricultural Tools']
  },
  {
    id: 'automotive-parts',
    name: 'Automotive & Parts',
    icon: <Package className="w-5 h-5" />,
    productCount: 9876,
    subcategories: ['Car Parts', 'Motorcycle Parts', 'Truck Parts', 'Auto Accessories', 'Maintenance Tools']
  }
]

interface CategoryBannerLayoutProps {
  onCategorySelect?: (categoryId: string) => void
}

export function CategoryBannerLayout({ onCategorySelect }: CategoryBannerLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCategory(null)
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row bg-gray-50">
          {/* Left Sidebar - Categories with four-sided closed table */}
          <div className="hidden lg:block w-full lg:w-[25%] bg-white border border-gray-200 rounded-lg mt-4" style={{height: 'fit-content'}}>
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200 h-16">
              <div className="flex items-center gap-3">
                <Grid className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900 text-base">All Categories</span>
              </div>
            </div>

            {/* Categories List */}
            <div className="py-2">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="border-b border-gray-200 h-12"
                >
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="w-full h-full flex items-center justify-between px-4 text-left hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">{category.icon}</span>
                      <span className="font-medium text-gray-900 group-hover:text-green-600 text-sm">
                        {category.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                  </button>
                </div>
              ))}
              
              {/* View All Button */}
              <div className="py-4">
                <button className="w-full flex items-center justify-center text-sm text-gray-500 hover:text-green-600 transition-colors font-medium">
                  View all
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Banners */}
          <div className="w-full lg:w-[75%] lg:pl-4 mt-4">
            {/* Top Banner */}
            <div className="pb-2 sm:pb-4 pt-0">
              <AdvertisingBanner variant="default" />
            </div>

            {/* Bottom Banners */}
            <div className="pt-1 sm:pt-2 pb-3 sm:pb-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <AdvertisingBanner variant="large" />
                </div>
                <div>
                  <AdvertisingBanner variant="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Modal */}
      {showModal && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Categories for you</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content - Two Panel Layout */}
            <div className="flex h-[calc(90vh-120px)]">
              {/* Left Sidebar - Subcategories List */}
              <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
                <div className="space-y-2">
                  {categories.find(cat => cat.id === selectedCategory)?.subcategories?.map((sub, index) => (
                    <Link href="/waiting-list?action=true" key={index}>
                      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                          {sub}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side - Product Images Grid */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-6 gap-6">
                  {categories.find(cat => cat.id === selectedCategory)?.subcategories?.map((sub, index) => (
                    <Link href="/waiting-list?action=true" key={index}>
                      <div className="group cursor-pointer">
                        <div className="bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 p-4 h-40 flex flex-col">
                          <div className="flex-1 flex items-center justify-center mb-2">
                            <img 
                              src={`https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg`}
                              alt={sub}
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-700 group-hover:text-green-600 text-center leading-tight">
                            {sub}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 