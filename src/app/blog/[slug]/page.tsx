'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Eye, ArrowLeft, Share2, BookmarkPlus, User, ArrowRight } from 'lucide-react'
import { wishlistApi } from '@/lib/wishlist-api'



export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<{
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
  } | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<Array<{
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
  }>>([])
  const [loading, setLoading] = useState(true)
  
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  
  // Fetch specific blog and related posts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const { blogApi, transformBlogData } = await import('@/lib/blog-api')
        
        // Fetch the specific blog by slug
        try {
          const apiBlog = await blogApi.getBlogBySlug(slug)
          const transformedBlog = transformBlogData(apiBlog, 0)
          setPost(transformedBlog)
        } catch (slugError) {
          console.error('Blog not found by slug, trying to find in all blogs:', slugError)
          // If direct slug fetch fails, try to find it in all blogs
          const allBlogs = await blogApi.getBlogs()
          const foundBlog = allBlogs.find(blog => blog.slug === slug)
          if (foundBlog) {
            const transformedBlog = transformBlogData(foundBlog, 0)
            setPost(transformedBlog)
          } else {
            throw new Error('Blog not found')
          }
        }
        
        // Fetch related posts (all blogs except current one)
        const allBlogs = await blogApi.getBlogs()
        const transformedBlogs = allBlogs
          .filter(blog => blog.slug !== slug)
          .map((blog, index) => transformBlogData(blog, index))
          .slice(0, 3)
        setRelatedPosts(transformedBlogs)
        
      } catch (error) {
        console.error('Error fetching blog:', error)
        // Fallback to static data if API fails
        setPost({
          id: 1,
          slug: "first-test-blog",
          title: "First Test Blog",
          excerpt: "This is my first tech blog",
          image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
          author: "Mikel",
          authorBio: "Mikel is a contributor to Kalabah's B2B marketplace insights.",
          authorAvatar: "/avatars/user.jpg",
          date: "Aug 10, 2025",
          readTime: "1 min read",
          views: "0",
          category: "General",
          tags: ["new", "hot", "b2b"],
          content: `
            <h2>Introduction</h2>
            <p>This is my first tech blog post on the Kalabah platform.</p>
            
            <h2>About Kalabah</h2>
            <p>Kalabah is Africa's leading B2B marketplace, connecting suppliers and buyers across the continent.</p>
            
            <h2>Conclusion</h2>
            <p>Stay tuned for more insights and updates from our team.</p>
          `,
          featured: true
        })
        setRelatedPosts([])
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlogData()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Breadcrumb Skeleton */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <span className="text-gray-400">/</span>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              <span className="text-gray-400">/</span>
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Article Header Skeleton - Compact */}
        <div className="bg-white py-4 lg:py-6">
          <div className="container mx-auto px-4">
            {/* Back Button and Category Skeleton */}
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            {/* Title Skeleton - Compact */}
            <div className="mb-4">
              <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Meta Information Skeleton - Compact */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
              
              {/* Action Buttons Skeleton */}
              <div className="flex items-center space-x-2">
                <div className="h-8 w-14 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-14 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Skeleton */}
        <div className="bg-white">
          <div className="container mx-auto px-4 pb-8 lg:pb-12">
            {/* Featured Image Skeleton */}
            <div className="mb-6 lg:mb-8">
              <div className="w-full h-48 sm:h-64 lg:h-96 bg-gray-200 rounded-xl lg:rounded-2xl animate-pulse"></div>
            </div>

            {/* Article Body Skeleton */}
            <div className="space-y-4">
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
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
            <Link href="/" className="hover:text-[#00C298]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#00C298]">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header - Compact */}
      <div className="bg-white py-4 lg:py-6">
        <div className="container mx-auto px-4">
          {/* Back Button and Category in one row */}
          <div className="flex items-center justify-between mb-3 lg:mb-4">
            <Link href="/blog">
              <Button variant="ghost" className="text-[#00C298] hover:text-[#00C298]/90 p-2">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(245, 124, 0, 0.1)', color: 'rgba(245, 124, 0, 1)'}}>
              {post.category}
            </span>
          </div>

          {/* Title - More compact */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Compact Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-900 text-sm">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{post.views} views</span>
              </div>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            {/* Compact Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-xs">
                <BookmarkPlus className="w-3 h-3 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                <Share2 className="w-3 h-3 mr-1" />
                Share
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
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#00C298]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 lg:w-8 lg:h-8 text-[#00C298]" />
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
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white rounded-full px-2 sm:px-3 py-1">
                      <span className="text-xs font-bold" style={{color: '#00C298'}}>{relatedPost.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-4 lg:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-[#00C298] transition-colors min-h-[3rem] sm:min-h-[3.5rem]">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-3 lg:mb-4 flex-1 min-h-[3rem] text-sm">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="text-[#00C298] hover:text-[#00C298]/90 p-0 text-sm">
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
      <div className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated with B2B Insights
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Get the latest articles and market insights delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault()
              if (!newsletterEmail.trim()) {
                setNewsletterMessage('Please enter a valid email address')
                setNewsletterSuccess(false)
                return
              }
              
              setNewsletterLoading(true)
              setNewsletterMessage('')
              
              try {
                const result = await wishlistApi.addToWishlist(newsletterEmail)
                if (result.success) {
                  setNewsletterMessage('Successfully subscribed! We\'ll keep you updated with the latest insights.')
                  setNewsletterSuccess(true)
                  setNewsletterEmail('')
                } else {
                  setNewsletterMessage(result.message || 'Failed to subscribe. Please try again.')
                  setNewsletterSuccess(false)
                }
              } catch (error) {
                console.error('Error subscribing to newsletter:', error)
                setNewsletterMessage('Failed to subscribe. Please try again.')
                setNewsletterSuccess(false)
              } finally {
                setNewsletterLoading(false)
              }
            }}>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C298] focus:border-[#00C298] text-sm lg:text-base transition-all duration-200"
                  disabled={newsletterLoading}
                />
                <Button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-2.5 rounded-xl font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  style={{backgroundColor: '#00C298'}}
                  disabled={newsletterLoading}
                >
                  {newsletterLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </div>
              
              {newsletterMessage && (
                <div className={`text-sm mt-4 p-4 rounded-xl border ${
                  newsletterSuccess 
                    ? 'bg-[#00C298]/10 text-[#00C298] border-[#00C298]/20' 
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {newsletterMessage}
                </div>
              )}
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}