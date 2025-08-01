"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Package, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"

export default function CategoriesPage() {
  const categories = [
    { 
      id: "agriculture", 
      name: "Agriculture & Food", 
      count: 1245, 
      icon: "🌾", 
      description: "Fresh produce, grains, nuts, and agricultural products from African farms",
      subcategories: ["Grains & Cereals", "Nuts & Seeds", "Fresh Produce", "Livestock", "Organic Foods"],
      featured: true,
      growth: "+12%"
    },
    { 
      id: "textiles", 
      name: "Textiles & Clothing", 
      count: 567, 
      icon: "👕", 
      description: "Traditional fabrics, clothing, and textile products",
      subcategories: ["Cotton Fabric", "Traditional Wear", "Home Textiles", "Fashion Accessories", "Leather Goods"],
      featured: true,
      growth: "+8%"
    },
    { 
      id: "manufacturing", 
      name: "Manufacturing", 
      count: 423, 
      icon: "🏭", 
      description: "Industrial products, machinery, and manufactured goods",
      subcategories: ["Machinery", "Tools & Equipment", "Auto Parts", "Industrial Supplies"],
      featured: false,
      growth: "+15%"
    },
    { 
      id: "commodities", 
      name: "Commodities", 
      count: 312, 
      icon: "⚡", 
      description: "Raw materials, metals, minerals, and energy products",
      subcategories: ["Metals & Minerals", "Energy", "Chemicals", "Raw Materials"],
      featured: true,
      growth: "+6%"
    },
    { 
      id: "crafts", 
      name: "Arts & Crafts", 
      count: 189, 
      icon: "🎨", 
      description: "Traditional crafts, artwork, and handmade products",
      subcategories: ["Traditional Crafts", "Jewelry", "Home Decor", "Artwork"],
      featured: false,
      growth: "+22%"
    },
    { 
      id: "other", 
      name: "Other Products", 
      count: 111, 
      icon: "📦", 
      description: "Electronics, beauty products, and miscellaneous items",
      subcategories: ["Electronics", "Beauty Products", "Miscellaneous"],
      featured: false,
      growth: "+4%"
    }
  ]

  const featuredCategories = categories.filter(cat => cat.featured)
  const otherCategories = categories.filter(cat => !cat.featured)

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
          <span className="text-foreground">Categories</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/marketplace">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Marketplace
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of products from verified African suppliers across various industries
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">250+</div>
              <div className="text-sm text-muted-foreground">Suppliers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Categories */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <Badge variant="secondary">Top Performing</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link 
                key={category.id} 
                href={`/marketplace/category/${category.id}`}
                className="group block"
              >
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white via-white to-primary/5 group-hover:from-primary/5 group-hover:to-primary/15 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/25 group-hover:from-primary/20 group-hover:to-primary/35 transition-all duration-500 group-hover:scale-110">
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="mb-2">
                          {category.growth}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {category.count} products
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      <p className="text-muted-foreground line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.slice(0, 3).map((sub, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.subcategories.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                        <span className="font-medium">Explore Category</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Package className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">All Categories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category) => (
              <Link 
                key={category.id} 
                href={`/marketplace/category/${category.id}`}
                className="group block"
              >
                <Card className="hover:shadow-lg transition-all duration-300 border group-hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gray-100 group-hover:bg-primary/10 transition-colors duration-300">
                        <span className="text-xl">{category.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {category.growth}
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can help you connect with specialized suppliers or find custom products that meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/suppliers">
                Browse All Suppliers
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 