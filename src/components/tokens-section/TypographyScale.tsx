import { TYPE_SCALE } from './data'

function getFontFamily(weight: number): string {
  return weight >= 600 ? '"Lato", sans-serif' : '"Merriweather", serif'
}

function getFontLabel(weight: number): string {
  return weight >= 600 ? 'Lato' : 'Merriweather'
}

export default function TypographyScale() {
  return (
    <div data-el="tokens-typography" className="space-y-1">
      {TYPE_SCALE.map(({ token, size, weight, use }) => (
        <div
          key={token}
          className="flex items-baseline gap-4 py-3 border-b border-white/5 last:border-0"
        >
          <div className="w-36 flex-shrink-0">
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{token}</span>
            <br />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', fontSize: '11px' }}>
              {size} / {weight} / {getFontLabel(weight)}
            </span>
          </div>
          <span
            className="flex-1 text-white truncate"
            style={{ fontSize: size, fontWeight: weight, lineHeight: 1.2, fontFamily: getFontFamily(weight) }}
          >
            Atlas Design System
          </span>
          <span className="text-xs hidden lg:block flex-shrink-0 max-w-[200px] text-right" style={{ color: 'var(--text-muted)' }}>
            {use}
          </span>
        </div>
      ))}
    </div>
  )
}
