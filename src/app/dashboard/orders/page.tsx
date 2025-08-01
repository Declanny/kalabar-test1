"use client"

import React, { useState } from "react"
import { Search, Filter, Eye, Download, Package, Truck, CheckCircle, Clock, AlertCircle, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedTimeRange, setSelectedTimeRange] = useState("all")

  const orders = [
    {
      id: "ORD-2024-001",
      buyer: {
        name: "Sarah Chen",
        company: "Global Foods Ltd",
        country: "🇬🇧",
        email: "sarah@globalfoods.com"
      },
      product: "Premium Organic Cashew Nuts",
      quantity: "2,500 kg",
      unitPrice: "$4.50",
      totalAmount: "$11,250",
      status: "confirmed",
      orderDate: "Jan 15, 2024",
      deliveryDate: "Feb 10, 2024",
      shippingMethod: "Air Freight",
      trackingNumber: "AF123456789",
      paymentStatus: "paid",
      documents: ["Invoice", "Certificate", "Export Permit"]
    },
    {
      id: "ORD-2024-002",
      buyer: {
        name: "Mohammed Ali",
        company: "Middle East Traders",
        country: "🇦🇪",
        email: "mohammed@metrades.com"
      },
      product: "Raw Cocoa Beans - Premium Grade",
      quantity: "1,200 kg",
      unitPrice: "$3.80",
      totalAmount: "$4,560",
      status: "processing",
      orderDate: "Jan 14, 2024",
      deliveryDate: "Feb 15, 2024",
      shippingMethod: "Sea Freight",
      trackingNumber: "",
      paymentStatus: "pending",
      documents: ["Invoice", "Certificate"]
    },
    {
      id: "ORD-2024-003",
      buyer: {
        name: "Emma Thompson",
        company: "Euro Trade Partners",
        country: "🇩🇪",
        email: "emma@eurotrade.de"
      },
      product: "Dried Hibiscus Flowers",
      quantity: "800 kg",
      unitPrice: "$6.00",
      totalAmount: "$4,800",
      status: "shipped",
      orderDate: "Jan 12, 2024",
      deliveryDate: "Feb 05, 2024",
      shippingMethod: "Air Freight",
      trackingNumber: "AF987654321",
      paymentStatus: "paid",
      documents: ["Invoice", "Certificate", "Export Permit", "Bill of Lading"]
    },
    {
      id: "ORD-2024-004",
      buyer: {
        name: "David Kim",
        company: "Asian Markets Inc",
        country: "🇰🇷",
        email: "david@asianmarkets.kr"
      },
      product: "White Hulled Sesame Seeds",
      quantity: "3,000 kg",
      unitPrice: "$2.20",
      totalAmount: "$6,600",
      status: "delivered",
      orderDate: "Jan 08, 2024",
      deliveryDate: "Jan 28, 2024",
      shippingMethod: "Sea Freight",
      trackingNumber: "SF456789123",
      paymentStatus: "paid",
      documents: ["Invoice", "Certificate", "Export Permit", "Bill of Lading", "Delivery Receipt"]
    },
    {
      id: "ORD-2024-005",
      buyer: {
        name: "Maria Santos",
        company: "Latin America Imports",
        country: "🇧🇷",
        email: "maria@laimports.br"
      },
      product: "Unrefined Shea Butter",
      quantity: "500 kg",
      unitPrice: "$8.50",
      totalAmount: "$4,250",
      status: "cancelled",
      orderDate: "Jan 10, 2024",
      deliveryDate: "",
      shippingMethod: "",
      trackingNumber: "",
      paymentStatus: "refunded",
      documents: ["Invoice"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-blue-100 text-blue-800"
      case "processing": return "bg-yellow-100 text-yellow-800"
      case "shipped": return "bg-purple-100 text-purple-800"
      case "delivered": return "bg-green-100 text-green-800"
      case "cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "overdue": return "bg-red-100 text-red-800"
      case "refunded": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed": return <Clock className="h-4 w-4" />
      case "processing": return <Package className="h-4 w-4" />
      case "shipped": return <Truck className="h-4 w-4" />
      case "delivered": return <CheckCircle className="h-4 w-4" />
      case "cancelled": return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.buyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.buyer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus
    
    return matchesSearch && matchesStatus
  })

  const orderStats = {
    total: orders.length,
    confirmed: orders.filter(o => o.status === "confirmed").length,
    processing: orders.filter(o => o.status === "processing").length,
    shipped: orders.filter(o => o.status === "shipped").length,
    delivered: orders.filter(o => o.status === "delivered").length
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-lg">Order Management</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage all your export orders
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button>
            <Package className="h-4 w-4 mr-2" />
            New Order
          </Button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{orderStats.total}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{orderStats.confirmed}</div>
              <div className="text-sm text-muted-foreground">Confirmed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{orderStats.processing}</div>
              <div className="text-sm text-muted-foreground">Processing</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{orderStats.shipped}</div>
              <div className="text-sm text-muted-foreground">Shipped</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{orderStats.delivered}</div>
              <div className="text-sm text-muted-foreground">Delivered</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders, buyers, or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="input-modern w-40"
        >
          <option value="all">All Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="input-modern w-32"
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders ({filteredOrders.length})</CardTitle>
          <CardDescription>
            Manage your export orders and track their progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Buyer</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Payment</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Delivery</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-4 px-4">
                      <div className="font-medium">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.orderDate}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar size="sm">
                          <AvatarFallback>{order.buyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{order.buyer.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center space-x-1">
                            <span>{order.buyer.country}</span>
                            <span>{order.buyer.company}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{order.product}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.quantity} @ {order.unitPrice}/kg
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-green-600">{order.totalAmount}</div>
                      <div className="text-sm text-muted-foreground">{order.quantity}</div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(order.status)} variant="secondary">
                        <span className="flex items-center space-x-1">
                          {getStatusIcon(order.status)}
                          <span>{order.status}</span>
                        </span>
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getPaymentStatusColor(order.paymentStatus)} variant="secondary" size="sm">
                        {order.paymentStatus}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">
                        {order.deliveryDate ? (
                          <>
                            <div className="font-medium">{order.deliveryDate}</div>
                            <div className="text-muted-foreground">{order.shippingMethod}</div>
                          </>
                        ) : (
                          <span className="text-muted-foreground">Not scheduled</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 