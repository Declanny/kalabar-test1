"use client"

import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import BuyerDashboard from "@/components/dashboard/buyer-dashboard"
import SupplierDashboard from "@/components/dashboard/supplier-dashboard"
import SellerDashboard from "@/components/dashboard/seller-dashboard"
import BothDashboard from "@/components/dashboard/both-dashboard"

function DashboardContent() {
  const searchParams = useSearchParams()
  const userRole = searchParams.get('role') === 'buyer' ? 'buyer' : 
                   searchParams.get('role') === 'seller' ? 'seller' : 
                   searchParams.get('role') === 'both' ? 'both' :
                   'supplier'

  if (userRole === 'buyer') {
    return <BuyerDashboard />
  }

  if (userRole === 'seller') {
    return <SellerDashboard />
  }

  if (userRole === 'both') {
    return <BothDashboard />
  }

  return <SupplierDashboard />
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
} 