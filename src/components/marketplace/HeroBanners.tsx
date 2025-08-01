'use client'

import React from 'react'
import { ArrowRight, TrendingUp, Shield, Globe, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function HeroBanners() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        {/* Main Hero Banner */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative px-8 py-12 md:px-16 md:py-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300">
                      🌍 Africa's #1 B2B Platform
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      Connect with 
                      <span className="block text-yellow-300">15,000+ Verified Suppliers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-green-100 max-w-xl">
                      Source quality products from trusted African suppliers. From raw materials to finished goods, find everything your business needs.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/auth/register?type=buyer">
                      <Button size="xl" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold group">
                        Start Sourcing Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/suppliers">
                      <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        View All Suppliers
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">15K+</div>
                      <div className="text-sm text-green-100">Verified Suppliers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">45+</div>
                      <div className="text-sm text-green-100">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">500K+</div>
                      <div className="text-sm text-green-100">Products</div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-3xl"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold mb-4 text-white">Popular This Week</h3>
                      <div className="space-y-3">
                        {[
                          { name: "LED Street Lights", trend: "+23%" },
                          { name: "Industrial Pumps", trend: "+18%" },
                          { name: "Cotton Fabric", trend: "+15%" },
                          { name: "Cocoa Beans", trend: "+12%" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-green-100">{item.name}</span>
                            <Badge className="bg-green-500 text-white">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {item.trend}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Banners Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Trust & Security Banner */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Trade Assurance</h3>
                <p className="text-sm text-gray-600">100% Secure</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Your orders are protected with our comprehensive trade assurance program.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Learn More
            </Button>
          </div>

          {/* Global Reach Banner */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Global Shipping</h3>
                <p className="text-sm text-gray-600">Worldwide Delivery</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Ship to 190+ countries with our integrated logistics partners.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Routes
            </Button>
          </div>

          {/* Quick Response Banner */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Quick Response</h3>
                <p className="text-sm text-gray-600">&lt; 24 Hours</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Get quotes from suppliers within 24 hours. Fast, reliable, efficient.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 