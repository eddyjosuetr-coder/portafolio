'use client'

import { RevealSection }  from '@/components/ui/RevealSection'
import { SplitReveal }    from '@/components/ui/SplitReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function CtaFinal() {
  return (
    <section
      id="contacto"
      className="section-pad relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      <div className="site-container relative z-10">
        <RevealSection>
          <div className="relative overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl p-10 md:p-20 text-center max-w-5xl mx-auto shadow-[0_0_80px_rgba(196,216,228,0.05)]">
            
            {/* Resplandor interno animado */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-glow/10 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <p className="eyebrow justify-center flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-glow/50" aria-hidden="true" />
                <span className="text-glow font-bold tracking-[0.2em] uppercase text-xs">Siguiente nivel</span>
                <span className="w-8 h-px bg-glow/50" aria-hidden="true" />
              </p>

              <SplitReveal
                id="cta-title"
                className="font-display font-black text-white tracking-tight mb-8 leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Tu operación merece un{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow to-silver">mejor ecosistema.</span>
              </SplitReveal>

              <p className="text-ink-dim/90 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                No construimos páginas web; diseñamos infraestructuras digitales que venden, escalan y operan por sí solas. Agenda una sesión estratégica y veamos el potencial oculto de tu negocio.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <a
                    href="#contacto"
                    className="btn-primary px-8 py-4 text-base hover:shadow-[0_0_40px_rgba(66,192,245,0.4)]"
                    aria-label="Agendar llamada de descubrimiento"
                  >
                    Agendar sesión estratégica
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a href="mailto:pathcode.ve@gmail.com" className="btn-ghost px-8 py-4 text-base">
                    Escribir un mensaje
                  </a>
                </MagneticButton>
              </div>

              {/* Línea de garantía */}
              <div className="guarantee-bar mt-10 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-center text-silver/40 font-mono text-[0.65rem] uppercase tracking-widest font-bold">
                <span>Respuesta 24h</span>
                <span className="hidden sm:inline">•</span>
                <span>100% Remoto</span>
                <span className="hidden sm:inline">•</span>
                <span>Consultoría Inicial</span>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
