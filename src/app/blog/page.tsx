'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, Eye, ArrowRight, Search, User, ChevronLeft, ChevronRight } from 'lucide-react'

// Extended blog posts data
const allBlogPosts = [
  {
    id: 1,
    slug: "successful-b2b-sourcing-africa",
    title: "5 Tips for Successful B2B Sourcing in Africa",
    excerpt: "Discover the best practices for finding reliable suppliers and building lasting business relationships across African markets.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
    author: "Sarah Johnson",
    authorAvatar: "/avatars/sarah.jpg",
    date: "Jan 15, 2024",
    readTime: "4 min read",
    views: "3.2k",
    category: "B2B Sourcing",
    tags: ["Sourcing", "Africa", "B2B", "Suppliers"],
    featured: true
  },
  {
    id: 2,
    slug: "quality-standards-african-markets",
    title: "Understanding Quality Standards in African Markets",
    excerpt: "Learn about quality certifications, compliance requirements, and best practices for ensuring product quality in your supply chain.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg",
    author: "Michael Chen",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 12, 2024", 
    readTime: "6 min read",
    views: "2.1k",
    category: "Quality Control",
    tags: ["Quality", "Standards", "Compliance"],
    featured: false
  },
  {
    id: 3,
    slug: "international-trade-finance",
    title: "Navigating International Trade Finance",
    excerpt: "A comprehensive guide to trade finance options, payment methods, and risk management for international B2B transactions.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
    author: "Emma Williams",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 10, 2024",
    readTime: "8 min read", 
    views: "4.5k",
    category: "Trade Finance",
    tags: ["Finance", "Trade", "Payments"],
    featured: true
  },
  {
    id: 4,
    slug: "agricultural-exports-guide",
    title: "Agricultural Exports: A Complete Guide",
    excerpt: "Everything you need to know about exporting agricultural products from Africa to international markets.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg",
    author: "David Okafor",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    views: "1.8k",
    category: "Agriculture",
    tags: ["Agriculture", "Exports", "Food"],
    featured: false
  },
  {
    id: 5,
    slug: "textile-industry-trends",
    title: "African Textile Industry: 2024 Trends",
    excerpt: "Explore the latest trends, opportunities, and challenges in the African textile and fashion industry.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif",
    author: "Amina Hassan",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 5, 2024",
    readTime: "5 min read",
    views: "2.7k",
    category: "Textiles",
    tags: ["Textiles", "Fashion", "Trends"],
    featured: false
  },
  {
    id: 6,
    slug: "digital-transformation-b2b",
    title: "Digital Transformation in B2B Commerce",
    excerpt: "How digital technologies are reshaping B2B commerce in Africa and what it means for your business.",
    content: "Full article content here...",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif",
    author: "James Mwangi",
    authorAvatar: "/avatars/user.jpg",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    views: "3.9k",
    category: "Technology",
    tags: ["Digital", "Technology", "B2B"],
    featured: true
  }
]

const categories = [
  "All Categories",
  "B2B Sourcing", 
  "Quality Control",
  "Trade Finance",
  "Agriculture",
  "Textiles",
  "Technology"
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [currentPage, setCurrentPage] = useState(1)
  const [relatedCurrentIndex, setRelatedCurrentIndex] = useState(0)
  
  const postsPerPage = 6

  // Filter posts
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  // Featured post
  const featuredPost = allBlogPosts.find(post => post.featured)
  
  // Related posts (exclude featured post)
  const relatedPosts = allBlogPosts.filter(post => !post.featured).slice(0, 6)
  
  // Carousel navigation for related posts
  const nextRelated = () => {
    setRelatedCurrentIndex((prev) => (prev + 1) % Math.max(1, relatedPosts.length - 2))
  }
  
  const prevRelated = () => {
    setRelatedCurrentIndex((prev) => (prev - 1 + Math.max(1, relatedPosts.length - 2)) % Math.max(1, relatedPosts.length - 2))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Featured Post Section */}
      {featuredPost && searchQuery === "" && selectedCategory === "All Categories" && (
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Header and Search/Filters */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">The Kalabah Chronicles</h1>
                </div>
                
                {/* Search Bar */}
                <div className="w-full sm:max-w-xs lg:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 py-3 text-base w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:flex lg:gap-8">
              {/* Main Featured Article */}
              <div className="lg:w-2/3">
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="md:flex h-full">
                    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                        <span className="text-xs font-bold" style={{color: 'rgba(245, 124, 0, 1)'}}>{featuredPost.category}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 lg:p-8 flex flex-col">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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
                          <Button className="text-white px-4 lg:px-6 py-2 text-sm lg:text-base" style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}>
                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Related Articles Carousel - Large screens only */}
              <div className="hidden lg:block lg:w-1/3">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Related Articles</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={prevRelated}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={relatedPosts.length <= 3}
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                      </button>
                      <button 
                        onClick={nextRelated}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={relatedPosts.length <= 3}
                      >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4 overflow-hidden">
                    {relatedPosts.slice(relatedCurrentIndex, relatedCurrentIndex + 3).map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <div className="group cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex gap-3">
                            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-green-600 transition-colors mb-1">
                                {post.title}
                              </h4>
                              <div className="flex items-center text-xs text-gray-500 space-x-2">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                              <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full" style={{backgroundColor: 'rgba(245, 124, 0, 0.1)', color: 'rgba(245, 124, 0, 1)'}}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Page Header - Show when search/filters are active */}
      {(searchQuery !== "" || selectedCategory !== "All Categories") && (
        <div className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">The Kalabah Chronicles</h1>
              </div>
              
              {/* Search Bar */}
              <div className="w-full sm:max-w-xs lg:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-3 text-base w-full"
                  />
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {selectedCategory === "All Categories" ? "Latest Articles" : selectedCategory} 
              <span className="text-gray-500 font-normal ml-2 text-base sm:text-lg">({filteredPosts.length} articles)</span>
            </h2>
          </div>

          {paginatedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {paginatedPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="text-sm px-3 py-2"
                  >
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                  </Button>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let page;
                      if (totalPages <= 5) {
                        page = i + 1;
                      } else if (currentPage <= 3) {
                        page = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        page = totalPages - 4 + i;
                      } else {
                        page = currentPage - 2 + i;
                      }
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className={`text-sm px-3 py-2 ${currentPage === page ? "bg-green-600 hover:bg-green-700" : ""}`}
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="text-sm px-3 py-2"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 