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
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false);
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
        // Close sticky menu when sticky header disappears
        setIsStickyMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menus when clicking outside or when sticky header state changes
  useEffect(() => {
    if (showStickyHeader) {
      setIsMobileMenuOpen(false);
    }
  }, [showStickyHeader]);

  // Common mobile menu content component
  const MobileMenuContent = ({ onClose }: { onClose: () => void }) => (
    <div className="bg-white shadow-xl border-t border-gray-100">
      {/* Mobile Search Bar */}
      <div className="px-4 sm:px-6 pt-6 pb-4">
        <div className="flex w-full">
          <input 
            type="text" 
            placeholder="Search for Product or Supplier..."
            className="flex-1 px-4 py-2.5 rounded-l-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 text-gray-800 placeholder-gray-500"
          />
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-r-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-md">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Main Navigation Section */}
      <div className="px-4 sm:px-6 pb-2">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
        <div className="space-y-1">
          <Link 
            href="/about" 
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-60"></div>
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-60"></div>
            Contact Us
          </Link>
          <Link 
            href="/blog" 
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-60"></div>
            Blog
          </Link>
          <Link 
            href="/waiting-list" 
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-[#00C298]/10 hover:text-[#00C298] transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-[#00C298] rounded-full mr-3 opacity-80"></div>
            Join Wait List
            <span className="ml-auto bg-[#00C298]/20 text-[#00C298] text-xs px-2 py-1 rounded-full font-semibold">Hot</span>
          </Link>
          <Link 
            href="/supplier" 
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-[#FF6501]/10 hover:text-[#FF6501] transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-[#FF6501] rounded-full mr-3 opacity-80"></div>
            See Supplier Feature
            <span className="ml-auto bg-[#FF6501]/20 text-[#FF6501] text-xs px-2 py-1 rounded-full font-semibold">New</span>
          </Link>
        </div>
      </div>
      
      {/* Quick Actions Section */}
      <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-100">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/waiting-list" onClick={onClose}>
            <button className="w-full bg-[#00C298] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#00C298]/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Join Wait List
            </button>
          </Link>
          <Link href="/supplier" onClick={onClose}>
            <button className="w-full bg-[#FF6501] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-[#FF6501]/90">
              See Supplier Feature
            </button>
          </Link>
        </div>
      </div>
      
      {/* Contact & Social Section */}
      <div className="px-4 sm:px-6 py-5 bg-gradient-to-r from-gray-50 to-green-50 border-t border-gray-100">
        <div className="text-center mb-4">
          <p className="text-gray-600 text-sm font-medium mb-1">Need Help?</p>
          <a href="tel:8085550111" className="inline-flex items-center text-green-700 font-bold text-lg hover:text-green-800 transition-colors">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            (808) 555-0111
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3">Follow Us</p>
          <div className="flex items-center justify-center space-x-5">
            <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
              <Linkedin className="w-5 h-5 text-blue-700" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
              <Instagram className="w-5 h-5 text-pink-600" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110">
              <Twitter className="w-5 h-5 text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Header - Always visible */}
      <header className="w-full relative">
        {/* Main Header */}
        <div style={{ backgroundColor: '#F5F5F5' }}>
          <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img 
                  src="/logos/kalabah-logo.png"
                  alt="Kalabah Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>

              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
                <div className="flex w-full">
                  <input 
                    type="text" 
                    placeholder="Search for Product or Supplier..."
                    className="flex-1 px-4 py-2.5 rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#00C298]"
                  />
                  <button className="bg-[#00C298] text-white px-5 py-2.5 rounded-r-xl hover:bg-[#00C298]/90 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons - Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Join Wait List button - full text on all screens */}
                <Link href="/waiting-list">
                  <button className="bg-[#00C298] text-white px-3 sm:px-4 lg:px-6 py-2.5 rounded-xl hover:bg-[#00C298]/90 transition-colors font-bold text-xs sm:text-sm lg:text-base">
                    Join Wait List
                  </button>
                </Link>
                
                {/* Desktop: Show Supplier Feature button */}
                <Link href="/supplier" className="hidden lg:block">
                  <button className="bg-[#FF6501] text-white px-6 py-2.5 rounded-xl transition-colors font-medium hover:bg-[#FF6501]/90">
                    See Supplier Feature
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button - Only show when sticky header is NOT visible */}
              <button 
                className={`md:hidden p-2 ${showStickyHeader ? 'invisible' : 'visible'}`}
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
          <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
            <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Left side - Navigation links */}
              <div className="hidden lg:flex items-center space-x-6">
                <Link href="/about" className="text-gray-700 hover:text-[#00C298] transition-colors font-medium">
                  About Us
                </Link>
                <div className="w-px h-4 bg-gray-300"></div>
                <Link href="/contact" className="text-gray-700 hover:text-[#00C298] transition-colors font-medium">
                  Contact Us
                </Link>
                <div className="w-px h-4 bg-gray-300"></div>
                <Link href="/waiting-list" className="text-gray-700 hover:text-[#00C298] transition-colors font-medium">
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
        </div>
        </div>

        {/* Main Header Mobile Menu - Only show when sticky header is NOT visible */}
        {isMobileMenuOpen && !showStickyHeader && (
          <div className="md:hidden relative z-40 animate-in slide-in-from-top duration-300">
            <MobileMenuContent onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </header>

      {/* Sticky Header - Only Middle Section */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Only the Middle Section */}
        <div style={{ backgroundColor: '#F5F5F5' }} className="shadow-lg">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img 
                  src="/logos/kalabah-logo.png"
                  alt="Kalabah Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>

              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
                <div className="flex w-full">
                  <input 
                    type="text" 
                    placeholder="Search for Product or Supplier..."
                    className="flex-1 px-4 py-2.5 rounded-l-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#00C298]"
                  />
                  <button className="bg-[#00C298] text-white px-5 py-2.5 rounded-r-xl hover:bg-[#00C298]/90 transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* CTA Buttons - Responsive */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Join Wait List button - full text on all screens */}
                <Link href="/waiting-list">
                  <button className="bg-[#00C298] text-white px-3 sm:px-4 lg:px-6 py-2.5 rounded-xl hover:bg-[#00C298]/90 transition-colors font-bold text-xs sm:text-sm lg:text-base">
                    Join Wait List
                  </button>
                </Link>
                
                {/* Desktop: Show Supplier Feature button */}
                <Link href="/supplier" className="hidden lg:block">
                  <button className="bg-[#FF6501] text-white px-6 py-2.5 rounded-xl transition-colors font-medium hover:bg-[#FF6501]/90">
                    See Supplier Feature
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button for Sticky Header */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsStickyMenuOpen(!isStickyMenuOpen)}
              >
                {isStickyMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Sticky Header Mobile Menu */}
        {isStickyMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-300">
            <MobileMenuContent onClose={() => setIsStickyMenuOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
};