"use client"

import { useState, useEffect, useRef } from "react"

export function useIntersectionObserver(threshold = 0.3) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [threshold])

  return { elementRef, isIntersecting }
}
