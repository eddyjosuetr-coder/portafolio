import { notFound }              from 'next/navigation'
import type { Metadata }          from 'next'
import { PROYECTOS, getProyecto } from '@/lib/proyectos'
import { Navbar }                 from '@/components/Navbar'
import { ProyectoAnimated }       from './ProyectoAnimated'

export function generateStaticParams() {
  return PROYECTOS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const p = getProyecto(slug)
  if (!p) return {}
  return { title: `${p.titulo} — Eddy Trejo`, description: p.descripcionCorta }
}

export default async function ProyectoPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const p = getProyecto(slug)
  if (!p) notFound()

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen overflow-hidden">
        <ProyectoAnimated p={p} />
      </main>
    </>
  )
}
