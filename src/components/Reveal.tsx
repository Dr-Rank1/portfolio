'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

export const Reveal = ({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) {
      setVisible(true)
      return
    }

    // Safety timeout: ensure content is visible within 1.5s regardless of scroll position or layout quirks
    const fallbackTimer = setTimeout(() => {
      setVisible(true)
    }, 1200 + delay)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    observer.observe(el)

    return () => {
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  )
}
