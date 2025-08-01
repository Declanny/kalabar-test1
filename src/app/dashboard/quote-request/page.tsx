"use client"

import React, { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { getSupplierAvatar, getProductImage } from "@/lib/image-utils"
import Link from "next/link"
import { 
  ArrowLeft, Send, MapPin, Star, 
  Clock, Phone, Mail, Plus, Minus,
  CheckCircle, Truck, CreditCard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function QuoteRequestContent() {
  const searchParams = useSearchParams()
  
  const [quantity, setQuantity] = useState(1000)
  const [urgency, setUrgency] = useState("standard")
  const [requirements, setRequirements] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [targetPrice, setTargetPrice] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock product data (in real app, fetch based on productId)
  const product = {
    id: 1,
    name: "Premium Cashew Nuts - W240 Grade",
    image: getProductImage("cashew", "cashew"),
    supplier: "AgroExports Nigeria Ltd",
    supplierLogo: getSupplierAvatar("AgroExports Nigeria Ltd", 1),
    supplierLocation: "Lagos, Nigeria",
    supplierCountry: "🇳🇬",
    rating: 4.8,
    reviews: 156,
    verified: true,
    responseTime: "< 2 hours",
    currentPrice: 12.50,
    currency: "USD",
    unit: "per kg",
    moq: 500,
    maxOrder: 10000,
    leadTime: "7-14 days",
    paymentTerms: "30% advance, 70% on delivery",
    specifications: {
      "Grade": "W240 (240 nuts per pound)",
      "Moisture": "< 5%",
      "Broken": "< 5%",
      "Foreign Matter": "< 1%",
      "Packaging": "25kg bags or custom"
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= product.moq && newQuantity <= product.maxOrder) {
      setQuantity(newQuantity)
    }
  }

  const handleSubmitQuote = async () => {
    setIsSubmitting(true)
    
    const quoteData = {
      productId: product.id,
      supplierId: product.supplier,
      quantity,
      urgency,
      requirements,
      additionalNotes,
      targetPrice,
      deliveryDate,
      timestamp: new Date().toISOString()
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Quote request submitted:", quoteData)
    setIsSubmitting(false)
    
    // In real app, redirect to success page or show success message
    alert("Quote request sent successfully! The supplier will respond within " + product.responseTime)
  }

  const estimatedTotal = quantity * product.currentPrice

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/marketplace">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Marketplace
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Request Quote</h1>
            <p className="text-muted-foreground">Get a custom quote from the supplier</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={product.supplierLogo} />
                        <AvatarFallback>{product.supplier[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{product.supplier}</span>
                      <span className="text-xs">{product.supplierCountry}</span>
                      {product.verified && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <span>Current Price: ${product.currentPrice}/{product.unit}</span>
                      <span>MOQ: {product.moq.toLocaleString()} kg</span>
                      <span>Lead Time: {product.leadTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Details Form */}
            <Card>
              <CardHeader>
                <CardTitle>Quote Requirements</CardTitle>
                <CardDescription>Provide details for your custom quote request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantity Required (kg)</label>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity - 100)}
                        disabled={quantity <= product.moq}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || product.moq)}
                        className="w-32 text-center border-0"
                        min={product.moq}
                        max={product.maxOrder}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity + 100)}
                        disabled={quantity >= product.maxOrder}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Min: {product.moq.toLocaleString()} kg • Max: {product.maxOrder.toLocaleString()} kg
                    </span>
                  </div>
                </div>

                {/* Target Price */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Target Price (Optional)</label>
                  <div className="flex items-center space-x-3">
                    <Input
                      type="number"
                      placeholder="Enter target price per kg"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      className="max-w-xs"
                    />
                    <span className="text-sm text-muted-foreground">USD per kg</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Current market price: ${product.currentPrice}/kg
                  </p>
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Required Delivery Date (Optional)</label>
                  <Input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="max-w-xs"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Standard lead time: {product.leadTime}
                  </p>
                </div>

                {/* Urgency */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Quote Urgency</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "standard", label: "Standard", desc: "3-5 days response" },
                      { value: "urgent", label: "Urgent", desc: "24-48 hours" },
                      { value: "asap", label: "ASAP", desc: "Same day response" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setUrgency(option.value)}
                        className={`p-3 border rounded-lg text-left transition-colors ${
                          urgency === option.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium text-sm">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specific Requirements */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Specific Requirements</label>
                  <textarea
                    placeholder="Please specify any special requirements like packaging, certifications, quality standards, etc."
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="w-full h-24 p-3 border rounded-lg resize-none"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Notes (Optional)</label>
                  <textarea
                    placeholder="Any additional information or questions for the supplier..."
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full h-20 p-3 border rounded-lg resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  onClick={handleSubmitQuote}
                  disabled={isSubmitting || !quantity}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending Quote Request..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Quote Request
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Supplier Info */}
            <Card>
              <CardHeader>
                <CardTitle>Supplier Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={product.supplierLogo} />
                      <AvatarFallback>{product.supplier[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{product.supplier}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.supplierLocation}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{product.rating} ({product.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span>{product.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Payment Terms:</span>
                      <span>{product.paymentTerms}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Quote Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Quantity:</span>
                    <span>{quantity.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Current Price:</span>
                    <span>${product.currentPrice}/kg</span>
                  </div>
                  {targetPrice && (
                    <div className="flex justify-between text-sm">
                      <span>Target Price:</span>
                      <span>${targetPrice}/kg</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Estimated Total:</span>
                      <span>${estimatedTotal.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      *Final price may vary based on negotiations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Verified Supplier</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Fast Response Time</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="h-4 w-4 text-orange-600" />
                    <span>Reliable Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                    <span>Secure Payments</span>
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

export default function QuoteRequestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteRequestContent />
    </Suspense>
  )
} 