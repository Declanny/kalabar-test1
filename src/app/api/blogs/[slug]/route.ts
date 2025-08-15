import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.kalabah.com'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    console.log('API: Fetching blog with slug:', slug)
    console.log('API: BASE_URL:', BASE_URL)

    // Use the BASE_URL as is since it already includes the correct path
    const apiUrl = `${BASE_URL}/v1/blogs/${slug}/`
    console.log('API: Final URL:', apiUrl)
    console.log('API: Making request to:', apiUrl)

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Kalabah-Frontend/1.0'
      },
      cache: 'no-cache'
    })

    console.log('API: Response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API: Error response:', errorText)
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API: Success response:', data)

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    console.error('Error fetching blog:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 