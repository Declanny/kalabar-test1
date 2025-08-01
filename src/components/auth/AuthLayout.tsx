"use client"

import React from "react"
import { AuthPromoSlideshow } from "./AuthPromoSlideshow"

interface AuthLayoutProps {
  children: React.ReactNode
  enableScroll?: boolean
}

export function AuthLayout({ children, enableScroll = false }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Dynamic Content (forms) */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {enableScroll ? (
          <div className="flex-1 overflow-y-auto">
            <div className="min-h-full flex flex-col justify-center px-6 sm:px-12 py-8">
              {children}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center px-6 sm:px-12">
            {children}
          </div>
        )}
      </div>

      {/* Right Side - Static Promotional Slideshow */}
      <AuthPromoSlideshow className="hidden lg:block lg:w-1/2 h-screen" />
    </div>
  )
} 