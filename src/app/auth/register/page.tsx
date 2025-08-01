"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { 
  Eye, EyeOff, ArrowLeft, 
  Store, ShoppingCart, Check, X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/auth/AuthLayout"

export default function RegisterPage() {
  const [step, setStep] = useState(1) // 1: Choose type, 2: Form
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState<"supplier" | "buyer" | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    acceptTerms: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { register } = useAuth()



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      setIsLoading(false)
      return
    }

    if (!formData.acceptTerms) {
      setError("Please accept the terms and conditions")
      setIsLoading(false)
      return
    }
    
    try {
      await register({
        ...formData,
        userType
      })
      
      router.push(`/auth/verify-email?email=${encodeURIComponent(formData.email)}`)
      
    } catch (error) {
      console.error("Registration failed:", error)
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

    const handleGoogleRegister = () => {
    console.log("Register with Google")
  }

  const handleUserTypeSelect = (type: "supplier" | "buyer") => {
    setUserType(type)
    setStep(2)
  }

  const handleBackToStep1 = () => {
    setStep(1)
    setUserType(null)
    setError("")
  }

  if (step === 1) {
    // Step 1: Choose Account Type
    return (
      <AuthLayout>
        <div className="w-full max-w-md mx-auto">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Kalabah
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
        </div>
              <span className="text-2xl font-bold text-gray-900">Kalabah</span>
      </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Kalabah</h1>
            <p className="text-gray-600">Choose how you want to use our platform</p>
          </div>

          {/* Account Type Selection */}
          <div className="space-y-4 mb-8">
            <button
              type="button"
              onClick={() => handleUserTypeSelect("supplier")}
              className="w-full p-6 border border-gray-300 rounded-xl text-left transition-all hover:border-green-500 hover:bg-green-50 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Store className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">I'm a Supplier</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Sell products, export goods, and connect with buyers across Africa
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    ✓ Document verification required before listing products
                  </p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleUserTypeSelect("buyer")}
              className="w-full p-6 border border-gray-300 rounded-xl text-left transition-all hover:border-green-500 hover:bg-green-50 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
        </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">I'm a Buyer</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Source products, find suppliers, and manage procurement
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    ✓ Instant access to browse and contact suppliers
                  </p>
      </div>
    </div>
            </button>
      </div>

          {/* Sign in link */}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link 
                href="/auth/login" 
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </AuthLayout>
    )
  }

  // Step 2: Registration Form
  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        {/* Back Link */}
        <button
          onClick={handleBackToStep1}
          className="inline-flex items-center text-sm text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Change account type
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
        </div>
            <span className="text-2xl font-bold text-gray-900">Kalabah</span>
      </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">
            {userType === "supplier" ? "Start selling on Africa's leading marketplace" : "Start sourcing from verified suppliers"}
          </p>
        </div>

        {/* Google Register */}
        <div className="mb-6">
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
          >
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
      </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
      </div>
        </div>

        {/* Simple Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
          <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your.email@company.com"
          />
        </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              Company name
            </label>
          <Input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your Company Ltd"
          />
        </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
            required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Create password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
      </div>

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
              {error}
            </div>
          )}

          {/* Terms */}
          <div className="flex items-start">
          <input
              id="acceptTerms"
              name="acceptTerms"
            type="checkbox"
              required
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
          />
            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
            I agree to the{" "}
              <Link href="/terms" className="text-green-600 hover:text-green-500">
              Terms of Service
            </Link>{" "}
            and{" "}
              <Link href="/privacy" className="text-green-600 hover:text-green-500">
              Privacy Policy
            </Link>
          </label>
        </div>



                  <Button
                    type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl text-sm font-medium transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating account...
              </div>
            ) : (
              `Create ${userType} account`
            )}
          </Button>
            </form>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
              Already have an account?{" "}
            <Link 
              href="/auth/login" 
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign in
              </Link>
          </span>
            </div>
      </div>
    </AuthLayout>
  )
} 