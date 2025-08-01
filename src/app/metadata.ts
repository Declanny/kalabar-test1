import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Kalabah - Africa's Export Engine",
  description: "B2B marketplace connecting African suppliers to global markets",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kalabah"
  },
  openGraph: {
    title: "Kalabah - Africa's Export Engine",
    description: "B2B marketplace connecting African suppliers to global markets",
    type: "website",
    locale: "en_US"
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#eab308"
} 