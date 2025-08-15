// Image optimization utilities for Cloudinary
export interface ImageOptimizationOptions {
  width?: number
  height?: number
  quality?: number
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
  crop?: 'fill' | 'scale' | 'fit' | 'thumb'
  gravity?: 'auto' | 'face' | 'center' | 'top' | 'bottom'
  fetchFormat?: 'auto'
}

export function optimizeCloudinaryImage(
  originalUrl: string,
  options: ImageOptimizationOptions = {}
): string {
  if (!originalUrl.includes('cloudinary.com')) {
    return originalUrl
  }

  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
    fetchFormat = 'auto'
  } = options

  // Parse the Cloudinary URL
  const urlParts = originalUrl.split('/upload/')
  if (urlParts.length !== 2) {
    return originalUrl
  }

  const baseUrl = urlParts[0] + '/upload/'
  const imagePath = urlParts[1]

  // Build transformation parameters
  const transformations: string[] = []

  // Add quality optimization
  transformations.push(`q_${quality}`)

  // Add format optimization
  if (format !== 'auto') {
    transformations.push(`f_${format}`)
  }

  // Add fetch format for automatic format selection
  if (fetchFormat === 'auto') {
    transformations.push('f_auto')
  }

  // Add width and height if specified
  if (width && height) {
    transformations.push(`w_${width},h_${height},c_${crop}`)
    if (gravity !== 'auto') {
      transformations.push(`g_${gravity}`)
    }
  } else if (width) {
    transformations.push(`w_${width},c_scale`)
  } else if (height) {
    transformations.push(`h_${height},c_scale`)
  }

  // Add responsive image optimization
  transformations.push('dpr_auto')

  // Build the optimized URL
  const transformationString = transformations.join(',')
  return `${baseUrl}${transformationString}/${imagePath}`
}

// Predefined optimization presets
export const imagePresets = {
  // Small thumbnails (100x100)
  thumbnail: (url: string) => optimizeCloudinaryImage(url, {
    width: 100,
    height: 100,
    quality: 70,
    crop: 'fill',
    gravity: 'center'
  }),

  // Medium cards (300x200)
  card: (url: string) => optimizeCloudinaryImage(url, {
    width: 300,
    height: 200,
    quality: 80,
    crop: 'fill',
    gravity: 'center'
  }),

  // Large banners (800x400)
  banner: (url: string) => optimizeCloudinaryImage(url, {
    width: 800,
    height: 400,
    quality: 85,
    crop: 'fill',
    gravity: 'center'
  }),

  // Hero images (1200x600)
  hero: (url: string) => optimizeCloudinaryImage(url, {
    width: 1200,
    height: 600,
    quality: 90,
    crop: 'fill',
    gravity: 'center'
  }),

  // Responsive width only (maintains aspect ratio)
  responsive: (url: string, width: number = 400) => optimizeCloudinaryImage(url, {
    width,
    quality: 80,
    crop: 'scale'
  }),

  // Avatar/profile images (150x150)
  avatar: (url: string) => optimizeCloudinaryImage(url, {
    width: 150,
    height: 150,
    quality: 75,
    crop: 'fill',
    gravity: 'face'
  })
}

// Generate srcset for responsive images
export function generateSrcSet(
  originalUrl: string,
  widths: number[] = [320, 640, 960, 1280, 1920]
): string {
  return widths
    .map(width => `${optimizeCloudinaryImage(originalUrl, { width, quality: 80 })} ${width}w`)
    .join(', ')
}

// Generate sizes attribute for responsive images
export function generateSizes(breakpoints: { [key: string]: string } = {}): string {
  const defaultSizes = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    '(min-width: 1025px)': '33vw'
  }
  
  const sizes = { ...defaultSizes, ...breakpoints }
  return Object.entries(sizes)
    .map(([query, size]) => `${query} ${size}`)
    .join(', ')
} 