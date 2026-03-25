import { useLocale } from '@/hooks/use-locale'
import LayoutsSection from '@/components/layouts-section/LayoutsSection'

export default function Layouts() {
  const { t } = useLocale()

  return (
    <main data-el="layouts-main" className="px-4 md:px-6 max-w-[1200px] mx-auto">
      <div data-el="layouts-hero" className="py-12">
        <h1 data-el="layouts-title" className="text-white mb-2">
          {t('nav.layouts')}
        </h1>
        <p data-el="layouts-subtitle" className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
          Full-page layout templates for common application patterns.
        </p>
        <LayoutsSection />
      </div>
    </main>
  )
}
