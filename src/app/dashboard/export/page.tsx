"use client"

import React, { useState } from "react"
import { 
  Globe, FileText, Truck, Shield, TrendingUp, 
  CheckCircle,
  Users, Calculator, Mail, Phone,
  Eye, Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExportServicesPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const exportServices = [
    {
      title: "Market Research & Intelligence",
      description: "Access detailed market analysis and trade opportunities",
      icon: TrendingUp,
      features: ["Market demand analysis", "Pricing benchmarks", "Competitor analysis", "Trade statistics"],
      status: "available",
      price: "Free"
    },
    {
      title: "Export Documentation",
      description: "Generate and manage all required export documents",
      icon: FileText,
      features: ["Commercial invoices", "Certificates of origin", "Export licenses", "Phytosanitary certificates"],
      status: "available",
      price: "$25/document"
    },
    {
      title: "Logistics & Shipping",
      description: "End-to-end shipping and logistics management",
      icon: Truck,
      features: ["Freight forwarding", "Container booking", "Tracking", "Insurance"],
      status: "available",
      price: "Quote-based"
    },
    {
      title: "Trade Finance Support",
      description: "Access financing options for your exports",
      icon: Shield,
      features: ["Letters of credit", "Export credit insurance", "Trade loans", "Currency hedging"],
      status: "available",
      price: "2.5-4.5% APR"
    },
    {
      title: "Compliance & Regulatory",
      description: "Ensure compliance with international trade regulations",
      icon: CheckCircle,
      features: ["Regulatory guidance", "Compliance checks", "Risk assessment", "Legal support"],
      status: "available",
      price: "$150/consultation"
    },
    {
      title: "Quality Certification",
      description: "Get your products certified for international markets",
      icon: Shield,
      features: ["ISO certifications", "Quality testing", "Product verification", "Lab reports"],
      status: "available",
      price: "$500-2000"
    }
  ]

  const marketOpportunities = [
    {
      country: "United States",
      flag: "🇺🇸",
      product: "Cashew Nuts",
      demand: "High",
      growth: "+15%",
      avgPrice: "$12.50/kg",
      marketSize: "$2.8B",
      requirements: ["FDA approval", "Organic certification"],
      opportunity: "Premium organic market growing rapidly"
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      product: "Cocoa Beans",
      demand: "Very High",
      growth: "+8%",
      avgPrice: "$4.20/kg",
      marketSize: "$1.2B",
      requirements: ["EU standards", "UTZ certification"],
      opportunity: "Sustainable cocoa sourcing initiative"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      product: "Sesame Seeds",
      demand: "Medium",
      growth: "+12%",
      avgPrice: "$2.80/kg",
      marketSize: "$450M",
      requirements: ["Quality standards", "Traceability"],
      opportunity: "Health food market expansion"
    },
    {
      country: "Netherlands",
      flag: "🇳🇱",
      product: "Palm Oil",
      demand: "High",
      growth: "+6%",
      avgPrice: "$1.20/kg",
      marketSize: "$3.5B",
      requirements: ["RSPO certification", "Sustainability"],
      opportunity: "Sustainable palm oil demand"
    }
  ]

  const activeProjects = [
    {
      id: "EXP-2024-001",
      title: "US Market Entry - Cashew Export",
      client: "AgroExports Nigeria Ltd",
      status: "in_progress",
      progress: 75,
      startDate: "2024-01-10",
      deadline: "2024-03-15",
      services: ["Market Research", "Documentation", "Logistics"],
      value: "$15,000",
      manager: "Sarah Johnson"
    },
    {
      id: "EXP-2024-002",
      title: "EU Certification - Organic Cocoa",
      client: "Ghana Cocoa Collective",
      status: "pending",
      progress: 25,
      startDate: "2024-01-15",
      deadline: "2024-04-30",
      services: ["Quality Certification", "Compliance"],
      value: "$8,500",
      manager: "Michael Chen"
    },
    {
      id: "EXP-2024-003",
      title: "Asian Market Expansion",
      client: "East Africa Grains Co.",
      status: "completed",
      progress: 100,
      startDate: "2023-11-01",
      deadline: "2024-01-31",
      services: ["Market Research", "Trade Finance"],
      value: "$12,000",
      manager: "Amanda Davis"
    }
  ]

  const tradeExperts = [
    {
      name: "Dr. James Wilson",
      role: "Senior Trade Advisor",
      specialization: "African Agriculture Exports",
      experience: "15+ years",
      languages: ["English", "French", "Swahili"],
      rating: 4.9,
      consultations: 234,
      avatar: "/experts/james.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Export Documentation Specialist",
      specialization: "Trade Documentation & Compliance",
      experience: "10+ years",
      languages: ["English", "Mandarin", "Arabic"],
      rating: 4.8,
      consultations: 189,
      avatar: "/experts/sarah.jpg"
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Market Research Analyst",
      specialization: "MENA & European Markets",
      experience: "8+ years",
      languages: ["English", "Arabic", "German"],
      rating: 4.7,
      consultations: 156,
      avatar: "/experts/mohammed.jpg"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50"
      case "in_progress": return "text-blue-600 bg-blue-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "delayed": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getDemandColor = (demand: string) => {
    switch (demand.toLowerCase()) {
      case "very high": return "text-green-600 bg-green-50"
      case "high": return "text-blue-600 bg-blue-50"
      case "medium": return "text-orange-600 bg-orange-50"
      case "low": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Globe className="h-8 w-8 mr-3" />
            Export Services
          </h1>
          <p className="text-muted-foreground">
            Comprehensive export facilitation and international trade support
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calculator className="h-4 w-4 mr-2" />
            Export Calculator
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Request Service
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm text-muted-foreground">Export Markets</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-sm text-muted-foreground">Documents Processed</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">$2.4M</div>
                <div className="text-sm text-muted-foreground">Export Value Facilitated</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: "overview", label: "Overview" },
            { id: "services", label: "Services" },
            { id: "opportunities", label: "Market Opportunities" },
            { id: "projects", label: "Active Projects" },
            { id: "experts", label: "Trade Experts" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Getting Started */}
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with Exports</CardTitle>
                <CardDescription>
                  Essential steps to begin your international trade journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Market Research", description: "Identify target markets and opportunities", completed: true },
                    { step: 2, title: "Product Compliance", description: "Ensure your products meet international standards", completed: true },
                    { step: 3, title: "Documentation", description: "Prepare necessary export documents", completed: false },
                    { step: 4, title: "Logistics Setup", description: "Arrange shipping and logistics", completed: false }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        item.completed ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.completed ? <CheckCircle className="h-4 w-4" /> : item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">
                  Start Export Assessment
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates on your export services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: "Market research completed", item: "US Cashew Market", time: "2 hours ago", type: "success" },
                    { action: "Document generated", item: "Certificate of Origin", time: "5 hours ago", type: "info" },
                    { action: "Consultation scheduled", item: "Dr. James Wilson", time: "1 day ago", type: "info" },
                    { action: "Shipment tracking updated", item: "Order #KLB-2024-001", time: "2 days ago", type: "info" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-600' : 'bg-blue-600'
                      }`}></div>
                      <div className="flex-1">
                        <span className="font-medium">{activity.action}</span>
                        <span className="text-muted-foreground"> for {activity.item}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "services" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {exportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{service.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">
                    Request {service.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "opportunities" && (
        <div className="space-y-4">
          {marketOpportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{opportunity.flag}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold">{opportunity.country}</h3>
                        <Badge variant="outline">{opportunity.product}</Badge>
                        <Badge variant="outline" className={getDemandColor(opportunity.demand)}>
                          {opportunity.demand} Demand
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-muted-foreground">Growth Rate:</span>
                          <div className="font-semibold text-green-600">{opportunity.growth}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Avg Price:</span>
                          <div className="font-semibold">{opportunity.avgPrice}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Market Size:</span>
                          <div className="font-semibold">{opportunity.marketSize}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Requirements:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {opportunity.requirements.map((req) => (
                              <Badge key={req} variant="outline" size="sm">{req}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Opportunity:</strong> {opportunity.opportunity}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm">
                      Request Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "projects" && (
        <div className="space-y-4">
          {activeProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.client} • Managed by {project.manager}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">{project.value}</div>
                    <div className="text-sm text-muted-foreground">Project Value</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Start Date:</span>
                    <div className="font-medium">{project.startDate}</div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Deadline:</span>
                    <div className="font-medium">{project.deadline}</div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Progress:</span>
                    <div className="font-medium">{project.progress}%</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.services.map((service) => (
                      <Badge key={service} variant="secondary" size="sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "experts" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tradeExperts.map((expert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <h3 className="font-semibold text-lg mb-1">{expert.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{expert.role}</p>
                <p className="text-sm font-medium mb-3">{expert.specialization}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Experience: </span>
                    <span className="font-medium">{expert.experience}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Rating: </span>
                    <span className="font-medium">{expert.rating}/5 ({expert.consultations} consultations)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Languages: </span>
                    <span className="font-medium">{expert.languages.join(", ")}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 