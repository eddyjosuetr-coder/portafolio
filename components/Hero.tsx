'use client'

import { MagneticButton } from '@/components/ui/MagneticButton'

const PARTICLES = [
  { left: '62%', top: '60%', size: 3, delay: '0s',   dur: '9s'  },
  { left: '74%', top: '78%', size: 2, delay: '1.5s', dur: '11s' },
  { left: '88%', top: '55%', size: 2, delay: '3s',   dur: '13s' },
  { left: '66%', top: '40%', size: 2, delay: '4.5s', dur: '10s' },
  { left: '81%', top: '88%', size: 3, delay: '2.2s', dur: '12s' },
  { left: '92%', top: '70%', size: 2, delay: '6s',   dur: '14s' },
]


export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100svh',
        background: 'radial-gradient(120% 90% at 78% 28%, #122433 0%, #0c1825 38%, #0a121b 72%)',
      }}
      aria-label="Eddy Trejo — Presentación"
    >
      {/* ── Decorative grid lines ── */}
      <div className="pc-deco pointer-events-none absolute bottom-0 top-0"
        style={{ left: '57%', width: 1, background: 'linear-gradient(180deg, transparent, rgba(70,205,240,.10) 18%, rgba(70,205,240,.10) 82%, transparent)', animation: 'pc-line 7s ease-in-out infinite' }} />
      <div className="pc-deco pointer-events-none absolute left-0 right-0"
        style={{ top: '72%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(70,205,240,.07) 30%, rgba(70,205,240,.07) 70%, transparent)' }} />

      {/* ── Top-right bracket ── */}
      <div className="pointer-events-none absolute"
        style={{ top: 14, right: 14, width: 46, height: 46, borderTop: '2px solid rgba(70,205,240,.35)', borderRight: '2px solid rgba(70,205,240,.35)' }}
        aria-hidden="true" />

      {/* ── Floating micro-labels ── */}
      <div className="pc-deco pointer-events-none absolute text-right"
        style={{ top: '24%', right: '3.5%', fontSize: 10, letterSpacing: 2, lineHeight: 1.5, color: 'rgba(120,180,205,.42)' }}
        aria-hidden="true">
        INTELIGENCIA<br />ARTIFICIAL
      </div>
      <div className="pc-deco pointer-events-none absolute"
        style={{ top: '71%', left: '46%', fontSize: 10, letterSpacing: 2, lineHeight: 1.5, color: 'rgba(120,180,205,.30)' }}
        aria-hidden="true">
        AUTOMATIZACIÓN<br />AVANZADA
      </div>

      {/* ── Particles ── */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="pc-particle pointer-events-none absolute rounded-full"
          style={{
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            background: '#56d3f2',
            boxShadow: '0 0 6px #56d3f2',
            animation: `pc-drift ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Content grid ── */}
      <div
        className="pc-grid relative z-[2] mx-auto grid px-6"
        style={{
          maxWidth: 1180,
          gridTemplateColumns: '1.05fr .95fr',
          height: '100svh',
          paddingTop: 90,
          alignItems: 'stretch',
        }}
      >
        {/* LEFT — text */}
        <div className="pc-left self-center" style={{ padding: '30px 0 48px' }}>

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30,
            animation: 'pc-up .8s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.05s',
          }}>
            <span style={{ width: 36, height: 2, background: '#46cdf0', display: 'block', flexShrink: 0 }} aria-hidden="true" />
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '2.5px', color: '#46cdf0' }}>
              FULL STACK DEVELOPER &amp; AUTOMATIZACIÓN
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            margin: 0, fontWeight: 900, lineHeight: .9,
            letterSpacing: '-1.5px',
            fontSize: 'clamp(2.6rem, 4.8vw, 5.6rem)',
            textTransform: 'uppercase',
          }}>
            <span style={{ display: 'block', color: '#fff', animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.12s' }}>
              Eddy
            </span>
            <span style={{ display: 'block', color: '#46cdf0', animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.22s' }}>
              Josue
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(95deg, #46cdf0 8%, #9fb6c4 75%, #b9c6d0 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', color: 'transparent',
              animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.32s',
            }}>
              Trejo
            </span>
            <span style={{ display: 'block', color: '#fff', animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.42s' }}>
              Rubio.
            </span>
          </h1>

          {/* Lead */}
          <p style={{
            maxWidth: 430, margin: '30px 0 0',
            fontSize: 16.5, lineHeight: 1.62, fontWeight: 400, color: '#9fb2bf',
            animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.54s',
          }}>
            Full Stack Developer. Construyo plataformas web de alto rendimiento
            y automatizo operaciones con n8n e IA. Del código al detalle visual —
            llevo tu idea al siguiente nivel.
          </p>

          {/* CTAs */}
          <div className="pc-cta-row" style={{
            display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 38,
            animation: 'pc-up .9s cubic-bezier(.2,.7,.2,1) both', animationDelay: '.66s',
          }}>
            <MagneticButton>
              <a
                href="https://wa.me/584243840126"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar a Eddy Trejo por WhatsApp"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontSize: 15, fontWeight: 700, color: '#06222e', background: '#46cdf0',
                  textDecoration: 'none', padding: '17px 30px', borderRadius: 6,
                  boxShadow: '0 8px 26px rgba(70,205,240,.28)', whiteSpace: 'nowrap',
                }}
              >
                Hablemos
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
                </svg>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#portafolio"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  fontSize: 15, fontWeight: 700, color: '#dbe5ec', background: 'transparent',
                  textDecoration: 'none', padding: '17px 30px', borderRadius: 6,
                  border: '1px solid rgba(120,180,205,.28)', whiteSpace: 'nowrap',
                }}
              >
                Ver portafolio
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT — robot */}
        <div
          className="pc-robot-wrap self-end"
          style={{
            position: 'relative', height: '100%',
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'center', overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          {/* Atmospheric backdrop glow */}
          <div style={{
            position: 'absolute', left: '50%', top: '46%',
            width: 540, height: 540, maxWidth: '88vw', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(70,205,240,.30) 0%, rgba(70,205,240,.10) 42%, transparent 68%)',
            filter: 'blur(8px)',
            animation: 'pc-glow 5.5s ease-in-out infinite',
            pointerEvents: 'none',
          }} />

          {/* Gesture layer */}
          <div style={{
            position: 'relative', height: '100%', width: '100%',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            transformOrigin: '46% 38%',
            animation: 'pc-gesture 9s ease-in-out infinite',
            willChange: 'transform',
          }}>
            {/* Float layer */}
            <div style={{
              position: 'relative', height: '100%', width: '100%',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              animation: 'pc-float 5.5s ease-in-out infinite',
              willChange: 'transform',
            }}>
              {/* Image-sized box — eye glows are positioned relative to this */}
              <div style={{
                position: 'relative',
                height: 'clamp(520px, 90vh, 1100px)',
                marginBottom: '-12px',
                display: 'inline-flex',
                alignItems: 'flex-end',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/robot.png"
                  alt="Androide"
                  style={{
                    display: 'block', height: '100%', width: 'auto', objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 24px 50px rgba(0,0,0,.5))',
                  }}
                />

                {/* Eye glow: soft breathing baseline */}
                <div style={{
                  position: 'absolute', left: '18.9%', top: '45%',
                  width: 84, height: 84, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(120,225,250,.9) 0%, rgba(70,205,240,.4) 32%, transparent 66%)',
                  mixBlendMode: 'screen', filter: 'blur(4px)',
                  animation: 'pc-eye-breath 5.5s ease-in-out infinite',
                  pointerEvents: 'none',
                  transform: 'translate(-50%,-50%)',
                }} />

                {/* Eye glow: bright flash synced to gesture */}
                <div style={{
                  position: 'absolute', left: '18.9%', top: '45%',
                  width: 112, height: 112, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(160,240,255,1) 0%, rgba(70,205,240,.55) 30%, transparent 64%)',
                  mixBlendMode: 'screen', filter: 'blur(5px)',
                  animation: 'pc-eye-flash 9s ease-in-out infinite',
                  pointerEvents: 'none',
                  transform: 'translate(-50%,-50%)',
                }} />


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
