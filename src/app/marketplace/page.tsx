"use client"

import React, { useState, useRef } from "react"
import { Search, Filter, Grid, List, MapPin, Star, Heart, ShoppingCart, Package, CheckCircle, ArrowRight, MessageSquare, Send, Eye, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { getSupplierAvatar, handleImageError } from "@/lib/image-utils"
import Link from "next/link"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 50])
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const { isAuthenticated } = useAuth()
  const { addToCart } = useCart()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const categories = [
    { id: "all", name: "All Categories", count: 2847, icon: "🌍" },
    { id: "agriculture", name: "Agriculture & Food", count: 1245, icon: "🌾", subcategories: ["Grains & Cereals", "Nuts & Seeds", "Fresh Produce", "Livestock", "Organic Foods"] },
    { id: "textiles", name: "Textiles & Clothing", count: 567, icon: "👕", subcategories: ["Cotton Fabric", "Traditional Wear", "Home Textiles", "Fashion Accessories", "Leather Goods"] },
    { id: "manufacturing", name: "Manufacturing", count: 423, icon: "🏭", subcategories: ["Machinery", "Tools & Equipment", "Auto Parts", "Industrial Supplies"] },
    { id: "commodities", name: "Commodities", count: 312, icon: "⚡", subcategories: ["Metals & Minerals", "Energy", "Chemicals", "Raw Materials"] },
    { id: "crafts", name: "Arts & Crafts", count: 189, icon: "🎨", subcategories: ["Traditional Crafts", "Jewelry", "Home Decor", "Artwork"] },
    { id: "other", name: "Other Products", count: 111, icon: "📦", subcategories: ["Electronics", "Beauty Products", "Miscellaneous"] }
  ]

  const countries = [
    { id: "all", name: "All Countries", flag: "🌍" },
    { id: "nigeria", name: "Nigeria", flag: "🇳🇬" },
    { id: "ghana", name: "Ghana", flag: "🇬🇭" },
    { id: "kenya", name: "Kenya", flag: "🇰🇪" },
    { id: "south-africa", name: "South Africa", flag: "🇿🇦" },
    { id: "ethiopia", name: "Ethiopia", flag: "🇪🇹" },
    { id: "tanzania", name: "Tanzania", flag: "🇹🇿" },
  ]

  const products = [
    {
      id: 1,
      name: "Premium Cashew Nuts - W240 Grade",
      supplier: "AgroExports Nigeria Ltd",
      supplierLogo: getSupplierAvatar("AgroExports Nigeria Ltd", 1),
      location: "Lagos, Nigeria",
      country: "🇳🇬",
      price: 12.50,
      currency: "USD",
      unit: "per kg",
      moq: "500kg",
      maxOrder: "10,000kg",
      rating: 4.8,
      reviews: 156,
      verified: true,
      goldSupplier: true,
      image: "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop",
      images: ["/products/cashew.jpg", "/products/cashew-2.jpg", "/products/cashew-3.jpg"],
      category: "agriculture",
      tags: ["W240 Grade", "Premium Quality", "Export Grade", "Organic"],
      description: "Premium W240 grade cashew nuts sourced directly from Nigerian farms. Perfect for retail packaging and food industry use.",
      specifications: {
        "Moisture": "< 5%",
        "Broken": "< 5%", 
        "Foreign Matter": "< 1%",
        "Shelf Life": "12 months"
      },
      certifications: ["Organic", "HACCP", "ISO 22000"],
      inStock: true,
      stockLevel: "High",
      responseTime: "< 2 hours",
      leadTime: "7-14 days",
      paymentTerms: "30% advance, 70% on delivery",
      shippingTerms: "FOB Lagos",
      yearEstablished: 2015,
      totalEmployees: "50-100",
      exportMarkets: ["USA", "EU", "UK", "Canada"],
      annualCapacity: "2,000 MT",
      monthlySupply: "100-500 MT"
    },
    {
      id: 2,
      name: "Organic Cocoa Beans - Trinitario",
      supplier: "Ghana Cocoa Collective",
      supplierLogo: getSupplierAvatar("Ghana Cocoa Collective", 2),
      location: "Accra, Ghana",
      country: "🇬🇭",
      price: 4.20,
      currency: "USD",
      unit: "per kg",
      moq: "1000kg",
      maxOrder: "50,000kg",
      rating: 4.9,
      reviews: 234,
      verified: true,
      goldSupplier: true,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      images: ["/products/cocoa.jpg", "/products/cocoa-2.jpg"],
      category: "agriculture",
      tags: ["Trinitario", "Organic", "Fair Trade", "Premium"],
      description: "Finest Trinitario cocoa beans from Ghana's premium growing regions. Ideal for high-end chocolate manufacturing.",
      specifications: {
        "Fat Content": "54-58%",
        "Moisture": "< 7%",
        "Bean Count": "100-110/100g",
        "Fermentation": "Fully fermented"
      },
      certifications: ["Organic", "Fair Trade", "UTZ"],
      inStock: true,
      stockLevel: "High",
      responseTime: "< 1 hour",
      leadTime: "5-10 days",
      paymentTerms: "LC at sight",
      shippingTerms: "FOB Tema",
      yearEstablished: 2010,
      totalEmployees: "200+",
      exportMarkets: ["USA", "EU", "Japan", "UK"],
      annualCapacity: "5,000 MT",
      monthlySupply: "300-1000 MT"
    },
    {
      id: 3,
      name: "White Hulled Sesame Seeds",
      supplier: "East Africa Seeds Co",
      supplierLogo: "/avatars/supplier-3.jpg",
      location: "Nairobi, Kenya",
      country: "🇰🇪",
      price: 2.20,
      currency: "USD",
      unit: "per kg",
      moq: "2000kg",
      maxOrder: "20,000kg",
      rating: 4.7,
      reviews: 89,
      verified: true,
      goldSupplier: false,
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop",
      images: ["/products/sesame.jpg"],
      category: "agriculture",
      tags: ["White Hulled", "99% Purity", "Export Grade"],
      description: "Premium white hulled sesame seeds with 99% purity. Ideal for oil extraction and food processing industries.",
      specifications: {
        "Purity": "99%",
        "Oil Content": "50-55%",
        "Moisture": "< 6%",
        "FFA": "< 2%"
      },
      certifications: ["HACCP", "ISO 9001"],
      inStock: true,
      stockLevel: "Medium",
      responseTime: "< 3 hours",
      leadTime: "10-15 days",
      paymentTerms: "50% advance, 50% on shipment",
      shippingTerms: "FOB Mombasa",
      yearEstablished: 2018,
      totalEmployees: "25-50",
      exportMarkets: ["Middle East", "Asia", "EU"],
      annualCapacity: "1,000 MT",
      monthlySupply: "50-200 MT"
    },
    {
      id: 4,
      name: "Dried Hibiscus Flowers",
      supplier: "Sahel Botanicals",
      supplierLogo: "/avatars/supplier-1.jpg",
      location: "Kano, Nigeria",
      country: "🇳🇬",
      price: 6.00,
      currency: "USD",
      unit: "per kg",
      moq: "200kg",
      maxOrder: "5,000kg",
      rating: 4.6,
      reviews: 67,
      verified: true,
      goldSupplier: false,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      images: ["/products/hibiscus.jpg"],
      category: "agriculture",
      tags: ["Organic", "Medicinal Grade", "Sun Dried"],
      description: "Premium dried hibiscus flowers (Hibiscus sabdariffa) perfect for tea blending and health products.",
      specifications: {
        "Moisture": "< 12%",
        "Color": "Deep Red",
        "Particle Size": "2-15mm",
        "Ash Content": "< 10%"
      },
      certifications: ["Organic", "HACCP"],
      inStock: true,
      stockLevel: "High",
      responseTime: "< 4 hours",
      leadTime: "7-12 days",
      paymentTerms: "40% advance, 60% on delivery",
      shippingTerms: "FOB Lagos",
      yearEstablished: 2016,
      totalEmployees: "10-25",
      exportMarkets: ["USA", "EU", "Middle East"],
      annualCapacity: "500 MT",
      monthlySupply: "20-100 MT"
    },
    {
      id: 5,
      name: "Shea Butter - Unrefined",
      supplier: "Women's Cooperative Ghana",
      supplierLogo: "/avatars/supplier-2.jpg",
      location: "Tamale, Ghana",
      country: "🇬🇭",
      price: 8.50,
      currency: "USD",
      unit: "per kg",
      moq: "100kg",
      maxOrder: "2,000kg",
      rating: 4.9,
      reviews: 134,
      verified: true,
      goldSupplier: true,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
      images: ["/products/shea.jpg"],
      category: "agriculture",
      tags: ["Unrefined", "Fair Trade", "Women's Cooperative"],
      description: "Pure unrefined shea butter produced by women's cooperatives. Perfect for cosmetics and skincare products.",
      specifications: {
        "Fat Content": "> 50%",
        "Moisture": "< 0.05%",
        "Free Fatty Acids": "< 2%",
        "Melting Point": "31-38°C"
      },
      certifications: ["Fair Trade", "Organic", "ECOCERT"],
      inStock: true,
      stockLevel: "Medium",
      responseTime: "< 2 hours",
      leadTime: "5-8 days",
      paymentTerms: "50% advance, 50% on delivery",
      shippingTerms: "FOB Tema",
      yearEstablished: 2012,
      totalEmployees: "100+",
      exportMarkets: ["USA", "EU", "UK", "Canada"],
      annualCapacity: "300 MT",
      monthlySupply: "10-50 MT"
    },
    {
      id: 6,
      name: "Black Pepper - Whole",
      supplier: "Spice Islands Africa",
      supplierLogo: "/avatars/supplier-3.jpg",
      location: "Zanzibar, Tanzania",
      country: "🇹🇿",
      price: 12.00,
      currency: "USD",
      unit: "per kg",
      moq: "50kg",
      maxOrder: "1,000kg",
      rating: 4.8,
      reviews: 78,
      verified: true,
      goldSupplier: false,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      images: ["/products/pepper.jpg"],
      category: "agriculture",
      tags: ["Whole Pepper", "Spice Grade", "Aromatic"],
      description: "Premium black pepper from Zanzibar spice farms. Strong aroma and flavor perfect for global spice markets.",
      specifications: {
        "Piperine Content": "> 5%",
        "Moisture": "< 12%",
        "Bulk Density": "500-600 g/L",
        "Volatile Oil": "> 2%"
      },
      certifications: ["HACCP", "ISO 9001"],
      inStock: true,
      stockLevel: "Low",
      responseTime: "< 1 hour",
      leadTime: "3-7 days",
      paymentTerms: "100% advance",
      shippingTerms: "FOB Dar es Salaam",
      yearEstablished: 2020,
      totalEmployees: "10-25",
      exportMarkets: ["USA", "EU", "Middle East"],
      annualCapacity: "100 MT",
      monthlySupply: "5-20 MT"
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesCountry = selectedCountry === "all" || product.country === countries.find(c => c.id === selectedCountry)?.flag
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesCountry && matchesPrice
  })

  const handleAddToCart = (product: any) => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart")
      window.location.href = "/auth/login"
      return
    }
    addToCart(product, product.moq || 1)
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setShowCategoryDropdown(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowCategoryDropdown(false)
    }, 150) // Small delay to prevent flickering
  }

  const toggleWishlist = (productId: number) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_low": return a.price - b.price
      case "price_high": return b.price - a.price
      case "rating": return b.rating - a.rating
      case "newest": return b.id - a.id
      default: return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">African B2B Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Source premium products directly from verified African suppliers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search products, suppliers, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border rounded-lg px-4 py-3 bg-white min-w-[200px] appearance-none pr-10 font-medium"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="border rounded-lg px-4 py-3 bg-white min-w-[150px]"
              >
                {countries.map(country => (
                  <option key={country.id} value={country.id}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
              
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-6 p-4 border-t space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Price Range (USD)</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium min-w-[100px]">
                    $0 - ${priceRange[1]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {sortedProducts.length} Products Found
            </h2>
            <p className="text-muted-foreground">
              Showing results for &quot;{searchQuery || 'all products'}&quot;
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white"
            >
              <option value="relevance">Most Relevant</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
            
            <div className="flex rounded-lg border">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <div className="flex items-center space-x-4">
              {/* Category Dropdown */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Button
                  variant="outline"
                  className="min-w-[160px] justify-between"
                >
                  <span className="flex items-center">
                    <Package className="h-4 w-4 mr-2" />
                    All Categories
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </Button>
                
                {showCategoryDropdown && (
                  <Card className="absolute top-full mt-1 w-80 z-50 shadow-xl border transition-all duration-200 ease-out transform opacity-100 scale-100">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-1 gap-1">
                        {categories.filter(cat => cat.id !== "all").map((category) => (
                          <Link
                            key={category.id}
                            href={`/marketplace/category/${category.id}`}
                            className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-150"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-colors duration-200 group-hover:scale-105">
                              <span className="text-lg">{category.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium group-hover:text-primary transition-colors duration-150">
                                {category.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {category.count} products
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                      <div className="border-t pt-3 mt-3">
                        <Link
                          href="/marketplace/categories"
                          className="flex items-center justify-center text-primary hover:underline font-medium text-sm transition-colors"
                        >
                          View All Categories →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              {/* Quick Category Pills - Small compact pills */}
              <div className="hidden lg:flex items-center space-x-1">
                {categories.filter(cat => cat.id !== "all").slice(0, 6).map((category) => (
                  <Link
                    key={category.id}
                    href={`/marketplace/category/${category.id}`}
                    className="group"
                  >
                    <div className="flex items-center space-x-1 px-2 py-1 rounded-md border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-sm transition-all duration-200 cursor-pointer h-8 min-w-[120px] group-hover:scale-105">
                      <span className="text-xs group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                      <span className="text-xs font-medium group-hover:text-primary transition-colors truncate">
                        {category.name.split(' ')[0]}
                      </span>
                      <Badge variant="secondary" className="text-[10px] h-4 px-1 ml-auto group-hover:bg-primary/20 transition-colors">
                        {category.count > 999 ? `${Math.floor(category.count/1000)}k` : category.count}
                      </Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={cn(
          "grid gap-6 mb-8",
          viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
        )}>
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <Link href={`/marketplace/product/${product.id}`} className="block">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onError={(e) => handleImageError(e)}
                  />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.verified && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  {product.goldSupplier && (
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Gold
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWishlist(product.id)
                    }}
                    className={wishlistItems.includes(product.id) ? "text-red-500" : ""}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Stock Level */}
                <div className="absolute bottom-3 left-3">
                  <Badge variant={product.stockLevel === "High" ? "default" : product.stockLevel === "Medium" ? "secondary" : "destructive"}>
                    Stock: {product.stockLevel}
                  </Badge>
                </div>
              </div>
              </Link>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Product Info */}
                  <div>
                    <Link href={`/marketplace/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary cursor-pointer transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Supplier Info */}
                  <div className="flex items-center space-x-3 py-2 border-y">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={getSupplierAvatar(product.supplier, product.id)} />
                      <AvatarFallback>{product.supplier[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.supplier}</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{product.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          ${product.price}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {product.unit}
                        </span>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>MOQ: {product.moq}</div>
                        <div>Max: {product.maxOrder}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>Payment: {product.paymentTerms}</div>
                      <div>Lead time: {product.leadTime}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      disabled={cartItems.includes(product.id)}
                    >
                      {cartItems.includes(product.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                                         <Button 
                       size="sm"
                       onClick={() => {
                         if (!isAuthenticated) {
                           alert("Please login to contact suppliers")
                           window.location.href = "/auth/login"
                           return
                         }
                         // Handle contact logic
                       }}
                     >
                       <MessageSquare className="h-4 w-4 mr-2" />
                       Contact
                     </Button>
                  </div>

                  <Link href={`/dashboard/quote-request?productId=${product.id}&supplierId=${product.supplier}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Cart */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <Link href="/dashboard/cart">
              <Button size="lg" className="rounded-full shadow-lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart ({cartItems.length})
              </Button>
            </Link>
          </div>
        )}

        {/* Quick Stats */}
        <div className="bg-muted/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Marketplace?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-muted-foreground">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">45+</div>
              <div className="text-muted-foreground">African Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$50M+</div>
              <div className="text-muted-foreground">Trade Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Successful Orders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 