import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function HeaderPage() {
  return (
    <ComponentDemoPage name="Header" description="Fixed top navigation bar providing global context and actions.">
      <DemoSection title="Structure">
        <div
          data-el="comp-header-preview"
          className="w-full rounded-md overflow-hidden border"
          style={{ borderColor: 'var(--border)' }}
        >
          <div
            className="h-[56px] flex items-center justify-between px-6"
            style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
          >
            <span className="text-base font-bold" style={{ color: 'var(--text-primary)', fontFamily: '"Lato", sans-serif' }}>
              Atlas
            </span>
            <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-muted)' }}>
              EN
            </span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Specifications" description="Technical details for the AtlasTopBar component.">
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          {[
            ['Height', '56px fixed'],
            ['Position', 'fixed top-0, full width, z-index 50'],
            ['Left slot', 'AtlasWordmark — "Atlas" in Lato Bold'],
            ['Right slot', 'LanguageSwitcher — EN / FR toggle'],
            ['Background', 'var(--bg-surface) with bottom border'],
            ['Component', 'src/components/atlas-shell/AtlasTopBar.tsx'],
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
