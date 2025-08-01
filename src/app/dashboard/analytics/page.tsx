"use client"

import React, { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, Package, Users, Globe, BarChart3, PieChart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  const metrics = [
    {
      title: "Total Revenue",
      value: "$127,450",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Products Sold",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Active Buyers",
      value: "456",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Export Markets",
      value: "23",
      change: "+4",
      trend: "up",
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ]

  const topProducts = [
    { name: "Premium Cashew Nuts", revenue: "$45,230", percentage: 35.5, orders: 234 },
    { name: "Organic Cocoa Beans", revenue: "$32,150", percentage: 25.2, orders: 189 },
    { name: "Raw Sesame Seeds", revenue: "$28,900", percentage: 22.7, orders: 156 },
    { name: "Dried Hibiscus Flowers", revenue: "$12,450", percentage: 9.8, orders: 89 },
    { name: "Shea Butter", revenue: "$8,720", percentage: 6.8, orders: 67 }
  ]

  const topMarkets = [
    { country: "United States", flag: "🇺🇸", revenue: "$48,900", percentage: 38.4, orders: 145 },
    { country: "Germany", flag: "🇩🇪", revenue: "$32,150", percentage: 25.2, orders: 98 },
    { country: "United Kingdom", flag: "🇬🇧", revenue: "$24,680", percentage: 19.4, orders: 87 },
    { country: "France", flag: "🇫🇷", revenue: "$13,420", percentage: 10.5, orders: 54 },
    { country: "Netherlands", flag: "🇳🇱", revenue: "$8,300", percentage: 6.5, orders: 32 }
  ]

  const recentOrders = [
    {
      id: "ORD-2024-001",
      buyer: "Global Foods Ltd",
      product: "Premium Cashew Nuts",
      amount: "$4,850",
      status: "completed",
      country: "🇬🇧",
      date: "Jan 15, 2024"
    },
    {
      id: "ORD-2024-002",
      buyer: "Euro Traders",
      product: "Organic Cocoa Beans",
      amount: "$7,200",
      status: "processing",
      country: "🇩🇪",
      date: "Jan 14, 2024"
    },
    {
      id: "ORD-2024-003",
      buyer: "Asian Markets Inc",
      product: "Sesame Seeds",
      amount: "$3,450",
      status: "shipped",
      country: "🇰🇷",
      date: "Jan 13, 2024"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "processing": return "bg-yellow-100 text-yellow-800"
      case "shipped": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-lg">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track your business performance and growth
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="input-modern w-32"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Custom Range
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    <div className="flex items-center mt-2">
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
                      )}
                      <span
                        className={
                          metric.trend === "up" ? "text-green-600" : "text-red-600"
                        }
                      >
                        {metric.change}
                      </span>
                      <span className="text-muted-foreground ml-1">vs last period</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart Placeholder */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Revenue Trends</span>
            </CardTitle>
            <CardDescription>
              Monthly revenue growth over the past year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Revenue chart visualization</p>
                <p className="text-sm text-muted-foreground">Chart component integration ready</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Performance */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Top Products</span>
            </CardTitle>
            <CardDescription>
              Best performing products by revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {product.orders} orders
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{product.revenue}</div>
                    <div className="text-sm text-muted-foreground">
                      {product.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Markets */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Top Export Markets</span>
            </CardTitle>
            <CardDescription>
              Countries generating the most revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMarkets.map((market, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{market.flag}</span>
                    <div>
                      <div className="font-medium">{market.country}</div>
                      <div className="text-sm text-muted-foreground">
                        {market.orders} orders
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{market.revenue}</div>
                    <div className="text-sm text-muted-foreground">
                      {market.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{order.country}</span>
                    <div>
                      <div className="font-medium">{order.buyer}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.product}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{order.amount}</div>
                    <Badge className={getStatusColor(order.status)} variant="secondary" size="sm">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>
            Key insights and recommendations for your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Strong Growth</h3>
              <p className="text-sm text-green-600">
                Revenue up 12.5% this month
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">Market Expansion</h3>
              <p className="text-sm text-blue-600">
                4 new countries this quarter
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
              <Package className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">Product Diversity</h3>
              <p className="text-sm text-purple-600">
                5 top-performing products
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 