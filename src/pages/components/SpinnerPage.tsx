import { Spinner } from '@/components/ui/spinner'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function SpinnerPage() {
  return (
    <ComponentDemoPage name="Spinner" description="Animated loading state indicator.">
      <DemoSection title="Sizes" description="Spinner rendered at small, medium, and large sizes via className.">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-8" />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>lg</span>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Colours" description="Spinner inherits text colour.">
        <Spinner className="size-6 text-primary" />
        <Spinner className="size-6 text-destructive" />
        <Spinner className="size-6 text-muted-foreground" />
      </DemoSection>
    </ComponentDemoPage>
  )
}
