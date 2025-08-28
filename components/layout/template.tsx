"use client"

import { usePathname } from "next/navigation"
import Header from "./header"
import Footer from "./footer"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")

  return (
    <>
      {!isAdminPage && <Header />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </>
  )
}
