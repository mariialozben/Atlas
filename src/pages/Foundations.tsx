import AtlasHeader from '@/components/atlas-header/AtlasHeader'
import { useLocale } from '@/hooks/use-locale'
import FoundationsSection from '@/components/foundations-section/FoundationsSection'

export default function Foundations() {
  const { t } = useLocale()

  return (
    <div data-el="foundations" className="min-h-[100dvh]" style={{ backgroundColor: 'var(--gray-900)' }}>
      <AtlasHeader variant="solid" />
      <main data-el="foundations-main" className="pt-14 px-6 max-w-[1200px] mx-auto">
        <div data-el="foundations-hero" className="py-12">
          <h1 data-el="foundations-title" className="text-white mb-2">
            {t('nav.foundations')}
          </h1>
          <p data-el="foundations-subtitle" className="text-sm mb-10" style={{ color: 'var(--gray-400)' }}>
            Design principles, colours, typography, and spacing.
          </p>
          <FoundationsSection />
        </div>
      </main>
    </div>
  )
}
