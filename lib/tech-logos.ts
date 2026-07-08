/* Local SVGs downloaded from SimpleIcons, patched with width/height for iOS Safari */
const SI = (slug: string, color = 'ffffff') =>
  `/icons/simpleicons/${slug}.svg`

/* Devicon CDN — fallback for common web tech */
const DV = (name: string, style = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${style}.svg`

export const TECH_LOGOS: Record<string, string> = {
  /* ── Languages ── */
  'HTML':                   DV('html5'),
  'CSS':                    DV('css3'),
  'JavaScript':             DV('javascript'),
  'TypeScript':             DV('typescript'),

  /* ── Frameworks / UI ── */
  'React':                  DV('react'),
  'React 19':               DV('react'),
  'Next.js':                SI('nextdotjs', 'ffffff'),
  'Vite':                   DV('vitejs'),
  'Tailwind CSS':           DV('tailwindcss'),
  'shadcn/ui':              SI('shadcnui', 'ffffff'),
  'Lucide React':           SI('lucide', 'F56565'),
  'React Router v7':        SI('reactrouter', 'CA4245'),
  'Sonner':                 DV('react'),

  /* ── Animation / 3D ── */
  'GSAP':                   SI('greensock', '88CE02'),
  'three.js':               SI('threedotjs', 'ffffff'),

  /* ── Backend ── */
  'Node.js':                DV('nodejs'),
  'Hono':                   SI('hono', 'E36002'),
  'tRPC':                   SI('trpc', '2596BE'),

  /* ── Databases & ORM ── */
  'PostgreSQL':             DV('postgresql'),
  'MySQL':                  DV('mysql'),
  'Drizzle ORM':            SI('drizzle', 'C5F74F'),

  /* ── Auth ── */
  'OAuth 2.0':              SI('openid', '52535b'),

  /* ── Validation ── */
  'Zod':                    SI('zod', '3E67B1'),

  /* ── Automation / Integrations ── */
  'n8n':                    SI('n8n', 'EA4B71'),
  'Google Sheets':          SI('googlesheets', '34A853'),
  'Gmail API':              SI('gmail', 'EA4335'),
  'Twilio (WhatsApp API)':  SI('whatsapp', '25D366'),

  /* ── Cloud / DevOps ── */
  'Vercel':                 SI('vercel', 'ffffff'),
  'Docker':                 DV('docker'),
}

export function getTechLogo(name: string): string | null {
  return TECH_LOGOS[name] ?? null
}
