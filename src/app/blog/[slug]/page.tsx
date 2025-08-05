'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Eye, ArrowLeft, Share2, BookmarkPlus, User, ArrowRight } from 'lucide-react'

// Blog posts data (same as blog page)
const blogPosts = [
  {
    id: 1,
    slug: "successful-b2b-sourcing-africa",
    title: "5 Tips for Successful B2B Sourcing in Africa",
    excerpt: "Discover the best practices for finding reliable suppliers and building lasting business relationships across African markets.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
    author: "Sarah Johnson",
    authorBio: "Sarah is a B2B sourcing expert with over 10 years of experience in African markets. She specializes in helping businesses find reliable suppliers and build sustainable partnerships.",
    authorAvatar: "/avatars/sarah.jpg",
    date: "Jan 15, 2024",
    readTime: "4 min read",
    views: "3.2k",
    category: "B2B Sourcing",
    tags: ["Sourcing", "Africa", "B2B", "Suppliers"],
    content: `
      <h2>Introduction</h2>
      <p>Successfully sourcing products in Africa requires a deep understanding of local markets, cultural nuances, and business practices. This comprehensive guide will provide you with essential tips to navigate the African B2B landscape effectively.</p>
      
      <h2>1. Research Local Market Conditions</h2>
      <p>Before engaging with any suppliers, conduct thorough research on the specific country and region you're targeting. Each African market has its unique characteristics, regulations, and business customs.</p>
      
      <h2>2. Build Personal Relationships</h2>
      <p>In African business culture, relationships are paramount. Take time to build genuine connections with your suppliers. This means going beyond transactional interactions and showing genuine interest in their business and culture.</p>
      
      <h2>3. Verify Supplier Credentials</h2>
      <p>Always verify your suppliers' credentials, including business licenses, certifications, and references. Use both online resources and on-ground verification when possible.</p>
      
      <h2>4. Understand Payment Terms and Methods</h2>
      <p>Payment terms can vary significantly across African markets. Understand the preferred payment methods, currency considerations, and typical payment schedules in your target region.</p>
      
      <h2>5. Plan for Logistics Challenges</h2>
      <p>African logistics can be complex. Factor in potential delays, customs procedures, and infrastructure limitations when planning your supply chain.</p>
      
      <h2>Conclusion</h2>
      <p>Success in African B2B sourcing comes from combining thorough preparation with cultural sensitivity and patience. By following these tips, you'll be well-positioned to build successful partnerships across the continent.</p>
    `,
    featured: true
  },
  {
    id: 2,
    slug: "quality-standards-african-markets",
    title: "Understanding Quality Standards in African Markets",
    excerpt: "Learn about quality certifications, compliance requirements, and best practices for ensuring product quality in your supply chain.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg",
    author: "Michael Chen",
    authorBio: "Michael is a quality assurance specialist with extensive experience in international trade standards and African market compliance.",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 12, 2024", 
    readTime: "6 min read",
    views: "2.1k",
    category: "Quality Control",
    tags: ["Quality", "Standards", "Compliance"],
    content: `
      <h2>Quality Standards Overview</h2>
      <p>Understanding quality standards in African markets is crucial for successful B2B operations. This article covers the essential certifications and compliance requirements you need to know.</p>
      
      <h2>International Standards</h2>
      <p>Many African countries follow international quality standards such as ISO 9001, ISO 14001, and others. Understanding these standards is essential for international trade.</p>
      
      <h2>Local Regulations</h2>
      <p>Each country has its own specific regulations and requirements. Research local standards and work with local experts to ensure compliance.</p>
    `,
    featured: false
  },
  {
    id: 3,
    slug: "international-trade-finance",
    title: "Navigating International Trade Finance",
    excerpt: "A comprehensive guide to trade finance options, payment methods, and risk management for international B2B transactions.",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
    author: "Emma Williams",
    authorBio: "Emma is a trade finance consultant specializing in African markets with over 8 years of experience in international banking.",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 10, 2024",
    readTime: "8 min read", 
    views: "4.5k",
    category: "Trade Finance",
    tags: ["Finance", "Trade", "Payments"],
    content: `
      <h2>Trade Finance Fundamentals</h2>
      <p>International trade finance is complex but essential for successful B2B operations. This guide covers the key concepts and options available.</p>
      
      <h2>Payment Methods</h2>
      <p>Various payment methods are available, each with different risk profiles and benefits. Understanding these options helps you make informed decisions.</p>
      
      <h2>Risk Management</h2>
      <p>Managing financial risk is crucial in international trade. Learn about insurance options, letters of credit, and other risk mitigation strategies.</p>
    `,
    featured: false
  }
]

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Find the current post
  const post = blogPosts.find(p => p.slug === slug)
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.slug !== slug)
    .slice(0, 3)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="text-white px-6 py-3" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <div className="mb-4 lg:mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(245, 124, 0, 0.1)', color: 'rgba(245, 124, 0, 1)'}}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-8 pb-6 lg:pb-8 border-b">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <span className="font-medium text-gray-900 text-sm sm:text-base">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">{post.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Eye className="w-4 h-4" />
                <span className="text-sm sm:text-base">{post.views} views</span>
              </div>
              <span className="text-gray-500 text-sm sm:text-base">{post.readTime}</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <BookmarkPlus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 pb-12 lg:pb-16">
          {/* Featured Image */}
          <div className="mb-8 lg:mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-xl lg:rounded-2xl shadow-lg"
            />
          </div>



          {/* Article Body */}
          <div className="prose prose-base lg:prose-lg max-w-none">
            <div 
              className="article-content text-base lg:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8'
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t">
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-base lg:text-lg">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 lg:mt-12 p-4 lg:p-6 bg-gray-50 rounded-xl lg:rounded-2xl">
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-base lg:text-lg mb-2">About {post.author}</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {post.authorBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white rounded-full px-2 sm:px-3 py-1">
                      <span className="text-xs font-bold" style={{color: 'rgba(245, 124, 0, 1)'}}>{relatedPost.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-4 lg:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 line-clamp-2 text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0 text-sm">
                          Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
              Stay Updated with B2B Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8">
              Get the latest articles and market insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
              />
              <Button 
                className="text-white px-6 lg:px-8 py-3 rounded-lg font-semibold text-sm lg:text-base"
                style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 