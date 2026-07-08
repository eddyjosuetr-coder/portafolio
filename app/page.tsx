/* ----------------------------------------------------------
   Página principal — one-page con scroll suave
   Cada sección está en su propio componente en /components
---------------------------------------------------------- */
import { Navbar }             from '@/components/Navbar'
import { Hero }               from '@/components/Hero'
import { StackStrip }         from '@/components/StackStrip'
import { Portfolio }          from '@/components/Portfolio'
import { AutomationFlow }     from '@/components/AutomationFlow'
import { Stats }              from '@/components/Stats'
import { About }              from '@/components/About'
import { Services }           from '@/components/Services'
import { Proceso }            from '@/components/Proceso'
import { Footer }             from '@/components/Footer'
import { BackgroundAmbience } from '@/components/BackgroundAmbience'

export default function Home() {
  return (
    <>
      <BackgroundAmbience />
      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stack strip */}
        <StackStrip />

        {/* 3. Portafolio */}
        <Portfolio />

        {/* 4. Automatización e IA */}
        <AutomationFlow />

        {/* 5. Stats band */}
        <Stats />

        {/* 6. Sobre mí — Bento Grid */}
        <About />

        {/* 7. Servicios */}
        <Services />

        {/* 8. Proceso — metodología timeline */}
        <Proceso />
      </main>

      <Footer />
    </>
  )
}
