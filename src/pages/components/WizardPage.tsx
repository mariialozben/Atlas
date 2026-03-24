import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import Wizard from '@/components/wizard/Wizard'
import { DEMO_STEPS } from '@/components/wizard/data'

export default function WizardPage() {
  return (
    <ComponentDemoPage
      name="Wizard"
      description="A multi-step guided flow with a stepper, content area, and navigation controls."
    >
      <DemoSection
        title="Multi-Step Wizard"
        description="Use Back and Next to navigate steps. Finish appears on the last step."
      >
        <Wizard steps={DEMO_STEPS} />
      </DemoSection>
    </ComponentDemoPage>
  )
}
