import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WizardStepperProps {
  steps: { id: string; title: string }[]
  currentStep: number
}

export default function WizardStepper({ steps, currentStep }: WizardStepperProps) {
  return (
    <div data-el="wizard-stepper" className="flex items-center gap-0 mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors',
                index < currentStep
                  ? 'text-[var(--bg-page)]'
                  : index === currentStep
                  ? 'text-[var(--bg-page)]'
                  : 'text-[var(--text-muted)]',
              )}
              style={{
                backgroundColor:
                  index < currentStep
                    ? 'var(--color-ash)'
                    : index === currentStep
                    ? 'var(--blue-500)'
                    : 'var(--bg-elevated)',
                border: index > currentStep ? '1px solid var(--border)' : 'none',
              }}
            >
              {index < currentStep ? <Check size={14} /> : index + 1}
            </div>
            <span
              className="text-xs mt-1 whitespace-nowrap"
              style={{ color: index === currentStep ? 'var(--text-primary)' : 'var(--text-muted)' }}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className="h-px w-16 mx-2 mb-5"
              style={{ backgroundColor: index < currentStep ? 'var(--color-ash)' : 'var(--border)' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
