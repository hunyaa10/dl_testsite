"use client"

import { useState, useEffect } from "react"

interface UseCountUpProps {
  end: number
  duration?: number
  delay?: number
  isActive: boolean
}

export function useCountUp({ end, duration = 2000, delay = 0, isActive }: UseCountUpProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isActive || hasStarted) return

    const startAnimation = () => {
      setHasStarted(true)
      let startTime: number | null = null

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime

        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // easeOutQuart 이징
        const easedProgress = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.round(easedProgress * end)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }

    const timer = setTimeout(startAnimation, delay)
    return () => clearTimeout(timer)
  }, [isActive, end, duration, delay, hasStarted])

  return count
}
