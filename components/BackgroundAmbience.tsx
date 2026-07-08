/* Ambient glow blobs — capas de luz fijas que dan profundidad a todo el sitio.
   Posicionados con CSS para que actúen como "fuentes de luz" en el espacio profundo.
   Los orbes cian se reservan al 3-5 % de opacidad máxima (disciplina de acento). */
export function BackgroundAmbience() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Orbe hero — top-right, fuente de luz principal del hero 3D (Fase 4) */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(66,192,245,0.055) 0%, rgba(42,111,216,0.03) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Orbe mid-left — aparece a mitad de página, zona portafolio/stats */}
      <div
        className="absolute top-[55vh] -left-[180px] w-[560px] h-[560px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(66,192,245,0.04) 0%, rgba(28,140,194,0.02) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orbe bottom-center — zona CTA final */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(66,192,245,0.035) 0%, rgba(14,22,31,0) 65%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Void layer — gradiente vertical profundo que da relieve al fondo */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(14,22,31,0) 0%, rgba(8,12,18,0.6) 100%),
            radial-gradient(ellipse 60% 30% at 50% 100%, rgba(8,12,18,0.5) 0%, transparent 100%)
          `,
        }}
      />
    </div>
  )
}
