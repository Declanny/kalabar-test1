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
  X,
  Globe
} from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStickyMenuOpen, setIsStickyMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMainLanguageOpen, setIsMainLanguageOpen] = useState(false);
  const [isStickyLanguageOpen, setIsStickyLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' });

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'ha', name: 'Hausa' }
  ];

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
    } else {
      // Close sticky language dropdown when sticky header disappears
      setIsStickyLanguageOpen(false);
    }
  }, [showStickyHeader]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsMainLanguageOpen(false);
        setIsStickyLanguageOpen(false);
        setIsMobileLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: { code: string; name: string }) => {
    setSelectedLanguage(language);
    setIsMainLanguageOpen(false);
    setIsStickyLanguageOpen(false);
    setIsMobileLanguageOpen(false);
  };

    // Language Dropdown Component
  const LanguageDropdown = ({ isMobile = false, dropdownId }: { isMobile?: boolean; dropdownId: 'main' | 'sticky' | 'mobile' }) => {
    const isOpen = dropdownId === 'main' ? isMainLanguageOpen : 
                   dropdownId === 'sticky' ? isStickyLanguageOpen : 
                   isMobileLanguageOpen;
    
    const setIsOpen = dropdownId === 'main' ? setIsMainLanguageOpen : 
                       dropdownId === 'sticky' ? setIsStickyLanguageOpen : 
                       setIsMobileLanguageOpen;

    const handleToggle = () => {
      // Close all other dropdowns first
      if (dropdownId === 'main') {
        setIsStickyLanguageOpen(false);
        setIsMobileLanguageOpen(false);
      } else if (dropdownId === 'sticky') {
        setIsMainLanguageOpen(false);
        setIsMobileLanguageOpen(false);
      } else {
        setIsMainLanguageOpen(false);
        setIsStickyLanguageOpen(false);
      }
      // Then toggle this one
      setIsOpen(!isOpen);
    };

    return (
      <div className={`language-dropdown relative ${isMobile ? 'w-full' : ''}`}>
        <button
          onClick={handleToggle}
          className={`flex items-center space-x-2 group ${
            isMobile 
              ? 'w-full justify-between px-4 py-3 text-[#424242] hover:bg-gray-50 rounded-[20px] border border-gray-200'
              : 'text-[#424242] hover:text-[#424242] transition-colors'
          } transition-all duration-200`}
        >
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Globe className="w-5 h-5 text-[#424242] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm font-semibold text-[#424242] group-hover:text-[#424242] transition-colors">
              {isMobile ? selectedLanguage.name : selectedLanguage.code.toUpperCase()}
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-[#424242] group-hover:text-[#424242] transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className={`absolute ${isMobile ? 'top-full left-0 mt-2' : 'top-full mt-2 right-0'} bg-white rounded-[20px] shadow-xl border border-gray-200 overflow-hidden z-50 ${isMobile ? 'w-full' : 'min-w-[220px]'} backdrop-blur-sm`}>
            <div className="p-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200 flex items-center space-x-3 rounded-[15px] group ${
                    selectedLanguage.code === language.code ? 'bg-gray-100 text-[#424242]' : 'text-[#424242] hover:text-[#424242]'
                  }`}
                >
                  <span className="font-medium flex-1">{language.name}</span>
                  <span className="text-xs text-gray-400 font-mono">{language.code.toUpperCase()}</span>
                  {selectedLanguage.code === language.code && (
                    <div className="w-2 h-2 bg-[#424242] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">More languages coming soon</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Enhanced Search Bar Component
  const SearchBar = ({ className = '' }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search for Product or Supplier..."
          className="w-full pl-11 pr-4 py-2.5 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#00C298] bg-white border border-[#424242]/20 transition-all duration-200"
        />
      </div>
    </div>
  );

  // Common mobile menu content component
  const MobileMenuContent = ({ onClose }: { onClose: () => void }) => (
    <div className="bg-white shadow-xl border-t border-gray-100">
      {/* Mobile Search Bar and Language Selector - Same Row */}
      <div className="px-4 sm:px-6 pt-6 pb-4">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex-shrink-0 relative">
            <LanguageDropdown isMobile={true} dropdownId="mobile" />
          </div>
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
            <button className="w-full bg-[#00C298] text-white px-4 py-3 rounded-[20px] font-semibold text-sm hover:bg-[#00C298]/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Join Wait List
            </button>
          </Link>
          <Link href="/supplier" onClick={onClose}>
            <button className="w-full bg-[#FF6501] text-white px-4 py-3 rounded-[20px] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-[#FF6501]/90">
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
          <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <img 
                  src="/logos/kalabah-logo.png"
                  alt="Kalabah Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>

                              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
                <div className="hidden md:flex flex-1 max-w-lg mx-4 lg:mx-8">
                  <SearchBar className="w-full" />
                </div>

                {/* Right Side Items */}
                <div className="flex items-center space-x-3 lg:space-x-4">
                  {/* Language Selector - Desktop */}
                  <div className="hidden lg:block">
                    <LanguageDropdown dropdownId="main" />
                  </div>

                {/* CTA Buttons - Responsive */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Join Wait List button */}
                  <Link href="/waiting-list">
                    <button className="border border-[#424242] text-[#424242] bg-transparent px-3 sm:px-4 lg:px-6 py-2.5 rounded-[20px] transition-colors font-bold text-xs sm:text-sm lg:text-base">
                      Join Wait List
                    </button>
                  </Link>
                  
                  {/* Desktop: Show Supplier Feature button */}
                  <Link href="/supplier" className="hidden lg:block">
                    <button className="bg-[#FF6501] text-white px-6 py-2.5 rounded-[20px] transition-colors font-medium hover:bg-[#FF6501]/90">
                      See Supplier Feature
                    </button>
                  </Link>
                </div>

                {/* Mobile Menu Button - Only show when sticky header is NOT visible */}
                <button 
                  className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ${showStickyHeader ? 'invisible' : 'visible'}`}
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
        <div style={{ backgroundColor: '#F5F5F5' }} className="shadow-lg backdrop-blur-sm">
          <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <img 
                  src="/logos/kalabah-logo.png"
                  alt="Kalabah Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </Link>

              {/* Search Bar - Hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-1 max-w-lg mx-4 lg:mx-8">
                <SearchBar className="w-full" />
              </div>

              {/* Right Side Items */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                {/* Language Selector - Desktop */}
                <div className="hidden lg:block">
                  <LanguageDropdown dropdownId="sticky" />
                </div>

                {/* CTA Buttons - Responsive */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Join Wait List button */}
                  <Link href="/waiting-list">
                    <button className="border border-[#424242] text-[#424242] bg-transparent px-3 sm:px-4 lg:px-6 py-2.5 rounded-[20px] transition-colors font-bold text-xs sm:text-sm lg:text-base">
                      Join Wait List
                    </button>
                  </Link>
                  
                  {/* Desktop: Show Supplier Feature button */}
                  <Link href="/supplier" className="hidden lg:block">
                    <button className="bg-[#FF6501] text-white px-6 py-2.5 rounded-[20px] transition-colors font-medium hover:bg-[#FF6501]/90">
                      See Supplier Feature
                    </button>
                  </Link>
                </div>

                {/* Mobile Menu Button for Sticky Header */}
                <button 
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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