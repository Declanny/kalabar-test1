"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { 
  Search, Grid, List, MapPin, Star,
  Shield, Heart, ShoppingCart, Eye, ArrowLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth-context"

export default function CategoryPage() {
  const params = useParams()
  const { isAuthenticated } = useAuth()
  const categorySlug = params.slug as string
  
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [wishlistItems, setWishlistItems] = useState<number[]>([])

  // Category data
  const categories = {
    "agriculture": {
      name: "Agriculture & Food",
      icon: "🌾",
      description: "Fresh produce, grains, nuts, and agricultural products from African farms",
      subcategories: ["Grains & Cereals", "Nuts & Seeds", "Fresh Produce", "Livestock", "Organic Foods"]
    },
    "textiles": {
      name: "Textiles & Clothing", 
      icon: "👕",
      description: "Traditional fabrics, clothing, and textile products",
      subcategories: ["Cotton Fabric", "Traditional Wear", "Home Textiles", "Fashion Accessories", "Leather Goods"]
    },
    "manufacturing": {
      name: "Manufacturing",
      icon: "🏭", 
      description: "Industrial products, machinery, and manufactured goods",
      subcategories: ["Machinery", "Tools & Equipment", "Auto Parts", "Industrial Supplies"]
    },
    "commodities": {
      name: "Commodities",
      icon: "⚡",
      description: "Raw materials, metals, minerals, and energy products",
      subcategories: ["Metals & Minerals", "Energy", "Chemicals", "Raw Materials"]
    },
    "crafts": {
      name: "Arts & Crafts",
      icon: "🎨",
      description: "Traditional crafts, artwork, and handmade products",
      subcategories: ["Traditional Crafts", "Jewelry", "Home Decor", "Artwork"]
    }
  }

  const currentCategory = categories[categorySlug as keyof typeof categories] || categories.agriculture

  // Mock products for the category
  const products = [
    {
      id: 1,
      name: "Premium Organic Cashew Nuts",
      description: "High-quality W240 grade cashew nuts from Nigerian farms",
      image: "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop",
      price: "$2.80",
      unit: "per kg",
      supplier: "AgroExports Nigeria Ltd",
      country: "🇳🇬 Nigeria",
      rating: 4.8,
      reviews: 324,
      verified: true,
      goldSupplier: true,
      stockLevel: "High",
      tags: ["organic", "premium", "export"],
      moq: "100kg"
    },
    {
      id: 2,
      name: "Raw Almonds - Bulk Export",
      description: "Premium quality raw almonds perfect for wholesale distribution",
      image: "https://images.unsplash.com/photo-1508736793753-f43eadb2b660?w=400&h=300&fit=crop",
      price: "$4.20",
      unit: "per kg", 
      supplier: "Almond Farms Collective",
      country: "🇿🇦 South Africa",
      rating: 4.7,
      reviews: 189,
      verified: true,
      goldSupplier: false,
      stockLevel: "Medium",
      tags: ["raw", "bulk", "export"],
      moq: "500kg"
    },
    {
      id: 3,
      name: "Organic Sesame Seeds",
      description: "Premium white sesame seeds from certified organic farms",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop",
      price: "$2.10",
      unit: "per kg",
      supplier: "Sesame Export Co.",
      country: "🇪🇹 Ethiopia", 
      rating: 4.9,
      reviews: 267,
      verified: true,
      goldSupplier: true,
      stockLevel: "High",
      tags: ["organic", "white", "certified"],
      moq: "250kg"
    },
    {
      id: 4,
      name: "Mixed Nuts Assortment",
      description: "Carefully selected mix of premium African nuts",
      image: "https://images.unsplash.com/photo-1604567448932-e2a8e27ff9ad?w=400&h=300&fit=crop",
      price: "$5.50",
      unit: "per kg",
      supplier: "West Africa Exports",
      country: "🇬🇭 Ghana",
      rating: 4.6,
      reviews: 145,
      verified: true,
      goldSupplier: false,
      stockLevel: "Medium",
      tags: ["mixed", "premium", "assorted"],
      moq: "150kg"
    },
    {
      id: 5,
      name: "Cocoa Beans - Premium Grade",
      description: "High-quality cocoa beans from sustainable farms",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "$3.20",
      unit: "per kg",
      supplier: "Cocoa Farmers Union",
      country: "🇨🇮 Côte d'Ivoire",
      rating: 4.8,
      reviews: 402,
      verified: true,
      goldSupplier: true,
      stockLevel: "High", 
      tags: ["cocoa", "premium", "sustainable"],
      moq: "1000kg"
    },
    {
      id: 6,
      name: "Dried Hibiscus Flowers",
      description: "Premium dried hibiscus flowers for tea and food production",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      price: "$6.00",
      unit: "per kg",
      supplier: "Hibiscus Farms Ltd",
      country: "🇸🇩 Sudan",
      rating: 4.5,
      reviews: 178,
      verified: true,
      goldSupplier: false,
      stockLevel: "Medium",
      tags: ["dried", "hibiscus", "tea"],
      moq: "50kg"
    }
  ]

  const countries = [
    { id: "all", name: "All Countries", flag: "🌍" },
    { id: "nigeria", name: "Nigeria", flag: "🇳🇬" },
    { id: "ghana", name: "Ghana", flag: "🇬🇭" },
    { id: "south-africa", name: "South Africa", flag: "🇿🇦" },
    { id: "ethiopia", name: "Ethiopia", flag: "🇪🇹" },
    { id: "ivory-coast", name: "Côte d'Ivoire", flag: "🇨🇮" },
    { id: "sudan", name: "Sudan", flag: "🇸🇩" }
  ]

  const priceRanges = [
    { id: "all", name: "All Prices" },
    { id: "0-2", name: "Under $2/kg" },
    { id: "2-4", name: "$2 - $4/kg" },
    { id: "4-6", name: "$4 - $6/kg" },
    { id: "6+", name: "Over $6/kg" }
  ]

  const sortOptions = [
    { id: "relevance", name: "Most Relevant" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Highest Rated" },
    { id: "newest", name: "Newest First" }
  ]

  const toggleWishlist = (productId: number) => {
    if (!isAuthenticated) {
      alert("Please login to add items to wishlist")
      return
    }
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = () => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart")
      return
    }
    alert("Added to cart!")
  }

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === "all" || product.country.toLowerCase().includes(selectedCountry)
    const price = parseFloat(product.price.replace('$', ''))
    const matchesPrice = priceRange === "all" || 
                        (priceRange === "0-2" && price < 2) ||
                        (priceRange === "2-4" && price >= 2 && price < 4) ||
                        (priceRange === "4-6" && price >= 4 && price < 6) ||
                        (priceRange === "6+" && price >= 6)
    
    return matchesSearch && matchesCountry && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      case "price-high":
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container-responsive py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/marketplace" className="hover:text-foreground">Marketplace</Link>
          <span>/</span>
          <span className="text-foreground">{currentCategory.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/marketplace">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Marketplace
          </Link>
        </Button>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">{currentCategory.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">{currentCategory.name}</h1>
              <p className="text-muted-foreground">{currentCategory.description}</p>
            </div>
          </div>
          
          {/* Subcategories */}
          <div className="flex flex-wrap gap-2">
            {currentCategory.subcategories.map((sub, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {sub}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Country Filter */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white"
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 bg-white"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          {/* View Controls */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={cn(
          "grid gap-6",
          viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
        )}>
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <Link href={`/marketplace/product/${product.id}`} className="block">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.verified && (
                      <Badge className="bg-green-500 text-white">
                        <Shield className="h-3 w-3 mr-1" />
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
                    <Badge variant={product.stockLevel === "High" ? "default" : "secondary"}>
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
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{product.supplier}</span>
                    <span>{product.country}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-500 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price & MOQ */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {product.price} <span className="text-sm font-normal text-muted-foreground">{product.unit}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">MOQ: {product.moq}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/quote-request?product=${product.id}`}>
                        Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search filters or explore other categories
            </p>
            <Button asChild>
              <Link href="/marketplace">
                Browse All Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 