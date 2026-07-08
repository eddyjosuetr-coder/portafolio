'use client'

import { useEffect, useRef } from 'react'
import { gsap }              from '@/lib/gsap'

/* Renders on desktop pointer devices only. Hidden on touch + reduced-motion. */
export function CursorTrailer() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    /* Center both elements on their midpoint via GSAP transform origin */
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    /* quickSetter avoids string parsing overhead on every frame */
    const setDotX  = gsap.quickSetter(dot,  'x', 'px') as (v: number) => void
    const setDotY  = gsap.quickSetter(dot,  'y', 'px') as (v: number) => void
    const setRingX = gsap.quickSetter(ring, 'x', 'px') as (v: number) => void
    const setRingY = gsap.quickSetter(ring, 'y', 'px') as (v: number) => void

    const pos     = { x: -300, y: -300 }
    const ringPos = { x: -300, y: -300 }
    let   firstMove = true

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      setDotX(pos.x)
      setDotY(pos.y)

      if (firstMove) {
        firstMove = false
        ringPos.x = pos.x
        ringPos.y = pos.y
        gsap.to([dot, ring], { opacity: 1, duration: 0.4, ease: 'power2.out' })
      }
    }

    /* Lerped ring follows mouse with a slight delay */
    let raf: number
    const LERP = 0.095
    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * LERP
      ringPos.y += (pos.y - ringPos.y) * LERP
      setRingX(ringPos.x)
      setRingY(ringPos.y)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    /* Scale ring on interactive elements */
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"]')) {
        gsap.to(ring, { scale: 2.4, opacity: 0.30, duration: 0.25, ease: 'power2.out' })
        gsap.to(dot,  { scale: 0,   duration: 0.20 })
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"]')) {
        gsap.to(ring, { scale: 1, opacity: 0.55, duration: 0.35, ease: 'power2.out' })
        gsap.to(dot,  { scale: 1, duration: 0.20 })
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
    }
  }, [])

  return (
    <>
      {/* Solid dot — follows cursor at native speed */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none opacity-0 will-change-transform"
        aria-hidden="true"
      >
        <div className="w-[6px] h-[6px] rounded-full bg-accent" />
      </div>

      {/* Lagged ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none opacity-0 will-change-transform"
        aria-hidden="true"
      >
        <div className="w-8 h-8 rounded-full border border-accent/55" />
      </div>
    </>
  )
}
