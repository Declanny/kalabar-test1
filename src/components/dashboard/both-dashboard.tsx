"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Package, TrendingUp, ShoppingCart, DollarSign, 
  Eye, Plus, BarChart3, Users,
  Clock, CheckCircle, AlertCircle, CreditCard,
  ArrowUpRight, ArrowDownRight, Zap, Award, Target
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function BothDashboard() {
  const [activeView, setActiveView] = useState<"overview" | "selling" | "buying">("overview")

  // Combined stats for both selling and buying
  const combinedStats = [
    {
      title: "Products Listed",
      value: "15",
      change: "+3 this month",
      icon: Package,
      color: "text-blue-600 bg-blue-100",
      type: "selling"
    },
    {
      title: "Sales Revenue",
      value: "$12,450",
      change: "+18% from last month",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
      type: "selling"
    },
    {
      title: "Purchase Orders",
      value: "23",
      change: "8 active orders",
      icon: ShoppingCart,
      color: "text-orange-600 bg-orange-100",
      type: "buying"
    },
    {
      title: "Suppliers Connected",
      value: "47",
      change: "+5 new suppliers",
      icon: Users,
      color: "text-purple-600 bg-purple-100",
      type: "buying"
    }
  ]

  const recentSellingOrders = [
    {
      id: "SELL-001",
      customer: "Global Foods Ltd",
      product: "Premium Cashew Nuts",
      quantity: "500kg",
      amount: "$6,250",
      status: "shipped",
      date: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&face=center"
    },
    {
      id: "SELL-002",
      customer: "Euro Trade Partners",
      product: "Organic Cocoa Beans",
      quantity: "1000kg",
      amount: "$4,200",
      status: "pending",
      date: "2024-01-14",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&face=center"
    }
  ]

  const recentBuyingOrders = [
    {
      id: "BUY-001",
      supplier: "Ghana Sesame Co",
      product: "White Sesame Seeds",
      quantity: "750kg",
      amount: "$1,650",
      status: "delivered",
      date: "2024-01-13",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center"
    },
    {
      id: "BUY-002",
      supplier: "West Africa Spices",
      product: "Dried Ginger",
      quantity: "200kg",
      amount: "$800",
      status: "in_transit",
      date: "2024-01-12",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&face=center"
    }
  ]

  const quickActions = [
    {
      title: "Add Product",
      description: "List new product to sell",
      icon: Plus,
      href: "/dashboard/products/new",
      color: "bg-blue-500",
      category: "selling"
    },
    {
      title: "Browse Marketplace",
      description: "Source new products",
      icon: Eye,
      href: "/marketplace",
      color: "bg-green-500",
      category: "buying"
    },
    {
      title: "Trade Finance",
      description: "Manage financing",
      icon: CreditCard,
      href: "/dashboard/trade-finance",
      color: "bg-purple-500",
      category: "both"
    },
    {
      title: "Analytics",
      description: "View performance",
      icon: BarChart3,
      href: "/dashboard/analytics",
      color: "bg-orange-500",
      category: "both"
    }
  ]

  const marketOpportunities = [
    {
      title: "High Demand: Organic Products",
      description: "30% increase in organic product requests",
      trend: "up",
      color: "text-green-600 bg-green-50 border-green-200"
    },
    {
      title: "New Market: European Buyers",
      description: "15 new verified buyers from Europe",
      trend: "up",
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "Price Alert: Cocoa Beans",
      description: "Cocoa prices up 8% - good selling opportunity",
      trend: "up",
      color: "text-orange-600 bg-orange-50 border-orange-200"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-600 bg-yellow-100"
      case "shipped": case "in_transit": return "text-blue-600 bg-blue-100"
      case "delivered": return "text-green-600 bg-green-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-3 w-3" />
      case "shipped": case "in_transit": return <Package className="h-3 w-3" />
      case "delivered": return <CheckCircle className="h-3 w-3" />
      default: return <AlertCircle className="h-3 w-3" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Business Command Center</h1>
          <p className="text-muted-foreground">
            Manage your complete supply chain - selling and sourcing in one place
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 text-primary border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Premium Account
          </Badge>
          <div className="flex space-x-2">
            <Link href="/dashboard/products/new">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Browse Market
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex space-x-2 bg-muted p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveView("overview")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeView === "overview"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveView("selling")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeView === "selling"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Selling
        </button>
        <button
          onClick={() => setActiveView("buying")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            activeView === "buying"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Buying
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {combinedStats
          .filter(stat => activeView === "overview" || stat.type === activeView || activeView === "both")
          .map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="relative overflow-hidden">
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
                  <div className="absolute top-2 right-2">
                    {stat.type === "selling" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Recent Sales Orders */}
        {(activeView === "overview" || activeView === "selling") && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                    <span>Recent Sales</span>
                  </CardTitle>
                  <CardDescription>Products you&apos;ve sold</CardDescription>
                </div>
                <Link href="/dashboard/orders?type=selling">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSellingOrders.map((order) => (
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
                          <span className="text-xs text-muted-foreground">{order.quantity}</span>
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
        )}

        {/* Recent Purchase Orders */}
        {(activeView === "overview" || activeView === "buying") && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <ArrowDownRight className="h-4 w-4 text-blue-500" />
                    <span>Recent Purchases</span>
                  </CardTitle>
                  <CardDescription>Products you&apos;ve sourced</CardDescription>
                </div>
                <Link href="/dashboard/orders?type=buying">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBuyingOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={order.avatar} />
                        <AvatarFallback>{order.supplier[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{order.supplier}</p>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-muted-foreground">{order.quantity}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{order.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{order.amount}</p>
                      <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status.replace("_", " ")}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Market Opportunities */}
        {activeView === "overview" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-purple-500" />
                    <span>Market Insights</span>
                  </CardTitle>
                  <CardDescription>Opportunities & trends</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketOpportunities.map((opportunity, index) => (
                  <div key={index} className={`p-3 border rounded-lg ${opportunity.color}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{opportunity.title}</p>
                        <p className="text-xs mt-1 opacity-80">{opportunity.description}</p>
                      </div>
                      <TrendingUp className="h-4 w-4 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Streamline your business operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions
              .filter(action => activeView === "overview" || action.category === activeView || action.category === "both")
              .map((action) => {
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

      {/* Business Tips */}
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-900">Trading Business Excellence</h3>
              <p className="text-purple-700 mt-1">
                You&apos;re operating as both a supplier and buyer. Leverage your dual position to identify market gaps, 
                negotiate better prices, and build stronger relationships across the supply chain.
              </p>
              <div className="flex space-x-3 mt-3">
                <Link href="/dashboard/analytics">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    View Analytics
                  </Button>
                </Link>
                <Link href="/help/trading-guide">
                  <Button variant="outline" size="sm" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                    Trading Guide
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