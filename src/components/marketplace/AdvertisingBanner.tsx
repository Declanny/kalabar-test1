'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RedirectToWaitingList } from '../waiting-list/RedirectToWaitingList'

interface AdvertisingBannerProps {
  variant?: 'default' | 'large'
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({ variant = 'default' }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Banner slides data
  const bannerSlides = [
    {
      id: 1,
      title: "New B2B Solutions",
      subtitle: "Discover the latest sourcing opportunities across Africa",
      ctaText: "Explore Now",
      bgColor: "bg-gradient-to-br from-blue-100 to-indigo-200",
      textColor: "text-gray-800",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg"
    },
    {
      id: 2,
      title: "Premium Agricultural Products",
      subtitle: "Connect with verified suppliers for quality produce",
      ctaText: "Shop Products",
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-200",
      textColor: "text-gray-800",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif"
    },
    {
      id: 3,
      title: "Herbal & Natural Products",
      subtitle: "Source authentic African herbs and natural extracts",
      ctaText: "View Catalog",
      bgColor: "bg-gradient-to-br from-orange-100 to-red-200",
      textColor: "text-gray-800",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-xl group ${variant === 'large' ? 'h-32 sm:h-80' : 'h-40 sm:h-64 lg:h-80'}`}>
      <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannerSlides.map((slide) => (
          <div key={slide.id} className={`min-w-full h-full ${slide.bgColor} relative flex items-center`}>
            <div className="w-full px-2 sm:container sm:px-4 relative z-10">
              <div className="grid grid-cols-2 gap-1 sm:gap-4 items-center">
                <div className={`${slide.textColor} px-1 sm:px-0`}>
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-3 line-clamp-2 sm:line-clamp-none">{slide.title}</h3>
                  <p className="hidden sm:block text-sm lg:text-base mb-2 sm:mb-4 text-gray-600 leading-relaxed">{slide.subtitle}</p>
                  <RedirectToWaitingList>
                    <Button className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 px-1.5 sm:px-4 py-0.5 sm:py-2 text-[10px] sm:text-sm shadow-sm">
                      {slide.ctaText} <ArrowRight className="ml-0.5 sm:ml-1 w-2 h-2 sm:w-3 sm:h-3" />
                    </Button>
                  </RedirectToWaitingList>
                </div>
                <div className="block pl-1 sm:pl-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-16 sm:h-40 lg:h-48 object-cover rounded-md sm:rounded-lg shadow-sm sm:shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Show on Hover */}
      <button 
        onClick={prevSlide}
        className="absolute left-0.5 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-sm sm:shadow-lg rounded-full p-0.5 sm:p-2 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-2 h-2 sm:w-4 sm:h-4 text-gray-600" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0.5 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-sm sm:shadow-lg rounded-full p-0.5 sm:p-2 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-2 h-2 sm:w-4 sm:h-4 text-gray-600" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-0.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-0.5 sm:space-x-1">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default AdvertisingBanner 