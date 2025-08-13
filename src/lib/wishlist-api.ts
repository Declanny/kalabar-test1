// Wishlist API service for waiting list functionality
const BASE_URL = ''

// Types for API responses
export interface WishlistResponse {
  success: boolean
  message: string
  data?: any
  errors?: any
}

// Helper function to build URL
function buildUrl(endpoint: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3001'
  return `${baseUrl}/api${endpoint}`
}

// Wishlist API functions
export const wishlistApi = {
  // Add email to waiting list
  async addToWishlist(email: string): Promise<WishlistResponse> {
    try {
      const url = buildUrl('/wishlist')
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: WishlistResponse = await response.json()
      return result
    } catch (error) {
      console.error('Error adding to wishlist:', error)
      throw error
    }
  },

  // Get wishlist status (if needed)
  async getWishlistStatus(email: string): Promise<WishlistResponse> {
    try {
      const url = buildUrl(`/wishlist?email=${encodeURIComponent(email)}`)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result: WishlistResponse = await response.json()
      return result
    } catch (error) {
      console.error('Error getting wishlist status:', error)
      throw error
    }
  }
} 