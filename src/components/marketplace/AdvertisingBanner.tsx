'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RedirectToWaitingList } from '../waiting-list/RedirectToWaitingList'

interface BannerSlide {
  id: string
  title: string
  subtitle: string
  ctaText: string
  imageUrl: string
}

interface AdvertisingBannerProps {
  variant?: 'default' | 'large'
  slides?: BannerSlide[]
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({ variant = 'default', slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Banner slides data (defaults)
  const defaultSlides: BannerSlide[] = [
    {
      id: 'banner-1',
      title: 'Premium Agricultural Product',
      subtitle: 'Connect with verified Sopplier',
      ctaText: 'Join Waitlist',
      imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755106969/f5134be67e74890149720c5ba97af9ad0676faaa_gqsff2.png'
    },
    {
      id: 'banner-2',
      title: '100% Buyer Protection from Day 1',
      subtitle: 'Your orders are safe with us. Secure payments, trusted suppliers.',
      ctaText: 'See how it works',
      imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755106843/23cd7fb61bb7f18f4596de8fd966615a6ba23fe7_n6vvzz.png'
    },
    {
      id: 'banner-3',
      title: 'African textile',
      subtitle: 'Showcase your products to a growing network of verified buyers.',
      ctaText: 'Join Waitlist',
      imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg'
    },
    {
      id: 'banner-4',
      title: 'From Farm to Fashion',
      subtitle: 'Showcase your products to a growing network of verified buyers.',
      ctaText: 'Join Waitlist',
      imageUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755105520/7bbfcf02cb3c7cd1090dd038ae464d4ef01e196a_vs3sp5.png'
    }
  ]

  const bannerSlides: BannerSlide[] = slides && slides.length ? slides : defaultSlides

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }, [bannerSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }, [bannerSlides.length])

  // Reset to first slide if slides length changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [bannerSlides.length])

  // Autoplay: only for non-large variant and when there are at least 2 slides
  useEffect(() => {
    if (variant === 'large') return
    if (bannerSlides.length <= 1) return
    const intervalId = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(intervalId)
  }, [nextSlide, bannerSlides.length, variant])

  return (
    <div className={`relative overflow-hidden group rounded-none ${variant === 'large' ? 'h-[123px] sm:h-[280px] lg:h-[315px]' : 'h-[155px] sm:h-[220px] lg:h-[315px]'}`}>
      <div className="flex transition-transform duration-500 ease-in-out h-full w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {bannerSlides.map((slide) => (
          <div key={slide.id} className="w-full flex-none h-full relative flex items-end" style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            <div className={`w-full z-20 absolute bottom-0 left-0 pb-3 pl-2 pr-2 sm:pb-5 sm:pl-5 sm:pr-5 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8`}>
              <div className="flex items-end h-full">
                <div className="text-white max-w-full sm:max-w-[60%]">
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-bold leading-tight line-clamp-2 sm:line-clamp-none mb-0.5 sm:mb-3">{slide.title}</h3>
                  <p className={`${variant === 'large' ? 'block text-[10px] sm:text-sm mb-0.5 sm:mb-2 line-clamp-2' : 'hidden sm:block text-sm lg:text-base mb-1 sm:mb-4'} text-white/90 leading-relaxed font-bold`}>{slide.subtitle}</p>
                  <div className="pt-0 sm:pt-2 md:pt-3">
                    <RedirectToWaitingList>
                      <Button className="bg-black/50 hover:bg-black/70 text-white border border-white px-2 sm:px-3 md:px-4 lg:px-6 text-[10px] sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-5 sm:h-8 md:h-10 rounded-[20px] flex items-center justify-center leading-none min-w-[85px] sm:min-w-[140px] md:min-w-[160px]">
                        <span className="whitespace-nowrap">Explore Category</span>
                      </Button>
                    </RedirectToWaitingList>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Always Visible */}
      <button 
        onClick={prevSlide}
        className="absolute left-0.5 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0.5 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
    </div>
  )
}

export default AdvertisingBanner