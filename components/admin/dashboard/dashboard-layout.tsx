"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, MessageSquare, LogOut } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn")
    if (!loggedIn) {
      router.push("/")
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/admin")
  }

  const isActiveRoute = (route: string) => {
    return pathname.startsWith(route)
  }

  if (!isLoggedIn) {
    return <div>로딩 중...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-sm min-h-screen flex flex-col">
        {/* 회사로고 */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">여행대로</h1>
        </div>

        {/* 사이드바 메뉴 */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/dashboard/inquiries"
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  isActiveRoute("/admin/dashboard/inquiries")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <MessageSquare className="w-4 h-4 mr-3" />
                문의관리
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/products"
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  isActiveRoute("/admin/dashboard/products")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Package className="w-4 h-4 mr-3" />
                물품관리
              </Link>
            </li>
          </ul>
        </nav>

        {/* 로그아웃 버튼 */}
        <div className="p-4 border-t">
          <Button variant="outline" onClick={handleLogout} className="w-full bg-transparent">
            <LogOut className="w-4 h-4" />
            로그아웃
          </Button>
        </div>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  )
}
