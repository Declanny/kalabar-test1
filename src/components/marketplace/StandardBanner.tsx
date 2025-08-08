'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RedirectToWaitingList } from '../waiting-list/RedirectToWaitingList'

interface StandardBannerProps {
  title: string
  subtitle?: string
  ctaText: string
  imageUrl: string
  variant?: 'default' | 'large'
}

const StandardBanner: React.FC<StandardBannerProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  imageUrl,
  variant = 'default' 
}) => {
  return (
        <div 
      className={`relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-3xl group ${variant === 'large' ? 'h-32 sm:h-80' : 'h-40 sm:h-64 lg:h-80'}`}
      style={{ 
        background: `linear-gradient(135deg, rgba(146, 207, 148, 0.9) 0%, rgba(110, 189, 112, 0.9) 50%, rgba(74, 159, 76, 0.9) 100%), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30 z-10 transition-all duration-700 group-hover:from-black/5 group-hover:to-black/20"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20 z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="flex h-full relative z-20">
        {/* Content - Now full width */}
        <div className="w-full flex items-center p-4 sm:p-6 lg:p-8">
          <div className="text-white space-y-2 sm:space-y-4 max-w-md">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight transform transition-all duration-500 group-hover:translate-x-1 text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed transform transition-all duration-500 delay-75 group-hover:translate-x-1">
                {subtitle}
              </p>
            )}
            <RedirectToWaitingList>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-3 sm:px-6 lg:px-8 py-1 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl backdrop-blur-sm group-hover:border-white/90 h-8 sm:h-11 lg:h-12"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span className="transition-all duration-300 group-hover:translate-x-1">
                  {ctaText}
                </span>
                <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1" />
              </Button>
            </RedirectToWaitingList>
          </div>
        </div>
      </div>

      {/* Floating elements for extra visual interest */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
    </div>
  )
}

export default StandardBanner