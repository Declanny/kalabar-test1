"use client"

import React, { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, Edit, Eye, Package, TrendingUp, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Premium Organic Cashew Nuts",
      category: "Agriculture",
      price: "$4.50",
      stock: 2500,
      unit: "kg",
      moq: "500kg",
      status: "active",
      orders: 156,
      revenue: "$12,450",
      rating: 4.8,
      lastUpdate: "2 days ago",
      image: "/products/cashew.jpg"
    },
    {
      id: 2,
      name: "Raw Cocoa Beans - Premium Grade",
      category: "Agriculture",
      price: "$3.80",
      stock: 1200,
      unit: "kg",
      moq: "1000kg",
      status: "active",
      orders: 243,
      revenue: "$8,750",
      rating: 4.9,
      lastUpdate: "1 day ago",
      image: "/products/cocoa.jpg"
    },
    {
      id: 3,
      name: "Sesame Seeds - White Hulled",
      category: "Agriculture",
      price: "$2.20",
      stock: 800,
      unit: "kg",
      moq: "2000kg",
      status: "low_stock",
      orders: 89,
      revenue: "$6,230",
      rating: 4.7,
      lastUpdate: "3 days ago",
      image: "/products/sesame.jpg"
    },
    {
      id: 4,
      name: "Dried Hibiscus Flowers",
      category: "Agriculture",
      price: "$6.00",
      stock: 0,
      unit: "kg",
      moq: "200kg",
      status: "out_of_stock",
      orders: 67,
      revenue: "$1,200",
      rating: 4.6,
      lastUpdate: "1 week ago",
      image: "/products/hibiscus.jpg"
    },
    {
      id: 5,
      name: "Shea Butter - Unrefined",
      category: "Cosmetics",
      price: "$8.50",
      stock: 450,
      unit: "kg",
      moq: "100kg",
      status: "active",
      orders: 134,
      revenue: "$3,400",
      rating: 4.9,
      lastUpdate: "5 days ago",
      image: "/products/shea.jpg"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800"
      case "low_stock": return "bg-yellow-100 text-yellow-800"
      case "out_of_stock": return "bg-red-100 text-red-800"
      case "draft": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-lg">Product Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage your product catalog and inventory
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Products</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="input-modern w-48"
        >
          <option value="all">All Categories</option>
          <option value="agriculture">Agriculture</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="textiles">Textiles</option>
          <option value="manufacturing">Manufacturing</option>
        </select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products ({filteredProducts.length})</CardTitle>
          <CardDescription>
            Manage your product listings and inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Stock</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Orders</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Revenue</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            MOQ: {product.moq}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{product.category}</Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{product.price}</div>
                      <div className="text-sm text-muted-foreground">per {product.unit}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{product.stock.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{product.unit}</div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(product.status)} variant="secondary">
                        {product.status.replace("_", " ")}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{product.orders}</div>
                      <div className="text-sm text-muted-foreground">total orders</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-green-600">{product.revenue}</div>
                      <div className="text-sm text-muted-foreground">total revenue</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
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