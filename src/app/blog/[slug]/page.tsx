import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SupplierNavbar } from "@/components/layout/supplier-navbar"
import { Footer } from "@/components/layout/Footer"
import { blogApi, transformBlogData } from '@/lib/blog-api'
import BlogContent from '@/components/blog/BlogContent'
import { BlogErrorBoundary } from '@/components/blog/BlogErrorBoundary'
import BlogStructuredData from '@/components/blog/BlogStructuredData'

// Use dynamic rendering for now to avoid build issues
export const dynamic = 'force-dynamic'

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    // Normalize slug to lowercase to avoid case sensitivity issues
    const normalizedSlug = slug.toLowerCase()
    const apiBlog = await blogApi.getBlogBySlug(normalizedSlug)
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

// Skip static generation for now to avoid build issues
export async function generateStaticParams() {
  return []
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Fetch blog data server-side
  let post: ReturnType<typeof transformBlogData> | null = null
  let relatedPosts: ReturnType<typeof transformBlogData>[] = []
  let error: string | null = null
  let loading = true
  
  // Extract slug outside try block so it's available in error fallback
  const { slug } = await params
  // Normalize slug to lowercase to avoid case sensitivity issues
  const normalizedSlug = slug.toLowerCase()
  console.log('Fetching blog with slug:', normalizedSlug)
  
  try {
        
    // Fetch the specific blog by slug
    const apiBlog = await blogApi.getBlogBySlug(normalizedSlug)
    console.log('API blog response:', apiBlog)
    post = transformBlogData(apiBlog, 0)
        
    // Fetch related posts (all blogs except current one)
    const allBlogs = await blogApi.getBlogs()
    relatedPosts = allBlogs
      .filter(blog => blog.slug !== normalizedSlug)
      .map((blog, index) => transformBlogData(blog, index))
      .slice(0, 3)
    
    loading = false
  } catch (err) {
    console.error('Error fetching blog:', err)
    console.error('Error details:', {
      message: err instanceof Error ? err.message : 'Unknown error',
      stack: err instanceof Error ? err.stack : undefined
    })
    
    // Check if it's a 404 error (blog not found)
    if (err instanceof Error && err.message.includes('404')) {
      notFound() // This will trigger the not-found.tsx page
    }
    
    error = err instanceof Error ? err.message : 'Failed to load blog post'
  }

  // If there's an error or no post, show fallback instead of 404
  if (error || !post) {
    return (
      <BlogErrorBoundary>
        <SupplierNavbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Blog Post Unavailable
              </h2>
              <p className="text-gray-600 mb-4">
                We&apos;re having trouble loading this blog post. This might be due to a temporary issue with our servers.
              </p>
              {error && (
                <details className="mb-4 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                    {error}
                  </pre>
                </details>
              )}
              <div className="space-y-2">
                <Link
                  href={`/blog/${normalizedSlug}`}
                  className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                  Try Again
                </Link>
                <Link
                  href="/blog"
                  className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BlogErrorBoundary>
    )
  }

  return (
    <BlogErrorBoundary>
      <BlogStructuredData post={post} />
      <SupplierNavbar />
      <div className="pt-24">
        <BlogContent post={post} relatedPosts={relatedPosts} loading={loading} />
      </div>
      <Footer />
    </BlogErrorBoundary>
  )
}