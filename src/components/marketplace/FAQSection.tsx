'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, MessageCircle, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FAQItem {
  id: number
  question: string
  answer: string
  isExpanded: boolean
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Kalabah and how does it work?",
    answer: "Kalabah is a B2B marketplace connecting local Nigerian businesses with global and regional buyers. Vendors can list products in bulk while buyers can discover authentic, high-quality goods and negotiate pricing.",
    isExpanded: true
  },
  {
    id: 2,
    question: "Who can join Kalabah now?",
    answer: "Currently, we're accepting applications from verified Nigerian suppliers and manufacturers. Buyers can join our waitlist to be notified when the platform launches.",
    isExpanded: false
  },
  {
    id: 3,
    question: "Is Kalabah live yet?",
    answer: "We're currently in the final stages of development and supplier onboarding. The platform will be live soon - join our waitlist to be notified!",
    isExpanded: false
  },
  {
    id: 4,
    question: "What industries do you specialize in?",
    answer: "We focus on key Nigerian export industries including agriculture, textiles, manufacturing, beauty & skincare, electronics, furniture, and more.",
    isExpanded: false
  },
  {
    id: 5,
    question: "What types of products will be available?",
    answer: "You'll find a wide range of products from fresh produce and packaged foods to fashion, electronics, furniture, and local spices - all from verified Nigerian suppliers.",
    isExpanded: false
  }
]

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>(faqData)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const toggleFAQ = (id: number) => {
    setFaqs(prev => prev.map(faq => 
      faq.id === id 
        ? { ...faq, isExpanded: !faq.isExpanded }
        : { ...faq, isExpanded: false }
    ))
  }

  const totalPages = Math.ceil(faqs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentFaqs = faqs.slice(startIndex, endIndex)

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Frequently Ask Questions
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section - FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {currentFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <div 
                  className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4 flex-1 leading-tight">
                      {faq.question}
                    </h3>
                    
                    <div className="flex-shrink-0 mt-0.5">
                      {faq.isExpanded ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </div>
                  
                  {faq.isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-base text-gray-600 leading-relaxed">
                        → {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <span className="text-gray-400">...</span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section - Contact CTA */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-[457px] flex flex-col justify-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Image 
                src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1754413108/Vector_355_h8djwl.png"
                alt="Contact icon"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-3 text-center">
              Do you have more questions?
            </h3>

            {/* Description */}
            <p className="text-base text-black mb-4 text-center">
              Either on Supply, Purchase, Fulfilment, Payment or Partnership.
            </p>

            {/* Contact Info */}
            <div className="mb-6 text-center">
              <p className="text-base text-black mb-1">
                Contact us on:
              </p>
              <p className="text-base text-black underline">
                support@kalabah.com
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-[rgba(46,125,50,1)] hover:bg-[rgba(46,125,50,0.9)] text-white px-6 py-8 font-medium w-full rounded-none"
              onClick={() => window.location.href = '/waiting-list'}
            >
              Join Wait List
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}