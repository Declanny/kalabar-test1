"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Search, Star, CheckCircle, Shield, 
  Users, Package, MessageSquare, Phone,
  Mail, Globe, Award, Eye,
  Heart, Plus, Download, MoreHorizontal
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SupplierManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [countryFilter, setCountryFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const supplierStats = [
    {
      title: "Total Suppliers",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Verified Partners",
      value: "89",
      change: "57% verified",
      icon: Shield,
      color: "text-green-600"
    },
    {
      title: "Active Orders",
      value: "24",
      change: "8 countries",
      icon: Package,
      color: "text-orange-600"
    },
    {
      title: "Average Rating",
      value: "4.7",
      change: "Excellent",
      icon: Star,
      color: "text-yellow-600"
    }
  ]

  const suppliers = [
    {
      id: "SUP-001",
      name: "AgroExports Nigeria Ltd",
      logo: "/avatars/supplier-1.jpg",
      country: "Nigeria",
      location: "Lagos, Nigeria",
      flag: "🇳🇬",
      verified: true,
      premium: true,
      rating: 4.9,
      reviews: 156,
      orders: 23,
      totalValue: "$156,750",
      onTimeDelivery: "98%",
      responseTime: "< 2 hours",
      established: "2015",
      employees: "50-100",
      categories: ["Cashews", "Cocoa", "Palm Oil"],
      specialties: ["Organic Certified", "Fair Trade", "Export Ready"],
      contact: {
        email: "sales@agroexports.ng",
        phone: "+234 803 123 4567",
        website: "www.agroexports.ng"
      },
      certifications: ["ISO 9001", "HACCP", "Organic EU", "Fair Trade"],
      lastOrder: "2 days ago",
      status: "Active Partner",
      statusColor: "success"
    },
    {
      id: "SUP-002",
      name: "Golden Valley Farms",
      logo: "/avatars/supplier-2.jpg",
      country: "Ghana",
      location: "Accra, Ghana",
      flag: "🇬🇭",
      verified: true,
      premium: false,
      rating: 4.8,
      reviews: 89,
      orders: 18,
      totalValue: "$124,200",
      onTimeDelivery: "95%",
      responseTime: "< 4 hours",
      established: "2018",
      employees: "20-50",
      categories: ["Cocoa", "Coffee", "Shea Butter"],
      specialties: ["Premium Quality", "Direct Farm", "Sustainability"],
      contact: {
        email: "info@goldenvalley.gh",
        phone: "+233 244 567 890",
        website: "www.goldenvalley.gh"
      },
      certifications: ["Rainforest Alliance", "UTZ", "Organic"],
      lastOrder: "1 week ago",
      status: "Preferred",
      statusColor: "info"
    },
    {
      id: "SUP-003",
      name: "East Africa Commodities",
      logo: "/avatars/supplier-3.jpg",
      country: "Kenya",
      location: "Nairobi, Kenya",
      flag: "🇰🇪",
      verified: true,
      premium: false,
      rating: 4.7,
      reviews: 67,
      orders: 15,
      totalValue: "$98,400",
      onTimeDelivery: "92%",
      responseTime: "< 6 hours",
      established: "2012",
      employees: "100-500",
      categories: ["Coffee", "Tea", "Macadamia"],
      specialties: ["Single Origin", "Estate Grown", "Traceability"],
      contact: {
        email: "exports@eacommodities.ke",
        phone: "+254 722 345 678",
        website: "www.eacommodities.ke"
      },
      certifications: ["Fair Trade", "Organic", "4C Coffee"],
      lastOrder: "3 weeks ago",
      status: "Regular",
      statusColor: "default"
    },
    {
      id: "SUP-004",
      name: "Sesame Traders Burkina",
      logo: "/avatars/supplier-4.jpg",
      country: "Burkina Faso",
      location: "Ouagadougou, Burkina Faso",
      flag: "🇧🇫",
      verified: false,
      premium: false,
      rating: 4.5,
      reviews: 34,
      orders: 8,
      totalValue: "$45,600",
      onTimeDelivery: "88%",
      responseTime: "< 12 hours",
      established: "2020",
      employees: "10-20",
      categories: ["Sesame", "Shea Nuts", "Cereals"],
      specialties: ["Bulk Supply", "Competitive Pricing", "Local Sourcing"],
      contact: {
        email: "contact@sesametraders.bf",
        phone: "+226 70 12 34 56",
        website: "www.sesametraders.bf"
      },
      certifications: ["Local Certification"],
      lastOrder: "2 months ago",
      status: "New Partner",
      statusColor: "secondary"
    }
  ]

  const countries = ["Nigeria", "Ghana", "Kenya", "Burkina Faso", "Ivory Coast"]
  const categories = ["Cashews", "Cocoa", "Coffee", "Sesame", "Shea Butter", "Palm Oil"]

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (countryFilter === "all" || supplier.country === countryFilter) &&
    (categoryFilter === "all" || supplier.categories.some(cat => cat === categoryFilter))
  )

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="heading-lg">Supplier Network</h1>
          <p className="text-muted-foreground body-md">
            Manage your supplier relationships and partnerships
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export List
          </Button>
          <Link href="/marketplace">
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Find New Suppliers
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {supplierStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <stat.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search suppliers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Country Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={countryFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCountryFilter("all")}
              >
                All Countries
              </Button>
              {countries.map((country) => (
                <Button
                  key={country}
                  variant={countryFilter === country ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCountryFilter(country)}
                >
                  {country}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={categoryFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter("all")}
              >
                All Categories
              </Button>
              {categories.slice(0, 3).map((category) => (
                <Button
                  key={category}
                  variant={categoryFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supplier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSuppliers.map((supplier) => (
          <Card key={supplier.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 lg:p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={supplier.logo} alt={supplier.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {supplier.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg truncate">{supplier.name}</h3>
                        {supplier.verified && <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />}
                        {supplier.premium && <Award className="h-4 w-4 text-orange-500 flex-shrink-0" />}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <span className="text-lg mr-1">{supplier.flag}</span>
                          <span>{supplier.location}</span>
                        </div>
                        <Badge variant={"default"} size="sm">
                          {supplier.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon-sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{supplier.rating}</span>
                      <span className="text-sm text-muted-foreground">({supplier.reviews})</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {supplier.orders} orders
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {supplier.totalValue}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Last order: {supplier.lastOrder}
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {supplier.categories.map((category, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {category}
                    </Badge>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-3 bg-muted/30 rounded-lg">
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{supplier.onTimeDelivery}</div>
                    <div className="text-xs text-muted-foreground">On-time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{supplier.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{supplier.employees}</div>
                    <div className="text-xs text-muted-foreground">Employees</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {supplier.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" size="sm" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Certifications</h4>
                  <div className="flex flex-wrap gap-1">
                    {supplier.certifications.map((cert, index) => (
                      <Badge key={index} variant="info" size="sm" className="text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Contact</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <span className="truncate">{supplier.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      <span>{supplier.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <Globe className="h-3 w-3 text-muted-foreground" />
                      <span className="truncate">{supplier.contact.website}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Package className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredSuppliers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No Suppliers Found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || countryFilter !== "all" || categoryFilter !== "all" 
                ? "No suppliers match your current filters." 
                : "You haven't connected with any suppliers yet."}
            </p>
            <Link href="/marketplace">
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Discover Suppliers
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 