"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { aboutData } from "@/data/main/about-data"
import { brandColors } from "@/styles/colors"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // 애니메이션 시작 - easing 효과 적용
          const targets = [200, 19, 135] // 1.9B는 19로 처리 후 나중에 10으로 나눔
          const duration = 1000 // 1초 동안 애니메이션

          targets.forEach((target, index) => {
            let startTime: number | null = null

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime

              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)

              // easeOutCubic: 처음에는 빠르게, 나중에는 천천히
              const easedProgress = 1 - Math.pow(1 - progress, 3)
              const currentValue = Math.round(easedProgress * target)

              setCounts((prev) => {
                const newCounts = [...prev]
                newCounts[index] = currentValue
                return newCounts
              })

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const formatNumber = (value: number, index: number) => {
    if (index === 0) return `${value}+`
    if (index === 1) return `${(value / 10).toFixed(1)}B`
    return value.toString()
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{aboutData.sectionTitle}</h2>
          <h3 className={`text-2xl ${brandColors.text.primary} mb-8 font-semibold`}>{aboutData.title}</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">{aboutData.subtitle}</p>
          <p className="text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">{aboutData.description}</p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutData.stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div
                  className={`text-4xl font-bold ${brandColors.text.primary} mb-2 min-h-[3rem] flex items-center justify-center`}
                >
                  {formatNumber(counts[index], index)}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about">
            <Button
              size="lg"
              className={`${brandColors.primary[600]} ${brandColors.hover.primary} text-white px-8 py-4 hover:scale-105 transition-all duration-300`}
            >
              {aboutData.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
