export interface Proyecto {
  slug:             string
  titulo:           string
  categoria:        string
  descripcionCorta: string
  descripcionLarga: string
  tecnologias:      string[]
  features:         string[]
  destacado:        string
  repoUrl:          string
  liveUrl?:         string
  status?:          'live' | 'en-proceso'
  mobilePos?:       string          // CSS object-position for mobile card
  imagen:           string
  imagenShowcase:   string
  placeholderClass: string
  placeholderContent: 'ocean' | 'dining' | 'grid' | 'calc' | 'workflow'
  accent:           string
  accentGlow:       string
}

export const PROYECTOS: Proyecto[] = [
  {
    slug:             'lunamare',
    titulo:           'Lunamare',
    categoria:        'Fullstack Web App',
    descripcionCorta: 'Landing page fullstack para un hotel de lujo frente al mar con sistema de reservas conectado a base de datos.',
    descripcionLarga:
      'Aplicación fullstack para un hotel de lujo. Hero a pantalla completa con video, galería de 6 habitaciones con páginas de detalle individuales, sección de servicios y un sistema de reservas que persiste en base de datos MySQL. Incluye autenticación OAuth para asociar las reservas a cada usuario y animaciones avanzadas.',
    features: [
      'Hero a pantalla completa con video y navegación transparente',
      'Galería de 6 habitaciones con páginas de detalle (/room/:id)',
      'Sistema de reservas conectado a MySQL vía tRPC',
      'Autenticación OAuth 2.0',
      'Animaciones con GSAP (parallax), shader 3D con three.js y efecto glitch en canvas',
    ],
    destacado:        'Proyecto fullstack completo con backend type-safe, base de datos y autenticación.',
    repoUrl:          'https://github.com/eddyjosuetr-coder/hotel',
    liveUrl:          'https://hotel-mu-three.vercel.app/',
    status:           'live',
    mobilePos:        '15% top',
    imagen:           '/img/lunamare.png',
    imagenShowcase:   '/img/showcase/lunamare.png',
    placeholderClass:    'from-[#041520] via-[#0a2a3a] to-[#051822]',
    placeholderContent:  'ocean',
    accent:           '#46cdf0',
    accentGlow:       'rgba(70,205,240,0.18)',
    tecnologias:      ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'GSAP', 'three.js', 'tRPC', 'Hono', 'Drizzle ORM', 'MySQL', 'OAuth 2.0', 'React Router v7'],
  },
  {
    slug:             'marimar-milenium',
    titulo:           'Marimar Milenium',
    categoria:        'E-commerce B2B',
    descripcionCorta: 'Plataforma de e-commerce mayorista con catálogo de más de 600 productos, filtros avanzados y carrito de compras.',
    descripcionLarga:
      'Plataforma de comercio electrónico para venta mayorista (B2B) de productos alimenticios, enfocada al mercado venezolano. Catálogo de más de 600 productos en 13 categorías con experiencia de compra fluida y responsiva.',
    features: [
      'Catálogo de 600+ productos en 13 categorías',
      'Búsqueda en tiempo real y filtros por marca, categoría, presentación y precio',
      'Vista rápida en modal y carrito lateral con gestión de cantidades',
      'Filtrado en tiempo real con useMemo y custom hooks',
      'Precios en USD y métodos de pago locales (Zelle, Pago Móvil, Efectivo)',
    ],
    destacado:        'Arquitectura modular tipada con filtrado en tiempo real y sistema de fallback visual.',
    repoUrl:          'https://github.com/eddyjosuetr-coder/marimar',
    status:           'en-proceso',
    mobilePos:        '50% top',
    imagen:           '/img/marimar.png',
    imagenShowcase:   '/img/showcase/marimar-milenium.png',
    placeholderClass:    'from-[#0a151f] via-[#0d1f2d] to-[#08121a]',
    placeholderContent:  'grid',
    accent:           '#f97316',
    accentGlow:       'rgba(249,115,22,0.18)',
    tecnologias:      ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'Lucide React', 'Sonner'],
  },
  {
    slug:             'velluto-ristorante',
    titulo:           'Velluto Ristorante',
    categoria:        'Web App + Automatización',
    descripcionCorta: 'Sistema de reservas web para restaurante con backend automatizado mediante n8n, sin servidor tradicional.',
    descripcionLarga:
      'Aplicación web de reservas para restaurante con landing page moderna y un backend totalmente automatizado con n8n. Las reservas se procesan en tiempo real y disparan notificaciones automáticas, además de un resumen diario para el staff.',
    features: [
      'Landing page moderna en React con animaciones y cursor personalizado',
      'Formulario de reservas conectado a un webhook de n8n',
      'Validación, ID único de reserva y almacenamiento automático en Google Sheets',
      'Confirmación por email (Gmail) y notificación por WhatsApp (Twilio) al staff',
      'Flujo programado que envía un resumen diario de reservas cada mañana',
    ],
    destacado:        'Arquitectura serverless con webhooks y automatización de procesos de negocio reales.',
    repoUrl:          'https://github.com/eddyjosuetr-coder/local',
    liveUrl:          'https://velluto-navy.vercel.app/',
    status:           'live',
    mobilePos:        '50% 25%',
    imagen:           '/img/velluto.png',
    imagenShowcase:   '/img/showcase/velluto-ristorante.png',
    placeholderClass:    'from-[#15080a] via-[#2a1a0e] to-[#120608]',
    placeholderContent:  'dining',
    accent:           '#c8a95a',
    accentGlow:       'rgba(200,169,90,0.18)',
    tecnologias:      ['React', 'Vite', 'CSS', 'n8n', 'Google Sheets', 'Gmail API', 'Twilio (WhatsApp API)'],
  },
  {
    slug:             'insurecalcpro',
    titulo:           'InsureCalcPro',
    categoria:        'Herramientas Financieras',
    descripcionCorta: 'Plataforma web con tres calculadoras financieras interactivas para planificación económica.',
    descripcionLarga:
      'Plataforma con herramientas y calculadoras financieras gratuitas para planificar el futuro económico y proteger a la familia. Interfaz limpia, interactiva y sin dependencias externas.',
    features: [
      'Calculadora de seguro de vida (cobertura necesaria)',
      'Calculadora de interés compuesto (crecimiento de inversiones)',
      'Calculadora de pagos de hipoteca (desglose de capital e interés)',
      'Interfaz moderna sin dependencias ni servidor',
    ],
    destacado:        'Lógica de cálculo financiero del lado del cliente, sin dependencias.',
    repoUrl:          'https://github.com/eddyjosuetr-coder/seguros',
    liveUrl:          'https://insurecalcpro.com/',
    status:           'live',
    mobilePos:        '10% top',
    imagen:           '/img/insurecalcpro.png',
    imagenShowcase:   '/img/showcase/insurecalcpro.png',
    placeholderClass:    'from-[#0a1a2e] via-[#0e1d2a] to-[#070f1a]',
    placeholderContent:  'calc',
    accent:           '#3b82f6',
    accentGlow:       'rgba(59,130,246,0.18)',
    tecnologias:      ['HTML', 'CSS', 'JavaScript'],
  },
  {
    slug:             'devconnect',
    titulo:           'DevConnect',
    categoria:        'Red Social Fullstack',
    descripcionCorta: 'Plataforma social full-stack para developers: comparte código, conecta con otros devs y crece en comunidad. Auth real con Google OAuth, feed con syntax highlighting y arquitectura serverless en producción.',
    descripcionLarga:
      'DevConnect nació de una idea concreta: GitHub guarda tu código, LinkedIn vende tu perfil, pero no existía un espacio social pensado exclusivamente para developers. Construí la plataforma completa en solitario — desde el diseño de la base de datos hasta la landing page animada — usando un stack moderno de producción real. Los usuarios se autentican con Google, publican posts con código con syntax highlighting, pueden dar likes, comentar, repostear y seguirse entre sí.',
    features: [
      'Autenticación con Google OAuth 2.0 — sesión segura con JWT y cookies HttpOnly',
      'Feed social con posts de código — syntax highlighting por lenguaje',
      'Interacciones en tiempo real — likes, comentarios, reposts y guardados',
      'API type-safe end-to-end — tRPC + Drizzle sin una sola línea de SQL manual',
      'Landing page con animaciones GSAP — ScrollTrigger, parallax y transiciones fluidas',
      'Desplegado en producción — Vercel + Aiven MySQL cloud, CI/CD automático vía GitHub',
    ],
    destacado:        'Full-stack construido en solitario — 1 desarrollador, 0 inversión externa, funciona en producción.',
    repoUrl:          'https://github.com/eddyjosuetr-coder',
    liveUrl:          'https://dev-connect-social-video-y-feedback.vercel.app',
    status:           'live',
    mobilePos:        '50% 20%',
    imagen:           '/img/dev-connect.png',
    imagenShowcase:   '/img/showcase/compu-dev-connect.png',
    placeholderClass:    'from-[#0a120a] via-[#0d1a0d] to-[#060c06]',
    placeholderContent:  'grid',
    accent:           '#a3e635',
    accentGlow:       'rgba(163,230,53,0.18)',
    tecnologias:      ['React 19', 'Vite 7', 'TypeScript', 'tRPC v11', 'Hono', 'Drizzle ORM', 'MySQL', 'Aiven', 'GSAP', 'Tailwind CSS', 'Vercel', 'Google OAuth 2.0'],
  },
  {
    slug:             'velluto-reservas',
    titulo:           'Velluto – Reservas en Tiempo Real',
    categoria:        'Automatización n8n',
    descripcionCorta: 'Automatización end-to-end que gestiona reservas de restaurante: webhook → validación → Google Sheets → Email + WhatsApp, sin intervención humana.',
    descripcionLarga:
      'Workflow en n8n que orquesta todo el ciclo de vida de una reserva de restaurante. Cuando un cliente envía el formulario React, el sistema valida los datos, genera un ID único (RSV-2026-XXXXXX), guarda la reserva en Google Sheets, envía confirmación HTML al cliente por Gmail y notifica al restaurante al instante por WhatsApp vía Twilio. Si los datos están incompletos, devuelve un error HTTP 400 con los campos faltantes.',
    features: [
      'Webhook que recibe peticiones POST desde el formulario React del restaurante',
      'Validación de campos, formato de email y generación de ID único RSV-2026-XXXXXX',
      'Bifurcación IF: flujo de éxito o error HTTP 400 con campos faltantes',
      'Registro automático en Google Sheets vía OAuth2',
      'Confirmación HTML al cliente por Gmail y alerta al dueño por WhatsApp (Twilio)',
    ],
    destacado:        'Pipeline serverless end-to-end: un formulario dispara 5 servicios en la nube sin una sola línea de backend manual.',
    repoUrl:          'https://github.com/eddyjosuetr-coder',
    status:           'live',
    mobilePos:        '50% center',
    imagen:           '/img/n8n-reservas.png',
    imagenShowcase:   '/img/showcase/compu-n8n-reservas.png',
    placeholderClass:    'from-[#0a1520] via-[#0d1f2d] to-[#060e18]',
    placeholderContent:  'workflow',
    accent:           '#46cdf0',
    accentGlow:       'rgba(70,205,240,0.18)',
    tecnologias:      ['n8n', 'Webhooks', 'React', 'Google Sheets', 'Gmail API', 'Twilio (WhatsApp API)', 'JavaScript', 'OAuth 2.0'],
  },
  {
    slug:             'chatbot-whatsapp-universidad',
    titulo:           'ChatBot WhatsApp — Universidad Ecuador',
    categoria:        'Automatización + IA',
    descripcionCorta: 'Bot de atención universitaria para admisiones integrado con WhatsApp Business API, menú interactivo, captura de leads y agente IA con memoria.',
    descripcionLarga:
      'Workflow completo en n8n que automatiza la atención a prospectos universitarios vía WhatsApp Business API. El sistema incluye verificación de webhook, parsing de mensajes, menú interactivo con ramas para carreras, costos, admisiones, campus y FAQ. Captura leads a Google Sheets, confirma asesores y lanza un agente GPT-4o con memoria para respuestas libres.',
    features: [
      'Verificación de webhook y parsing de mensajes entrantes de WhatsApp',
      'Menú principal interactivo con 6 ramas (carreras, costos, admisiones, campus, FAQ, texto libre)',
      'Captura automática de leads y confirmación de asesor en Google Sheets',
      'Formulario de inscripción disparado desde el mismo flujo',
      'Agente IA con GPT-4o + memoria para FAQ inteligente y texto libre',
      'Integración con Gmail para notificaciones automáticas al equipo',
    ],
    destacado:        'Automatización end-to-end de admisiones universitarias vía WhatsApp, sin agente humano en el primer contacto.',
    repoUrl:          'https://github.com/eddyjosuetr-coder',
    status:           'live',
    mobilePos:        '40% top',
    imagen:           '/img/n8n-ws.png',
    imagenShowcase:   '/img/showcase/compu-n8n-ws.png',
    placeholderClass:    'from-[#0a1a10] via-[#0d2218] to-[#06100c]',
    placeholderContent:  'workflow',
    accent:           '#25D366',
    accentGlow:       'rgba(37,211,102,0.18)',
    tecnologias:      ['n8n', 'WhatsApp Business API', 'GPT-4o', 'Google Sheets', 'Gmail API', 'Webhooks'],
  },
]

export function getProyecto(slug: string): Proyecto | undefined {
  return PROYECTOS.find((p) => p.slug === slug)
}
