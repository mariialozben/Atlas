import WizardStepper from './WizardStepper'
import WizardControls from './WizardControls'
import { useWizard } from './useWizard'
import type { WizardStep } from './types'

interface WizardProps {
  steps: WizardStep[]
  onFinish?: () => void
}

export default function Wizard({ steps, onFinish }: WizardProps) {
  const { currentStep, goNext, goBack, canFinish } = useWizard(steps.length)
  const step = steps[currentStep]

  return (
    <div
      data-el="wizard"
      className="p-8 rounded-xl max-w-xl"
      style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
    >
      <WizardStepper steps={steps} currentStep={currentStep} />
      <div
        data-el="wizard-content"
        className="p-6 rounded-lg mb-2"
        style={{ backgroundColor: 'var(--bg-elevated)' }}
      >
        <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {step.title}
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {typeof step.content === 'string' ? step.content : step.content}
        </p>
      </div>
      <WizardControls
        canGoBack={currentStep > 0}
        canFinish={canFinish}
        onBack={goBack}
        onNext={goNext}
        onFinish={onFinish ?? (() => {})}
      />
    </div>
  )
}
