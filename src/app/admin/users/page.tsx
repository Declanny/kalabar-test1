"use client"

import React, { useState } from "react"
import { 
  Filter, Users, UserCheck, Shield, 
  Ban, Edit, MoreHorizontal, Mail, Phone,
  Calendar, MapPin, Building, CheckCircle,
  Clock, Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")

  const users = [
    {
      id: 1,
      name: "Adebayo Okafor",
      email: "adebayo@agroexports.ng",
      phone: "+234 803 123 4567",
      role: "supplier",
      status: "active",
      verificationStatus: "verified",
      company: "AgroExports Nigeria Ltd",
      country: "Nigeria",
      countryFlag: "🇳🇬",
      joinDate: "2023-02-15",
      lastLogin: "2024-01-15",
      totalOrders: 24,
      totalRevenue: "$245,600",
      rating: 4.8,
      avatar: "/avatars/adebayo.jpg",
      riskScore: "Low",
      kycStatus: "completed",
      documentsStatus: "approved"
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@globalfoods.com",
      phone: "+44 20 7123 4567",
      role: "buyer",
      status: "active",
      verificationStatus: "verified",
      company: "Global Foods Ltd",
      country: "United Kingdom",
      countryFlag: "🇬🇧",
      joinDate: "2023-01-20",
      lastLogin: "2024-01-14",
      totalOrders: 18,
      totalRevenue: "$189,400",
      rating: 4.7,
      avatar: "/avatars/sarah.jpg",
      riskScore: "Low",
      kycStatus: "completed",
      documentsStatus: "approved"
    },
    {
      id: 3,
      name: "Kwame Asante",
      email: "kwame@ghanacocoa.com",
      phone: "+233 20 123 4567",
      role: "supplier",
      status: "pending",
      verificationStatus: "pending",
      company: "Ghana Cocoa Collective",
      country: "Ghana",
      countryFlag: "🇬🇭",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-12",
      totalOrders: 0,
      totalRevenue: "$0",
      rating: 0,
      avatar: "/avatars/kwame.jpg",
      riskScore: "Medium",
      kycStatus: "under_review",
      documentsStatus: "pending"
    },
    {
      id: 4,
      name: "Mohammed Al-Rashid",
      email: "mohammed@metrades.ae",
      phone: "+971 4 123 4567",
      role: "buyer",
      status: "suspended",
      verificationStatus: "rejected",
      company: "Middle East Traders LLC",
      country: "UAE",
      countryFlag: "🇦🇪",
      joinDate: "2023-11-05",
      lastLogin: "2023-12-20",
      totalOrders: 3,
      totalRevenue: "$45,200",
      rating: 3.2,
      avatar: "/avatars/mohammed.jpg",
      riskScore: "High",
      kycStatus: "rejected",
      documentsStatus: "rejected"
    },
    {
      id: 5,
      name: "Amina Hassan",
      email: "amina@eastafricagrains.co.ke",
      phone: "+254 20 123 4567",
      role: "supplier",
      status: "active",
      verificationStatus: "verified",
      company: "East Africa Grains Co.",
      country: "Kenya",
      countryFlag: "🇰🇪",
      joinDate: "2023-08-12",
      lastLogin: "2024-01-13",
      totalOrders: 15,
      totalRevenue: "$156,800",
      rating: 4.6,
      avatar: "/avatars/amina.jpg",
      riskScore: "Low",
      kycStatus: "completed",
      documentsStatus: "approved"
    }
  ]

  const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "supplier", label: "Suppliers" },
    { value: "buyer", label: "Buyers" },
    { value: "admin", label: "Admins" }
  ]

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "suspended", label: "Suspended" },
    { value: "banned", label: "Banned" }
  ]

  const countryOptions = [
    { value: "all", label: "All Countries" },
    { value: "nigeria", label: "Nigeria" },
    { value: "ghana", label: "Ghana" },
    { value: "kenya", label: "Kenya" },
    { value: "south-africa", label: "South Africa" }
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "all" || user.role === selectedRole
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus
    const matchesCountry = selectedCountry === "all" || user.country.toLowerCase().includes(selectedCountry)
    
    return matchesSearch && matchesRole && matchesStatus && matchesCountry
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 bg-green-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "suspended": return "text-red-600 bg-red-50"
      case "banned": return "text-red-800 bg-red-100"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getVerificationColor = (status: string) => {
    switch (status) {
      case "verified": return "text-green-600 bg-green-50"
      case "pending": return "text-orange-600 bg-orange-50"
      case "rejected": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "text-green-600 bg-green-50"
      case "medium": return "text-orange-600 bg-orange-50"
      case "high": return "text-red-600 bg-red-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const userStats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === "active").length,
    pendingUsers: users.filter(u => u.status === "pending").length,
    totalSuppliers: users.filter(u => u.role === "supplier").length,
    totalBuyers: users.filter(u => u.role === "buyer").length,
    verifiedUsers: users.filter(u => u.verificationStatus === "verified").length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage platform users, verifications, and access controls
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Shield className="h-4 w-4 mr-2" />
            Bulk Actions
          </Button>
          <Button size="sm">
            <UserCheck className="h-4 w-4 mr-2" />
            Verification Queue
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xl font-bold">{userStats.totalUsers}</div>
                <div className="text-xs text-muted-foreground">Total Users</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <div className="text-xl font-bold">{userStats.activeUsers}</div>
                <div className="text-xs text-muted-foreground">Active</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-orange-600" />
              <div>
                <div className="text-xl font-bold">{userStats.pendingUsers}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-blue-600" />
              <div>
                <div className="text-xl font-bold">{userStats.totalSuppliers}</div>
                <div className="text-xs text-muted-foreground">Suppliers</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-600" />
              <div>
                <div className="text-xl font-bold">{userStats.totalBuyers}</div>
                <div className="text-xs text-muted-foreground">Buyers</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-6 w-6 text-green-600" />
              <div>
                <div className="text-xl font-bold">{userStats.verifiedUsers}</div>
                <div className="text-xs text-muted-foreground">Verified</div>
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
                placeholder="Search by name, email, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              {roleOptions.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
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
                  {status.label}
                </option>
              ))}
            </select>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              {countryOptions.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-lg">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <span className="text-lg">{user.countryFlag}</span>
                      <Badge variant="outline" size="sm" className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                      <Badge variant="outline" size="sm" className={getVerificationColor(user.verificationStatus)}>
                        {user.verificationStatus}
                      </Badge>
                      <Badge variant="outline" size="sm">
                        {user.role}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>{user.company}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{user.country}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Joined: {user.joinDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Last: {user.lastLogin}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="text-muted-foreground">Orders: </span>
                          <span className="font-medium">{user.totalOrders}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Revenue: </span>
                          <span className="font-medium">{user.totalRevenue}</span>
                        </div>
                        {user.rating > 0 && (
                          <div>
                            <span className="text-muted-foreground">Rating: </span>
                            <span className="font-medium">{user.rating}/5</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Risk Score:</span>
                        <Badge variant="outline" size="sm" className={getRiskColor(user.riskScore)}>
                          {user.riskScore}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">KYC:</span>
                        <Badge variant="outline" size="sm" className={getVerificationColor(user.kycStatus)}>
                          {user.kycStatus}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Docs:</span>
                        <Badge variant="outline" size="sm" className={getVerificationColor(user.documentsStatus)}>
                          {user.documentsStatus}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {user.status === "pending" && (
                    <div className="flex space-x-1">
                      <Button size="sm" className="text-xs">
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm" className="text-xs">
                        Reject
                      </Button>
                    </div>
                  )}
                  
                  {user.status === "active" && (
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" className="text-xs">
                        <Ban className="h-3 w-3 mr-1" />
                        Suspend
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 