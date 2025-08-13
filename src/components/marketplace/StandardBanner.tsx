'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RedirectToWaitingList } from '../waiting-list/RedirectToWaitingList'

interface StandardBannerProps {
  title: string
  subtitle?: string
  description?: string
  ctaText: string
  imageUrl: string
  variant?: 'default' | 'large'
}

export interface StandardBannerData {
  title: string
  subtitle: string
  description?: string
  ctaText: string
  imageUrl: string
}

export const standardBanners: Record<string, StandardBannerData> = {
  suppliers: {
    title: "Africa's",
    subtitle: "#1 B2B Hub.",
    description: "Get access to 5,000+ trusted\nsuppliers ready to sell",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755099906/Screenshot_2025-08-13_at_4.42.37_PM_glrzka.png"
  },
  buyers: {
    title: "To Buy Smarter.",
    subtitle: "Go Kalabah.",
    description: "Get access to 5,000+ trusted\nsuppliers ready to sell",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097791/Local-spice_mskpgv.webp"
  },
  fashion: {
    title: "From Farm to Fashion.",
    subtitle: "",
    description: "Showcase your products to a growing network\nof verified buyers. Start early, grow fast with Kalabah.",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755105520/7bbfcf02cb3c7cd1090dd038ae464d4ef01e196a_vs3sp5.png"
  }
}

const StandardBanner: React.FC<StandardBannerProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  imageUrl,
  variant = 'default'
}) => {
  return (
    <div 
      className={`relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl group ${
        variant === 'large' 
          ? 'h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96' 
          : 'h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80'
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Mobile-first gradient overlay - covers more area on small screens */}
      <div 
        className="absolute inset-y-0 left-0 z-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        style={{
          background: 'linear-gradient(90deg, #4E4E4E 0%, rgba(78, 78, 78, 0.9) 20%, rgba(78, 78, 78, 0.7) 50%, rgba(78, 78, 78, 0.3) 80%, transparent 100%)'
        }}
      ></div>
      


      {/* Content container - responsive layout */}
      <div className="flex h-full relative z-20">
        {/* Content - responsive width and padding - wider on mobile */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex items-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="text-white space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 max-w-full">
            {/* Responsive typography - smaller on mobile, perfect on large */}
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight transform transition-all duration-500 group-hover:translate-x-1 text-white whitespace-nowrap">
              {title}
            </h3>
            {subtitle && (
              <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight transform transition-all duration-500 delay-75 group-hover:translate-x-1 text-white">
                {subtitle}
              </h4>
            )}
            {description && (
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed transform transition-all duration-500 delay-100 group-hover:translate-x-1 font-medium whitespace-pre-line max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {description}
              </p>
            )}
            
            {/* Responsive button container - always horizontal with perfect alignment */}
            <div className="flex flex-row items-stretch gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 pt-1 sm:pt-2 md:pt-3 lg:pt-4 w-full max-w-[95%] sm:max-w-none">
              <RedirectToWaitingList>
                <button 
                  className="bg-[#00C298] hover:bg-[#00C298]/90 text-white border-2 border-[#00C298] px-2 sm:px-3 md:px-6 lg:px-8 xl:px-10 text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-6 sm:h-8 md:h-10 lg:h-11 xl:h-12 rounded-md sm:rounded-lg lg:rounded-xl flex-shrink-0 min-w-[75px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-0 flex items-center justify-center leading-none"
                >
                  <span className="transition-all duration-200 group-hover:translate-x-0.5 whitespace-nowrap">
                    Join Waitlist
                  </span>
                </button>
              </RedirectToWaitingList>
              
              <button 
                className="bg-white hover:bg-[#00C298] border-2 border-[#00C298] text-[#00C298] hover:text-white px-2 sm:px-3 md:px-6 lg:px-8 xl:px-10 text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-6 sm:h-8 md:h-10 lg:h-11 xl:h-12 rounded-md sm:rounded-lg lg:rounded-xl flex-shrink-0 min-w-[85px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-0 flex items-center justify-center leading-none"
              >
                <span className="transition-all duration-200 group-hover:translate-x-0.5 whitespace-nowrap">
                  Become A Supplier
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right side - responsive width, image shows through clearly */}
        <div className="hidden sm:block sm:w-1/4 md:w-1/3 lg:w-1/2"></div>
      </div>

      {/* Floating elements - responsive positioning and sizing */}
      <div className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-0.5 sm:h-1 md:h-1.5 lg:h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-6 right-3 sm:right-6 md:right-12 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
    </div>
  )
}

// New Banner Carousel Component
interface BannerCarouselProps {
  variant?: 'default' | 'large'
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ variant = 'default' }) => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const bannerKeys = Object.keys(standardBanners)
  const currentBannerData = standardBanners[bannerKeys[currentBanner]]

  // Auto-advance banner every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerKeys.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [bannerKeys.length])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerKeys.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerKeys.length) % bannerKeys.length)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Banner Container with sliding animation */}
      <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
        {bannerKeys.map((key) => {
          const bannerData = standardBanners[key]
          return (
            <div key={key} className="min-w-full h-full">
              <StandardBanner
                title={bannerData.title}
                subtitle={bannerData.subtitle}
                description={bannerData.description}
                ctaText={bannerData.ctaText}
                imageUrl={bannerData.imageUrl}
                variant={variant}
              />
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows - Show on Hover */}
      {bannerKeys.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={prevBanner}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextBanner}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Next banner"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator - Show on Hover */}
      {bannerKeys.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {bannerKeys.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentBanner
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default StandardBanner
export { BannerCarousel }