"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import MenuButton from "@/components/ui/menu-button"

// 메뉴 데이터
const menuItems = [
  { id: "hero", label: "홈" },
  { id: "about", label: "회사소개" },
  { id: "slogan", label: "슬로건" },
  { id: "news", label: "뉴스" },
  { id: "contact", label: "판매문의" },
  { id: "location", label: "오시는 길" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 64
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }
    
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm
        ${isScrolled ? 'bg-gray-800/30' : 'bg-transparent'}`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold tracking-wide transition-colors`}>
              REDCOLA
            </span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          {!isAboutPage && (
            <nav className="hidden md:flex items-center h-full">
              {menuItems.map((item) => (
                <MenuButton 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </MenuButton>
              ))}
            </nav>
          )}

          {/* 모바일 햄버거 메뉴 버튼 */}
          {!isAboutPage && (
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 토글"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          )}
        </div>

        {/* 모바일 메뉴 */}
        {!isAboutPage && isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="flex flex-col py-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-left text-gray-800 hover:text-red-600 transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
