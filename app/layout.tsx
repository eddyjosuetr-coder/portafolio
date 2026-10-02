import type { Metadata, Viewport } from 'next'
import { Work_Sans }               from 'next/font/google'
import localFont                   from 'next/font/local'
import './globals.css'
import { SmoothScroll }    from '@/components/providers/SmoothScroll'
import { GrainOverlay }    from '@/components/GrainOverlay'
import { CursorTrailer }   from '@/components/ui/CursorTrailer'

/* Work Sans — fuente principal (titulares + cuerpo) */
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

/* Satoshi — fuente secundaria (labels editoriales, badges) */
const satoshi = localFont({
  src: [
    { path: '../public/fonts/satoshi/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/satoshi/Satoshi-Medium.woff2',  weight: '500', style: 'normal' },
    { path: '../public/fonts/satoshi/Satoshi-Bold.woff2',    weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display:  'swap',
})

/* ----------------------------------------------------------
   Viewport
---------------------------------------------------------- */
export const viewport: Viewport = {
  themeColor:  '#0E161F',
  colorScheme: 'dark',
  width:       'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

/* ----------------------------------------------------------
   SEO Metadata
---------------------------------------------------------- */
export const metadata: Metadata = {
  title: 'PathCode — Ingeniería de Software & Automatización Estratégica',
  description:
    'Firma boutique de ingeniería de software y automatización estratégica. Construimos plataformas web de alto rendimiento y automatizamos flujos empresariales con n8n e IA.',
  keywords: [
    'desarrollo web full stack',
    'automatización n8n',
    'integración IA',
    'consultoría software',
    'React',
    'Next.js',
    'PathCode',
  ],
  authors: [{ name: 'PathCode' }],
  openGraph: {
    title: 'PathCode — Ingeniería de Software & Automatización Estratégica',
    description:
      'Trazamos el camino entre el código y tu negocio. Desarrollo Full Stack, automatización con n8n e integración de IA.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'PathCode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PathCode — Ingeniería de Software & Automatización',
    description: 'Trazamos el camino entre el código y tu negocio.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${workSans.variable} ${satoshi.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased">
        {/* Skip navigation — first focusable element for keyboard users */}
        <a href="#main-content" className="skip-nav">
          Saltar al contenido principal
        </a>
        <SmoothScroll>
          <GrainOverlay />
          <CursorTrailer />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
