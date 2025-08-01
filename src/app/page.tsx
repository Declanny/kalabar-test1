'use client'

import React from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { CategorySection } from "@/components/marketplace/CategorySection"
import { RecentSearches } from "@/components/marketplace/RecentSearches"
import { TopSuppliersCarousel } from "@/components/marketplace/TopSuppliersCarousel"
import { B2BProductGrid } from "@/components/marketplace/B2BProductGrid"
import { CategoryGrid } from "@/components/marketplace/CategoryGrid"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface B2BProduct {
  id: string
  name: string
  image: string
  price: string
  moq: string
  salesCount: string
  supplier: {
    name: string
    years: string
    country: string
    countryCode: string
  }
  deliveryEstimate: string
  marketplaceUrl: string
  hasZoom?: boolean
}

// Blog Section Component
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Successful B2B Sourcing in Africa",
      excerpt: "Discover the best practices for finding reliable suppliers and building lasting business relationships across African markets.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "4 min read",
      views: "3.2k",
      category: "B2B Sourcing"
    },
    {
      id: 2,
      title: "Understanding Quality Standards in African Markets",
      excerpt: "Learn about quality certifications, compliance requirements, and best practices for ensuring product quality in your supply chain.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg",
      author: "Michael Chen",
      date: "Jan 12, 2024", 
      readTime: "6 min read",
      views: "2.1k",
      category: "Quality Control"
    },
    {
      id: 3,
      title: "Navigating International Trade Finance",
      excerpt: "A comprehensive guide to trade finance options, payment methods, and risk management for international B2B transactions.",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
      author: "Emma Williams",
      date: "Jan 10, 2024",
      readTime: "8 min read", 
      views: "4.5k",
      category: "Trade Finance"
    }
  ]

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            B2B Insights & Resources
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Expert insights, market trends, and practical tips to help you succeed in African B2B commerce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white rounded-full px-2 sm:px-3 py-1">
                  <span className="text-xs font-bold" style={{color: 'rgba(245, 124, 0, 1)'}}>{post.category}</span>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 gap-2 sm:gap-0">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <span className="text-gray-400 self-start sm:self-center">{post.readTime}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">By {post.author}</span>
                  <Link href={`/blog/${post.id === 1 ? 'successful-b2b-sourcing-africa' : post.id === 2 ? 'quality-standards-african-markets' : 'international-trade-finance'}`}>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0 self-start sm:self-center">
                      Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-green-600 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base"
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

// B2B Advertising Banner Component
const AdvertisingBanner = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  
  const bannerSlides = [
    {
      id: 1,
      title: "New B2B Solutions",
      subtitle: "Discover the latest sourcing opportunities across Africa",
      ctaText: "Explore Now",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-800",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg"
    },
    {
      id: 2,
      title: "Premium Agricultural Products",
      subtitle: "Connect with verified suppliers for quality produce",
      ctaText: "Shop Products",
      bgColor: "bg-gradient-to-r from-green-600 to-green-800",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif"
    },
    {
      id: 3,
      title: "Herbal & Natural Products",
      subtitle: "Source authentic African herbs and natural extracts",
      ctaText: "View Catalog",
      bgColor: "bg-gradient-to-r from-orange-600 to-red-600",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-48 md:h-56">
        <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerSlides.map((slide) => (
            <div key={slide.id} className={`min-w-full h-full ${slide.bgColor} relative flex items-center`}>
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-8 text-white">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6 text-white/90">{slide.subtitle}</p>
                  <Button 
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
              
              {/* Product Showcase on Right */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="grid grid-cols-2 gap-4 opacity-80">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Featured Categories and Best Offers Section
const FeaturedCategoriesSection = ({ onCategorySelect }: { onCategorySelect?: (categoryId: string) => void }) => {
  const featuredCategories = [
    {
      id: 'agriculture-featured',
      name: 'Agricultural Products',
      image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
      productCount: 2340,
      bgColor: 'bg-green-50'
    },
    {
      id: 'textiles-featured',
      name: 'Traditional Textiles',
      image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
      productCount: 1850,
      bgColor: 'bg-purple-50'
    },
    {
      id: 'herbs-featured',
      name: 'Herbal Products',
      image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
      productCount: 1230,
      bgColor: 'bg-green-50'
    },
    {
      id: 'spices-featured',
      name: 'Premium Spices',
      image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
      productCount: 980,
      bgColor: 'bg-orange-50'
    },
    {
      id: 'crafts-featured',
      name: 'African Crafts',
      image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
      productCount: 650,
      bgColor: 'bg-amber-50'
    },
    {
      id: 'electronics-featured',
      name: 'Electronics',
      image: '💡',
      productCount: 3420,
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <div className="container mx-auto px-2 py-3 sm:py-6 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Featured Categories */}
        <div className="bg-white rounded-xl p-2 sm:p-4">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 mb-4">Featured Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {featuredCategories.slice(0, 6).map((category) => (
              <Card 
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-200 group overflow-hidden"
                onClick={() => onCategorySelect?.(category.id)}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-24 sm:h-28 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {category.image.startsWith('http') ? (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-105 transition-transform duration-300">
                        {category.image}
                      </div>
                    )}
                    
                    {/* Product Count Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-green-600 text-white px-1.5 py-0.5 rounded-full text-xs font-medium">
                        {category.productCount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Category Info */}
                  <div className="p-2 sm:p-3 text-center">
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600 text-xs sm:text-sm truncate">
                      {category.name}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Offers */}
        <div className="bg-white rounded-xl p-2 sm:p-4 h-full">
          <CategoryGrid title="Best Offers" onCategoryClick={() => window.location.href = '/waiting-list?action=true'} />
        </div>
      </div>
    </div>
  )
}

export default function MarketplaceLandingPage() {
  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category:', categoryId)
    // Implement category filtering logic
  }

  const handleSearchClick = (search: string) => {
    console.log('Search clicked:', search)
    // Implement search functionality
  }

  const handleContactSupplier = (product: B2BProduct) => {
    console.log('Contact supplier for:', product.name)
    // Implement contact supplier functionality
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content - NO HERO BANNER */}
      <div className="bg-gray-50">
        
        {/* Categories with Side Navigation (now contains banner) */}
        <CategorySection onCategorySelect={handleCategorySelect} />
        
        {/* Featured Categories (extracted from sidebar section) */}
        <FeaturedCategoriesSection onCategorySelect={handleCategorySelect} />
        
        {/* Recently Searched Section */}
        <RecentSearches onSearchClick={handleSearchClick} />
        
        {/* Top Categories (back to original position) */}
        <TopSuppliersCarousel />
        
        {/* Product Listings (Main Focus) */}
        <B2BProductGrid onContactSupplier={handleContactSupplier} />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Footer */}
        <footer 
          className="py-6 sm:py-8 text-white relative overflow-hidden"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Company</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <a href="/about" className="block hover:text-white transition-colors">About us</a>
                  <a href="/careers" className="block hover:text-white transition-colors">Careers</a>
                  <a href="/blog" className="block hover:text-white transition-colors">Our Blog</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Customer Service</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <a href="/returns" className="block hover:text-white transition-colors">Return policy</a>
                  <a href="/shipping" className="block hover:text-white transition-colors">Shipping info</a>
                  <a href="/reports" className="block hover:text-white transition-colors">Report activity</a>
                  <a href="/why-kalabah" className="block hover:text-white transition-colors">Why Kalabah</a>
                  <a href="/faq" className="block hover:text-white transition-colors">FAQ</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Help</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <a href="/contact" className="block hover:text-white transition-colors">Contact us</a>
                  <a href="/support" className="block hover:text-white transition-colors">Support center</a>
                  <a href="/safety" className="block hover:text-white transition-colors">Safety center</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Work with Kalabah</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <a href="/supplier" className="block hover:text-white transition-colors">Become a Supplier</a>
                  <a href="/bulk" className="block hover:text-white transition-colors">Buy in Bulk</a>
                  <a href="/partner" className="block hover:text-white transition-colors">Partner with Kalabah</a>
                </div>
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Kalabah International</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                  <a href="/gh" className="block hover:text-white transition-colors">Ghana</a>
                  <a href="/eg" className="block hover:text-white transition-colors">Egypt</a>
                  <a href="/ke" className="block hover:text-white transition-colors">Kenya</a>
                  <a href="/ug" className="block hover:text-white transition-colors">Uganda</a>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Sign up to our Newsletter to get VIP updates</h3>
              <div className="flex justify-center max-w-md mx-auto">
                <div className="flex w-full bg-white rounded-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 px-3 sm:px-4 py-2 text-gray-800 outline-none text-sm sm:text-base"
                  />
                  <button 
                    className="px-4 sm:px-6 py-2 text-white font-medium text-sm sm:text-base"
                    style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            
            {/* Artistic Logo */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-6xl font-bold text-gray-600 tracking-wider">
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
