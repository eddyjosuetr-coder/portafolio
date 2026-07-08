'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP }               from '@gsap/react'
import { gsap }                  from '@/lib/gsap'

interface MagneticButtonProps {
  children:  ReactNode
  className?: string
  strength?:  number   // fraction of cursor distance to travel (0–1)
}

export function MagneticButton({
  children,
  className = '',
  strength  = 0.30,
}: MagneticButtonProps) {
  const wrapRef   = useRef<HTMLDivElement>(null)
  const center    = useRef({ x: 0, y: 0 })

  useGSAP(
    () => {
      const el = wrapRef.current
      if (!el) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      const onEnter = () => {
        const r = el.getBoundingClientRect()
        center.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 }
      }

      const onMove = (e: MouseEvent) => {
        const dx = (e.clientX - center.current.x) * strength
        const dy = (e.clientY - center.current.y) * strength
        gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: 'power2.out', overwrite: true })
      }

      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1, 0.45)', overwrite: true })
      }

      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mousemove',  onMove)
      el.addEventListener('mouseleave', onLeave)

      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mousemove',  onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: wrapRef },
  )

  return (
    <div ref={wrapRef} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </div>
  )
}
