
interface MenuButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

export default function MenuButton({ onClick, children }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-white transition-all duration-300 h-full px-6 flex items-center justify-center hover:-translate-y-0.5"
    >
      {children}
    </button>
  )
} 