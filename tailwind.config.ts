import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand System ──────────────────────────────
        'deep-space':  '#0E161F',    // main background
        void:          '#080C12',    // deepest layer, relief/depth
        'silver-blue': '#A0B2BC',   // secondary text, lines, subtle UI
        glacier:       '#E2E5EF',   // primary text
        accent:        '#42C0F5',   // Trace Cyan — CTA, links, focus, keyword
        'accent-glow': '#76D6FA',   // hover, glows, 3D highlights
        'accent-deep': '#1C8CC2',   // pressed state, active borders

        // ── Backward-compat aliases ────────────────────────────
        bg:        '#0E161F',   // was #02040A
        silver:    '#A0B2BC',
        glow:      '#76D6FA',   // was #C4D8E4 — now accent-glow
        ink:       '#E2E5EF',   // was #F8F9FA — now glacier
        'ink-dim': '#A0B2BC',
        panel:     'rgba(14, 22, 31, 0.6)',
        'panel-2': 'rgba(14, 22, 31, 0.88)',
        line:      'rgba(160,178,188,0.08)',
        glass:     'rgba(160,178,188,0.10)',
      },
      fontFamily: {
        // Work Sans PRIMARY — headlines + body
        display: ['var(--font-work-sans)', 'sans-serif'],
        body:    ['var(--font-work-sans)', 'sans-serif'],
        // Satoshi SECONDARY — editorial labels, badges
        accent:  ['var(--font-satoshi)',   'sans-serif'],
        // System mono
        mono:    ['ui-monospace', 'SFMono-Regular', 'Cascadia Code', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      backgroundImage: {
        aurora: 'linear-gradient(90deg, #76D6FA 0%, #42C0F5 22%, #2A6FD8 55%, #0E161F 100%)',
      },
      animation: {
        'pulse-live':      'pulseLive 2s ease-in-out infinite',
        'flow-in':         'flowIn 0.4s ease forwards',
        'marquee':         'marquee 150s linear infinite',
        'marquee-reverse': 'marqueeReverse 130s linear infinite',
      },
      keyframes: {
        pulseLive: {
          '0%,100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(0.85)' },
        },
        flowIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
