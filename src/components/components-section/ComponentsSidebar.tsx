import { COMPONENT_GROUPS } from './data'
import { cn } from '@/lib/utils'

interface ComponentsSidebarProps {
  activeSection: string
  onSelect: (id: string) => void
}

export default function ComponentsSidebar({ activeSection, onSelect }: ComponentsSidebarProps) {
  return (
    <aside data-el="components-sidebar" className="w-40 flex-shrink-0">
      <nav className="space-y-1">
        {COMPONENT_GROUPS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={cn(
              'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
              activeSection === id
                ? 'text-white font-medium'
                : 'hover:text-white'
            )}
            style={{
              backgroundColor: activeSection === id ? 'var(--blue-900)' : 'transparent',
              color: activeSection === id ? 'white' : 'var(--gray-400)',
              borderLeft: activeSection === id ? '2px solid var(--blue-500)' : '2px solid transparent',
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
