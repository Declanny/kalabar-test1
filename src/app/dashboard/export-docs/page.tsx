"use client"

import React, { useState } from "react"
import { 
  FileText, Download, Plus, Filter, 
  Calendar, CheckCircle, Clock, AlertTriangle,
  Globe, Truck, Shield, Mail, Upload, Eye,
  Edit, Copy, Share, Package
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ExportDocsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const documents = [
    {
      id: 1,
      name: "Commercial Invoice - Order #KLB-2024-001",
      type: "Commercial Invoice",
      orderNumber: "KLB-2024-001",
      buyer: "Global Foods Ltd",
      destination: "United States",
      value: "$12,500 USD",
      status: "completed",
      createdDate: "2024-01-15",
      expiryDate: null,
      downloadUrl: "/docs/commercial-invoice-001.pdf",
      requiredFor: ["Customs", "Payment"]
    },
    {
      id: 2,
      name: "Certificate of Origin - Nigeria",
      type: "Certificate of Origin",
      orderNumber: "KLB-2024-001",
      buyer: "Global Foods Ltd",
      destination: "United States",
      value: "$12,500 USD",
      status: "pending_signature",
      createdDate: "2024-01-15",
      expiryDate: "2024-07-15",
      downloadUrl: "/docs/certificate-origin-001.pdf",
      requiredFor: ["Customs", "Duty Reduction"]
    },
    {
      id: 3,
      name: "Packing List - Cashew Nuts",
      type: "Packing List",
      orderNumber: "KLB-2024-001",
      buyer: "Global Foods Ltd",
      destination: "United States",
      value: "$12,500 USD",
      status: "completed",
      createdDate: "2024-01-16",
      expiryDate: null,
      downloadUrl: "/docs/packing-list-001.pdf",
      requiredFor: ["Customs", "Shipping"]
    },
    {
      id: 4,
      name: "Phytosanitary Certificate",
      type: "Phytosanitary Certificate",
      orderNumber: "KLB-2024-001",
      buyer: "Global Foods Ltd",
      destination: "United States",
      value: "$12,500 USD",
      status: "pending_approval",
      createdDate: "2024-01-14",
      expiryDate: "2024-02-14",
      downloadUrl: null,
      requiredFor: ["Customs", "Food Safety"]
    },
    {
      id: 5,
      name: "Bill of Lading - Sea Freight",
      type: "Bill of Lading",
      orderNumber: "KLB-2024-002",
      buyer: "Euro Imports GmbH",
      destination: "Germany",
      value: "$25,000 USD",
      status: "draft",
      createdDate: "2024-01-18",
      expiryDate: null,
      downloadUrl: null,
      requiredFor: ["Shipping", "Customs"]
    },
    {
      id: 6,
      name: "Insurance Certificate",
      type: "Insurance Certificate",
      orderNumber: "KLB-2024-002",
      buyer: "Euro Imports GmbH",
      destination: "Germany",
      value: "$25,000 USD",
      status: "completed",
      createdDate: "2024-01-17",
      expiryDate: "2024-03-17",
      downloadUrl: "/docs/insurance-cert-002.pdf",
      requiredFor: ["Shipping", "Risk Management"]
    }
  ]

  const documentTemplates = [
    {
      name: "Commercial Invoice",
      description: "Invoice for commercial transactions and customs declaration",
      icon: FileText,
      countries: ["All Countries"],
      requiredFields: ["Buyer Details", "Product Info", "Pricing", "Terms"]
    },
    {
      name: "Certificate of Origin",
      description: "Document certifying the country of origin of goods",
      icon: Globe,
      countries: ["USA", "EU", "UK", "Canada"],
      requiredFields: ["Product Origin", "HS Codes", "Manufacturing Details"]
    },
    {
      name: "Packing List",
      description: "Detailed list of packed goods and specifications",
      icon: Package,
      countries: ["All Countries"],
      requiredFields: ["Product Details", "Quantities", "Packaging Info"]
    },
    {
      name: "Bill of Lading",
      description: "Document issued by carrier acknowledging receipt of cargo",
      icon: Truck,
      countries: ["All Countries"],
      requiredFields: ["Shipper Info", "Consignee", "Cargo Details", "Terms"]
    },
    {
      name: "Phytosanitary Certificate",
      description: "Certificate for plant and plant product health",
      icon: Shield,
      countries: ["USA", "EU", "Australia", "Japan"],
      requiredFields: ["Product Details", "Inspection Results", "Treatment Info"]
    },
    {
      name: "Export License",
      description: "Government authorization for export of controlled goods",
      icon: CheckCircle,
      countries: ["Varies by Product"],
      requiredFields: ["Product Classification", "Destination", "End Use"]
    }
  ]

  const filterOptions = [
    { value: "all", label: "All Documents", count: documents.length },
    { value: "completed", label: "Completed", count: documents.filter(d => d.status === "completed").length },
    { value: "pending", label: "Pending", count: documents.filter(d => d.status.includes("pending")).length },
    { value: "draft", label: "Draft", count: documents.filter(d => d.status === "draft").length }
  ]

  const filteredDocuments = filter === "all" 
    ? documents 
    : filter === "pending"
    ? documents.filter(d => d.status.includes("pending"))
    : documents.filter(d => d.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50"
      case "pending_signature": return "text-orange-600 bg-orange-50"
      case "pending_approval": return "text-orange-600 bg-orange-50"
      case "draft": return "text-gray-600 bg-gray-50"
      case "expired": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending_signature": return <Clock className="h-4 w-4 text-orange-600" />
      case "pending_approval": return <Clock className="h-4 w-4 text-orange-600" />
      case "draft": return <Edit className="h-4 w-4 text-gray-600" />
      case "expired": return <AlertTriangle className="h-4 w-4 text-red-600" />
      default: return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <FileText className="h-8 w-8 mr-3" />
            Export Documentation
          </h1>
          <p className="text-muted-foreground">
            Generate, manage, and track your export documents and certificates
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Generate Document
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">
                  {documents.filter(d => d.status === "completed").length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">
                  {documents.filter(d => d.status.includes("pending")).length}
                </div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Edit className="h-8 w-8 text-gray-600" />
              <div>
                <div className="text-2xl font-bold">
                  {documents.filter(d => d.status === "draft").length}
                </div>
                <div className="text-sm text-muted-foreground">Drafts</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{documentTemplates.length}</div>
                <div className="text-sm text-muted-foreground">Templates</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Templates */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Document Templates</CardTitle>
              <CardDescription>
                Quick access to commonly used export document templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documentTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <template.icon className="h-5 w-5 text-primary mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{template.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {template.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {template.countries.slice(0, 2).map((country) => (
                            <Badge key={country} variant="secondary" size="sm">
                              {country}
                            </Badge>
                          ))}
                          {template.countries.length > 2 && (
                            <Badge variant="secondary" size="sm">
                              +{template.countries.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3">
                      Generate
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={filter === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter(option.value)}
                    >
                      {option.label} ({option.count})
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48"
                  />
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <div className="space-y-3">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold">{doc.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>Order: {doc.orderNumber}</span>
                          <span>•</span>
                          <span>{doc.buyer}</span>
                          <span>•</span>
                          <span>{doc.destination}</span>
                          <span>•</span>
                          <span>{doc.value}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge
                            variant="outline"
                            size="sm"
                            className={getStatusColor(doc.status)}
                          >
                            {getStatusIcon(doc.status)}
                            <span className="ml-1 capitalize">
                              {doc.status.replace('_', ' ')}
                            </span>
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            Created: {doc.createdDate}
                          </div>
                          {doc.expiryDate && (
                            <div className="flex items-center text-xs text-muted-foreground">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Expires: {doc.expiryDate}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {doc.requiredFor.map((purpose) => (
                            <Badge key={purpose} variant="secondary" size="sm">
                              {purpose}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {doc.downloadUrl && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No documents found</h3>
                <p className="text-muted-foreground mb-4">
                  {filter === "all"
                    ? "Start by generating your first export document"
                    : `No ${filter} documents at the moment`}
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate Document
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Document Assistance */}
      <Card>
        <CardHeader>
          <CardTitle>Need Help with Documentation?</CardTitle>
          <CardDescription>
            Get assistance with complex export documentation requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-medium">Documentation Support</h4>
                <p className="text-sm text-muted-foreground">Get help from our trade experts</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-medium">Country Requirements</h4>
                <p className="text-sm text-muted-foreground">Check specific import regulations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-medium">Compliance Check</h4>
                <p className="text-sm text-muted-foreground">Verify document compliance</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 