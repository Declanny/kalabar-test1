import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.kalabah.com'

export async function GET(request: NextRequest) {
  try {
    console.log('Vercel Test: Starting API test')
    console.log('Vercel Test: BASE_URL:', BASE_URL)
    console.log('Vercel Test: Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
      BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL
    })

    // Handle the case where BASE_URL already includes /api
    const baseUrl = BASE_URL.endsWith('/api') ? BASE_URL.replace('/api', '') : BASE_URL
    // Test 1: Direct fetch to backend
    const testUrl = `${baseUrl}/v1/blogs/`
    console.log('Vercel Test: Testing URL:', testUrl)

    const response = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Kalabah-Vercel-Test/1.0'
      },
      cache: 'no-cache'
    })

    console.log('Vercel Test: Response status:', response.status)
    console.log('Vercel Test: Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Vercel Test: Error response:', errorText)
      return NextResponse.json({
        success: false,
        error: `Backend API returned status: ${response.status}`,
        details: errorText,
        testUrl,
        environment: {
          BASE_URL,
          NODE_ENV: process.env.NODE_ENV,
          VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
        }
      }, { status: response.status })
    }

    const data = await response.json()
    console.log('Vercel Test: Success response received')

    return NextResponse.json({
      success: true,
      message: 'Backend API is accessible from Vercel',
      data: data,
      testUrl,
      environment: {
        BASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
      }
    })

  } catch (error) {
    console.error('Vercel Test: Fetch error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to connect to backend API',
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      environment: {
        BASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
      }
    }, { status: 500 })
  }
} 