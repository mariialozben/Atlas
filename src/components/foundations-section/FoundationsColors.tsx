const COLORS = [
  { group: 'Atlas Neutrals', items: [
    { name: '--color-jet-black', hex: '#1A1A1A', purpose: 'Page background (dark)' },
    { name: '--color-onyx',      hex: '#222526', purpose: 'Surface background' },
    { name: '--color-graphite',  hex: '#353A3E', purpose: 'Elevated surface, nav background' },
    { name: '--color-ash',       hex: '#BFBFBF', purpose: 'Highlights, hover states, dividers' },
    { name: '--color-platinum',  hex: '#E0E0E0', purpose: 'Primary text, logo, headings' },
  ]},
  { group: 'Accent Colors', items: [
    { name: '--blue-500', hex: '#2E7DD6', purpose: 'Primary actions, CTAs, links' },
    { name: '--blue-300', hex: '#60A8E8', purpose: 'Secondary, inactive states' },
    { name: '--blue-50',  hex: '#E8F4FE', purpose: 'Focus tint, hover background on light' },
  ]},
]

const SEMANTIC = [
  { name: '--color-success', hex: '#22c55e', label: 'Success' },
  { name: '--color-warning', hex: '#f59e0b', label: 'Warning' },
  { name: '--color-danger',  hex: '#ef4444', label: 'Danger' },
]

export default function FoundationsColors() {
  return (
    <div data-el="foundations-colors" className="space-y-8">
      {COLORS.map(({ group, items }) => (
        <section key={group}>
          <h3 className="text-sm font-medium text-white mb-3">{group}</h3>
          <div className="flex gap-2 flex-wrap">
            {items.map(({ name, hex, purpose }) => (
              <div key={name} className="flex flex-col gap-1 items-center">
                <div
                  className="w-14 h-14 rounded-lg border border-white/10"
                  style={{ backgroundColor: hex }}
                  title={purpose}
                />
                <span className="text-xs font-mono text-center" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                  {name.replace('--', '')}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
      <section>
        <h3 className="text-sm font-medium text-white mb-3">Semantic colours</h3>
        <div className="flex gap-4 flex-wrap">
          {SEMANTIC.map(({ name, hex, label }) => (
            <div key={name} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: hex }} />
              <span className="text-xs text-white">{label}</span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{hex}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
