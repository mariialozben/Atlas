import { BLUE_PALETTE, GRAY_PALETTE, SEMANTIC_COLORS } from './data'

function Swatch({ name, hex, purpose }: { name: string; hex: string; purpose: string }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="w-10 h-10 rounded-md flex-shrink-0 border border-white/10"
        style={{ backgroundColor: hex }}
      />
      <div className="min-w-0">
        <p className="text-xs font-mono text-white">{name}</p>
        <p className="text-xs font-mono" style={{ color: 'var(--gray-400)' }}>{hex}</p>
        <p className="text-xs" style={{ color: 'var(--gray-400)', fontSize: '11px' }}>{purpose}</p>
      </div>
    </div>
  )
}

export default function ColorPalette() {
  return (
    <div data-el="tokens-colors" className="space-y-8">
      <section data-el="tokens-colors-blue">
        <h3 className="text-sm font-medium text-white mb-3">Blue palette — primary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {BLUE_PALETTE.map((c) => <Swatch key={c.name} {...c} />)}
        </div>
      </section>
      <section data-el="tokens-colors-gray">
        <h3 className="text-sm font-medium text-white mb-3">Neutral palette</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {GRAY_PALETTE.map((c) => <Swatch key={c.name} {...c} />)}
        </div>
      </section>
      <section data-el="tokens-colors-semantic">
        <h3 className="text-sm font-medium text-white mb-3">Semantic colours</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {SEMANTIC_COLORS.map((c) => (
            <Swatch key={c.name} name={c.name} hex={c.hex} purpose={c.purpose} />
          ))}
        </div>
      </section>
    </div>
  )
}
