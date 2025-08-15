'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RedirectToWaitingList } from '../waiting-list/RedirectToWaitingList'
import Link from 'next/link'

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
    title: "Where African Businesses Trade Without Borders.",
    subtitle: "",
    description: "B2B marketplace connecting manufacturers, farmers, and suppliers to buyers worldwide.",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755246443/Rectangle_yiyc7j.png"
  },
  buyers: {
    title: "From Factory Floor to Global Buyer - No Middlemen.",
    subtitle: "",
    description: "Manufacturers. Farmers. Producers. Distributors. All trading directly on Kalabah",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755259319/factory_jchmdr.png"
  },
  fashion: {
    title: "From Factory to Fashion.",
    subtitle: "",
    description: "Preview categories you'll find on Kalabah: Agriculture, Beauty, Electronics & more.",
    ctaText: "Join Waitlist",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755265523/Vector_12_unu9tq.png"
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
      {/* Content container - responsive layout */}
      <div className="flex h-full relative z-20">
        {/* Content - responsive width and padding */}
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 flex items-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 max-w-full">
            {/* Responsive typography */}
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight transform transition-all duration-500 group-hover:translate-x-1 text-white font-montserrat sm:whitespace-nowrap">
              {title}
            </h3>
            {subtitle && (
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight transform transition-all duration-500 delay-75 group-hover:translate-x-1 text-white font-montserrat sm:whitespace-nowrap">
                {subtitle}
              </h4>
            )}
            {description && (
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed transform transition-all duration-500 delay-100 group-hover:translate-x-1 font-medium max-w-[200px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {description}
              </p>
            )}
            
            {/* Responsive button container */}
            <div className="flex flex-row items-stretch gap-1 sm:gap-1 md:gap-2 lg:gap-3 pt-1 sm:pt-2 md:pt-3 lg:pt-4 w-full">
              <RedirectToWaitingList>
                <button 
                  className="bg-black/50 hover:bg-black/70 text-white border border-white px-2 sm:px-3 md:px-4 lg:px-6 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-6 sm:h-8 md:h-10 rounded-[20px] flex items-center justify-center leading-none"
                >
                  <span className="transition-all duration-200 group-hover:translate-x-0.5 whitespace-nowrap">
                    {ctaText}
                  </span>
                </button>
              </RedirectToWaitingList>
              
              <Link href="/supplier">
                <button 
                  className="bg-black/50 hover:bg-black/70 text-white border border-white px-2 sm:px-3 md:px-4 lg:px-6 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-6 sm:h-8 md:h-10 rounded-[20px] flex items-center justify-center leading-none"
                >
                  <span className="transition-all duration-200 group-hover:translate-x-0.5 whitespace-nowrap">
                    Become A Supplier
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>

      {/* Right side - Human image for the first banner - POSITIONED OUTSIDE CONTENT CONTAINER */}
      {imageUrl.includes('Rectangle_yiyc7j.png') && (
        <img 
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1755246440/ChatGPT_Image_Aug_14_2025_11_42_01_PM_1_ck7bgi.png"
          alt="Business people discussing"
          className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom z-10 max-w-[20%] xs:max-w-[22%] sm:max-w-[28%] md:max-w-[35%] lg:max-w-[40%] xl:max-w-[45%]"
          style={{ 
            objectPosition: 'bottom center',
            minHeight: '100%'
          }}
        />
      )}
      
      {/* Right side - Image for the second banner (buyers) */}
      {imageUrl.includes('factory_jchmdr.png') && (
        <img 
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1755259318/Rectangle_1_cjohrs.png"
          alt="Factory and business"
          className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom z-10 max-w-[20%] xs:max-w-[22%] sm:max-w-[28%] md:max-w-[35%] lg:max-w-[40%] xl:max-w-[45%]"
          style={{ 
            objectPosition: 'bottom center',
            minHeight: '100%'
          }}
        />
      )}
      
      {/* Right side - Image for the third banner (fashion) */}
      {imageUrl.includes('Vector_12_unu9tq.png') && (
        <img 
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1755267568/Vector_13_z9stue.png"
          alt="Fashion and style"
          className="hidden sm:block absolute bottom-0 right-0 h-full w-auto object-contain object-bottom z-10 max-w-[20%] xs:max-w-[22%] sm:max-w-[28%] md:max-w-[35%] lg:max-w-[40%] xl:max-w-[45%]"
          style={{ 
            objectPosition: 'bottom center',
            minHeight: '100%'
          }}
        />
      )}

      {/* Floating elements - responsive positioning and sizing */}
      <div className="hidden sm:block absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-0.5 sm:h-1 md:h-1.5 lg:h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden sm:block absolute bottom-2 sm:bottom-3 md:bottom-6 right-3 sm:right-6 md:right-12 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
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

  // Auto-advance banner every 8 seconds - DISABLED FOR NOW
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBanner((prev) => (prev + 1) % bannerKeys.length)
  //   }, 8000)

  //   return () => clearInterval(interval)
  // }, [bannerKeys.length])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerKeys.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerKeys.length) % bannerKeys.length)
  }

  return (
    <div className="relative overflow-hidden group">
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

      {/* Navigation Arrows - Always Visible */}
      {bannerKeys.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={prevBanner}
            className="absolute left-0.5 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextBanner}
            className="absolute right-0.5 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next banner"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </>
      )}
    </div>
  )
}

export default StandardBanner
export { BannerCarousel }