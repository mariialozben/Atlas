import { SPACING_SCALE, RADIUS_SCALE, SHADOW_SCALE } from './data'

export default function SpacingScale() {
  return (
    <div data-el="tokens-spacing" className="space-y-10">
      <section data-el="tokens-spacing-scale">
        <h3 className="text-sm font-medium text-white mb-4">Spacing scale (4px base)</h3>
        <div className="space-y-2">
          {SPACING_SCALE.map(({ token, px }) => (
            <div key={token} className="flex items-center gap-4">
              <span className="w-24 text-xs font-mono flex-shrink-0" style={{ color: 'var(--text-muted)' }}>{token}</span>
              <span className="w-10 text-xs font-mono flex-shrink-0" style={{ color: 'var(--text-muted)' }}>{px}px</span>
              <div
                className="h-4 rounded-sm flex-shrink-0"
                style={{ width: px, backgroundColor: 'var(--blue-500)', opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      </section>

      <section data-el="tokens-radius-scale">
        <h3 className="text-sm font-medium text-white mb-4">Border radius</h3>
        <div className="flex flex-wrap gap-6">
          {RADIUS_SCALE.map(({ token, value, label }) => (
            <div key={token} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 border border-white/20"
                style={{ borderRadius: value, backgroundColor: 'var(--bg-elevated)' }}
              />
              <span className="text-xs font-mono text-white">{label}</span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section data-el="tokens-shadow-scale">
        <h3 className="text-sm font-medium text-white mb-4">Elevation / Shadows</h3>
        <div className="flex flex-wrap gap-6">
          {SHADOW_SCALE.map(({ token, label }) => (
            <div key={token} className="flex flex-col items-center gap-2">
              <div
                className="w-20 h-12 rounded-lg"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  boxShadow: `var(${token})`,
                }}
              />
              <span className="text-xs font-mono text-white">{label}</span>
              <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{token}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
