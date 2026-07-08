'use client'

import { useState, useEffect } from 'react'
import Image                   from 'next/image'
import { MagneticButton }      from '@/components/ui/MagneticButton'

const NAV_LINKS = [
  { href: '/#portafolio',     label: 'Portafolio' },
  { href: '/#automatizacion', label: 'Automatización' },
  { href: '/#servicios',      label: 'Servicios' },
  { href: '/#contacto',       label: 'Contacto' },
]

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Barra principal ── */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`flex items-center justify-between w-full rounded-full px-6 py-3 border transition-all duration-500 ${
            scrolled
              ? 'bg-deep-space/85 backdrop-blur-2xl border-glass shadow-2xl shadow-black/60'
              : 'bg-deep-space/20 backdrop-blur-md border-white/[0.06]'
          }`}>

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Eddy Trejo — inicio">
              <div className="transition-opacity duration-200 group-hover:opacity-80">
                <Image src="/logo-eddy.png" alt="Eddy Trejo logo" width={52} height={52} className="object-contain" style={{ filter: 'brightness(1.35) drop-shadow(0 0 6px rgba(255,255,255,0.45))' }} />
              </div>
              <span className="font-display font-bold text-[1.05rem] text-glacier tracking-tight leading-none hidden sm:block">
                Eddy Trejo
              </span>
            </a>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-silver-blue hover:text-accent text-sm font-medium transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden md:flex items-center">
              <MagneticButton strength={0.22}>
                <a href="https://wa.me/584243840126" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
                  Contáctame
                </a>
              </MagneticButton>
            </div>

            {/* Hamburguesa móvil */}
            <button className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen} aria-controls="mobile-menu">
              <span className={`block h-[1.5px] w-5 bg-glacier origin-center transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-glacier transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-[1.5px] w-5 bg-glacier origin-center transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Overlay móvil ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Drawer móvil ── */}
      <nav
        id="mobile-menu"
        className={`fixed top-20 left-4 right-4 z-40 bg-deep-space/95 backdrop-blur-2xl border border-glass rounded-3xl p-6 flex flex-col gap-2 md:hidden shadow-2xl transition-all duration-250 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        aria-label="Menú móvil"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}
            className="text-glacier text-lg font-medium py-3 border-b border-white/[0.06] hover:text-accent transition-colors duration-200"
            onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="flex flex-col gap-3 pt-6">
          <a href="/#portafolio" className="btn-ghost text-base justify-center py-3" onClick={() => setMenuOpen(false)}>
            Ver portafolio
          </a>
          <a href="https://wa.me/584243840126" target="_blank" rel="noopener noreferrer" className="btn-primary text-base justify-center py-3" onClick={() => setMenuOpen(false)}>
            Contáctame
          </a>
        </div>
      </nav>
    </>
  )
}
