'use client'

import { RevealSection }  from '@/components/ui/RevealSection'
import { SplitReveal }    from '@/components/ui/SplitReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'

const WHATSAPP_URL = 'https://wa.me/584243840126'

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
                Tu proyecto merece un{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glow to-silver">desarrollador de verdad.</span>
              </SplitReveal>

              <p className="text-ink-dim/90 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                No solo escribo código; construyo plataformas que escalan y automatizo flujos que funcionan solos. Escríbeme y veamos cómo llevar tu idea a producción.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-4 text-base hover:shadow-[0_0_40px_rgba(66,192,245,0.4)]"
                    aria-label="Escribir por WhatsApp a Eddy Trejo"
                  >
                    Escríbeme por WhatsApp
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://www.linkedin.com/in/eddy-trejo-180002315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-8 py-4 text-base"
                  >
                    Ver LinkedIn
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
