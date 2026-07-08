export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Container — rounded square with cyan border */}
      <rect
        x="1" y="1" width="34" height="34" rx="8.5"
        fill="rgba(5,11,18,0.85)"
        stroke="rgba(70,205,240,0.55)"
        strokeWidth="1.5"
      />

      {/* Top-left corner accent */}
      <path d="M1 10 L1 4.5 Q1 1 4.5 1 L10 1" stroke="rgba(70,205,240,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* E — vertical spine */}
      <rect x="9" y="9.5" width="3" height="17" rx="1.2" fill="white" />

      {/* E — top bar */}
      <rect x="9" y="9.5" width="15.5" height="3" rx="1.2" fill="white" />

      {/* E — middle bar (shorter, white body) */}
      <rect x="9" y="16.5" width="11" height="3" rx="1.2" fill="white" />

      {/* Node at end of middle bar — automation reference */}
      <circle cx="23.5" cy="18" r="2.8" fill="#46cdf0" />
      <circle cx="23.5" cy="18" r="1.2" fill="rgba(5,11,18,0.9)" />

      {/* E — bottom bar */}
      <rect x="9" y="23.5" width="15.5" height="3" rx="1.2" fill="white" />
    </svg>
  )
}
