import { useState } from 'react'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import Chip from '@/components/chips/Chip'

const BASIC_CHIPS = ['Design', 'Development', 'Research', 'UX', 'Frontend']
const SELECTED_CHIPS = ['Active', 'Selected', 'Highlighted']

export default function ChipsPage() {
  const [removableChips, setRemovableChips] = useState(['Typography', 'Color', 'Spacing', 'Icons'])

  const removeChip = (label: string) => {
    setRemovableChips((prev) => prev.filter((c) => c !== label))
  }

  return (
    <ComponentDemoPage
      name="Chips & Tags"
      description="Small interactive labels used for filtering, categorization, and selection."
    >
      <DemoSection title="Basic Chips" description="Default chip appearance with multiple labels.">
        {BASIC_CHIPS.map((label) => (
          <Chip key={label} label={label} />
        ))}
      </DemoSection>

      <DemoSection title="Selected Chips" description="Chips in a selected/active state.">
        {SELECTED_CHIPS.map((label) => (
          <Chip key={label} label={label} selected />
        ))}
      </DemoSection>

      <DemoSection title="Removable Chips" description="Chips that can be dismissed by the user.">
        {removableChips.map((label) => (
          <Chip key={label} label={label} onRemove={() => removeChip(label)} />
        ))}
        {removableChips.length === 0 && (
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>All chips removed.</p>
        )}
      </DemoSection>
    </ComponentDemoPage>
  )
}
