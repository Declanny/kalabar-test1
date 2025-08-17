'use client'

import Link from 'next/link'
import { useState } from 'react'
import { wishlistApi } from '@/lib/wishlist-api'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B4513]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#8B4513]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#8B4513]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Top Section - 5 Column Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            
            {/* Get Support */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Get support</h4>
              <div className="space-y-3">
                <Link href="/help" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Help Center
                </Link>
                <Link href="/live-chat" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Live chat
                </Link>
                <Link href="/order-status" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Check order status
                </Link>
                <Link href="/refunds" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Refunds
                </Link>
                <Link href="/report" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Report abuse
                </Link>
              </div>
              
              {/* Contact Offices moved here */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🇬🇧</span>
                  <div className="text-left">
                    <p className="text-gray-300 text-xs">hello@kalabah.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🇳🇬</span>
                  <div className="text-left">
                    <p className="text-gray-300 text-xs">hello@kalabah.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payments and protections */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Payments and protections</h4>
              <div className="space-y-3">
                <Link href="/safe-payments" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Safe and easy payments
                </Link>
                <Link href="/money-back" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Money-back policy
                </Link>
                <Link href="/shipping" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  On-time shipping
                </Link>
                <Link href="/after-sales" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  After-sales protections
                </Link>
                <Link href="/monitoring" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Product monitoring services
                </Link>
              </div>
            </div>

            {/* Source on Kalabah */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Source on Kalabah</h4>
              <div className="space-y-3">
                <Link href="/quotation" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Request for Quotation
                </Link>
                <Link href="/membership" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Membership program
                </Link>
                <Link href="/logistics" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Kalabah Logistics
                </Link>
                <Link href="/sales-tax" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Sales tax and VAT
                </Link>
                <Link href="/reads" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Kalabah Reads
                </Link>
              </div>
            </div>

            {/* Sell on Kalabah */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Sell on Kalabah</h4>
              <div className="space-y-3">
                <Link href="/start-selling" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Start selling
                </Link>
                <Link href="/seller-central" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Seller Central
                </Link>
                <Link href="/verified-supplier" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Become a Verified Supplier
                </Link>
                <Link href="/partnerships" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Partnerships
                </Link>
              </div>
            </div>

            {/* Get to know us + Subscribe */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Get to know us</h4>
              <div className="space-y-3 mb-6">
                <Link href="/about" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  About us
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </div>

              {/* Newsletter Subscription - removed border and background */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <h5 className="text-white font-medium mb-2 text-sm">Stay Updated</h5>
                <p className="text-gray-300 mb-3 text-xs">
                  Get launch updates and exclusive offers.
                </p>
                
                <form onSubmit={async (e) => {
                  e.preventDefault()
                  if (!email.trim()) {
                    setMessage('Please enter a valid email')
                    setIsSuccess(false)
                    return
                  }
                  
                  setLoading(true)
                  setMessage('')
                  
                  try {
                    const result = await wishlistApi.addToWishlist(email)
                    if (result.success) {
                      setMessage('Subscribed! 🎉')
                      setIsSuccess(true)
                      setEmail('')
                    } else {
                      setMessage(result.message || 'Something went wrong')
                      setIsSuccess(false)
                    }
                  } catch (error) {
                    setMessage('Please try again')
                    setIsSuccess(false)
                  } finally {
                    setLoading(false)
                  }
                }} className="space-y-2">
                  
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-black/30 rounded text-white placeholder-gray-400 text-xs outline-none focus:border-[#8B4513] transition-all"
                    disabled={loading}
                  />
                  
                  <button 
                    type="submit"
                    className="w-full py-2 bg-[#00C298] text-white font-medium rounded text-xs hover:bg-[#00C298]/90 transition-all"
                    disabled={loading}
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                  
                  {message && (
                    <div className={`text-xs p-1 rounded text-center ${
                      isSuccess 
                        ? 'bg-[#8B4513]/20 text-[#8B4513]' 
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Payment Icons Row */}
              <div className="flex items-center gap-2">
                {/* Security Badge */}
                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ID</span>
                  </div>
                  <span className="text-gray-300 text-xs">Check</span>
                </div>

                {/* SSL Badge */}
                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300 text-xs">SSL</span>
                </div>

                {/* Shield Badge */}
                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">🛡</span>
                  </div>
                  <span className="text-gray-300 text-xs">Verified</span>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">VISA</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">Mastercard</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">PayPal</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">Paystack</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">Stripe</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">JCB</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
                  <span className="text-white text-xs font-medium">UnionPay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#8B4513]/20 pt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                <p className="text-sm">© 2025 All rights reserved • Built for the future</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                <a 
                  href="#" 
                  className="w-7 h-7 bg-[#8B4513]/10 hover:bg-[#8B4513]/20 rounded-lg flex items-center justify-center transition-all group"
                  aria-label="Facebook"
                >
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#8B4513] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-7 h-7 bg-[#8B4513]/10 hover:bg-[#8B4513]/20 rounded-lg flex items-center justify-center transition-all group"
                  aria-label="Twitter"
                >
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#8B4513] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-7 h-7 bg-[#8B4513]/10 hover:bg-[#8B4513]/20 rounded-lg flex items-center justify-center transition-all group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#8B4513] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.222V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-7 h-7 bg-[#8B4513]/10 hover:bg-[#8B4513]/20 rounded-lg flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-[#8B4513] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}