"use client"

import React from "react"
import Link from "next/link"
import {
  Package, DollarSign, Globe, 
  FileText, BarChart3, ShoppingCart, CheckCircle,
  Star, ArrowRight, Eye
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SupplierDashboard() {
  // Mock data for supplier dashboard
  const salesStats = [
    {
      title: "Total Revenue",
      value: "$127,450",
      change: "+12.5% this month",
      changeType: "positive",
      icon: DollarSign,
      href: "/dashboard/analytics"
    },
    {
      title: "Products Listed",
      value: "89",
      change: "+5 this week",
      changeType: "positive",
      icon: Package,
      href: "/dashboard/products"
    },
    {
      title: "Active Orders",
      value: "24",
      change: "8 pending",
      changeType: "neutral",
      icon: ShoppingCart,
      href: "/dashboard/orders"
    },
    {
      title: "Export Markets",
      value: "12",
      change: "+2 countries",
      changeType: "positive",
      icon: Globe,
      href: "/dashboard/export"
    }
  ]

  const recentOrders = [
    {
      id: "ORD-2024-001",
      buyer: "Global Foods Ltd",
      buyerCountry: "🇺🇸",
      buyerContact: "Sarah Chen",
      product: "Premium Organic Cashew Nuts",
      quantity: "2,500 kg",
      value: "$11,250",
      status: "Confirmed",
      statusColor: "green",
      orderDate: "Jan 15, 2024",
      deliveryDate: "Feb 10, 2024"
    },
    {
      id: "ORD-2024-002",
      buyer: "Middle East Traders",
      buyerCountry: "🇦🇪",
      buyerContact: "Mohammed Ali",
      product: "Raw Cocoa Beans - Premium Grade",
      quantity: "1,200 kg",
      value: "$4,560",
      status: "Processing",
      statusColor: "orange",
      orderDate: "Jan 14, 2024",
      deliveryDate: "Feb 15, 2024"
    },
    {
      id: "ORD-2024-003",
      buyer: "Euro Trade Partners",
      buyerCountry: "🇩🇪",
      buyerContact: "Emma Thompson",
      product: "Sesame Seeds - White Hulled",
      quantity: "800 kg",
      value: "$1,760",
      status: "Shipped",
      statusColor: "blue",
      orderDate: "Jan 12, 2024",
      deliveryDate: "Jan 28, 2024"
    }
  ]

  const topProducts = [
    {
      name: "Premium Organic Cashew Nuts",
      category: "Nuts & Seeds",
      revenue: "$45,230",
      orders: 156,
      stock: 2500,
      unit: "kg",
      rating: 4.8,
      image: "/products/cashew.jpg"
    },
    {
      name: "Raw Cocoa Beans - Premium Grade",
      category: "Cocoa & Coffee",
      revenue: "$32,150",
      orders: 89,
      stock: 1200,
      unit: "kg",
      rating: 4.9,
      image: "/products/cocoa.jpg"
    },
    {
      name: "Sesame Seeds - White Hulled",
      category: "Seeds & Grains",
      revenue: "$18,900",
      orders: 67,
      stock: 800,
      unit: "kg",
      rating: 4.7,
      image: "/products/sesame.jpg"
    }
  ]

  const activeBuyers = [
    {
      name: "Sarah Chen",
      company: "Global Foods Ltd",
      country: "🇺🇸 United States",
      totalOrders: 23,
      totalValue: "$156,750",
      lastOrder: "3 days ago",
      rating: 4.9,
      verified: true,
      avatar: "/avatars/sarah.jpg"
    },
    {
      name: "Mohammed Ali",
      company: "Middle East Traders",
      country: "🇦🇪 UAE",
      totalOrders: 18,
      totalValue: "$124,200",
      lastOrder: "1 week ago",
      rating: 4.8,
      verified: true,
      avatar: "/avatars/mohammed.jpg"
    },
    {
      name: "Emma Thompson",
      company: "Euro Trade Partners",
      country: "🇩🇪 Germany",
      totalOrders: 15,
      totalValue: "$98,400",
      lastOrder: "2 weeks ago",
      rating: 4.7,
      verified: true,
      avatar: "/avatars/emma.jpg"
    }
  ]

  const quickActions = [
    {
      title: "Add New Product",
      description: "List products for export",
      icon: Package,
      href: "/dashboard/products/new",
      color: "bg-blue-500"
    },
    {
      title: "View Analytics",
      description: "Sales & performance metrics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      color: "bg-green-500"
    },
    {
      title: "Export Services",
      description: "Documentation & logistics",
      icon: Globe,
      href: "/dashboard/export",
      color: "bg-purple-500"
    },
    {
      title: "Manage Documents",
      description: "Certifications & permits",
      icon: FileText,
      href: "/dashboard/documents",
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="heading-lg">Supplier Dashboard</h1>
          <p className="text-muted-foreground body-md">
            Manage your products, orders, and export operations
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Link href="/dashboard/products/new" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              <Package className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </Link>
          <Link href="/dashboard/analytics" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {salesStats.map((stat, index) => (
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
                <CardDescription>Track orders from your buyers</CardDescription>
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
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{order.buyerCountry}</span>
                        <span className="text-sm font-medium">{order.buyer}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Contact: {order.buyerContact}</p>
                      <p className="font-medium">{order.product}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span>{order.quantity}</span>
                        <span className="font-semibold text-primary">{order.value}</span>
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

          {/* Top Products */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>Your best-selling products</CardDescription>
              </div>
              <Link href="/dashboard/products">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm lg:text-base">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Revenue:</span>
                        <div className="font-medium text-primary">{product.revenue}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Orders:</span>
                        <div className="font-medium">{product.orders}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Stock:</span>
                        <div className="font-medium">{product.stock} {product.unit}</div>
                      </div>
                      <div>
                        <Link href={`/dashboard/products/${index + 1}`}>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Active Buyers & Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Buyers</CardTitle>
              <CardDescription>Your top customer relationships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeBuyers.map((buyer, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={buyer.avatar} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {buyer.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-sm truncate">{buyer.name}</h4>
                          {buyer.verified && <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />}
                        </div>
                        <p className="text-xs text-muted-foreground">{buyer.company}</p>
                        <p className="text-xs text-muted-foreground">{buyer.country}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{buyer.rating}</span>
                          <span className="text-xs text-muted-foreground">({buyer.totalOrders} orders)</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                      <div>
                        <span className="text-muted-foreground">Total Value:</span>
                        <div className="font-medium">{buyer.totalValue}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last Order:</span>
                        <div className="font-medium">{buyer.lastOrder}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/dashboard/messages">
                  <Button variant="outline" size="sm" className="w-full">
                    Message Buyers
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common supplier tasks</CardDescription>
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