import AtlasHeader from '@/components/atlas-header/AtlasHeader'
import { useLocale } from '@/hooks/use-locale'
import ComponentsSection from '@/components/components-section/ComponentsSection'

export default function Components() {
  const { t } = useLocale()

  return (
    <div data-el="components" className="min-h-[100dvh]" style={{ backgroundColor: 'var(--gray-900)' }}>
      <AtlasHeader variant="solid" />
      <main data-el="components-main" className="pt-14 px-6 max-w-[1200px] mx-auto">
        <div data-el="components-hero" className="py-12">
          <h1 data-el="components-title" className="text-white mb-2">
            {t('nav.components')}
          </h1>
          <p data-el="components-subtitle" className="text-sm mb-10" style={{ color: 'var(--gray-400)' }}>
            Interactive showcase of all Atlas UI components.
          </p>
          <ComponentsSection />
        </div>
      </main>
    </div>
  )
}
