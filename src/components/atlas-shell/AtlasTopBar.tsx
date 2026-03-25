import { Menu } from 'lucide-react'
import AtlasWordmark from './AtlasWordmark'

interface AtlasTopBarProps {
  onMenuToggle?: () => void
}

export default function AtlasTopBar({ onMenuToggle }: AtlasTopBarProps) {
  return (
    <header
      data-el="global-header"
      className="fixed top-0 left-0 right-0 h-[56px] z-50 flex items-center px-6 gap-3 md:bg-transparent md:border-0 md:shadow-none md:backdrop-filter-none md:mx-0 md:rounded-none mx-1 mt-1 rounded-[8px]"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          [data-el="global-header"] {
            background: rgba(255,255,255,0.03) !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.07);
            box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          }
        }
      `}</style>
      <button
        data-el="global-header-menu-toggle"
        onClick={onMenuToggle}
        className="md:hidden flex items-center justify-center w-8 h-8 text-[var(--color-ash)] hover:text-[var(--color-platinum)] transition-colors"
        aria-label="Toggle navigation menu"
      >
        <Menu size={20} />
      </button>
      <AtlasWordmark />
    </header>
  )
}
