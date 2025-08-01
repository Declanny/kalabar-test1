'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  Globe,
  Phone,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  X,
  Star,
  Shield,
  Zap,
  MapPin,
  Bell
} from 'lucide-react';

// African pattern decoration component
const AfricanPattern = () => (
  <div className="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" viewBox="0 0 100 20">
      <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#african-pattern)" />
  </svg>
  </div>
);

// Floating elements component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-4 right-20 w-2 h-2 rounded-full animate-pulse opacity-60" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
    <div className="absolute top-8 right-40 w-1 h-1 rounded-full animate-bounce opacity-40" style={{backgroundColor: 'rgba(245, 124, 0, 0.8)'}}></div>
    <div className="absolute top-6 right-60 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50"></div>
  </div>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);

  // Marketplace products data
  const marketplaceProducts = [
    {
      name: "Premium Cocoa Beans",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg",
      flags: ["🇬🇭", "🇪🇹", "🇨🇮"]
    },
    {
      name: "Aba Traditional Fabrics", 
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif",
      flags: ["🇳🇬", "🇬🇭", "🇰🇪"]
    },
    {
      name: "Organic Cloves Spices",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif",
      flags: ["🇪🇬", "🇲🇦", "🇪🇹"]
    },
    {
      name: "Moringa Seeds Extract",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif",
      flags: ["🇲🇦", "🇳🇬", "🇬🇭"]
    },
    {
      name: "African Craft Items",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg",
      flags: ["🇰🇪", "🇹🇿", "🇿🇦"]
    },
    {
      name: "Bitter Kola Nuts",
      image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif",
      flags: ["🇳🇬", "🇬🇭", "🇨🇮"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
            <header className="w-full relative">
            
                 {/* Creative top announcement bar */}
         <div className="relative text-gray-800 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="relative z-10 w-full px-10 py-1.5 sm:py-2">
            <div className="flex items-center justify-center sm:justify-between">
              <div className="hidden sm:flex items-center space-x-3 lg:space-x-6">
                  <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm sm:text-lg">🌍</span>
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-gray-800">AFRICA'S #1 B2B HUB</div>
                    <div className="text-xs text-gray-600 hidden sm:block">50,000+ Active Suppliers</div>
                  </div>
                </div>
                <div className="h-6 sm:h-8 w-px bg-gray-300 hidden lg:block"></div>
                <div className="hidden lg:flex items-center space-x-1 text-sm text-gray-700">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">Live:</span>
                  <span className="text-orange-600">2,847 buyers online</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4 text-center sm:text-left">
                <div className="text-xs sm:text-sm font-bold bg-green-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full">
                  <span className="hidden sm:inline">🎉 FREE shipping on orders $500+</span>
                  <span className="sm:hidden">🎉 FREE shipping $500+</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-gray-700">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <select className="bg-transparent text-gray-700 text-xs font-medium border-none outline-none cursor-pointer">
                    <option value="en" className="text-black">🇺🇸 EN</option>
                    <option value="fr" className="text-black">🇫🇷 FR</option>
                    <option value="ar" className="text-black">🇸🇦 AR</option>
                  </select>
                </div>
              </div>
            </div>
                  </div>
                  </div>

                 {/* Main header with creative layout */}
         <div className="relative shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="w-full px-10 py-2 sm:py-3">
            <div className="flex items-center justify-between">
              
              {/* Creative Logo Section */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link href="/" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-90 transition-opacity">
                  <div className="relative group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                      <span className="font-bold text-lg sm:text-xl" style={{color: '#00C298'}}>K</span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex items-baseline space-x-2">
                      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                        Kalabah
                      </h1>
                  </div>
                  </div>
                </Link>
                
                {/* Marketplace Dropdown */}
                <div 
                  className="hidden lg:block relative"
                  onMouseEnter={() => setShowMarketplaceDropdown(true)}
                  onMouseLeave={() => setShowMarketplaceDropdown(false)}
                >
                  <div className="flex flex-col relative cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-orange-600 font-black">MARKETPLACE</span>
                      <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
                        NEW!
                </div>
                      <ChevronDown className="w-3 h-3 text-gray-600" />
                </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span>Connecting Africa & Beyond</span>
                </div>
              </div>
              
                  {/* Marketplace Dropdown Menu */}
                  {showMarketplaceDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-gray-900">Featured Products</h3>
                          <span className="text-sm text-gray-500">African Marketplace</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {marketplaceProducts.map((product, index) => (
                            <div key={index} className="group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                  />
                                </div>
                                                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-gray-900 text-sm truncate group-hover:text-green-600">
                                      {product.name}
                                    </h4>
                                    <div className="flex justify-end mt-1">
                                      <div className="flex space-x-0.5">
                                        {product.flags.slice(0, 3).map((flag, flagIndex) => (
                                          <span key={flagIndex} className="text-xs">{flag}</span>
                                        ))}
                                      </div>
              </div>
            </div>
          </div>
                            </div>
                          ))}
        </div>

                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <Link href="/marketplace">
                            <button className="w-full text-center py-2 text-sm font-medium text-white rounded-lg transition-colors" style={{backgroundColor: '#00C298'}}>
                              View All Products
                  </button>
                          </Link>
                        </div>
                      </div>
                </div>
                  )}
              </div>
            </div>

                             {/* Creative Search Section */}
               <div className="flex-1 max-w-2xl mx-4 hidden lg:block">
                 <div className="relative w-full">
                   <div className="flex bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 overflow-hidden hover:border-[rgba(245,124,0,0.6)]">
                     <div className="flex items-center pl-3 pr-2">
                       <Search size={18} className="text-gray-400" />
                      </div>
                                                       <input 
                    type="text" 
                    placeholder="Search for products, suppliers..."
                    className="flex-1 py-2.5 px-2 text-gray-700 text-sm focus:outline-none bg-transparent placeholder-gray-400"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                     <button className="text-white px-4 py-2.5 transition-all duration-300 flex items-center justify-center shadow-md hover:opacity-90" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}>
                       <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

              {/* Creative Action Buttons */}
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">

                {/* Notifications */}
                <div className="hidden sm:block relative">
                  <button className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      3
            </div>
                </button>
                </div>

                {/* Cart */}
                <div className="relative">
                  <button className="p-2 sm:p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg sm:rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                </button>
                </div>

                                 {/* Sign In - Creative Button */}
                 <Link href="/waiting-list">
                   <button className="hidden sm:flex items-center space-x-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-2 sm:px-3 py-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md">
                     <User className="w-3 h-3 sm:w-4 sm:h-4" />
                     <span className="font-medium text-xs sm:text-sm">Sign In</span>
                </button>
                 </Link>

                 {/* Join Wait List - Eye-catching button */}
                 <Link href="/waiting-list">
                   <button className="text-white px-2 sm:px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group hover:opacity-90" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}>
                     <span className="relative z-10 text-xs sm:text-sm whitespace-nowrap">Join wait list</span>
                   </button>
                 </Link>

                                                  {/* Become Supplier - Special badge */}
                 <div className="hidden lg:block relative">
                   <Link href="/supplier">
                     <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 sm:px-3 py-2 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 relative">
                       <div className="flex items-center space-x-1">
                         <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                         <span className="text-xs sm:text-sm whitespace-nowrap">See Supplier Features</span>
                       </div>
                       <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs px-1 sm:px-1.5 py-0.5 rounded-full font-bold animate-bounce">
                         2025!
                       </div>
                </button>
                   </Link>
                 </div>

                                 {/* Mobile menu */}
                 <button 
                   className="sm:hidden p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 >
                   {isMobileMenuOpen ? <X className="w-4 h-4 text-gray-700" /> : <Menu className="w-4 h-4 text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </div>

                 {/* Creative Navigation Bar */}
         <div className="hidden lg:block bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
           <div className="w-full px-10 py-2">
             <div className="flex items-center justify-between">
               <div className="flex-1 max-w-4xl">
                 <div className="relative">
                   {/* Categories Carousel */}
                   <div className="overflow-x-auto scrollbar-hide">
                     <nav className="flex items-center space-x-6 min-w-max pb-1">
                       <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                         Agriculture
                         <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                       </a>
                                                <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Textiles
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Electronics
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Machinery
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Food & Beverage
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Construction
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Health & Medical
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Automotive
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Chemicals
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Beauty & Personal Care
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Sports & Recreation
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                         <a href="#" className="text-gray-700 font-medium transition-colors relative group text-sm whitespace-nowrap hover:text-[rgba(245,124,0,1)]">
                           Packaging & Printing
                           <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}></div>
                         </a>
                     </nav>
                 </div>
            
                   {/* Scroll Fade Effect */}
                   <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
                       </div>
                     </div>
                    
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>2,847 suppliers online</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+234 800 KALABAH</span>
                    </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Menu</h3>
                  <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
              </div>
                </div>

                <nav className="space-y-3">
                  {/* Auth Buttons */}
                  <Link href="/auth/login" className="block py-3 px-4 bg-gray-100 rounded-lg text-gray-800 font-medium text-center">
                    <User className="w-4 h-4 inline mr-2" />
                    Sign In
                  </Link>
                  <Link href="/auth/register" className="block py-3 px-4 text-white rounded-lg font-bold text-center" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}>
                    Join wait list
                  </Link>
                  <Link href="/supplier" className="block py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-center">
                    <Star className="w-4 h-4 inline mr-2" />
                    Become a Supplier
                  </Link>

                  {/* Categories */}
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Agriculture</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Textiles</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Electronics</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Machinery</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Food & Beverage</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Construction</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Health & Medical</a>
                      <a href="#" className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded">Automotive</a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+234 800 KALABAH</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">50,000+ Active Suppliers</span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Sticky Header */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg border-b">
          <div className="w-full px-10 py-1.5 sm:py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-90 transition-opacity">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <span className="font-bold text-sm sm:text-base" style={{color: 'rgba(46, 125, 50, 1)'}}>K</span>
                </div>
                <span className="font-bold text-gray-800 text-sm sm:text-base">Kalabah</span>
              </Link>

              <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg mx-3 sm:mx-6 hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">

                {/* Cart */}
                <div className="relative">
                  <button className="p-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group">
                    <ShoppingCart className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      7
                    </div>
                  </button>
                </div>

                {/* Actions */}
                <Link href="/auth/login">
                  <button className="hidden sm:flex items-center space-x-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-2 sm:px-3 py-2 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md">
                    <User className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium text-xs sm:text-sm">Sign In</span>
                  </button>
                </Link>
                
                <Link href="/auth/register">
                  <button className="text-white px-2 sm:px-3 py-2 rounded-lg font-bold hover:shadow-lg transition-all duration-300" style={{backgroundColor: 'rgba(245, 124, 0, 1)'}}>
                    <span className="text-xs sm:text-sm">Join wait list</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 