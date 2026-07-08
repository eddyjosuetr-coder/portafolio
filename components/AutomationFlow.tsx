'use client'

import { RevealSection } from '@/components/ui/RevealSection'
import { SplitReveal }   from '@/components/ui/SplitReveal'

/* ----------------------------------------------------------
   Nodos del flujo en el canvas
   Posiciones en un viewBox de 560 × 240
---------------------------------------------------------- */
const NODES = [
  { id: 't1', x: 24, y: 70, w: 120, h: 50, label: 'Webhook', sub: 'stripe · shopify', type: 'default' },
  { id: 't2', x: 24, y: 190, w: 120, h: 50, label: 'Email Entrante', sub: 'gmail · outlook', type: 'default' },
  { id: 't3', x: 24, y: 310, w: 120, h: 50, label: 'Cron (Diario)', sub: 'schedule', type: 'default' },

  { id: 'p1', x: 200, y: 70, w: 140, h: 50, label: 'Extraer CRM', sub: 'hubspot', type: 'default' },
  { id: 'p2', x: 200, y: 250, w: 140, h: 50, label: 'Clasificar Texto', sub: 'aws textract', type: 'default' },

  { id: 'ai1', x: 390, y: 160, w: 150, h: 54, label: 'Cerebro IA', sub: 'gpt-4o · claude', type: 'ai' },

  { id: 'r1', x: 590, y: 100, w: 130, h: 50, label: 'Enrutador', sub: 'if/else', type: 'default' },
  { id: 'r2', x: 590, y: 220, w: 130, h: 50, label: 'Generar PDF', sub: 'html to pdf', type: 'default' },

  { id: 'o1', x: 770, y: 70, w: 130, h: 50, label: 'Actualizar Pipeline', sub: 'crm.update', type: 'default' },
  { id: 'o2', x: 770, y: 150, w: 130, h: 50, label: 'Alerta a Ventas', sub: 'slack.send', type: 'default' },
  { id: 'o3', x: 770, y: 250, w: 130, h: 50, label: 'Guardar Nube', sub: 'gdrive', type: 'default' },
]

/* ----------------------------------------------------------
   Mobile — terminal execution aesthetic
---------------------------------------------------------- */
const RUN_STEPS = [
  { id: 'triggers',    label: 'TRIGGER LAYER',  ms: '12ms',  color: '#42C0F5', lines: ['webhook.stripe.com', 'mail.google.com → inbox', 'cron: 0 9 * * *'] },
  { id: 'processing',  label: 'PROCESSING',     ms: '84ms',  color: '#7dd3fc', lines: ['crm.extract(hubspot)', 'text.classify(aws.textract)'] },
  { id: 'ai',          label: 'AI CEREBRO',     ms: '231ms', color: '#a78bfa', lines: ['model: gpt-4o + claude-3.5', 'decision latency: <200ms'], ai: true },
  { id: 'router',      label: 'ROUTER',         ms: '5ms',   color: '#c4b5fd', lines: ['branch: if/else conditional', 'generate.pdf(template)'] },
  { id: 'outputs',     label: 'OUTPUT STACK',   ms: '18ms',  color: '#34d399', lines: ['crm.pipeline.update()', 'slack.send(#ventas)', 'gdrive.save(report)'], done: true },
]

function MobileFlow() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(6,10,16,0.97)',
        border: '1px solid rgba(66,192,245,0.12)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* ── Window chrome ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,87,0.55)' }} aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.55)' }} aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.55)' }} aria-hidden="true" />
        </div>
        <span className="font-mono text-[0.52rem] tracking-[0.18em] uppercase"
          style={{ color: 'rgba(160,178,188,0.3)' }}>
          eddy — automation.run
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[0.48rem] tracking-widest text-emerald-400">LIVE</span>
        </div>
      </div>

      {/* ── Prompt ── */}
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono" style={{ fontSize: '0.6rem', color: 'rgba(160,178,188,0.35)' }}>
          <span style={{ color: '#42C0F5' }}>eddy</span>
          <span style={{ color: 'rgba(160,178,188,0.25)' }}>@engine:~$</span>
          <span style={{ color: 'rgba(226,229,239,0.55)' }}> run workflow --env prod</span>
        </p>
      </div>

      {/* ── Steps ── */}
      <div className="px-4 pb-4 flex flex-col gap-px">
        {RUN_STEPS.map((step, i) => (
          <div key={step.id}>
            {/* Step header row */}
            <div className="flex items-center gap-2 pt-3 pb-1.5">
              {/* Index */}
              <span className="font-mono shrink-0"
                style={{ fontSize: '0.52rem', color: 'rgba(160,178,188,0.22)', letterSpacing: '0.08em' }}>
                [{String(i + 1).padStart(2,'0')}]
              </span>
              {/* Label */}
              <span className="font-mono font-bold tracking-[0.12em]"
                style={{ fontSize: '0.62rem', color: step.color }}>
                {step.label}
              </span>
              {/* AI badge */}
              {step.ai && (
                <span className="font-mono font-bold tracking-[0.16em] px-1.5 py-px rounded"
                  style={{
                    fontSize: '0.44rem',
                    background: `${step.color}22`,
                    color: step.color,
                    border: `1px solid ${step.color}35`,
                  }}>
                  MODEL
                </span>
              )}
              {/* Timing — right-aligned */}
              <span className="ml-auto font-mono shrink-0"
                style={{ fontSize: '0.5rem', color: 'rgba(160,178,188,0.22)' }}>
                {step.ms}
              </span>
            </div>

            {/* Separator rule */}
            <div className="w-full h-px mb-2" style={{ background: `${step.color}18` }} aria-hidden="true" />

            {/* Lines */}
            <div className="flex flex-col gap-1 pl-6">
              {step.lines.map((line) => (
                <p key={line} className="font-mono flex items-start gap-2"
                  style={{ fontSize: '0.58rem', color: step.ai ? `${step.color}bb` : 'rgba(160,178,188,0.5)' }}>
                  <span style={{ color: step.done ? '#34d399' : `${step.color}60`, flexShrink: 0 }}>
                    {step.done ? '✓' : '→'}
                  </span>
                  {line}
                </p>
              ))}
            </div>

            {/* AI block — full-width glow treatment */}
            {step.ai && (
              <div className="mt-3 mx-0 rounded-xl px-3 py-2.5 overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, ${step.color}14, ${step.color}06)`,
                  border: `1px solid ${step.color}30`,
                  boxShadow: `0 0 24px ${step.color}12`,
                }}>
                <div className="absolute inset-x-0 top-0 h-px"
                  aria-hidden="true"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)` }} />
                <p className="font-mono"
                  style={{ fontSize: '0.52rem', color: `${step.color}70`, letterSpacing: '0.1em' }}>
                  INFERENCE ACTIVE — reasoning tokens streaming...
                </p>
                <div className="flex gap-px mt-2" aria-hidden="true">
                  {Array.from({ length: 28 }).map((_, k) => (
                    <div key={k} className="flex-1 rounded-sm"
                      style={{
                        height: `${4 + Math.sin(k * 0.9) * 3 + Math.cos(k * 0.4) * 2}px`,
                        background: `${step.color}${k % 3 === 0 ? '60' : k % 3 === 1 ? '35' : '20'}`,
                      }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* ── Footer result ── */}
        <div className="pt-4 mt-1 border-t" style={{ borderColor: 'rgba(52,211,153,0.15)' }}>
          <p className="font-mono" style={{ fontSize: '0.58rem', color: 'rgba(52,211,153,0.65)' }}>
            ✓ &nbsp;workflow completed in 350ms &nbsp;·&nbsp; 5 nodes &nbsp;·&nbsp; 0 errors
          </p>
          <p className="font-mono mt-1" style={{ fontSize: '0.52rem', color: 'rgba(160,178,188,0.22)' }}>
            <span style={{ color: '#42C0F5' }}>eddy</span>
            <span style={{ color: 'rgba(160,178,188,0.2)' }}>@engine:~$</span>
            <span className="inline-block w-1.5 h-3 ml-1 align-middle animate-pulse"
              style={{ background: 'rgba(160,178,188,0.4)', borderRadius: '1px' }}
              aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------
   Canvas interactivo
---------------------------------------------------------- */
function FlowCanvas() {
  return (
    <div className="relative w-full overflow-x-auto rounded-3xl bg-white/5 backdrop-blur-2xl border border-glass p-8 shadow-2xl">
      {/* Glow ambiental dentro del canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-glow/5 to-transparent pointer-events-none rounded-3xl" />

      {/* SVG con nodos y aristas */}
      <div className="relative min-w-[640px] sm:min-w-[940px] max-w-[1100px] mx-auto">
        <svg
          viewBox="0 0 940 400"
          className="w-full h-auto drop-shadow-2xl"
          aria-label="Diagrama de flujo de automatización"
        >
          <defs>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="gradient-line" x1="0" y1="0" x2="940" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A0B2BC" />
              <stop offset="100%" stopColor="#C4D8E4" />
            </linearGradient>
          </defs>

          {/* Animated Connecting Lines simulating n8n */}
          {/* E1 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 144 95 C 144 95 144 95 144 95; M 144 95 C 144 95 144 95 144 95; M 144 95 C 169 95 175 95 200 95; M 144 95 C 169 95 175 95 200 95; M 144 95 C 144 95 144 95 144 95" keyTimes="0; 0.04; 0.08; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.039; 0.04; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E2 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 144 215 C 144 215 144 215 144 215; M 144 215 C 144 215 144 215 144 215; M 144 215 C 169 215 175 275 200 275; M 144 215 C 169 215 175 275 200 275; M 144 215 C 144 215 144 215 144 215" keyTimes="0; 0.14; 0.18; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.139; 0.14; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E3 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 144 335 C 144 335 144 335 144 335; M 144 335 C 144 335 144 335 144 335; M 144 335 C 169 335 175 275 200 275; M 144 335 C 169 335 175 275 200 275; M 144 335 C 144 335 144 335 144 335" keyTimes="0; 0.24; 0.28; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.239; 0.24; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E4 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 340 95 C 340 95 340 95 340 95; M 340 95 C 340 95 340 95 340 95; M 340 95 C 365 95 365 187 390 187; M 340 95 C 365 95 365 187 390 187; M 340 95 C 340 95 340 95 340 95" keyTimes="0; 0.34; 0.38; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.339; 0.34; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E5 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 340 275 C 340 275 340 275 340 275; M 340 275 C 340 275 340 275 340 275; M 340 275 C 365 275 365 187 390 187; M 340 275 C 365 275 365 187 390 187; M 340 275 C 340 275 340 275 340 275" keyTimes="0; 0.44; 0.48; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.439; 0.44; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E6 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 540 187 C 540 187 540 187 540 187; M 540 187 C 540 187 540 187 540 187; M 540 187 C 565 187 565 125 590 125; M 540 187 C 565 187 565 125 590 125; M 540 187 C 540 187 540 187 540 187" keyTimes="0; 0.54; 0.58; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.539; 0.54; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E7 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 540 187 C 540 187 540 187 540 187; M 540 187 C 540 187 540 187 540 187; M 540 187 C 565 187 565 245 590 245; M 540 187 C 565 187 565 245 590 245; M 540 187 C 540 187 540 187 540 187" keyTimes="0; 0.64; 0.68; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.639; 0.64; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E8 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 720 125 C 720 125 720 125 720 125; M 720 125 C 720 125 720 125 720 125; M 720 125 C 745 125 745 95 770 95; M 720 125 C 745 125 745 95 770 95; M 720 125 C 720 125 720 125 720 125" keyTimes="0; 0.74; 0.78; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.739; 0.74; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E9 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 720 125 C 720 125 720 125 720 125; M 720 125 C 720 125 720 125 720 125; M 720 125 C 745 125 745 175 770 175; M 720 125 C 745 125 745 175 770 175; M 720 125 C 720 125 720 125 720 125" keyTimes="0; 0.84; 0.88; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.839; 0.84; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>
          {/* E10 */}
          <path stroke="url(#gradient-line)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <animate attributeName="d" values="M 720 245 C 720 245 720 245 720 245; M 720 245 C 720 245 720 245 720 245; M 720 245 C 745 245 745 275 770 275; M 720 245 C 745 245 745 275 770 275; M 720 245 C 720 245 720 245 720 245" keyTimes="0; 0.94; 0.98; 0.99; 1" dur="20s" repeatCount="indefinite" calcMode="linear" />
            <animate attributeName="opacity" values="0; 0; 1; 1; 0; 0" keyTimes="0; 0.939; 0.94; 0.99; 0.991; 1" dur="20s" repeatCount="indefinite" />
          </path>

          {/* Nodos */}
          {NODES.map((node) => (
            <g key={node.id}>
              {/* Fondo del nodo */}
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx="12"
                fill={node.type === 'ai' ? 'rgba(255,255,255,0.1)' : 'rgba(10,15,25,0.6)'}
                stroke={node.type === 'ai' ? 'rgba(196,216,228,0.5)' : 'rgba(255,255,255,0.1)'}
                strokeWidth="1.5"
                filter="url(#softGlow)"
              />

              {/* Texto principal */}
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 - 5}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="11"
                fontFamily="'Satoshi', sans-serif"
                fontWeight="700"
              >
                {node.label}
              </text>

              {/* Subtexto */}
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 + 10}
                textAnchor="middle"
                fill={node.type === 'ai' ? '#C4D8E4' : '#9BAAB8'}
                fontSize="8"
                fontFamily="'Work Sans', sans-serif"
                fontWeight="400"
              >
                {node.sub}
              </text>

              {/* Dot derecho */}
              {node.id !== 'crm' && node.id !== 'notify' && (
                <circle
                  cx={node.x + node.w}
                  cy={node.y + node.h / 2}
                  r="4"
                  fill="#C4D8E4"
                  className="animate-pulse"
                />
              )}

              {/* Dot izquierdo */}
              {node.id !== 'trigger' && (
                <circle
                  cx={node.x}
                  cy={node.y + node.h / 2}
                  r="4"
                  fill="rgba(255,255,255,0.4)"
                />
              )}
            </g>
          ))}

          {/* Simulated Mouse Cursor for the "Video" effect */}
          <g style={{ pointerEvents: 'none' }}>
            <path d="M 0 0 L 14 14 L 8 14 L 4 21 L 1 19 L 5 12 L 0 12 Z" fill="#ffffff" stroke="#000000" strokeWidth="1" strokeLinejoin="round" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="100 160; 144 95; 144 95; 200 95; 200 95; 144 215; 144 215; 200 275; 200 275; 144 335; 144 335; 200 275; 200 275; 340 95; 340 95; 390 187; 390 187; 340 275; 340 275; 390 187; 390 187; 540 187; 540 187; 590 125; 590 125; 540 187; 540 187; 590 245; 590 245; 720 125; 720 125; 770 95; 770 95; 720 125; 720 125; 770 175; 770 175; 720 245; 720 245; 770 275; 820 300; 100 160"
              keyTimes="0; 0.01; 0.04; 0.08; 0.1; 0.12; 0.14; 0.18; 0.2; 0.22; 0.24; 0.28; 0.3; 0.32; 0.34; 0.38; 0.4; 0.42; 0.44; 0.48; 0.5; 0.52; 0.54; 0.58; 0.6; 0.62; 0.64; 0.68; 0.7; 0.72; 0.74; 0.78; 0.8; 0.82; 0.84; 0.88; 0.9; 0.92; 0.94; 0.98; 0.99; 1"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0; 1; 1; 1; 0"
              keyTimes="0; 0.01; 0.98; 0.99; 1"
              dur="20s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------
   Sección Automatización e IA
---------------------------------------------------------- */
export function AutomationFlow() {
  return (
    <section
      id="automatizacion"
      className="section-pad relative overflow-hidden"
      aria-labelledby="auto-title"
    >
      <div className="site-container relative z-10">
        <RevealSection className="mb-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glass bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-glow animate-pulse" />
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-silver">Inteligencia Autónoma</span>
          </div>
          
          <SplitReveal
            id="auto-title"
            className="font-display font-black text-white tracking-tight mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Flujos de trabajo que piensan y <span className="text-accent">se ejecutan solos.</span>
          </SplitReveal>
          <p className="text-ink-dim text-lg max-w-2xl leading-relaxed">
            Conectamos tus herramientas, automatizamos las tareas repetitivas
            e integramos los mejores modelos de IA para que tu equipo se enfoque
            en el impacto real de tu negocio.
          </p>
        </RevealSection>

        {/* ── Desktop: full SVG canvas ── */}
        <RevealSection delay={0.2} className="hidden md:block">
          <FlowCanvas />
        </RevealSection>

        {/* ── Mobile: vertical pipeline ── */}
        <RevealSection delay={0.2} className="md:hidden">
          <MobileFlow />
        </RevealSection>

        {/* Bullets de valor */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            {
              title: 'Integración Inmediata',
              desc:  'Conectamos con más de 400 herramientas del ecosistema empresarial.',
            },
            {
              title: 'Modelos Cognitivos',
              desc:  'Implementamos IA de vanguardia para decisiones lógicas en milisegundos.',
            },
            {
              title: 'Escalabilidad Pura',
              desc:  'Arquitectura robusta que soporta desde 10 hasta millones de ejecuciones.',
            },
          ].map((item, i) => (
            <RevealSection key={item.title} delay={0.3 + i * 0.1}>
              <div className="flex flex-col gap-3 items-center text-center">
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-ink-dim text-base leading-relaxed">{item.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
