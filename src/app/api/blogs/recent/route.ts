import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.kalabah.com'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'

    console.log('BASE_URL:', BASE_URL)
    const apiUrl = `${BASE_URL}/v1/blogs/?page=${page}`
    console.log('API URL:', apiUrl)

    const response = await fetch(apiUrl, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
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
    console.error('Error fetching recent blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recent blogs' },
      { status: 500 }
    )
  }
} 