'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Eye, ArrowRight, User, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { blogApi, transformBlogData } from '@/lib/blog-api'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  views: string
  category: string
  tags: string[]
  featured: boolean
}

interface Category {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export default function BlogPage() {
  // State for data
  const [allBlogPosts, setAllBlogPosts] = useState<BlogPost[]>([])
  const [popularBlogs, setPopularBlogs] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState<number>(0) // 0 = All Categories
  const [searchQuery, setSearchQuery] = useState('')

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching main blogs...')
        const apiBlogs = await blogApi.getBlogs()
        console.log('Main blogs response:', apiBlogs)
        console.log('Main blogs length:', apiBlogs.length)
        
        if (Array.isArray(apiBlogs) && apiBlogs.length > 0) {
          const transformedBlogs = apiBlogs.map((blog, index) => transformBlogData(blog, index))
          console.log('Transformed blogs:', transformedBlogs)
          setAllBlogPosts(transformedBlogs)
        } else {
          console.log('No blogs returned from API, using fallback')
          throw new Error('No blogs returned from API')
        }
        
        // Fetch popular blogs
        try {
          console.log('Fetching popular blogs...')
          const popularApiBlogs = await blogApi.getPopularBlogs(1)
          console.log('Popular blogs response:', popularApiBlogs)
          
          if (Array.isArray(popularApiBlogs) && popularApiBlogs.length > 0) {
            const transformedPopularBlogs = popularApiBlogs.map((blog, index) => transformBlogData(blog, index))
            setPopularBlogs(transformedPopularBlogs)
          } else {
            console.log('No popular blogs, using regular blogs as fallback')
            const transformedBlogs = apiBlogs.map((blog, index) => transformBlogData(blog, index))
            setPopularBlogs(transformedBlogs.filter(post => !post.featured).slice(0, 3))
          }
        } catch (popularError) {
          console.error('Error fetching popular blogs:', popularError)
          const transformedBlogs = apiBlogs.map((blog, index) => transformBlogData(blog, index))
          setPopularBlogs(transformedBlogs.filter(post => !post.featured).slice(0, 3))
        }

        // Fetch categories
        try {
          console.log('Fetching categories...')
          const apiCategories = await blogApi.getCategories(1)
          console.log('Categories response:', apiCategories)
          setCategories(apiCategories)
        } catch (categoryError) {
          console.error('Error fetching categories:', categoryError)
          setCategories([
            { id: 1, name: "Health", created_at: "2025-08-14T08:09:42.354291Z", updated_at: "2025-08-14T08:09:42.354330Z" }
          ])
        }
      } catch (error) {
        console.error('Error fetching blogs:', error)
        console.error('Error details:', error)
        // Fallback to static data if API fails
        const fallbackBlogs = [
          {
            id: 1,
            slug: "test-blog",
            title: "test-blog",
            excerpt: "This is just a test blog",
            content: "This is just a test blog",
            image: "https://kalabah-bucket.nbg1.your-objectstorage.com/kalabah-bucket/media/blog_covers/diagram-export-7-22-2025-12_05_37-AM.png",
            author: "Michael",
            authorAvatar: "/avatars/user.jpg",
            date: "Aug 14, 2025",
            readTime: "1 min read",
            views: "11",
            category: "Health",
            tags: ["b2b", "health", "market"],
            featured: true
          }
        ]
        setAllBlogPosts(fallbackBlogs)
        setPopularBlogs(fallbackBlogs.filter(post => !post.featured).slice(0, 3))
        setCategories([
          { id: 1, name: "Health", created_at: "2025-08-14T08:09:42.354291Z", updated_at: "2025-08-14T08:09:42.354330Z" }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter blogs based on selected category and search query
  const filteredBlogs = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 0 || post.category === categories.find(cat => cat.id === selectedCategory)?.name
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured post and latest posts from filtered blogs
  const featuredPost = filteredBlogs.find(post => post.featured) || filteredBlogs[0]
  const latestPosts = filteredBlogs.slice(0, 3) // Show first 3 posts regardless of featured status

  // Debug logging
  console.log('All blog posts:', allBlogPosts.length)
  console.log('Filtered blogs:', filteredBlogs.length)
  console.log('Latest posts:', latestPosts.length)
  console.log('Selected category:', selectedCategory)
  console.log('Categories:', categories)
  console.log('Featured post:', featuredPost?.title)
  console.log('Latest posts titles:', latestPosts.map(post => post.title))

  // Create categories array with "All Categories" option
  const allCategories = [
    { id: 0, name: "All Categories", created_at: "", updated_at: "" },
    ...categories
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00C298] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Header and Search/Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6">
              <div>
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">The Kalabah Chronicles</h1>
              </div>
              
              {/* Search Bar */}
              <div className="w-full sm:max-w-xs lg:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-3 text-base w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C298] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#00C298] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h2>
              <p className="text-gray-600 mb-6">
                {searchQuery ? `No articles match your search for "${searchQuery}"` : 'No articles found for the selected category'}
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory(0)
                  setSearchQuery('')
                }}
                className="text-white px-6 py-2 rounded-xl font-semibold"
                style={{backgroundColor: '#00C298'}}
              >
                View All Articles
              </Button>
            </div>
          ) : (
            <>
              <div className="lg:flex lg:gap-8">
                {/* Main Featured Article */}
                <div className="lg:w-2/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="md:flex h-full">
                      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                          <span className="text-xs font-bold" style={{color: '#00C298'}}>{featuredPost.category}</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-6 lg:p-8 flex flex-col">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00C298] transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-base lg:text-lg flex-grow">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{featuredPost.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{featuredPost.views}</span>
                            </div>
                          </div>
                          <span className="text-gray-400">{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-700">By {featuredPost.author}</span>
                          </div>
                          <Link href={`/blog/${featuredPost.slug}`}>
                            <Button className="text-white px-6 py-2 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl" style={{backgroundColor: '#00C298'}}>
                              Read Article
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Sidebar */}
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                  <div className="space-y-6">
                    {/* Popular Posts */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Popular Blogs</h3>
                        <div className="flex space-x-2">
                          <button className="p-1 rounded-full hover:bg-gray-100">
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button className="p-1 rounded-full hover:bg-gray-100">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {popularBlogs.slice(0, 3).map((post) => (
                          <div key={post.id} className="flex space-x-3">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/blog/${post.slug}`}>
                                <h4 className="font-medium text-gray-900 hover:text-[#00C298] transition-colors line-clamp-2">
                                  {post.title}
                                </h4>
                              </Link>
                              <p className="text-sm text-gray-500 mt-1">{post.date} • {post.readTime}</p>
                              <div className="mt-1">
                                <span className="text-xs font-bold" style={{color: '#00C298'}}>{post.category}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Articles Section */}
              <div className="py-12 bg-gray-50 -mx-4 px-4 mt-12">
                <div className="container mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles ({latestPosts.length} articles)</h2>
                  {latestPosts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {latestPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id}>
                          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
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
                                <Button variant="ghost" size="sm" className="text-[#00C298] hover:text-[#00C298]/90 p-0">
                                  Read More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No articles found for the selected filters.</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}