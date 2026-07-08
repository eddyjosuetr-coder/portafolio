'use client'

import { useRef }    from 'react'
import { useGSAP }   from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

ScrollTrigger // evita tree-shaking

const STATS = [
  { value: 4,   prefix: '0', suffix: '',   display: '04',   label: 'Plataformas activas'  },
  { value: 450, prefix: '',  suffix: '+',  display: '450+', label: 'Artículos gestionados'},
  { value: 24,  prefix: '',  suffix: '/7', display: '24/7', label: 'Flujos con IA'         },
  { value: 100, prefix: '',  suffix: '%',  display: '100%', label: 'Código a medida'       },
]

/* ── Counter individual ─────────────────────────────────── */
interface StatItemProps {
  value:   number
  prefix:  string
  suffix:  string
  display: string
  label:   string
  index:   number
}

function StatItem({ value, prefix, suffix, display, label, index }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef    = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const numEl     = numberRef.current
      if (!container || !numEl) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReduced) {
        numEl.textContent = display
        return
      }

      /* Estado inicial: invisible y desplazado hacia abajo */
      gsap.set(container, { opacity: 0, y: 24 })

      /* Animación de entrada del bloque completo */
      gsap.to(container, {
        opacity:       1,
        y:             0,
        duration:      0.7,
        ease:          'power3.out',
        delay:         index * 0.1,
        scrollTrigger: {
          trigger: container,
          start:   'top 82%',
          once:    true,
        },
      })

      /* Counter: objeto proxy animado por GSAP */
      const counter = { val: 0 }
      numEl.textContent = prefix + '0' + suffix

      gsap.to(counter, {
        val:           value,
        duration:      2.0,
        ease:          'power2.out',
        delay:         index * 0.1 + 0.2,
        onUpdate() {
          numEl.textContent = prefix + Math.round(counter.val) + suffix
        },
        onComplete() {
          numEl.textContent = display   // valor final exacto (ej. "24/7")
        },
        scrollTrigger: {
          trigger: container,
          start:   'top 82%',
          once:    true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="flex flex-col gap-3 items-center text-center">
      {/* Número principal */}
      <span
        ref={numberRef}
        className="font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-glacier via-accent-glow to-silver-blue/60"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
        aria-label={display}
      >
        {display}
      </span>

      {/* Label */}
      <p className="text-silver-blue/70 text-[0.78rem] uppercase tracking-widest font-semibold">
        {label}
      </p>

      {/* Línea decorativa */}
      <div
        className="mt-1 w-10 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}

/* ── Sección completa ───────────────────────────────────── */
export function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden border-y border-white/[0.04]"
      style={{ background: 'rgba(8,12,18,0.5)' }}   /* void layer sutil */
      aria-label="Estadísticas de Eddy Trejo"
    >
      {/* Glow ambiental de la sección */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(66,192,245,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
