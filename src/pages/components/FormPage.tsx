import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function FormPage() {
  return (
    <ComponentDemoPage name="Form" description="Input fields and form controls for data collection.">
      <DemoSection title="Text Input" description="Standard text input with label.">
        <div className="flex flex-col gap-1 w-64">
          <Label htmlFor="demo-input">Label</Label>
          <Input id="demo-input" placeholder="Enter text..." />
        </div>
      </DemoSection>

      <DemoSection title="Select" description="Dropdown selection control.">
        <div className="flex flex-col gap-1 w-64">
          <Label htmlFor="demo-select">Choose option</Label>
          <Select>
            <SelectTrigger id="demo-select">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="opt1">Option one</SelectItem>
              <SelectItem value="opt2">Option two</SelectItem>
              <SelectItem value="opt3">Option three</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoSection>

      <DemoSection title="Checkbox" description="Binary selection control.">
        <div className="flex items-center gap-2">
          <Checkbox id="demo-checkbox" />
          <Label htmlFor="demo-checkbox">Accept terms and conditions</Label>
        </div>
      </DemoSection>

      <DemoSection title="Switch" description="Toggle on/off control.">
        <div className="flex items-center gap-2">
          <Switch id="demo-switch" />
          <Label htmlFor="demo-switch">Enable notifications</Label>
        </div>
      </DemoSection>

      <DemoSection title="Textarea" description="Multi-line text input.">
        <div className="flex flex-col gap-1 w-64">
          <Label htmlFor="demo-textarea">Description</Label>
          <Textarea id="demo-textarea" placeholder="Enter a longer description..." rows={3} />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
