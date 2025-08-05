"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { brandColors } from "@/styles/colors"

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
    if (isAboutPage) {
      // about 페이지에서는 홈으로 이동 후 스크롤
      if (sectionId === "hero") {
        // 홈으로 이동 시 맨 위로
        window.location.href = "/"
      } else {
        window.location.href = `/#${sectionId}`
      }
    } else {
      // 홈 페이지에서는 바로 스크롤
      if (sectionId === "hero") {
        // 홈 섹션은 맨 위로
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          const headerHeight = 64 // 헤더 높이 (h-16 = 64px)
          const elementPosition = element.offsetTop - headerHeight
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }
    }
    setIsMobileMenuOpen(false) // 모바일 메뉴 닫기
  }

  return (
    <header
      className={`text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${brandColors.primary[600]}/60 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold tracking-wide ${brandColors.hover.text} transition-colors`}>
              REDCOLA
            </span>
          </Link>

          {/* 데스크톱 네비게이션 - about 페이지에서는 숨김 */}
          {!isAboutPage && (
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection("hero")} className={`${brandColors.hover.text} transition-colors`}>
                홈
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${brandColors.hover.text} transition-colors`}
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("slogan")}
                className={`${brandColors.hover.text} transition-colors`}
              >
                슬로건
              </button>
              <button onClick={() => scrollToSection("news")} className={`${brandColors.hover.text} transition-colors`}>
                뉴스
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${brandColors.hover.text} transition-colors`}
              >
                판매문의
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className={`${brandColors.hover.text} transition-colors`}
              >
                본사위치
              </button>
            </nav>
          )}

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 토글"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="flex flex-col py-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("slogan")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                슬로건
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                뉴스
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                판매문의
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors"
              >
                본사위치
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
