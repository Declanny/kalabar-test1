// Image fallback utility functions
export const getProductImage = (productName: string, fallbackType: 'cashew' | 'cocoa' | 'sesame' | 'hibiscus' | 'shea' | 'pepper' | 'default' = 'default') => {
  const imageMap = {
    cashew: "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop",
    cocoa: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop", 
    sesame: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop",
    hibiscus: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    shea: "https://images.unsplash.com/photo-1615906657446-c8c5d2f9b6b8?w=400&h=300&fit=crop",
    pepper: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop",
    default: "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop"
  }
  
  return imageMap[fallbackType] || imageMap.default
}

export const getSupplierAvatar = (supplierName: string, supplierId?: number) => {
  // Generate consistent avatar based on supplier name or ID
  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&face=center", 
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop&face=center"
  ]
  
  const index = supplierId ? supplierId % avatars.length : Math.abs(supplierName.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % avatars.length
  return avatars[index]
}

export const getUserAvatar = (userName: string, userId?: string) => {
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&face=center",
    "https://images.unsplash.com/photo-1522075469751-3847bc282f33?w=40&h=40&fit=crop&face=center"
  ]
  
  const index = userId ? parseInt(userId) % avatars.length : Math.abs(userName.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % avatars.length
  return avatars[index]
}

// Handle image loading errors
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackUrl?: string) => {
  const target = e.target as HTMLImageElement
  if (fallbackUrl) {
    target.src = fallbackUrl
  } else {
    target.src = "https://images.unsplash.com/photo-1598635730833-ecd0a6b1b1e1?w=400&h=300&fit=crop"
  }
} 