import { useRouter } from 'next/navigation'
import React from 'react'

interface RedirectToWaitingListProps {
  children: React.ReactNode
  className?: string
}

export const RedirectToWaitingList: React.FC<RedirectToWaitingListProps> = ({ children, className }) => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/waiting-list')
  }

  return (
    <div 
      onClick={handleClick}
      className={`cursor-pointer ${className || ''}`}
    >
      {children}
    </div>
  )
} 