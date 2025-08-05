import { useEffect } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SloganSection from "@/components/sections/slogan-section"
import NewsSection from "@/components/sections/news-section"
import ContactSection from "@/components/sections/contact-section"
import LocationSection from "@/components/sections/location-section"

export default function HomePage() {
  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SloganSection />
        <NewsSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
