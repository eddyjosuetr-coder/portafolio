/* Grain/noise overlay — textura sutil de película sobre toda la página.
   Valor de opacidad: 0.032 — perceptible en pantallas calibradas, invisible en OLED. */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9998,
        pointerEvents:   'none',
        opacity:         0.032,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize:   '300px 300px',
      }}
    />
  )
}
