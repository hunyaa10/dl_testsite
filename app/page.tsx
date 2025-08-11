"use client"

import { useEffect } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SloganSection from "@/components/sections/slogan-section"
import LocationSection from "@/components/sections/location-section"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SloganSection />
        <LocationSection />
    </div>
  )
}
