"use client"

import React from "react"
import Link from "next/link"
import { 
  Package, TrendingUp, ShoppingCart, DollarSign, 
  Eye, Star, MessageSquare, Plus, BarChart3,
  Clock, CheckCircle, AlertCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SellerDashboard() {
  // Mock data for seller dashboard
  const stats = [
    {
      title: "Total Products",
      value: "12",
      change: "+2 this month",
      icon: Package,
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Total Sales",
      value: "$4,850",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-green-600 bg-green-100"
    },
    {
      title: "Active Orders",
      value: "8",
      change: "3 pending shipment",
      icon: ShoppingCart,
      color: "text-orange-600 bg-orange-100"
    },
    {
      title: "Customer Rating",
      value: "4.7",
      change: "Based on 23 reviews",
      icon: Star,
      color: "text-yellow-600 bg-yellow-100"
    }
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Smith",
      product: "Organic Honey - 500ml",
      quantity: 5,
      amount: "$125.00",
      status: "pending",
      date: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&face=center"
    },
    {
      id: "ORD-002", 
      customer: "Emma Wilson",
      product: "Handwoven Basket Set",
      quantity: 2,
      amount: "$89.00",
      status: "shipped",
      date: "2024-01-14",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&face=center"
    },
    {
      id: "ORD-003",
      customer: "Michael Chen",
      product: "Shea Butter - Natural",
      quantity: 3,
      amount: "$67.50",
      status: "delivered", 
      date: "2024-01-12",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center"
    }
  ]

  const topProducts = [
    {
      name: "Organic Honey - 500ml",
      sales: 45,
      revenue: "$1,350",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587049016037-a7f0bb7e8d91?w=60&h=60&fit=crop"
    },
    {
      name: "Handwoven Basket Set",
      sales: 32,
      revenue: "$1,120",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb-_?w=60&h=60&fit=crop"
    },
    {
      name: "Shea Butter - Natural",
      sales: 28,
      revenue: "$840",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1615906657446-c8c5d2f9b6b8?w=60&h=60&fit=crop"
    }
  ]

  const quickActions = [
    {
      title: "Add New Product",
      description: "List a new product for sale",
      icon: Plus,
      href: "/dashboard/products/new",
      color: "bg-blue-500"
    },
    {
      title: "View Orders",
      description: "Manage customer orders",
      icon: ShoppingCart,
      href: "/dashboard/orders",
      color: "bg-green-500"
    },
    {
      title: "Analytics",
      description: "View sales performance",
      icon: BarChart3,
      href: "/dashboard/analytics",
      color: "bg-purple-500"
    },
    {
      title: "Messages",
      description: "Chat with customers",
      icon: MessageSquare,
      href: "/dashboard/messages",
      color: "bg-orange-500"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-600 bg-yellow-100"
      case "shipped": return "text-blue-600 bg-blue-100"  
      case "delivered": return "text-green-600 bg-green-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-3 w-3" />
      case "shipped": return <Package className="h-3 w-3" />
      case "delivered": return <CheckCircle className="h-3 w-3" />
      default: return <AlertCircle className="h-3 w-3" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
        
        <div className="flex space-x-3">
          <Link href="/dashboard/products/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View Store
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </div>
              <Link href="/dashboard/orders">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={order.avatar} />
                      <AvatarFallback>{order.customer[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">{order.product}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">Qty: {order.quantity}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{order.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{order.amount}</p>
                    <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best performing products this month</CardDescription>
              </div>
              <Link href="/dashboard/analytics">
                <Button variant="outline" size="sm">View Analytics</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{product.sales} sales</span>
                      <span>•</span>
                      <span>{product.revenue}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your business efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link key={action.title} href={action.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${action.color}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{action.title}</p>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Seller Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">Boost Your Sales</h3>
              <p className="text-blue-700 mt-1">
                Add high-quality photos, detailed descriptions, and competitive pricing to increase your product visibility and sales.
              </p>
              <div className="flex space-x-3 mt-3">
                <Link href="/dashboard/products/new">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add Product
                  </Button>
                </Link>
                <Link href="/help/seller-guide">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                    Seller Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 