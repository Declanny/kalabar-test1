'use client'

import React from 'react'
import { ArrowRight, Search, Users, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface HeroBannerProps {
  onSearchFocus?: () => void
  className?: string
}

export function HeroBanner({ onSearchFocus, className }: HeroBannerProps) {
  const stats = [
    { label: "Verified Suppliers", value: "15,000+" },
    { label: "Product Categories", value: "500+" },
    { label: "Countries", value: "45+" },
    { label: "Monthly Orders", value: "25,000+" }
  ]

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <Badge variant="gradient" size="lg" className="mb-4">
            🌍 Africa's Premier B2B Marketplace
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Connect with
              <span className="block gradient-text">Global B2B Suppliers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover quality products from verified African suppliers. Source materials, 
              equipment, and finished goods for your business needs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register?type=buyer">
              <Button size="xl" className="group w-full sm:w-auto">
                Find Suppliers
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/register?type=seller">
              <Button variant="outline" size="xl" className="group w-full sm:w-auto">
                Become a Supplier
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="relative cursor-text"
              onClick={onSearchFocus}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for products, suppliers, or categories..."
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background/80 backdrop-blur-sm text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                onFocus={onSearchFocus}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Try searching: "LED lights", "industrial pumps", "cotton fabric"
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-1">
                <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-wrap justify-center gap-6 text-sm pt-4">
            <Link href="/marketplace" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Package className="h-4 w-4" />
              Browse Products
            </Link>
            <Link href="/suppliers" className="text-muted-foreground hover:text-primary transition-colors">
              View All Suppliers →
            </Link>
            <Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
              Watch Demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 