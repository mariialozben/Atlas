import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router'
import AtlasNavItem from './AtlasNavItem'
import { NAV_ITEMS } from './data'
import type { NavItem } from './types'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

function NavGroup({ item }: { item: NavItem }) {
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
        <span>{t(item.labelKey)}</span>
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      {open && (
        <div>
          {item.children?.map((child) => (
            <AtlasNavItem key={child.key} item={child} depth={1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AtlasLeftNav() {
  return (
    <nav
      data-el="global-leftnav"
      className="fixed top-[56px] left-0 bottom-0 w-[220px] overflow-y-auto z-40 flex flex-col pt-4"
      style={{ backgroundColor: '#222526', borderRight: '1px solid var(--border)' }}
    >
      {NAV_ITEMS.map((item) =>
        item.children ? (
          <NavGroup key={item.key} item={item} />
        ) : (
          <AtlasNavItem key={item.key} item={item} />
        )
      )}
    </nav>
  )
}
