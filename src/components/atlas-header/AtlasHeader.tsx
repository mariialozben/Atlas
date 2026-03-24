import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import AtlasLogo from './AtlasLogo'
import AtlasNav from './AtlasNav'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { cn } from '@/lib/utils'
import type { AtlasHeaderProps } from './types'

export default function AtlasHeader({ variant = 'transparent' }: AtlasHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = variant === 'solid' || scrolled

  return (
    <header
      data-el="global-header"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 transition-all duration-200',
        solid
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <Link to="/" className="mr-8 flex-shrink-0">
        <AtlasLogo size="sm" />
      </Link>

      <div className="flex-1 flex items-center">
        <AtlasNav />
      </div>

      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
