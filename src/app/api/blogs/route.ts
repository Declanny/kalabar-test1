import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.kalabah.com'

console.log('BASE_URL:', BASE_URL)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page')
    const search = searchParams.get('search')
    const category = searchParams.get('category')
    const blogger_name = searchParams.get('blogger_name')
    const status = searchParams.get('status')

    // Build query parameters
    const params = new URLSearchParams()
    if (page) params.append('page', page)
    if (search) params.append('search', search)
    if (category) params.append('category', category)
    if (blogger_name) params.append('blogger_name', blogger_name)
    if (status) params.append('status', status)

    // Use the BASE_URL as is since it already includes the correct path
    const apiUrl = params.toString() 
      ? `${BASE_URL}/v1/blogs/?${params.toString()}`
      : `${BASE_URL}/v1/blogs/`
    console.log('BASE_URL:', BASE_URL)
    console.log('API URL:', apiUrl)
    console.log('Params:', params.toString())

    console.log('Making fetch request to:', apiUrl)
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Kalabah-Frontend/1.0'
      },
      cache: 'no-cache'
    })

    if (!response.ok) {
      console.error('API Error Status:', response.status)
      console.error('API Error Text:', await response.text())
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log('API Response:', data)

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { error: 'Failed to fetch blogs', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 