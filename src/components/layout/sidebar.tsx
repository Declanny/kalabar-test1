"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  ShoppingCart, 
  Globe,
  FileText,
  CreditCard,
  Truck,
  Shield,
  HelpCircle,
  Menu,
  X,
  ChevronLeft,
  Wallet
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  className?: string
  userRole?: "supplier" | "buyer" | "seller" | "both" | "admin"
}

export function Sidebar({ className, userRole = "supplier" }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const supplierNavItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Products", href: "/dashboard/products", icon: Package },
    { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart, badge: "5" },
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: "12" },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Export Services", href: "/dashboard/export", icon: Globe },
    { label: "Documents", href: "/dashboard/documents", icon: FileText },
    { label: "Payments", href: "/dashboard/payments", icon: FileText },
    { label: "Shipping", href: "/dashboard/shipping", icon: Truck },
    { label: "Disputes", href: "/dashboard/disputes", icon: Shield, badge: "2" },
  ]

  const sellerNavItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "My Products", href: "/dashboard/products", icon: Package },
    { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart, badge: "3" },
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: "5" },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Shipping", href: "/dashboard/shipping", icon: Truck },
    { label: "Disputes", href: "/dashboard/disputes", icon: Shield, badge: "1" },
  ]

  const buyerNavItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Marketplace", href: "/marketplace", icon: Package },
    { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart, badge: "3" },
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: "8" },
    { label: "Quote Requests", href: "/dashboard/quote-request", icon: FileText },
    { label: "Suppliers", href: "/dashboard/suppliers", icon: Users },
    { label: "Trade Finance", href: "/dashboard/trade-finance", icon: FileText },
    { label: "Shipping", href: "/dashboard/shipping", icon: Truck },
    { label: "Disputes", href: "/dashboard/disputes", icon: Shield, badge: "1" },
  ]

  const bothNavItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Marketplace", href: "/marketplace", icon: Package },
    { label: "My Products", href: "/dashboard/products", icon: Package },
    { label: "Orders", href: "/dashboard/orders", icon: ShoppingCart, badge: "8" },
    { label: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { label: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: "15" },
    { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { label: "Suppliers", href: "/dashboard/suppliers", icon: Users },
    { label: "Trade Finance", href: "/dashboard/trade-finance", icon: CreditCard },
    { label: "Export Services", href: "/dashboard/export", icon: Globe },
    { label: "Documents", href: "/dashboard/documents", icon: FileText },
    { label: "Shipping", href: "/dashboard/shipping", icon: Truck },
    { label: "Disputes", href: "/dashboard/disputes", icon: Shield, badge: "3" },
  ]

  const adminNavItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { label: "Verification", href: "/admin/verification", icon: Shield, badge: "15" },
    { label: "Support", href: "/admin/support", icon: HelpCircle, badge: "7" },
  ]

  const getNavItems = () => {
    switch (userRole) {
      case "buyer":
        return buyerNavItems
      case "seller":
        return sellerNavItems
      case "both":
        return bothNavItems
      case "admin":
        return adminNavItems
      default:
        return supplierNavItems
    }
  }

  const bottomNavItems = [
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
    { label: "Help & Support", href: "/help", icon: HelpCircle },
  ]

  const navItems = getNavItems()

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col bg-card border-r border-border transition-all duration-300",
        "fixed inset-y-0 left-0 z-50 lg:static lg:z-auto", // Mobile: fixed, Desktop: static
        "lg:flex", // Always visible on desktop
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0", // Mobile toggle, desktop always visible
        isCollapsed ? "w-16" : "w-64", // Collapsed state
        "h-full", // Full height
        className
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-lg gradient-text">Kalabah</span>
            </div>
          )}
          
          <div className="flex items-center space-x-1">
            {/* Desktop Collapse Button */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden lg:flex"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
            </Button>
            
            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-2 p-4 overflow-y-auto overscroll-contain">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close mobile menu on click
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group",
                    isCollapsed ? "justify-center" : "space-x-3",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <Badge 
                          variant={isActive ? "secondary" : "default"} 
                          size="sm"
                          className={cn(
                            "text-xs flex-shrink-0",
                            isActive && "bg-primary-foreground/20 text-primary-foreground"
                          )}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                  {isCollapsed && item.badge && (
                    <div className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-border p-4 space-y-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isCollapsed ? "justify-center" : "space-x-3",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </Link>
            )
          })}
        </div>

        {/* User Role Indicator */}
        <div className="border-t border-border p-4">
          <div className={cn(
            "flex items-center",
            isCollapsed ? "justify-center" : "space-x-2"
          )}>
            <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></div>
            {!isCollapsed && (
              <span className="text-xs text-muted-foreground capitalize truncate">
                {userRole} Account
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  )
} 