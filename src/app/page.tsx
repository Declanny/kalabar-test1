'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { CategoryBannerLayout } from "@/components/marketplace/CategoryBannerLayout"
import { RecentSearches } from "@/components/marketplace/RecentSearches"
import { TopSuppliersCarousel } from "@/components/marketplace/TopSuppliersCarousel"
import { CategoryGrid } from "@/components/marketplace/CategoryGrid"
import FAQSection from "@/components/marketplace/FAQSection"
import { FeaturedCategoriesSection } from "@/components/marketplace/FeaturedCategoriesSection"
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

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  views: string
  category: string
}

// Blog Section Component
const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { blogApi, transformBlogData } = await import('@/lib/blog-api')
        const apiBlogs = await blogApi.getRecentBlogs(1)
        const transformedBlogs = apiBlogs.slice(0, 3).map((blog, index) => transformBlogData(blog, index))
        setBlogPosts(transformedBlogs)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        // Fallback to static data if API fails
        setBlogPosts([
          {
            id: 1,
            slug: "first-test-blog",
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
            slug: "first-test-blog",
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
            slug: "first-test-blog",
            title: "Navigating International Trade Finance",
            excerpt: "A comprehensive guide to trade finance options, payment methods, and risk management for international B2B transactions.",
            image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
            author: "Emma Williams",
            date: "Jan 10, 2024",
            readTime: "8 min read", 
            views: "4.5k",
            category: "Trade Finance"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            The Kalabah Chronicles
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Expert insights, market trends, and practical tips to help you succeed in African B2B commerce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-40 sm:h-48 bg-gray-200"></div>
                <CardContent className="p-4 sm:p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white rounded-full px-2 sm:px-3 py-1">
                                        <span className="text-xs font-bold" style={{color: '#00C298'}}>{post.category}</span>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#00C298] transition-colors min-h-[3.5rem] sm:min-h-[4rem]">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 flex-1 min-h-[4.5rem] sm:min-h-[5rem]">
                  {post.excerpt}
                </p>
                <div className="flex justify-end mt-auto">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-[#00C298] hover:text-[#00C298]/90 p-0">
                      Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
          )}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-[#00C298] hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base"
              style={{borderColor: '#00C298', color: '#00C298'}}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#00C298';
                (e.target as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = '#00C298';
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
      
      {/* Main Content */}
      <div className="bg-gray-50">
        
        {/* Category Banner Layout */}
        <CategoryBannerLayout onCategorySelect={handleCategorySelect} />
        
        {/* Featured Categories Section */}
        <FeaturedCategoriesSection />
        
        {/* Best Offers Section - Full Width */}
        <div className="py-1 sm:py-2 lg:py-4" style={{backgroundColor: 'rgba(255, 250, 245, 1)'}}>
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <CategoryGrid 
              headerContent={
                <>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 text-center">
                     Offers Coming Soon From Kalabah                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center">
                    We&apos;re onboarding trusted suppliers for the most in-demand goods.
                  </p>
                </>
              }
              onCategoryClick={() => window.location.href = '/waiting-list?action=true'} 
            />
          </div>
        </div>
        

        
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
