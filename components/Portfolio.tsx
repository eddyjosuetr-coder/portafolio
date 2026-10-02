'use client'

import Image                    from 'next/image'
import Link                     from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { gsap }                 from '@/lib/gsap'
import { SplitReveal }          from '@/components/ui/SplitReveal'
import { PROYECTOS, type Proyecto } from '@/lib/proyectos'

/* ----------------------------------------------------------
   Portafolio — índice editorial
   Escritorio: lista tipográfica + pantalla de proyección que
   cambia al pasar el cursor. Todo cabe en una sola pantalla.
   Móvil: lista compacta con miniatura.
---------------------------------------------------------- */
const TOTAL       = String(PROYECTOS.length).padStart(2, '0')
const MAX_CHIPS   = 4
const WIPE_SECS   = 0.75
const ZOOM_SECS   = 1.2

const pad = (n: number): string => String(n + 1).padStart(2, '0')

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Fila del índice ─────────────────────────────────────── */
interface RowProps {
  project:  Proyecto
  index:    number
  isActive: boolean
  onActivate: (i: number) => void
}

function IndexRow({ project, index, isActive, onActivate }: RowProps) {
  return (
    <li className="border-t border-white/[0.07] last:border-b">
      <Link
        href={`/proyectos/${project.slug}`}
        onMouseEnter={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        aria-label={`Ver proyecto: ${project.titulo}`}
        className="pf-row group/row relative flex items-center gap-4 lg:gap-6 py-4 lg:py-[clamp(0.8rem,1.6svh,1.25rem)] pr-2 outline-none transition-opacity duration-300 lg:group-hover/list:opacity-35 lg:hover:!opacity-100 focus-visible:!opacity-100"
      >
        {/* Barra de acento — crece desde la izquierda en la fila activa */}
        <span aria-hidden="true"
          className="hidden lg:block absolute left-0 top-0 h-[2px] w-full origin-left transition-transform duration-500"
          style={{ background: project.accent, transform: `scaleX(${isActive ? 1 : 0})`, transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }} />

        <span className="font-mono tabular-nums text-[0.68rem] tracking-[0.14em] w-6 shrink-0 transition-colors duration-300"
          style={{ color: isActive ? project.accent : 'rgba(160,178,188,0.4)' }}>
          {pad(index)}
        </span>

        <span className="flex-1 min-w-0">
          <span className={`block font-display font-black tracking-tight leading-[1.05] text-glacier transition-transform duration-500 lg:group-hover/row:translate-x-2 ${isActive ? 'lg:text-white' : 'lg:text-glacier/75'}`}
            style={{ fontSize: 'clamp(1.15rem, 2vw, 2.1rem)', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
            {project.titulo}
          </span>
          <span className="mt-1 block font-mono uppercase tracking-[0.16em] text-[0.56rem] lg:text-[0.58rem]"
            style={{ color: `${project.accent}b3` }}>
            {project.categoria}
          </span>
        </span>

        {/* Miniatura — solo móvil */}
        <span className="lg:hidden relative shrink-0 w-[5.5rem] aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
          <Image src={project.imagen} alt="" fill unoptimized sizes="88px"
            className="object-cover" style={{ objectPosition: project.mobilePos ?? 'center' }} />
        </span>

        <span className="hidden lg:block shrink-0 transition-all duration-300"
          style={{ color: project.accent, opacity: isActive ? 1 : 0, transform: `translateX(${isActive ? 0 : -8}px)` }}>
          <ArrowIcon />
        </span>
      </Link>
    </li>
  )
}

/* ── Pantalla de proyección (escritorio) ─────────────────── */
function CropMarks({ color }: { color: string }) {
  const base = 'absolute w-4 h-4 pointer-events-none transition-colors duration-500'
  const style = { borderColor: color }
  return (
    <>
      <span aria-hidden="true" className={`${base} -top-2 -left-2 border-t border-l`} style={style} />
      <span aria-hidden="true" className={`${base} -top-2 -right-2 border-t border-r`} style={style} />
      <span aria-hidden="true" className={`${base} -bottom-2 -left-2 border-b border-l`} style={style} />
      <span aria-hidden="true" className={`${base} -bottom-2 -right-2 border-b border-r`} style={style} />
    </>
  )
}

function Projector({ active }: { active: number }) {
  const layersRef = useRef<(HTMLDivElement | null)[]>([])
  const zRef      = useRef(1)
  const project   = PROYECTOS[active]

  /* Cada cambio: la nueva captura sube como una cortina sobre la anterior */
  useEffect(() => {
    const layer = layersRef.current[active]
    if (!layer) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    zRef.current += 1
    layer.style.zIndex = String(zRef.current)
    gsap.fromTo(layer,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: reduced ? 0 : WIPE_SECS, ease: 'expo.out', overwrite: true })
    const img = layer.querySelector('img')
    if (img && !reduced)
      gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: ZOOM_SECS, ease: 'expo.out', overwrite: true })
  }, [active])

  return (
    <div className="lg:sticky lg:top-28">
      {/* Lectura superior */}
      <div className="flex items-center justify-between mb-4 font-mono text-[0.6rem] uppercase tracking-[0.2em]">
        <span style={{ color: 'rgba(160,178,188,0.5)' }}>
          <span className="text-white tabular-nums">{pad(active)}</span> / {TOTAL}
        </span>
        <span className="flex items-center gap-2" style={{ color: project.liveUrl ? '#34d399' : 'rgba(160,178,188,0.5)' }}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.liveUrl ? 'bg-emerald-400 animate-pulse' : 'bg-silver/40'}`} />
          {project.liveUrl ? 'En vivo' : 'Caso de estudio'}
        </span>
      </div>

      {/* Pantalla */}
      <div className="relative">
        <CropMarks color={project.accent} />
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-void"
          style={{ boxShadow: `0 40px 90px rgba(0,0,0,0.6), 0 0 70px ${project.accentGlow}`, transition: 'box-shadow 600ms ease' }}>
          {PROYECTOS.map((p, i) => (
            <div key={p.slug}
              ref={(el) => { layersRef.current[i] = el }}
              className="absolute inset-0"
              style={{ clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)', zIndex: i === 0 ? 1 : 0 }}
              aria-hidden={i !== active}>
              <Image src={p.imagen} alt={`Captura de ${p.titulo}`} fill unoptimized
                sizes="(max-width: 1440px) 45vw, 620px"
                className="object-cover object-top" />
            </div>
          ))}
        </div>
      </div>

      {/* Ficha del proyecto — se reanima en cada cambio */}
      <div key={project.slug} className="animate-flow-in mt-6">
        <p className="text-[0.88rem] leading-relaxed line-clamp-3" style={{ color: 'rgba(160,178,195,0.8)' }}>
          {project.descripcionCorta}
        </p>
        <ul className="flex flex-wrap gap-1.5 mt-4" aria-label="Tecnologías principales">
          {project.tecnologias.slice(0, MAX_CHIPS).map((t) => (
            <li key={t} className="px-2.5 py-1 rounded-md font-mono text-[0.6rem] tracking-wide"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${project.accent}26`, color: 'rgba(215,225,232,0.75)' }}>
              {t}
            </li>
          ))}
          {project.tecnologias.length > MAX_CHIPS && (
            <li className="px-2 py-1 font-mono text-[0.6rem]" style={{ color: 'rgba(160,178,188,0.45)' }}>
              +{project.tecnologias.length - MAX_CHIPS}
            </li>
          )}
        </ul>
        <div className="flex items-center gap-5 mt-5">
          <Link href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold text-[0.65rem] tracking-widest uppercase transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: project.accent, color: '#030810' }}>
            Ver caso <ArrowIcon size={12} />
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase underline-offset-4 hover:underline"
              style={{ color: project.accent }}>
              Abrir sitio <ArrowIcon size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Sección ─────────────────────────────────────────────── */
export function Portfolio() {
  const [active, setActive] = useState(0)

  return (
    <section id="portafolio" className="relative section-pad" aria-labelledby="portafolio-title">
      <div className="site-container">
        <header className="flex flex-wrap items-end justify-between gap-4 mb-8 lg:mb-12">
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
          <p className="hidden lg:block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-silver/40 pb-2">
            {TOTAL} proyectos · pasa el cursor para ver cada uno
          </p>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 xl:gap-16 items-start">
          <ol className="group/list">
            {PROYECTOS.map((p, i) => (
              <IndexRow key={p.slug} project={p} index={i} isActive={i === active} onActivate={setActive} />
            ))}
          </ol>

          <div className="hidden lg:block">
            <Projector active={active} />
          </div>
        </div>
      </div>
    </section>
  )
}
