'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Eye, ArrowLeft, Share2, BookmarkPlus, User, ArrowRight } from 'lucide-react'
import { wishlistApi } from '@/lib/wishlist-api'

interface BlogContentProps {
  post: {
    id: number
    slug: string
    title: string
    excerpt: string
    image: string
    author: string
    authorBio: string
    authorAvatar: string
    date: string
    readTime: string
    views: string
    category: string
    tags: string[]
    content: string
    featured: boolean
  }
  relatedPosts: Array<{
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
  }>
}

export default function BlogContent({ post, relatedPosts }: BlogContentProps) {
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kalabah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kalabah.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kalabah.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": post.content.length,
    "timeRequired": post.readTime
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterLoading(true)
    setNewsletterMessage('')

    try {
      await wishlistApi.addToWishlist(newsletterEmail)
      setNewsletterMessage('Successfully subscribed to our newsletter!')
      setNewsletterSuccess(true)
      setNewsletterEmail('')
    } catch (error) {
      setNewsletterMessage('Failed to subscribe. Please try again.')
      setNewsletterSuccess(false)
    } finally {
      setNewsletterLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white py-4 lg:py-6">
        <div className="container mx-auto px-4">
          {/* Back Button and Category */}
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{post.views} views</span>
              </div>
              <span>{post.readTime}</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 pb-8 lg:pb-12">
          {/* Featured Image */}
          <div className="mb-6 lg:mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-xl lg:rounded-2xl"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* About Author Section */}
          <div className="mt-8 pt-6 border-t">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {post.authorAvatar && post.authorAvatar !== '/avatars/user.jpg' ? (
                    <img 
                      src={post.authorAvatar} 
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-green-600" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest B2B marketplace insights, trade tips, and African market opportunities delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C298] focus:border-transparent"
                required
                disabled={newsletterLoading}
              />
              <Button 
                type="submit" 
                disabled={newsletterLoading}
                className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                style={{backgroundColor: '#00C298'}}
              >
                {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            {newsletterMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                newsletterSuccess 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {newsletterMessage}
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>{relatedPost.category}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{relatedPost.author}</span>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="text-[#00C298] hover:text-[#00C298]/90 hover:bg-[#00C298]/10">
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
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
    </div>
  )
} 