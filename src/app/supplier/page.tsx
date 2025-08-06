'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/Footer'
import { 
  Star, 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap, 
  Award,
  ArrowRight,
  CheckCircle,
  Calendar,
  Eye,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AdvertisingBanner from '@/components/marketplace/AdvertisingBanner'

// Hero Banner Component
const SupplierHeroBanner = () => (
  <div className="pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Content */}
        <div>
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}></div>
            <span className="text-sm font-medium text-gray-700">Africa&apos;s Leading B2B Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Scale Your African Business.
            <span className="block" style={{color: 'rgba(245, 124, 0, 1)'}}>
              Reach Buyers Worldwide.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join thousands of verified suppliers already expanding their reach through Kalabah&apos;s secure B2B marketplace. Sell to buyers across 54 countries, access secure payments, and simplify your exports.
          </p>
          
          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4 mb-8">
            <p className="text-orange-800 font-semibold text-center">
              Start today and get listed in front of verified buyers before launch. Early suppliers get priority access.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/waiting-list?action=true">
              <Button 
                className="text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-lg"
                style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
              >
                Register as Supplier
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/waiting-list?action=true">
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-50 px-8 py-4 rounded-lg font-medium text-lg"
                style={{
                  borderColor: 'rgba(46, 125, 50, 1)',
                  color: 'rgba(46, 125, 50, 1)'
                }}
              >
                Browse Buyer Interests
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Trust Signals & Platform Preview */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
            {/* Platform Preview */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Platform Preview
              </h3>
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kalabah Marketplace</div>
                    <div className="text-sm text-gray-600">Coming Soon - 2025</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Professional B2B platform connecting African suppliers with global buyers. Secure payments, verified partners, and simplified trade.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Launch: Q1 2025</span>
                  <span>Early Access</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                <span className="text-sm font-medium text-gray-700">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                <span className="text-sm font-medium text-gray-700">Verified Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                <span className="text-sm font-medium text-gray-700">54 Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                <span className="text-sm font-medium text-gray-700">Growth Tools</span>
              </div>
            </div>

            {/* Early Access CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Be Among the First</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Join our waitlist for early access and exclusive benefits
                </p>
                <Link href="/waiting-list?action=true">
                  <Button 
                    className="text-white px-4 py-2 rounded-lg font-medium text-sm"
                    style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Features Grid Section
const FeaturesGrid = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Verified Buyer Access",
      description: "Connect with high-volume, serious buyers across Africa and beyond."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Secure Payments",
      description: "Escrow protection and automated invoice tracking."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Simplified Exports",
      description: "Assistance with documentation, customs, and delivery."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Professional Tools",
      description: "Insights, messaging, and pricing tools."
    }
  ]

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive B2B platform designed specifically for African suppliers
          </p>
        </div>
        
        {/* B2B Banner */}
        <div className="mb-12">
          <AdvertisingBanner />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/waiting-list?action=true">
            <Button 
              className="text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-lg"
              style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
            >
              Register as Supplier
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Stats Section with Banner - Banner Only
const StatsSection = () => {
  return (
    <div className="py-8">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* B2B Banner */}
        <AdvertisingBanner />
      </div>
    </div>
  )
}



// Video Section (Full-width, after supplier profiles)
const VideoSection = () => (
  <div className="py-8 sm:py-12 lg:py-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See how African suppliers are already winning with Kalabah
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Watch real success stories from suppliers who have transformed their businesses through our platform and discover how you can achieve similar growth.
        </p>
      </div>
      
      <div className="relative">
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg"
            alt="Supplier Success Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <button className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
              <div className="w-0 h-0 border-l-[20px] sm:border-l-[24px] lg:border-l-[28px] border-l-gray-900 border-t-[12px] sm:border-t-[14px] lg:border-t-[16px] border-t-transparent border-b-[12px] sm:border-b-[14px] lg:border-b-[16px] border-b-transparent ml-1"></div>
            </button>
          </div>
          
          {/* Video Overlay Info - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block absolute bottom-8 left-8 right-8 text-white">
            <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">
                How West Africa Exports Scaled to $2M Revenue
              </h3>
              <p className="text-gray-200">
                Watch how our top-performing supplier expanded from local sales to serving buyers across 15 African countries.
              </p>
            </div>
          </div>
        </div>
        
        {/* Video Info - Shown below video on mobile */}
        <div className="sm:hidden mt-4">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              How West Africa Exports Scaled to $2M Revenue
            </h3>
            <p className="text-gray-600 text-sm">
              Watch how our top-performing supplier expanded from local sales to serving buyers across 15 African countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Top Suppliers Showcase
const TopSuppliersShowcase = () => {
  const featuredSuppliers = [
    {
      id: 1,
      name: "West Africa Exports Ltd",
      country: "Ghana",
      category: "Agriculture & Food Processing",
      description: "Leading supplier of premium African agricultural products with ISO certification and direct farm partnerships across 8 countries.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg",
      products: [
        { name: "Premium Cocoa Beans", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg" },
        { name: "Organic Shea Butter", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif" },
        { name: "Cola Nuts", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg" }
      ],
      stats: {
        revenue: "$2.1M",
        orders: "3,200+", 
        countries: "15",
        years: "8"
      }
    },
    {
      id: 2,
      name: "Botswana Diamond Corporation",
      country: "Botswana",
      category: "Mining & Precious Stones",
      description: "Africa&apos;s premier diamond supplier with direct mining operations and international certification. Serving luxury brands and jewelry manufacturers across 25 countries with ethically sourced diamonds.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
      products: [
        { name: "Raw Diamonds", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg" },
        { name: "Polished Stones", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif" },
        { name: "Certified Gems", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg" }
      ],
      stats: {
        revenue: "$4.8M",
        orders: "1,800+", 
        countries: "25",
        years: "12"
      }
    },
    {
      id: 3,
      name: "Ethiopian Coffee Estates",
      country: "Ethiopia",
      category: "Premium Coffee & Beverages",
      description: "Home of the finest Arabica coffee beans with organic farms spanning 3 regions. Supplying premium coffee roasters and distributors worldwide with single-origin and specialty blends.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg",
      products: [
        { name: "Single-Origin Arabica", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg" },
        { name: "Organic Coffee Beans", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg" },
        { name: "Specialty Blends", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif" }
      ],
      stats: {
        revenue: "$3.2M",
        orders: "4,500+", 
        countries: "22",
        years: "15"
      }
    },
    {
      id: 4,
      name: "South African Wine Group",
      country: "South Africa",
      category: "Premium Wines & Spirits",
      description: "Award-winning wine producer with vineyards in Cape Town and Stellenbosch regions. Exporting premium wines to international markets with sustainable farming practices and organic certification.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif",
      products: [
        { name: "Premium Red Wines", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif" },
        { name: "White Wine Collection", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg" },
        { name: "Sparkling Wines", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif" }
      ],
      stats: {
        revenue: "$2.9M",
        orders: "2,100+", 
        countries: "18",
        years: "20"
      }
    },
    {
      id: 5,
      name: "Moroccan Argan Collective",
      country: "Morocco",
      category: "Beauty & Cosmetic Oils",
      description: "Authentic argan oil producer working directly with women's cooperatives. Supplying pure, organic argan oil to international beauty brands and cosmetic manufacturers with fair-trade certification.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif",
      products: [
        { name: "Pure Argan Oil", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif" },
        { name: "Cosmetic Grade Oil", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg" },
        { name: "Beauty Products", image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif" }
      ],
      stats: {
        revenue: "$1.8M",
        orders: "2,800+", 
        countries: "12",
        years: "10"
      }
    }
  ]

  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const featuredSupplier = featuredSuppliers[currentFeaturedIndex]



  const otherSuppliers = [
    {
      id: 1,
      name: "Aba Textile Mills",
      country: "Nigeria",
      category: "Textiles",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif",
      mainProduct: "Traditional Fabrics",
      revenue: "$890K"
    },
    {
      id: 2,
      name: "Ethiopian Coffee Co",
      country: "Ethiopia", 
      category: "Food & Beverage",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg",
      mainProduct: "Arabica Coffee",
      revenue: "$1.2M"
    },
    {
      id: 3,
      name: "Moroccan Argan Co",
      country: "Morocco",
      category: "Beauty Products",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif",
      mainProduct: "Pure Argan Oil",
      revenue: "$650K"
    },
    {
      id: 4,
      name: "Senegal Seafood Ltd",
      country: "Senegal",
      category: "Marine Products", 
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
      mainProduct: "Frozen Seafood",
      revenue: "$740K"
    },
    {
      id: 5,
      name: "Kenya Tea Estates",
      country: "Kenya",
      category: "Agriculture",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg",
      mainProduct: "Premium Tea Leaves",
      revenue: "$1.5M"
    },
    {
      id: 6,
      name: "South African Wines",
      country: "South Africa",
      category: "Beverages",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg",
      mainProduct: "Export Wines",
      revenue: "$2.3M"
    },
    {
      id: 7,
      name: "Cairo Spice Trading",
      country: "Egypt",
      category: "Food & Spices",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif",
      mainProduct: "Premium Spices",
      revenue: "$580K"
    },
    {
      id: 8,
      name: "Botswana Diamond Co",
      country: "Botswana",
      category: "Mining & Minerals",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
      mainProduct: "Raw Diamonds",
      revenue: "$4.2M"
    },
    {
      id: 9,
      name: "Tanzania Cotton Mills",
      country: "Tanzania",
      category: "Textiles",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif",
      mainProduct: "Organic Cotton",
      revenue: "$1.1M"
    },
    {
      id: 10,
      name: "Ivory Coast Rubber",
      country: "Ivory Coast",
      category: "Raw Materials",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg",
      mainProduct: "Natural Rubber",
      revenue: "$1.8M"
    },
    {
      id: 11,
      name: "Ugandan Vanilla Co",
      country: "Uganda",
      category: "Agriculture",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif",
      mainProduct: "Vanilla Beans",
      revenue: "$920K"
    },
    {
      id: 12,
      name: "Zambian Copper Ltd",
      country: "Zambia",
      category: "Mining & Metals",
      productImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
      mainProduct: "Copper Cathodes",
      revenue: "$3.1M"
    }
  ]
  
  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supplier Profiles
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed profiles of our verified suppliers and their premium products across African markets
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Side - Featured Suppliers List */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Suppliers</h3>
            <Card className="h-[700px] p-4">
              <div className="h-full overflow-y-auto pr-2 space-y-3" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent'}}>
                {featuredSuppliers.map((supplier, index) => (
                  <div 
                    key={supplier.id} 
                    className={`cursor-pointer transition-all duration-300 p-3 rounded-lg border ${
                      index === currentFeaturedIndex 
                        ? 'border-2 shadow-md bg-green-50' 
                        : 'border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    style={{
                      borderColor: index === currentFeaturedIndex ? 'rgba(46, 125, 50, 1)' : undefined
                    }}
                    onClick={() => setCurrentFeaturedIndex(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={supplier.image} 
                          alt={supplier.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm mb-1 truncate">{supplier.name}</h4>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                          <Globe className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{supplier.country}</span>
                        </div>
                        <div className="text-xs text-gray-600 mb-2 truncate">{supplier.category}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold" style={{color: 'rgba(245, 124, 0, 1)'}}>{supplier.stats.revenue}</span>
                          <span className="text-xs text-gray-500">{supplier.stats.years}y</span>
                        </div>
                      </div>
                    </div>
                    {index === currentFeaturedIndex && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{supplier.stats.orders} orders</span>
                          <span className="text-gray-500">{supplier.stats.countries} countries</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Side - Big Featured Card Display */}
          <div className="flex-1">
            <Card className="overflow-hidden shadow-xl h-[750px] flex flex-col">
              <div className="relative h-96 overflow-hidden flex-shrink-0">
                <img 
                  src={featuredSupplier.image} 
                  alt={featuredSupplier.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
                    <span className="text-sm font-medium">Featured Supplier</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{featuredSupplier.name}</h3>
                  <div className="flex items-center space-x-2 text-sm opacity-90">
                    <Globe className="w-4 h-4" />
                    <span>{featuredSupplier.country}</span>
                    <span>•</span>
                    <span>{featuredSupplier.category}</span>
                  </div>
                </div>
                
                {/* Action Buttons - Top Right */}
                <div className="absolute top-6 right-6 flex gap-3">
                  <Button 
                    className="text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm"
                    style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
                  >
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-medium text-sm backdrop-blur-sm"
                  >
                    Contact
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">{featuredSupplier.description}</p>
                
                {/* Product Showcase */}
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Products</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {featuredSupplier.products.map((product, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-full h-24 rounded-lg overflow-hidden mb-3 shadow-sm">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 pt-3 border-t border-gray-200 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1" style={{color: 'rgba(245, 124, 0, 1)'}}>{featuredSupplier.stats.revenue}</div>
                    <div className="text-sm text-gray-500">Annual Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{featuredSupplier.stats.orders}</div>
                    <div className="text-sm text-gray-500">Total Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1" style={{color: 'rgba(46, 125, 50, 1)'}}>{featuredSupplier.stats.countries}</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
      <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{featuredSupplier.stats.years}</div>
                    <div className="text-sm text-gray-500">Years</div>
                  </div>
                </div>


              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Blog Section
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Increase Your B2B Sales by 300% in 6 Months",
      excerpt: "Learn the proven strategies that our top suppliers use to dramatically increase their sales volume and expand into new markets across Africa.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
      author: "Sarah Kwame",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      views: "2.3k",
      category: "Sales Strategy"
    },
    {
      id: 2,
      title: "Export Documentation Made Easy: A Complete Guide for African Suppliers",
      excerpt: "Navigate the complex world of export documentation with our comprehensive guide. Everything you need to know about shipping across African borders.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg",
      author: "Michael Adebayo",
      date: "Jan 12, 2024", 
      readTime: "8 min read",
      views: "1.8k",
      category: "Export Guide"
    },
    {
      id: 3,
      title: "Building Trust with International Buyers: Best Practices",
      excerpt: "Discover how to build lasting relationships with buyers from different countries and cultures. Learn from suppliers who've mastered international trade.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
      author: "Fatima Al-Rashid",
      date: "Jan 10, 2024",
      readTime: "6 min read", 
      views: "3.1k",
      category: "Relationship Building"
    }
  ]

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supplier Success Resources
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and strategies to help you succeed as a supplier on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
                          <Link href={`/blog/${post.id}`} key={post.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold" style={{color: 'rgba(245, 124, 0, 1)'}}>{post.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                      Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
              </Link>
          ))}
        </div>

        <div className="text-center mt-12">
                     <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-green-600 hover:text-white px-8 py-3 rounded-xl font-medium"
              style={{borderColor: 'rgba(46, 125, 50, 1)', color: 'rgba(46, 125, 50, 1)'}}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(46, 125, 50, 1)';
                (e.target as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = 'rgba(46, 125, 50, 1)';
              }}
            >
              View All Articles
            </Button>
          </Link>
         </div>
      </div>
    </div>
  )
}

// Call to Action Section
const CtaSection = () => (
  <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-green-50 to-emerald-100 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
    </div>
    
    <div className="w-full px-4 sm:px-6 lg:px-10 text-center relative z-10">
      <div className="max-w-4xl mx-auto">
                 {/* Badge */}
         <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
           <div className="w-2 h-2 rounded-full bg-green-600"></div>
           <span className="text-green-800 font-medium text-sm">Join Africa&apos;s Premier B2B Platform</span>
         </div>
         
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
           Ready to Start Your
           <span className="block" style={{color: 'rgba(245, 124, 0, 1)'}}>
             Success Story?
           </span>
      </h2>
         
         <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
        Join thousands of successful suppliers who are already growing their business with Kalabah. 
        Your journey to African market expansion starts here.
      </p>
        
                 {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <Link href="/waiting-list?action=true">
          <Button 
               className="text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
          >
            Start Selling Today
               <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </Link>
           
                 <Button 
           variant="outline" 
             className="px-10 py-5 rounded-2xl font-bold text-lg bg-white hover:bg-gray-50 transition-all duration-300 border-2"
           style={{
             borderColor: 'rgba(46, 125, 50, 1)',
             color: 'rgba(46, 125, 50, 1)'
           }}
         >
          Schedule a Demo
             <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </div>
         
         {/* Benefits */}
         <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="flex items-center justify-center space-x-3">
               <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                 <span className="text-green-600 font-bold text-sm">✓</span>
               </div>
               <span className="text-gray-800 font-semibold">No Setup Fees</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
               <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                 <span className="text-green-600 font-bold text-sm">✓</span>
               </div>
               <span className="text-gray-800 font-semibold">Free for 3 Months</span>
             </div>
             <div className="flex items-center justify-center space-x-3">
               <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                 <span className="text-green-600 font-bold text-sm">✓</span>
               </div>
               <span className="text-gray-800 font-semibold">24/7 Support</span>
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
)

export default function SuppliersLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gray-50">
        <SupplierHeroBanner />
        <FeaturesGrid />
        <VideoSection />
        <TopSuppliersShowcase />
        <BlogSection />
        <CtaSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 