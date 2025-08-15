// Use local Next.js API routes to avoid CORS issues
const BASE_URL = ''

// Types for API responses
export interface BlogPost {
  id: number
  title: string
  slug: string
  meta_title: string
  meta_description: string
  canonical_url: string
  description: string
  content?: string
  cover_image: string | null
  cover_image_alt: string
  view_count: number
  read_time: number
  blogger_name: string
  blogger_image: string | null
  blogger_info?: string
  published_at: string
  status: 'active' | 'inactive'
  category: {
    id: number
    name: string
    created_at: string
    updated_at: string
  } | null
  tags_list: string[]
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  errors: string[] | null
}

export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

// Helper function to build URL with query parameters
function buildUrl(endpoint: string, params?: Record<string, any>): string {
  // Use environment variable for base URL, fallback to localhost for development
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
    : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const url = new URL(baseUrl + '/api' + endpoint)
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value.toString())
      }
    })
  }
  
  return url.toString()
}

// Helper function to format date
function formatDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Helper function to format view count
function formatViewCount(count: number): string {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k'
  }
  return count.toString()
}

// Transform API blog data to UI format
export function transformBlogData(apiBlog: BlogPost, index: number = 0) {
  return {
    id: apiBlog.id,
    title: apiBlog.title,
    slug: apiBlog.slug,
    excerpt: apiBlog.description,
    content: apiBlog.content || apiBlog.description, // Use content field if available, fallback to description
    image: apiBlog.cover_image || 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    author: apiBlog.blogger_name,
    authorAvatar: apiBlog.blogger_image || '/avatars/user.jpg',
    authorBio: apiBlog.blogger_info || `${apiBlog.blogger_name} is a contributor to Kalabah's B2B marketplace insights.`,
    date: formatDate(apiBlog.published_at),
    readTime: `${apiBlog.read_time} min read`,
    views: formatViewCount(apiBlog.view_count),
    category: apiBlog.category?.name || 'General',
    tags: apiBlog.tags_list,
    featured: index === 0 // Make the first blog post featured
  }
}

// Blog API functions
export const blogApi = {
  // Get all blogs with optional filters
  async getBlogs(params?: {
    page?: number
    search?: string
    category?: number
    blogger_name?: string
    status?: 'active' | 'inactive'
  }): Promise<BlogPost[]> {
    try {
      const url = buildUrl('/blogs', params)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<PaginatedResponse<BlogPost>> = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch blogs')
      }
      
      return result.data.results
    } catch (error) {
      console.error('Error fetching blogs:', error)
      throw error
    }
  },

  // Get popular blogs
  async getPopularBlogs(page: number = 1): Promise<BlogPost[]> {
    try {
      const url = buildUrl('/blogs/popular', { page })
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<PaginatedResponse<BlogPost> | BlogPost[]> = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch popular blogs')
      }
      
      // Handle both paginated and non-paginated responses
      if (result.data && 'results' in result.data) {
        // Paginated response
        return (result.data as PaginatedResponse<BlogPost>).results
      } else {
        // Non-paginated response (direct array)
        return result.data as BlogPost[]
      }
    } catch (error) {
      console.error('Error fetching popular blogs:', error)
      throw error
    }
  },

  // Get recent blogs
  async getRecentBlogs(page: number = 1): Promise<BlogPost[]> {
    try {
      const url = buildUrl('/blogs/recent', { page })
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<PaginatedResponse<BlogPost> | BlogPost[]> = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch recent blogs')
      }
      
      // Handle both paginated and non-paginated responses
      if (result.data && 'results' in result.data) {
        // Paginated response
        return (result.data as PaginatedResponse<BlogPost>).results
      } else {
        // Non-paginated response (direct array)
        return result.data as BlogPost[]
      }
    } catch (error) {
      console.error('Error fetching recent blogs:', error)
      throw error
    }
  },

  // Get single blog by slug
  async getBlogBySlug(slug: string): Promise<BlogPost> {
    try {
      const url = buildUrl(`/blogs/${slug}`)
      console.log('Blog API: Fetching blog by slug:', slug, 'URL:', url)
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-cache'
      })
      
      console.log('Blog API: Response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Blog API: Error response:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<BlogPost> = await response.json()
      console.log('Blog API: Success response:', result)
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch blog')
      }
      
      return result.data
    } catch (error) {
      console.error('Error fetching blog:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      })
      throw error
    }
  },

  // Get categories
  async getCategories(page: number = 1): Promise<Category[]> {
    try {
      const url = buildUrl('/categories', { page })
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: ApiResponse<PaginatedResponse<Category> | Category[]> = await response.json()
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch categories')
      }
      
      // Handle both paginated and non-paginated responses
      if (result.data && 'results' in result.data) {
        // Paginated response
        return (result.data as PaginatedResponse<Category>).results
      } else {
        // Non-paginated response (direct array)
        return result.data as Category[]
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
} 