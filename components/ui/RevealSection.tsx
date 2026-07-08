'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  threshold?: number
}

export function RevealSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const offsets = { up: 'translateY(28px)', down: 'translateY(-28px)', left: 'translateX(-28px)', right: 'translateX(28px)', none: 'none' }
    el.style.opacity = '0'
    el.style.transform = offsets[direction]
    el.style.transition = `opacity 0.65s cubic-bezier(.4,0,.2,1) ${delay}s, transform 0.65s cubic-bezier(.4,0,.2,1) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { rootMargin: '-80px 0px', threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
