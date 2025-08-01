"use client"

import React, { useState } from "react"
import { 
  Scale, MessageSquare, FileText, AlertTriangle, 
  CheckCircle, Clock, Users, DollarSign, Shield,
  Upload, Download, Eye, Video,
  Flag, UserCheck, Gavel
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DisputesPage() {
  const [activeTab, setActiveTab] = useState("active")


  const disputes = [
    {
      id: "DSP-2024-001",
      orderNumber: "KLB-2024-001",
      title: "Product Quality Issues - Cashew Nuts Shipment",
      status: "active",
      priority: "high",
      amount: "$12,500 USD",
      amountHeld: "$12,500 USD",
      disputeType: "quality_issue",
      createdDate: "2024-01-15",
      lastUpdate: "2024-01-18",
      estimatedResolution: "2024-01-25",
      
      // Parties involved
      claimant: {
        name: "Global Foods Ltd",
        role: "buyer",
        country: "United States",
        email: "procurement@globalfoods.com",
        joinedDate: "2024-01-15"
      },
      respondent: {
        name: "AgroExports Nigeria Ltd",
        role: "supplier", 
        country: "Nigeria",
        email: "sales@agroexports.ng",
        joinedDate: "2024-01-16"
      },
      
      // Dispute details
      description: "Received cashew nuts do not meet the agreed quality specifications. Moisture content is 8% instead of specified 5%. Requesting partial refund or replacement.",
      evidence: [
        { type: "photo", name: "Product Photos", uploadedBy: "buyer", date: "2024-01-15" },
        { type: "document", name: "Quality Certificate", uploadedBy: "supplier", date: "2024-01-16" },
        { type: "document", name: "Lab Test Results", uploadedBy: "buyer", date: "2024-01-17" },
        { type: "document", name: "Original Purchase Agreement", uploadedBy: "system", date: "2024-01-15" }
      ],
      
      // Timeline
      timeline: [
        { date: "2024-01-15", actor: "buyer", action: "Dispute opened", details: "Quality issue reported with evidence" },
        { date: "2024-01-16", actor: "system", action: "Funds held", details: "$12,500 USD placed in escrow" },
        { date: "2024-01-16", actor: "supplier", action: "Response submitted", details: "Disputed the quality claims with certificates" },
        { date: "2024-01-17", actor: "buyer", action: "Additional evidence", details: "Lab test results uploaded" },
        { date: "2024-01-18", actor: "mediator", action: "Review in progress", details: "Kalabah team reviewing all evidence" }
      ],
      
      // Current resolution attempts
      offers: [
        {
          from: "supplier",
          type: "partial_refund",
          amount: "$2,500 USD",
          description: "Offering 20% refund as goodwill gesture",
          date: "2024-01-17",
          status: "pending"
        }
      ],
      
      mediator: {
        name: "Dr. James Wilson",
        role: "Senior Trade Dispute Mediator",
        expertise: "Agricultural Trade Disputes",
        rating: 4.9,
        casesResolved: 234
      }
    },
    {
      id: "DSP-2024-002", 
      orderNumber: "KLB-2024-002",
      title: "Delayed Shipment - Cocoa Beans Export",
      status: "mediation",
      priority: "medium",
      amount: "$8,750 USD",
      amountHeld: "$8,750 USD",
      disputeType: "delivery_delay",
      createdDate: "2024-01-10",
      lastUpdate: "2024-01-19",
      estimatedResolution: "2024-01-22",
      
      claimant: {
        name: "Euro Cocoa GmbH",
        role: "buyer",
        country: "Germany", 
        email: "imports@eurococoa.de",
        joinedDate: "2024-01-10"
      },
      respondent: {
        name: "Ghana Cocoa Collective",
        role: "supplier",
        country: "Ghana",
        email: "export@ghanacocoa.com", 
        joinedDate: "2024-01-11"
      },
      
      description: "Shipment was delayed by 3 weeks beyond agreed delivery date, causing production delays and additional costs.",
      timeline: [
        { date: "2024-01-10", actor: "buyer", action: "Dispute opened", details: "Delivery delay reported" },
        { date: "2024-01-11", actor: "supplier", action: "Response submitted", details: "Explained port delays beyond control" },
        { date: "2024-01-15", actor: "mediator", action: "Mediation started", details: "Scheduled virtual meeting" },
        { date: "2024-01-18", actor: "both", action: "Meeting held", details: "Both parties presented their cases" }
      ],
      
      mediator: {
        name: "Sarah Chen",
        role: "International Trade Mediator", 
        expertise: "Shipping & Logistics Disputes",
        rating: 4.8,
        casesResolved: 189
      }
    },
    {
      id: "DSP-2024-003",
      orderNumber: "KLB-2024-003", 
      title: "Payment Terms Disagreement - Sesame Seeds",
      status: "resolved",
      priority: "low",
      amount: "$5,200 USD",
      amountHeld: "$0 USD",
      disputeType: "payment_terms",
      createdDate: "2024-01-05",
      lastUpdate: "2024-01-12",
      estimatedResolution: "2024-01-12",
      resolution: "Mutual agreement reached. Funds released to supplier with adjusted payment terms for future orders.",
      
      claimant: {
        name: "UK Imports Ltd",
        role: "buyer", 
        country: "United Kingdom",
        email: "orders@ukimports.co.uk",
        joinedDate: "2024-01-05"
      },
      respondent: {
        name: "East Africa Grains Co.",
        role: "supplier",
        country: "Kenya", 
        email: "sales@eastafricagrains.ke",
        joinedDate: "2024-01-06"
      },
      
      description: "Payment terms disagreement regarding credit period and advance payment requirements.",
      timeline: [
        { date: "2024-01-05", actor: "buyer", action: "Dispute opened", details: "Payment terms disagreement reported" },
        { date: "2024-01-06", actor: "supplier", action: "Response submitted", details: "Explained standard payment terms" },
        { date: "2024-01-08", actor: "mediator", action: "Mediation started", details: "Both parties agreed to mediation" },
        { date: "2024-01-12", actor: "both", action: "Agreement reached", details: "Mutual agreement on revised terms" },
        { date: "2024-01-12", actor: "system", action: "Dispute resolved", details: "Funds released to supplier" }
      ],
      
      mediator: {
        name: "Mohammed Al-Rashid",
        role: "Commercial Mediator",
        expertise: "Payment & Contract Disputes", 
        rating: 4.7,
        casesResolved: 156
      }
    }
  ]

  const disputeStats = {
    total: disputes.length,
    active: disputes.filter(d => d.status === "active").length,
    inMediation: disputes.filter(d => d.status === "mediation").length,
    resolved: disputes.filter(d => d.status === "resolved").length,
    totalHeld: disputes.reduce((sum, d) => sum + parseFloat(d.amountHeld.replace(/[$,A-Z\s]/g, '') || '0'), 0),
    avgResolutionTime: "7 days"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-red-600 bg-red-50"
      case "mediation": return "text-orange-600 bg-orange-50"
      case "resolved": return "text-green-600 bg-green-50"
      case "escalated": return "text-purple-600 bg-purple-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <AlertTriangle className="h-4 w-4" />
      case "mediation": return <Users className="h-4 w-4" />
      case "resolved": return <CheckCircle className="h-4 w-4" />
      case "escalated": return <Flag className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-100"
      case "medium": return "text-orange-600 bg-orange-100"
      case "low": return "text-blue-600 bg-blue-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const filteredDisputes = disputes.filter(dispute => {
    if (activeTab === "all") return true
    return dispute.status === activeTab
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Scale className="h-8 w-8 mr-3 text-primary" />
            Dispute Resolution Center
          </h1>
          <p className="text-muted-foreground">
            Secure mediation for trade disputes with escrow fund protection
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Guidelines
          </Button>
          <Button size="sm">
            <AlertTriangle className="h-4 w-4 mr-2" />
            File New Dispute
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xl font-bold">{disputeStats.total}</div>
                <div className="text-xs text-muted-foreground">Total Cases</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <div className="text-xl font-bold">{disputeStats.active}</div>
                <div className="text-xs text-muted-foreground">Active</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-orange-600" />
              <div>
                <div className="text-xl font-bold">{disputeStats.inMediation}</div>
                <div className="text-xs text-muted-foreground">In Mediation</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <div className="text-xl font-bold">{disputeStats.resolved}</div>
                <div className="text-xs text-muted-foreground">Resolved</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xl font-bold">${disputeStats.totalHeld.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Funds in Escrow</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: "active", label: "Active Disputes", count: disputeStats.active },
            { id: "mediation", label: "In Mediation", count: disputeStats.inMediation },
            { id: "resolved", label: "Resolved", count: disputeStats.resolved },
            { id: "all", label: "All Cases", count: disputeStats.total }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              <span>{tab.label}</span>
              <Badge variant="secondary" size="sm">{tab.count}</Badge>
            </button>
          ))}
        </nav>
      </div>

      {/* Disputes List */}
      <div className="space-y-4">
        {filteredDisputes.map((dispute) => (
          <Card key={dispute.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold">{dispute.id}</h3>
                    <Badge variant="outline" className={getStatusColor(dispute.status)}>
                      {getStatusIcon(dispute.status)}
                      <span className="ml-1 capitalize">{dispute.status}</span>
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(dispute.priority)}>
                      {dispute.priority} priority
                    </Badge>
                  </div>
                  <h4 className="font-medium text-foreground mb-2">{dispute.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{dispute.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{dispute.amount}</div>
                  <div className="text-sm text-muted-foreground">Dispute Amount</div>
                  <div className="text-sm font-medium text-red-600 mt-1">
                    {dispute.amountHeld} held in escrow
                  </div>
                </div>
              </div>

              {/* Parties Involved */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">CLAIMANT</div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium">{dispute.claimant.name}</div>
                      <div className="text-sm text-muted-foreground">{dispute.claimant.country} • {dispute.claimant.role}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">RESPONDENT</div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-600" />
                    <div>
                      <div className="font-medium">{dispute.respondent.name}</div>
                      <div className="text-sm text-muted-foreground">{dispute.respondent.country} • {dispute.respondent.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mediator Info */}
              {dispute.mediator && (
                <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg mb-4">
                  <Gavel className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <div className="font-medium">{dispute.mediator.name}</div>
                    <div className="text-sm text-muted-foreground">{dispute.mediator.role} • {dispute.mediator.expertise}</div>
                    <div className="text-sm text-muted-foreground">
                      ⭐ {dispute.mediator.rating} rating • {dispute.mediator.casesResolved} cases resolved
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              )}

              {/* Key Dates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <span className="text-muted-foreground">Created:</span>
                  <div className="font-medium">{dispute.createdDate}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Last Update:</span>
                  <div className="font-medium">{dispute.lastUpdate}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Est. Resolution:</span>
                  <div className="font-medium">{dispute.estimatedResolution}</div>
                </div>
              </div>

              {/* Recent Timeline */}
              <div className="border-t pt-4">
                <h5 className="text-sm font-medium mb-3">Recent Activity</h5>
                <div className="space-y-2">
                  {dispute.timeline && dispute.timeline.length > 0 ? (
                    dispute.timeline.slice(-2).map((event, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <span className="font-medium capitalize">{event.actor}</span>
                          <span className="text-muted-foreground"> {event.action} - {event.details}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.date}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      No recent activity available
                    </div>
                  )}
                </div>
              </div>

              {/* Pending Offers */}
              {dispute.offers && dispute.offers.length > 0 && (
                <div className="border-t pt-4 mt-4">
                  <h5 className="text-sm font-medium mb-3">Pending Settlement Offers</h5>
                  {dispute.offers.map((offer, index) => (
                    <div key={index} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-orange-800">
                          {offer.type.replace('_', ' ').toUpperCase()}: {offer.amount}
                        </div>
                        <Badge variant="outline" className="text-orange-600 bg-orange-100">
                          {offer.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-orange-700">{offer.description}</p>
                      <div className="text-xs text-orange-600 mt-1">From {offer.from} • {offer.date}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Resolution (for resolved cases) */}
              {dispute.status === "resolved" && dispute.resolution && (
                <div className="border-t pt-4 mt-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-800">Resolution</span>
                    </div>
                    <p className="text-sm text-green-700">{dispute.resolution}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedDispute(dispute.id)}>
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Discussion
                  </Button>
                  {dispute.status === "active" && (
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Add Evidence
                    </Button>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDisputes.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Scale className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No disputes found</h3>
            <p className="text-muted-foreground mb-4">
              {activeTab === "all" 
                ? "Great! No active disputes. Your trade relationships are running smoothly."
                : `No ${activeTab} disputes at the moment.`
              }
            </p>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              View Resolution Guidelines
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Resolution Guidelines Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            How Kalabah Dispute Resolution Works
          </CardTitle>
          <CardDescription>
            Our secure mediation process protects both buyers and suppliers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">1. Dispute Filed</h4>
              <p className="text-sm text-muted-foreground">
                Either party files a dispute with evidence. Funds are immediately held in secure escrow.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">2. Mediation Process</h4>
              <p className="text-sm text-muted-foreground">
                Expert mediators review evidence and facilitate discussions between both parties.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">3. Fair Resolution</h4>
              <p className="text-sm text-muted-foreground">
                Funds are released according to the agreed resolution, ensuring fair outcomes for all.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 