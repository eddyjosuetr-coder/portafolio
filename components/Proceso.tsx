'use client'

import { SplitReveal }   from '@/components/ui/SplitReveal'
import { RevealSection } from '@/components/ui/RevealSection'

const NODES = [
  {
    num: '01', type: 'TRIGGER', accent: '#46cdf0', bg: 'rgba(70,205,240,0.12)',
    title: 'Diagnóstico',
    desc: ['Mapeamos procesos y stack', 'para hallar oportunidades IA.'],
    checks: ['Análisis de procesos', 'Auditoría de stack', 'KPIs de impacto'],
  },
  {
    num: '02', type: 'PROCESS', accent: '#7dd3fc', bg: 'rgba(125,211,252,0.10)',
    title: 'Estrategia',
    desc: ['Arquitectura técnica y', 'roadmap por impacto real.'],
    checks: ['Arquitectura técnica', 'Roadmap priorizado', 'Estimaciones reales'],
  },
  {
    num: '03', type: 'BUILD', accent: '#a78bfa', bg: 'rgba(167,139,250,0.10)',
    title: 'Construcción',
    desc: ['Sprints semanales con', 'entregables verificables.'],
    checks: ['Sprints semanales', 'Code reviews', 'Testing continuo'],
  },
  {
    num: '04', type: 'OUTPUT', accent: '#34d399', bg: 'rgba(52,211,153,0.10)',
    title: 'Lanzamiento',
    desc: ['Deploy en producción con', 'monitoreo y acompañamiento.'],
    checks: ['Deploy producción', 'Monitoreo 24/7', 'Impacto medible'],
  },
]

/* viewBox dimensions */
const VW = 860, VH = 560

/* Node dimensions */
const NW = 240, NH = 220

/* Node positions (2×2 U-flow) */
const POS = [
  { x: 20,  y: 30  },   // 01 Diagnóstico  — top-left
  { x: 600, y: 30  },   // 02 Estrategia   — top-right
  { x: 600, y: 310 },   // 03 Construcción — bottom-right
  { x: 20,  y: 310 },   // 04 Lanzamiento  — bottom-left
]

/* Center Y of each row */
const MID_TOP = POS[0].y + NH / 2   // 30 + 110 = 140
const MID_BOT = POS[2].y + NH / 2   // 310 + 110 = 420

/* Connection paths */
// 1→2: right of node1 → left of node2
const P12 = `M ${POS[0].x + NW} ${MID_TOP} C ${POS[0].x + NW + 130} ${MID_TOP - 15} ${POS[1].x - 130} ${MID_TOP + 15} ${POS[1].x} ${MID_TOP}`
// 2→3: right of node2 → right of node3 (right-side U-turn)
const P23 = `M ${POS[1].x + NW} ${MID_TOP} C ${POS[1].x + NW + 80} ${MID_TOP} ${POS[2].x + NW + 80} ${MID_BOT} ${POS[2].x + NW} ${MID_BOT}`
// 3→4: left of node3 → right of node4 (horizontal S-curve)
const P34 = `M ${POS[2].x} ${MID_BOT} C ${POS[2].x - 130} ${MID_BOT + 15} ${POS[3].x + NW + 130} ${MID_BOT - 15} ${POS[3].x + NW} ${MID_BOT}`

export function Proceso() {
  return (
    <section
      id="proceso"
      className="section-pad relative overflow-hidden"
      aria-labelledby="proceso-title"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(66,192,245,0.03) 0%, transparent 65%)' }}
        aria-hidden="true" />

      <div className="site-container relative z-10">

        {/* Header */}
        <RevealSection className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glass bg-white/5 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" aria-hidden="true" />
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-silver">Metodología</span>
          </div>
          <SplitReveal id="proceso-title"
            className="font-display font-black text-glacier tracking-tight mb-4 max-w-2xl"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}>
            Cómo construyo <span className="text-accent">tus resultados</span>
          </SplitReveal>
          <p className="text-ink-dim text-lg max-w-xl leading-relaxed">
            Un workflow probado en cuatro fases que convierte tu visión en infraestructura digital funcional.
          </p>
        </RevealSection>

        {/* ══ DESKTOP: n8n Canvas ══ */}
        <RevealSection className="hidden lg:block">
          <div className="rounded-2xl overflow-hidden border border-white/10"
            style={{ background: 'rgba(5,9,14,0.92)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>

            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]"
              style={{ background: 'rgba(8,12,18,0.8)' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[0.58rem] text-white/20 tracking-wider">eddy-automation.json</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[0.55rem] text-emerald-400/60 tracking-widest">ACTIVE</span>
              </div>
            </div>

            {/* SVG Canvas */}
            <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-auto" style={{ overflow: 'visible' }}
              role="img" aria-label="Workflow de metodología de Eddy Trejo con 4 nodos conectados">
              <defs>
                <pattern id="n8n-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="0.5" cy="0.5" r="0.9" fill="rgba(160,178,188,0.06)" />
                </pattern>
              </defs>

              {/* Canvas background */}
              <rect width={VW} height={VH} fill="url(#n8n-grid)" />

              {/* ── Connections ── */}
              {/* 1→2 */}
              <path d={P12} stroke="rgba(125,211,252,0.30)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" />
              <path d={P12} stroke="rgba(125,211,252,0.08)" strokeWidth="5" fill="none" />
              <circle r="4.5" fill="#7dd3fc" opacity="0.9"><animateMotion dur="1.7s" repeatCount="indefinite" path={P12} /></circle>
              <circle r="3" fill="#7dd3fc" opacity="0.45"><animateMotion dur="1.7s" begin="-0.85s" repeatCount="indefinite" path={P12} /></circle>

              {/* 2→3 */}
              <path d={P23} stroke="rgba(167,139,250,0.30)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" />
              <path d={P23} stroke="rgba(167,139,250,0.08)" strokeWidth="5" fill="none" />
              <circle r="4.5" fill="#a78bfa" opacity="0.9"><animateMotion dur="2.1s" repeatCount="indefinite" path={P23} /></circle>
              <circle r="3" fill="#a78bfa" opacity="0.45"><animateMotion dur="2.1s" begin="-1.05s" repeatCount="indefinite" path={P23} /></circle>

              {/* 3→4 */}
              <path d={P34} stroke="rgba(52,211,153,0.30)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" />
              <path d={P34} stroke="rgba(52,211,153,0.08)" strokeWidth="5" fill="none" />
              <circle r="4.5" fill="#34d399" opacity="0.9"><animateMotion dur="2.6s" repeatCount="indefinite" path={P34} /></circle>
              <circle r="3" fill="#34d399" opacity="0.45"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path={P34} /></circle>

              {/* ── Nodes ── */}
              {NODES.map((node, i) => {
                const { x, y } = POS[i]
                const { accent, num, type, title, desc, checks } = node
                const midY = NH / 2
                const isFirst = i === 0
                const isLast = i === 3

                return (
                  <g key={num}>
                    {/* Shadow */}
                    <rect x={x + 4} y={y + 6} width={NW} height={NH} rx="10" fill="rgba(0,0,0,0.5)" />

                    {/* Body */}
                    <rect x={x} y={y} width={NW} height={NH} rx="10"
                      fill="rgba(8,14,22,0.97)" stroke={`${accent}30`} strokeWidth="1" />

                    {/* Header */}
                    <rect x={x} y={y} width={NW} height={44} rx="10" fill={`${accent}18`} />
                    <rect x={x} y={y + 34} width={NW} height={10} fill={`${accent}18`} />
                    <rect x={x} y={y + 44} width={NW} height={1} fill={`${accent}22`} />

                    {/* Type label */}
                    <text x={x + 12} y={y + 27} fill={accent}
                      fontSize="9" fontWeight="700" fontFamily="'Courier New',monospace" letterSpacing="2.5">
                      {type}
                    </text>

                    {/* Step number */}
                    <text x={x + NW - 32} y={y + 27} fill={`${accent}50`}
                      fontSize="9" fontFamily="'Courier New',monospace">{num}</text>

                    {/* Live dot */}
                    <circle cx={x + NW - 15} cy={y + 22} r="5" fill={accent}>
                      <animate attributeName="opacity" values="1;0.2;1"
                        dur="2.2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </circle>

                    {/* Title */}
                    <text x={x + 12} y={y + 68} fill="white"
                      fontSize="15" fontWeight="900" fontFamily="system-ui,-apple-system,sans-serif">
                      {title}
                    </text>

                    {/* Description */}
                    {desc.map((line, j) => (
                      <text key={j} x={x + 12} y={y + 88 + j * 15} fill="rgba(160,178,188,0.5)"
                        fontSize="9.5" fontFamily="system-ui,sans-serif">{line}</text>
                    ))}

                    {/* Divider */}
                    <line x1={x + 12} y1={y + 122} x2={x + NW - 12} y2={y + 122}
                      stroke={`${accent}15`} strokeWidth="0.5" />

                    {/* Check items */}
                    {checks.map((check, j) => {
                      const iy = y + 140 + j * 24
                      return (
                        <g key={j}>
                          <rect x={x + 12} y={iy - 10} width="14" height="14" rx="3"
                            fill={`${accent}18`} stroke={`${accent}35`} strokeWidth="0.5" />
                          <path
                            d={`M ${x + 14} ${iy - 4} L ${x + 17} ${iy} L ${x + 24.5} ${iy - 7}`}
                            stroke={accent} strokeWidth="1.5" fill="none"
                            strokeLinecap="round" strokeLinejoin="round" />
                          <text x={x + 32} y={iy + 2} fill="rgba(160,178,188,0.48)"
                            fontSize="8.5" fontFamily="'Courier New',monospace">{check}</text>
                        </g>
                      )
                    })}

                    {/* Node 1: Right output */}
                    {i === 0 && (
                      <g>
                        <circle cx={x + NW} cy={y + midY} r="7" fill={NODES[1].accent} />
                        <circle cx={x + NW} cy={y + midY} r="4" fill="rgba(8,14,22,0.97)" />
                        <circle cx={x + NW} cy={y + midY} r="1.8" fill={NODES[1].accent} />
                      </g>
                    )}

                    {/* Node 2: Left input & Right output */}
                    {i === 1 && (
                      <g>
                        {/* Left Input */}
                        <circle cx={x} cy={y + midY} r="7" fill="rgba(8,14,22,0.97)" stroke={accent} strokeWidth="1.5" />
                        <circle cx={x} cy={y + midY} r="3" fill={accent} opacity="0.65" />
                        {/* Right Output */}
                        <circle cx={x + NW} cy={y + midY} r="7" fill={NODES[2].accent} />
                        <circle cx={x + NW} cy={y + midY} r="4" fill="rgba(8,14,22,0.97)" />
                        <circle cx={x + NW} cy={y + midY} r="1.8" fill={NODES[2].accent} />
                      </g>
                    )}

                    {/* Node 3: Right input & Left output */}
                    {i === 2 && (
                      <g>
                        {/* Right Input */}
                        <circle cx={x + NW} cy={y + midY} r="7" fill="rgba(8,14,22,0.97)" stroke={accent} strokeWidth="1.5" />
                        <circle cx={x + NW} cy={y + midY} r="3" fill={accent} opacity="0.65" />
                        {/* Left Output */}
                        <circle cx={x} cy={y + midY} r="7" fill={NODES[3].accent} />
                        <circle cx={x} cy={y + midY} r="4" fill="rgba(8,14,22,0.97)" />
                        <circle cx={x} cy={y + midY} r="1.8" fill={NODES[3].accent} />
                      </g>
                    )}

                    {/* Node 4: Right input */}
                    {i === 3 && (
                      <g>
                        {/* Right Input */}
                        <circle cx={x + NW} cy={y + midY} r="7" fill="rgba(8,14,22,0.97)" stroke={accent} strokeWidth="1.5" />
                        <circle cx={x + NW} cy={y + midY} r="3" fill={accent} opacity="0.65" />
                      </g>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>
        </RevealSection>

        {/* ══ MOBILE: stacked cards (Animated) ══ */}
        <div className="lg:hidden flex flex-col items-center max-w-lg mx-auto w-full gap-2">
          {NODES.map((node, i) => (
            <RevealSection key={node.num} delay={i * 0.15} className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: 'rgba(12,18,28,0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${node.accent}35`
                }}>
                
                {/* Ambient glow behind the text inside the card */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: node.accent }} />

                <div className="relative z-10 flex items-center justify-between px-5 py-3.5"
                  style={{ background: node.bg, borderBottom: `1px solid ${node.accent}22` }}>
                  <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em]" style={{ color: node.accent }}>{node.type}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.6rem]" style={{ color: `${node.accent}75` }}>{node.num}</span>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: node.accent, boxShadow: `0 0 8px ${node.accent}` }} />
                  </div>
                </div>
                
                <div className="relative z-10 px-5 py-5">
                  <h3 className="font-display font-black text-white text-lg mb-2">{node.title}</h3>
                  <p className="text-[0.85rem] mb-5 leading-relaxed" style={{ color: 'rgba(160,178,188,0.65)' }}>{node.desc.join(' ')}</p>
                  
                  <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: `${node.accent}15` }}>
                    {node.checks.map(c => (
                      <div key={c} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded shrink-0 flex items-center justify-center"
                          style={{ background: `${node.accent}18`, border: `1px solid ${node.accent}38` }}>
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4L3 6L7 2" stroke={node.accent} strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <span className="font-mono text-[0.65rem]" style={{ color: 'rgba(160,178,188,0.6)' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Connector Line to next node */}
              {i < NODES.length - 1 && (
                <div className="flex justify-center w-full h-14 relative my-1">
                  <svg viewBox="0 0 10 56" className="w-2.5 h-full" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`mob-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={node.accent} />
                        <stop offset="100%" stopColor={NODES[i+1].accent} />
                      </linearGradient>
                    </defs>
                    <path d="M 5 0 L 5 56" stroke={`url(#mob-grad-${i})`} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                    <circle r="2.5" fill={node.accent}>
                      <animateMotion dur="1.5s" repeatCount="indefinite" path="M 5 0 L 5 56" />
                    </circle>
                  </svg>
                </div>
              )}
            </RevealSection>
          ))}
        </div>

        {/* Quote */}
        <RevealSection delay={0.2} className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3.5 rounded-xl border border-glass bg-white/[0.03] backdrop-blur-md">
            <div className="w-0.5 h-8 rounded-full bg-gradient-to-b from-accent to-accent-deep shrink-0" />
            <p className="text-ink-dim/75 text-sm leading-relaxed max-w-md">
              Cada fase termina con entregables verificables. Nunca pagas por trabajo que no puedes medir.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
