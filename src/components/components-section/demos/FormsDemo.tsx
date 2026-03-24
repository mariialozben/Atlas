import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function FormsDemo() {
  return (
    <div data-el="components-forms-demo" className="space-y-6 max-w-sm">
      <h3 className="text-sm font-medium text-white">Form Inputs</h3>

      <div className="space-y-1">
        <label className="text-xs font-medium text-white">Text input</label>
        <Input placeholder="Enter text..." />
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Helper text below input</p>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-white">Error state</label>
        <Input placeholder="Invalid value" className="border-destructive" />
        <p className="text-xs text-destructive">This field is required</p>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-white">Select</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose option..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="opt1">Option one</SelectItem>
            <SelectItem value="opt2">Option two</SelectItem>
            <SelectItem value="opt3">Option three</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-white">Textarea</label>
        <Textarea placeholder="Enter longer text..." rows={3} />
      </div>

      <div className="flex gap-2">
        <Button size="sm">Submit</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </div>
    </div>
  )
}
