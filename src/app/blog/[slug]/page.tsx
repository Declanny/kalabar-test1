import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/Footer"
import { blogApi, transformBlogData } from '@/lib/blog-api'
import BlogContent from '@/components/blog/BlogContent'
import { BlogErrorBoundary } from '@/components/blog/BlogErrorBoundary'

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const apiBlog = await blogApi.getBlogBySlug(slug)
    const blog = transformBlogData(apiBlog, 0)
    
    return {
      title: `${blog.title} - Kalabah Blog`,
      description: blog.excerpt,
      keywords: [...blog.tags, 'B2B', 'African markets', 'trade', 'suppliers'].join(', '),
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        type: 'article',
        url: `/blog/${blog.slug}`,
        siteName: 'Kalabah',
        images: [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title
          }
        ],
        authors: [blog.author],
        publishedTime: blog.date,
        modifiedTime: blog.date,
        section: blog.category,
        tags: blog.tags
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.excerpt,
        images: [blog.image],
        creator: '@kalabah'
      },
      alternates: {
        canonical: `/blog/${blog.slug}`
      },
      authors: [{ name: blog.author }],
      category: blog.category,
      other: {
        'article:published_time': blog.date,
        'article:modified_time': blog.date,
        'article:section': blog.category,
        'article:tag': blog.tags.join(', ')
      }
    }
  } catch (error) {
    return {
      title: 'Blog Post Not Found - Kalabah',
      description: 'The requested blog post could not be found.'
    }
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const apiBlogs = await blogApi.getBlogs()
    return apiBlogs.map((blog) => ({
      slug: blog.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    // Return empty array to allow dynamic rendering for all routes
    return []
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Fetch blog data server-side
  let post: ReturnType<typeof transformBlogData> | null = null
  let relatedPosts: ReturnType<typeof transformBlogData>[] = []
  
  try {
    const { slug } = await params
    console.log('Fetching blog with slug:', slug)
        
    // Fetch the specific blog by slug
    const apiBlog = await blogApi.getBlogBySlug(slug)
    console.log('API blog response:', apiBlog)
    post = transformBlogData(apiBlog, 0)
        
    // Fetch related posts (all blogs except current one)
    const allBlogs = await blogApi.getBlogs()
    relatedPosts = allBlogs
      .filter(blog => blog.slug !== slug)
      .map((blog, index) => transformBlogData(blog, index))
      .slice(0, 3)
  } catch (error) {
    console.error('Error fetching blog:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    notFound()
  }

  if (!post) {
    console.error('No post found for slug')
    notFound()
  }

  return (
    <BlogErrorBoundary>
      <Header />
      <BlogContent post={post} relatedPosts={relatedPosts} />
      <Footer />
    </BlogErrorBoundary>
  )
}