"use client"

import React from "react"
import Link from "next/link"
import { 
  Users, Package, CreditCard, TrendingUp, AlertTriangle, 
  CheckCircle, Clock, DollarSign, Globe, Shield, UserCheck,
  BarChart3
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  // Mock data for admin dashboard
  const platformStats = [
    {
      title: "Total Users",
      value: "1,245",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      href: "/admin/users"
    },
    {
      title: "Active Suppliers",
      value: "856",
      change: "+8%",
      changeType: "positive",
      icon: Package,
      href: "/admin/verification"
    },
    {
      title: "Monthly Revenue",
      value: "$145,230",
      change: "+23%",
      changeType: "positive",
      icon: DollarSign,
      href: "/admin/payments"
    },
    {
      title: "Platform Uptime",
      value: "99.9%",
      change: "+0.1%",
      changeType: "positive",
      icon: TrendingUp,
      href: "/admin/analytics"
    }
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "security",
      title: "Suspicious login attempts detected",
      description: "Multiple failed login attempts from IP: 192.168.1.100",
      severity: "high",
      time: "2 minutes ago",
      resolved: false
    },
    {
      id: 2,
      type: "verification",
      title: "23 suppliers pending verification",
      description: "Review required for new supplier applications",
      severity: "medium",
      time: "1 hour ago",
      resolved: false
    },
    {
      id: 3,
      type: "content",
      title: "Product flagged for review",
      description: "Inappropriate content detected in product listing",
      severity: "medium",
      time: "3 hours ago",
      resolved: false
    },
    {
      id: 4,
      type: "payment",
      title: "High-value transaction alert",
      description: "Transaction of $50,000 requires manual approval",
      severity: "high",
      time: "5 hours ago",
      resolved: true
    }
  ]

  const pendingTasks = [
    {
      category: "Supplier Verification",
      count: 23,
      href: "/admin/verification",
      priority: "high"
    },
    {
      category: "Product Moderation",
      count: 45,
      href: "/admin/products",
      priority: "medium"
    },
    {
      category: "Content Reviews",
      count: 12,
      href: "/admin/content",
      priority: "medium"
    },
    {
      category: "Payment Disputes",
      count: 8,
      href: "/admin/payments",
      priority: "high"
    },
    {
      category: "Security Reports",
      count: 5,
      href: "/admin/security",
      priority: "high"
    }
  ]

  const recentActivity = [
    {
      user: "John Smith",
      action: "approved supplier verification",
      target: "AgroExports Ltd (Nigeria)",
      time: "5 minutes ago"
    },
    {
      user: "Sarah Johnson",
      action: "flagged product for review",
      target: "Cashew Nuts - Premium Grade",
      time: "15 minutes ago"
    },
    {
      user: "Admin System",
      action: "processed payment",
      target: "$12,500 USD transaction",
      time: "1 hour ago"
    },
    {
      user: "Mike Wilson",
      action: "updated country regulations",
      target: "Ghana export requirements",
      time: "2 hours ago"
    }
  ]

  const countryStats = [
    { country: "Nigeria", suppliers: 342, revenue: "$56,780", flag: "🇳🇬" },
    { country: "Ghana", suppliers: 198, revenue: "$34,560", flag: "🇬🇭" },
    { country: "Kenya", suppliers: 167, revenue: "$28,900", flag: "🇰🇪" },
    { country: "South Africa", suppliers: 149, revenue: "$25,120", flag: "🇿🇦" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Platform overview and management center
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Shield className="h-4 w-4 mr-2" />
            Security Center
          </Button>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {platformStats.map((stat, index) => (
          <Link key={index} href={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-xs ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Recent Alerts
            </CardTitle>
            <CardDescription>
              System alerts and notifications requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border ${
                    alert.resolved ? 'bg-muted/50' : 'bg-background'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          alert.severity === 'high'
                            ? 'destructive'
                            : alert.severity === 'medium'
                            ? 'default'
                            : 'secondary'
                        }
                        size="sm"
                      >
                        {alert.severity}
                      </Badge>
                      {alert.resolved && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {alert.time}
                    </span>
                  </div>
                  <h4 className={`font-medium text-sm ${
                    alert.resolved ? 'text-muted-foreground' : ''
                  }`}>
                    {alert.title}
                  </h4>
                  <p className={`text-xs ${
                    alert.resolved ? 'text-muted-foreground' : 'text-muted-foreground'
                  }`}>
                    {alert.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/admin/security">
                <Button variant="outline" size="sm" className="w-full">
                  View All Alerts
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Pending Tasks
            </CardTitle>
            <CardDescription>
              Tasks requiring immediate admin attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((task, index) => (
                <Link key={index} href={task.href}>
                  <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Badge
                        variant={task.priority === 'high' ? 'destructive' : 'default'}
                        size="sm"
                      >
                        {task.count}
                      </Badge>
                      <span className="text-sm font-medium">{task.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                        size="sm"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Admin Activity</CardTitle>
            <CardDescription>
              Latest actions performed by admin team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-muted-foreground"> {activity.action} </span>
                    <span className="font-medium">{activity.target}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Country Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Country Performance
            </CardTitle>
            <CardDescription>
              Supplier and revenue breakdown by country
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {countryStats.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="font-medium">{country.country}</div>
                      <div className="text-sm text-muted-foreground">
                        {country.suppliers} suppliers
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{country.revenue}</div>
                    <div className="text-sm text-muted-foreground">Monthly</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/admin/countries">
                <Button variant="outline" size="sm" className="w-full">
                  Manage Countries
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks and tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/users">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full">
                <Users className="h-6 w-6" />
                <span className="text-sm">Manage Users</span>
              </Button>
            </Link>
            <Link href="/admin/verification">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full">
                <UserCheck className="h-6 w-6" />
                <span className="text-sm">Verify Suppliers</span>
              </Button>
            </Link>
            <Link href="/admin/products">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full">
                <Package className="h-6 w-6" />
                <span className="text-sm">Review Products</span>
              </Button>
            </Link>
            <Link href="/admin/payments">
              <Button variant="outline" className="h-20 flex-col space-y-2 w-full">
                <CreditCard className="h-6 w-6" />
                <span className="text-sm">Monitor Payments</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 