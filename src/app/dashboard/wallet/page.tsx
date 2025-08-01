"use client"

import React, { useState } from "react"
import { 
  Wallet, CreditCard, DollarSign, ArrowUpRight, ArrowDownLeft, 
  Clock, Shield, CheckCircle, Plus,
  Eye, Banknote, Lock, Unlock,
  Info
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WalletPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  // Wallet balances
  const walletBalances = {
    available: 25450.00,
    escrow: 12300.00,
    pending: 3200.00,
    total: 40950.00
  }

  // Transaction history
  const transactions = [
    {
      id: "TXN-2024-001",
      type: "escrow_deposit",
      description: "Escrow deposit for Order #KLB-2024-001 - Premium Cashew Nuts",
      amount: -11250.00,
      currency: "USD",
      status: "completed",
      timestamp: "2024-01-15 14:30:00",
      orderId: "KLB-2024-001",
      counterparty: {
        name: "Global Foods Ltd",
        role: "buyer"
      },
      escrowDetails: {
        releaseCondition: "Delivery confirmation",
        expectedRelease: "2024-02-10"
      }
    },
    {
      id: "TXN-2024-002", 
      type: "wallet_deposit",
      description: "Bank transfer deposit",
      amount: 15000.00,
      currency: "USD",
      status: "completed",
      timestamp: "2024-01-14 09:15:00",
      paymentMethod: "Bank Transfer",
      reference: "BT240114001"
    },
    {
      id: "TXN-2024-003",
      type: "escrow_release",
      description: "Escrow release for Order #KLB-2023-089 - Organic Cocoa Beans",
      amount: 8500.00,
      currency: "USD",
      status: "completed", 
      timestamp: "2024-01-12 16:45:00",
      orderId: "KLB-2023-089",
      counterparty: {
        name: "Euro Trade Partners",
        role: "buyer"
      }
    },
    {
      id: "TXN-2024-004",
      type: "escrow_deposit",
      description: "Escrow deposit for Order #KLB-2024-002 - Sesame Seeds",
      amount: -6800.00,
      currency: "USD",
      status: "pending",
      timestamp: "2024-01-11 11:20:00",
      orderId: "KLB-2024-002",
      counterparty: {
        name: "Asia Pacific Imports",
        role: "buyer"
      },
      escrowDetails: {
        releaseCondition: "Quality inspection passed",
        expectedRelease: "2024-01-25"
      }
    },
    {
      id: "TXN-2024-005",
      type: "withdrawal",
      description: "Bank withdrawal to GTBank ****4567",
      amount: -5000.00,
      currency: "USD",
      status: "processing",
      timestamp: "2024-01-10 13:10:00",
      paymentMethod: "Bank Transfer",
      reference: "WD240110001"
    }
  ]

  // Escrow holdings
  const escrowHoldings = [
    {
      id: "ESC-2024-001",
      orderId: "KLB-2024-001", 
      buyerName: "Global Foods Ltd",
      buyerCountry: "🇺🇸",
      productName: "Premium Cashew Nuts",
      amount: 11250.00,
      currency: "USD",
      status: "held",
      createdDate: "2024-01-15",
      expectedRelease: "2024-02-10",
      releaseCondition: "Delivery confirmation",
      progressSteps: [
        { step: "Payment received", completed: true, date: "2024-01-15" },
        { step: "Funds held in escrow", completed: true, date: "2024-01-15" },
        { step: "Order shipped", completed: true, date: "2024-01-18" },
        { step: "Delivery confirmation", completed: false, date: null },
        { step: "Funds released", completed: false, date: null }
      ]
    },
    {
      id: "ESC-2024-002",
      orderId: "KLB-2024-002",
      buyerName: "Asia Pacific Imports", 
      buyerCountry: "🇸🇬",
      productName: "White Sesame Seeds",
      amount: 6800.00,
      currency: "USD",
      status: "inspection",
      createdDate: "2024-01-11",
      expectedRelease: "2024-01-25",
      releaseCondition: "Quality inspection passed",
      progressSteps: [
        { step: "Payment received", completed: true, date: "2024-01-11" },
        { step: "Funds held in escrow", completed: true, date: "2024-01-11" },
        { step: "Order shipped", completed: true, date: "2024-01-14" },
        { step: "Quality inspection", completed: false, date: null },
        { step: "Funds released", completed: false, date: null }
      ]
    }
  ]

  const currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "€", name: "Euro" },
    { code: "GBP", symbol: "£", name: "British Pound" },
    { code: "NGN", symbol: "₦", name: "Nigerian Naira" }
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "wallet_deposit": return <ArrowDownLeft className="h-4 w-4 text-green-600" />
      case "escrow_deposit": return <Lock className="h-4 w-4 text-blue-600" />
      case "escrow_release": return <Unlock className="h-4 w-4 text-green-600" />
      case "withdrawal": return <ArrowUpRight className="h-4 w-4 text-red-600" />
      default: return <DollarSign className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "pending": return "bg-yellow-100 text-yellow-800"
      case "processing": return "bg-blue-100 text-blue-800"
      case "failed": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const formatAmount = (amount: number, currency: string = "USD") => {
    const currencySymbol = currencies.find(c => c.code === currency)?.symbol || "$"
    return `${currencySymbol}${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Wallet & Payments</h1>
          <p className="text-muted-foreground mt-2">
            Manage your funds, escrow payments, and transaction history
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm bg-white"
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code}
              </option>
            ))}
          </select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Funds
          </Button>
        </div>
      </div>

      {/* Wallet Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {formatAmount(walletBalances.available, selectedCurrency)}
                </div>
                <p className="text-sm text-muted-foreground">Ready to use</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Escrow Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatAmount(walletBalances.escrow, selectedCurrency)}
                </div>
                <p className="text-sm text-muted-foreground">Secured funds</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {formatAmount(walletBalances.pending, selectedCurrency)}
                </div>
                <p className="text-sm text-muted-foreground">Processing</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">
                  {formatAmount(walletBalances.total, selectedCurrency)}
                </div>
                <p className="text-sm text-muted-foreground">All funds</p>
              </div>
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Banknote className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Deposit Funds</CardTitle>
            <CardDescription>Add money to your wallet for purchases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Payment Method</label>
              <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white">
                <option>Bank Transfer</option>
                <option>Credit Card</option>
                <option>PayPal</option>
                <option>Wire Transfer</option>
              </select>
            </div>
            <Button className="w-full">
              <CreditCard className="h-4 w-4 mr-2" />
              Deposit Funds
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Withdraw Funds</CardTitle>
            <CardDescription>Transfer money to your bank account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Available: {formatAmount(walletBalances.available, selectedCurrency)}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium">Bank Account</label>
              <select className="w-full border rounded-lg px-3 py-2 text-sm bg-white">
                <option>GTBank ****4567</option>
                <option>Access Bank ****8901</option>
                <option>Add New Account</option>
              </select>
            </div>
            <Button variant="outline" className="w-full">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Withdraw Funds
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Transaction History" },
            { id: "escrow", label: "Escrow Holdings" },
            { id: "settings", label: "Payment Settings" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>All your wallet transactions and payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{transaction.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {transaction.amount > 0 ? '+' : ''}{formatAmount(transaction.amount, transaction.currency)}
                        </span>
                        <Badge className={getStatusColor(transaction.status)} variant="secondary">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                      <span>{transaction.timestamp}</span>
                      {transaction.orderId && (
                        <span>Order: {transaction.orderId}</span>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "escrow" && (
        <div className="space-y-6">
          {escrowHoldings.map((escrow) => (
            <Card key={escrow.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{escrow.productName}</CardTitle>
                    <CardDescription>
                      Order #{escrow.orderId} • {escrow.buyerName} {escrow.buyerCountry}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatAmount(escrow.amount, escrow.currency)}
                    </div>
                    <Badge className={getStatusColor(escrow.status)} variant="secondary">
                      {escrow.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Created:</span>
                      <span className="ml-2">{escrow.createdDate}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expected Release:</span>
                      <span className="ml-2">{escrow.expectedRelease}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium mb-2">Release Progress</div>
                    <div className="space-y-2">
                      {escrow.progressSteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                          } flex items-center justify-center`}>
                            {step.completed && <CheckCircle className="h-3 w-3 text-white" />}
                          </div>
                          <span className={`text-sm ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.step}
                          </span>
                          {step.completed && step.date && (
                            <span className="text-xs text-muted-foreground">({step.date})</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      <Info className="h-4 w-4 inline mr-1" />
                      Funds will be released after: {escrow.releaseCondition}
                    </div>
                    <Button variant="outline" size="sm">
                      View Order Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "settings" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your bank accounts and payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">GTBank - ****4567</div>
                    <div className="text-sm text-muted-foreground">Primary Account</div>
                  </div>
                  <Badge variant="outline">Default</Badge>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Access Bank - ****8901</div>
                    <div className="text-sm text-muted-foreground">Secondary Account</div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Bank Account
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your wallet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-muted-foreground">Secure your transactions</div>
                </div>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Transaction Notifications</div>
                  <div className="text-sm text-muted-foreground">Email alerts for all transactions</div>
                </div>
                <Badge className="bg-green-100 text-green-800">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Daily Withdrawal Limit</div>
                  <div className="text-sm text-muted-foreground">Maximum amount per day</div>
                </div>
                <span className="font-medium">$50,000</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 