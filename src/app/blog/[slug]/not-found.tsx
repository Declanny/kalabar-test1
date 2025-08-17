import Link from 'next/link'
import { SupplierNavbar } from "@/components/layout/supplier-navbar"
import { Footer } from "@/components/layout/Footer"

export default function BlogNotFound() {
  return (
    <>
      <SupplierNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h2>
            <p className="text-gray-600 mb-4">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <div className="space-y-2">
              <Link
                href="/blog"
                className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
              >
                Browse All Blog Posts
              </Link>
              <Link
                href="/"
                className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full text-center"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
} 