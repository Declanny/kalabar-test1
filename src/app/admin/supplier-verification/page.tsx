"use client"

import React, { useState } from "react"
import { 
  Shield, CheckCircle, XCircle, Clock, Eye, Download, AlertTriangle,
  Search, Check, X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function SupplierVerificationPage() {
  const [filter, setFilter] = useState("pending")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSupplier, setSelectedSupplier] = useState<typeof verificationRequests[0] | null>(null)

  // Mock data for supplier verification requests
  const verificationRequests = [
    {
      id: "SV-001",
      companyName: "AgroExports Nigeria Ltd",
      contactPerson: "Adebayo Okafor",
      email: "adebayo@agroexports.ng",
      phone: "+234 803 123 4567",
      country: "Nigeria",
      industry: "Agriculture & Food Products",
      registrationNumber: "RC-1234567",
      yearEstablished: "2018",
      employeeCount: "25-50 employees",
      annualRevenue: "$1M - $5M",
      submittedDate: "2024-01-15",
      status: "pending",
      priority: "high",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center",
      documents: [
        { type: "businessLicense", name: "Business Registration Certificate", status: "uploaded", url: "#" },
        { type: "taxCertificate", name: "Tax Registration Certificate", status: "uploaded", url: "#" },
        { type: "exportLicense", name: "Export License", status: "uploaded", url: "#" },
        { type: "qualityCertificates", name: "ISO 9001 Certificate", status: "uploaded", url: "#" },
        { type: "companyProfile", name: "Company Profile", status: "uploaded", url: "#" },
        { type: "bankStatement", name: "Bank Statement", status: "uploaded", url: "#" }
      ],
      notes: "Premium cashew nuts exporter with good track record"
    },
    {
      id: "SV-002",
      companyName: "Ghana Cocoa Collective",
      contactPerson: "Kwame Asante",
      email: "kwame@ghanacacoa.com",
      phone: "+233 24 567 8901",
      country: "Ghana",
      industry: "Agriculture & Food Products",
      registrationNumber: "GH-789012",
      yearEstablished: "2010",
      employeeCount: "200+ employees",
      annualRevenue: "$5M - $10M",
      submittedDate: "2024-01-14",
      status: "under_review",
      priority: "medium",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&face=center",
      documents: [
        { type: "businessLicense", name: "Certificate of Incorporation", status: "approved", url: "#" },
        { type: "taxCertificate", name: "VAT Registration", status: "approved", url: "#" },
        { type: "exportLicense", name: "Export Permit", status: "rejected", url: "#", reason: "Document expired" },
        { type: "qualityCertificates", name: "Organic Certification", status: "approved", url: "#" },
        { type: "companyProfile", name: "Company Brochure", status: "approved", url: "#" },
        { type: "bankStatement", name: "Bank Reference Letter", status: "pending", url: "#" }
      ],
      notes: "Large cocoa exporter, needs updated export license"
    },
    {
      id: "SV-003",
      companyName: "East Africa Seeds Co",
      contactPerson: "Sarah Mwangi",
      email: "sarah@easeedsco.ke",
      phone: "+254 700 123 456",
      country: "Kenya",
      industry: "Agriculture & Food Products",
      registrationNumber: "KE-345678",
      yearEstablished: "2019",
      employeeCount: "11-50 employees",
      annualRevenue: "$500K - $1M",
      submittedDate: "2024-01-13",
      status: "approved",
      priority: "low",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&face=center",
      documents: [
        { type: "businessLicense", name: "Business License", status: "approved", url: "#" },
        { type: "taxCertificate", name: "Tax Clearance", status: "approved", url: "#" },
        { type: "qualityCertificates", name: "Quality Certificate", status: "approved", url: "#" },
        { type: "companyProfile", name: "Company Profile", status: "approved", url: "#" },
        { type: "bankStatement", name: "Bank Statement", status: "approved", url: "#" }
      ],
      notes: "All documents verified, supplier approved"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-600 bg-yellow-100"
      case "under_review": return "text-blue-600 bg-blue-100"
      case "approved": return "text-green-600 bg-green-100"
      case "rejected": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "rejected": return <XCircle className="h-4 w-4 text-red-600" />
      case "pending": return <Clock className="h-4 w-4 text-yellow-600" />
      default: return <AlertTriangle className="h-4 w-4 text-gray-600" />
    }
  }

  const filteredRequests = verificationRequests.filter(request => {
    if (filter !== "all" && request.status !== filter) return false
    if (searchQuery && !request.companyName.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !request.contactPerson.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const handleApproveSupplier = (supplierId: string) => {
    console.log("Approving supplier:", supplierId)
    // Implementation for approving supplier
  }

  const handleRejectSupplier = (supplierId: string) => {
    console.log("Rejecting supplier:", supplierId)
    // Implementation for rejecting supplier
  }

  const handleDocumentAction = (supplierId: string, docType: string, action: "approve" | "reject") => {
    console.log(`${action} document ${docType} for supplier ${supplierId}`)
    // Implementation for document approval/rejection
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Supplier Verification</h1>
          <p className="text-muted-foreground">Review and approve supplier registration documents</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
            {verificationRequests.filter(r => r.status === "pending").length} Pending
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            {verificationRequests.filter(r => r.status === "under_review").length} Under Review
          </Badge>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex space-x-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                All ({verificationRequests.length})
              </Button>
              <Button
                variant={filter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("pending")}
              >
                Pending ({verificationRequests.filter(r => r.status === "pending").length})
              </Button>
              <Button
                variant={filter === "under_review" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("under_review")}
              >
                Review ({verificationRequests.filter(r => r.status === "under_review").length})
              </Button>
              <Button
                variant={filter === "approved" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("approved")}
              >
                Approved ({verificationRequests.filter(r => r.status === "approved").length})
              </Button>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search companies or contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Requests List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={request.avatar} />
                    <AvatarFallback>{request.contactPerson[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{request.companyName}</h3>
                    <p className="text-muted-foreground text-sm">{request.contactPerson}</p>
                    <Badge className={cn("text-xs", getStatusColor(request.status))}>
                      {request.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>ID: {request.id}</div>
                  <div>{request.submittedDate}</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Company Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Industry</div>
                  <div className="font-medium">{request.industry}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Country</div>
                  <div className="font-medium">{request.country}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Registration</div>
                  <div className="font-medium">{request.registrationNumber}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Established</div>
                  <div className="font-medium">{request.yearEstablished}</div>
                </div>
              </div>

              {/* Documents Status */}
              <div>
                <div className="text-sm font-medium mb-2">Documents ({request.documents.length})</div>
                <div className="space-y-2">
                  {request.documents.map((doc) => (
                    <div key={doc.type} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <div className="flex items-center space-x-2">
                        {getDocumentStatusIcon(doc.status)}
                        <span className="text-sm">{doc.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <Download className="h-3 w-3" />
                        </Button>
                        {doc.status === "pending" && (
                          <>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 px-2 text-green-600 hover:text-green-700"
                              onClick={() => handleDocumentAction(request.id, doc.type, "approve")}
                            >
                              <Check className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 px-2 text-red-600 hover:text-red-700"
                              onClick={() => handleDocumentAction(request.id, doc.type, "reject")}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {request.notes && (
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">Notes</div>
                  <div className="text-sm text-blue-700">{request.notes}</div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedSupplier(request)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                
                {request.status === "pending" || request.status === "under_review" ? (
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleRejectSupplier(request.id)}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApproveSupplier(request.id)}
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                ) : request.status === "approved" ? (
                  <Badge className="bg-green-100 text-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified Supplier
                  </Badge>
                ) : (
                  <Badge className="bg-red-100 text-red-700">
                    <XCircle className="h-3 w-3 mr-1" />
                    Rejected
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredRequests.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No verification requests found</h3>
            <p className="text-muted-foreground">
              {filter === "all" ? "No suppliers have submitted verification documents yet." : 
               `No suppliers with ${filter.replace("_", " ")} status found.`}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Detailed View Modal would go here */}
      {selectedSupplier && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{selectedSupplier.companyName}</CardTitle>
                  <CardDescription>Detailed verification review</CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedSupplier(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Detailed view content would go here */}
              <div className="text-center py-8 text-muted-foreground">
                Detailed supplier information and document review interface
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 