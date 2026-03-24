import { Link, useLocation } from 'react-router'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { key: 'nav.foundations', href: '/foundations' },
  { key: 'nav.components', href: '/components' },
  { key: 'nav.layouts', href: '/layouts' },
  { key: 'nav.tokens', href: '/tokens' },
]

export default function AtlasNav() {
  const { t } = useLocale()
  const { pathname } = useLocation()

  return (
    <nav data-el="global-nav" className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map(({ key, href }) => (
        <Link
          key={href}
          to={href}
          data-el={`global-nav-${key.split('.')[1]}`}
          className={cn(
            'text-sm transition-colors',
            pathname === href
              ? 'text-white font-medium'
              : 'text-gray-400 hover:text-white'
          )}
        >
          {t(key)}
        </Link>
      ))}
    </nav>
  )
}
