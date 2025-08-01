"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Upload, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewProductPage() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    currency: "USD",
    moq: "",
    unit: "",
    hsCode: "",
    origin: "",
    specifications: "",
    certifications: [],
    tags: [],
    images: []
  })

  const [newTag, setNewTag] = useState("")
  const [newCertification, setNewCertification] = useState("")

  const categories = [
    "Agriculture & Food Products",
    "Textiles & Clothing", 
    "Manufacturing",
    "Mining & Commodities",
    "Cosmetics & Personal Care",
    "Pharmaceuticals",
    "Technology",
    "Other"
  ]

  const currencies = ["USD", "EUR", "GBP", "NGN", "GHS", "KES", "ZAR"]
  const units = ["kg", "tons", "pieces", "liters", "meters", "boxes", "containers"]

  const addTag = () => {
    if (newTag && !productData.tags.includes(newTag)) {
      setProductData({
        ...productData,
        tags: [...productData.tags, newTag]
      })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setProductData({
      ...productData,
      tags: productData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const addCertification = () => {
    if (newCertification && !productData.certifications.includes(newCertification)) {
      setProductData({
        ...productData,
        certifications: [...productData.certifications, newCertification]
      })
      setNewCertification("")
    }
  }

  const removeCertification = (certToRemove: string) => {
    setProductData({
      ...productData,
      certifications: productData.certifications.filter(cert => cert !== certToRemove)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Product data:", productData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/dashboard/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <div>
            <h1 className="heading-lg">Add New Product</h1>
            <p className="text-muted-foreground">Create a new product listing for export</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Essential product details for your listing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Product Name</label>
                    <Input
                      value={productData.name}
                      onChange={(e) => setProductData({...productData, name: e.target.value})}
                      placeholder="e.g., Premium Organic Cashew Nuts"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      value={productData.description}
                      onChange={(e) => setProductData({...productData, description: e.target.value})}
                      placeholder="Detailed product description highlighting quality, origin, and unique features..."
                      rows={4}
                      className="input-modern w-full resize-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <select
                        value={productData.category}
                        onChange={(e) => setProductData({...productData, category: e.target.value})}
                        className="input-modern w-full"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Country of Origin</label>
                      <select
                        value={productData.origin}
                        onChange={(e) => setProductData({...productData, origin: e.target.value})}
                        className="input-modern w-full"
                        required
                      >
                        <option value="">Select country</option>
                        <option value="nigeria">🇳🇬 Nigeria</option>
                        <option value="ghana">🇬🇭 Ghana</option>
                        <option value="kenya">🇰🇪 Kenya</option>
                        <option value="south-africa">🇿🇦 South Africa</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Quantities */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Pricing & Quantities</CardTitle>
                  <CardDescription>
                    Set your pricing and minimum order requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium">Price</label>
                      <Input
                        type="number"
                        step="0.01"
                        value={productData.price}
                        onChange={(e) => setProductData({...productData, price: e.target.value})}
                        placeholder="0.00"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Currency</label>
                      <select
                        value={productData.currency}
                        onChange={(e) => setProductData({...productData, currency: e.target.value})}
                        className="input-modern w-full"
                      >
                        {currencies.map(currency => (
                          <option key={currency} value={currency}>{currency}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Unit</label>
                      <select
                        value={productData.unit}
                        onChange={(e) => setProductData({...productData, unit: e.target.value})}
                        className="input-modern w-full"
                        required
                      >
                        <option value="">Select unit</option>
                        {units.map(unit => (
                          <option key={unit} value={unit}>{unit}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Minimum Order Quantity (MOQ)</label>
                      <Input
                        type="number"
                        value={productData.moq}
                        onChange={(e) => setProductData({...productData, moq: e.target.value})}
                        placeholder="e.g., 500"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">HS Code (Optional)</label>
                      <Input
                        value={productData.hsCode}
                        onChange={(e) => setProductData({...productData, hsCode: e.target.value})}
                        placeholder="e.g., 080132"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>
                    Detailed specifications and technical information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={productData.specifications}
                    onChange={(e) => setProductData({...productData, specifications: e.target.value})}
                    placeholder="Include dimensions, weight, ingredients, nutritional information, technical specs, etc..."
                    rows={6}
                    className="input-modern w-full resize-none"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Product Images */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Upload high-quality product photos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag & drop images or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Upload Images
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Product Tags</CardTitle>
                  <CardDescription>
                    Add relevant tags for better discoverability
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag..."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="gap-2">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>
                    List any relevant certifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      value={newCertification}
                      onChange={(e) => setNewCertification(e.target.value)}
                      placeholder="e.g., Organic, HACCP..."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCertification())}
                    />
                    <Button type="button" onClick={addCertification} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productData.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="gap-2">
                        {cert}
                        <button
                          type="button"
                          onClick={() => removeCertification(cert)}
                          className="hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-3">
                <Button type="submit" size="lg" className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Create Product
                </Button>
                <Link href="/dashboard/products">
                  <Button variant="outline" size="lg" className="w-full">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 