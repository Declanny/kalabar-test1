"use client"

import React from "react"
import Link from "next/link"
import { Play, CheckCircle, ArrowRight, Users, Globe, Package, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/layout/header"

export default function DemoPage() {
  const features = [
    {
      icon: Package,
      title: "Product Management",
      description: "Easily manage your product catalog with international standards"
    },
    {
      icon: Users,
      title: "Buyer Connections", 
      description: "Connect with verified international buyers worldwide"
    },
    {
      icon: Globe,
      title: "Export Services",
      description: "Complete export documentation and logistics support"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your performance with detailed business insights"
    }
  ]

  const benefits = [
    "Reach global markets faster",
    "Verified buyer network",
    "Export documentation support",
    "Secure payment processing",
    "Real-time order tracking",
    "24/7 customer support"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="heading-lg">See Kalabah in Action</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how African suppliers are transforming their businesses with our export platform
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card variant="elevated" className="overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="xl" className="rounded-full h-20 w-20 p-0">
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                5:42 - Platform Overview
              </div>
            </div>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="heading-md text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} variant="elevated" interactive="hover">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-md mb-6">Why Choose Kalabah?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="body-md">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Success Story</CardTitle>
              <CardDescription>AgroExport Nigeria Ltd</CardDescription>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic mb-4">
                &quot;Kalabah helped us increase our export revenue by 300% in just 6 months. 
                The platform connected us with buyers we never could have reached before.&quot;
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold">AE</span>
                </div>
                <div>
                  <div className="font-medium">Adebayo Ogundimu</div>
                  <div className="text-sm text-muted-foreground">CEO, AgroExport Nigeria</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card variant="gradient" className="text-center p-12">
          <h2 className="heading-md text-white mb-4">Ready to Get Started?</h2>
          <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of African suppliers who are already expanding their businesses globally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Schedule Personal Demo
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
} 