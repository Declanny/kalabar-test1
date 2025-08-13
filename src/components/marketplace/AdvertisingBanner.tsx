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
            {/* Gradient overlay */}
            <div 
              className="absolute inset-y-0 left-0 z-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
              style={{
                background: 'linear-gradient(90deg, #4E4E4E 0%, rgba(78, 78, 78, 0.9) 20%, rgba(78, 78, 78, 0.7) 50%, rgba(78, 78, 78, 0.3) 80%, transparent 100%)'
              }}
            ></div>
            
            <div className={`w-full z-20 absolute bottom-0 left-0 pb-5 pr-5 ${variant === 'large' ? 'pl-2' : 'pl-3'} sm:pl-5 md:pl-6 lg:pl-8`}>
              <div className="grid grid-cols-1 items-center">
                <div className="text-white px-1 sm:px-0">
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-3 line-clamp-2 sm:line-clamp-none">{slide.title}</h3>
                  <p className={`${variant === 'large' ? 'block text-[10px] sm:text-sm mb-1 sm:mb-2 line-clamp-2' : 'hidden sm:block text-sm lg:text-base mb-2 sm:mb-4'} text-white/90 leading-relaxed font-medium`}>{slide.subtitle}</p>
                  <RedirectToWaitingList>
                    <Button className="bg-white hover:bg-[#00C298] border-2 border-[#00C298] text-[#00C298] hover:text-white px-2 sm:px-3 md:px-6 lg:px-8 xl:px-10 text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg h-6 sm:h-8 md:h-10 lg:h-11 xl:h-12 rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center leading-none min-w-[85px] sm:min-w-[140px] md:min-w-[160px]">
                      <span className="whitespace-nowrap">{slide.ctaText}</span>
                      <ArrowRight className="ml-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                    </Button>
                  </RedirectToWaitingList>
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