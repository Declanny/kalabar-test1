'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/Footer'
import { 
  Globe, 
  TrendingUp, 
  Shield, 
 
  ArrowRight,
  CheckCircle,

} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

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

// Hero Banner Component
const SupplierHeroBanner = () => (
  <div className="pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#00C298'}}></div>
            <span className="text-sm font-medium text-gray-700">Africa&apos;s Leading B2B Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Scale Your African Business.
            <span className="block" style={{color: '#00C298'}}>
              Reach Buyers Worldwide.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join thousands of verified suppliers already expanding their reach through Kalabah&apos;s secure B2B marketplace. Sell to buyers across 54 countries, access secure payments, and simplify your exports.
          </p>
          
          {/* Key Benefits List */}
          <div className="space-y-3 mb-8 text-center lg:text-left">
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5" style={{color: '#fe5b04'}} />
              <span className="text-gray-700">Access to 2M+ verified buyers</span>
            </div>
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5" style={{color: '#fe5b04'}} />
              <span className="text-gray-700">Secure payment & escrow protection</span>
            </div>
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5" style={{color: '#fe5b04'}} />
              <span className="text-gray-700">Professional trade documentation support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/waiting-list?action=true">
              <Button 
                className="text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-lg"
                style={{backgroundColor: '#00C298'}}
              >
                Register as Supplier
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/waiting-list?action=true">
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg"
                style={{
                  borderColor: '#00C298',
                  color: '#00C298'
                }}
              >
                Browse Buyer Interest
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
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00C298] to-[#00C298]/80 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
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
            <div className="grid grid-cols-2 gap-4 mb-6 justify-items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" style={{color: '#00C298'}} />
                <span className="text-sm font-medium text-gray-700">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" style={{color: '#00C298'}} />
                <span className="text-sm font-medium text-gray-700">Verified Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" style={{color: '#00C298'}} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">54 Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" style={{color: '#00C298'}} />
                <span className="text-sm font-medium text-gray-700">Growth Tools</span>
              </div>
            </div>

            {/* Early Access CTA */}
            <div className="bg-gradient-to-r from-[#00C298]/10 to-[#00C298]/5 rounded-xl p-4 border border-[#00C298]/20">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Be Among the First</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Join our waitlist for early access and exclusive benefits
                </p>
                <Link href="/waiting-list?action=true">
                  <Button 
                    className="text-white px-4 py-2 rounded-xl font-medium text-sm"
                    style={{backgroundColor: '#00C298'}}
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



// Stats Section with Banner - Banner Only
const StatsSection = () => {
  const bannerImages = [
    "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093214/9be503d0f4401f4e2340a582bd0ec115399ade49_xny2jv.jpg",
    "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093204/9d2b010cd4990f039520b7d431ba252979fba1e0_gt5elb.jpg",
    "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093192/04f0e0a55d0a666084f7f9e4cc3f32fcda67b941_da9odf.jpg",
    "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755093195/484523f5f65092d9649ada280c18c50a1454d840_nvl7pj.jpg"
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" style={{backgroundColor: 'rgba(255, 250, 245, 1)'}}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Centered Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
            Offers Coming to Suppliers
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            We&apos;re onboarding trusted suppliers for the most in-demand goods.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-center lg:text-left">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8" style={{color: 'rgba(66, 84, 102, 1)'}}>
                Unlock Powerful Selling Tools on Kalabah
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed" style={{color: 'rgba(66, 84, 102, 1)'}}>
                Join Kalabah&apos;s waitlist today and become one of the first verified suppliers to access a marketplace built to scale your business beyond borders. Whether you sell tomatoes from Kano or fashion from Aba — we&apos;ve designed the tools to help you grow faster, smarter, and globally.
              </p>
            </div>
            
            <div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
                Don&apos;t wait. Claim your spot before we go live.
              </p>
              <Link href="/waiting-list?action=true">
                <Button 
                  className="text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  style={{backgroundColor: '#00C298'}}
                >
                  Join The Waitlist as a Supplier
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - 2x2 Grid of Banner Images */}
          <div className="lg:col-span-3">
            {/* Mobile Carousel (below 640px) */}
            <div className="sm:hidden">
              <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-4">
                {bannerImages.map((image, index) => (
                  <div key={index} className="rounded-lg h-32 w-64 flex-shrink-0 overflow-hidden shadow-sm">
                    <img 
                      src={image} 
                      alt={`Product showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid (640px and above) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {bannerImages.map((image, index) => (
                <div key={index} className="rounded-lg h-32 sm:h-40 md:h-44 lg:h-52 xl:h-60 overflow-hidden shadow-sm">
                  <img 
                    src={image} 
                    alt={`Product showcase ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}






// Blog Section
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
            slug: "first-test-blog",
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
            slug: "first-test-blog",
            title: "Building Trust with International Buyers: Best Practices",
            excerpt: "Discover how to build lasting relationships with buyers from different countries and cultures. Learn from suppliers who've mastered international trade.",
            image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
            author: "Fatima Al-Rashid",
            date: "Jan 10, 2024",
            readTime: "6 min read", 
            views: "3.1k",
            category: "Relationship Building"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Supplier Success Resources
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and strategies to help you succeed as a supplier on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            blogPosts.map((post) => (
                          <Link href={`/blog/${post.slug}`} key={post.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold" style={{color: '#00C298'}}>{post.category}</span>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C298] transition-colors min-h-[4.5rem]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 min-h-[5.5rem]">
                  {post.excerpt}
                </p>
                <div className="flex justify-end mt-auto">
                  <Button variant="ghost" size="sm" className="text-[#00C298] hover:text-[#00C298]/90 p-0">
                      Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
              </Link>
          ))
          )}
        </div>

        <div className="text-center mt-12">
                     <Link href="/blog">
            <Button 
              variant="outline" 
              className="border-[#00C298] hover:text-white px-8 py-3 rounded-xl font-medium"
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



export default function SuppliersLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-gray-50">
        <SupplierHeroBanner />
        <StatsSection />
        <BlogSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 