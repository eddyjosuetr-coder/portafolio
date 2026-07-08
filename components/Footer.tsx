'use client'

import Image from 'next/image'

/* ----------------------------------------------------------
   Data
---------------------------------------------------------- */
const NAV = [
  { label: 'Portafolio',     href: '#portafolio' },
  { label: 'Automatización', href: '#automatizacion' },
  { label: 'Servicios',      href: '#servicios' },
]

const SOCIAL = [
  {
    label: 'GitHub',
    href:  'https://github.com/eddyjosuetr-coder',
    hoverColor: '#ffffff',
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/eddy-trejo-180002315/',
    hoverColor: '#0A66C2',
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href:  'https://wa.me/584243840126',
    hoverColor: '#25D366',
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    ),
  },
]

/* ----------------------------------------------------------
   Footer — CTA hero + info bar
---------------------------------------------------------- */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      role="contentinfo"
      aria-label="Contacto y pie de página"
      className="relative overflow-hidden"
      style={{ background: '#030810' }}
    >
      {/* ── Atmospheric glow orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Cyan orb — top center-left */}
        <div className="absolute rounded-full"
          style={{
            width: '70vw', height: '70vw',
            maxWidth: '900px', maxHeight: '900px',
            top: '-20%', left: '5%',
            background: 'radial-gradient(circle, rgba(70,205,240,0.12) 0%, rgba(70,205,240,0.04) 45%, transparent 70%)',
            filter: 'blur(2px)',
          }} />
        {/* Warm accent orb — bottom right */}
        <div className="absolute rounded-full"
          style={{
            width: '50vw', height: '50vw',
            maxWidth: '700px', maxHeight: '700px',
            bottom: '10%', right: '-5%',
            background: 'radial-gradient(circle, rgba(37,211,102,0.07) 0%, rgba(37,211,102,0.02) 45%, transparent 70%)',
            filter: 'blur(2px)',
          }} />
        {/* Deep teal orb — center */}
        <div className="absolute rounded-full"
          style={{
            width: '60vw', height: '60vw',
            maxWidth: '800px', maxHeight: '800px',
            top: '30%', left: '30%',
            background: 'radial-gradient(circle, rgba(14,80,120,0.18) 0%, transparent 65%)',
          }} />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

        {/* Top gradient fade from page content */}
        <div className="absolute inset-x-0 top-0 h-32"
          style={{ background: 'linear-gradient(to bottom, rgba(10,18,27,1) 0%, transparent 100%)' }} />
      </div>

      {/* ════════════════════════════════════════════
          CTA HERO — "¿Construimos algo?"
      ════════════════════════════════════════════ */}
      <div className="relative z-10 pt-28 pb-20 text-center px-4">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 mx-auto"
          style={{
            background: 'rgba(37,211,102,0.08)',
            border: '1px solid rgba(37,211,102,0.22)',
          }}>
          <span className="w-2 h-2 rounded-full" style={{ background: '#25D366', boxShadow: '0 0 8px #25D36688' }} />
          <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase" style={{ color: '#25D366' }}>
            Disponible para proyectos remotos
          </span>
        </div>

        {/* MEGA headline */}
        <h2
          className="font-display font-black leading-[0.92] tracking-tight mx-auto"
          style={{ fontSize: 'clamp(3.2rem, 9.5vw, 10rem)', maxWidth: '1100px' }}
        >
          <span className="block text-white">¿Construimos</span>
          <span className="block" style={{
            background: 'linear-gradient(135deg, #46cdf0 0%, #7ee8ff 40%, #46cdf0 70%, #25D366 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            algo increíble?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-7 text-[1.05rem] leading-relaxed mx-auto"
          style={{ color: 'rgba(150,175,195,0.65)', maxWidth: '480px' }}>
          Cuéntame tu idea. Te respondo en menos de 24h y armamos un plan juntos.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — WhatsApp */}
          <a
            href="https://wa.me/584243840126"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-[1rem] transition-all duration-300 hover:scale-[1.04]"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #1db954 100%)',
              color: '#ffffff',
              boxShadow: '0 0 40px rgba(37,211,102,0.3), 0 4px 24px rgba(37,211,102,0.2)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 60px rgba(37,211,102,0.5), 0 8px 32px rgba(37,211,102,0.35)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(37,211,102,0.3), 0 4px 24px rgba(37,211,102,0.2)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Escríbeme por WhatsApp
          </a>

          {/* Secondary — LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eddy-trejo-180002315/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-[1rem] transition-all duration-300 hover:scale-[1.04]"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(210,228,240,0.85)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(10,102,194,0.12)'
              el.style.borderColor = 'rgba(10,102,194,0.4)'
              el.style.color = '#ffffff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'rgba(255,255,255,0.04)'
              el.style.borderColor = 'rgba(255,255,255,0.12)'
              el.style.color = 'rgba(210,228,240,0.85)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            Ver LinkedIn
          </a>
        </div>

        {/* Divider accent */}
        <div className="mt-24 mx-auto"
          style={{
            maxWidth: '700px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(70,205,240,0.08) 15%, rgba(70,205,240,0.35) 50%, rgba(70,205,240,0.08) 85%, transparent 100%)',
          }} />
      </div>

      {/* ════════════════════════════════════════════
          INFO BAR — logo / nav / social / location
      ════════════════════════════════════════════ */}
      <div className="relative z-10 site-container pb-10">

        {/* Main info row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 py-12">

          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <a href="#" aria-label="Eddy Trejo — inicio"
              className="inline-flex items-center gap-3 group">
              <Image src="/logo-eddy.png" alt="Eddy Trejo logo" width={52} height={52} className="object-contain" style={{ filter: 'brightness(1.35) drop-shadow(0 0 6px rgba(255,255,255,0.45))' }} />
              <span className="font-display font-black text-lg text-white tracking-tight
                group-hover:text-glow transition-colors duration-300">
                Eddy Trejo
              </span>
            </a>
            <p className="font-mono text-[0.68rem] text-center lg:text-left"
              style={{ color: 'rgba(120,145,165,0.5)' }}>
              Full Stack & Automation · Venezuela
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegación footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-[0.78rem] transition-colors duration-250"
                    style={{ color: 'rgba(140,165,185,0.5)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(210,235,245,0.9)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(140,165,185,0.5)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(140,165,185,0.55)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = `${item.hoverColor}14`
                  el.style.borderColor = `${item.hoverColor}40`
                  el.style.color = item.hoverColor
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = `0 8px 24px ${item.hoverColor}22`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.color = 'rgba(140,165,185,0.55)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="font-mono text-[0.67rem]" style={{ color: 'rgba(100,125,145,0.4)' }}>
            © {year} Eddy Josue Trejo Rubio · Todos los derechos reservados
          </p>
          <p className="font-mono text-[0.62rem] uppercase tracking-wider"
            style={{ color: 'rgba(70,205,240,0.2)' }}>
            Hecho con pasión desde Venezuela 🇻🇪
          </p>
        </div>
      </div>
    </footer>
  )
}
