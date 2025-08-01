"use client"

import React, { useState } from "react"
import {
  CreditCard, Shield, TrendingUp, CheckCircle, 
  DollarSign, FileText, Globe, Calculator,
  Calendar, ArrowRight, Plus,
  Info, Building, Zap, Award
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TradeFinance() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [loanAmount, setLoanAmount] = useState("100000")

  const financeStats = [
    {
      title: "Available Credit",
      value: "$500,000",
      change: "85% utilized",
      icon: CreditCard,
      color: "text-blue-600"
    },
    {
      title: "Active Facilities",
      value: "3",
      change: "Letter of Credit",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Monthly Payments",
      value: "$24,750",
      change: "On schedule",
      icon: Calendar,
      color: "text-orange-600"
    },
    {
      title: "Credit Score",
      value: "A+",
      change: "Excellent",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ]

  const financingOptions = [
    {
      id: "letter-of-credit",
      name: "Letter of Credit",
      description: "Secure payment guarantee for international trade transactions",
      features: [
        "Bank guarantee for payment",
        "Risk mitigation for suppliers",
        "International acceptance", 
        "Documentary compliance"
      ],
      rate: "0.5-2%",
      term: "30-180 days",
      minAmount: "$10,000",
      provider: "Standard Bank",
      status: "Available",
      statusColor: "success",
      popularity: "Most Popular",
      icon: Shield
    },
    {
      id: "trade-credit",
      name: "Trade Credit Line",
      description: "Revolving credit facility for ongoing trade operations",
      features: [
        "Flexible credit access",
        "Competitive interest rates",
        "Multiple currency support",
        "Quick approval process"
      ],
      rate: "5.5-8.5%",
      term: "1-5 years",
      minAmount: "$50,000",
      provider: "Access Bank",
      status: "Pre-approved",
      statusColor: "info",
      popularity: "Recommended",
      icon: CreditCard
    },
    {
      id: "supply-chain-finance",
      name: "Supply Chain Finance",
      description: "Finance your supplier payments with extended payment terms",
      features: [
        "Supplier early payment",
        "Extended payment terms",
        "Lower cost of capital",
        "Automated workflow"
      ],
      rate: "3.5-6%",
      term: "30-120 days",
      minAmount: "$25,000",
      provider: "GTBank",
      status: "Available",
      statusColor: "success",
      popularity: "Growing",
      icon: Globe
    },
    {
      id: "documentary-collection",
      name: "Documentary Collection",
      description: "Cost-effective payment method for established supplier relationships",
      features: [
        "Lower cost than LC",
        "Established relationships",
        "Document handling",
        "Payment on acceptance"
      ],
      rate: "0.1-0.5%",
      term: "30-90 days",
      minAmount: "$5,000",
      provider: "Zenith Bank",
      status: "Available", 
      statusColor: "success",
      popularity: "Cost Effective",
      icon: FileText
    }
  ]

  const activeFacilities = [
    {
      id: "LC-2024-001",
      type: "Letter of Credit",
      supplier: "AgroExports Nigeria Ltd",
      amount: "$120,000",
      currency: "USD",
      status: "Active",
      statusColor: "success",
      expiryDate: "Mar 15, 2024",
      documents: "Pending",
      progress: 65
    },
    {
      id: "TCL-2024-008",
      type: "Trade Credit Line",
      supplier: "Multiple Suppliers",
      amount: "$350,000",
      currency: "USD", 
      status: "Available",
      statusColor: "info",
      expiryDate: "Dec 31, 2024",
      documents: "Complete",
      progress: 15
    },
    {
      id: "SCF-2024-012",
      type: "Supply Chain Finance",
      supplier: "Golden Valley Farms",
      amount: "$85,000",
      currency: "USD",
      status: "Processing",
      statusColor: "default",
      expiryDate: "Feb 28, 2024",
      documents: "Under Review",
      progress: 90
    }
  ]

  const paymentMethods = [
    {
      name: "Bank Transfer (SWIFT)",
      description: "Traditional international wire transfer",
      cost: "$25-50 + 0.1-0.5%",
      speed: "1-5 business days",
      security: "High",
      currencies: "All major currencies",
      icon: Building
    },
    {
      name: "Digital Payment (Wise)",
      description: "Fast, low-cost international transfers",
      cost: "0.5-2% of transfer",
      speed: "Minutes to hours",
      security: "High",
      currencies: "40+ currencies",
      icon: Zap
    },
    {
      name: "Cryptocurrency",
      description: "Instant cross-border payments via blockchain",
      cost: "$1-5 per transaction",
      speed: "Minutes",
      security: "Very High",
      currencies: "BTC, ETH, USDC",
      icon: DollarSign
    },
    {
      name: "Escrow Service",
      description: "Third-party protected payment holding",
      cost: "1-3% of transaction",
      speed: "On delivery confirmation",
      security: "Maximum",
      currencies: "USD, EUR, GBP",
      icon: Shield
    }
  ]

  const currencies = ["USD", "EUR", "GBP", "NGN", "GHS", "KES"]

  const calculateMonthlyPayment = (amount: number, rate: number, term: number) => {
    const monthlyRate = rate / 100 / 12
    const numPayments = term * 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                   (Math.pow(1 + monthlyRate, numPayments) - 1)
    return payment.toFixed(2)
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="heading-lg">Trade Finance</h1>
          <p className="text-muted-foreground body-md">
            Financing solutions for your international trade operations
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Calculator className="h-4 w-4 mr-2" />
            Finance Calculator
          </Button>
          <Button className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Apply for Facility
          </Button>
        </div>
      </div>

      {/* Finance Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {financeStats.map((stat, index) => (
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Financing Options */}
        <div className="xl:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Financing Options</CardTitle>
              <CardDescription>
                Choose the best financing solution for your trade needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {financingOptions.map((option) => (
                  <Card key={option.id} className="border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <option.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{option.name}</h3>
                              <p className="text-sm text-muted-foreground">{option.provider}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1">
                            <Badge variant={"default"} size="sm">
                              {option.status}
                            </Badge>
                            <Badge variant="outline" size="sm" className="text-xs">
                              {option.popularity}
                            </Badge>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground">{option.description}</p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4 p-3 bg-muted/30 rounded-lg">
                          <div>
                            <div className="text-sm font-medium">{option.rate}</div>
                            <div className="text-xs text-muted-foreground">Interest Rate</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium">{option.term}</div>
                            <div className="text-xs text-muted-foreground">Term</div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Features</h4>
                          <ul className="space-y-1">
                            {option.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-xs">
                                <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Info className="h-3 w-3 mr-2" />
                            Details
                          </Button>
                          <Button size="sm" className="flex-1">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Facilities */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Facilities</CardTitle>
                <CardDescription>
                  Monitor your current financing arrangements
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeFacilities.map((facility) => (
                  <div key={facility.id} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{facility.id}</h4>
                          <p className="text-sm text-muted-foreground">{facility.type}</p>
                        </div>
                        <Badge variant={"default"} size="sm">
                          {facility.status}
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="font-medium">{facility.amount}</div>
                          <div className="text-muted-foreground">Amount</div>
                        </div>
                        <div>
                          <div className="font-medium">{facility.supplier}</div>
                          <div className="text-muted-foreground">Supplier</div>
                        </div>
                        <div>
                          <div className="font-medium">{facility.expiryDate}</div>
                          <div className="text-muted-foreground">Expiry</div>
                        </div>
                        <div>
                          <div className="font-medium">{facility.documents}</div>
                          <div className="text-muted-foreground">Documents</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Utilization</span>
                          <span>{facility.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${facility.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-3 w-3 mr-2" />
                          Documents
                        </Button>
                        <Button variant="outline" size="sm">
                          <Info className="h-3 w-3 mr-2" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Finance Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Finance Calculator
              </CardTitle>
              <CardDescription>
                Estimate your financing costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Loan Amount</label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="pl-10"
                      placeholder="100,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Currency</label>
                  <select 
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>{currency}</option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Trade Credit Line (6.5%)</span>
                    <span className="font-medium">
                      ${calculateMonthlyPayment(parseInt(loanAmount) || 0, 6.5, 3)}/month
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Letter of Credit (1.5%)</span>
                    <span className="font-medium">
                      ${((parseInt(loanAmount) || 0) * 0.015).toLocaleString()} total cost
                    </span>
                  </div>
                </div>

                <Button className="w-full">
                  Get Detailed Quote
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Secure payment options for your transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="p-1 rounded bg-primary/10">
                        <method.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{method.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{method.description}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground">Cost: </span>
                            <span className="font-medium">{method.cost}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Speed: </span>
                            <span className="font-medium">{method.speed}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Credit Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Credit Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">A+</div>
                  <div className="text-sm text-muted-foreground">Excellent Credit Rating</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Payment History</span>
                    <span className="text-green-600 font-medium">100%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Credit Utilization</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Trade Experience</span>
                    <span className="font-medium">5+ years</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 