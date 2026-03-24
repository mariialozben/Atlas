import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ChipProps } from './types'

export default function Chip({ label, selected = false, onRemove, onClick }: ChipProps) {
  return (
    <span
      data-el="chip"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-default',
        onClick && 'cursor-pointer',
        selected
          ? 'text-[var(--bg-page)]'
          : 'text-[var(--text-primary)] hover:bg-[rgba(191,191,191,0.15)]',
      )}
      style={{
        backgroundColor: selected ? 'var(--color-ash)' : 'var(--bg-elevated)',
        border: '1px solid var(--border)',
      }}
    >
      {label}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove() }}
          className="ml-0.5 rounded-full hover:opacity-70 transition-opacity"
          aria-label={`Remove ${label}`}
        >
          <X size={10} />
        </button>
      )}
    </span>
  )
}
