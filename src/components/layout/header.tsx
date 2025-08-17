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
  Globe,
  ArrowRight,
  Package,
  Shield,
  Truck,
  Users,
  Settings,
  HelpCircle,
  Smartphone,
  Apple,
  Building2
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
  
  // New dropdown states
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

  const rightNavigationItems = [
    { id: 'help', name: 'Help Center', hasDropdown: false },
    { id: 'supplier', name: 'Become a supplier', hasDropdown: false }
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setSelectedCategory(null);
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

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownHover = (dropdownId: string) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdownId);
  };

  const handleDropdownLeave = () => {
    // Set a timeout to close the dropdown, but allow it to be cancelled if hovering again
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setSelectedCategory(null);
    }, 50); // Shorter delay to prevent blinking
    setHoverTimeout(timeout);
  };

  const handleCategoryHover = (categoryId: string) => {
    setSelectedCategory(categoryId);
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
            <div className="flex flex-col xl:flex-row">
              {/* Left Sidebar - Categories */}
              <div className="w-full xl:w-1/5 bg-gray-50 p-3 lg:p-4">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div
                        onMouseEnter={() => handleCategoryHover(category.id)}
                        onClick={() => handleCategoryHover(category.id)}
                        className={`w-full flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                          selectedCategory === category.id
                            ? 'bg-white shadow-sm border border-gray-200 text-gray-900'
                            : 'hover:bg-white hover:shadow-sm text-gray-700'
                        }`}
                      >
                        <category.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="font-medium text-xs lg:text-sm">{category.name}</span>
                        {selectedCategory === category.id && (
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-auto" />
                        )}
                      </div>
                      
                      {/* Mobile Subcategories - Show under each category when selected */}
                      {selectedCategory === category.id && (
                        <div className="xl:hidden mt-3 p-3 bg-white rounded-lg border border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                            <category.icon className="w-4 h-4 mr-2" />
                            {category.name}
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.subcategories.map((subcategory, index) => (
                              <Link
                                key={index}
                                href={`/marketplace/category/${category.id}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group cursor-pointer"
                              >
                                <div className="text-center">
                                  <div className="bg-gray-50 rounded-full border border-gray-200 hover:border-[#00C298] hover:shadow-md transition-all duration-200 p-0 h-16 w-16 mx-auto mb-2 flex items-center justify-center">
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
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Right Content - Subcategories */}
              <div className="hidden xl:block flex-1 p-4">
                {selectedCategoryData ? (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <selectedCategoryData.icon className="w-5 h-5 mr-2" />
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
                            <span className="text-sm font-medium text-gray-700 group-hover:text-[#00C298] text-center leading-tight">
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
            <div className="py-4 sm:py-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">Order Protections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {orderProtections.map((section) => (
                  <div key={section.id} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mr-2" />
                      <h4 className="text-base sm:text-lg font-medium text-gray-900">{section.name}</h4>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 sm:p-3 bg-white rounded-lg border border-gray-200"
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
                ))}
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
  const LanguageDropdown = ({ isMobile = false, dropdownId }: { isMobile?: boolean; dropdownId: 'main' | 'sticky' | 'mobile' }) => {
    const isOpen = dropdownId === 'main' ? isMainLanguageOpen : 
                   dropdownId === 'sticky' ? isStickyLanguageOpen : 
                   isMobileLanguageOpen;
    
    const setIsOpen = dropdownId === 'main' ? setIsMainLanguageOpen : 
                       dropdownId === 'sticky' ? setIsStickyLanguageOpen : 
                       setIsMobileLanguageOpen;

    // Determine text color based on dropdown type and state
    const textColor = dropdownId === 'main' ? (isDropdownActive ? 'text-gray-900' : 'text-white') : 'text-[#424242]';
    const iconColor = dropdownId === 'main' ? (isDropdownActive ? 'text-gray-900' : 'text-white') : 'text-[#424242]';
    const hoverColor = dropdownId === 'main' ? (isDropdownActive ? 'hover:text-gray-900' : 'hover:text-white') : 'hover:text-[#424242]';

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
              : `${textColor} ${hoverColor} transition-colors`
          } transition-all duration-200`}
        >
                            <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Globe className={`w-5 h-5 ${iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className={`text-sm font-semibold ${textColor} ${hoverColor} transition-colors`}>
                      {isMobile ? selectedLanguage.name : selectedLanguage.code.toUpperCase()}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 ${iconColor} ${hoverColor} transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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

  // Enhanced Search Bar Component for transparent navbar
  const SearchBar = ({ className = '' }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search for Product or Supplier..."
          className={`w-full pl-4 pr-32 py-2.5 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200 ${
            isDropdownActive 
              ? 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500' 
              : 'bg-transparent border border-white/50 text-white placeholder-white/70'
          }`}
        />
        <button className={`absolute right-1 px-4 py-2 rounded-[18px] flex items-center gap-2 transition-all duration-200 ${
          isDropdownActive 
            ? 'bg-gray-700 text-white hover:bg-gray-600' 
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}>
          <Search className="w-4 h-4" />
          <span className="text-sm font-medium">Search</span>
        </button>
      </div>
    </div>
  );

  // Mobile-specific Search Bar Component
  const MobileSearchBar = ({ className = '' }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search for Product or Supplier..."
          className="w-full pl-10 pr-4 py-2.5 rounded-[20px] bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
      </div>
    </div>
  );

  // Original Search Bar Component for sticky navbar
  const StickySearchBar = ({ className = '' }: { className?: string }) => (
    <div className={`relative ${className}`}>
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
  );

  // Common mobile menu content component
  const MobileMenuContent = ({ onClose }: { onClose: () => void }) => (
    <div className="bg-white shadow-xl border-t border-gray-100">
      {/* Mobile Search Bar and Language Selector - Same Row */}
      <div className="px-4 sm:px-6 pt-6 pb-4">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <MobileSearchBar />
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
            className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 font-medium"
            onClick={onClose}
          >
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 opacity-80"></div>
            Join Wait List
            <span className="ml-auto bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-semibold">Hot</span>
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
      

      

    </div>
  );

  return (
    <>
      {/* Main Header - Always visible */}
      <header className={`w-full relative dropdown-container ${isDropdownActive || isMobileMenuOpen ? 'bg-white shadow-lg' : ''}`}>
        {/* Dropdown Content - Positioned to start right below navigation with no gap */}
        {activeDropdown && (
          <div onMouseEnter={() => handleDropdownHover(activeDropdown)} onMouseLeave={handleDropdownLeave} className="absolute top-full left-0 right-0 z-50 -mt-px max-h-[80vh] overflow-y-auto">
            <UnifiedDropdown />
          </div>
        )}
        {/* Main Header */}
        <div className={`${isDropdownActive || isMobileMenuOpen ? 'bg-white' : 'bg-transparent'} backdrop-blur-sm pt-0 transition-all duration-300`}>
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
                    <button                     className={`border px-3 sm:px-4 lg:px-6 py-2.5 rounded-[20px] transition-colors font-bold text-xs sm:text-sm lg:text-base ${
                      isDropdownActive || isMobileMenuOpen
                        ? 'border-gray-700 text-gray-700 bg-transparent hover:bg-gray-700 hover:text-white' 
                        : 'border-white text-white bg-transparent hover:text-white/80 hover:bg-white/10'
                    }`}>
                      Join Wait List
                    </button>
                  </Link>
                </div>

                {/* Mobile Menu Button - Only show when sticky header is NOT visible */}
                <button 
                  className={`md:hidden p-2 rounded-lg transition-colors ${showStickyHeader ? 'invisible' : 'visible'} ${
                    isDropdownActive || isMobileMenuOpen
                      ? 'hover:bg-gray-100 text-gray-800' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Navigation Bar */}
        <div className={`${isDropdownActive || isMobileMenuOpen ? 'bg-white border-b border-gray-200' : ''} transition-all duration-300`}>
          <div className="w-full px-4 sm:px-6 lg:px-10 py-1">
            <div className="flex items-center justify-between">
              {/* Left Side Navigation */}
              <div className="flex items-center space-x-6 lg:space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <div 
                        onMouseEnter={() => handleDropdownHover(item.id)}
                        onMouseLeave={handleDropdownLeave}
                        className={`flex items-center space-x-2 transition-colors text-sm font-medium cursor-pointer relative ${
                          isDropdownActive || isMobileMenuOpen
                            ? 'text-gray-900 hover:text-gray-700' 
                            : 'text-white hover:text-white/80'
                        } ${activeDropdown === item.id ? 'text-gray-700' : ''}`}
                      >
                        {item.id === 'categories' && <Menu className="w-4 h-4" />}
                        <span>{item.name}</span>
                        {/* Underline for active dropdown */}
                        {activeDropdown === item.id && (
                          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-700 rounded-full"></div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={`/${item.id}`} 
                        className={`transition-colors text-sm font-medium relative ${
                          isDropdownActive || isMobileMenuOpen
                            ? 'text-gray-900 hover:text-gray-700' 
                            : 'text-white hover:text-white/80'
                        }`}
                      >
                        {item.name}
                        {/* Hover underline */}
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current opacity-0 hover:opacity-100 transition-opacity rounded-full"></div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {rightNavigationItems.map((item) => (
                  <Link 
                    key={item.id}
                    href={`/${item.id}`} 
                    className={`transition-colors text-sm font-medium ${
                      isDropdownActive 
                        ? 'text-gray-900 hover:text-gray-700' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
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
              <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
                <StickySearchBar className="w-full" />
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