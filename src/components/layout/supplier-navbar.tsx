'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu,
  ChevronDown,
  X,
  Globe,
  ArrowRight,
  Package,
  Shield,
  Truck,
  Users,
  Apple,
  Building2,
  Search
} from 'lucide-react';

export const SupplierNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' });
  
  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'ha', name: 'Hausa' }
  ];

  // Category data structure
  const categories = [
    {
      id: 'food-agricultural',
      name: 'Food & Agricultural Produce',
      icon: Apple,
      subcategories: [
        { 
          name: 'Fresh Fruits & Vegetables', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/932802fd03458d93b4c8a1441d79dbdb3e6ffc72_hsj4i4.jpg',
          items: ['Fresh Fruits', 'Fresh Vegetables', 'Organic Produce'] 
        },
        { 
          name: 'Grains & Cereals', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg',
          items: ['Rice', 'Wheat', 'Corn', 'Millet'] 
        },
        { 
          name: 'Dairy Products', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg',
          items: ['Milk', 'Cheese', 'Yogurt', 'Butter'] 
        },
        { 
          name: 'Meat & Poultry', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg',
          items: ['Beef', 'Chicken', 'Pork', 'Lamb'] 
        }
      ]
    },
    {
      id: 'building-materials',
      name: 'Building Materials',
      icon: Building2,
      subcategories: [
        { 
          name: 'Cement & Concrete', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Portland Cement', 'Concrete Mix', 'Mortar'] 
        },
        { 
          name: 'Steel & Metal Products', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Steel Bars', 'Metal Sheets', 'Pipes'] 
        },
        { 
          name: 'Wood & Timber', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Plywood', 'Hardwood', 'Softwood'] 
        },
        { 
          name: 'Plumbing Materials', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Pipes', 'Fittings', 'Valves'] 
        }
      ]
    },
    {
      id: 'packaged-consumer-goods',
      name: 'Packaged Consumer Goods',
      icon: Package,
      subcategories: [
        { 
          name: 'Beverages & Drinks', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg',
          items: ['Soft Drinks', 'Juices', 'Water', 'Energy Drinks'] 
        },
        { 
          name: 'Snacks & Confectionery', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/a248517ac57d42d7cb87597055251fbd64ca5e41_hjzvc4.jpg',
          items: ['Chips', 'Candies', 'Nuts', 'Biscuits'] 
        },
        { 
          name: 'Personal Care Products', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg',
          items: ['Soap', 'Shampoo', 'Toothpaste', 'Deodorant'] 
        },
        { 
          name: 'Household Items', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
          items: ['Cleaning Supplies', 'Kitchen Items', 'Storage'] 
        }
      ]
    },
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Package,
      subcategories: [
        { 
          name: 'Smartphones', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['iPhone', 'Samsung', 'Xiaomi', 'Huawei'] 
        },
        { 
          name: 'Laptops', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['MacBook', 'Dell', 'HP', 'Lenovo'] 
        },
        { 
          name: 'Tablets', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['iPad', 'Samsung Tab', 'Amazon Fire'] 
        },
        { 
          name: 'Accessories', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Cases', 'Chargers', 'Headphones'] 
        }
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion & Apparel',
      icon: Users,
      subcategories: [
        { 
          name: 'Men\'s Clothing', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg',
          items: ['T-Shirts', 'Jeans', 'Suits', 'Shoes'] 
        },
        { 
          name: 'Women\'s Clothing', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg',
          items: ['Dresses', 'Tops', 'Skirts', 'Handbags'] 
        },
        { 
          name: 'Kids & Baby', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg',
          items: ['Baby Clothes', 'Kids Shoes', 'Toys'] 
        },
        { 
          name: 'Jewelry', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097027/705713801b454a582c6206b74f7023da8c17b394_hrzitd.jpg',
          items: ['Necklaces', 'Rings', 'Earrings', 'Watches'] 
        }
      ]
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: Truck,
      subcategories: [
        { 
          name: 'Car Parts', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Engine Parts', 'Brake Systems', 'Suspension'] 
        },
        { 
          name: 'Car Accessories', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Seat Covers', 'Floor Mats', 'Dash Cams'] 
        },
        { 
          name: 'Motorcycle Parts', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Helmets', 'Jackets', 'Gloves'] 
        },
        { 
          name: 'Tools', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097456/635727b4c13b46865f522b201894b5fb88c62b53_wmw062.jpg',
          items: ['Wrenches', 'Screwdrivers', 'Diagnostic Tools'] 
        }
      ]
    },
    {
      id: 'home',
      name: 'Home & Garden',
      icon: Shield,
      subcategories: [
        { 
          name: 'Furniture', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
          items: ['Living Room', 'Bedroom', 'Kitchen', 'Office'] 
        },
        { 
          name: 'Home Decor', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
          items: ['Wall Art', 'Candles', 'Vases', 'Mirrors'] 
        },
        { 
          name: 'Kitchen & Dining', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
          items: ['Cookware', 'Utensils', 'Appliances'] 
        },
        { 
          name: 'Garden', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097069/9dcb0c0050f9a74d24653322927aa30c8aefc427_zzv1sw.png',
          items: ['Plants', 'Tools', 'Outdoor Furniture'] 
        }
      ]
    },
    {
      id: 'health',
      name: 'Health & Beauty',
      icon: Users,
      subcategories: [
        { 
          name: 'Skincare', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg',
          items: ['Face Creams', 'Serums', 'Masks', 'Sunscreen'] 
        },
        { 
          name: 'Makeup', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg',
          items: ['Foundation', 'Lipstick', 'Eyeshadow', 'Mascara'] 
        },
        { 
          name: 'Hair Care', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg',
          items: ['Shampoo', 'Conditioner', 'Styling Products'] 
        },
        { 
          name: 'Personal Care', 
          image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1755097130/1be2af44cc0e5911aace02faf24b3f99cc8c6115_sw8nvo.jpg',
          items: ['Oral Care', 'Body Care', 'Fragrances'] 
        }
      ]
    }
  ];

  // Order protections data
  const orderProtections = [
    {
      id: 'insurance',
      name: 'Order Insurance',
      icon: Shield,
      items: [
        { name: 'Full Coverage', description: 'Complete protection', price: '2.5%' },
        { name: 'Basic Coverage', description: 'Essential protection', price: '1.5%' }
      ]
    },
    {
      id: 'guarantee',
      name: 'Quality Guarantee',
      icon: Package,
      items: [
        { name: '30-Day Return', description: 'Money back guarantee', price: 'Free' },
        { name: 'Quality Check', description: 'Pre-shipment inspection', price: '$15' }
      ]
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: Users,
      items: [
        { name: '24/7 Chat', description: 'Instant assistance', price: 'Free' },
        { name: 'Priority Support', description: 'VIP customer service', price: '$25' }
      ]
    }
  ];

  // Navigation items with dropdowns
  const navigationItems = [
    { id: 'categories', name: 'All categories', hasDropdown: true },
    { id: 'protection', name: 'Order protections', hasDropdown: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryHover = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleDropdownToggle = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    setSelectedCategory(null);
  };

  // Check if any dropdown is active
  const isDropdownActive = activeDropdown !== null;

  // Unified Dropdown Component
  const UnifiedDropdown = () => {
    const renderContent = () => {
      switch (activeDropdown) {
        case 'categories':
          const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
          return (
            <div className="flex">
              {/* Left Sidebar - Categories */}
              <div className="w-1/4 bg-gray-50 p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div
                        key={category.id}
                        onMouseEnter={() => handleCategoryHover(category.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                          selectedCategory === category.id
                            ? 'bg-white shadow-sm border border-gray-200 text-gray-900'
                            : 'hover:bg-white hover:shadow-sm text-gray-700'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium text-sm">{category.name}</span>
                        {selectedCategory === category.id && (
                          <ArrowRight className="w-4 h-4 ml-auto" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Content - Subcategories */}
              <div className="flex-1 p-4">
                {selectedCategoryData ? (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      {(() => {
                        const IconComponent = selectedCategoryData.icon;
                        return <IconComponent className="w-5 h-5 mr-2" />;
                      })()}
                      {selectedCategoryData.name}
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      {selectedCategoryData.subcategories.map((subcategory, index) => (
                        <Link
                          key={index}
                          href={`/marketplace/category/${selectedCategory}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="group cursor-pointer"
                        >
                          <div className="text-center">
                            <div className="bg-white rounded-full border border-gray-200 hover:border-[#00C298] hover:shadow-md transition-all duration-200 p-0 h-32 w-32 mx-auto mb-2 flex items-center justify-center">
                              <img 
                                src={subcategory.image}
                                alt={subcategory.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-[#00C298] text-center leading-tight">
                              {subcategory.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Package className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Select a Category</h3>
                    <p className="text-gray-500 text-lg">Choose a category from the sidebar to see available products</p>
                  </div>
                )}
              </div>
            </div>
          );

        case 'protection':
          return (
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Order Protections</h3>
              <div className="grid grid-cols-3 gap-6">
                {orderProtections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={section.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-6 h-6 text-gray-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-900">{section.name}</h4>
                      </div>
                      <div className="space-y-3">
                        {section.items.map((item, index) => (
                          <div
                            key={index}
                            className="p-3 bg-white rounded-lg border border-gray-200"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-medium text-gray-900 text-sm">{item.name}</h5>
                              <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div className="bg-white shadow-xl border-t border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          {renderContent()}
        </div>
      </div>
    );
  };

  // Language Dropdown Component
  const LanguageDropdown = () => {
    const handleToggle = () => {
      setIsLanguageOpen(!isLanguageOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.language-dropdown')) {
          setIsLanguageOpen(false);
        }
      };

      if (isLanguageOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isLanguageOpen]);

    return (
      <div className="relative language-dropdown">
        <button
          onClick={handleToggle}
          className="flex items-center space-x-1 text-[#424242] hover:text-[#00C298] transition-colors duration-200"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{selectedLanguage.name}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
        </button>

        {isLanguageOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setSelectedLanguage(language);
                    setIsLanguageOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
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
            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative w-full">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="Search for Product or Supplier..."
                    className="w-full pl-4 pr-32 py-2.5 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white border border-[#424242]/20 transition-all duration-200"
                  />
                  <button className="absolute right-1 px-4 py-2 rounded-[18px] flex items-center gap-2 bg-[#00C298] text-white hover:bg-[#00C298]/90 transition-all duration-200">
                    <Search className="w-4 h-4" />
                    <span className="text-sm font-medium">Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Items */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Language Selector - Desktop */}
              <div className="hidden lg:block">
                <LanguageDropdown />
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>


      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {/* Mobile Search Bar */}
              <div className="pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for Product or Supplier..."
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C298]/20 focus:border-[#00C298] transition-all duration-200"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-1">
                <Link 
                  href="/blog" 
                  className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-60"></div>
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-60"></div>
                  Contact
                </Link>
                <Link 
                  href="/waiting-list" 
                  className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#00C298] rounded-full mr-3 opacity-60"></div>
                  Join Wait List
                  <span className="ml-auto bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-semibold">Hot</span>
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <LanguageDropdown />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};