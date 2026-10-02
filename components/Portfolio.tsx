'use client'

import Image                       from 'next/image'
import Link                        from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SplitReveal }             from '@/components/ui/SplitReveal'
import { PROYECTOS, type Proyecto } from '@/lib/proyectos'

/* ----------------------------------------------------------
   Portafolio — acordeón de paneles
   Los 7 proyectos conviven en una sola pantalla: el activo se
   abre a todo color con su ficha, el resto queda como franja
   teñida de su color. Escritorio: en fila, se abre al pasar el
   cursor. Móvil: en columna, se abre al tocar.
---------------------------------------------------------- */
const TOTAL        = String(PROYECTOS.length).padStart(2, '0')
const MAX_CHIPS    = 4
const HOVER_DELAY  = 110   // ms — evita abrir cada panel que el cursor cruza de camino
const EASE         = 'cubic-bezier(0.16,1,0.3,1)'

const pad = (n: number): string => String(n + 1).padStart(2, '0')

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Ficha del panel abierto ─────────────────────────────── */
function PanelDetails({ project, index }: { project: Proyecto; index: number }) {
  return (
    <div className="animate-flow-in relative z-20 m-3 sm:m-5 lg:m-7 w-[calc(100%-1.5rem)] max-w-[560px] p-5 sm:p-6 rounded-2xl backdrop-blur-xl pointer-events-none"
      style={{ animationDelay: '180ms', opacity: 0, background: 'rgba(6,10,18,0.74)', border: `1px solid ${project.accent}30`, boxShadow: '0 20px 50px rgba(0,0,0,0.45)' }}>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="px-2.5 py-1 rounded-full font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em]"
          style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}55`, color: project.accent }}>
          {project.categoria}
        </span>
        {project.liveUrl && !project.categoria.includes('En línea') && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[0.56rem] font-bold uppercase tracking-[0.18em] text-emerald-300"
            style={{ background: 'rgba(16,185,129,0.14)', border: '1px solid rgba(52,211,153,0.35)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> En línea
          </span>
        )}
      </div>

      <h3 className="font-display font-black text-white tracking-tight leading-[1.02]"
        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)' }}>
        {project.titulo}
      </h3>

      <p className="mt-3 text-[0.86rem] leading-relaxed line-clamp-2 max-w-[480px]" style={{ color: 'rgba(214,224,232,0.82)' }}>
        {project.descripcionCorta}
      </p>

      <ul className="hidden sm:flex flex-wrap gap-1.5 mt-4" aria-label="Tecnologías principales">
        {project.tecnologias.slice(0, MAX_CHIPS).map((t) => (
          <li key={t} className="px-2.5 py-1 rounded-md font-mono text-[0.6rem] tracking-wide backdrop-blur-md"
            style={{ background: 'rgba(4,8,16,0.55)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(226,229,239,0.85)' }}>
            {t}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5 mt-5 pointer-events-auto">
        <Link href={`/proyectos/${project.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono font-bold text-[0.66rem] tracking-widest uppercase transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: project.accent, color: '#030810', boxShadow: `0 12px 30px ${project.accentGlow}` }}>
          Ver caso <ArrowIcon size={12} />
        </Link>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.66rem] font-bold tracking-widest uppercase text-white/85 underline-offset-4 hover:underline">
            Abrir sitio <ArrowIcon size={11} />
          </a>
        )}
      </div>

      <span className="sr-only">Proyecto {pad(index)} de {TOTAL}</span>
    </div>
  )
}

/* ── Panel ───────────────────────────────────────────────── */
interface PanelProps {
  project:    Proyecto
  index:      number
  isActive:   boolean
  onActivate: (i: number) => void
  onHover:    (i: number) => void
  onLeave:    () => void
}

function Panel({ project, index, isActive, onActivate, onHover, onLeave }: PanelProps) {
  return (
    <article
      data-active={isActive}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className="pf-panel group/panel relative overflow-hidden rounded-2xl lg:rounded-[1.4rem] shrink-0
                 h-[4.5rem] data-[active=true]:h-[27rem] sm:data-[active=true]:h-[30rem]
                 lg:h-auto lg:data-[active=true]:h-auto lg:basis-0 lg:grow lg:data-[active=true]:grow-[11]
                 motion-reduce:!transition-none"
      style={{
        transition: `flex-grow 700ms ${EASE}, height 600ms ${EASE}, box-shadow 500ms ease`,
        border: `1px solid ${isActive ? `${project.accent}66` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: isActive ? `0 30px 80px rgba(0,0,0,0.55), 0 0 60px ${project.accentGlow}` : 'none',
      }}
    >
      {/* Captura */}
      <Image src={project.imagen} alt={isActive ? `Captura de ${project.titulo}` : ''} fill unoptimized
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="object-cover transition-[transform,filter] duration-700 group-hover/panel:scale-[1.03]"
        style={{
          objectPosition: 'center top',
          filter: isActive ? 'none' : 'grayscale(0.55) brightness(0.5)',
        }} />

      {/* Tinte del color del proyecto — solo cerrado */}
      <div aria-hidden="true" className="absolute inset-0 transition-opacity duration-500 mix-blend-color"
        style={{ background: project.accent, opacity: isActive ? 0 : 0.35 }} />

      {/* Velos para leer: inferior al abrir, general cerrado */}
      <div aria-hidden="true" className="absolute inset-0 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to top, rgba(4,8,16,0.96) 0%, rgba(4,8,16,0.55) 42%, rgba(4,8,16,0) 72%)', opacity: isActive ? 1 : 0 }} />
      <div aria-hidden="true" className="absolute inset-0 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to bottom, rgba(4,8,16,0.2), rgba(4,8,16,0.75))', opacity: isActive ? 0 : 1 }} />

      {/* Número gigante en contorno — firma editorial del panel abierto */}
      <span aria-hidden="true"
        className="absolute -top-3 right-4 lg:right-7 font-display font-black leading-none select-none transition-all duration-700 pointer-events-none"
        style={{
          fontSize: 'clamp(5rem, 11vw, 10rem)',
          color: 'transparent',
          WebkitTextStroke: `1.5px ${project.accent}`,
          opacity: isActive ? 0.4 : 0,
          transform: `translateY(${isActive ? 0 : -24}px)`,
        }}>
        {pad(index)}
      </span>

      {/* Rótulo del panel cerrado — vertical en escritorio, horizontal en móvil */}
      <div aria-hidden="true"
        className="absolute inset-0 z-10 flex items-center lg:flex-col lg:items-center lg:justify-between px-5 lg:px-0 lg:py-6 gap-4 transition-opacity duration-300 pointer-events-none"
        style={{ opacity: isActive ? 0 : 1 }}>
        <span className="font-mono text-[0.62rem] font-bold tabular-nums tracking-[0.14em]" style={{ color: project.accent }}>
          {pad(index)}
        </span>
        <span className="font-display font-black text-white/90 tracking-tight whitespace-nowrap text-[1.05rem] lg:text-[1.15rem] lg:[writing-mode:vertical-rl] lg:rotate-180 truncate">
          {project.titulo}
        </span>
        <span className="hidden lg:block w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
      </div>

      {/* Ficha */}
      {isActive && (
        <div className="absolute inset-0 z-20 flex items-end pointer-events-none">
          <PanelDetails project={project} index={index} />
        </div>
      )}

      {/* Capa de acción: abre el panel cerrado, o lleva al caso si ya está abierto */}
      {isActive ? (
        <Link href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto: ${project.titulo}`}
          className="absolute inset-0 z-10 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4"
          style={{ outlineColor: project.accent }} />
      ) : (
        <button type="button" onClick={() => onActivate(index)} onFocus={() => onActivate(index)}
          aria-label={`Mostrar proyecto: ${project.titulo}`}
          className="absolute inset-0 z-30 cursor-pointer" />
      )}
    </article>
  )
}

/* ── Sección ─────────────────────────────────────────────── */
export function Portfolio() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => { if (timerRef.current) clearTimeout(timerRef.current) }
  const hoverTo = (i: number) => {
    if (!window.matchMedia('(hover: hover)').matches) return
    clearTimer()
    timerRef.current = setTimeout(() => setActive(i), HOVER_DELAY)
  }
  useEffect(() => clearTimer, [])

  const project = PROYECTOS[active]

  return (
    <section id="portafolio" className="relative section-pad overflow-hidden" aria-labelledby="portafolio-title">
      {/* Resplandor ambiental que toma el color del proyecto abierto */}
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60%] rounded-full blur-[140px] pointer-events-none opacity-60 transition-colors duration-700"
        style={{ background: project.accentGlow }} />

      <div className="relative w-full max-w-[min(1440px,96vw)] mx-auto px-4 sm:px-6 lg:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4 mb-7 lg:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glass bg-void/60 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
              <span className="text-[0.63rem] font-bold tracking-widest uppercase text-silver">Casos de Éxito</span>
            </div>
            <SplitReveal id="portafolio-title"
              className="font-display font-black text-glacier tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)' }}>
              Plataformas de<span className="text-accent"> clase mundial</span>
            </SplitReveal>
          </div>

          {/* Contador + pestañas */}
          <div className="hidden lg:flex items-center gap-5 pb-2">
            <span className="font-mono text-[0.7rem] tracking-[0.2em] text-silver/50 tabular-nums">
              <span className="text-white font-bold">{pad(active)}</span> / {TOTAL}
            </span>
            <div className="flex gap-1.5" role="group" aria-label="Elegir proyecto">
              {PROYECTOS.map((p, i) => (
                <button key={p.slug} type="button" onClick={() => setActive(i)}
                  aria-label={`Mostrar ${p.titulo}`} aria-pressed={i === active}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{ width: i === active ? 28 : 10, background: i === active ? p.accent : 'rgba(160,178,188,0.25)' }} />
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-3 lg:h-[clamp(470px,66svh,700px)]">
          {PROYECTOS.map((p, i) => (
            <Panel key={p.slug} project={p} index={i} isActive={i === active}
              onActivate={setActive} onHover={hoverTo} onLeave={clearTimer} />
          ))}
        </div>
      </div>
    </section>
  )
}
