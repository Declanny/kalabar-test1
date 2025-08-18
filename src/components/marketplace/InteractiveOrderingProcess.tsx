'use client'

import { useState } from 'react'

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  imageText: string
}

const steps: Step[] = [
  {
    id: 1,
    title: "Search for matches",
    description: "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    ),
    imageText: "🔍 Discover millions of products"
  },
  {
    id: 2,
    title: "Identify the right one",
    description: "Compare options, read reviews, and analyze specifications to make the perfect choice for your requirements.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    imageText: "✨ Smart comparison tools"
  },
  {
    id: 3,
    title: "Pay with confidence",
    description: "Secure payment processing with buyer protection and multiple payment options for your peace of mind.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
    ),
    imageText: "💳 Secure transactions"
  },
  {
    id: 5,
    title: "Manage with ease",
    description: "Streamlined order management dashboard with analytics, reporting, and customer support tools.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
      </svg>
    ),
    imageText: "📊 Complete control"
  }
]

export default function InteractiveOrderingProcess() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight text-center lg:text-left">
            Transform Your B2B Sourcing Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl leading-relaxed text-center lg:text-left">
            Discover millions of products, connect with verified suppliers, and streamline your entire procurement process from search to fulfillment - all in one powerful platform.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
            {/* Steps Section */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`step-item relative cursor-pointer transition-all duration-200 ${
                    activeStep === step.id ? 'active' : ''
                  }`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-200">
                    {/* Step Icon */}
                    <div className={`step-icon w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-4 sm:mr-8 flex-shrink-0 border-2 transition-all duration-200 ${
                      activeStep === step.id
                        ? 'bg-[#00C298] border-[#00C298] text-white'
                        : 'bg-white/10 border-white/30 text-white backdrop-blur-sm'
                    }`}>
                      <div className="w-6 h-6 sm:w-7 sm:h-7">
                        {step.icon}
                      </div>
                    </div>
                   
                   {/* Step Content */}
                   <div className="flex-1">
                     <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 transition-colors duration-200 ${
                       activeStep === step.id ? 'text-[#00C298]' : 'text-white'
                     }`}>
                       {step.title}
                     </h3>
                     <p className={`text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed transition-all duration-200 ${
                       activeStep === step.id ? 'block opacity-100' : 'hidden opacity-0'
                     }`}>
                       {step.description}
                     </p>
                   </div>
                 </div>
                 
                 {/* Connecting Line - Centered */}
                 {index < steps.length - 1 && (
                   <div className={`absolute left-7 sm:left-12 top-16 sm:top-20 w-0.5 bg-gray-400 z-0 transition-all duration-300 ${
                     activeStep === step.id ? 'h-auto min-h-[3rem]' : 'h-8'
                   }`}></div>
                 )}
              </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] mt-8 lg:mt-0 hidden lg:block">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={
                      step.id === 1 
                        ? "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg"
                        : step.id === 2
                        ? "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg"
                        : step.id === 3
                        ? "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg"
                        : step.id === 5
                        ? "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg"
                        : "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg"
                    }
                    alt={`${step.title} - B2B Marketplace`}
                    className="w-4/5 h-4/5 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}