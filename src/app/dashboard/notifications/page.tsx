"use client"

import React, { useState } from "react"
import { 
  Bell, CheckCircle, AlertTriangle, Info, Package, 
  CreditCard, Users, Clock, Filter, MoreHorizontal,
  Eye, Trash2, Archive
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "order",
      title: "New Order Received",
      message: "Order #KLB-2024-001 for 500kg Premium Cashew Nuts from Global Foods Ltd",
      timestamp: "2 minutes ago",
      read: false,
      priority: "high",
      icon: Package,
      action: {
        label: "View Order",
        href: "/dashboard/orders"
      }
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      message: "$12,500 USD payment confirmed for Order #KLB-2024-001",
      timestamp: "15 minutes ago",
      read: false,
      priority: "medium",
      icon: CreditCard,
      action: {
        label: "View Payment",
        href: "/dashboard/payments"
      }
    },
    {
      id: 3,
      type: "verification",
      title: "Supplier Verification Approved",
      message: "Your business verification has been approved. You can now list products.",
      timestamp: "1 hour ago",
      read: true,
      priority: "medium",
      icon: CheckCircle,
      action: {
        label: "Add Products",
        href: "/dashboard/products/new"
      }
    },
    {
      id: 4,
      type: "message",
      title: "New Message from Buyer",
      message: "Sarah Chen from Global Foods Ltd sent you a message regarding cashew quality standards",
      timestamp: "2 hours ago",
      read: false,
      priority: "medium",
      icon: Users,
      action: {
        label: "Reply",
        href: "/dashboard/messages"
      }
    },
    {
      id: 5,
      type: "system",
      title: "Platform Maintenance Notice",
      message: "Scheduled maintenance on Sunday, March 10th from 2:00 AM - 4:00 AM UTC",
      timestamp: "3 hours ago",
      read: true,
      priority: "low",
      icon: Info,
      action: null
    },
    {
      id: 6,
      type: "shipping",
      title: "Shipment Status Update",
      message: "Order #KLB-2024-002 has been dispatched via DHL Express. Tracking: 1234567890",
      timestamp: "5 hours ago",
      read: true,
      priority: "medium",
      icon: Package,
      action: {
        label: "Track Shipment",
        href: "/dashboard/orders"
      }
    },
    {
      id: 7,
      type: "warning",
      title: "Product Listing Requires Update",
      message: "Your Organic Sesame Seeds listing needs updated certifications to remain active",
      timestamp: "1 day ago",
      read: false,
      priority: "high",
      icon: AlertTriangle,
      action: {
        label: "Update Product",
        href: "/dashboard/products"
      }
    },
    {
      id: 8,
      type: "payment",
      title: "Payment Dispute Resolved",
      message: "The payment dispute for Order #KLB-2024-003 has been resolved in your favor",
      timestamp: "2 days ago",
      read: true,
      priority: "medium",
      icon: CheckCircle,
      action: {
        label: "View Details",
        href: "/dashboard/payments"
      }
    }
  ]

  const filterOptions = [
    { value: "all", label: "All Notifications", count: notifications.length },
    { value: "unread", label: "Unread", count: notifications.filter(n => !n.read).length },
    { value: "order", label: "Orders", count: notifications.filter(n => n.type === "order").length },
    { value: "payment", label: "Payments", count: notifications.filter(n => n.type === "payment").length },
    { value: "message", label: "Messages", count: notifications.filter(n => n.type === "message").length },
    { value: "system", label: "System", count: notifications.filter(n => n.type === "system").length }
  ]

  const filteredNotifications = filter === "all" 
    ? notifications 
    : filter === "unread"
    ? notifications.filter(n => !n.read)
    : notifications.filter(n => n.type === filter)

  const unreadCount = notifications.filter(n => !n.read).length

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50"
      case "medium": return "text-yellow-600 bg-yellow-50"
      case "low": return "text-blue-600 bg-blue-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "order": return "text-green-600"
      case "payment": return "text-blue-600"
      case "verification": return "text-purple-600"
      case "message": return "text-indigo-600"
      case "system": return "text-gray-600"
      case "shipping": return "text-orange-600"
      case "warning": return "text-red-600"
      default: return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Bell className="h-8 w-8 mr-3" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-3">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-muted-foreground">
            Stay updated with your business activities and platform announcements
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm">
            <Archive className="h-4 w-4 mr-2" />
            Archive Read
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={filter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(option.value)}
                  className="flex items-center space-x-2"
                >
                  <span>{option.label}</span>
                  <Badge variant="secondary" size="sm">
                    {option.count}
                  </Badge>
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Search notifications..."
                className="w-64"
              />
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
              <p className="text-muted-foreground">
                {filter === "all" 
                  ? "You're all caught up! No new notifications." 
                  : `No ${filter} notifications at the moment.`
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`hover:shadow-md transition-shadow ${
                !notification.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${getTypeColor(notification.type)} bg-current/10`}>
                    <notification.icon className={`h-5 w-5 ${getTypeColor(notification.type)}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {notification.title}
                        {!notification.read && (
                          <span className="ml-2 h-2 w-2 bg-primary rounded-full inline-block"></span>
                        )}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline" 
                          size="sm"
                          className={getPriorityColor(notification.priority)}
                        >
                          {notification.priority}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {notification.timestamp}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {notification.action && (
                          <Button variant="outline" size="sm">
                            {notification.action.label}
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length >= 8 && (
        <div className="text-center">
          <Button variant="outline">
            Load More Notifications
          </Button>
        </div>
      )}
    </div>
  )
} 