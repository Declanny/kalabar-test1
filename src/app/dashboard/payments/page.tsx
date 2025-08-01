"use client"

import React, { useState } from "react"
import { CreditCard, DollarSign, TrendingUp, Download, Plus, Eye, MoreHorizontal, ArrowUpRight, ArrowDownLeft, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function PaymentsPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [timeRange, setTimeRange] = useState("30d")

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "NGN", symbol: "₦", name: "Nigerian Naira" },
    { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
    { code: "GHS", symbol: "₵", name: "Ghanaian Cedi" }
  ]

  const paymentStats = {
    totalRevenue: "$127,450",
    pendingPayments: "$34,230",
    completedTransactions: 234,
    failedTransactions: 8,
    averageOrderValue: "$545"
  }

  const transactions = [
    {
      id: "TXN-2024-001",
      orderId: "ORD-2024-001",
      buyer: {
        name: "Sarah Chen",
        company: "Global Foods Ltd",
        country: "🇬🇧"
      },
      amount: "$11,250",
      currency: "USD",
      status: "completed",
      method: "Bank Transfer",
      date: "Jan 15, 2024",
      description: "Premium Organic Cashew Nuts - 2,500 kg",
      fees: "$112.50",
      netAmount: "$11,137.50"
    },
    {
      id: "TXN-2024-002",
      orderId: "ORD-2024-002",
      buyer: {
        name: "Mohammed Ali",
        company: "Middle East Traders",
        country: "🇦🇪"
      },
      amount: "$4,560",
      currency: "USD",
      status: "pending",
      method: "Letter of Credit",
      date: "Jan 14, 2024",
      description: "Raw Cocoa Beans - Premium Grade - 1,200 kg",
      fees: "$45.60",
      netAmount: "$4,514.40"
    },
    {
      id: "TXN-2024-003",
      orderId: "ORD-2024-003",
      buyer: {
        name: "Emma Thompson",
        company: "Euro Trade Partners",
        country: "🇩🇪"
      },
      amount: "€4,400",
      currency: "EUR",
      status: "processing",
      method: "SWIFT Wire",
      date: "Jan 12, 2024",
      description: "Dried Hibiscus Flowers - 800 kg",
      fees: "€44.00",
      netAmount: "€4,356.00"
    },
    {
      id: "TXN-2024-004",
      orderId: "ORD-2024-004",
      buyer: {
        name: "David Kim",
        company: "Asian Markets Inc",
        country: "🇰🇷"
      },
      amount: "$6,600",
      currency: "USD",
      status: "completed",
      method: "Bank Transfer",
      date: "Jan 08, 2024",
      description: "White Hulled Sesame Seeds - 3,000 kg",
      fees: "$66.00",
      netAmount: "$6,534.00"
    },
    {
      id: "TXN-2024-005",
      orderId: "ORD-2024-005",
      buyer: {
        name: "Maria Santos",
        company: "Latin America Imports",
        country: "🇧🇷"
      },
      amount: "$4,250",
      currency: "USD",
      status: "refunded",
      method: "Bank Transfer",
      date: "Jan 10, 2024",
      description: "Unrefined Shea Butter - 500 kg",
      fees: "$42.50",
      netAmount: "$4,207.50"
    }
  ]

  const paymentMethods = [
    {
      name: "Bank Transfer",
      percentage: 45,
      amount: "$57,352",
      transactions: 89,
      icon: "🏦"
    },
    {
      name: "Letter of Credit",
      percentage: 35,
      amount: "$44,607",
      transactions: 67,
      icon: "📄"
    },
    {
      name: "SWIFT Wire",
      percentage: 15,
      amount: "$19,117",
      transactions: 34,
      icon: "⚡"
    },
    {
      name: "Escrow Service",
      percentage: 5,
      amount: "$6,374",
      transactions: 12,
      icon: "🔒"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "processing": return "bg-blue-100 text-blue-800"
      case "failed": return "bg-red-100 text-red-800"
      case "refunded": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <ArrowDownLeft className="h-4 w-4 text-green-600" />
      case "pending": return <Calendar className="h-4 w-4 text-yellow-600" />
      case "processing": return <TrendingUp className="h-4 w-4 text-blue-600" />
      case "failed": return <ArrowUpRight className="h-4 w-4 text-red-600" />
      case "refunded": return <ArrowUpRight className="h-4 w-4 text-gray-600" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-lg">Payment Management</h1>
          <p className="text-muted-foreground mt-2">
            Track payments, manage currencies, and view transaction history
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="input-modern w-24"
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Payment
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-green-600">{paymentStats.totalRevenue}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                <p className="text-2xl font-bold text-yellow-600">{paymentStats.pendingPayments}</p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-blue-600">{paymentStats.completedTransactions}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Failed</p>
                <p className="text-2xl font-bold text-red-600">{paymentStats.failedTransactions}</p>
              </div>
              <ArrowUpRight className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                <p className="text-2xl font-bold">{paymentStats.averageOrderValue}</p>
              </div>
              <CreditCard className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Breakdown by payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{method.icon}</span>
                    <div>
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {method.transactions} transactions
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{method.amount}</div>
                    <div className="text-sm text-muted-foreground">
                      {method.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Multi-Currency Overview */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Currency Breakdown</CardTitle>
            <CardDescription>
              Revenue by currency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currencies.slice(0, 4).map((currency, index) => {
                const amounts = ["$89,450", "€23,400", "£18,650", "₦45,230"]
                const percentages = ["70.2%", "18.4%", "14.6%", "8.8%"]
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold">{currency.symbol}</span>
                      </div>
                      <div>
                        <div className="font-medium">{currency.name}</div>
                        <div className="text-sm text-muted-foreground">{currency.code}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">{amounts[index]}</div>
                      <div className="text-sm text-muted-foreground">{percentages[index]}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest payment updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <ArrowDownLeft className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Payment Received</div>
                  <div className="text-xs text-muted-foreground">$11,250 from Global Foods Ltd</div>
                </div>
                <div className="text-xs text-muted-foreground">2h ago</div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <Calendar className="h-4 w-4 text-yellow-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Payment Pending</div>
                  <div className="text-xs text-muted-foreground">$4,560 from Middle East Traders</div>
                </div>
                <div className="text-xs text-muted-foreground">1d ago</div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Processing Payment</div>
                  <div className="text-xs text-muted-foreground">€4,400 from Euro Trade Partners</div>
                </div>
                <div className="text-xs text-muted-foreground">2d ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                All payment transactions and their status
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
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
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Transaction ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Buyer</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Method</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-4 px-4">
                      <div className="font-medium">{transaction.id}</div>
                      <div className="text-sm text-muted-foreground">{transaction.orderId}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <Avatar size="sm">
                          <AvatarFallback>{transaction.buyer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{transaction.buyer.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center space-x-1">
                            <span>{transaction.buyer.country}</span>
                            <span>{transaction.buyer.company}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-green-600">{transaction.amount}</div>
                      <div className="text-sm text-muted-foreground">
                        Net: {transaction.netAmount}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{transaction.method}</div>
                      <div className="text-sm text-muted-foreground">
                        Fee: {transaction.fees}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(transaction.status)} variant="secondary">
                        <span className="flex items-center space-x-1">
                          {getStatusIcon(transaction.status)}
                          <span>{transaction.status}</span>
                        </span>
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm">{transaction.date}</div>
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