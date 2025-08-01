"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  ArrowLeft, Shield, 
  CheckCircle, Package, Truck, Lock,
  Building, AlertCircle, Info,
  FileText, Wallet
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("escrow")
  const [shippingInfo, setShippingInfo] = useState({
    companyName: "Global Foods Ltd",
    contactPerson: "Sarah Chen",
    email: "sarah@globalfoods.com",
    phone: "+1 555 123 4567",
    address: "123 Business District",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  })
  const [paymentInfo, setPaymentInfo] = useState({
    escrowTerms: true,
    deliveryConfirmation: true,
    qualityInspection: false
  })

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Premium Cashew Nuts - W240 Grade",
      supplier: "AgroExports Nigeria Ltd",
      supplierLogo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center",
      quantity: 1000,
      unit: "kg",
      price: 11.80,
      total: 11800,
      leadTime: "7-14 days",
      shippingTerms: "FOB Lagos",
      image: "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Organic Sesame Seeds",
      supplier: "East Africa Seeds Co",
      supplierLogo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&face=center",
      quantity: 500,
      unit: "kg",
      price: 2.20,
      total: 1100,
      leadTime: "10-15 days",
      shippingTerms: "FOB Mombasa",
      image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop"
    }
  ]

  const orderSummary = {
    subtotal: cartItems.reduce((sum, item) => sum + item.total, 0),
    shippingFee: 450,
    escrowFee: 129, // 1% of subtotal
    insuranceFee: 65,
    totalAmount: 0
  }
  orderSummary.totalAmount = orderSummary.subtotal + orderSummary.shippingFee + orderSummary.escrowFee + orderSummary.insuranceFee

  const steps = [
    { number: 1, title: "Review Order", description: "Verify your items" },
    { number: 2, title: "Shipping Details", description: "Delivery information" },
    { number: 3, title: "Payment Method", description: "Secure payment" },
    { number: 4, title: "Confirmation", description: "Complete order" }
  ]

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handlePlaceOrder = () => {
    // Process order with escrow
    console.log("Placing order with escrow payment:", {
      items: cartItems,
      shipping: shippingInfo,
      payment: paymentInfo,
      total: orderSummary.totalAmount
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/cart">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Secure Checkout</h1>
              <p className="text-muted-foreground">Complete your order with escrow protection</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 px-3 py-1">
            <Shield className="h-4 w-4 mr-1" />
            Escrow Protected
          </Badge>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    currentStep >= step.number 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`font-medium ${
                      currentStep >= step.number ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block flex-1 h-px mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Review Order */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Order</CardTitle>
                  <CardDescription>Verify all items before proceeding</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src={item.supplierLogo} />
                              <AvatarFallback>{item.supplier[0]}</AvatarFallback>
                            </Avatar>
                            <span>{item.supplier}</span>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm">
                            <span>Qty: {item.quantity.toLocaleString()} {item.unit}</span>
                            <span>Price: ${item.price}/kg</span>
                            <span>Lead Time: {item.leadTime}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${item.total.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">{item.shippingTerms}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Shipping Details */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>Enter delivery details for your order</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company Name</label>
                      <Input
                        value={shippingInfo.companyName}
                        onChange={(e) => setShippingInfo({...shippingInfo, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Contact Person</label>
                      <Input
                        value={shippingInfo.contactPerson}
                        onChange={(e) => setShippingInfo({...shippingInfo, contactPerson: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Address</label>
                      <Input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium mb-2 block">Address</label>
                      <Input
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">City</label>
                      <Input
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">State/Province</label>
                      <Input
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">ZIP/Postal Code</label>
                      <Input
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Country</label>
                      <select
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                        className="w-full border rounded-lg px-3 py-2"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment Method */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Choose your secure payment option</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Escrow Payment */}
                      <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentMethod === "escrow" ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`} onClick={() => setPaymentMethod("escrow")}>
                        <div className="flex items-start space-x-3">
                          <input
                            type="radio"
                            checked={paymentMethod === "escrow"}
                            onChange={() => setPaymentMethod("escrow")}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Shield className="h-5 w-5 text-primary" />
                              <span className="font-medium">Escrow Payment</span>
                              <Badge className="bg-green-100 text-green-800">Recommended</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Your payment is held securely until delivery is confirmed. Maximum protection for your order.
                            </p>
                            <div className="mt-3 space-y-2">
                              <label className="flex items-center space-x-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={paymentInfo.escrowTerms}
                                  onChange={(e) => setPaymentInfo({...paymentInfo, escrowTerms: e.target.checked})}
                                />
                                <span>I agree to escrow terms and conditions</span>
                              </label>
                              <label className="flex items-center space-x-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={paymentInfo.deliveryConfirmation}
                                  onChange={(e) => setPaymentInfo({...paymentInfo, deliveryConfirmation: e.target.checked})}
                                />
                                <span>Release funds upon delivery confirmation</span>
                              </label>
                              <label className="flex items-center space-x-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={paymentInfo.qualityInspection}
                                  onChange={(e) => setPaymentInfo({...paymentInfo, qualityInspection: e.target.checked})}
                                />
                                <span>Include quality inspection period (7 days)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wallet Payment */}
                      <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentMethod === "wallet" ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`} onClick={() => setPaymentMethod("wallet")}>
                        <div className="flex items-start space-x-3">
                          <input
                            type="radio"
                            checked={paymentMethod === "wallet"}
                            onChange={() => setPaymentMethod("wallet")}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Wallet className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">Wallet Balance</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Pay directly from your wallet balance. Available: $25,450.00
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bank Transfer */}
                      <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        paymentMethod === "bank" ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`} onClick={() => setPaymentMethod("bank")}>
                        <div className="flex items-start space-x-3">
                          <input
                            type="radio"
                            checked={paymentMethod === "bank"}
                            onChange={() => setPaymentMethod("bank")}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Building className="h-5 w-5 text-gray-600" />
                              <span className="font-medium">Bank Transfer</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Direct bank transfer to supplier. Standard processing time: 3-5 business days.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Escrow Details */}
                {paymentMethod === "escrow" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Info className="h-5 w-5" />
                        <span>How Escrow Works</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-medium">
                            1
                          </div>
                          <div>
                            <div className="font-medium">Payment Secured</div>
                            <div className="text-sm text-muted-foreground">Your payment is held in our secure escrow account</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-medium">
                            2
                          </div>
                          <div>
                            <div className="font-medium">Supplier Notified</div>
                            <div className="text-sm text-muted-foreground">Supplier receives confirmation and ships your order</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center font-medium">
                            3
                          </div>
                          <div>
                            <div className="font-medium">Delivery Confirmation</div>
                            <div className="text-sm text-muted-foreground">You confirm receipt and quality of goods</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-green-600 text-white text-sm flex items-center justify-center font-medium">
                            4
                          </div>
                          <div>
                            <div className="font-medium">Payment Released</div>
                            <div className="text-sm text-muted-foreground">Funds are automatically released to the supplier</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Order Confirmation</CardTitle>
                  <CardDescription>Review all details before placing your order</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Order Summary */}
                    <div>
                      <h4 className="font-medium mb-3">Order Summary</h4>
                      <div className="space-y-2">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span>{item.name} ({item.quantity} {item.unit})</span>
                            <span>${item.total.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipping Info */}
                    <div>
                      <h4 className="font-medium mb-3">Shipping Address</h4>
                      <div className="text-sm text-muted-foreground">
                        <div>{shippingInfo.companyName}</div>
                        <div>{shippingInfo.contactPerson}</div>
                        <div>{shippingInfo.address}</div>
                        <div>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</div>
                        <div>{shippingInfo.country}</div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h4 className="font-medium mb-3">Payment Method</h4>
                      <div className="flex items-center space-x-2">
                        {paymentMethod === "escrow" && <Shield className="h-4 w-4 text-primary" />}
                        {paymentMethod === "wallet" && <Wallet className="h-4 w-4 text-blue-600" />}
                        {paymentMethod === "bank" && <Building className="h-4 w-4 text-gray-600" />}
                        <span className="text-sm capitalize">{paymentMethod} Payment</span>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium mb-1">Important Notice</div>
                          <div className="text-muted-foreground">
                            By placing this order, you agree to our terms of service and confirm that all information provided is accurate. 
                            {paymentMethod === "escrow" && " Your payment will be held in escrow until delivery is confirmed."}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
              ) : (
                <Button onClick={handlePlaceOrder} size="lg" className="px-8">
                  <Lock className="h-4 w-4 mr-2" />
                  Place Secure Order
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${orderSummary.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>${orderSummary.shippingFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Escrow Fee (1%)</span>
                      <span>${orderSummary.escrowFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insurance</span>
                      <span>${orderSummary.insuranceFee}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span>${orderSummary.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Escrow Protected</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">
                      Your payment is 100% protected until delivery confirmation
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4" />
                      <span>Estimated delivery: 14-21 days</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4" />
                      <span>Tracked shipping included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span>All export documents provided</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 