import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable is not set')
}

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

    const apiUrl = `${BASE_URL}/api/v1/blogs/?${params.toString()}`

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
} 