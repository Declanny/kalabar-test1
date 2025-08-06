'use client'

import React from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { CategorySection } from "@/components/marketplace/CategorySection"
import { RecentSearches } from "@/components/marketplace/RecentSearches"
import { TopSuppliersCarousel } from "@/components/marketplace/TopSuppliersCarousel"
import { CategoryGrid } from "@/components/marketplace/CategoryGrid"
import FAQSection from "@/components/marketplace/FAQSection"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

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
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            The Kalabah Chronicles
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
                <div className="flex justify-end">
                  <Link href={`/blog/${post.id === 1 ? 'successful-b2b-sourcing-africa' : post.id === 2 ? 'quality-standards-african-markets' : 'international-trade-finance'}`}>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
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





export default function LandingPage() {
  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category:', categoryId)
    // Implement category filtering logic
  }

  const handleSearchClick = (search: string) => {
    console.log('Search clicked:', search)
    // Implement search functionality
  }



  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content - NO HERO BANNER */}
      <div className="bg-gray-50">
        
        {/* Categories with Side Navigation (now contains Best Offers) */}
        <CategorySection onCategorySelect={handleCategorySelect} />
        
        {/* Best Offers Section - Full Width */}
        <div className="py-4 sm:py-6 lg:py-8" style={{backgroundColor: 'rgba(255, 250, 245, 1)'}}>
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <CategoryGrid 
              headerContent={
                <>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
                    Here&apos;s a sneak peek of deals coming to Kalabah.
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center">
                    We&apos;re onboarding trusted suppliers for the most in-demand goods.
                  </p>
                </>
              }
              onCategoryClick={() => window.location.href = '/waiting-list?action=true'} 
            />
          </div>
        </div>
        
        {/* Recently Searched Section */}
        <RecentSearches onSearchClick={handleSearchClick} />
        
        {/* Top Categories (back to original position) */}
        <TopSuppliersCarousel />
        
        {/* Product Listings (Main Focus) - COMMENTED OUT */}
        {/* <B2BProductGrid onContactSupplier={handleContactSupplier} /> */}
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Footer */}
        <Footer />
        </div>
    </div>
  )
}
