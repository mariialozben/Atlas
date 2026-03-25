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
    </div>
  )
}
