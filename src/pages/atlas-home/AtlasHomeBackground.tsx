export default function AtlasHomeBackground() {
  return (
    <div
      data-el="home-background"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Subtle radial glow at top-center */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 animate-pulse"
        style={{
          background: 'radial-gradient(ellipse at center, var(--blue-500) 0%, transparent 70%)',
          animationDuration: '4s',
        }}
      />
      {/* Thin horizontal accent line */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 opacity-30 animate-pulse"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--blue-500), transparent)',
          animationDuration: '3s',
        }}
      />
    </div>
  )
}
