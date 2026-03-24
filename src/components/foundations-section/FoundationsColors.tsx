const COLORS = [
  { group: 'Blue palette', items: [
    { name: '--blue-50', hex: '#E8F4FE', purpose: 'Hover backgrounds, focus tints' },
    { name: '--blue-300', hex: '#60A8E8', purpose: 'Decorative, inactive, secondary UI' },
    { name: '--blue-500', hex: '#2E7DD6', purpose: 'Primary actions, CTAs, brand accent' },
    { name: '--blue-700', hex: '#1A4F8A', purpose: 'Pressed states, strong borders' },
    { name: '--blue-900', hex: '#0B2647', purpose: 'Deep accents, elevated dark surfaces' },
  ]},
  { group: 'Neutral palette', items: [
    { name: '--gray-50', hex: '#F5F5F4', purpose: 'Light mode page background' },
    { name: '--gray-100', hex: '#E8E7E3', purpose: 'Dividers, subtle borders' },
    { name: '--gray-400', hex: '#888780', purpose: 'Muted text, placeholders' },
    { name: '--gray-700', hex: '#444441', purpose: 'Body text (dark mode)' },
    { name: '--gray-900', hex: '#1A1A18', purpose: 'Primary dark background' },
  ]},
]

const SEMANTIC = [
  { name: '--color-success', hex: '#1D9E75', label: 'Success' },
  { name: '--color-warning', hex: '#EF9F27', label: 'Warning' },
  { name: '--color-danger', hex: '#E24B4A', label: 'Danger' },
  { name: '--color-info', hex: '#2E7DD6', label: 'Info' },
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
                <span className="text-xs font-mono text-center" style={{ color: 'var(--gray-400)', fontSize: '10px' }}>
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
              <span className="text-xs font-mono" style={{ color: 'var(--gray-400)' }}>{hex}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
