'use client'

import React from 'react'
import { ArrowRight, Users, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CleanHeroBanner() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Africa's Leading
              <span className="block" style={{color: 'var(--primary)'}}>B2B Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with verified suppliers across Africa. Source quality products for your business needs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register?type=buyer">
              <Button size="lg" style={{backgroundColor: 'var(--primary)'}} className="text-white">
                Find Suppliers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/register?type=seller">
              <Button size="lg" variant="outline" className="border-gray-300">
                Become a Supplier
              </Button>
            </Link>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: 'var(--primary)'}}>15K+</div>
              <div className="text-sm text-gray-600">Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: 'var(--primary)'}}>45+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: 'var(--primary)'}}>500K+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 