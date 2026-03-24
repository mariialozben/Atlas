import { useState } from 'react'
import { Toggle } from '@/components/ui/toggle'
import { Separator } from '@/components/ui/separator'
import { TOOLBAR_GROUPS } from './data'

export default function RichTextToolbar() {
  const [active, setActive] = useState<Set<string>>(new Set())
  const toggleActive = (id: string) =>
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })

  return (
    <div
      data-el="rich-text-toolbar"
      className="flex items-center gap-1 p-2 rounded-lg flex-wrap"
      style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
    >
      {TOOLBAR_GROUPS.map((group, i) => (
        <div key={group.id} className="flex items-center gap-0.5">
          {i > 0 && <Separator orientation="vertical" className="h-5 mx-1" />}
          {group.buttons.map((btn) => {
            const Icon = btn.icon
            return (
              <Toggle
                key={btn.id}
                size="sm"
                pressed={active.has(btn.id)}
                onPressedChange={() => toggleActive(btn.id)}
                aria-label={btn.label}
                title={btn.label}
              >
                <Icon size={14} />
              </Toggle>
            )
          })}
        </div>
      ))}
    </div>
  )
}
