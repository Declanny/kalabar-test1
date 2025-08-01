"use client"

import React, { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Mail, CheckCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"
import { AuthLayout } from "@/components/auth/AuthLayout"

function VerifyEmailContent() {
  const [code, setCode] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const { verifyEmail } = useAuth()
  const email = searchParams?.get('email') || ""

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      setCanResend(true)
    }
  }, [countdown, canResend])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return

    setIsVerifying(true)
    setError("")

    try {
      await verifyEmail(code)
      setSuccess(true)
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
      
    } catch {
      setError("Invalid verification code. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    setError("")

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setCountdown(60)
      setCanResend(false)
      
    } catch {
      setError("Failed to resend code. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  if (success) {
    return (
      <AuthLayout>
        <div className="w-full max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6 justify-center">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Kalabah</span>
            </div>
            
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Verified!</h1>
            <p className="text-gray-600">
              Your account has been successfully verified. Redirecting to dashboard...
            </p>
            
            <div className="mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        {/* Back Link */}
        <Link 
          href="/auth/register"
          className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Registration
          </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Kalabah</span>
        </div>

          <div className="text-center mb-6">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h1>
            <p className="text-gray-600 mb-2">
              We've sent a verification code to
            </p>
            <p className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                {email}
                </p>
              </div>
            </div>

        {/* Form */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Code
                </label>
                <Input
                  id="code"
              name="code"
                  type="text"
              required
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 text-center text-xl tracking-widest border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="000000"
                  maxLength={6}
                />
          </div>

                {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
              {error}
                  </div>
                )}

              <Button 
                type="submit" 
                disabled={isVerifying || code.length !== 6}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl text-sm font-medium transition-all disabled:opacity-50"
              >
                {isVerifying ? (
              <div className="flex items-center justify-center">
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Verifying...
              </div>
                ) : (
              "Verify Email"
                )}
              </Button>
            </form>

        {/* Resend Section */}
        <div className="mt-6 text-center space-y-4">
          <p className="text-sm text-gray-600">
            Didn't receive the code?
              </p>
              
              {canResend ? (
                <Button
                  variant="outline"
                  onClick={handleResendCode}
                  disabled={isResending}
              className="w-full border-gray-300 rounded-xl"
                >
                  {isResending ? (
                <div className="flex items-center justify-center">
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                </div>
                  ) : (
                    "Resend Code"
                  )}
                </Button>
              ) : (
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="text-sm text-gray-500">
                Resend available in <span className="font-medium text-green-600">{countdown}s</span>
              </p>
            </div>
          )}
          
          <p className="text-xs text-gray-500">
            Check your spam folder if you don't see the email
          </p>
        </div>

        {/* Help */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Need help? <Link href="/contact" className="text-green-600 hover:text-green-500 font-medium">Contact Support</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  )
} 