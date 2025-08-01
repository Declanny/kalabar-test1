"use client"

import React from "react"
import Link from "next/link"
import {
  Search, ShoppingCart, DollarSign, CheckCircle,
  FileText, Star,
  MapPin, ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BuyerDashboard() {
  // Mock data for buyer dashboard
  const procurementStats = [
    {
      title: "Active RFQs",
      value: "12",
      change: "+3 this week",
      changeType: "positive",
      icon: FileText,
      href: "/dashboard/rfq"
    },
    {
      title: "Total Spend",
      value: "$284,550",
      change: "+18% this month", 
      changeType: "positive",
      icon: DollarSign,
      href: "/dashboard/orders"
    },
    {
      title: "Active Orders",
      value: "24",
      change: "8 pending delivery",
      changeType: "neutral",
      icon: ShoppingCart,
      href: "/dashboard/orders"
    },
    {
      title: "Supplier Network",
      value: "156",
      change: "+12 verified",
      changeType: "positive", 
      icon: Users,
      href: "/dashboard/suppliers"
    }
  ]

  const recentOrders = [
    {
      id: "ORD-2024-0089",
      supplier: "AgroExports Nigeria Ltd",
      products: "Premium Cashew Nuts (Raw)",
      quantity: "50 Tons",
      value: "$45,000",
      status: "In Transit",
      statusColor: "blue",
      deliveryDate: "Jan 28, 2024",
      location: "Lagos, Nigeria"
    },
    {
      id: "ORD-2024-0087", 
      supplier: "Golden Cocoa Ghana",
      products: "Organic Cocoa Beans",
      quantity: "25 Tons",
      value: "$32,500",
      status: "Processing",
      statusColor: "orange",
      deliveryDate: "Feb 2, 2024",
      location: "Accra, Ghana"
    },
    {
      id: "ORD-2024-0085",
      supplier: "East Africa Coffee Co",
      products: "Premium Coffee Beans",
      quantity: "10 Tons", 
      value: "$18,750",
      status: "Delivered",
      statusColor: "green",
      deliveryDate: "Jan 20, 2024",
      location: "Nairobi, Kenya"
    }
  ]

  const pendingRFQs = [
    {
      id: "RFQ-2024-0034",
      title: "Organic Sesame Seeds - 100 Tons",
      category: "Seeds & Grains",
      responses: 8,
      deadline: "Feb 5, 2024",
      budget: "$85,000 - $120,000",
      status: "Active"
    },
    {
      id: "RFQ-2024-0033",
      title: "Premium Shea Butter - 5 Tons", 
      category: "Beauty & Cosmetics",
      responses: 12,
      deadline: "Feb 1, 2024",
      budget: "$45,000 - $65,000",
      status: "Closing Soon"
    },
    {
      id: "RFQ-2024-0032",
      title: "Dried Hibiscus Flowers - 2 Tons",
      category: "Herbs & Spices", 
      responses: 6,
      deadline: "Jan 30, 2024",
      budget: "$8,000 - $12,000",
      status: "Under Review"
    }
  ]

  const topSuppliers = [
    {
      name: "AgroExports Nigeria Ltd",
      rating: 4.9,
      orders: 23,
      totalValue: "$156,750",
      onTimeDelivery: "98%",
      location: "Lagos, Nigeria",
      verified: true,
      specialties: ["Cashews", "Cocoa", "Palm Oil"]
    },
    {
      name: "Golden Valley Farms",
      rating: 4.8,
      orders: 18,
      totalValue: "$124,200", 
      onTimeDelivery: "95%",
      location: "Accra, Ghana",
      verified: true,
      specialties: ["Cocoa", "Coffee", "Shea Butter"]
    },
    {
      name: "East Africa Commodities",
      rating: 4.7,
      orders: 15,
      totalValue: "$98,400",
      onTimeDelivery: "92%",
      location: "Nairobi, Kenya", 
      verified: true,
      specialties: ["Coffee", "Tea", "Macadamia"]
    }
  ]

  const quickActions = [
    {
      title: "Create RFQ",
      description: "Request quotes from suppliers",
      icon: FileText,
      href: "/dashboard/rfq/new",
      color: "bg-blue-500"
    },
    {
      title: "Browse Marketplace", 
      description: "Discover new suppliers",
      icon: Search,
      href: "/marketplace",
      color: "bg-green-500"
    },
    {
      title: "Supplier Directory",
      description: "View verified suppliers",
      icon: Users,
      href: "/dashboard/suppliers",
      color: "bg-purple-500"
    },
    {
      title: "Trade Finance",
      description: "Financing & payment options",
      icon: DollarSign,
      href: "/dashboard/trade-finance", 
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="heading-lg">Buyer Dashboard</h1>
          <p className="text-muted-foreground body-md">
            Manage your procurement and supplier relationships
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Link href="/dashboard/rfq/new" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              <FileText className="h-4 w-4 mr-2" />
              Create RFQ
            </Button>
          </Link>
          <Link href="/marketplace" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <Search className="h-4 w-4 mr-2" />
              Browse Suppliers
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {procurementStats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                    <p className={`text-xs ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-muted-foreground'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Recent Orders */}
        <div className="xl:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Track your active procurement orders</CardDescription>
              </div>
              <Link href="/dashboard/orders">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm lg:text-base">{order.id}</h4>
                        <Badge 
                          variant={order.statusColor === 'green' ? 'success' : order.statusColor === 'blue' ? 'info' : 'default'}
                          size="sm"
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.supplier}</p>
                      <p className="font-medium">{order.products}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span>{order.quantity}</span>
                        <span className="font-semibold text-primary">{order.value}</span>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {order.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end text-right">
                      <span className="text-sm text-muted-foreground">Delivery</span>
                      <span className="text-sm font-medium">{order.deliveryDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending RFQs */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active RFQs</CardTitle>
                <CardDescription>Manage your quote requests</CardDescription>
              </div>
              <Link href="/dashboard/rfq">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingRFQs.map((rfq) => (
                  <div key={rfq.id} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm lg:text-base">{rfq.title}</h4>
                        <p className="text-sm text-muted-foreground">{rfq.category}</p>
                      </div>
                      <Badge variant={rfq.status === 'Active' ? 'success' : rfq.status === 'Closing Soon' ? 'destructive' : 'default'} size="sm">
                        {rfq.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Responses:</span>
                        <span className="ml-2 font-medium">{rfq.responses}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <span className="ml-2 font-medium">{rfq.deadline}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="ml-2 font-medium">{rfq.budget}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Top Suppliers */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Suppliers</CardTitle>
              <CardDescription>Your most reliable partners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSuppliers.map((supplier, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/avatars/supplier-${index + 1}.jpg`} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {supplier.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-sm truncate">{supplier.name}</h4>
                          {supplier.verified && <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />}
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{supplier.rating}</span>
                          <span className="text-xs text-muted-foreground">({supplier.orders} orders)</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{supplier.location}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {supplier.specialties.slice(0, 2).map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" size="sm" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                      <div>
                        <span className="text-muted-foreground">Total Value:</span>
                        <div className="font-medium">{supplier.totalValue}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">On-time:</span>
                        <div className="font-medium text-green-600">{supplier.onTimeDelivery}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/dashboard/suppliers">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Suppliers
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common procurement tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Button variant="outline" className="w-full justify-start h-auto p-4 hover:bg-accent">
                      <div className={`p-2 rounded-lg ${action.color} text-white mr-3`}>
                        <action.icon className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 