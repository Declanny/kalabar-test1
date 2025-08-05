'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Sprout, Baby, Package, Briefcase, Truck, Car, Gift, Lightbulb, Diamond, Factory, Footprints, Home, Tv, Droplets, Heart, Sun, Palette, Utensils, Leaf, Coffee, Gem, Pill, Shirt, Hammer, Flower, Zap } from 'lucide-react'

interface CategoryItem {
  id: string
  name: string
  icon: React.ReactNode
}

const categoryItems: CategoryItem[] = [
  // Page 1 - Core Nigerian Exports
  {
    id: '1',
    name: 'Agricultural Products',
    icon: <Sprout />
  },
  {
    id: '2',
    name: 'Textiles & Fabrics',
    icon: <Shirt />
  },
  {
    id: '3',
    name: 'Handcrafted Furniture',
    icon: <Package />
  },
  {
    id: '4',
    name: 'Leather Goods',
    icon: <Briefcase />
  },
  {
    id: '5',
    name: 'Food & Beverages',
    icon: <Utensils />
  },
  {
    id: '6',
    name: 'Traditional Crafts',
    icon: <Gift />
  },
  {
    id: '7',
    name: 'Natural Cosmetics',
    icon: <Flower />
  },
  {
    id: '8',
    name: 'Art & Sculptures',
    icon: <Palette />
  },
  {
    id: '9',
    name: 'Jewelry & Beads',
    icon: <Gem />
  },
  {
    id: '10',
    name: 'Herbal Medicines',
    icon: <Pill />
  },
  {
    id: '11',
    name: 'Footwear',
    icon: <Footprints />
  },
  {
    id: '12',
    name: 'Building Materials',
    icon: <Hammer />
  },
  {
    id: '13',
    name: 'Ceramics & Pottery',
    icon: <Tv />
  },
  {
    id: '14',
    name: 'Essential Oils',
    icon: <Droplets />
  },
  {
    id: '15',
    name: 'Organic Products',
    icon: <Leaf />
  },
  {
    id: '16',
    name: 'Recycled Materials',
    icon: <Zap />
  },
  // Page 2 - Manufacturing & Industrial
  {
    id: '17',
    name: 'Automotive Parts',
    icon: <Car />
  },
  {
    id: '18',
    name: 'Electronics',
    icon: <Tv />
  },
  {
    id: '19',
    name: 'Plastics & Packaging',
    icon: <Package />
  },
  {
    id: '20',
    name: 'Metal Products',
    icon: <Hammer />
  },
  {
    id: '21',
    name: 'Paper Products',
    icon: <Briefcase />
  },
  {
    id: '22',
    name: 'Chemical Products',
    icon: <Droplets />
  },
  {
    id: '23',
    name: 'Machinery & Equipment',
    icon: <Factory />
  },
  {
    id: '24',
    name: 'Tools & Hardware',
    icon: <Hammer />
  },
  {
    id: '25',
    name: 'Electrical Components',
    icon: <Zap />
  },
  {
    id: '26',
    name: 'Construction Materials',
    icon: <Home />
  },
  {
    id: '27',
    name: 'Industrial Chemicals',
    icon: <Factory />
  },
  {
    id: '28',
    name: 'Safety Equipment',
    icon: <Shirt />
  },
  {
    id: '29',
    name: 'Welding Supplies',
    icon: <Zap />
  },
  {
    id: '30',
    name: 'Hydraulic Systems',
    icon: <Droplets />
  },
  {
    id: '31',
    name: 'Pneumatic Equipment',
    icon: <Factory />
  },
  {
    id: '32',
    name: 'Control Systems',
    icon: <Tv />
  },
  // Page 3 - Services & Technology
  {
    id: '33',
    name: 'IT Services',
    icon: <Tv />
  },
  {
    id: '34',
    name: 'Digital Marketing',
    icon: <Zap />
  },
  {
    id: '35',
    name: 'Financial Services',
    icon: <Diamond />
  },
  {
    id: '36',
    name: 'Logistics & Shipping',
    icon: <Truck />
  },
  {
    id: '37',
    name: 'Consulting Services',
    icon: <Briefcase />
  },
  {
    id: '38',
    name: 'Training & Education',
    icon: <Gift />
  },
  {
    id: '39',
    name: 'Legal Services',
    icon: <Briefcase />
  },
  {
    id: '40',
    name: 'Healthcare Services',
    icon: <Heart />
  },
  {
    id: '41',
    name: 'Real Estate',
    icon: <Home />
  },
  {
    id: '42',
    name: 'Tourism Services',
    icon: <Gift />
  },
  {
    id: '43',
    name: 'Event Management',
    icon: <Gift />
  },
  {
    id: '44',
    name: 'Security Services',
    icon: <Shirt />
  },
  {
    id: '45',
    name: 'Cleaning Services',
    icon: <Droplets />
  },
  {
    id: '46',
    name: 'Maintenance Services',
    icon: <Hammer />
  },
  {
    id: '47',
    name: 'Research & Development',
    icon: <Factory />
  },
  {
    id: '48',
    name: 'Quality Control',
    icon: <Gem />
  }
]

export function TopSuppliersCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 16 // Show 16 items per page
  const totalPages = Math.ceil(categoryItems.length / itemsPerPage)

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  return (
    <div className="bg-white py-4 sm:py-8">
      <div className="w-full px-2 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-8">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Top Categories</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Explore featured product categories with verified suppliers</p>
          </div>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            View all categories →
          </button>
        </div>

        {/* Categories Grid Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 0}
            className={`absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border ${
              currentPage === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:text-green-600 hover:shadow-xl'
            } transition-all`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentPage >= totalPages - 1}
            className={`absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg border ${
              currentPage >= totalPages - 1 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:text-green-600 hover:shadow-xl'
            } transition-all`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

                                {/* Categories Grid */}
           <div className="mx-2 sm:mx-8">
             <div className="overflow-x-auto scrollbar-hide">
               <div className="flex gap-2 sm:gap-6 lg:gap-10" style={{ width: 'max-content' }}>
                 {categoryItems.map((item) => (
                   <div 
                     key={item.id}
                     className="flex flex-col items-center cursor-pointer group flex-shrink-0 w-28 sm:w-32 lg:w-36"
                   >
                     {/* Square Card with Icon and Name */}
                     <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center group-hover:border-green-300 group-hover:shadow-md transition-all duration-200 p-2">
                       {/* Icon */}
                       <div className="text-gray-700 group-hover:text-green-600 transition-colors mb-2">
                         <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                           {item.icon}
                         </div>
                       </div>
                       
                       {/* Category Name */}
                       <span className="text-xs sm:text-sm text-gray-700 text-center leading-tight group-hover:text-green-600 transition-colors font-medium">
                         {item.name}
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>


        </div>
      </div>
    </div>
  )
} 