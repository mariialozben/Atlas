import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router'
import AtlasNavItem from './AtlasNavItem'
import { NAV_ITEMS } from './data'
import type { NavItem } from './types'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

interface NavGroupProps {
  item: NavItem
  onClose?: () => void
}

function NavGroup({ item, onClose }: NavGroupProps) {
  const { t } = useLocale()
  const location = useLocation()
  const isChildActive = item.children?.some(
    (child) => location.pathname === child.path || location.pathname.startsWith(child.path)
  ) ?? false
  const [open, setOpen] = useState(isChildActive)

  return (
    <div data-el={`global-nav-group-${item.key}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'flex items-center justify-between w-full text-sm px-4 py-2 transition-colors',
          isChildActive
            ? 'text-[var(--color-platinum)]'
            : 'text-[var(--color-ash)] hover:text-[var(--color-platinum)] hover:bg-[rgba(191,191,191,0.10)]',
        )}
      >
        <span className="flex items-center gap-2">
          {item.icon && <item.icon size={16} stroke={1.5} style={{ color: 'var(--color-ash)', opacity: 0.6 }} />}
          {t(item.labelKey)}
        </span>
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {open && (
        <div>
          {item.children?.map((child) => (
            <AtlasNavItem key={child.key} item={child} depth={1} onNavigate={onClose} />
          ))}
        </div>
      )}
    </div>
  )
}

interface AtlasLeftNavProps {
  open?: boolean
  onClose?: () => void
}

export default function AtlasLeftNav({ open, onClose }: AtlasLeftNavProps) {
  return (
    <>
      {/* Dark backdrop overlay — mobile only, visible when nav is open */}
      {open && (
        <div
          data-el="global-leftnav-backdrop"
          className="fixed inset-0 z-[39] md:hidden bg-black/50"
          onClick={onClose}
        />
      )}

      <nav
        data-el="global-leftnav"
        className={cn(
          'fixed top-[56px] left-0 bottom-0 w-[220px] overflow-y-auto z-40 flex flex-col pt-4',
          'hidden md:flex',
          open && 'flex',
        )}
        style={{ backgroundColor: 'transparent' }}
      >
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <NavGroup key={item.key} item={item} onClose={onClose} />
          ) : (
            <AtlasNavItem key={item.key} item={item} onNavigate={onClose} />
          )
        )}
      </nav>
    </>
  )
}
