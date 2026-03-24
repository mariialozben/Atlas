import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function SegmentControlPage() {
  return (
    <ComponentDemoPage name="Segment Control" description="Mutually exclusive option selector using ToggleGroup.">
      <DemoSection title="Single Select" description="Only one option can be active at a time.">
        <ToggleGroup type="single" defaultValue="month" variant="outline">
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
          <ToggleGroupItem value="year">Year</ToggleGroupItem>
        </ToggleGroup>
      </DemoSection>

      <DemoSection title="Multiple Select" description="Multiple options can be active simultaneously.">
        <ToggleGroup type="multiple" defaultValue={['bold']} variant="outline">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
      </DemoSection>

      <DemoSection title="Sizes" description="Small and large variants.">
        <ToggleGroup type="single" defaultValue="a" variant="outline" size="sm">
          <ToggleGroupItem value="a">Small A</ToggleGroupItem>
          <ToggleGroupItem value="b">Small B</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" defaultValue="a" variant="outline" size="lg">
          <ToggleGroupItem value="a">Large A</ToggleGroupItem>
          <ToggleGroupItem value="b">Large B</ToggleGroupItem>
        </ToggleGroup>
      </DemoSection>
    </ComponentDemoPage>
  )
}
