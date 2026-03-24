const PRINCIPLES = [
  { icon: '◑', title: 'Dark-first', desc: 'Designed for dark backgrounds, adapts gracefully to light mode.' },
  { icon: '⬜', title: 'Minimalist', desc: 'Whitespace does the heavy lifting. Every element earns its place.' },
  { icon: '⬡', title: 'Reusable', desc: 'Every token and component is project-agnostic and portable.' },
  { icon: '⊞', title: 'Bilingual', desc: 'English and Ukrainian are equal, first-class citizens.' },
  { icon: '≡', title: 'Consistent', desc: 'One type scale, one radius system, one palette across all products.' },
  { icon: '◈', title: 'Atlas-branded', desc: 'Name, tagline, and logo applied throughout the system.' },
]

export default function FoundationsPrinciples() {
  return (
    <div data-el="foundations-principles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PRINCIPLES.map(({ icon, title, desc }) => (
        <div
          key={title}
          className="p-5 rounded-lg border border-white/10"
          style={{ backgroundColor: 'var(--bg-elevated)' }}
        >
          <div className="text-2xl mb-3" style={{ color: 'var(--blue-500)' }}>{icon}</div>
          <h3 className="text-sm font-medium text-white mb-1">{title}</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
        </div>
      ))}
    </div>
  )
}
