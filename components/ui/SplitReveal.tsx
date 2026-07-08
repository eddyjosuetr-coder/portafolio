'use client'

import { useRef, type ElementType, type ReactNode, type CSSProperties } from 'react'
import { useGSAP }                        from '@gsap/react'
import { gsap, SplitText, ScrollTrigger } from '@/lib/gsap'

ScrollTrigger // evita tree-shaking

interface SplitRevealProps {
  children:  ReactNode
  as?:       ElementType
  className?: string
  style?:    CSSProperties
  id?:       string
  delay?:    number
  trigger?:  'scroll' | 'load'
}

export function SplitReveal({
  children,
  as: Tag    = 'h2',
  className  = '',
  style,
  id,
  delay      = 0,
  trigger    = 'scroll',
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return

      /* Parte por líneas visuales — preserva spans internos (acento, gradiente) */
      const split = new SplitText(el, { type: 'lines' })

      /* clip para que las líneas animadas desde yPercent:110 queden ocultas */
      gsap.set(el, { overflow: 'clip' })

      const st = trigger === 'scroll'
        ? { trigger: el, start: 'top 88%', once: true }
        : undefined

      gsap.from(split.lines, {
        yPercent:      110,
        opacity:       0,
        duration:      0.85,
        ease:          'power4.out',
        stagger:       0.10,
        delay,
        scrollTrigger: st,
        onComplete() {
          gsap.set(el, { overflow: '' })
          split.revert()
        },
      })
    },
    { scope: ref },
  )

  const Component = Tag as 'h1'

  return (
    <Component
      ref={ref as React.Ref<HTMLHeadingElement>}
      id={id}
      style={style}
      className={className}
    >
      {children}
    </Component>
  )
}
