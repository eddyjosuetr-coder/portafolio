# Eddy Josue Trejo Rubio — Portafolio Personal

Portafolio web personal de **Eddy Josue Trejo Rubio**, Full Stack Developer de Venezuela. Construido con Next.js, TypeScript, Tailwind CSS y GSAP. Desplegado en producción en Vercel.

🌐 **Live:** [portafolio-zeta-lilac-88.vercel.app](https://portafolio-zeta-lilac-88.vercel.app)

---

## Sobre el proyecto

Portafolio one-page con scroll horizontal animado para los proyectos, sección de automatización con n8n, stack tecnológico, sección "Sobre mí" en bento grid y footer con CTA directo a WhatsApp. Diseño dark cinematic con animaciones GSAP y ScrollTrigger.

---

## Stack

| Herramienta | Versión | Propósito |
|---|---|---|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| GSAP + ScrollTrigger | 3 | Animaciones y scroll horizontal |
| next/image | — | Optimización de imágenes |

---

## Proyectos incluidos

| Proyecto | Categoría |
|---|---|
| Lunamare | Fullstack Web App |
| Distribuidora Marimar | E-commerce en producción |
| Velluto Ristorante | Web App + Automatización |
| DevConnect | Red Social Fullstack |
| Velluto – Reservas en Tiempo Real | Automatización n8n |
| ChatBot WhatsApp — Universidad Ecuador | Automatización + IA |
| InsureCalcPro | Herramientas Financieras |

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/eddyjosuetr-coder/portafolio.git
cd portafolio

# 2. Instalar dependencias
npm install

# 3. Correr en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Estructura del proyecto

```
/
├── app/
│   ├── globals.css               ← Tokens CSS y estilos base
│   ├── layout.tsx                ← Root layout, fuentes, metadata SEO
│   ├── page.tsx                  ← Página principal
│   └── proyectos/[slug]/         ← Páginas de detalle por proyecto
│
├── components/
│   ├── ui/                       ← Componentes reutilizables (animaciones, botones)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx             ← Carrusel horizontal con GSAP
│   ├── AutomationFlow.tsx        ← Sección n8n / IA
│   ├── About.tsx                 ← Bento grid sobre mí
│   ├── Services.tsx
│   ├── Proceso.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── proyectos.ts              ← Data de todos los proyectos
│   └── gsap.ts                   ← Configuración GSAP
│
├── public/
│   ├── img/                      ← Imágenes de portada de proyectos
│   │   └── showcase/             ← Imágenes de detalle (mockups)
│   ├── logo-eddy.png
│   └── imagen-eddy.jpeg          ← Foto personal
│
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Agregar un nuevo proyecto

1. Añade las imágenes en `public/img/` (portada) y `public/img/showcase/` (detalle).
2. Agrega la entrada en `lib/proyectos.ts` siguiendo el tipo `Proyecto`.
3. El carrusel y las páginas de detalle se generan automáticamente.

---

## Despliegue en Vercel

```bash
# Opción CLI
npm i -g vercel
vercel

# Opción recomendada: conectar GitHub en vercel.com → New Project
```

No se requieren variables de entorno para el deploy base.

---

Construido por **Eddy Josue Trejo Rubio** · Full Stack Developer · Venezuela 🇻🇪
