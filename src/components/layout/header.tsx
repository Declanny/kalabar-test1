'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Menu,
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  X
} from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show sticky header when scrolling down and past 150px
      if (currentScrollY > 150) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Main Header - Always visible */}
      <header className="w-full">
        {/* Top Bar - Neutral Dark */}
        <div className="text-white" style={{ backgroundColor: 'rgba(33, 33, 33, 1)' }}>
          <div className="w-full px-4 sm:px-6 lg:px-10 py-1">
            <div className="flex items-center justify-between">
              {/* Left side - Empty for now */}
              <div></div>
              
              {/* Right side - Social links and language selector */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="hidden sm:flex items-center space-x-3">
                  <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400 transition-colors" />
                  <Linkedin className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" />
                  <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-400 transition-colors" />
                  <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex items-center space-x-2 cursor-pointer px-2 py-1 rounded transition-colors hover:bg-opacity-80" style={{ backgroundColor: 'rgba(33, 33, 33, 1)' }}>
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm hidden sm:block">EN</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header - Light Green */}
        <div style={{ backgroundColor: 'rgba(194, 232, 196, 1)' }}>
          <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">k</span>
                </div>
                <span className="text-gray-800 font-bold text-lg sm:text-xl">Kalabah</span>
              </Link>

              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
                <div className="flex w-full">
                  <input 
                    type="text" 
                    placeholder="Search for Product or Supplier..."
                    className="flex-1 px-4 py-2.5 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-orange-500 text-white px-5 py-2.5 rounded-r-lg hover:bg-orange-600 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons - Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Join Wait List button - full text on all screens */}
                <Link href="/waiting-list">
                  <button className="bg-orange-500 text-white px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold text-xs sm:text-sm lg:text-base">
                    Join Wait List
                  </button>
                </Link>
                
                {/* Desktop: Show Supplier Feature button */}
                <Link href="/supplier" className="hidden lg:block">
                  <button className="text-white px-6 py-3 rounded-lg transition-colors font-medium hover:bg-opacity-90" style={{ backgroundColor: 'rgba(21, 101, 192, 1)' }}>
                    See Supplier Feature
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
              
        {/* Bottom Navigation Bar - White */}
        <div className="bg-white border-b border-gray-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Navigation links */}
              <div className="hidden lg:flex items-center space-x-6">
                <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  About Us
                </Link>
                <div className="w-px h-4 bg-gray-300"></div>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Contact Us
                </Link>
                <div className="w-px h-4 bg-gray-300"></div>
                <Link href="/waiting-list" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Join Wait List
                </Link>
              </div>

              {/* Right side - Contact info */}
              <div className="hidden sm:block text-gray-700 font-medium">
                Contact: (808) 555-0111
              </div>
              
              {/* Mobile: Show contact info */}
              <div className="lg:hidden text-gray-700 font-medium text-sm">
                (808) 555-0111
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {/* Mobile Search Bar */}
              <div className="flex w-full mb-4">
                <input 
                  type="text" 
                  placeholder="Search for Product or Supplier..."
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-orange-500 text-white px-4 py-3 rounded-r-lg hover:bg-orange-600 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <Link href="/about" className="block text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100">
                Contact Us
              </Link>
              <Link href="/waiting-list" className="block text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100">
                Join Wait List
              </Link>
              <Link href="/supplier" className="block text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100">
                See Supplier Feature
              </Link>
              
              {/* Social Links */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 mb-3">
                  <Facebook className="w-5 h-5 text-gray-600" />
                  <Linkedin className="w-5 h-5 text-gray-600" />
                  <Instagram className="w-5 h-5 text-gray-600" />
                  <Twitter className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-700 text-sm">Contact: (808) 555-0111</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Header - Only Middle Section */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Only the Middle Section - Light Green */}
        <div style={{ backgroundColor: 'rgba(194, 232, 196, 1)' }} className="shadow-lg">
          <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">k</span>
                </div>
                <span className="text-gray-800 font-bold text-lg sm:text-xl">Kalabah</span>
              </Link>

              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
                <div className="flex w-full">
                  <input 
                    type="text" 
                    placeholder="Search for Product or Supplier..."
                    className="flex-1 px-4 py-2.5 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-orange-500 text-white px-5 py-2.5 rounded-r-lg hover:bg-orange-600 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons - Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Join Wait List button - full text on all screens */}
                <Link href="/waiting-list">
                  <button className="bg-orange-500 text-white px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold text-xs sm:text-sm lg:text-base">
                    Join Wait List
                  </button>
                </Link>
                
                {/* Desktop: Show Supplier Feature button */}
                <Link href="/supplier" className="hidden lg:block">
                  <button className="text-white px-6 py-3 rounded-lg transition-colors font-medium hover:bg-opacity-90" style={{ backgroundColor: 'rgba(21, 101, 192, 1)' }}>
                    See Supplier Feature
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}; 