import { useEffect, useState } from 'react'

export default function AtlasHomeBackground() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      data-el="home-background"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <style>{`
        @keyframes grain-shift {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-2px, 3px); }
          40%  { transform: translate(3px, -2px); }
          60%  { transform: translate(-1px, 4px); }
          80%  { transform: translate(4px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes glow-morph {
          0%   { transform: translate(-50%, -50%) scale(1, 1) rotate(0deg); opacity: 0.9; }
          25%  { transform: translate(-50%, -50%) scale(1.15, 0.85) rotate(6deg); opacity: 0.7; }
          50%  { transform: translate(-50%, -50%) scale(0.9, 1.2) rotate(-4deg); opacity: 1; }
          75%  { transform: translate(-50%, -50%) scale(1.1, 0.9) rotate(8deg); opacity: 0.75; }
          100% { transform: translate(-50%, -50%) scale(1, 1) rotate(0deg); opacity: 0.9; }
        }
      `}</style>
      <div
        className="absolute w-[900px] h-[500px]"
        style={{
          left: pos.x,
          top: pos.y,
          background: 'radial-gradient(ellipse 60% 45% at 50% 50%, rgba(0,123,255,0.22) 0%, rgba(0,123,255,0.06) 50%, transparent 80%)',
          filter: 'blur(40px)',
          transition: 'left 150ms ease-out, top 150ms ease-out',
          animation: 'glow-morph 4s ease-in-out infinite',
        }}
      />
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          animation: 'grain-shift 0.4s steps(1) infinite',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.12,
        }}
      />
    </div>
  )
}
