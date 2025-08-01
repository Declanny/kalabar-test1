'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react'

interface PromoBanner {
  id: string
  title: string
  subtitle?: string
  description: string
  backgroundColor: string
  textColor: string
  buttonText: string
  buttonColor: string
  icon: React.ReactNode
  products: string[]
  pattern: string
  accent: string
}

const promoBanners: PromoBanner[] = [
  {
    id: '1',
    title: 'Global',
    subtitle: 'Manufacturers',
    description: 'Connect with verified suppliers',
    backgroundColor: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500',
    textColor: 'text-white',
    buttonText: 'View more',
    buttonColor: 'bg-white text-indigo-600 hover:bg-gray-50',
    icon: <Globe className="w-12 h-12" />,
    products: ['🏭', '🔧', '📦', '🚚', '⚡'],
    pattern: 'dots',
    accent: 'from-white/20 to-transparent'
  },
  {
    id: '2', 
    title: 'Premium',
    subtitle: 'Electronics',
    description: 'Latest tech from verified suppliers',
    backgroundColor: 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700',
    textColor: 'text-white',
    buttonText: 'Explore now',
    buttonColor: 'bg-white text-blue-600 hover:bg-gray-50',
    icon: <Zap className="w-12 h-12" />,
    products: ['💻', '📱', '🎧', '⌚', '📷'],
    pattern: 'waves',
    accent: 'from-cyan-300/30 to-transparent'
  },
  {
    id: '3',
    title: 'Quality',
    subtitle: 'Textiles',
    description: 'Premium fabrics & garments',
    backgroundColor: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600',
    textColor: 'text-white',
    buttonText: 'Shop now',
    buttonColor: 'bg-white text-emerald-600 hover:bg-gray-50',
    icon: <Sparkles className="w-12 h-12" />,
    products: ['👕', '🧵', '🧥', '👗', '🧦'],
    pattern: 'grid',
    accent: 'from-emerald-300/25 to-transparent'
  },
  {
    id: '4',
    title: 'Industrial',
    subtitle: 'Equipment',
    description: 'Heavy machinery for business',
    backgroundColor: 'bg-gradient-to-br from-orange-500 via-red-600 to-pink-600',
    textColor: 'text-white', 
    buttonText: 'Get quote',
    buttonColor: 'bg-white text-orange-600 hover:bg-gray-50',
    icon: <Shield className="w-12 h-12" />,
    products: ['🔧', '⚙️', '🔩', '⚡', '🏭'],
    pattern: 'hexagon',
    accent: 'from-orange-300/30 to-transparent'
  }
]

export function PromoBannerCarousel() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % promoBanners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + promoBanners.length) % promoBanners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % promoBanners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToSlide = (index: number) => {
    setCurrentBanner(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const PatternOverlay = ({ pattern, accent }: { pattern: string, accent: string }) => {
    switch (pattern) {
      case 'dots':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
        )
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
              <path d="M0,100 Q100,50 200,100 T400,100 V200 H0 Z" fill="white" fillOpacity="0.1"/>
              <path d="M0,120 Q100,70 200,120 T400,120 V200 H0 Z" fill="white" fillOpacity="0.05"/>
            </svg>
          </div>
        )
      case 'grid':
        return (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        )
      case 'hexagon':
        return (
          <div className="absolute inset-0 opacity-15">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="hexagon" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                  <polygon points="20,5 35,15 35,25 20,35 5,25 5,15" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagon)"/>
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl group">
      {promoBanners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 w-full h-full ${banner.backgroundColor} transition-all duration-1000 ease-out transform ${
            index === currentBanner 
              ? 'translate-x-0 opacity-100 scale-100' 
              : index < currentBanner 
                ? '-translate-x-full opacity-0 scale-95' 
                : 'translate-x-full opacity-0 scale-95'
          }`}
        >
          {/* Background Pattern */}
          <PatternOverlay pattern={banner.pattern} accent={banner.accent} />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.accent}`} />

          {/* Content Layout */}
          <div className="absolute inset-0 flex items-center justify-between p-6 md:p-8">
            
            {/* Left Content */}
            <div className={`flex-1 max-w-md transition-all duration-1000 ${
              index === currentBanner ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              
              {/* Icon with Animation */}
              <div className={`mb-3 transform transition-all duration-700 ${
                index === currentBanner ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
              }`}
              style={{ transitionDelay: index === currentBanner ? '300ms' : '0ms' }}>
                <div className="inline-flex p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="w-8 h-8">{banner.icon}</div>
                </div>
              </div>

              {/* Typography Hierarchy */}
              <div className="space-y-1 mb-3">
                <h1 className={`text-2xl md:text-3xl font-black tracking-tight ${banner.textColor} transform transition-all duration-900 ${
                  index === currentBanner ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: index === currentBanner ? '400ms' : '0ms',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                  {banner.title}
                </h1>
                
                <h2 className={`text-lg md:text-xl font-bold ${banner.textColor} opacity-90 transform transition-all duration-900 ${
                  index === currentBanner ? 'translate-y-0 opacity-90' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: index === currentBanner ? '500ms' : '0ms',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                }}>
                  {banner.subtitle}
                </h2>
              </div>

              {/* Description */}
              <p className={`text-sm md:text-base ${banner.textColor} opacity-90 mb-4 font-medium leading-relaxed transform transition-all duration-900 ${
                index === currentBanner ? 'translate-y-0 opacity-90' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: index === currentBanner ? '600ms' : '0ms',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                {banner.description}
              </p>

              {/* CTA Button */}
              <button className={`group/btn inline-flex items-center gap-2 ${banner.buttonColor} px-6 py-3 rounded-xl font-bold text-sm transition-all duration-700 shadow-xl transform hover:scale-105 hover:shadow-2xl ${
                index === currentBanner ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: index === currentBanner ? '700ms' : '0ms' }}>
                {banner.buttonText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Right Visual Section */}
            <div className={`flex-1 flex items-center justify-center relative transition-all duration-1000 ${
              index === currentBanner ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-90'
            }`}>
              
              {/* Floating Product Grid */}
              <div className="relative w-60 h-60">
                {/* Central Glow Effect */}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75" />
                
                {/* Product Icons in Orbit */}
                {banner.products.map((product, productIndex) => {
                  const angle = (productIndex * 72) - 90 // 360/5 = 72 degrees apart
                  const radius = 90
                  const x = radius * Math.cos(angle * Math.PI / 180)
                  const y = radius * Math.sin(angle * Math.PI / 180)
                  
                  return (
                    <div 
                      key={productIndex}
                      className={`absolute w-12 h-12 flex items-center justify-center text-2xl transition-all duration-1000 hover:scale-125 ${
                        index === currentBanner 
                          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
                          : 'translate-x-8 translate-y-8 opacity-0 scale-75'
                      }`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        transitionDelay: index === currentBanner ? `${800 + productIndex * 100}ms` : '0ms'
                      }}
                    >
                      <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        {product}
                      </div>
                    </div>
                  )
                })}
                
                {/* Center Logo/Brand Element */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  index === currentBanner ? 'scale-100 rotate-0' : 'scale-50 rotate-45'
                }`}
                style={{ transitionDelay: index === currentBanner ? '1200ms' : '0ms' }}>
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40 shadow-xl">
                    <div className="w-6 h-6 bg-white rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:bg-white/30 border border-white/30"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:bg-white/30 border border-white/30"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Enhanced Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {promoBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentBanner 
                ? 'w-12 h-4' 
                : 'w-4 h-4 hover:w-6'
            }`}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === currentBanner 
                ? 'bg-white shadow-lg scale-100' 
                : 'bg-white/50 hover:bg-white/75 scale-90 hover:scale-100'
            }`} />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentBanner + 1) / promoBanners.length) * 100}%`
          }}
        />
      </div>
    </div>
  )
}