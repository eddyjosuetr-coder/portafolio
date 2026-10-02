/* ----------------------------------------------------------
   Convierte las imágenes pesadas (PNG de 5–6 MB) a WebP con el
   tamaño justo para la web. Ejecutar: node scripts/optimize-images.mjs
   Imprime el ancho y alto final de cada imagen para lib/proyectos.ts
   Los originales ya se borraron de public/ (siguen en el historial
   de git): para una portada nueva, pon su PNG en public/img y añádela.
---------------------------------------------------------- */
import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const JOBS = [
  // Portadas del acordeón de proyectos
  ...['lunamare', 'marimar', 'velluto', 'insurecalcpro', 'dev-connect', 'n8n-reservas', 'n8n-ws']
    .map((n) => ({ src: `public/img/${n}.png`, out: `public/img/proyectos/${n}.webp`, width: 1600 })),
  // Presentaciones de la página de cada caso
  ...['lunamare.png', 'distribuidora-marimar.jpg', 'velluto-ristorante.png', 'insurecalcpro.png',
      'compu-dev-connect.png', 'compu-n8n-reservas.png', 'compu-n8n-ws.png']
    .map((f) => ({ src: `public/img/showcase/${f}`, out: `public/img/showcase/${f.replace(/\.\w+$/, '')}.webp`, width: 2000 })),
  // Robot del hero (con transparencia)
  { src: 'public/robot.png', out: 'public/robot.webp', width: 1100 },
]

for (const { src, out, width } of JOBS) {
  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(out)
  const before = (await stat(src)).size / 1e6
  console.log(`${out}  ${info.width}x${info.height}  ${before.toFixed(2)} MB → ${(info.size / 1e3).toFixed(0)} KB`)
}
