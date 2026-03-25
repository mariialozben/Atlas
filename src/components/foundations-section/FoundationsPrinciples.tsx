import {
  IconMinimize,
  IconComponents,
  IconRuler,
} from '@tabler/icons-react'
import type { FC } from 'react'
import type { IconProps } from '@tabler/icons-react'

const PRINCIPLES: { icon: FC<IconProps>; title: string; desc: string }[] = [
  { icon: IconMinimize, title: 'Minimalist', desc: 'Whitespace does the heavy lifting. Every element earns its place.' },
  { icon: IconComponents, title: 'Reusable', desc: 'Every token and component is project-agnostic and portable.' },
  { icon: IconRuler, title: 'Consistent', desc: 'One type scale, one radius system, one palette across all products.' },
]

export default function FoundationsPrinciples() {
  return (
    <div data-el="foundations-principles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="p-5 rounded-lg border border-white/10"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <div className="mb-3">
            <Icon size={24} stroke={1.5} style={{ color: '#007bff' }} />
          </div>
          <h3 className="text-sm font-medium text-white mb-1">{title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
        </div>
      ))}
    </div>
  )
}
