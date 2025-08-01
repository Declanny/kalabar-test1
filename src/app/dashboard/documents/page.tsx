"use client"

import React, { useState } from "react"
import { 
  FileText, Upload, Download, Eye, Edit, 
  Share, Clock, CheckCircle, AlertTriangle,
  MoreHorizontal, Filter,
  Shield, Globe, Package, Award, AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const documents = [
    {
      id: 1,
      name: "Business Registration Certificate",
      category: "Legal Documents",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2023-02-01",
      expiryDate: "2025-02-01",
      status: "verified",
      description: "Official business registration with CAC Nigeria",
      tags: ["Registration", "Legal", "Required"],
      sharedWith: ["Kalabah Verification Team"],
      verifiedBy: "Kalabah Admin",
      verificationDate: "2023-02-05"
    },
    {
      id: 2,
      name: "Export License",
      category: "Export Documents",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2023-02-05",
      expiryDate: "2024-12-31",
      status: "verified",
      description: "Official export license for agricultural products",
      tags: ["Export", "License", "Agriculture"],
      sharedWith: ["Export Partners", "Customs"],
      verifiedBy: "NEPC Nigeria",
      verificationDate: "2023-02-10"
    },
    {
      id: 3,
      name: "ISO 22000 Certificate",
      category: "Quality Certificates",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2023-03-15",
      expiryDate: "2024-03-15",
      status: "verified",
      description: "Food safety management system certification",
      tags: ["ISO", "Quality", "Food Safety"],
      sharedWith: ["Quality Auditors", "Buyers"],
      verifiedBy: "ISO Certification Body",
      verificationDate: "2023-03-20"
    },
    {
      id: 4,
      name: "Organic Certification",
      category: "Quality Certificates",
      type: "PDF",
      size: "1.5 MB",
      uploadDate: "2023-04-10",
      expiryDate: "2024-04-10",
      status: "pending",
      description: "Organic product certification for premium markets",
      tags: ["Organic", "Premium", "Certification"],
      sharedWith: ["Pending Review"],
      verifiedBy: null,
      verificationDate: null
    },
    {
      id: 5,
      name: "Bank Statement - December 2023",
      category: "Financial Documents",
      type: "PDF",
      size: "892 KB",
      uploadDate: "2024-01-05",
      expiryDate: null,
      status: "verified",
      description: "Monthly bank statement for financial verification",
      tags: ["Financial", "Bank", "Verification"],
      sharedWith: ["Finance Team"],
      verifiedBy: "Kalabah Finance",
      verificationDate: "2024-01-08"
    },
    {
      id: 6,
      name: "Product Quality Report - Cashew Nuts",
      category: "Quality Reports",
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "2024-01-12",
      expiryDate: "2024-07-12",
      status: "verified",
      description: "Comprehensive quality analysis report",
      tags: ["Quality", "Testing", "Cashew"],
      sharedWith: ["Buyers", "Quality Team"],
      verifiedBy: "Quality Lab",
      verificationDate: "2024-01-15"
    },
    {
      id: 7,
      name: "Phytosanitary Certificate",
      category: "Export Documents",
      type: "PDF",
      size: "1.1 MB",
      uploadDate: "2024-01-18",
      expiryDate: "2024-02-18",
      status: "expired",
      description: "Plant health certificate for agricultural exports",
      tags: ["Phytosanitary", "Health", "Export"],
      sharedWith: ["Customs", "Import Authorities"],
      verifiedBy: "Plant Health Authority",
      verificationDate: "2024-01-20"
    },
    {
      id: 8,
      name: "Fair Trade Certification",
      category: "Quality Certificates",
      type: "PDF",
      size: "2.1 MB",
      uploadDate: "2023-12-20",
      expiryDate: "2024-12-20",
      status: "verified",
      description: "Fair trade compliance certification",
      tags: ["Fair Trade", "Ethical", "Compliance"],
      sharedWith: ["Fair Trade Buyers"],
      verifiedBy: "Fair Trade Organization",
      verificationDate: "2023-12-25"
    }
  ]

  const categories = [
    { value: "all", label: "All Categories", count: documents.length },
    { value: "legal", label: "Legal Documents", count: documents.filter(d => d.category === "Legal Documents").length },
    { value: "export", label: "Export Documents", count: documents.filter(d => d.category === "Export Documents").length },
    { value: "quality", label: "Quality Certificates", count: documents.filter(d => d.category.includes("Quality")).length },
    { value: "financial", label: "Financial Documents", count: documents.filter(d => d.category === "Financial Documents").length }
  ]

  const statusOptions = [
    { value: "all", label: "All Status", count: documents.length },
    { value: "verified", label: "Verified", count: documents.filter(d => d.status === "verified").length },
    { value: "pending", label: "Pending", count: documents.filter(d => d.status === "pending").length },
    { value: "expired", label: "Expired", count: documents.filter(d => d.status === "expired").length },
    { value: "rejected", label: "Rejected", count: documents.filter(d => d.status === "rejected").length }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || doc.category.toLowerCase().includes(selectedCategory)
    const matchesStatus = selectedStatus === "all" || doc.status === selectedStatus
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "text-green-600 bg-green-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "expired": return "text-red-600 bg-red-50"
      case "rejected": return "text-red-800 bg-red-100"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending": return <Clock className="h-4 w-4 text-orange-600" />
      case "expired": return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "rejected": return <AlertCircle className="h-4 w-4 text-red-800" />
      default: return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Legal Documents": return <Shield className="h-5 w-5 text-blue-600" />
      case "Export Documents": return <Globe className="h-5 w-5 text-green-600" />
      case "Quality Certificates": return <Award className="h-5 w-5 text-purple-600" />
      case "Quality Reports": return <Package className="h-5 w-5 text-orange-600" />
      case "Financial Documents": return <FileText className="h-5 w-5 text-gray-600" />
      default: return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const documentStats = {
    total: documents.length,
    verified: documents.filter(d => d.status === "verified").length,
    pending: documents.filter(d => d.status === "pending").length,
    expiringSoon: documents.filter(d => {
      if (!d.expiryDate) return false
      const expiry = new Date(d.expiryDate)
      const thirtyDaysFromNow = new Date()
      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)
      return expiry <= thirtyDaysFromNow && expiry > new Date()
    }).length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <FileText className="h-8 w-8 mr-3" />
            Document Management
          </h1>
          <p className="text-muted-foreground">
            Manage all your business documents, certificates, and compliance files
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Bulk Download
          </Button>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{documentStats.total}</div>
                <div className="text-sm text-muted-foreground">Total Documents</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{documentStats.verified}</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">{documentStats.pending}</div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold">{documentStats.expiringSoon}</div>
                <div className="text-sm text-muted-foreground">Expiring Soon</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search documents by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label} ({status.count})
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(doc.category)}
                  <Badge variant="outline" size="sm" className={getStatusColor(doc.status)}>
                    {getStatusIcon(doc.status)}
                    <span className="ml-1">{doc.status}</span>
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{doc.name}</h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{doc.description}</p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span>{doc.type} • {doc.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span>{doc.uploadDate}</span>
                </div>
                {doc.expiryDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Expires:</span>
                    <span className={new Date(doc.expiryDate) <= new Date() ? 'text-red-600 font-medium' : ''}>
                      {doc.expiryDate}
                    </span>
                  </div>
                )}
                {doc.verifiedBy && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Verified by:</span>
                    <span className="font-medium">{doc.verifiedBy}</span>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <div className="flex flex-wrap gap-1">
                  {doc.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" size="sm" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {doc.tags.length > 3 && (
                    <Badge variant="secondary" size="sm" className="text-xs">
                      +{doc.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="mt-4 flex space-x-1">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>

              {doc.status === "expired" && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-xs">
                  <div className="flex items-center space-x-1 text-red-600">
                    <AlertTriangle className="h-3 w-3" />
                    <span className="font-medium">Document Expired</span>
                  </div>
                  <p className="text-red-600 mt-1">Please upload a renewed version</p>
                </div>
              )}

              {doc.status === "pending" && (
                <div className="mt-3 p-2 bg-orange-50 border border-orange-200 rounded text-xs">
                  <div className="flex items-center space-x-1 text-orange-600">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium">Under Review</span>
                  </div>
                  <p className="text-orange-600 mt-1">Verification in progress</p>
                </div>
              )}
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
              {searchQuery || selectedCategory !== "all" || selectedStatus !== "all"
                ? "Try adjusting your search criteria or filters"
                : "Start by uploading your first business document"
              }
            </p>
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Document Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Document Templates</CardTitle>
          <CardDescription>
            Quick access to commonly needed document templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Commercial Invoice", icon: FileText },
              { name: "Certificate of Origin", icon: Globe },
              { name: "Packing List", icon: Package },
              { name: "Quality Certificate", icon: Award }
            ].map((template) => (
              <Button key={template.name} variant="outline" className="h-20 flex-col space-y-2">
                <template.icon className="h-6 w-6" />
                <span className="text-xs text-center">{template.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 