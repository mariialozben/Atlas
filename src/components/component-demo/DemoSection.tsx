import type { DemoSectionProps } from './types'

export default function DemoSection({ title, description, children }: DemoSectionProps) {
  return (
    <section data-el={`demo-section-${title.toLowerCase().replace(/\s+/g, '-')}`} className="mb-10">
      <h2 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)', fontFamily: '"Lato", sans-serif' }}>
        {title}
      </h2>
      {description && (
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{description}</p>
      )}
      <div className="flex flex-wrap gap-3 items-start">
        {children}
      </div>
    </section>
  )
}
