import { Button } from '@/components/ui/button'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

const VARIANTS = ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const
const SIZES = ['sm', 'default', 'lg'] as const

const VARIANT_LABELS: Record<string, string> = {
  default: 'Default',
  secondary: 'Secondary',
  outline: 'Outline',
  ghost: 'Ghost',
  destructive: 'Destructive',
  link: 'Link',
}

export default function ButtonPage() {
  return (
    <ComponentDemoPage name="Button" description="Trigger actions and events with consistent visual hierarchy.">
      <DemoSection title="Variants" description="All available button variants.">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant}>
            {VARIANT_LABELS[variant]}
          </Button>
        ))}
      </DemoSection>

      <DemoSection title="Sizes" description="Three sizes: sm, default, and lg.">
        {SIZES.map((size) => (
          <Button key={size} size={size}>
            Button {size}
          </Button>
        ))}
      </DemoSection>

      <DemoSection title="Disabled State" description="Buttons in disabled state across variants.">
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} disabled>
            {VARIANT_LABELS[variant]}
          </Button>
        ))}
      </DemoSection>
    </ComponentDemoPage>
  )
}
