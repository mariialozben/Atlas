import { Badge } from '@/components/ui/badge'

const VARIANTS = [
  { variant: 'default' as const, label: 'Default' },
  { variant: 'secondary' as const, label: 'Secondary' },
  { variant: 'destructive' as const, label: 'Danger' },
  { variant: 'outline' as const, label: 'Outline' },
]

export default function BadgesDemo() {
  return (
    <div data-el="components-badges-demo" className="space-y-6">
      <h3 className="text-sm font-medium text-white">Badges</h3>
      <div className="flex flex-wrap gap-3">
        {VARIANTS.map(({ variant, label }) => (
          <Badge key={variant} variant={variant}>{label}</Badge>
        ))}
        <Badge style={{ backgroundColor: 'var(--color-success)', color: 'white' }}>Success</Badge>
        <Badge style={{ backgroundColor: 'var(--color-warning)', color: 'white' }}>Warning</Badge>
        <Badge style={{ backgroundColor: 'var(--color-info)', color: 'white' }}>Info</Badge>
      </div>
    </div>
  )
}
