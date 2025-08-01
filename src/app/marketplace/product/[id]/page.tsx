"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, Star, Shield, Heart, ShoppingCart, MessageSquare,
  Share2, Award, Truck, Clock, MapPin, CheckCircle,
  Globe, Phone, Mail, Calendar, TrendingUp,
  Flag,
  ThumbsUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/layout/header"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { addToCart } = useCart()
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(100)
  const [selectedVariant, setSelectedVariant] = useState("standard")
  const [activeTab, setActiveTab] = useState("overview")
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("all")

  // Mock product data - in real app, fetch based on params.id
  const product = {
    id: params.id,
    name: "Premium Organic Cashew Nuts",
    description: "High-quality, hand-picked organic cashew nuts sourced directly from certified farms in Nigeria. Perfect for international wholesale distribution.",
    longDescription: "Our premium organic cashew nuts are carefully selected from the finest farms in Nigeria, ensuring superior quality and taste. These cashews are processed using traditional methods while maintaining international organic certification standards. Ideal for importers, distributors, and food manufacturers looking for consistent, high-quality raw materials.",
    
    images: [
      "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509358271058-acd67b3fbf95?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&h=400&fit=crop"
    ],
    
    price: {
      currency: "USD",
      min: 2.80,
      max: 3.20,
      unit: "per kg"
    },
    
    variants: [
      { id: "standard", name: "Standard Grade", price: 2.80, description: "Regular quality for general use" },
      { id: "premium", name: "Premium Grade", price: 3.20, description: "Higher quality with better size consistency" },
      { id: "organic", name: "Organic Certified", price: 3.50, description: "Certified organic with all documentation" }
    ],
    
    specifications: {
      "Product Origin": "Nigeria, West Africa",
      "Moisture Content": "≤ 5%",
      "Broken Nuts": "≤ 5%",
      "Foreign Matter": "≤ 0.1%",
      "Shelf Life": "12 months",
      "Packaging": "25kg vacuum-sealed bags",
      "Certifications": "Organic, HACCP, ISO 22000",
      "Harvest Season": "February - May"
    },
    
    supplier: {
      id: "sup-001",
      name: "AgroExports Nigeria Ltd",
      logo: "/avatars/adebayo.jpg",
      rating: 4.8,
      totalOrders: 1247,
      responseTime: "< 2 hours",
      verified: true,
      goldSupplier: true,
      establishedYear: 2018,
      location: "Lagos, Nigeria",
      employees: "50-100",
      mainProducts: ["Cashew Nuts", "Cocoa Beans", "Palm Oil"],
      certifications: ["ISO 22000", "HACCP", "Organic"]
    },
    
    logistics: {
      minOrderQuantity: 100,
      maxOrderQuantity: 10000,
      leadTime: "7-14 days",
      shippingMethods: ["Sea Freight", "Air Freight"],
      ports: ["Lagos Port", "Apapa Port"],
      packaging: "25kg vacuum-sealed bags, 20 bags per pallet"
    },
    
    ratings: {
      overall: 4.8,
      quality: 4.9,
      communication: 4.7,
      shipping: 4.8,
      totalReviews: 324
    },
    
    tags: ["organic", "premium", "cashew", "nuts", "wholesale", "nigeria", "export"],
    category: "Agriculture & Food",
    subCategory: "Nuts & Seeds",
    verified: true,
    goldSupplier: true,
    stockLevel: "High",
    lastUpdated: "2024-01-20"
  }

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      buyer: "Global Foods Import",
      country: "🇺🇸 United States",
      rating: 5,
      date: "2024-01-18",
      verified: true,
      orderQuantity: "500kg",
      comment: "Excellent quality cashews! The packaging was perfect and delivery was on time. Our customers love the taste and quality. Will definitely order again.",
      helpful: 12,
      images: ["https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=200&h=150&fit=crop"]
    },
    {
      id: 2,
      buyer: "Euro Snacks GmbH",
      country: "🇩🇪 Germany", 
      rating: 4,
      date: "2024-01-15",
      verified: true,
      orderQuantity: "1000kg",
      comment: "Good quality product. Some variance in size but overall satisfied with the purchase. Good supplier communication.",
      helpful: 8
    },
    {
      id: 3,
      buyer: "UK Premium Foods",
      country: "🇬🇧 United Kingdom",
      rating: 5,
      date: "2024-01-12",
      verified: true,
      orderQuantity: "750kg",
      comment: "Outstanding quality and service. The organic certification was properly documented. Highly recommended supplier!",
      helpful: 15
    }
  ]

  // Mock related products
  const relatedProducts = [
    {
      id: "2",
      name: "Raw Almonds",
      image: "https://images.unsplash.com/photo-1508736793753-f43eadb2b660?w=300&h=200&fit=crop",
      price: "$4.20/kg",
      supplier: "AgroExports Nigeria Ltd",
      rating: 4.7,
      verified: true
    },
    {
      id: "3", 
      name: "Organic Walnuts",
      image: "https://images.unsplash.com/photo-1553864250-05b20249ee0c?w=300&h=200&fit=crop",
      price: "$6.80/kg",
      supplier: "Premium Nuts Co.",
      rating: 4.9,
      verified: true
    },
    {
      id: "4",
      name: "Mixed Nuts Bulk",
      image: "https://images.unsplash.com/photo-1604567448932-e2a8e27ff9ad?w=300&h=200&fit=crop", 
      price: "$5.50/kg",
      supplier: "West Africa Exports",
      rating: 4.6,
      verified: true
    },
    {
      id: "5",
      name: "Roasted Peanuts",
      image: "https://images.unsplash.com/photo-1582094600473-5e5ce00e5bd4?w=300&h=200&fit=crop",
      price: "$2.10/kg", 
      supplier: "Groundnut Farmers Co-op",
      rating: 4.5,
      verified: true
    }
  ]

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart")
      router.push("/auth/login")
      return
    }
    addToCart({
      ...product,
      moq: product.logistics.minOrderQuantity,
      maxOrder: product.logistics.maxOrderQuantity,
      unit: product.price.unit.replace('per ', ''),
      location: product.supplier.location
    }, quantity)
  }

  const handleRequestQuote = () => {
    if (!isAuthenticated) {
      alert("Please login to request quotes")
      router.push("/auth/login")
      return
    }
    router.push(`/dashboard/quote-request?product=${product.id}&quantity=${quantity}`)
  }

  const handleContactSupplier = () => {
    if (!isAuthenticated) {
      alert("Please login to contact suppliers")
      router.push("/auth/login")
      return
    }
    router.push(`/dashboard/messages?supplier=${product.supplier.id}`)
  }

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
          <Link href={`/marketplace?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 border">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.verified && (
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified Product
                  </Badge>
                )}
                {product.goldSupplier && (
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    <Award className="h-3 w-3 mr-1" />
                    Gold Supplier
                  </Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" onClick={() => setIsWishlisted(!isWishlisted)}>
                  <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button size="sm" variant="secondary">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.ratings.overall) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.ratings.overall}</span>
                  <span className="text-muted-foreground">({product.ratings.totalReviews} reviews)</span>
                </div>
                <Badge variant="outline">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {product.stockLevel} Stock
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Price */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="text-3xl font-bold text-primary mb-2">
                ${product.price.min.toFixed(2)} - ${product.price.max.toFixed(2)} {product.price.unit}
              </div>
              <div className="text-sm text-muted-foreground">
                Prices vary by quantity and variant • MOQ: {product.logistics.minOrderQuantity}kg
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="font-medium mb-3">Select Variant</h3>
              <div className="space-y-2">
                {product.variants.map((variant) => (
                  <label key={variant.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="variant"
                      value={variant.id}
                      checked={selectedVariant === variant.id}
                      onChange={(e) => setSelectedVariant(e.target.value)}
                      className="w-4 h-4 text-primary"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{variant.name}</span>
                        <span className="text-primary font-bold">${variant.price}/kg</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{variant.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Quantity (kg) - Min: {product.logistics.minOrderQuantity}kg
              </label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(product.logistics.minOrderQuantity, parseInt(e.target.value) || 0))}
                min={product.logistics.minOrderQuantity}
                max={product.logistics.maxOrderQuantity}
                className="w-32"
              />
              <div className="text-sm text-muted-foreground mt-1">
                Total estimate: ${(quantity * (product.variants.find(v => v.id === selectedVariant)?.price || product.price.min)).toFixed(2)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button onClick={handleAddToCart} className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button onClick={handleRequestQuote} variant="outline" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
              </div>
              <Button onClick={handleContactSupplier} variant="secondary" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Contact Supplier
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Fast Shipping</div>
                  <div className="text-sm text-muted-foreground">{product.logistics.leadTime}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Quality Assured</div>
                  <div className="text-sm text-muted-foreground">Certified & Verified</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Quick Response</div>
                  <div className="text-sm text-muted-foreground">{product.supplier.responseTime}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Global Shipping</div>
                  <div className="text-sm text-muted-foreground">Worldwide delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: "overview", name: "Overview" },
                { id: "specifications", name: "Specifications" },
                { id: "supplier", name: "Supplier Info" },
                { id: "shipping", name: "Shipping & Logistics" },
                { id: "reviews", name: `Reviews (${product.ratings.totalReviews})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "overview" && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Overview</h3>
                <p className="text-muted-foreground mb-6">{product.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Premium organic quality</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Hand-picked and sorted</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>International certifications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Vacuum-sealed packaging</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Applications</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Snack food manufacturing</li>
                      <li>• Bakery and confectionery</li>
                      <li>• Retail packaging</li>
                      <li>• Food service industry</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.supplier.totalOrders}+</div>
                    <div className="text-sm text-muted-foreground">Orders Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.ratings.totalReviews}</div>
                    <div className="text-sm text-muted-foreground">Customer Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{product.ratings.overall}</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "supplier" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Supplier Information</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={product.supplier.logo} />
                        <AvatarFallback>{product.supplier.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-xl font-semibold">{product.supplier.name}</h4>
                          {product.supplier.verified && (
                            <Badge className="bg-green-600">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          {product.supplier.goldSupplier && (
                            <Badge className="bg-yellow-500">
                              <Award className="h-3 w-3 mr-1" />
                              Gold
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {product.supplier.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Est. {product.supplier.establishedYear}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Response: {product.supplier.responseTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold mb-3">Company Details</h5>
                        <div className="space-y-2 text-sm">
                          <div>Employees: {product.supplier.employees}</div>
                          <div>Total Orders: {product.supplier.totalOrders}+</div>
                          <div>Rating: {product.supplier.rating}/5.0</div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Main Products</h5>
                        <div className="space-y-1">
                          {product.supplier.mainProducts.map((product, index) => (
                            <Badge key={index} variant="outline">{product}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-3">Certifications</h5>
                        <div className="space-y-1">
                          {product.supplier.certifications.map((cert, index) => (
                            <Badge key={index} variant="secondary">{cert}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "shipping" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Shipping & Logistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Minimum Order Quantity</span>
                        <span className="font-medium">{product.logistics.minOrderQuantity}kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maximum Order Quantity</span>
                        <span className="font-medium">{product.logistics.maxOrderQuantity}kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lead Time</span>
                        <span className="font-medium">{product.logistics.leadTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Packaging</span>
                        <span className="font-medium">{product.logistics.packaging}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Available Methods</h5>
                        <div className="space-y-1">
                          {product.logistics.shippingMethods.map((method, index) => (
                            <Badge key={index} variant="outline">{method}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Departure Ports</h5>
                        <div className="space-y-1">
                          {product.logistics.ports.map((port, index) => (
                            <Badge key={index} variant="secondary">{port}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center space-x-4">
                    <select
                      value={selectedReviewFilter}
                      onChange={(e) => setSelectedReviewFilter(e.target.value)}
                      className="border rounded-lg px-3 py-2"
                    >
                      <option value="all">All Reviews</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>
                </div>

                {/* Review Summary */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{product.ratings.overall}</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(product.ratings.overall) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <div className="text-muted-foreground">{product.ratings.totalReviews} total reviews</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Quality</span>
                          <span className="font-medium">{product.ratings.quality}/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Communication</span>
                          <span className="font-medium">{product.ratings.communication}/5.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span className="font-medium">{product.ratings.shipping}/5.0</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{review.buyer[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{review.buyer}</div>
                              <div className="text-sm text-muted-foreground">{review.country}</div>
                            </div>
                            {review.verified && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{review.comment}</p>
                        
                        {review.images && (
                          <div className="flex space-x-2 mb-4">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Review image ${index + 1}`}
                                className="w-16 h-16 object-cover rounded-lg border"
                              />
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Order: {review.orderQuantity}</Badge>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Flag className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <Link href={`/marketplace/product/${relatedProduct.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {relatedProduct.verified && (
                      <Badge className="absolute top-2 left-2 bg-green-600">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href={`/marketplace/product/${relatedProduct.id}`}>
                    <h4 className="font-medium mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                      {relatedProduct.name}
                    </h4>
                  </Link>
                  <div className="text-sm text-muted-foreground mb-2">{relatedProduct.supplier}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{relatedProduct.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 