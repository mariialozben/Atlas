import { Link, useLocation } from 'react-router'
import { cn } from '@/lib/utils'
import type { NavItem } from './types'
import { useLocale } from '@/hooks/use-locale'

interface AtlasNavItemProps {
  item: NavItem
  depth?: number
  onNavigate?: () => void
}

export default function AtlasNavItem({ item, depth = 0, onNavigate }: AtlasNavItemProps) {
  const { t } = useLocale()
  const location = useLocation()
  const isActive = location.pathname === item.path ||
    (item.path !== '/' && location.pathname.startsWith(item.path))

  return (
    <Link
      to={item.path}
      data-el={`global-nav-item-${item.key}`}
      onClick={onNavigate}
      className={cn(
        'relative flex items-center text-sm transition-colors px-4 py-2 rounded-none',
        depth > 0 ? 'pl-8 text-xs' : '',
        isActive
          ? 'text-[var(--color-platinum)]'
          : 'text-[var(--color-ash)] hover:text-[var(--color-platinum)] hover:bg-[rgba(191,191,191,0.10)]',
      )}
      style={isActive ? {
        fontWeight: 700,
        background: 'rgba(191,191,191,0.12)',
        paddingLeft: depth > 0 ? '29px' : '13px',
      } : {}}
    >
      {isActive && (
        <span
          className="absolute left-0 top-1 bottom-1"
          style={{ width: '3px', backgroundColor: '#007bff', borderRadius: '0 4px 4px 0' }}
        />
      )}
      <span className="flex items-center gap-2">
        {item.icon && <item.icon size={depth > 0 ? 14 : 16} stroke={1.5} style={{ color: 'var(--color-ash)', opacity: 0.6 }} />}
        {t(item.labelKey)}
      </span>
    </Link>
  )
}
