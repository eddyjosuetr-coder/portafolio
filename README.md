# PathCode — Portafolio web

Sitio web one-page de la agencia **PathCode**, construido con **Next.js 14 (App Router)**, TypeScript y Tailwind CSS.

---

## Stack

| Herramienta | Versión | Propósito |
|---|---|---|
| Next.js | 14.2 | Framework |
| React | 18 | UI |
| TypeScript | 5 | Tipado |
| Tailwind CSS | 3.4 | Estilos |
| Framer Motion | 11 | Animaciones |
| Work Sans | — | Tipografía cuerpo (Google Fonts) |
| JetBrains Mono | — | Tipografía código (Google Fonts) |
| Satoshi | — | Tipografía titulares (Fontshare CDN) |

---

## Requisitos

- Node.js 18 o superior
- npm, yarn o pnpm

---

## Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Imágenes del portafolio

Las capturas de pantalla de los proyectos van en `/public/img/`.
Nombra los archivos exactamente así:

| Proyecto | Archivo esperado |
|---|---|
| Lunamare | `/public/img/lunamare.jpg` |
| Velluto Ristorante | `/public/img/velluto.jpg` |
| Marimar Milenium | `/public/img/marimar.jpg` |
| InsureCalcPro | `/public/img/insurecalcpro.jpg` |
| OG / social sharing | `/public/img/og-image.jpg` |

Si el archivo no existe, se muestra automáticamente un placeholder con gradiente
temático para cada proyecto (sin errores de build).

---

## Logo / Isotipo

Copia el archivo del logo a la ruta esperada:

```bash
# Desde la raíz del proyecto
cp "PNG/ISOTIPO - BLANCO.png" public/img/isotipo-blanco.png
```

El Navbar y el Footer buscan `/img/isotipo-blanco.png`.

---

## Configuración de Calendly

En `components/CtaFinal.tsx`, línea 8, reemplaza la URL del CTA primario:

```ts
const CALENDLY_URL = 'https://calendly.com/tu-usuario/llamada-pathcode'
```

---

## Fuentes en producción (optimización avanzada)

Por defecto, **Satoshi** se carga desde el CDN de Fontshare.
Para producción óptima (sin dependencia externa y con self-hosting automático de Next.js):

1. Descarga Satoshi en [fontshare.com/fonts/satoshi](https://www.fontshare.com/fonts/satoshi)
2. Copia los archivos `.woff2` a `/public/fonts/`
3. Actualiza `app/layout.tsx`:

```ts
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Bold.woff2',   weight: '700' },
    { path: '../public/fonts/Satoshi-Black.woff2',  weight: '900' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})
```

4. Elimina el `@import` de Fontshare en `app/globals.css`.

---

## Despliegue en Vercel

### Opción A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Opción B — GitHub + Vercel (recomendado)

1. Haz push de este repositorio a GitHub.
2. Ve a [vercel.com](https://vercel.com) → New Project → Import.
3. Selecciona el repositorio. Vercel detecta Next.js automáticamente.
4. Click **Deploy**.

No se necesitan variables de entorno para la configuración base.

---

## Estructura del proyecto

```
/
├── app/
│   ├── globals.css      ← Tokens CSS + estilos base
│   ├── layout.tsx       ← Root layout, fuentes, metadata SEO
│   └── page.tsx         ← Página principal (importa los componentes)
│
├── components/
│   ├── ui/
│   │   └── RevealSection.tsx   ← Wrapper animado reutilizable
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StackStrip.tsx
│   ├── Portfolio.tsx
│   ├── AutomationFlow.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── CtaFinal.tsx
│   └── Footer.tsx
│
├── public/
│   └── img/             ← Coloca aquí las imágenes (ver sección arriba)
│
├── tailwind.config.ts   ← Tokens de color, tipografía, animaciones
├── next.config.mjs
├── tsconfig.json
└── README.md
```

---

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Colores de marca | `tailwind.config.ts` → `theme.extend.colors` + `app/globals.css` → `:root` |
| Proyectos del portafolio | `components/Portfolio.tsx` → array `PROJECTS` |
| Estadísticas | `components/Stats.tsx` → array `STATS` |
| Links de redes sociales | `components/Footer.tsx` → array `SOCIAL` |
| URL de Calendly | `components/CtaFinal.tsx` → constante `CALENDLY_URL` |
| Nodos del flujo (hero) | `components/Hero.tsx` → array `FLOW_STEPS` |
| Nodos del flujo (sección IA) | `components/AutomationFlow.tsx` → arrays `NODES` y `EDGES` |

---

Construido por **PathCode** · Trazamos el camino entre el código y tu negocio.
# portafolio
