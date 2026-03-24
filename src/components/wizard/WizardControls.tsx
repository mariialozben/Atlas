import { Button } from '@/components/ui/button'
import { useLocale } from '@/hooks/use-locale'

interface WizardControlsProps {
  canGoBack: boolean
  canFinish: boolean
  onBack: () => void
  onNext: () => void
  onFinish: () => void
}

export default function WizardControls({ canGoBack, canFinish, onBack, onNext, onFinish }: WizardControlsProps) {
  const { t } = useLocale()
  return (
    <div data-el="wizard-controls" className="flex justify-between mt-6">
      <Button variant="outline" onClick={onBack} disabled={!canGoBack}>
        {t('wizard.back')}
      </Button>
      {canFinish ? (
        <Button onClick={onFinish}>{t('wizard.finish')}</Button>
      ) : (
        <Button onClick={onNext}>{t('wizard.next')}</Button>
      )}
    </div>
  )
}
