import { useState } from 'react'
import { Outlet } from 'react-router'
import AtlasTopBar from './AtlasTopBar'
import AtlasLeftNav from './AtlasLeftNav'


export default function AtlasShell() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div data-el="global-shell" className="min-h-[100dvh]" style={{ backgroundColor: '#222526' }}>
      {/* Background layer — top bar and sidebar sit here */}
      <AtlasTopBar onMenuToggle={() => setNavOpen((prev) => !prev)} />
      <AtlasLeftNav open={navOpen} onClose={() => setNavOpen(false)} />

      {/* Foreground content layer — glass tile floating above the background */}
      <div
        data-el="global-content"
        className="pt-1 pl-0 md:pl-[220px] min-h-[100dvh] flex flex-col pr-1 pb-1"
      >
        <div
          data-el="global-content-glass"
          className="flex-1 flex flex-col rounded-[8px] overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
