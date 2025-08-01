"use client"

import React, { useState, useEffect } from "react"
import { Shield, Globe, Users, Zap, TrendingUp, Star, CheckCircle, ArrowRight, DollarSign, Clock, Award } from "lucide-react"

interface AuthPromoSlideshowProps {
  className?: string
}

export function AuthPromoSlideshow({ className = "" }: AuthPromoSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const promoSlides = [
    {
      gradient: "from-green-500/95 to-emerald-600/95",
      badge: "🌍 Global Network",
      title: ["Connect with", "50+ African Markets"],
      description: "Access verified suppliers and buyers across Nigeria, Ghana, Kenya, South Africa, and 46+ other African countries.",
      stats: [
        { number: "2,500+", label: "Verified Suppliers" },
        { number: "50+", label: "Countries" }
      ],
      features: [
        "✓ Direct manufacturer access",
        "✓ Competitive wholesale prices",
        "✓ Quality assurance guaranteed"
      ],
      cta: "Start Trading Today"
    },
    {
      gradient: "from-blue-500/95 to-cyan-600/95",
      badge: "🔒 Secure Trading",
      title: ["Trade with", "Complete Security"],
      description: "Bank-level encryption, verified business documentation, and secure escrow payments protect every transaction.",
      stats: [
        { number: "99.9%", label: "Uptime" },
        { number: "$50M+", label: "Transactions Secured" }
      ],
      features: [
        "✓ SSL encrypted platform",
        "✓ Verified business profiles",
        "✓ Secure payment gateway"
      ],
      cta: "Join Secure Network"
    },
    {
      gradient: "from-purple-500/95 to-violet-600/95",
      badge: "📊 Smart Analytics",
      title: ["Grow with", "Data Insights"],
      description: "Advanced analytics, market trends, and business intelligence tools to scale your trade operations effectively.",
      stats: [
        { number: "40%", label: "Average Growth" },
        { number: "24/7", label: "Market Data" }
      ],
      features: [
        "✓ Real-time market insights",
        "✓ Competitor analysis",
        "✓ Demand forecasting"
      ],
      cta: "Unlock Insights"
    },
    {
      gradient: "from-orange-500/95 to-red-500/95",
      badge: "💰 Higher Profits",
      title: ["Maximize Your", "Trade Revenue"],
      description: "Direct supplier connections eliminate middlemen, while our smart matching increases your profit margins by up to 35%.",
      stats: [
        { number: "35%", label: "Higher Margins" },
        { number: "72hrs", label: "Avg. Response" }
      ],
      features: [
        "✓ No middleman fees",
        "✓ Bulk order discounts",
        "✓ Fast payment processing"
      ],
      cta: "Boost Profits"
    },
    {
      gradient: "from-emerald-500/95 to-teal-600/95",
      badge: "🏆 Market Leader",
      title: ["Africa's #1", "B2B Platform"],
      description: "Join thousands of successful businesses already trading on the continent's most trusted marketplace.",
      stats: [
        { number: "4.9/5", label: "User Rating" },
        { number: "95%", label: "Success Rate" }
      ],
      features: [
        "✓ Award-winning platform",
        "✓ Expert trade support",
        "✓ Success guarantee"
      ],
      cta: "Join Leaders"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(timer)
  }, [promoSlides.length])

  return (
    <div className={`relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${promoSlides[currentSlide].gradient} transition-all duration-1000`} />
      
      {/* Progress Indicators */}
      <div className="absolute top-8 right-8 flex flex-col space-y-3">
        {promoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative h-full flex flex-col justify-center px-8 lg:px-12">
        <div className={`transition-all duration-700 ${currentSlide >= 0 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            {promoSlides[currentSlide].badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {promoSlides[currentSlide].title[0]}<br />
            {promoSlides[currentSlide].title[1]}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
            {promoSlides[currentSlide].description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {promoSlides[currentSlide].stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white"
              >
                <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2 mb-8">
            {promoSlides[currentSlide].features.map((feature, index) => (
              <div key={index} className="flex items-center text-white/90 text-sm">
                <span className="mr-2">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white font-medium hover:bg-white/30 transition-all group">
            {promoSlides[currentSlide].cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Testimonial */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-white font-medium text-sm lg:text-base">
                  Trusted by 2,500+ African businesses
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-white/90 ml-2 text-sm">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 