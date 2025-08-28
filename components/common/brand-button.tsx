import { Button } from "@/components/ui/button"
import { brandColors } from "@/styles/colors"

interface BrandButtonProps {
  children: React.ReactNode
  size?: "default" | "lg" | "sm"
  className?: string
  onClick?: () => void
}

export default function BrandButton({ children, size = "default", className = "", onClick }: BrandButtonProps) {
  return (
    <Button
      size={size}
      onClick={onClick}
      className={`${brandColors.primary[600]} ${brandColors.hover.primary} text-white hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </Button>
  )
} 