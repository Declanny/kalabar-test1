import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://api.kalabah.com'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'

    // Use the correct popular blogs endpoint
    const apiUrl = `${BASE_URL}/api/v1/blogs/popular/?page=${page}`

    console.log('Popular blogs API URL:', apiUrl)

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      console.error('Popular blogs API Error Status:', response.status)
      console.error('Popular blogs API Error Text:', await response.text())
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Popular blogs API Response:', data)

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    console.error('Error fetching popular blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch popular blogs' },
      { status: 500 }
    )
  }
} 