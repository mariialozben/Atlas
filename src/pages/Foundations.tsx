import { useLocale } from '@/hooks/use-locale'
import FoundationsSection from '@/components/foundations-section/FoundationsSection'

export default function Foundations() {
  const { t } = useLocale()

  return (
    <main data-el="foundations-main" className="px-4 md:px-6 max-w-[1200px] mx-auto">
      <div data-el="foundations-hero" className="py-12">
        <h1 data-el="foundations-title" className="text-white mb-2">
          {t('nav.foundations')}
        </h1>
        <p data-el="foundations-subtitle" className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
          Design principles, colours, typography, and spacing.
        </p>
        <FoundationsSection />
      </div>
    </main>
  )
}
