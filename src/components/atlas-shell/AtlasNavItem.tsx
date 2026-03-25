import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils'
import type { NavItem } from './types'
import { useLocale } from '@/hooks/use-locale'

interface AtlasNavItemProps {
  item: NavItem
  depth?: number
}

export default function AtlasNavItem({ item, depth = 0 }: AtlasNavItemProps) {
  const { t } = useLocale()
  const location = useLocation()
  const isActive = location.pathname === item.path ||
    (item.path !== '/' && location.pathname.startsWith(item.path))

  return (
    <Link
      to={item.path}
      data-el={`global-nav-item-${item.key}`}
      className={cn(
        'flex items-center text-sm transition-colors px-4 py-2 rounded-none',
        depth > 0 ? 'pl-8 text-xs' : '',
        isActive
          ? 'text-[var(--color-platinum)]'
          : 'text-[var(--color-ash)] hover:text-[var(--color-platinum)] hover:bg-[rgba(191,191,191,0.10)]',
      )}
      style={isActive ? {
        borderLeft: '3px solid #007bff',
        fontWeight: 700,
        background: 'rgba(191,191,191,0.12)',
        paddingLeft: depth > 0 ? '29px' : '13px',
      } : {}}
    >
      {t(item.labelKey)}
    </Link>
  )
}
