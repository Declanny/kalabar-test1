"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BuyerDashboard() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/dashboard?role=buyer')
  }, [router])
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Redirecting to Buyer Dashboard...</h1>
        <p className="text-muted-foreground">Please wait while we load your buyer interface.</p>
      </div>
    </div>
  )
} 