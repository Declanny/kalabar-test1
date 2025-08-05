'use client'

import React from 'react'
import { B2BProductCard } from './B2BProductCard'

interface B2BProduct {
  id: string
  name: string
  image: string
  price: string
  moq: string
  salesCount: string
  supplier: {
    name: string
    years: string
    country: string
    countryCode: string
  }
  deliveryEstimate: string
  marketplaceUrl: string
  hasZoom?: boolean
}

// Sample B2B products data
const sampleProducts: B2BProduct[] = [
  {
    id: '1',
    name: 'Premium Raw Cocoa Beans - Organic Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    price: '£22.50',
    moq: 'MOQ: 100 kg',
    salesCount: '2.1k sold',
    supplier: {
      name: 'West Africa Exports',
      years: '8 yrs',
      country: 'Ghana',
      countryCode: 'GH'
    },
    deliveryEstimate: 'Est. delivery by 5 Sep',
    marketplaceUrl: 'https://alibaba.com/product/cocoa-beans',
    hasZoom: true
  },
  {
    id: '2',
    name: 'Premium Aba Fabrics - Nigerian Traditional Textiles',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    price: '£28.90',
    moq: 'MOQ: 100 yards',
    salesCount: '1.3k sold',
    supplier: {
      name: 'Aba Textile Mills',
      years: '15 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 6 Sep',
    marketplaceUrl: 'https://alibaba.com/product/aba-fabrics',
    hasZoom: true
  },
  {
    id: '3',
    name: 'Moringa Oleifera Seeds - Raw Herbal Extract Wholesale',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    price: '£45.00',
    moq: 'MOQ: 15 kg',
    salesCount: '1.1k sold',
    supplier: {
      name: 'Herbal Wellness Co',
      years: '7 yrs',
      country: 'India',
      countryCode: 'IN'
    },
    deliveryEstimate: 'Est. delivery by 9 Sep',
    marketplaceUrl: 'https://alibaba.com/product/moringa-seeds',
    hasZoom: true
  },
  {
    id: '4',
    name: 'Premium Nigerian Cola Nut (Kola) - Fresh Green Export Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg',
    price: '£18.75',
    moq: 'MOQ: 25 kg',
    salesCount: '892 sold',
    supplier: {
      name: 'West Africa Exports',
      years: '8 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 3 Sep',
    marketplaceUrl: 'https://alibaba.com/product/cola-nut',
    hasZoom: true
  },
  {
    id: '5',
    name: 'Premium Whole Cloves Spices - Medicinal Grade Export',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    price: '£32.50',
    moq: 'MOQ: 20 kg',
    salesCount: '967 sold',
    supplier: {
      name: 'Spice Exporters Ltd',
      years: '10 yrs',
      country: 'Madagascar',
      countryCode: 'MG'
    },
    deliveryEstimate: 'Est. delivery by 8 Sep',
    marketplaceUrl: 'https://alibaba.com/product/cloves-spices',
    hasZoom: true
  },
  {
    id: '6',
    name: 'Premium Bitter Cola (Garcinia kola) - Fresh Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/Best-Selling-Cocoa-Beans-for-Salew-wholesale-Cheap-Cocoa-Beans-Available-Chocolate-Beans-for-Export-Sales_qduagx.avif',
    price: '£12.50',
    moq: 'MOQ: 50 kg',
    salesCount: '1.2k sold',
    supplier: {
      name: 'West Africa Exports',
      years: '8 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 2 Sep',
    marketplaceUrl: 'https://alibaba.com/product/bitter-cola',
    hasZoom: true
  },
  {
    id: '7',
    name: 'Traditional African Craft & Souvenir Collection',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    price: '£35.00',
    moq: 'MOQ: 10 pieces',
    salesCount: '528 sold',
    supplier: {
      name: 'African Heritage Crafts',
      years: '12 yrs',
      country: 'Kenya',
      countryCode: 'KE'
    },
    deliveryEstimate: 'Est. delivery by 7 Sep',
    marketplaceUrl: 'https://alibaba.com/product/african-crafts',
    hasZoom: true
  },
  {
    id: '8',
    name: 'Fresh Cola Nuts - Premium Grade African Export',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg',
    price: '£19.25',
    moq: 'MOQ: 40 kg',
    salesCount: '943 sold',
    supplier: {
      name: 'West Africa Exports',
      years: '8 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 3 Sep',
    marketplaceUrl: 'https://alibaba.com/product/fresh-cola-nuts',
    hasZoom: true
  },
  {
    id: '9',
    name: 'Premium Dried Bitter Kola Nuts - Natural African Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif',
    price: '£15.80',
    moq: 'MOQ: 30 kg',
    salesCount: '756 sold',
    supplier: {
      name: 'African Natural Products',
      years: '6 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 4 Sep',
    marketplaceUrl: 'https://alibaba.com/product/dried-bitter-kola',
    hasZoom: true
  },
  {
    id: '10',
    name: 'Industrial LED Lighting Systems High Efficiency 150W',
    image: '💡',
    price: '£42.50',
    moq: 'MOQ: 10 pieces',
    salesCount: '1.2k sold',
    supplier: {
      name: 'LED Solutions',
      years: '5 yrs',
      country: 'China',
      countryCode: 'CN'
    },
    deliveryEstimate: 'Est. delivery by 25 Aug',
    marketplaceUrl: 'https://alibaba.com/product/led-lighting',
    hasZoom: true
  },
  {
    id: '11',
    name: 'Wholesale Quick-Drying Windproof and Waterproof Bucket Hat',
    image: '🧢',
    price: '£4.42',
    moq: 'MOQ: 2 pieces',
    salesCount: '566 sold',
    supplier: {
      name: 'Fashion Co',
      years: '3 yrs',
      country: 'China',
      countryCode: 'CN'
    },
    deliveryEstimate: 'Est. delivery by 28 Aug',
    marketplaceUrl: 'https://alibaba.com/product/bucket-hat',
    hasZoom: true
  },
  {
    id: '12',
    name: 'Textile Machinery Sewing Machine Industrial Grade',
    image: '🧵',
    price: '£1,250.00',
    moq: 'MOQ: 1 unit',
    salesCount: '156 sold',
    supplier: {
      name: 'Machinery Works',
      years: '20 yrs',
      country: 'Germany',
      countryCode: 'DE'
    },
    deliveryEstimate: 'Est. delivery by 15 Sep',
    marketplaceUrl: 'https://alibaba.com/product/sewing-machine',
    hasZoom: true
  },
  // Row 3 (Products 13-18)
  {
    id: '13',
    name: 'Organic Shea Butter - Raw Unrefined Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    price: '£38.50',
    moq: 'MOQ: 25 kg',
    salesCount: '1.5k sold',
    supplier: {
      name: 'African Beauty Products',
      years: '9 yrs',
      country: 'Burkina Faso',
      countryCode: 'BF'
    },
    deliveryEstimate: 'Est. delivery by 6 Sep',
    marketplaceUrl: 'https://alibaba.com/product/shea-butter',
    hasZoom: true
  },
  {
    id: '14',
    name: 'Premium Cashew Nuts - Raw Whole Export Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    price: '£52.00',
    moq: 'MOQ: 50 kg',
    salesCount: '2.3k sold',
    supplier: {
      name: 'West Africa Nuts',
      years: '12 yrs',
      country: 'Ivory Coast',
      countryCode: 'CI'
    },
    deliveryEstimate: 'Est. delivery by 4 Sep',
    marketplaceUrl: 'https://alibaba.com/product/cashew-nuts',
    hasZoom: true
  },
  {
    id: '15',
    name: 'Traditional African Honey - Pure Wildflower Export',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    price: '£28.75',
    moq: 'MOQ: 20 kg',
    salesCount: '847 sold',
    supplier: {
      name: 'Honey Harvest Co',
      years: '6 yrs',
      country: 'Tanzania',
      countryCode: 'TZ'
    },
    deliveryEstimate: 'Est. delivery by 8 Sep',
    marketplaceUrl: 'https://alibaba.com/product/african-honey',
    hasZoom: true
  },
  {
    id: '16',
    name: 'Ethiopian Coffee Beans - Premium Arabica Export',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg',
    price: '£45.30',
    moq: 'MOQ: 30 kg',
    salesCount: '1.8k sold',
    supplier: {
      name: 'Ethiopian Coffee Co',
      years: '15 yrs',
      country: 'Ethiopia',
      countryCode: 'ET'
    },
    deliveryEstimate: 'Est. delivery by 5 Sep',
    marketplaceUrl: 'https://alibaba.com/product/ethiopian-coffee',
    hasZoom: true
  },
  {
    id: '17',
    name: 'Ginger Root - Fresh Organic Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    price: '£24.80',
    moq: 'MOQ: 40 kg',
    salesCount: '1.1k sold',
    supplier: {
      name: 'Spice Valley Exports',
      years: '8 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 7 Sep',
    marketplaceUrl: 'https://alibaba.com/product/ginger-root',
    hasZoom: true
  },
  {
    id: '18',
    name: 'African Black Soap - Natural Handmade Export',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/Best-Selling-Cocoa-Beans-for-Salew-wholesale-Cheap-Cocoa-Beans-Available-Chocolate-Beans-for-Export-Sales_qduagx.avif',
    price: '£16.50',
    moq: 'MOQ: 100 pieces',
    salesCount: '923 sold',
    supplier: {
      name: 'Natural Beauty Ghana',
      years: '7 yrs',
      country: 'Ghana',
      countryCode: 'GH'
    },
    deliveryEstimate: 'Est. delivery by 9 Sep',
    marketplaceUrl: 'https://alibaba.com/product/african-black-soap',
    hasZoom: true
  },
  // Row 4 (Products 19-24)
  {
    id: '19',
    name: 'Palm Oil - Extra Virgin Red Export Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604888/traditional-african-souvenir-and-craft-items-for-sale-at-flee-market-MT842D_u2lngt.jpg',
    price: '£32.90',
    moq: 'MOQ: 200 liters',
    salesCount: '1.6k sold',
    supplier: {
      name: 'Palm Oil Industries',
      years: '11 yrs',
      country: 'Malaysia',
      countryCode: 'MY'
    },
    deliveryEstimate: 'Est. delivery by 12 Sep',
    marketplaceUrl: 'https://alibaba.com/product/palm-oil',
    hasZoom: true
  },
  {
    id: '20',
    name: 'Sesame Seeds - Hulled White Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/0755a089-6ca4-4900-92be-11d318d282bf_txefrr.jpg',
    price: '£41.25',
    moq: 'MOQ: 100 kg',
    salesCount: '1.4k sold',
    supplier: {
      name: 'Sudan Sesame Co',
      years: '13 yrs',
      country: 'Sudan',
      countryCode: 'SD'
    },
    deliveryEstimate: 'Est. delivery by 10 Sep',
    marketplaceUrl: 'https://alibaba.com/product/sesame-seeds',
    hasZoom: true
  },
  {
    id: '21',
    name: 'Hibiscus Flower - Dried Export Grade Tea',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604885/African-Natural-Fresh-Dried-Bitter-Kola-Bitter-Kola-Nuts-for-Sale.jpg_300x300_iqjwvc.avif',
    price: '£19.60',
    moq: 'MOQ: 25 kg',
    salesCount: '678 sold',
    supplier: {
      name: 'Herbal Tea Exports',
      years: '5 yrs',
      country: 'Egypt',
      countryCode: 'EG'
    },
    deliveryEstimate: 'Est. delivery by 6 Sep',
    marketplaceUrl: 'https://alibaba.com/product/hibiscus-flower',
    hasZoom: true
  },
  {
    id: '22',
    name: 'Plantain Chips - Crispy Natural Export Snacks',
    image: '🍌',
    price: '£8.90',
    moq: 'MOQ: 500 packs',
    salesCount: '1.2k sold',
    supplier: {
      name: 'Tropical Snacks Ltd',
      years: '4 yrs',
      country: 'Ghana',
      countryCode: 'GH'
    },
    deliveryEstimate: 'Est. delivery by 5 Sep',
    marketplaceUrl: 'https://alibaba.com/product/plantain-chips',
    hasZoom: true
  },
  {
    id: '23',
    name: 'Baobab Powder - Superfood Export Quality',
    image: '🌳',
    price: '£65.00',
    moq: 'MOQ: 10 kg',
    salesCount: '445 sold',
    supplier: {
      name: 'Superfood Africa',
      years: '6 yrs',
      country: 'Senegal',
      countryCode: 'SN'
    },
    deliveryEstimate: 'Est. delivery by 11 Sep',
    marketplaceUrl: 'https://alibaba.com/product/baobab-powder',
    hasZoom: true
  },
  {
    id: '24',
    name: 'Cassava Flour - Gluten-Free Export Grade',
    image: '🥔',
    price: '£12.30',
    moq: 'MOQ: 100 kg',
    salesCount: '834 sold',
    supplier: {
      name: 'Cassava Processing Co',
      years: '7 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 4 Sep',
    marketplaceUrl: 'https://alibaba.com/product/cassava-flour',
    hasZoom: true
  },
  // Row 5 (Products 25-30)
  {
    id: '25',
    name: 'Argan Oil - Pure Moroccan Export Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604887/images_1_ocivfd.jpg',
    price: '£85.50',
    moq: 'MOQ: 5 liters',
    salesCount: '567 sold',
    supplier: {
      name: 'Moroccan Argan Co',
      years: '10 yrs',
      country: 'Morocco',
      countryCode: 'MA'
    },
    deliveryEstimate: 'Est. delivery by 8 Sep',
    marketplaceUrl: 'https://alibaba.com/product/argan-oil',
    hasZoom: true
  },
  {
    id: '26',
    name: 'Tiger Nuts - Premium Dried Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605557/H92a4e6ba6bdc45a18078ef8db4de4eecG_ppdwad.avif',
    price: '£36.75',
    moq: 'MOQ: 50 kg',
    salesCount: '789 sold',
    supplier: {
      name: 'African Nuts Export',
      years: '8 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 6 Sep',
    marketplaceUrl: 'https://alibaba.com/product/tiger-nuts',
    hasZoom: true
  },
  {
    id: '27',
    name: 'Dried Fish - Smoked Export Grade Protein',
    image: '🐟',
    price: '£48.20',
    moq: 'MOQ: 25 kg',
    salesCount: '623 sold',
    supplier: {
      name: 'Coastal Fish Co',
      years: '12 yrs',
      country: 'Senegal',
      countryCode: 'SN'
    },
    deliveryEstimate: 'Est. delivery by 14 Sep',
    marketplaceUrl: 'https://alibaba.com/product/dried-fish',
    hasZoom: true
  },
  {
    id: '28',
    name: 'Kente Cloth - Authentic Ghanaian Export Textile',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605535/Moring-Oleifera-Moring-Seeds-Raw-Herbs-Wholesale-Plant-Extract-at-Best-Price-Available-for-Sale.jpg_300x300_cwuw8u.avif',
    price: '£125.00',
    moq: 'MOQ: 5 pieces',
    salesCount: '234 sold',
    supplier: {
      name: 'Kente Weavers Guild',
      years: '18 yrs',
      country: 'Ghana',
      countryCode: 'GH'
    },
    deliveryEstimate: 'Est. delivery by 16 Sep',
    marketplaceUrl: 'https://alibaba.com/product/kente-cloth',
    hasZoom: true
  },
  {
    id: '29',
    name: 'Yam Flour - Premium Export Quality',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753604886/green-cola_ug4qyn.jpg',
    price: '£15.80',
    moq: 'MOQ: 100 kg',
    salesCount: '956 sold',
    supplier: {
      name: 'Tuber Processing Ltd',
      years: '9 yrs',
      country: 'Nigeria',
      countryCode: 'NG'
    },
    deliveryEstimate: 'Est. delivery by 7 Sep',
    marketplaceUrl: 'https://alibaba.com/product/yam-flour',
    hasZoom: true
  },
  {
    id: '30',
    name: 'Frankincense Resin - Pure Boswellia Export Grade',
    image: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1753605547/FREE-SAMPLE-Competitive-Price-Selected-Cloves-Spices-Herbs-Products-Clove-Raw-Material-Medicinal-Plant-Dry-Bud-Clove-Herb_mtplt8.avif',
    price: '£95.40',
    moq: 'MOQ: 5 kg',
    salesCount: '312 sold',
    supplier: {
      name: 'Arabian Incense Co',
      years: '14 yrs',
      country: 'Somalia',
      countryCode: 'SO'
    },
    deliveryEstimate: 'Est. delivery by 18 Sep',
    marketplaceUrl: 'https://alibaba.com/product/frankincense',
    hasZoom: true
  }
]

interface B2BProductGridProps {
  products?: B2BProduct[]
  onContactSupplier?: (product: B2BProduct) => void
  title?: string
  showTitle?: boolean
}

export function B2BProductGrid({ 
  products = sampleProducts, 
  onContactSupplier, 
  title = "Product Listings",
  showTitle = true 
}: B2BProductGridProps) {
  return (
    <div className="py-8 bg-white">
      <div className="w-full px-10">
        {showTitle && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-600">
              {products.length.toLocaleString()} products found
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <B2BProductCard
              key={product.id}
              product={product}
              onContactSupplier={onContactSupplier}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 