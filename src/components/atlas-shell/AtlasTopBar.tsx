import { Menu } from 'lucide-react'
import AtlasWordmark from './AtlasWordmark'

interface AtlasTopBarProps {
  onMenuToggle?: () => void
}

export default function AtlasTopBar({ onMenuToggle }: AtlasTopBarProps) {
  return (
    <header
      data-el="global-header"
      className="fixed top-0 left-0 right-0 h-[56px] z-50 flex items-center px-6 gap-3"
      style={{ backgroundColor: 'transparent' }}
    >
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
