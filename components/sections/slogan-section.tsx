"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { sloganData } from "@/data/main/slogan-data"
import { brandColors } from "@/styles/colors"

export default function SloganSection() {
  const { slides } = sloganData
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="slogan" className="py-20 bg-white w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div>
        {/* 데스크톱 레이아웃 */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* 왼쪽 큰 카드 */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[600px]">
            <Image
              src={slides[0].backgroundImage || "/placeholder.svg"}
              alt={slides[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{slides[0].title}</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-md">{slides[0].description}</p>
            </div>
          </div>

          {/* 오른쪽 세로 3개 카드 */}
          <div className="grid grid-cols-1 gap-6">
            {slides.slice(1, 4).map((slide) => (
              <div key={slide.id} className="relative rounded-2xl overflow-hidden group cursor-pointer h-[180px]">
                <Image
                  src={slide.backgroundImage || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{slide.title}</h4>
                  <p className="text-sm md:text-base opacity-90 leading-relaxed">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일 슬라이드 레이아웃 */}
        <div className="lg:hidden relative">
          <div className="relative h-[350px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slides[currentIndex].backgroundImage || "/placeholder.svg"}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  >
                    {slides[currentIndex].subtitle}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    className="text-lg md:text-xl leading-relaxed"
                  >
                    {slides[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                    index === currentIndex ? `${brandColors.primary[600]} scale-125` : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
