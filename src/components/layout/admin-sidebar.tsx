"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Users, Settings, HelpCircle, Shield, 
  BarChart3, Package, MessageSquare, CreditCard,
  AlertTriangle, UserCheck, FileText, Globe
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AdminSidebar() {
  const pathname = usePathname()

  const adminNavItems = [
    {
      name: "Overview",
      href: "/admin",
      icon: BarChart3,
      description: "Dashboard overview"
    },
    {
      name: "User Management",
      href: "/admin/users",
      icon: Users,
      description: "Manage all users",
      badge: "1,245"
    },
    {
      name: "Supplier Verification",
      href: "/admin/verification",
      icon: UserCheck,
      description: "Verify suppliers",
      badge: "23"
    },
    {
      name: "Product Moderation",
      href: "/admin/products",
      icon: Package,
      description: "Review products",
      badge: "45"
    },
    {
      name: "Content Moderation",
      href: "/admin/content",
      icon: MessageSquare,
      description: "Moderate content",
      badge: "12"
    },
    {
      name: "Trade Documentation",
      href: "/admin/documentation",
      icon: FileText,
      description: "Manage trade docs"
    },
    {
      name: "Payments & Transactions",
      href: "/admin/payments",
      icon: CreditCard,
      description: "Monitor payments"
    },
    {
      name: "Platform Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      description: "Advanced analytics"
    },
    {
      name: "Security & Fraud",
      href: "/admin/security",
      icon: Shield,
      description: "Security monitoring",
      badge: "5"
    },
    {
      name: "Compliance",
      href: "/admin/compliance",
      icon: AlertTriangle,
      description: "Regulatory compliance"
    },
    {
      name: "Multi-Country Settings",
      href: "/admin/countries",
      icon: Globe,
      description: "Country configurations"
    }
  ]

  const bottomNavItems = [
    {
      name: "Admin Settings",
      href: "/admin/settings",
      icon: Settings,
      description: "System settings"
    },
    {
      name: "Help & Support",
      href: "/admin/help",
      icon: HelpCircle,
      description: "Admin documentation"
    }
  ]

  const NavItem = ({ item, isActive }: { item: {href: string, icon: any, label: string}, isActive: boolean }) => (
    <Link
      href={item.href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 group ${
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      <item.icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"}`} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{item.name}</div>
        <div className={`text-xs truncate ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/70"}`}>
          {item.description}
        </div>
      </div>
      {item.badge && (
        <Badge variant={isActive ? "secondary" : "outline"} size="sm">
          {item.badge}
        </Badge>
      )}
    </Link>
  )

  return (
    <div className="w-80 bg-card border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="p-6">
        {/* Admin Role Indicator */}
        <div className="mb-6 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Super Admin</div>
              <div className="text-xs text-muted-foreground">Full Platform Access</div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1 mb-8">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Platform Management
          </div>
          {adminNavItems.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="space-y-1 border-t pt-4">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Administration
          </div>
          {bottomNavItems.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        {/* Platform Status */}
        <div className="mt-6 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs font-semibold mb-2">Platform Status</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Uptime</span>
              <span className="text-green-600 font-medium">99.9%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Active Users</span>
              <span className="font-medium">1,245</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Pending Tasks</span>
              <span className="text-orange-600 font-medium">85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 