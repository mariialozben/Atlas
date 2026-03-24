import { Slider } from '@/components/ui/slider'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function SliderPage() {
  return (
    <ComponentDemoPage name="Slider" description="Range value selector for numeric input.">
      <DemoSection title="Default Slider" description="Single thumb at 50.">
        <div className="w-64">
          <Slider defaultValue={[50]} min={0} max={100} />
        </div>
      </DemoSection>

      <DemoSection title="Range Slider" description="Two thumbs defining a range.">
        <div className="w-64">
          <Slider defaultValue={[25, 75]} min={0} max={100} />
        </div>
      </DemoSection>

      <DemoSection title="Disabled Slider" description="Non-interactive slider state.">
        <div className="w-64">
          <Slider defaultValue={[40]} min={0} max={100} disabled />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
