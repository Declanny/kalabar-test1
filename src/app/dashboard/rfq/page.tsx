"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Plus, Search, Calendar, 
  Clock, CheckCircle, FileText, Eye,
  MessageSquare, Download, Edit
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RFQManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const rfqStats = [
    {
      title: "Active RFQs",
      value: "12",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      title: "Responses Received",
      value: "48",
      icon: MessageSquare,
      color: "text-green-600"
    },
    {
      title: "Under Evaluation",
      value: "8",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      title: "Completed",
      value: "23",
      icon: CheckCircle,
      color: "text-purple-600"
    }
  ]

  const rfqs = [
    {
      id: "RFQ-2024-0034",
      title: "Organic Sesame Seeds - 100 Tons",
      category: "Seeds & Grains",
      description: "High-quality organic sesame seeds for export to European markets. Must meet EU organic certification standards.",
      budget: "$85,000 - $120,000",
      responses: 8,
      deadline: "Feb 5, 2024",
      status: "Active",
      statusColor: "success",
      createdDate: "Jan 15, 2024",
      specifications: ["Organic Certified", "White Sesame", "99% Purity", "FOB Lagos"],
      suppliers: [
        { name: "AgroExports Ltd", rating: 4.8, response: "Submitted" },
        { name: "Sesame Traders", rating: 4.6, response: "Submitted" },
        { name: "Nigeria Seeds Co", rating: 4.9, response: "Pending" }
      ]
    },
    {
      id: "RFQ-2024-0033", 
      title: "Premium Shea Butter - 5 Tons",
      category: "Beauty & Cosmetics",
      description: "Unrefined premium shea butter for cosmetic manufacturing. Raw and processed options required.",
      budget: "$45,000 - $65,000",
      responses: 12,
      deadline: "Feb 1, 2024",
      status: "Closing Soon",
      statusColor: "destructive",
      createdDate: "Jan 10, 2024",
      specifications: ["Grade A", "Unrefined", "Ivory Color", "CIF Hamburg"],
      suppliers: [
        { name: "Shea Exports Ghana", rating: 4.9, response: "Submitted" },
        { name: "Burkina Gold", rating: 4.7, response: "Submitted" }
      ]
    },
    {
      id: "RFQ-2024-0032",
      title: "Dried Hibiscus Flowers - 2 Tons", 
      category: "Herbs & Spices",
      description: "Premium dried hibiscus flowers for tea and beverage production. Deep red color required.",
      budget: "$8,000 - $12,000",
      responses: 6,
      deadline: "Jan 30, 2024",
      status: "Under Review",
      statusColor: "default",
      createdDate: "Jan 8, 2024",
      specifications: ["Deep Red Color", "Sun Dried", "Grade 1", "EXW Lagos"],
      suppliers: [
        { name: "Hibiscus Traders", rating: 4.5, response: "Submitted" },
        { name: "West Africa Herbs", rating: 4.7, response: "Submitted" }
      ]
    },
    {
      id: "RFQ-2024-0031",
      title: "Raw Cashew Nuts - 50 Tons",
      category: "Nuts",
      description: "Raw cashew nuts for processing facility. W320 grade preferred with moisture content below 8%.",
      budget: "$120,000 - $150,000", 
      responses: 15,
      deadline: "Jan 25, 2024",
      status: "Completed",
      statusColor: "success",
      createdDate: "Jan 5, 2024",
      specifications: ["W320 Grade", "Moisture <8%", "Foreign Matter <3%", "FOB Tema"],
      suppliers: [
        { name: "Cashew Exports Ltd", rating: 4.9, response: "Selected" },
        { name: "Premium Nuts Co", rating: 4.8, response: "Shortlisted" }
      ]
    }
  ]

  const getStatusBadge = (status: string, statusColor: string) => {
    return (
      <Badge variant={"default"} size="sm">
        {status}
      </Badge>
    )
  }

  const filteredRFQs = rfqs.filter(rfq => 
    rfq.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (statusFilter === "all" || rfq.status.toLowerCase().replace(" ", "") === statusFilter)
  )

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="heading-lg">RFQ Management</h1>
          <p className="text-muted-foreground body-md">
            Create and manage your Request for Quotes
          </p>
        </div>
        <Link href="/dashboard/rfq/new">
          <Button className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Create New RFQ
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {rfqStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search RFQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("active")}
              >
                Active
              </Button>
              <Button
                variant={statusFilter === "closingsoon" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("closingsoon")}
              >
                Closing Soon
              </Button>
              <Button
                variant={statusFilter === "underreview" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("underreview")}
              >
                Under Review
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* RFQ List */}
      <div className="space-y-4">
        {filteredRFQs.map((rfq) => (
          <Card key={rfq.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 lg:p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{rfq.title}</h3>
                      {getStatusBadge(rfq.status, rfq.statusColor)}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>{rfq.id}</span>
                      <Badge variant="outline" size="sm">{rfq.category}</Badge>
                      <span>Created: {rfq.createdDate}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground">{rfq.description}</p>

                {/* Specifications */}
                <div className="flex flex-wrap gap-2">
                  {rfq.specifications.map((spec, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {spec}
                    </Badge>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="font-semibold text-lg">{rfq.responses}</div>
                    <div className="text-sm text-muted-foreground">Responses</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-primary">{rfq.budget}</div>
                    <div className="text-sm text-muted-foreground">Budget Range</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{rfq.deadline}</div>
                    <div className="text-sm text-muted-foreground">Deadline</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{rfq.suppliers.length}</div>
                    <div className="text-sm text-muted-foreground">Suppliers</div>
                  </div>
                </div>

                {/* Recent Supplier Responses */}
                {rfq.suppliers.length > 0 && (
                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-3">Recent Supplier Responses</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {rfq.suppliers.slice(0, 3).map((supplier, index) => (
                        <div key={index} className="p-3 rounded-lg border bg-card/50">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-sm">{supplier.name}</h5>
                            <Badge 
                              variant={supplier.response === "Selected" ? "success" : 
                                      supplier.response === "Submitted" ? "default" : "secondary"} 
                              size="sm"
                            >
                              {supplier.response}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>Rating: {supplier.rating}/5</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View Responses ({rfq.responses})
                  </Button>
                  {rfq.status === "Active" && (
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
                      <Calendar className="h-4 w-4 mr-2" />
                      Extend Deadline
                    </Button>
                  )}
                  {rfq.status === "Under Review" && (
                    <Button size="sm" className="flex-1 sm:flex-initial">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Finalize Selection
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredRFQs.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No RFQs Found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "No RFQs match your search criteria." : "You haven't created any RFQs yet."}
            </p>
            <Link href="/dashboard/rfq/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First RFQ
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 