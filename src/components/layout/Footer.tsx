import Link from 'next/link'

export const Footer = () => {
  return (
    <footer 
      className="py-8 text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dqbbm0guw/image/upload/v1753426506/b659b8647d2c02f56acdd7270043e4d7fc37edd6_ovckru.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content above overlay */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-white">Company</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/about" className="block hover:text-white transition-colors">About us</Link>
              <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
              <Link href="/blog" className="block hover:text-white transition-colors">Our Blog</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white">Customer Service</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/returns" className="block hover:text-white transition-colors">Return and refund policy</Link>
              <Link href="/shipping" className="block hover:text-white transition-colors">Shipping info</Link>
              <Link href="/reports" className="block hover:text-white transition-colors">Report suspicious activity</Link>
              <Link href="/why-kalabah" className="block hover:text-white transition-colors">Why Kalabah</Link>
              <Link href="/faq" className="block hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white">Help</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/contact" className="block hover:text-white transition-colors">Contact us</Link>
              <Link href="/support" className="block hover:text-white transition-colors">Support center</Link>
              <Link href="/safety" className="block hover:text-white transition-colors">Safety center</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white">Work with Kalabah</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/supplier" className="block hover:text-white transition-colors">Become a Supplier</Link>
              <Link href="/bulk" className="block hover:text-white transition-colors">Buy in Bulk</Link>
              <Link href="/partner" className="block hover:text-white transition-colors">Partner with Kalabah</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-white">Kalabah International</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/gh" className="block hover:text-white transition-colors">Ghana</Link>
              <Link href="/eg" className="block hover:text-white transition-colors">Egypt</Link>
              <Link href="/ke" className="block hover:text-white transition-colors">Kenya</Link>
              <Link href="/ug" className="block hover:text-white transition-colors">Uganda</Link>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Sign up to our Newsletter to get VIP updates</h3>
          <div className="flex justify-center max-w-[280px] sm:max-w-md mx-auto">
            <div className="flex w-full bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-3 sm:px-4 py-2 text-gray-800 outline-none text-sm sm:text-base"
              />
              <button 
                className="px-4 sm:px-6 py-2 text-white font-medium text-sm sm:text-base"
                style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        
        {/* Artistic Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 tracking-wider">
            <span className="inline-block" style={{
              background: 'linear-gradient(45deg, #8B4513, #D2691E, #CD853F, #DEB887)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              kalabah
            </span>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-4 sm:space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-xs sm:text-sm font-medium text-gray-300">Follow us on:</span>
              <div className="flex space-x-2 sm:space-x-3">
                <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full hover:bg-blue-500 transition-all duration-300 flex items-center justify-center group">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full hover:bg-pink-600 transition-all duration-300 flex items-center justify-center group">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                  </svg>
                </a>
              </div>
            </div>
        
          </div>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="text-xs sm:text-sm text-gray-400">
              Kalabah.com © 2025 All rights reserved
            </div>
        
          </div>
        </div>
      </div>
    </footer>
  )
} 