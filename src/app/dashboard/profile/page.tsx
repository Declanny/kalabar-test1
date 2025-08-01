"use client"

import React, { useState } from "react"
import { 
  User, Building, MapPin, Phone, Mail, Globe, 
  Camera, Edit, Save, Upload, Shield, CheckCircle,
  AlertTriangle, FileText,
  Star, Award
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData] = useState({
    // Personal Information
    firstName: "Adebayo",
    lastName: "Okafor",
    email: "adebayo@agroexports.ng",
    phone: "+234 803 123 4567",
    position: "CEO & Founder",
    avatar: "/avatars/adebayo.jpg",
    
    // Business Information
    companyName: "AgroExports Nigeria Ltd",
    businessType: "Exporter",
    industry: "Agriculture & Food",
    founded: "2018",
    employees: "25-50",
    website: "https://agroexports.ng",
    description: "Leading agricultural exporter specializing in premium cashew nuts, sesame seeds, and cocoa products from Nigeria to global markets.",
    
    // Address Information
    address: "15 Victoria Island Road",
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria",
    postalCode: "101241",
    
    // Business Details
    registrationNumber: "RC-1234567",
    taxId: "12345678-0001",
    exportLicense: "EXP-NG-2023-001",
    annualRevenue: "$2-5 Million",
    exportMarkets: ["United States", "United Kingdom", "Germany", "Netherlands", "France"]
  })

  const verificationStatus = {
    email: { verified: true, date: "2023-01-15" },
    phone: { verified: true, date: "2023-01-15" },
    business: { verified: true, date: "2023-02-01" },
    documents: { verified: true, date: "2023-02-05" },
    bank: { verified: true, date: "2023-02-10" },
    export: { verified: true, date: "2023-02-15" }
  }

  const businessMetrics = {
    totalOrders: 1247,
    totalRevenue: "$2.4M",
    avgOrderValue: "$12,500",
    customerRating: 4.8,
    responseTime: "< 2 hours",
    onTimeDelivery: "98%",
    repeatCustomers: "85%",
    exportCountries: 15
  }

  const recentDocuments = [
    {
      name: "Business Registration Certificate",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2023-02-01",
      status: "verified",
      expiryDate: "2025-02-01"
    },
    {
      name: "Export License",
      type: "PDF", 
      size: "1.8 MB",
      uploadDate: "2023-02-05",
      status: "verified",
      expiryDate: "2024-12-31"
    },
    {
      name: "ISO 22000 Certificate",
      type: "PDF",
      size: "1.2 MB", 
      uploadDate: "2023-03-15",
      status: "verified",
      expiryDate: "2024-03-15"
    },
    {
      name: "Bank Statement",
      type: "PDF",
      size: "892 KB",
      uploadDate: "2023-12-01",
      status: "pending",
      expiryDate: "2024-01-01"
    }
  ]

  const getVerificationIcon = (verified: boolean) => {
    return verified ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <AlertTriangle className="h-4 w-4 text-orange-600" />
    )
  }

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "text-green-600 bg-green-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "rejected": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile & Settings</h1>
          <p className="text-muted-foreground">
            Manage your account information and business details
          </p>
        </div>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsEditing(false)}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-muted-foreground">{profileData.position}</p>
                <p className="text-sm text-muted-foreground">{profileData.companyName}</p>
                
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(businessMetrics.customerRating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium ml-2">
                    {businessMetrics.customerRating}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.email}</span>
                  {getVerificationIcon(verificationStatus.email.verified)}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.phone}</span>
                  {getVerificationIcon(verificationStatus.phone.verified)}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.city}, {profileData.country}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Verification Status
              </CardTitle>
              <CardDescription>
                Your account verification progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(verificationStatus).map(([key, status]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getVerificationIcon(status.verified)}
                      <span className="text-sm capitalize">
                        {key === 'export' ? 'Export License' : key} Verification
                      </span>
                    </div>
                    <Badge
                      variant={status.verified ? "default" : "secondary"}
                      size="sm"
                    >
                      {status.verified ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    Verified Supplier
                  </span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  All verifications completed
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Business Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Business Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Total Orders</div>
                  <div className="font-semibold">{businessMetrics.totalOrders}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Revenue</div>
                  <div className="font-semibold">{businessMetrics.totalRevenue}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Avg Order</div>
                  <div className="font-semibold">{businessMetrics.avgOrderValue}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Countries</div>
                  <div className="font-semibold">{businessMetrics.exportCountries}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Response Time</div>
                  <div className="font-semibold">{businessMetrics.responseTime}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">On-Time Rate</div>
                  <div className="font-semibold">{businessMetrics.onTimeDelivery}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <Input
                    value={profileData.firstName}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <Input
                    value={profileData.lastName}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    value={profileData.email}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    value={profileData.phone}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Position</label>
                  <Input
                    value={profileData.position}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input
                    value={profileData.companyName}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Business Type</label>
                  <Input
                    value={profileData.businessType}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Industry</label>
                  <Input
                    value={profileData.industry}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Founded</label>
                  <Input
                    value={profileData.founded}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Employees</label>
                  <Input
                    value={profileData.employees}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input
                    value={profileData.website}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Annual Revenue</label>
                  <Input
                    value={profileData.annualRevenue}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    value={profileData.description}
                    disabled={!isEditing}
                    className="mt-1 w-full p-2 border rounded-md resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Address Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Address</label>
                  <Input
                    value={profileData.address}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">City</label>
                  <Input
                    value={profileData.city}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">State/Province</label>
                  <Input
                    value={profileData.state}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Country</label>
                  <Input
                    value={profileData.country}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Postal Code</label>
                  <Input
                    value={profileData.postalCode}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Business Documents
              </CardTitle>
              <CardDescription>
                Upload and manage your business verification documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {doc.type} • {doc.size} • Uploaded {doc.uploadDate}
                        </div>
                        {doc.expiryDate && (
                          <div className="text-xs text-muted-foreground">
                            Expires: {doc.expiryDate}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        size="sm"
                        className={getDocumentStatusColor(doc.status)}
                      >
                        {doc.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 