'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/layout/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Here you would typically send the data to your API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
              <p className="text-gray-600">
                Have questions about our B2B marketplace? We're here to help you connect with African suppliers and buyers.
          </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Mail className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm">Our team will respond within 24 hours</p>
                    <a href="mailto:support@kalabah.com" className="text-sm mt-1 inline-block" style={{color: 'rgba(46, 125, 50, 1)'}}>
                      support@kalabah.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Phone className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">Mon-Fri from 8am to 5pm (WAT)</p>
                    <a href="tel:+2348000000000" className="text-sm mt-1 inline-block" style={{color: 'rgba(46, 125, 50, 1)'}}>
                      +234 800 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <MapPin className="w-5 h-5" style={{color: 'rgba(46, 125, 50, 1)'}} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
                    <p className="text-sm mt-1">Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/blog" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Read Our Blog
                  </Link>
                  <Link href="/waiting-list" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Join Waiting List
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Type your message here..."
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-green-50 text-green-800">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-800">
                    Failed to send message. Please try again.
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full text-white"
                  style={{backgroundColor: 'rgba(46, 125, 50, 1)'}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
                </div>
          </div>
        </div>
      </main>
    </>
  )
} 