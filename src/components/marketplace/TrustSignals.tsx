'use client'

import React from 'react'
import { Shield, Award, Truck, CreditCard, Users, CheckCircle, Star, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function TrustSignals() {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Trade Assurance",
      subtitle: "100% Protection",
      description: "Your orders protected up to $500,000",
      color: "bg-blue-50 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Award,
      title: "Verified Suppliers",
      subtitle: "Premium Quality",
      description: "All suppliers verified with certificates",
      color: "bg-green-50 text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: Truck,
      title: "Global Logistics",
      subtitle: "Worldwide Shipping",
      description: "Ship to 190+ countries reliably",
      color: "bg-orange-50 text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      subtitle: "Multiple Options",
      description: "Safe payment with escrow protection",
      color: "bg-purple-50 text-purple-600",
      borderColor: "border-purple-200"
    }
  ]

  const stats = [
    { icon: Users, value: "15,000+", label: "Verified Suppliers", growth: "+25%" },
    { icon: CheckCircle, value: "500,000+", label: "Products", growth: "+18%" },
    { icon: Globe, value: "45+", label: "Countries", growth: "+12%" },
    { icon: Star, value: "4.8/5", label: "Customer Rating", growth: "↑0.2" }
  ]

  const certifications = [
    { name: "ISO 9001", description: "Quality Management" },
    { name: "ISO 14001", description: "Environmental" },
    { name: "OHSAS 18001", description: "Safety Standards" },
    { name: "CE Marking", description: "European Conformity" }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Trust Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kalabah?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted B2B marketplace with comprehensive protection and verified quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className={`border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {feature.subtitle}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Businesses Worldwide
            </h3>
            <p className="text-gray-600">Growing every day with our community of suppliers and buyers</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {stat.growth}
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            International Standards & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg px-6 py-4 text-center">
                <div className="font-semibold text-gray-900 mb-1">
                  {cert.name}
                </div>
                <div className="text-sm text-gray-600">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 