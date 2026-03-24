import AtlasHeader from '@/components/atlas-header/AtlasHeader'
import { useLocale } from '@/hooks/use-locale'
import LayoutsSection from '@/components/layouts-section/LayoutsSection'

export default function Layouts() {
  const { t } = useLocale()

  return (
    <div data-el="layouts" className="min-h-[100dvh]" style={{ backgroundColor: 'var(--gray-900)' }}>
      <AtlasHeader variant="solid" />
      <main data-el="layouts-main" className="pt-14 px-6 max-w-[1200px] mx-auto">
        <div data-el="layouts-hero" className="py-12">
          <h1 data-el="layouts-title" className="text-white mb-2">
            {t('nav.layouts')}
          </h1>
          <p data-el="layouts-subtitle" className="text-sm mb-10" style={{ color: 'var(--gray-400)' }}>
            Full-page layout templates for common application patterns.
          </p>
          <LayoutsSection />
        </div>
      </main>
    </div>
  )
}
