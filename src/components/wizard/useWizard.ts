import { useState } from 'react'

export function useWizard(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0)
  const goNext = () => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1))
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0))
  const canFinish = currentStep === totalSteps - 1
  return { currentStep, goNext, goBack, canFinish }
}
