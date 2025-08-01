'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductCategory {
  id: string
  name: string
  description: string
  productCount: string
  image: string
  priceRange: string
  moqRange: string
  topSuppliers: number
}

const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'African Agricultural Products',
    description: 'Premium cocoa, cola nuts, bitter cola & spices',
    productCount: '2.3k products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    priceRange: '£12 - £45',
    moqRange: '15-100 kg',
    topSuppliers: 156       
  },
  {
    id: '2', 
    name: 'Traditional Textiles & Fabrics',
    description: 'Aba fabrics, African prints & premium textiles',
    productCount: '1.8k products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    priceRange: '£25 - £85',
    moqRange: '50-500 yards',
    topSuppliers: 89
  },
  {
    id: '3',
    name: 'Herbal & Medicinal Products',
    description: 'Moringa seeds, cloves & natural extracts',
    productCount: '1.2k products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    priceRange: '£30 - £120',
    moqRange: '10-50 kg',
    topSuppliers: 124
  },
  {
    id: '4',
    name: 'Premium Spices & Seasonings',
    description: 'Whole cloves, pepper & exotic spice blends',
    productCount: '950 products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    priceRange: '£18 - £75',
    moqRange: '5-25 kg',
    topSuppliers: 78
  },
  {
    id: '5',
    name: 'African Crafts & Souvenirs',
    description: 'Handcrafted items, traditional art & cultural pieces',
    productCount: '640 products',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    priceRange: '£15 - £150',
    moqRange: '5-50 pieces',
    topSuppliers: 67
  },
  {
    id: '6',
    name: 'Electronics & Technology',
    description: 'LED lighting, components & industrial electronics',
    productCount: '3.4k products',
    image: '💡',
    priceRange: '£5 - £200',
    moqRange: '10-500 pieces',
    topSuppliers: 245
  }
]

export function TopSuppliersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
  const maxIndex = Math.max(0, productCategories.length - itemsPerPage.desktop)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div className="bg-white py-4 sm:py-6 lg:py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Top Categories</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-0.5 sm:mt-1">Explore featured product categories with verified suppliers</p>
          </div>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm hidden sm:block">
            View all categories →
          </button>
        </div>

        {/* Mobile Scroll Container */}
        <div className="block sm:hidden">
          <div className="overflow-x-auto scrollbar-hide -mx-4">
            <div className="flex gap-3 px-4 min-w-full">
              {productCategories.map((category) => (
                <div key={category.id} className="w-[85%] flex-shrink-0">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    {/* Mobile Card Content */}
                    {/* ... rest of the card content ... */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Carousel Container */}
        <div className="relative hidden sm:block">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute -left-2 lg:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg border ${
              currentIndex === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:text-green-600 hover:shadow-xl'
            } transition-all`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute -right-2 lg:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg border ${
              currentIndex >= maxIndex 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:text-green-600 hover:shadow-xl'
            } transition-all`}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Category Cards */}
          <div className="overflow-hidden mx-4 lg:mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage.desktop)}%)` }}
            >
              {productCategories.map((category) => (
                <div key={category.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    {/* Category Image */}
                    <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {category.image.startsWith('http') ? (
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl group-hover:scale-105 transition-transform duration-300">
                          {category.image}
                        </div>
                      )}
                      
                      {/* Verified Badge - Top Right */}
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <div className="bg-blue-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium flex items-center space-x-1 shadow-sm">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                        <span className="bg-green-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                          {category.productCount}
                        </span>
                      </div>
                    </div>

                    {/* Category Info */}
                    <div className="p-3 sm:p-4">
                      {/* Category Name */}
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1.5 sm:mb-2 line-clamp-1">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                        {category.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4">
                        <div>
                          <span className="text-gray-500 text-[10px] sm:text-xs">Price Range</span>
                          <div className="font-medium text-gray-900 text-xs sm:text-sm">{category.priceRange}</div>
                        </div>
                        <div>
                          <span className="text-gray-500 text-[10px] sm:text-xs">MOQ Range</span>
                          <div className="font-medium text-gray-900 text-xs sm:text-sm">{category.moqRange}</div>
                        </div>
                      </div>

                      {/* Suppliers Count */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm text-gray-600">
                          {category.topSuppliers} verified suppliers
                        </span>
                        <span className="text-green-600 text-xs sm:text-sm font-medium">
                          View Products →
                        </span>
                      </div>

                      {/* Explore Button */}
                      <button className="w-full bg-gray-50 text-gray-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium hover:bg-green-50 hover:text-green-700 transition-colors border">
                        Explore Category
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="hidden sm:flex justify-center space-x-2 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-4 text-center sm:hidden">
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            View all categories →
          </button>
        </div>
      </div>
    </div>
  )
} 