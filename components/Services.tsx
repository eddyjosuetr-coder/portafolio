'use client'

import { RevealSection } from '@/components/ui/RevealSection'
import { SplitReveal }   from '@/components/ui/SplitReveal'

/* ── Skill: ui-ux-pro-max ──────────────────────────────────
   Style: Liquid Glass + Modern Dark Cinema
   Easing: cubic-bezier(0.16,1,0.3,1) — expo.out
   Effects: backdrop-blur·saturate, iridescent gradient border,
            animated ambient blob, top-edge shimmer
─────────────────────────────────────────────────────────── */

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const SERVICES = [
  {
    num:   '01',
    id:    'fullstack',
    title: 'Desarrollo Web Full Stack',
    description:
      'Plataformas web de alto rendimiento construidas con las tecnologías adecuadas. Desde arquitecturas cloud hasta interfaces hiper-optimizadas.',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    /* accent colors for blob + border glow */
    blobColor:   'rgba(70,205,240,0.18)',
    borderColor: 'rgba(70,205,240,0.55)',
    tagColor:    'rgba(70,205,240,0.15)',
    tagBorder:   'rgba(70,205,240,0.25)',
    tagText:     '#7dd3fc',
  },
  {
    num:   '02',
    id:    'automation',
    title: 'Automatización y Flujos',
    description:
      'Conectamos tus aplicaciones y eliminamos tareas manuales. Operaciones empresariales que funcionan 24/7 sin intervención humana.',
    stack: ['n8n', 'Webhooks', 'APIs REST', 'Integraciones'],
    blobColor:   'rgba(125,211,252,0.14)',
    borderColor: 'rgba(125,211,252,0.50)',
    tagColor:    'rgba(125,211,252,0.12)',
    tagBorder:   'rgba(125,211,252,0.22)',
    tagText:     '#93c5fd',
  },
  {
    num:   '03',
    id:    'ai',
    title: 'Integración de IA',
    description:
      'Incorporamos los modelos de lenguaje más avanzados directamente en tus productos para amplificar la capacidad analítica de tu equipo.',
    stack: ['Claude AI', 'LangChain', 'RAG', 'Moonshot AI'],
    blobColor:   'rgba(167,139,250,0.16)',
    borderColor: 'rgba(167,139,250,0.50)',
    tagColor:    'rgba(167,139,250,0.12)',
    tagBorder:   'rgba(167,139,250,0.22)',
    tagText:     '#c4b5fd',
  },
]

/* ── Per-card animated SVG visuals ─────────────────────── */

function CodeVisual({ accent }: { accent: string }) {
  return (
    <div
      className="relative w-full h-36 overflow-hidden rounded-xl select-none"
      style={{
        background: 'rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-[7px] p-4 font-mono text-[11px] text-left">
        <div><span style={{ color: '#7dd3fc' }}>const</span> <span className="text-white/75">dev</span> <span className="text-white/35">=</span> <span style={{ color: '#86efac' }}>'Eddy Trejo'</span></div>
        <div><span style={{ color: '#7dd3fc' }}>async function</span> <span style={{ color: '#fbbf24' }}>deploy</span><span className="text-white/35">()</span> <span className="text-white/35">{'{'}</span></div>
        <div className="pl-4"><span style={{ color: '#7dd3fc' }}>await</span> <span className="text-white/55">build</span><span className="text-white/35">(config)</span></div>
        <div className="pl-4"><span style={{ color: '#7dd3fc' }}>await</span> <span className="text-white/55">push</span><span className="text-white/35">(</span><span style={{ color: '#86efac' }}>'prod'</span><span className="text-white/35">)</span></div>
        <div><span className="text-white/35">{'}'}</span></div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ background: accent }} />
          <span style={{ color: accent, opacity: 0.7 }}>Ready in 340ms</span>
        </div>
      </div>
      {/* scanline */}
      <div className="absolute inset-x-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg,transparent,${accent}40,transparent)`, animation: 'svc-scan 4s ease-in-out infinite', top: 0 }} />
    </div>
  )
}

function FlowVisual({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-36 overflow-hidden rounded-xl"
      style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
      aria-hidden="true">
      <svg viewBox="0 0 280 100" className="w-full h-full" fill="none">
        {[
          { x: 49, y: 28, label: 'Trigger' },
          { x: 49, y: 72, label: 'Email' },
          { x: 141, y: 50, label: 'IA' },
          { x: 231, y: 28, label: 'CRM' },
          { x: 231, y: 72, label: 'Slack' },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x - 28} y={n.y - 12} width={56} height={24} rx={6}
              fill={`${accent}14`} stroke={`${accent}45`} strokeWidth={0.8} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize={8} fontFamily="monospace">{n.label}</text>
          </g>
        ))}
        {[
          'M 77 28 C 101 28 116 50 113 50',
          'M 77 72 C 101 72 116 50 113 50',
          'M 169 50 C 191 50 203 28 203 28',
          'M 169 50 C 191 50 203 72 203 72',
        ].map((d, i) => (
          <path key={i} d={d} stroke={`${accent}50`} strokeWidth={1.2} strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" />
          </path>
        ))}
        <circle r="3" fill={accent}><animateMotion path="M 77 28 C 101 28 113 50 113 50" dur="1.8s" repeatCount="indefinite" /></circle>
        <circle r="2.5" fill={accent} opacity="0.7"><animateMotion path="M 169 50 C 191 50 203 28 203 28" dur="1.4s" repeatCount="indefinite" /></circle>
      </svg>
    </div>
  )
}

function NeuralVisual({ accent }: { accent: string }) {
  const dots = [
    { x: 37, y: 25 }, { x: 37, y: 50 }, { x: 37, y: 75 },
    { x: 102, y: 18 }, { x: 102, y: 40 }, { x: 102, y: 62 }, { x: 102, y: 82 },
    { x: 172, y: 30 }, { x: 172, y: 55 }, { x: 172, y: 75 },
    { x: 242, y: 40 }, { x: 242, y: 62 },
  ]
  const conns = [[0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],[3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],[7,10],[7,11],[8,10],[8,11],[9,11]]
  return (
    <div className="relative w-full h-36 overflow-hidden rounded-xl"
      style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
      aria-hidden="true">
      <svg viewBox="0 0 280 100" className="w-full h-full" fill="none">
        {conns.map(([a, b], i) => (
          <line key={i} x1={dots[a].x} y1={dots[a].y} x2={dots[b].x} y2={dots[b].y} stroke={`${accent}22`} strokeWidth={0.7} />
        ))}
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={i >= 10 ? 5 : 3.5}
            fill={i >= 10 ? accent : `${accent}55`} stroke={`${accent}70`} strokeWidth={0.5}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 4) * 0.5}s`} begin={`${(i % 5) * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  )
}

type Service = (typeof SERVICES)[number]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const visuals = [
    <CodeVisual   key="code"   accent={service.tagText} />,
    <FlowVisual   key="flow"   accent={service.tagText} />,
    <NeuralVisual key="neural" accent={service.tagText} />,
  ]

  return (
    <RevealSection delay={index * 0.14}>
      <article
        className="group relative flex flex-col items-center text-center gap-5 p-6 rounded-2xl overflow-hidden cursor-default"
        style={{
          background: 'rgba(14,22,31,0.55)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.07)',
          transition: `transform 450ms ${EASE}, box-shadow 450ms ${EASE}, border-color 450ms ${EASE}`,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-6px) scale(1.01)'
          el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px ${service.borderColor}, 0 0 40px ${service.blobColor}`
          el.style.borderColor = service.borderColor
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(0) scale(1)'
          el.style.boxShadow = 'none'
          el.style.borderColor = 'rgba(255,255,255,0.07)'
        }}
        aria-label={`Servicio: ${service.title}`}
      >
        {/* Ambient blob — slow oscillation */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle, ${service.blobColor} 0%, transparent 70%)`,
            filter: 'blur(24px)',
            animation: 'svc-blob 8s ease-in-out infinite',
            transition: `opacity 500ms ${EASE}`,
          }}
        />

        {/* Top-edge iridescent shimmer on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${service.borderColor} 40%, ${service.tagText} 50%, ${service.borderColor} 60%, transparent 100%)`,
            backgroundSize: '200% 100%',
            animation: 'svc-shimmer 2.5s linear infinite',
            transition: `opacity 400ms ${EASE}`,
          }}
        />

        {/* Card number */}
        <span className="text-[0.6rem] font-bold tracking-[0.22em] font-mono"
          style={{ color: service.tagText, opacity: 0.65 }}>
          {service.num}
        </span>

        {/* SVG Visual */}
        {visuals[index]}

        {/* Text content */}
        <div className="flex flex-col items-center gap-2.5">
          <h3 className="font-display text-[1.15rem] font-black text-white leading-tight tracking-tight">
            {service.title}
          </h3>
          <p className="text-[0.82rem] leading-relaxed" style={{ color: 'rgba(160,178,188,0.75)' }}>
            {service.description}
          </p>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-4 mt-auto border-t border-white/[0.06] w-full">
          {service.stack.map((tech) => (
            <span key={tech}
              className="px-2.5 py-1 rounded-md text-[0.6rem] font-mono font-medium tracking-wide"
              style={{
                background: service.tagColor,
                border: `1px solid ${service.tagBorder}`,
                color: service.tagText,
              }}>
              {tech}
            </span>
          ))}
        </div>
      </article>
    </RevealSection>
  )
}

export function Services() {
  return (
    <section id="servicios" className="section-pad relative" aria-labelledby="services-title">
      <div className="site-container relative z-10">

        <RevealSection className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glass bg-white/5 backdrop-blur-md mb-6">
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-silver">Especialidades</span>
          </div>
          <SplitReveal
            id="services-title"
            className="font-display font-black text-glacier tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Mis disciplinas <span className="text-accent">fundamentales</span>
          </SplitReveal>
          <p className="text-ink-dim text-lg max-w-2xl leading-relaxed">
            Tres pilares interconectados para construir ecosistemas digitales completos, escalables y autónomos.
          </p>
        </RevealSection>

        <div className="services-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
