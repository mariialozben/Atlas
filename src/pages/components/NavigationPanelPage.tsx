import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

const MOCK_NAV = [
  { label: 'Home', depth: 0 },
  { label: 'Foundations', depth: 0 },
  { label: 'Components', depth: 0, group: true },
  { label: 'Buttons', depth: 1 },
  { label: 'Cards', depth: 1 },
  { label: 'Forms', depth: 1 },
  { label: 'Layouts', depth: 0 },
  { label: 'Tokens', depth: 0 },
]

export default function NavigationPanelPage() {
  return (
    <ComponentDemoPage name="Navigation Panel" description="Fixed left sidebar navigation with collapsible groups and active-state highlighting.">
      <DemoSection title="Preview">
        <div
          data-el="comp-nav-preview"
          className="w-[220px] rounded-md overflow-hidden border"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)' }}
        >
          <div className="py-4">
            {MOCK_NAV.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm px-4 py-2"
                style={{
                  paddingLeft: item.depth === 1 ? '2rem' : undefined,
                  color: item.depth === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
                }}
              >
                <span>{item.label}</span>
                {item.group && <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>›</span>}
              </div>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Specifications" description="Technical details for the AtlasLeftNav component.">
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          {[
            ['Width', '220px fixed'],
            ['Position', 'fixed left-0, below top bar, z-index 40'],
            ['Top offset', '56px (height of AtlasTopBar)'],
            ['Groups', 'Collapsible via ChevronDown / ChevronRight'],
            ['Active state', 'Highlighted based on current route'],
            ['Background', 'var(--bg-elevated) with right border'],
            ['Component', 'src/components/atlas-shell/AtlasLeftNav.tsx'],
          ].map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="font-medium" style={{ color: 'var(--text-primary)' }}>{label}</dt>
              <dd style={{ color: 'var(--text-muted)' }}>{value}</dd>
            </div>
          ))}
        </dl>
      </DemoSection>
    </ComponentDemoPage>
  )
}
