"use client"

import React, { useState } from "react"
import Link from "next/link"
import { CheckCircle, Globe, ShoppingCart, Users, ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"

export default function BuyersPage() {

  const buyerBenefits = [
    {
      icon: Globe,
      title: "Access Global Suppliers",
      description: "Connect with verified suppliers from across Africa specializing in premium export products."
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "All products come with certifications and quality guarantees for international standards."
    },
    {
      icon: ShoppingCart,
      title: "Streamlined Procurement",
      description: "Simplified ordering process with bulk pricing, trade documentation, and logistics support."
    },
    {
      icon: Users,
      title: "Direct Supplier Relations",
      description: "Build lasting relationships with suppliers through our integrated communication platform."
    }
  ]

  const featuredCategories = [
    {
      name: "Agricultural Products",
      description: "Premium cashews, cocoa, sesame seeds, and more",
      suppliers: 342,
      image: "/categories/agriculture.jpg",
      popular: ["Cashew Nuts", "Cocoa Beans", "Sesame Seeds", "Palm Oil"]
    },
    {
      name: "Textiles & Apparel",
      description: "Quality fabrics, clothing, and textile products",
      suppliers: 198,
      image: "/categories/textiles.jpg",
      popular: ["Cotton Fabric", "Printed Textiles", "Traditional Wear", "Leather Goods"]
    },
    {
      name: "Commodities",
      description: "Raw materials and mineral resources",
      suppliers: 156,
      image: "/categories/commodities.jpg",
      popular: ["Crude Oil", "Natural Gas", "Precious Metals", "Industrial Minerals"]
    },
    {
      name: "Food Products",
      description: "Processed foods and beverages for export",
      suppliers: 234,
      image: "/categories/food.jpg",
      popular: ["Spices", "Beverages", "Snacks", "Preserved Foods"]
    }
  ]

  const successStories = [
    {
      buyer: "Euro Imports GmbH",
      country: "🇩🇪 Germany",
      category: "Agricultural Products",
      story: "Sourced premium cashew nuts for European distribution",
      value: "$2.8M",
      period: "6 months"
    },
    {
      buyer: "Asian Trade Partners",
      country: "🇸🇬 Singapore",
      category: "Commodities",
      story: "Established long-term palm oil supply agreement",
      value: "$5.2M",
      period: "12 months"
    },
    {
      buyer: "North American Foods",
      country: "🇺🇸 USA",
      category: "Food Products",
      story: "Weekly shipments of African spices and seasonings",
      value: "$1.4M",
      period: "8 months"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <Badge variant="gradient" size="lg" className="mb-4">
              🌍 Global Procurement Made Simple
            </Badge>
            <h1 className="heading-xl max-w-4xl mx-auto">
              Source Premium Products from
              <span className="block gradient-text">Verified African Suppliers</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with quality suppliers across Africa for agricultural products, commodities, 
              textiles, and more. Streamlined procurement with quality assurance and export support.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace">
              <Button size="xl" className="w-full sm:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Marketplace
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Register as Buyer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose Kalabah for Procurement?</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the easiest way to source quality products from Africa with full transparency and support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Popular Product Categories</h2>
            <p className="body-lg text-muted-foreground">
              Discover premium products from verified African suppliers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Category Image</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                    <Badge variant="secondary">{category.suppliers} suppliers</Badge>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Popular Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.popular.map((product) => (
                        <Badge key={product} variant="outline" size="sm">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/marketplace?category=${category.name.toLowerCase().replace(' ', '-')}`}>
                    <Button variant="outline" className="w-full">
                      Browse Category
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 bg-muted/30 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Success Stories</h2>
            <p className="body-lg text-muted-foreground">
              See how international buyers are growing their business with African suppliers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold">{story.buyer}</h3>
                    <p className="text-sm text-muted-foreground">{story.country}</p>
                    <Badge variant="outline" size="sm" className="mt-2">
                      {story.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">&quot;{story.story}&quot;</p>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{story.value}</div>
                    <div className="text-xs text-muted-foreground">in {story.period}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-lg">Ready to Start Sourcing?</h2>
            <p className="body-lg text-muted-foreground">
              Join thousands of international buyers who trust Kalabah for their African sourcing needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="xl" className="w-full sm:w-auto">
                  Create Buyer Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Contact Sales Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 