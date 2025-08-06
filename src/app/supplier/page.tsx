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
          
          {/* Key Benefits List */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
              <span className="text-gray-700">Access to 2M+ verified buyers</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
              <span className="text-gray-700">Secure payment & escrow protection</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
              <span className="text-gray-700">Professional trade documentation support</span>
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



// Stats Section with Banner - Banner Only
const StatsSection = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" style={{backgroundColor: 'rgba(255, 250, 245, 1)'}}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Centered Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
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
                  className="text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
                >
                  Join The Waitlist as a Supplier
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - 2x2 Grid of Banner Placeholders */}
          <div className="lg:col-span-3">
            {/* Mobile Carousel (below 640px) */}
            <div className="sm:hidden">
              <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-4">
                <div className="bg-gray-200 rounded-lg h-32 w-64 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm font-medium">Banner 1</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-32 w-64 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm font-medium">Banner 2</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-32 w-64 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm font-medium">Banner 3</span>
                </div>
                <div className="bg-gray-200 rounded-lg h-32 w-64 flex-shrink-0 flex items-center justify-center shadow-sm">
                  <span className="text-gray-500 text-sm font-medium">Banner 4</span>
                </div>
              </div>
            </div>

            {/* Desktop Grid (640px and above) */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-gray-200 rounded-lg h-32 sm:h-40 md:h-44 lg:h-52 xl:h-60 flex items-center justify-center shadow-sm">
                <span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">Banner 1</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 sm:h-40 md:h-44 lg:h-52 xl:h-60 flex items-center justify-center shadow-sm">
                <span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">Banner 2</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 sm:h-40 md:h-44 lg:h-52 xl:h-60 flex items-center justify-center shadow-sm">
                <span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">Banner 3</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 sm:h-40 md:h-44 lg:h-52 xl:h-60 flex items-center justify-center shadow-sm">
                <span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium">Banner 4</span>
              </div>
            </div>
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