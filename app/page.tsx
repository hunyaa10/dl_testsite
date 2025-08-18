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
        {/* <div className="w-full h-[500px] bg-white flex justify-center items-center">
          메인섹션위치예정
        </div> */}
        <AboutSection />
        {/* <SloganSection /> */}
        {/* <LocationSection /> */}
    </div>
  )
}
