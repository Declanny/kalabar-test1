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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00C298]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#00C298]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#00C298]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Top Section: Newsletter & Contact */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
            
            {/* Brand & Description */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00C298] to-[#00E6B8] bg-clip-text text-transparent mb-4">
                  Your Global Marketplace
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Connecting you to quality products worldwide with seamless delivery and exceptional service.
                </p>
              </div>
              
              {/* International Offices */}
              <div className="space-y-4">
                <h3 className="text-[#00C298] font-semibold text-lg">Global Offices</h3>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-[#00C298]/20 hover:border-[#00C298]/40 transition-all">
                    <div className="w-8 h-8 bg-[#00C298]/20 rounded-full flex items-center justify-center">
                      🇬🇧
                    </div>
                    <div>
                      <p className="text-white font-medium">Essex, England</p>
                      <p className="text-[#00C298] text-sm font-mono">hello@kalabah.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-[#00C298]/20 hover:border-[#00C298]/40 transition-all">
                    <div className="w-8 h-8 bg-[#00C298]/20 rounded-full flex items-center justify-center">
                      🇳🇬
                    </div>
                    <div>
                      <p className="text-white font-medium">Lagos, Nigeria</p>
                      <p className="text-[#00C298] text-sm font-mono">hello@kalabah.ng</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Business Hours: Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#00C298] font-semibold mb-6 text-lg">Company</h4>
                  <div className="space-y-3">
                    <Link href="/about" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      About Us
                    </Link>
                    <Link href="/careers" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      Careers
                    </Link>
                    <Link href="/blog" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      Blog
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[#00C298] font-semibold mb-6 text-lg">Support</h4>
                  <div className="space-y-3">
                    <Link href="/contact" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      Contact Us
                    </Link>
                    <Link href="/faq" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      FAQ
                    </Link>
                    <Link href="/shipping" className="block text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                      Shipping
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-[#00C298] font-semibold mb-6 text-lg">Business</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/supplier" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                    Become Supplier
                  </Link>
                  <Link href="/bulk" className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200">
                    Bulk Orders
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-[#00C298]/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Join VIP Club</h3>
                <p className="text-gray-300 mb-5 text-sm">
                  Get exclusive deals, early access, and special offers delivered straight to your inbox.
                </p>
                
                <form onSubmit={async (e) => {
                  e.preventDefault()
                  if (!email.trim()) {
                    setMessage('Please enter a valid email address')
                    setIsSuccess(false)
                    return
                  }
                  
                  setLoading(true)
                  setMessage('')
                  
                  try {
                    const result = await wishlistApi.addToWishlist(email)
                    if (result.success) {
                      setMessage('Welcome to VIP! 🎉')
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
                }} className="space-y-3">
                  
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-black/30 border border-[#00C298]/30 rounded-lg text-white placeholder-gray-400 outline-none focus:border-[#00C298] focus:bg-black/40 transition-all duration-300"
                      disabled={loading}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#00C298] rounded-full animate-pulse"></div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#00C298] to-[#00E6B8] text-black font-semibold rounded-lg hover:from-[#00E6B8] hover:to-[#00C298] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[#00C298]/25"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      'Join VIP Club →'
                    )}
                  </button>
                  
                  {message && (
                    <div className={`text-sm p-2 rounded-md text-center font-medium ${
                      isSuccess 
                        ? 'bg-[#00C298]/20 text-[#00C298] border border-[#00C298]/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {message}
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500 text-center">
                    No spam. Unsubscribe anytime. Privacy protected.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Available Countries */}
          <div className="text-center mb-12">
            <h3 className="text-[#00C298] font-semibold mb-6 text-lg">Available Worldwide</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <Link href="/gh" className="group flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full hover:bg-[#00C298]/20 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">🇬🇭</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm">Ghana</span>
              </Link>
              <Link href="/eg" className="group flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full hover:bg-[#00C298]/20 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">🇪🇬</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm">Egypt</span>
              </Link>
              <Link href="/ke" className="group flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full hover:bg-[#00C298]/20 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">🇰🇪</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm">Kenya</span>
              </Link>
              <Link href="/ug" className="group flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full hover:bg-[#00C298]/20 transition-all">
                <span className="text-xl group-hover:scale-110 transition-transform">🇺🇬</span>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm">Uganda</span>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#00C298]/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                <p className="text-sm">© 2025 All rights reserved • Built for the future</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm mr-3">Follow us:</span>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-[#00C298]/10 hover:bg-[#00C298]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#00C298]/20"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00C298] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-9 h-9 bg-[#00C298]/10 hover:bg-[#00C298]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#00C298]/20"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00C298] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-9 h-9 bg-[#00C298]/10 hover:bg-[#00C298]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#00C298]/20"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00C298] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-9 h-9 bg-[#00C298]/10 hover:bg-[#00C298]/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#00C298]/20"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00C298] transition-colors" fill="currentColor" viewBox="0 0 24 24">
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