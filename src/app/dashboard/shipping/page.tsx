"use client"

import React, { useState } from "react"
import { 
  Truck, Package, MapPin, Clock, CheckCircle, 
  AlertTriangle, Ship, Plane, Calculator, 
  Plus, Eye, Download, Filter,
  Globe, Calendar, MoreHorizontal, Route
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShippingPage() {
  const [activeTab, setActiveTab] = useState("shipments")
  const [searchQuery, setSearchQuery] = useState("")

  const shipments = [
    {
      id: "SHP-2024-001",
      orderNumber: "KLB-2024-001",
      trackingNumber: "DHL1234567890",
      carrier: "DHL Express",
      method: "Air Freight",
      status: "in_transit",
      origin: "Lagos, Nigeria",
      destination: "New York, USA",
      product: "Premium Cashew Nuts",
      weight: "500 kg",
      dimensions: "120x80x60 cm",
      shipDate: "2024-01-15",
      estimatedDelivery: "2024-01-18",
      actualDelivery: null,
      cost: "$2,450",
      buyer: "Global Foods Ltd",
      updates: [
        { date: "2024-01-15", status: "Picked up", location: "Lagos, Nigeria" },
        { date: "2024-01-16", status: "In transit", location: "Dubai, UAE" },
        { date: "2024-01-17", status: "Customs cleared", location: "New York, USA" },
        { date: "2024-01-17", status: "Out for delivery", location: "New York, USA" }
      ]
    },
    {
      id: "SHP-2024-002",
      orderNumber: "KLB-2024-002",
      trackingNumber: "MSK9876543210",
      carrier: "Maersk Line",
      method: "Sea Freight",
      status: "delivered",
      origin: "Accra, Ghana",
      destination: "Hamburg, Germany",
      product: "Organic Cocoa Beans",
      weight: "2,000 kg",
      dimensions: "Container 20ft",
      shipDate: "2023-12-01",
      estimatedDelivery: "2024-01-05",
      actualDelivery: "2024-01-03",
      cost: "$1,850",
      buyer: "Euro Cocoa GmbH",
      updates: [
        { date: "2023-12-01", status: "Container loaded", location: "Accra, Ghana" },
        { date: "2023-12-15", status: "Vessel departed", location: "Accra Port" },
        { date: "2024-01-02", status: "Arrived at port", location: "Hamburg, Germany" },
        { date: "2024-01-03", status: "Delivered", location: "Hamburg, Germany" }
      ]
    },
    {
      id: "SHP-2024-003",
      orderNumber: "KLB-2024-003",
      trackingNumber: "FED3456789012",
      carrier: "FedEx",
      method: "Express",
      status: "pending",
      origin: "Nairobi, Kenya",
      destination: "London, UK",
      product: "White Sesame Seeds",
      weight: "750 kg",
      dimensions: "100x70x50 cm",
      shipDate: "2024-01-20",
      estimatedDelivery: "2024-01-23",
      actualDelivery: null,
      cost: "$3,200",
      buyer: "UK Imports Ltd",
      updates: [
        { date: "2024-01-19", status: "Label created", location: "Nairobi, Kenya" }
      ]
    }
  ]

  const shippingRates = [
    {
      carrier: "DHL Express",
      method: "Air Freight",
      transit: "3-5 days",
      rate: "$4.90/kg",
      minWeight: "1 kg",
      maxWeight: "70 kg",
      coverage: "Global",
      tracking: "Real-time",
      insurance: "Included"
    },
    {
      carrier: "FedEx International",
      method: "Express",
      transit: "2-3 days",
      rate: "$5.20/kg",
      minWeight: "1 kg",
      maxWeight: "68 kg",
      coverage: "220+ countries",
      tracking: "Real-time",
      insurance: "Up to $100"
    },
    {
      carrier: "Maersk Line",
      method: "Sea Freight",
      transit: "25-35 days",
      rate: "$0.85/kg",
      minWeight: "1000 kg",
      maxWeight: "No limit",
      coverage: "Major ports",
      tracking: "Vessel tracking",
      insurance: "Optional"
    },
    {
      carrier: "CMA CGM",
      method: "Container",
      transit: "20-30 days",
      rate: "$2,200/20ft",
      minWeight: "5000 kg",
      maxWeight: "28,000 kg",
      coverage: "Global ports",
      tracking: "Container tracking",
      insurance: "Available"
    },
    {
      carrier: "UPS Worldwide",
      method: "Standard",
      transit: "5-7 days",
      rate: "$3.80/kg",
      minWeight: "1 kg",
      maxWeight: "70 kg",
      coverage: "190+ countries",
      tracking: "Real-time",
      insurance: "Up to $100"
    },
    {
      carrier: "Ethiopian Airlines Cargo",
      method: "Air Cargo",
      transit: "3-4 days",
      rate: "$4.50/kg",
      minWeight: "100 kg",
      maxWeight: "No limit",
      coverage: "Africa-Global",
      tracking: "Flight tracking",
      insurance: "Available"
    }
  ]

  const shippingZones = [
    {
      zone: "West Africa",
      countries: ["Nigeria", "Ghana", "Senegal", "Ivory Coast"],
      carriers: ["DHL", "FedEx", "Maersk", "CMA CGM"],
      avgTransit: "3-7 days (Air), 20-25 days (Sea)",
      restrictions: "Agricultural products require phytosanitary certificates"
    },
    {
      zone: "East Africa",
      countries: ["Kenya", "Ethiopia", "Tanzania", "Uganda"],
      carriers: ["DHL", "FedEx", "Ethiopian Airlines", "Maersk"],
      avgTransit: "2-5 days (Air), 25-30 days (Sea)",
      restrictions: "Coffee exports require quality certificates"
    },
    {
      zone: "Southern Africa",
      countries: ["South Africa", "Botswana", "Namibia", "Zambia"],
      carriers: ["DHL", "FedEx", "Maersk", "MSC"],
      avgTransit: "3-6 days (Air), 18-22 days (Sea)",
      restrictions: "Mining products require export permits"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "text-green-600 bg-green-50"
      case "in_transit": return "text-blue-600 bg-blue-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "delayed": return "text-red-600 bg-red-50"
      case "cancelled": return "text-gray-600 bg-gray-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in_transit": return <Truck className="h-4 w-4 text-blue-600" />
      case "pending": return <Clock className="h-4 w-4 text-orange-600" />
      case "delayed": return <AlertTriangle className="h-4 w-4 text-red-600" />
      default: return <Package className="h-4 w-4 text-gray-600" />
    }
  }

  const getMethodIcon = (method: string) => {
    if (method.toLowerCase().includes('air') || method.toLowerCase().includes('express')) {
      return <Plane className="h-4 w-4" />
    } else if (method.toLowerCase().includes('sea') || method.toLowerCase().includes('container')) {
      return <Ship className="h-4 w-4" />
    } else {
      return <Truck className="h-4 w-4" />
    }
  }

  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shipment.buyer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const shippingStats = {
    totalShipments: shipments.length,
    inTransit: shipments.filter(s => s.status === "in_transit").length,
    delivered: shipments.filter(s => s.status === "delivered").length,
    pending: shipments.filter(s => s.status === "pending").length,
    onTimeDelivery: Math.round((shipments.filter(s => s.actualDelivery && new Date(s.actualDelivery) <= new Date(s.estimatedDelivery)).length / shipments.filter(s => s.actualDelivery).length) * 100) || 0
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Truck className="h-8 w-8 mr-3" />
            Shipping & Logistics
          </h1>
          <p className="text-muted-foreground">
            Manage shipments, track deliveries, and compare shipping rates
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calculator className="h-4 w-4 mr-2" />
            Shipping Calculator
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Shipment
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xl font-bold">{shippingStats.totalShipments}</div>
                <div className="text-xs text-muted-foreground">Total Shipments</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-blue-600" />
              <div>
                <div className="text-xl font-bold">{shippingStats.inTransit}</div>
                <div className="text-xs text-muted-foreground">In Transit</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <div className="text-xl font-bold">{shippingStats.delivered}</div>
                <div className="text-xs text-muted-foreground">Delivered</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-orange-600" />
              <div>
                <div className="text-xl font-bold">{shippingStats.pending}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Route className="h-6 w-6 text-purple-600" />
              <div>
                <div className="text-xl font-bold">{shippingStats.onTimeDelivery}%</div>
                <div className="text-xs text-muted-foreground">On-Time Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { id: "shipments", label: "Active Shipments" },
            { id: "rates", label: "Shipping Rates" },
            { id: "zones", label: "Shipping Zones" },
            { id: "tracking", label: "Track Package" }
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
      {activeTab === "shipments" && (
        <div className="space-y-4">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by shipment ID, order number, tracking number, or buyer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Shipments List */}
          <div className="space-y-4">
            {filteredShipments.map((shipment) => (
              <Card key={shipment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {getMethodIcon(shipment.method)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{shipment.id}</h3>
                          <Badge variant="outline" className={getStatusColor(shipment.status)}>
                            {getStatusIcon(shipment.status)}
                            <span className="ml-1 capitalize">{shipment.status.replace('_', ' ')}</span>
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1">
                            <div><span className="text-muted-foreground">Order:</span> {shipment.orderNumber}</div>
                            <div><span className="text-muted-foreground">Tracking:</span> {shipment.trackingNumber}</div>
                            <div><span className="text-muted-foreground">Carrier:</span> {shipment.carrier}</div>
                            <div><span className="text-muted-foreground">Method:</span> {shipment.method}</div>
                          </div>
                          <div className="space-y-1">
                            <div><span className="text-muted-foreground">Product:</span> {shipment.product}</div>
                            <div><span className="text-muted-foreground">Weight:</span> {shipment.weight}</div>
                            <div><span className="text-muted-foreground">Buyer:</span> {shipment.buyer}</div>
                            <div><span className="text-muted-foreground">Cost:</span> {shipment.cost}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold mb-1">{shipment.cost}</div>
                      <div className="text-sm text-muted-foreground">Shipping Cost</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <span className="font-medium">{shipment.origin}</span> → <span className="font-medium">{shipment.destination}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Shipped: {shipment.shipDate} | ETA: {shipment.estimatedDelivery}
                        {shipment.actualDelivery && ` | Delivered: ${shipment.actualDelivery}`}
                      </span>
                    </div>
                  </div>

                  {/* Tracking Updates */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3">Tracking Updates</h4>
                    <div className="space-y-2">
                      {shipment.updates.slice(-3).map((update, index) => (
                        <div key={index} className="flex items-center space-x-3 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <div className="flex-1 flex items-center justify-between">
                            <span>{update.status} - {update.location}</span>
                            <span className="text-muted-foreground">{update.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Track Package
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredShipments.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Truck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No shipments found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery ? "Try adjusting your search criteria" : "Create your first shipment to get started"}
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Shipment
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {activeTab === "rates" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {shippingRates.map((rate, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getMethodIcon(rate.method)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{rate.carrier}</h3>
                      <p className="text-sm text-muted-foreground">{rate.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{rate.rate}</div>
                    <div className="text-xs text-muted-foreground">{rate.transit}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Weight Range:</span>
                    <div className="font-medium">{rate.minWeight} - {rate.maxWeight}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>
                    <div className="font-medium">{rate.coverage}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tracking:</span>
                    <div className="font-medium">{rate.tracking}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Insurance:</span>
                    <div className="font-medium">{rate.insurance}</div>
                  </div>
                </div>

                <Button className="w-full mt-4">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "zones" && (
        <div className="space-y-4">
          {shippingZones.map((zone, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{zone.zone}</h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {zone.countries.map((country) => (
                        <Badge key={country} variant="secondary" size="sm">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Globe className="h-8 w-8 text-primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Available Carriers:</span>
                    <div className="font-medium">{zone.carriers.join(", ")}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Transit Times:</span>
                    <div className="font-medium">{zone.avgTransit}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Special Requirements:</span>
                    <div className="font-medium">{zone.restrictions}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "tracking" && (
        <Card>
          <CardHeader>
            <CardTitle>Track Your Package</CardTitle>
            <CardDescription>
              Enter your tracking number to get real-time shipment updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Enter tracking number..."
                className="flex-1"
              />
              <Button>
                Track Package
              </Button>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Enter a tracking number above to see detailed tracking information
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 