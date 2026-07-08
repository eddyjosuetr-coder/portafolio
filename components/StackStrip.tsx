'use client'

import React from 'react'
/* ----------------------------------------------------------
   Stack marquee — two rows, opposite directions
---------------------------------------------------------- */

const OpenAIIcon = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current"><title>OpenAI</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5987 8.3829 14.6188 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.8092 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
)

const ROW_A = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: '/icons/simpleicons/nextdotjs.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'n8n', icon: '/icons/simpleicons/n8n.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Claude AI', icon: '/icons/simpleicons/anthropic.svg' },
]

const ROW_B = [
  { name: 'Supabase', icon: '/icons/simpleicons/supabase.svg' },
  { name: 'APIs REST', icon: '/icons/simpleicons/json.svg' },
  { name: 'OpenAI', icon: OpenAIIcon },
  { name: 'LangChain', icon: '/icons/simpleicons/langchain.svg' },
  { name: 'Redis', icon: '/icons/simpleicons/redis.svg' },
  { name: 'Moonshot AI', icon: '/icons/simpleicons/moonshotai.svg' },
  { name: 'Stripe', icon: '/icons/simpleicons/stripe.svg' },
  { name: 'GraphQL', icon: '/icons/simpleicons/graphql.svg' },
  { name: 'GSAP', icon: '/icons/simpleicons/greensock.svg' },
]

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { name: string; icon: string | React.ReactNode }[]
  reverse?: boolean
}) {
  // Repetir suficientes veces para cubrir pantallas ultra anchas sin dejar espacios
  const baseItems = [...items, ...items, ...items, ...items]
  const doubled = [...baseItems, ...baseItems]

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage:
          'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}
        style={{ width: 'max-content', display: 'flex', gap: 0 }}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="inline-flex items-center justify-center shrink-0 px-8 opacity-60 hover:opacity-100 transition-opacity duration-300 select-none cursor-default group"
            title={item.name}
          >
            {typeof item.icon === 'string' ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={item.icon} alt={item.name} className="h-8 w-auto max-w-[120px] object-contain" />
            ) : (
              <div className="h-8 w-8 flex items-center justify-center text-white">
                {item.icon}
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export function StackStrip() {
  return (
    <div
      className="relative py-8 overflow-hidden border-y border-white/[0.04]"
      style={{ background: 'rgba(8,12,18,0.55)' }}
      aria-label="Stack tecnológico de Eddy Trejo"
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(66,192,245,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 relative">
        {/* Row 1 — forward */}
        <MarqueeRow items={ROW_A} />

        {/* Row 2 — reverse */}
        <MarqueeRow items={ROW_B} reverse />
      </div>
    </div>
  )
}
