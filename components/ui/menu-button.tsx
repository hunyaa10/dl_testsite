import { brandColors } from "@/styles/colors"

interface MenuButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export default function MenuButton({ onClick, children }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-white hover:${brandColors.text.light} transition-all duration-300 h-full px-6 flex items-center justify-center`}
    >
      {children}
    </button>
  )
} 