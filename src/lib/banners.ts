export interface BannerSlide {
  id: number
  title: string
  subtitle: string
  ctaText: string
  bgColor: string
  textColor: string
  image: string
}

export const advertisingBannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "New B2B Solutions",
    subtitle: "Discover the latest sourcing opportunities across Africa",
    ctaText: "Explore Now",
    bgColor: "bg-gradient-to-br from-blue-100 to-indigo-200",
    textColor: "text-gray-800",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg"
  },
  {
    id: 2,
    title: "Premium Agricultural Products",
    subtitle: "Connect with verified suppliers for quality produce",
    ctaText: "Shop Products",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-200",
    textColor: "text-gray-800",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif"
  },
  {
    id: 3,
    title: "Herbal & Natural Products",
    subtitle: "Source authentic African herbs and natural extracts",
    ctaText: "View Catalog",
    bgColor: "bg-gradient-to-br from-orange-100 to-red-200",
    textColor: "text-gray-800",
    image: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif"
  }
]

export interface StandardBannerData {
  title: string
  subtitle: string
  ctaText: string
  imageUrl: string
}

export const standardBanners: Record<string, StandardBannerData> = {
  suppliers: {
    title: "Connect with African Suppliers",
    subtitle: "Discover quality products from verified suppliers across Africa",
    ctaText: "Explore Now",
    imageUrl: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1755099906/Screenshot_2025-08-13_at_4.42.37_PM_glrzka.png"
  },
  // Add more standard banners here as needed
  // products: {
  //   title: "Premium Products",
  //   subtitle: "Find the best products from Africa",
  //   ctaText: "Shop Now",
  //   imageUrl: "https://example.com/image.jpg"
  // }
} 