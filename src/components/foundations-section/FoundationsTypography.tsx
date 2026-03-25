const TYPE_SPECIMENS = [
  { label: 'hero', size: '48px', weight: 600, use: 'Homepage wordmark' },
  { label: '3xl', size: '36px', weight: 600, use: 'Hero headings' },
  { label: '2xl', size: '28px', weight: 600, use: 'Page titles' },
  { label: 'xl', size: '22px', weight: 500, use: 'Section headings' },
  { label: 'lg', size: '18px', weight: 500, use: 'Sub-headings' },
  { label: 'base', size: '16px', weight: 400, use: 'Body copy' },
  { label: 'sm', size: '14px', weight: 400, use: 'Secondary body, hints' },
  { label: 'xs', size: '12px', weight: 400, use: 'Labels, captions, badges' },
]

const RULES = [
  'All text uses Montserrat — headings, body, UI elements, and labels',
  'Headings use Montserrat SemiBold 600',
  'Body copy uses Montserrat Regular 400',
  'UI elements (buttons, labels, nav) use Montserrat Medium 500',
  'Never use font sizes below 12px',
  'Sentence case always — no ALL CAPS in UI',
  'Two weights only in components: 400 regular, 500 medium (600 reserved for headings)',
]

export default function FoundationsTypography() {
  return (
    <div data-el="foundations-typography" className="space-y-8">
      <section>
        <h3 className="text-sm font-medium text-white mb-4">Type scale — Montserrat</h3>
        <div className="space-y-1">
          {TYPE_SPECIMENS.map(({ label, size, weight, use }) => (
            <div key={label} className="flex items-baseline gap-4 py-2 border-b border-white/5 last:border-0">
              <span className="w-16 text-xs font-mono flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                --text-{label}
              </span>
              <span
                className="flex-1 text-white truncate"
                style={{
                  fontSize: size,
                  fontWeight: weight,
                  lineHeight: 1.2,
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Montserrat
              </span>
              <span className="text-xs flex-shrink-0 hidden sm:block" style={{ color: 'var(--text-muted)' }}>
                {use}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-sm font-medium text-white mb-3">Typography rules</h3>
        <ul className="space-y-2">
          {RULES.map((rule, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--blue-500)' }}>—</span>
              {rule}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
