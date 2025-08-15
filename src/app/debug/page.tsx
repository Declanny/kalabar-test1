'use client'

import { useState, useEffect } from 'react'

export default function DebugPage() {
  const [testResults, setTestResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runTests = async () => {
    setLoading(true)
    try {
      // Test 1: Check environment variables
      const envTest = {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
        NODE_ENV: process.env.NODE_ENV,
        window_location: typeof window !== 'undefined' ? window.location.origin : 'Server-side'
      }

      // Test 2: Test API endpoint
      const apiResponse = await fetch('/api/test')
      const apiData = await apiResponse.json()

      // Test 3: Test blogs endpoint
      const blogsResponse = await fetch('/api/blogs')
      const blogsData = await blogsResponse.json()

      setTestResults({
        environment: envTest,
        apiTest: apiData,
        blogsTest: blogsData,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      setTestResults({
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">API Debug Page</h1>
      
      <button 
        onClick={runTests}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 disabled:opacity-50"
      >
        {loading ? 'Running Tests...' : 'Run API Tests'}
      </button>

      {testResults && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Environment Variables</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(testResults.environment, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">API Test Results</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(testResults.apiTest, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Blogs API Test Results</h2>
            <pre className="text-sm overflow-auto">
              {JSON.stringify(testResults.blogsTest, null, 2)}
            </pre>
          </div>

          <div className="text-sm text-gray-600">
            Test run at: {testResults.timestamp}
          </div>
        </div>
      )}
    </div>
  )
} 