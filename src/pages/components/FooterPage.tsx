import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import AtlasFooter from '@/components/atlas-footer/AtlasFooter'

export default function FooterPage() {
  return (
    <ComponentDemoPage
      name="Footer"
      description="The global application footer displaying the design system version and copyright."
    >
      <DemoSection
        title="Atlas Footer"
        description="The footer as it appears at the bottom of every page."
      >
        <div
          data-el="footer-preview"
          className="w-full max-w-2xl rounded-lg overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          <AtlasFooter />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
