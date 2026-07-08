'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'

/* ----------------------------------------------------------
   SVG Tech Logos — inline, zero dependency
---------------------------------------------------------- */
function Logo({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return <span style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{children}</span>
}

const LOGOS: Record<string, ReactNode> = {
  /* ── Frontend ── */
  'React': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
      <circle cx="12" cy="12" r="2.3" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10.5" ry="3.9" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="11" fill="#000"/>
      <path d="M9.5 7.5v9l8-9v9" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path d="M13 12.5h-2.5V14h1c.28 0 .5.22.5.5v.5c0 .28-.22.5-.5.5h-.5c-.28 0-.5-.22-.5-.5v-.5H9v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V14.5c0-.83-.67-1.5-1.5-1.5zm3.5 0v.5H15v-.5h-1v1h2v.5H14v.5h3V13.5c0-.28-.22-.5-.5-.5H14c-.28 0-.5.22-.5.5v.5h1v-.5h2zM7 11h10v1H7z" fill="white"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#06B6D4">
      <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.17 1.174.666 1.716 1.214C13.272 10.41 14.28 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.174-.666-1.716-1.214C15.228 6.99 14.22 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.685.17 1.174.666 1.716 1.214C8.772 15.81 9.78 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.17-1.174-.666-1.716-1.214C10.728 12.39 9.72 11.4 7.5 11.4z"/>
    </svg>
  ),
  'GSAP': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#0E100F"/>
      <text x="3.5" y="16.5" fontSize="9.5" fontWeight="bold" fontFamily="monospace" fill="#88CE02">GSAP</text>
    </svg>
  ),
  'Three.js': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#000"/>
      <path d="M4 19L12 5l8 14H4zm4-2h8l-4-7-4 7z" fill="white"/>
    </svg>
  ),
  'Vite': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M21 3L13.5 17 12 14.5 17 3h4zm-7.5 14L12 14.5 6.5 21 3 3h8.5L7 14.5 9 17l4.5-3.5z" fill="#646CFF"/>
      <path d="M12 14.5L13.5 17 9 20.5l3-6z" fill="#FFBD44"/>
    </svg>
  ),
  'shadcn/ui': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#18181B"/>
      <path d="M7 7h4v4H7zm6 6h4v4h-4zM7 13l4 4M17 7l-4 4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#0055FF"/>
      <path d="M6 4h12v6h-6v4h-6zm0 10h6l6 6H6z" fill="white"/>
    </svg>
  ),
  /* ── Backend ── */
  'Node.js': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#339933">
      <path d="M12 1.85L2.18 7.42v9.16L12 22.15l9.82-5.57V7.42L12 1.85zm6.43 13.12L12 18.7l-6.43-3.73V9.03L12 5.3l6.43 3.73v5.94z"/>
    </svg>
  ),
  'Hono': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#E36002"/>
      <path d="M12 4c-1 2.5-3 4-3 7 0 2.5 1.5 4.5 3 5.5 1.5-1 3-3 3-5.5 0-3-2-4.5-3-7z" fill="white" opacity="0.9"/>
      <path d="M12 14c-1 .8-1.5 1.5-1.5 2.5 0 .8.5 1.5 1.5 2 1-.5 1.5-1.2 1.5-2 0-1-.5-1.7-1.5-2.5z" fill="white"/>
    </svg>
  ),
  'tRPC': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#2596BE"/>
      <text x="3" y="16.5" fontSize="8.5" fontWeight="bold" fontFamily="monospace" fill="white">tRPC</text>
    </svg>
  ),
  'Drizzle ORM': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#C5F74F" fillOpacity="0.15"/>
      <path d="M4 8h16M4 12h12M4 16h8" stroke="#C5F74F" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'MySQL': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#4479A1"/>
      <path d="M5 8c3-1.5 6-1.5 9 0 1.5.75 2.5 2 3 3.5.5 1.5.5 3-.5 4.5-1 1.5-3 2-5 2s-4-.5-5-2c-.5-.75-.5-1.5 0-2 .5-.5 1.5-.5 2 0 .25.25.25.75 0 1-.25.25-.75.25-1 0 .5.75 2 1 3 1s2.5-.25 3-1c.5-.75.5-1.75 0-2.5-.5-.75-1.5-1.25-2.5-1.5C8.5 11 6.5 11 5 10V8z" fill="white"/>
    </svg>
  ),
  'PostgreSQL': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#336791">
      <ellipse cx="12" cy="9" rx="7" ry="5" fill="#336791"/>
      <path d="M5 9v6c0 2.76 3.13 5 7 5s7-2.24 7-5V9" fill="none" stroke="#336791" strokeWidth="2"/>
      <ellipse cx="12" cy="9" rx="7" ry="3" fill="#4a7bb0"/>
    </svg>
  ),
  'OAuth 2.0': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#EB5424"/>
      <rect x="8" y="11" width="8" height="7" rx="1" fill="none" stroke="white" strokeWidth="1.5"/>
      <path d="M10 11V8.5a2 2 0 014 0V11" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="14.5" r="1" fill="white"/>
    </svg>
  ),
  'Zod': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#3068B7"/>
      <path d="M7 8h10l-7 8h7" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'REST APIs': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#1a1a2e"/>
      <path d="M5 9h3l2 6 2-6 2 6 2-6h3" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  /* ── Automation & AI ── */
  'n8n': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#FF6D5A"/>
      <text x="2.5" y="16.5" fontSize="10" fontWeight="900" fontFamily="monospace" fill="white">n8n</text>
    </svg>
  ),
  'WhatsApp API': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  'GPT-4o': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  ),
  'Google Sheets': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M11.318 0L6 5.318V24h12V0h-6.682z" fill="#34A853"/>
      <path d="M6 5.318L11.318 0H6v5.318z" fill="#188038"/>
      <path d="M11.318 0v5.318H6" fill="#2E7D32" opacity="0.4"/>
      <rect x="8" y="9" width="8" height="1.2" fill="white"/>
      <rect x="8" y="11.5" width="8" height="1.2" fill="white"/>
      <rect x="8" y="14" width="5" height="1.2" fill="white"/>
    </svg>
  ),
  'Gmail API': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.364l-6.545-4.636v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.273l6.545-4.636 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    </svg>
  ),
  'Webhooks': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#6B7280"/>
      <path d="M12 4a2 2 0 100 4 2 2 0 000-4zM7 13a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" fill="white"/>
      <path d="M12 8v2M9.5 14.5L12 10M14.5 14.5L12 10" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  'Twilio': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="12" fill="#F22F46"/>
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="white"/>
      <circle cx="15.5" cy="8.5" r="1.5" fill="white"/>
      <circle cx="8.5" cy="15.5" r="1.5" fill="white"/>
      <circle cx="15.5" cy="15.5" r="1.5" fill="white"/>
    </svg>
  ),
  'Make': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" rx="3" fill="#6D00CC"/>
      <text x="3" y="16.5" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="white">Make</text>
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.953S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.03v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.21 1.818a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083z" fill="#3776AB"/>
      <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.067S24 18.21 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.03v2.867s.109 3.402-3.35 3.402H9.449s-3.24-.052-3.24 3.13v5.403S5.72 24 12.086 24zm3.21-1.818a1.042 1.042 0 1 1 0-2.083 1.042 1.042 0 0 1 0 2.083z" fill="#FFD43B"/>
    </svg>
  ),
  /* ── Herramientas base ── */
  'HTML5': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  'CSS3': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1572B6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect width="24" height="24" fill="#F7DF1E"/>
      <path d="M6 17.5c.5.9 1.2 1.5 2.3 1.5 1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7L7.5 15.7C6.1 15.1 5.2 14.3 5.2 12.7 5.2 11.2 6.3 10 8.1 10c1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.5-.6-.7-1.2-.7-.5 0-.9.3-.9.8 0 .5.3.8 1.1 1.1l.7.3c1.7.7 2.6 1.5 2.6 3.1 0 1.8-1.4 2.9-3.3 2.9-1.8 0-3-.9-3.6-2.1L6 17.5zm7.2.3c.4.8 1 1.2 1.8 1.2.7 0 1.1-.3 1.1-.8 0-.6-.4-.8-1.2-1.1l-.4-.2c-1.4-.6-2.2-1.3-2.2-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.5-.6-.8-1.2-.8-.6 0-.9.3-.9.8 0 .5.3.7 1 1l.4.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.9-3 2.9-1.7 0-2.8-.9-3.3-2l1.4-.8z" fill="#000"/>
    </svg>
  ),
  'Git': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.604 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.404-.541-.541-.674-1.341-.396-2.004L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  'GitHub': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  'VS Code': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#007ACC">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  ),
  'Docker': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .102.084.185.185.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.21-.512-.51-.967-.9-1.362-.39-.396-.84-.709-1.35-.94-.51-.23-1.052-.348-1.623-.348-.57 0-1.11.118-1.62.347-.51.23-.96.543-1.35.94-.39.394-.69.85-.9 1.36-.21.51-.316 1.053-.316 1.624 0 .57.106 1.112.316 1.622.21.51.51.965.9 1.362.39.396.84.708 1.35.94.51.23 1.05.347 1.62.347.573 0 1.113-.118 1.623-.348.51-.231.96-.544 1.35-.94.39-.397.69-.852.9-1.362.21-.51.316-1.052.316-1.622 0-.57-.106-1.113-.316-1.623"/>
    </svg>
  ),
  'Vercel': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  ),
  'React Router': (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#CA4245">
      <path d="M12.118 5.466c-.394 0-.75.072-1.073.216L7.46 3.039a1.855 1.855 0 0 0 .054-.432C7.514 1.174 6.34 0 4.917 0 3.493 0 2.32 1.174 2.32 2.607c0 1.427 1.174 2.607 2.597 2.607.394 0 .75-.08 1.085-.218l3.57 2.625a3.051 3.051 0 0 0-.198 1.08c0 .528.135 1.017.373 1.444l-3.697 3.697a2.686 2.686 0 0 0-.865-.144c-1.484 0-2.697 1.214-2.697 2.698 0 1.483 1.213 2.697 2.697 2.697s2.697-1.214 2.697-2.697c0-.312-.053-.61-.145-.889l3.593-3.592c.49.26 1.042.416 1.629.416a3.308 3.308 0 1 0 0-6.572zm6.713 6.19c-1.427 0-2.607 1.174-2.607 2.597 0 .328.063.638.17.928l-3.14 3.14a2.756 2.756 0 0 0-1.082-.232c-.628 0-1.21.214-1.679.567l-3.2-3.2.002-.062a2.606 2.606 0 0 0-.432-.028 2.607 2.607 0 1 0 0 5.214 2.61 2.61 0 0 0 2.607-2.607v-.055l3.2 3.2a2.749 2.749 0 0 0-.03 3.885 2.749 2.749 0 0 0 3.885 0 2.749 2.749 0 0 0 0-3.885 2.714 2.714 0 0 0-.667-.46l3.098-3.098c.345.178.73.283 1.143.283a2.607 2.607 0 1 0-.268-5.187z"/>
    </svg>
  ),
}

/* ----------------------------------------------------------
   Tech Stacks data — expanded
---------------------------------------------------------- */
const TECH_STACKS = [
  {
    label: 'Frontend',
    accent: '#46cdf0',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Three.js', 'Vite', 'shadcn/ui', 'Framer Motion', 'React Router'],
  },
  {
    label: 'Backend',
    accent: '#a78bfa',
    items: ['Node.js', 'Hono', 'tRPC', 'Drizzle ORM', 'MySQL', 'PostgreSQL', 'OAuth 2.0', 'REST APIs', 'Zod'],
  },
  {
    label: 'Automatización & IA',
    accent: '#25D366',
    items: ['n8n', 'WhatsApp API', 'GPT-4o', 'Google Sheets', 'Gmail API', 'Webhooks', 'Twilio', 'Make'],
  },
  {
    label: 'Herramientas',
    accent: '#f97316',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Git', 'GitHub', 'VS Code', 'Vercel'],
  },
]

/* ----------------------------------------------------------
   TechItem — logo + name
---------------------------------------------------------- */
function TechItem({ name, accent }: { name: string; accent: string }) {
  const logo = LOGOS[name]
  return (
    <div
      className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all duration-250 cursor-default group/item"
      style={{ minWidth: '64px' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.background = `${accent}12`
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.background = 'transparent'
      }}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-250 group-hover/item:scale-110"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
        {logo ?? (
          <span className="font-mono font-bold text-[0.55rem] text-center leading-tight"
            style={{ color: accent }}>
            {name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <span className="font-mono text-[0.58rem] text-center leading-tight whitespace-nowrap"
        style={{ color: 'rgba(175,195,210,0.65)' }}>
        {name}
      </span>
    </div>
  )
}

/* ----------------------------------------------------------
   About section — Bento Grid editorial
---------------------------------------------------------- */
export function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="section-pad relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute rounded-full"
          style={{ width: '55vw', height: '55vw', top: '-10%', right: '-5%',
            background: 'radial-gradient(circle, rgba(70,205,240,0.07) 0%, transparent 65%)' }} />
        <div className="absolute rounded-full"
          style={{ width: '40vw', height: '40vw', bottom: '0%', left: '-5%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%)' }} />
      </div>

      <div className="site-container relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
            style={{ background: 'rgba(70,205,240,0.06)', borderColor: 'rgba(70,205,240,0.18)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-glow animate-pulse" />
            <span className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-glow">Sobre mí</span>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* CARD 1: Photo — tall */}
          <div className="md:col-span-4 md:row-span-2 rounded-3xl relative overflow-hidden group"
            style={{ minHeight: '420px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 30%, rgba(70,205,240,0.06) 0%, transparent 70%)' }} />
            {['top-4 left-4 border-t border-l','top-4 right-4 border-t border-r','bottom-4 left-4 border-b border-l','bottom-4 right-4 border-b border-r']
              .map((cls, i) => (
                <div key={i} className={`absolute w-6 h-6 z-10 transition-all duration-300 group-hover:w-8 group-hover:h-8 ${cls}`}
                  style={{ borderColor: 'rgba(70,205,240,0.45)' }} />
              ))}
            <div className="absolute inset-0">
              <Image
                src="/imagen-eddy.jpeg"
                alt="Eddy Josue Trejo Rubio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              {/* gradient overlay bottom so name is readable */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(3,8,16,0.92) 0%, rgba(3,8,16,0.3) 45%, transparent 70%)' }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6"
              style={{ background: 'linear-gradient(to top, rgba(3,8,16,0.95) 0%, transparent 100%)' }}>
              <p className="font-display font-black text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                Eddy Josue<br /><span style={{ color: '#46cdf0' }}>Trejo Rubio</span>
              </p>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mt-1"
                style={{ color: 'rgba(70,205,240,0.5)' }}>Full Stack Developer</p>
            </div>
          </div>

          {/* CARD 2: Bio */}
          <div className="md:col-span-8 rounded-3xl p-8 relative overflow-hidden group"
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(70,205,240,0.6), transparent)' }} />
            <div className="absolute right-8 top-8 hidden lg:flex flex-col items-center gap-1">
              <div className="h-12 w-px" style={{ background: 'rgba(70,205,240,0.15)' }} />
              <span className="font-mono text-[0.52rem] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(70,205,240,0.3)', writingMode: 'vertical-rl' }}>Est. 2025 · Venezuela</span>
              <div className="h-12 w-px" style={{ background: 'rgba(70,205,240,0.15)' }} />
            </div>
            <h2 id="about-heading" className="font-display font-black text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)', maxWidth: '520px' }}>
              Construyo lo que <span style={{ color: '#46cdf0' }}>imaginas</span>,<br />
              lo llevo a <span className="underline decoration-glow/40 underline-offset-4">producción</span>.
            </h2>
            <p className="text-[0.92rem] leading-[1.75] mb-6 max-w-[500px]" style={{ color: 'rgba(150,175,195,0.75)' }}>
              Soy Full Stack Developer de Venezuela con 8 meses de experiencia construyendo
              plataformas web reales — desde el diseño hasta el despliegue. Especializado en
              React, TypeScript y automatización de flujos de negocio con n8n e IA.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Disponible remoto', 'Entrega rápida', 'Código limpio', 'Del diseño al deploy'].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full font-mono text-[0.65rem] tracking-wide"
                  style={{ background: 'rgba(70,205,240,0.07)', border: '1px solid rgba(70,205,240,0.18)', color: 'rgba(70,205,240,0.8)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 3: 07 meses */}
          <div className="md:col-span-5 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(70,205,240,0.08) 0%, rgba(70,205,240,0.03) 100%)', border: '1px solid rgba(70,205,240,0.18)', minHeight: '180px' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 70% at 20% 50%, rgba(70,205,240,0.1) 0%, transparent 70%)' }} />
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(70,205,240,0.5)' }}>Experiencia</p>
            <div className="flex items-end gap-3">
              <span className="font-display font-black leading-none"
                style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', color: '#46cdf0', textShadow: '0 0 40px rgba(70,205,240,0.4)' }}>08</span>
              <div className="pb-3">
                <p className="font-mono text-[0.65rem] tracking-widest uppercase leading-tight" style={{ color: 'rgba(255,255,255,0.5)' }}>meses<br />activos</p>
              </div>
            </div>
            <p className="font-mono text-[0.6rem] tracking-wider" style={{ color: 'rgba(70,205,240,0.35)' }}>Proyectos reales · Clientes reales</p>
          </div>

          {/* CARD 4: Location */}
          <div className="md:col-span-3 rounded-3xl p-7 relative overflow-hidden group flex flex-col justify-between"
            style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', minHeight: '180px' }}>
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(150,175,195,0.4)' }}>Ubicación</p>
            <div className="flex-1 flex items-center justify-center py-2">
              <div className="relative">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                  <circle cx="28" cy="28" r="27" stroke="rgba(70,205,240,0.12)" strokeWidth="1"/>
                  <circle cx="28" cy="28" r="18" stroke="rgba(70,205,240,0.08)" strokeWidth="1"/>
                  <circle cx="28" cy="28" r="6" fill="rgba(70,205,240,0.6)" style={{ filter: 'drop-shadow(0 0 6px rgba(70,205,240,0.8))' }}/>
                  <circle cx="28" cy="28" r="3" fill="#46cdf0"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full animate-ping" style={{ background: 'rgba(70,205,240,0.3)' }} />
                </div>
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-white text-[0.95rem] leading-tight">Venezuela</p>
              <p className="font-mono text-[0.62rem] mt-0.5" style={{ color: 'rgba(150,175,195,0.45)' }}>Estado Aragua · Remoto</p>
            </div>
          </div>

          {/* CARD 5: Proyectos */}
          <div className="md:col-span-4 rounded-3xl p-7 relative overflow-hidden group flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.03) 100%)', border: '1px solid rgba(249,115,22,0.18)', minHeight: '180px' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 70% at 80% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(249,115,22,0.5)' }}>Proyectos</p>
            <span className="font-display font-black leading-none"
              style={{ fontSize: 'clamp(4rem, 7vw, 5.5rem)', color: '#f97316', textShadow: '0 0 40px rgba(249,115,22,0.3)' }}>07</span>
            <p className="font-mono text-[0.6rem] tracking-wider" style={{ color: 'rgba(249,115,22,0.35)' }}>En producción y creciendo</p>
          </div>

          {/* CARD 6: Tech stack full width */}
          <div className="md:col-span-12 rounded-3xl p-7 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-6">
              <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(150,175,195,0.4)' }}>Stack tecnológico</p>
              <div className="flex gap-1.5">
                {['#46cdf0','#a78bfa','#25D366','#f97316'].map((c) => (
                  <div key={c} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.6 }} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TECH_STACKS.map((stack) => (
                <div key={stack.label}
                  className="rounded-2xl p-4 transition-all duration-300"
                  style={{ background: `${stack.accent}06`, border: `1px solid ${stack.accent}18` }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = `${stack.accent}10`
                    el.style.borderColor = `${stack.accent}30`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.background = `${stack.accent}06`
                    el.style.borderColor = `${stack.accent}18`
                  }}>

                  {/* Category label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: stack.accent, boxShadow: `0 0 8px ${stack.accent}` }} />
                    <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase font-bold" style={{ color: stack.accent }}>
                      {stack.label}
                    </p>
                  </div>

                  {/* Tech items grid with logos */}
                  <div className="flex flex-wrap gap-1">
                    {stack.items.map((tech) => (
                      <TechItem key={tech} name={tech} accent={stack.accent} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
