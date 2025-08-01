'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
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
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Content */}
        <div>
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}></div>
            <span className="text-sm font-medium text-gray-700">Africa's Leading B2B Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Scale Your Business
            <span className="block" style={{color: 'rgba(245, 124, 0, 1)'}}>
              Across 54 Countries
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Connect with verified buyers across Africa through our professional B2B marketplace. 
            Join 50,000+ established suppliers who have expanded their reach and increased revenue by up to 300%.
          </p>
          
          {/* Key Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Access to 2M+ verified buyers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Secure payment & escrow protection</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Professional trade documentation support</span>
            </div>
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
                Register as Buyer
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Video Section */}
        <div className="relative">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg"
                alt="Supplier Success Stories"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="w-0 h-0 border-l-[20px] border-l-gray-900 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How West Africa Exports Scaled to $2M Revenue
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Watch how our top-performing supplier expanded from local sales to serving buyers across 15 African countries.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Duration: 4:32 min</span>
                <span>Case Study</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Stats Section with Banner - Very Small Stats
const StatsSection = () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Very Small Stats Content */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-center text-gray-700 mb-3">
            Join Africa's Fastest Growing B2B Marketplace
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: 'rgba(46, 125, 50, 1)'}}>50K+</div>
              <div className="text-gray-600 text-xs">Active Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: 'rgba(245, 124, 0, 1)'}}>2M+</div>
              <div className="text-gray-600 text-xs">Monthly Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: 'rgba(46, 125, 50, 1)'}}>54</div>
              <div className="text-gray-600 text-xs">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold mb-1" style={{color: 'rgba(245, 124, 0, 1)'}}>$2B+</div>
              <div className="text-gray-600 text-xs">Trade Volume</div>
            </div>
          </div>
        </div>

        {/* B2B Banner */}
        <AdvertisingBanner />
      </div>
    </div>
  )
}



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
      description: "Africa's premier diamond supplier with direct mining operations and international certification. Serving luxury brands and jewelry manufacturers across 25 countries with ethically sourced diamonds.",
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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supplier Profiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supplier Success Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">By {post.author}</span>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
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
  <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: 'rgba(46, 125, 50, 1)'}}>
        Ready to Start Your Success Story?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join thousands of successful suppliers who are already growing their business with Kalabah. 
        Your journey to African market expansion starts here.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/waiting-list?action=true">
          <Button 
            className="text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
            style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
          >
            Start Selling Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
                 <Button 
           variant="outline" 
           className="px-8 py-4 rounded-xl font-medium text-lg bg-white hover:bg-gray-50 transition-colors"
           style={{
             borderColor: 'rgba(46, 125, 50, 1)',
             color: 'rgba(46, 125, 50, 1)'
           }}
         >
          Schedule a Demo
        </Button>
      </div>
      <div className="mt-8 text-gray-600 text-sm">
        ✓ No setup fees ✓ Free for first 3 months ✓ 24/7 support included
      </div>
    </div>
  </div>
)

export default function SupplierLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gray-50">
        <SupplierHeroBanner />
        <StatsSection />
        <TopSuppliersShowcase />
        <BlogSection />
        <CtaSection />
        
        {/* Footer */}
        <footer 
          className="py-8 text-white relative overflow-hidden"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dqbbm0guw/image/upload/v1753426506/b659b8647d2c02f56acdd7270043e4d7fc37edd6_ovckru.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content above overlay */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-3 text-white">Company</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <a href="/about" className="block hover:text-white transition-colors">About us</a>
                  <a href="/careers" className="block hover:text-white transition-colors">Careers</a>
                  <a href="/blog" className="block hover:text-white transition-colors">Our Blog</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-white">Customer Service</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <a href="/returns" className="block hover:text-white transition-colors">Return and refund policy</a>
                  <a href="/shipping" className="block hover:text-white transition-colors">Shipping info</a>
                  <a href="/reports" className="block hover:text-white transition-colors">Report suspicious activity</a>
                  <a href="/why-kalabah" className="block hover:text-white transition-colors">Why Kalabah</a>
                  <a href="/faq" className="block hover:text-white transition-colors">FAQ</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-white">Help</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <a href="/contact" className="block hover:text-white transition-colors">Contact us</a>
                  <a href="/support" className="block hover:text-white transition-colors">Support center</a>
                  <a href="/safety" className="block hover:text-white transition-colors">Safety center</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-white">Work with Kalabah</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <a href="/supplier" className="block hover:text-white transition-colors">Become a Supplier</a>
                  <a href="/bulk" className="block hover:text-white transition-colors">Buy in Bulk</a>
                  <a href="/partner" className="block hover:text-white transition-colors">Partner with Kalabah</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-white">Kalabah International</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <a href="/gh" className="block hover:text-white transition-colors">Ghana</a>
                  <a href="/eg" className="block hover:text-white transition-colors">Egypt</a>
                  <a href="/ke" className="block hover:text-white transition-colors">Kenya</a>
                  <a href="/ug" className="block hover:text-white transition-colors">Uganda</a>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-4">Sign up to our Newsletter to get VIP updates</h3>
              <div className="flex justify-center max-w-[280px] sm:max-w-md mx-auto">
                <div className="flex w-full bg-white rounded-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 px-4 py-2 text-gray-800 outline-none"
                  />
                  <button 
                    className="px-6 py-2 text-white font-medium"
                    style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            
            {/* Artistic Logo */}
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-600 tracking-wider">
                <span className="inline-block" style={{
                  background: 'linear-gradient(45deg, #8B4513, #D2691E, #CD853F, #DEB887)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  kalabah
                </span>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-sm text-gray-400">Follow us on:</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <span className="text-xs">f</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <span className="text-xs">in</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <span className="text-xs">ig</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-gray-700 rounded hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <span className="text-xs">x</span>
                  </a>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Kalabah.com © 2025 All rights reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 