"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Search, Filter, MapPin, Star, CheckCircle, Globe, Package, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Header } from "@/components/layout/header"

export default function SuppliersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const suppliers = [
    {
      id: 1,
      name: "AgroExport Nigeria Ltd",
      description: "Premium agricultural products and commodities exporter with 15+ years experience",
      location: "Lagos, Nigeria",
      country: "🇳🇬",
      rating: 4.9,
      reviews: 234,
      verified: true,
      certifications: ["HACCP", "ISO 22000", "Organic"],
      categories: ["Agriculture", "Food Processing"],
      productsCount: 45,
      responseTime: "< 2 hours",
      minOrder: "$5,000",
      logo: "/suppliers/agroexport.jpg"
    },
    {
      id: 2,
      name: "Ghana Cocoa Collective",
      description: "Largest cocoa and coffee beans exporter in West Africa",
      location: "Kumasi, Ghana",
      country: "🇬🇭",
      rating: 4.8,
      reviews: 189,
      verified: true,
      certifications: ["Fair Trade", "Rainforest Alliance", "Organic"],
      categories: ["Agriculture", "Commodities"],
      productsCount: 23,
      responseTime: "< 1 hour",
      minOrder: "$10,000",
      logo: "/suppliers/ghana-cocoa.jpg"
    },
    {
      id: 3,
      name: "East Africa Spices Co.",
      description: "Traditional spices and herbs from the highlands of Kenya and Tanzania",
      location: "Nairobi, Kenya",
      country: "🇰🇪",
      rating: 4.7,
      reviews: 156,
      verified: true,
      certifications: ["Organic", "Global GAP"],
      categories: ["Spices", "Agriculture"],
      productsCount: 67,
      responseTime: "< 3 hours",
      minOrder: "$3,000",
      logo: "/suppliers/east-africa-spices.jpg"
    },
    {
      id: 4,
      name: "Sahel Botanicals",
      description: "Medicinal plants and natural ingredients from the Sahel region",
      location: "Kano, Nigeria",
      country: "🇳🇬",
      rating: 4.6,
      reviews: 98,
      verified: true,
      certifications: ["Organic", "WHO-GMP"],
      categories: ["Botanicals", "Pharmaceuticals"],
      productsCount: 34,
      responseTime: "< 4 hours",
      minOrder: "$2,500",
      logo: "/suppliers/sahel-botanicals.jpg"
    },
    {
      id: 5,
      name: "Southern Africa Minerals",
      description: "Mining and mineral processing with focus on precious metals",
      location: "Johannesburg, South Africa",
      country: "🇿🇦",
      rating: 4.8,
      reviews: 145,
      verified: true,
      certifications: ["ISO 9001", "Mining Charter"],
      categories: ["Mining", "Metals"],
      productsCount: 12,
      responseTime: "< 2 hours",
      minOrder: "$50,000",
      logo: "/suppliers/southern-minerals.jpg"
    },
    {
      id: 6,
      name: "Women's Shea Cooperative",
      description: "Fair trade shea butter and skincare products from women's cooperatives",
      location: "Tamale, Ghana",
      country: "🇬🇭",
      rating: 4.9,
      reviews: 278,
      verified: true,
      certifications: ["Fair Trade", "Women's Cooperative", "Organic"],
      categories: ["Cosmetics", "Personal Care"],
      productsCount: 18,
      responseTime: "< 1 hour",
      minOrder: "$1,500",
      logo: "/suppliers/womens-shea.jpg"
    }
  ]

  const countries = [
    { code: "all", name: "All Countries", flag: "🌍" },
    { code: "nigeria", name: "Nigeria", flag: "🇳🇬" },
    { code: "ghana", name: "Ghana", flag: "🇬🇭" },
    { code: "kenya", name: "Kenya", flag: "🇰🇪" },
    { code: "south-africa", name: "South Africa", flag: "🇿🇦" },
  ]

  const categories = [
    "All Categories",
    "Agriculture",
    "Food Processing", 
    "Commodities",
    "Spices",
    "Botanicals",
    "Mining",
    "Cosmetics"
  ]

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplier.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCountry = selectedCountry === "all" || 
                          supplier.location.toLowerCase().includes(selectedCountry.replace("-", " "))
    
    const matchesCategory = selectedCategory === "All Categories" || 
                           supplier.categories.includes(selectedCategory)
    
    return matchesSearch && matchesCountry && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="heading-lg">Verified African Suppliers</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with trusted suppliers across Africa, all verified for quality and reliability
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search suppliers, products, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="input-modern w-full md:w-48"
          >
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-modern w-full md:w-48"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredSuppliers.length} suppliers
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} variant="elevated" interactive="hover" className="group">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">
                        {supplier.name}
                      </CardTitle>
                      {supplier.verified && (
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{supplier.country} {supplier.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-2">
                  {supplier.description}
                </CardDescription>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{supplier.rating}</span>
                    <span className="text-muted-foreground">({supplier.reviews})</span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{supplier.productsCount} products</span>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1">
                  {supplier.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {category}
                    </Badge>
                  ))}
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1">
                  {supplier.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" size="sm">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Response Time</span>
                    <div className="font-medium">{supplier.responseTime}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Min Order</span>
                    <div className="font-medium">{supplier.minOrder}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Link href={`/suppliers/${supplier.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Globe className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/dashboard/messages?supplier=${supplier.id}`}>
                    <Button size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Suppliers
          </Button>
        </div>
      </div>
    </div>
  )
} 