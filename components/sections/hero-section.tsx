"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { heroData } from "@/data/main/hero-data"

export default function HeroSection() {
  const { slides } = heroData
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlide = slides[currentIndex]

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 배경 이미지 애니메이션 */}
      <AnimatePresence>
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        >
          <Image
            src={currentSlide.backgroundImage || "/placeholder.svg"}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* 텍스트 콘텐츠 애니메이션 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide.id}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {currentSlide.title}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl mb-8 font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {currentSlide.subtitle}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentSlide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 진행 바 */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <motion.div
          className="h-1 bg-white/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "left" }}
          key={currentIndex}
        />
      </div>
    </section>
  )
}
