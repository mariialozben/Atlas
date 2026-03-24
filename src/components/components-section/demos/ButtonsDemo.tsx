import { Button } from '@/components/ui/button'

const VARIANTS = ['default', 'secondary', 'ghost', 'destructive'] as const
const SIZES = ['sm', 'default', 'lg'] as const
const VARIANT_LABELS: Record<string, string> = {
  default: 'Primary',
  secondary: 'Secondary',
  ghost: 'Ghost',
  destructive: 'Danger',
}

export default function ButtonsDemo() {
  return (
    <div data-el="components-buttons-demo" className="space-y-6">
      <h3 className="text-sm font-medium text-white">Buttons</h3>
      {VARIANTS.map((variant) => (
        <div key={variant}>
          <p className="text-xs mb-3" style={{ color: 'var(--gray-400)' }}>{VARIANT_LABELS[variant]}</p>
          <div className="flex items-center gap-3 flex-wrap">
            {SIZES.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {VARIANT_LABELS[variant]} {size === 'sm' ? '· sm' : size === 'lg' ? '· lg' : ''}
              </Button>
            ))}
            <Button variant={variant} disabled>Disabled</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
