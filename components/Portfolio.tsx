'use client'

import Image           from 'next/image'
import Link            from 'next/link'
import { useRef }      from 'react'
import { useGSAP }     from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { SplitReveal } from '@/components/ui/SplitReveal'
import { PROYECTOS }   from '@/lib/proyectos'

ScrollTrigger // prevent tree-shaking

/* ----------------------------------------------------------
   Project data sourced from lib/proyectos.ts
---------------------------------------------------------- */
/* Map PROYECTOS to the shape Portfolio cards need */
const PROJECTS = PROYECTOS.map((p) => ({
  slug:               p.slug,
  category:           p.categoria.toUpperCase(),
  title:              p.titulo,
  description:        p.descripcionCorta,
  tags:               p.tecnologias.slice(0, 3),
  placeholderClass:   p.placeholderClass,
  placeholderContent: p.placeholderContent,
  accent:             p.accent,
  accentGlow:         p.accentGlow,
  imagen:             p.imagen,
  mobilePos:          p.mobilePos,
}))

/* ----------------------------------------------------------
   Placeholder visuals (TODO: replace with real screenshots)
---------------------------------------------------------- */
function PlaceholderGraphic({ type, title }: { type?: string; title: string }) {
  if (type === 'ocean')
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 pointer-events-none mix-blend-overlay">
        {[
          { x: 12, y: 34, s: 1.2, o: 0.3 }, { x: 45, y: 12, s: 0.8, o: 0.4 },
          { x: 78, y: 56, s: 1.5, o: 0.2 }, { x: 23, y: 89, s: 0.9, o: 0.5 },
          { x: 89, y: 23, s: 1.1, o: 0.3 }, { x: 56, y: 78, s: 1.4, o: 0.2 },
          { x: 34, y: 45, s: 0.7, o: 0.4 }, { x: 67, y: 89, s: 1.3, o: 0.3 },
          { x: 90, y: 12, s: 1.0, o: 0.5 }, { x: 15, y: 67, s: 0.8, o: 0.2 },
          { x: 48, y: 34, s: 1.2, o: 0.4 }, { x: 81, y: 90, s: 1.5, o: 0.3 },
          { x: 28, y: 15, s: 0.9, o: 0.5 }, { x: 61, y: 58, s: 1.1, o: 0.2 },
          { x: 94, y: 45, s: 1.4, o: 0.4 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: `${star.s}px`, height: `${star.s}px`, top: `${star.y}%`, left: `${star.x}%`, opacity: star.o }}
            aria-hidden="true"
          />
        ))}
        <div className="w-full h-32 bg-gradient-to-t from-[#0a2a3a]/80 to-transparent" />
        <p className="font-display text-[0.8rem] tracking-[0.3em] text-white/30 uppercase z-10 font-bold mb-4">{title}</p>
      </div>
    )

  if (type === 'dining')
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
        <div className="text-center">
          <p className="font-display text-4xl text-white/5 tracking-[0.2em] uppercase font-bold">Menu</p>
          <div className="mt-4 flex flex-col gap-2 items-center">
            {['Antipasti', 'Primi', 'Secondi'].map((c) => (
              <div key={c} className="flex items-center gap-6 w-56">
                <span className="font-mono text-[0.7rem] text-white/20 flex-1 text-right">{c}</span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[0.7rem] text-white/20">€ · ·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

  if (type === 'grid')
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
        <div className="grid grid-cols-4 gap-3 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-white/5 rounded-lg border border-white/10 flex items-end justify-end p-2">
              <span className="font-mono text-[0.6rem] text-white/40">SKU</span>
            </div>
          ))}
        </div>
      </div>
    )

  if (type === 'calc')
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
        <div className="w-56 border border-white/10 rounded-xl bg-black/20 overflow-hidden backdrop-blur-sm">
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 text-center">
            <p className="font-mono text-[0.65rem] text-white/40 uppercase tracking-widest mb-1">Prima Calculada</p>
            <p className="font-display text-2xl text-white/60 font-bold">$248.00</p>
          </div>
          <div className="px-4 py-3 space-y-2">
            {['Cobertura', 'Deducible', 'Período'].map((label) => (
              <div key={label} className="flex justify-between items-center">
                <span className="font-mono text-[0.6rem] text-white/30">{label}</span>
                <div className="w-16 h-1 bg-white/10 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )

  if (type === 'workflow')
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-30">
        <div className="flex flex-col gap-3 items-center">
          {[
            { label: 'Webhook', color: '#25D366' },
            { label: 'Parsear', color: '#25D366' },
            { label: 'Menú IA', color: '#25D366' },
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="px-4 py-1.5 rounded-lg border text-[0.6rem] font-mono font-bold"
                style={{ background: `${node.color}10`, borderColor: `${node.color}40`, color: node.color }}>
                {node.label}
              </div>
              {i < 2 && <div className="w-px h-3" style={{ background: node.color, opacity: 0.4 }} />}
            </div>
          ))}
        </div>
      </div>
    )

  return null
}

/* ----------------------------------------------------------
   Project card — editorial / cinematic
   Rest: image full bleed, title only. Hover: full reveal.
---------------------------------------------------------- */
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

type ProjectShape = typeof PROJECTS[number]

function ProjectCard({ project, index }: { project: ProjectShape; index: number }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group shrink-0 w-[calc(100vw-2rem)] lg:w-[clamp(680px,calc(75vw-6.5rem),1360px)] rounded-2xl lg:rounded-[2rem] overflow-hidden relative snap-start block"
      style={{
        height: 'clamp(500px, calc(100svh - 18rem), 720px)',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: `transform 500ms ${EASE}, box-shadow 500ms ${EASE}, border-color 500ms ${EASE}`,
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-6px) scale(1.008)'
        el.style.boxShadow = `0 48px 100px rgba(0,0,0,0.7), 0 0 0 1px ${project.accent}40, 0 0 60px ${project.accentGlow}`
        el.style.borderColor = `${project.accent}45`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0) scale(1)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'rgba(255,255,255,0.06)'
      }}
      aria-label={`Ver proyecto: ${project.title}`}
    >
      <article className="w-full h-full">

        {/* ── Background gradient ── */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.placeholderClass}`} />

        {/* ── Screenshot — fills card, subtle zoom on hover ── */}
        <Image
          src={project.imagen ?? `/img/${project.slug}.png`}
          alt={project.title}
          fill
          className="object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          style={{ opacity: 0.9 }}
          sizes="(max-width: 1024px) 92vw, (max-width: 1440px) 75vw, 1360px"
          unoptimized
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />

        {/* ── Vignette at rest — just enough for text ── */}
        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
          style={{ background: 'linear-gradient(to top, rgba(4,8,16,0.88) 0%, rgba(4,8,16,0.18) 45%, transparent 100%)' }} />

        {/* ── Deeper overlay on hover for content panel ── */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(4,8,16,0.97) 0%, rgba(4,8,16,0.55) 55%, rgba(4,8,16,0.15) 100%)' }} />

        {/* ── Accent glow from bottom on hover ── */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 45% at 50% 100%, ${project.accentGlow} 0%, transparent 70%)` }} />

        {/* ── Top accent line — only on hover ── */}
        <div className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{ background: `linear-gradient(90deg, transparent 5%, ${project.accent}70 30%, ${project.accent} 50%, ${project.accent}70 70%, transparent 95%)` }} />

        {/* ── Number — top left, always visible, minimal ── */}
        <div className="absolute top-6 left-7 z-20">
          <span className="font-mono tabular-nums"
            style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.12em' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* ── Arrow icon — top right on hover ── */}
        <div className="absolute top-6 right-7 z-20 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-2 group-hover:translate-x-0"
          style={{ color: project.accent }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 14.5L14.5 3.5M14.5 3.5H6.5M14.5 3.5V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── Bottom content ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">

          {/* Category — at rest: subdued. Hover: accent colored */}
          <div className="flex items-center gap-2 mb-3 transition-all duration-400">
            <div className="w-4 h-[1.5px] transition-all duration-400 group-hover:w-6"
              style={{ background: project.accent, opacity: 0.6 }} />
            <span className="font-mono tracking-[0.18em] uppercase transition-colors duration-400"
              style={{ fontSize: '0.58rem', color: `${project.accent}99` }}>
              {project.category}
            </span>
          </div>

          {/* Title — always visible, shifts up on hover */}
          <h3
            className="font-display font-black text-white tracking-tight leading-[1.1] transition-transform duration-500 group-hover:-translate-y-1"
            style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            {project.title}
          </h3>

          {/* Description + CTA — slides up from invisible */}
          <div className="overflow-hidden">
            <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 mt-3">
              <p className="leading-relaxed line-clamp-2 mb-5"
                style={{ fontSize: '0.83rem', color: 'rgba(160,178,195,0.75)', maxWidth: '520px' }}>
                {project.description}
              </p>

              {/* CTA row */}
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold text-[0.65rem] tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: project.accent,
                    color: '#030810',
                  }}>
                  Ver proyecto
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>

        </div>
      </article>
    </Link>
  )
}

/* ----------------------------------------------------------
   Portfolio section — GSAP horizontal pin + scrub
---------------------------------------------------------- */
export function Portfolio() {
  const sectionRef  = useRef<HTMLElement>(null)
  const trackRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef  = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const section = sectionRef.current
      const track   = trackRef.current
      if (!section || !track) return

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isDesktop      = window.matchMedia('(min-width: 1024px)').matches

      if (prefersReduced || !isDesktop) return

      const getSlide = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x:    () => -getSlide(),
        ease: 'none',
        scrollTrigger: {
          trigger:           section,
          start:             'top top',
          end:               () => `+=${getSlide() * 1.8}`,
          scrub:             true,
          pin:               true,
          anticipatePin:     1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
            if (counterRef.current) {
              const idx = Math.min(
                Math.round(self.progress * (PROJECTS.length - 1)),
                PROJECTS.length - 1,
              )
              counterRef.current.textContent = String(idx + 1).padStart(2, '0')
            }
          },
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <>
      {/* ══════════════════════════════════════
          MOBILE — vertical scroll (< lg)
      ══════════════════════════════════════ */}
      <section id="portafolio" className="lg:hidden section-pad" aria-labelledby="portafolio-title-mobile">
        <div className="site-container">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass bg-void/60 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
              <span className="text-[0.63rem] font-bold tracking-widest uppercase text-silver">Casos de Éxito</span>
            </div>
            <h2 id="portafolio-title-mobile" className="font-display font-black text-glacier tracking-tight text-3xl">
              Plataformas de<span className="text-accent"> clase mundial</span>
            </h2>
          </div>

          {/* Vertical cards — clean cinematic */}
          <div className="flex flex-col gap-5">
            {PROJECTS.map((project, i) => (
              <Link
                key={project.slug}
                href={`/proyectos/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: '16/9',
                  border: `1px solid rgba(255,255,255,0.07)`,
                }}
                aria-label={`Ver proyecto: ${project.title}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.placeholderClass}`} />
                <Image
                  src={project.imagen ?? `/img/${project.slug}.png`}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ opacity: 0.88 }}
                  sizes="100vw"
                  unoptimized
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                {/* Vignette */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(4,8,16,0.92) 0%, rgba(4,8,16,0.3) 50%, transparent 100%)' }} />
                {/* Accent line top */}
                <div className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent 10%, ${project.accent}60 40%, ${project.accent} 50%, ${project.accent}60 60%, transparent 90%)` }} />
                {/* Number */}
                <span className="absolute top-4 left-4 font-mono tabular-nums"
                  style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Arrow */}
                <div className="absolute top-4 right-4" style={{ color: project.accent, opacity: 0.7 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-[1.5px]" style={{ background: project.accent, opacity: 0.7 }} />
                    <span className="font-mono tracking-[0.18em] uppercase"
                      style={{ fontSize: '0.54rem', color: `${project.accent}99` }}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-white tracking-tight leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)' }}>
                    {project.title}
                  </h3>
                  <p className="leading-relaxed line-clamp-2"
                    style={{ fontSize: '0.74rem', color: 'rgba(150,170,185,0.65)' }}>
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DESKTOP — GSAP horizontal scroll (≥ lg)
      ══════════════════════════════════════ */}
      <section
        ref={sectionRef}
        id="portafolio-desktop"
        className="relative hidden lg:block overflow-hidden"
        style={{ height: '100svh' }}
        aria-labelledby="portafolio-title"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <header className="absolute top-0 left-0 right-0 z-20 pt-24 pl-12 xl:pl-16 pb-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(10,18,27,1) 0%, rgba(10,18,27,0.95) 65%, transparent 100%)' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass bg-void/60 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
            <span className="text-[0.63rem] font-bold tracking-widest uppercase text-silver">Casos de Éxito</span>
          </div>
          <SplitReveal id="portafolio-title"
            className="font-display font-black text-glacier tracking-tight"
            style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)' }}>
            Plataformas de<span className="text-accent"> clase mundial</span>
          </SplitReveal>
        </header>

        <div ref={trackRef}
          className="absolute top-0 bottom-0 left-0 w-max flex items-start gap-8 pt-[17rem] pb-10 pl-12 xl:pl-16 will-change-transform"
          style={{ scrollbarWidth: 'none' } as React.CSSProperties}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
          <div className="shrink-0 w-16" />
        </div>

        <div className="absolute bottom-6 left-12 right-12 xl:left-16 xl:right-16 z-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-baseline gap-2">
              <span ref={counterRef}
                className="font-display font-black text-white tabular-nums leading-none"
                style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
                aria-live="polite" aria-atomic="true">01</span>
              <span className="font-mono text-sm text-silver/40">/ {String(PROJECTS.length).padStart(2, '0')}</span>
            </div>
            <div className="w-32 h-[2px] bg-glass rounded-full overflow-hidden">
              <div ref={progressRef}
                className="h-full w-full bg-gradient-to-r from-accent-deep to-accent origin-left rounded-full"
                style={{ transform: 'scaleX(0)' }} />
            </div>
          </div>
          <p className="text-[0.65rem] font-mono uppercase tracking-widest text-silver/30">Scroll para navegar</p>
        </div>
      </section>
    </>
  )
}
