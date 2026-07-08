'use client'

import { useRef }       from 'react'
import Link             from 'next/link'
import Image            from 'next/image'
import { useGSAP }      from '@gsap/react'
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap'
import type { Proyecto } from '@/lib/proyectos'
import NextImage        from 'next/image'
import { getTechLogo }  from '@/lib/tech-logos'

ScrollTrigger

export function ProyectoAnimated({ p }: { p: Proyecto }) {
  const rootRef  = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const orbRef   = useRef<HTMLDivElement>(null)
  const imgRef   = useRef<HTMLDivElement>(null)

  const { titulo, categoria, descripcionCorta, descripcionLarga,
    features, tecnologias, destacado, repoUrl, liveUrl, status,
    imagenShowcase, accent, accentGlow } = p

  useGSAP(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (rm) return

    /* Title */
    if (titleRef.current) {
      const s = new SplitText(titleRef.current, { type: 'chars,words' })
      gsap.from(s.chars, { opacity:0, y:55, rotateX:-40, duration:0.6, ease:'power3.out',
        stagger:0.016, transformOrigin:'0% 50% -30px', delay:0.1,
        onComplete: () => s.revert() })
    }

    /* Hero */
    gsap.from('.pd-brand',     { x:-16, duration:0.5, ease:'power2.out', delay:0.05 })
    gsap.from('.pd-back-link', { x:-12, duration:0.4, ease:'power2.out', delay:0.05 })
    gsap.from('.pd-badge',     { opacity:0, y:14, duration:0.45, ease:'power2.out', delay:0.06 })
    gsap.from('.pd-desc',      { opacity:0, y:18, duration:0.6,  ease:'power2.out', delay:0.45 })
    gsap.from('.pd-stat',      { y:20, scale:0.88, duration:0.45, ease:'back.out(1.5)', stagger:0.09, delay:0.55 })
    /* CTA buttons — no opacity so they're always visible */
    gsap.from('.pd-cta-btn',   { y:14, scale:0.96, duration:0.4, ease:'back.out(1.4)', stagger:0.07, delay:0.65 })

    /* Orb float */
    if (orbRef.current)
      gsap.to(orbRef.current, { y:-30, x:15, scale:1.08, duration:6, ease:'sine.inOut', yoyo:true, repeat:-1 })

    /* Image */
    if (imgRef.current)
      gsap.from(imgRef.current, { opacity:0, y:50, scale:0.97, duration:0.85, ease:'power3.out',
        scrollTrigger:{ trigger:imgRef.current, start:'top 88%', once:true } })

    /* Sections — no opacity */
    gsap.utils.toArray<HTMLElement>('.pd-s').forEach(el =>
      gsap.from(el, { y:32, duration:0.65, ease:'power3.out',
        scrollTrigger:{ trigger:el, start:'top 98%', once:true } }))

    /* Tech float */
    gsap.from('.pd-tech', { y:18, scale:0.84, duration:0.38, ease:'back.out(1.7)', stagger:0.026,
      scrollTrigger:{ trigger:'.pd-tech-wrap', start:'top 98%', once:true } })
    gsap.utils.toArray<HTMLElement>('.pd-tech').forEach((el, i) =>
      gsap.to(el, { y:-(4+(i%4)*2), duration:1.4+(i%5)*0.2, ease:'sine.inOut', yoyo:true, repeat:-1, delay:(i%7)*0.18 }))

    /* Bento — no opacity so all cards stay visible */
    gsap.from('.pd-card', { y:30, scale:0.95, duration:0.52, ease:'power3.out', stagger:0.06,
      scrollTrigger:{ trigger:'.pd-bento', start:'top 98%', once:true } })

    /* CTA */
    gsap.from('.pd-cta-box', { opacity:0, scale:0.94, y:20, duration:0.75, ease:'power3.out',
      scrollTrigger:{ trigger:'.pd-cta-box', start:'top 88%', once:true } })

  }, { scope: rootRef })

  return (
    <div ref={rootRef}>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden" style={{ background:'#080d14' }}>

        {/* Accent left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
          style={{ background:`linear-gradient(to bottom, transparent 0%, ${accent} 30%, ${accent} 70%, transparent 100%)`, opacity:0.7 }} />

        {/* Orb */}
        <div ref={orbRef} className="absolute right-[6%] top-[10%] pointer-events-none"
          style={{ width:500, height:500, background:`radial-gradient(circle, ${accentGlow} 0%, transparent 68%)`, filter:'blur(52px)', opacity:0.6 }}
          aria-hidden="true" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage:'radial-gradient(rgba(160,178,188,0.5) 1px, transparent 1px)', backgroundSize:'28px 28px' }} />

        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-14 relative z-10 pt-24 sm:pt-28 pb-16 sm:pb-20">

          {/* Top bar */}
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <div className="pd-brand flex items-center gap-2.5">
              <div className="shrink-0">
                <NextImage src="/logo-eddy.png" alt="Eddy Trejo logo" width={56} height={56} className="object-contain" style={{ filter: 'brightness(1.35) drop-shadow(0 0 6px rgba(255,255,255,0.45))' }} />
              </div>
              <div>
                <div className="font-display font-bold text-white text-[0.85rem] md:text-[0.9rem] leading-none">Eddy Trejo</div>
                <div className="font-mono text-[0.48rem] md:text-[0.52rem] tracking-[0.15em] uppercase mt-0.5 hidden sm:block" style={{ color:`${accent}65` }}>Caso de estudio</div>
              </div>
            </div>
            <Link href="/#portafolio"
              className="pd-back-link inline-flex items-center gap-1.5 text-[0.78rem] font-medium group px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
              style={{ color:'rgba(160,178,188,0.55)', border:'1px solid rgba(255,255,255,0.06)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className="transition-transform duration-200 group-hover:-translate-x-0.5">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              <span className="hidden sm:inline">Portafolio</span>
              <span className="sm:hidden">Volver</span>
            </Link>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-[1fr_200px] gap-12 items-start">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="pd-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background:`${accent}15`, border:`1px solid ${accent}38` }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:accent }} />
                  <span className="text-[0.6rem] font-bold tracking-[0.22em] uppercase" style={{ color:accent }}>{categoria}</span>
                </div>
                {/* Status badge */}
                {status === 'en-proceso' ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background:'rgba(251,191,36,0.12)', border:'1px solid rgba(251,191,36,0.35)' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <circle cx="4" cy="4" r="3" stroke="#fbbf24" strokeWidth="1.5"/>
                      <path d="M4 2v2l1 1" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-yellow-400">En proceso</span>
                  </div>
                ) : liveUrl ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{ background:'rgba(52,211,153,0.12)', border:'1px solid rgba(52,211,153,0.35)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-emerald-400">Live</span>
                  </div>
                ) : null}
              </div>

              <h1 ref={titleRef}
                className="font-display font-black text-white tracking-tight leading-[0.98] mb-6"
                style={{ fontSize:'clamp(2.8rem, 8vw, 8rem)', perspective:'600px' }}>
                {titulo}
              </h1>

              <p className="pd-desc text-[1.05rem] leading-relaxed mb-10 max-w-[520px]"
                style={{ color:'rgba(160,178,188,0.72)' }}>
                {descripcionCorta}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {/* Live demo — primary CTA when available */}
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                    className="pd-cta-btn inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-[0.88rem] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ background:accent, color:'#06222e', boxShadow:`0 10px 28px ${accentGlow}` }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Ver sitio en vivo
                  </a>
                )}
                {/* GitHub */}
                <a href={repoUrl} target="_blank" rel="noopener noreferrer"
                  className="pd-cta-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[0.88rem] transition-all duration-200 hover:border-white/25 hover:-translate-y-0.5"
                  style={{
                    background: liveUrl ? 'rgba(255,255,255,0.05)' : accent,
                    color: liveUrl ? 'rgba(226,229,239,0.85)' : '#06222e',
                    border: liveUrl ? '1px solid rgba(255,255,255,0.12)' : 'none',
                    boxShadow: liveUrl ? 'none' : `0 10px 28px ${accentGlow}`,
                  }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  {status === 'en-proceso' ? 'Ver repositorio' : 'Ver código'}
                </a>
                {/* En proceso label for Marimar */}
                {status === 'en-proceso' && (
                  <div className="pd-cta-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[0.82rem]"
                    style={{ background:'rgba(251,191,36,0.08)', border:'1px solid rgba(251,191,36,0.2)', color:'rgba(251,191,36,0.75)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    Deploy en progreso
                  </div>
                )}
              </div>
            </div>

            {/* Right — stat stack */}
            <div className="hidden lg:flex flex-col gap-3 pt-2">
              {[
                { v: String(tecnologias.length), l:'Tecnologías' },
                { v: String(features.length),    l:'Features'     },
                { v: 'Open',                     l:'Source'       },
              ].map((s,i) => (
                <div key={i} className="pd-stat rounded-2xl p-5 relative overflow-hidden"
                  style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${accent}20`, backdropFilter:'blur(16px)' }}>
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background:`linear-gradient(90deg, ${accent}70, transparent)` }} />
                  <div className="font-display font-black text-white text-4xl leading-none mb-1">{s.v}</div>
                  <div className="text-[0.58rem] font-mono uppercase tracking-widest" style={{ color:`${accent}70` }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech preview in hero removed per user request */}
        </div>
      </section>

      {/* ═══════════════════════ FOTO ═══════════════════════ */}
      <section style={{ background:'#080d14' }}>
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-14 py-6">
          <div ref={imgRef} className="rounded-2xl overflow-hidden"
            style={{ border:`1px solid ${accent}18`, boxShadow:`0 0 0 1px ${accent}08, 0 48px 120px rgba(0,0,0,0.75), 0 0 80px ${accentGlow}` }}>
            <div className="flex items-center gap-2 px-4 py-2.5"
              style={{ background:'rgba(6,10,16,0.98)', borderBottom:`1px solid rgba(255,255,255,0.05)` }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3">
                <div className="max-w-xs mx-auto text-center rounded px-3 py-1"
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.05)' }}>
                  <span className="font-mono text-[0.54rem]" style={{ color:'rgba(160,178,188,0.35)' }}>{repoUrl.replace('https://github.com/','github.com/')}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:accent }} />
                <span className="font-mono text-[0.47rem] uppercase tracking-widest" style={{ color:`${accent}60` }}>Live</span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imagenShowcase} alt={`Presentación de ${titulo}`} style={{ display:'block', width:'100%', height:'auto' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ STACK ═══════════════════════ */}
      <section className="pd-s py-14" style={{ background:'#080d14' }}>
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-0.5 h-6 rounded-full" style={{ background:`linear-gradient(${accent}, transparent)` }} />
            <h2 className="font-display font-black text-white text-xl tracking-tight">Stack tecnológico</h2>
          </div>
          <div className="pd-tech-wrap flex flex-wrap gap-2.5">
            {tecnologias.map(tech => {
              const logo = getTechLogo(tech)
              return (
                <div key={tech} className="pd-tech inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl transition-all duration-200 cursor-default group"
                  style={{ background:'rgba(255,255,255,0.04)', border:`1px solid ${accent}20` }}>
                  {logo
                    ? <img src={logo} alt="" width={16} height={16} style={{ width:16, height:16, objectFit:'contain' }} />
                    : <span className="w-4 h-4 rounded text-[0.48rem] font-bold flex items-center justify-center" style={{ background:`${accent}25`, color:accent }}>{tech.charAt(0)}</span>}
                  <span className="text-[0.72rem] font-mono font-medium" style={{ color:'rgba(215,225,232,0.82)' }}>{tech}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BENTO ═══════════════════════ */}
      <section className="py-14 relative" style={{ background:'rgba(6,10,16,0.98)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`radial-gradient(ellipse 65% 55% at 85% 40%, ${accentGlow} 0%, transparent 65%)` }} />

        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-0.5 h-6 rounded-full" style={{ background:`linear-gradient(${accent}, transparent)` }} />
            <h2 className="font-display font-black text-white text-xl tracking-tight">Sobre el proyecto</h2>
          </div>

          <div className="pd-bento grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Desc — 2 cols */}
            <div className="pd-card lg:col-span-2 rounded-2xl p-7 relative overflow-hidden"
              style={{ background:'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)', border:'1px solid rgba(255,255,255,0.09)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background:`linear-gradient(90deg, ${accent}70, transparent 60%)` }} />
              <div className="text-[0.62rem] font-mono uppercase tracking-widest mb-3" style={{ color:`${accent}65` }}>→ Descripción</div>
              <p className="text-[0.93rem] leading-[1.88]" style={{ color:'rgba(160,178,188,0.75)' }}>{descripcionLarga}</p>
            </div>

            {/* Destacado */}
            <div className="pd-card rounded-2xl p-7 relative overflow-hidden flex flex-col"
              style={{ background:`linear-gradient(135deg, ${accent}10 0%, ${accent}05 100%)`, border:`1px solid ${accent}28` }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background:`linear-gradient(90deg, ${accent}, transparent)` }} />
              <svg width="28" height="20" viewBox="0 0 28 20" fill={accent} opacity="0.35" className="mb-4" aria-hidden="true">
                <path d="M0 20V12Q0 7.25 2.625 3.625T10 0l1.5 2Q8.25 3 6.375 5.5T4.5 12H8V20H0zm16 0V12q0-4.75 2.625-8.375T26 0l1.5 2q-3.25 1-5.125 3.5T20.5 12H24V20H16z"/>
              </svg>
              <p className="text-[0.9rem] leading-relaxed font-semibold flex-1" style={{ color:'rgba(224,229,239,0.92)' }}>{destacado}</p>
              <div className="flex items-center gap-1.5 mt-5 pt-4 border-t" style={{ borderColor:`${accent}22` }}>
                <NextImage src="/logo-eddy.png" alt="Eddy Trejo logo" width={26} height={26} className="object-contain" style={{ filter: 'brightness(1.35) drop-shadow(0 0 4px rgba(255,255,255,0.4))' }} />
                <span className="font-mono text-[0.5rem] tracking-widest uppercase" style={{ color:`${accent}55` }}>Eddy Trejo</span>
              </div>
            </div>

            {/* Feature cards */}
            {features.map((feat, i) => (
              <div key={i} className="pd-card rounded-2xl p-5 flex gap-4 relative overflow-hidden group cursor-default transition-all duration-300"
                style={{ background:'rgba(255,255,255,0.03)', border:`1px solid rgba(255,255,255,0.07)` }}>
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background:`radial-gradient(ellipse 80% 80% at 0% 0%, ${accent}10 0%, transparent 60%)` }} />
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:`linear-gradient(90deg, ${accent}60, transparent 60%)` }} />

                {/* Number */}
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-[0.65rem] mt-0.5"
                  style={{ background:`${accent}15`, border:`1px solid ${accent}32`, color:accent }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <p className="text-[0.84rem] leading-relaxed" style={{ color:'rgba(160,178,188,0.78)' }}>{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section style={{ background:'#080d14' }} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`radial-gradient(ellipse 60% 90% at 50% 50%, ${accentGlow} 0%, transparent 68%)` }} />
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{ backgroundImage:'radial-gradient(rgba(160,178,188,0.4) 1px, transparent 1px)', backgroundSize:'24px 24px' }} />

        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
          <div className="pd-cta-box rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background:'rgba(255,255,255,0.03)', border:`1px solid ${accent}20`, backdropFilter:'blur(20px)' }}>
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background:`linear-gradient(90deg, transparent, ${accent}, transparent)` }} />

            <div className="flex items-center justify-center gap-2.5 mb-4">
              <div style={{ filter:`drop-shadow(0 0 10px ${accent}) brightness(1.35) drop-shadow(0 0 6px rgba(255,255,255,0.5))` }}>
                <NextImage src="/logo-eddy.png" alt="Eddy Trejo logo" width={60} height={60} className="object-contain" />
              </div>
              <span className="font-display font-black text-white text-xl tracking-tight">Eddy Trejo</span>
            </div>

            <p className="font-mono text-[0.6rem] tracking-[0.3em] uppercase mb-4" style={{ color:`${accent}70` }}>
              ¿Quieres algo así?
            </p>
            <h2 className="font-display font-black text-white mb-8 leading-tight tracking-tight max-w-lg mx-auto"
              style={{ fontSize:'clamp(1.9rem, 4vw, 3.2rem)' }}>
              Construyamos tu próximo proyecto juntos
            </h2>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[0.9rem] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{ background:accent, color:'#06222e', boxShadow:`0 14px 40px ${accentGlow}` }}>
                Agendar descubrimiento
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/#portafolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-[0.9rem] transition-all duration-200 hover:border-white/20"
                style={{ background:'rgba(255,255,255,0.05)', color:'rgba(226,229,239,0.8)', border:'1px solid rgba(160,178,188,0.14)' }}>
                Ver más proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
