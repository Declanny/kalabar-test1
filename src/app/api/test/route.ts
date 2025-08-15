import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.kalabah.com'

export async function GET(request: NextRequest) {
  try {
    console.log('Test API: BASE_URL:', BASE_URL)
    console.log('Test API: Environment variables:', {
      NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
      NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
      NODE_ENV: process.env.NODE_ENV
    })

    const apiUrl = `${BASE_URL}/v1/blogs/`
    console.log('Test API: Making request to:', apiUrl)

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Kalabah-Frontend/1.0'
      },
      cache: 'no-cache'
    })

    console.log('Test API: Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Test API: Error response:', errorText)
      return NextResponse.json({
        success: false,
        error: `API responded with status: ${response.status}`,
        details: errorText
      }, { status: response.status })
    }

    const data = await response.json()
    console.log('Test API: Success response:', data)

    return NextResponse.json({
      success: true,
      data: data,
      environment: {
        BASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL
      }
    })
  } catch (error) {
    console.error('Test API: Error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 