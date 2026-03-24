import { Progress } from '@/components/ui/progress'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

const LEVELS = [0, 25, 50, 75, 100] as const

export default function ProgressBarPage() {
  return (
    <ComponentDemoPage name="Progress Bar" description="Visual indicator of task completion or loading state.">
      <DemoSection title="Progress States" description="Progress bar at 0%, 25%, 50%, 75%, and 100%.">
        <div className="flex flex-col gap-4 w-64">
          {LEVELS.map((value) => (
            <div key={value} className="flex flex-col gap-1">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{value}%</span>
              <Progress value={value} />
            </div>
          ))}
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
