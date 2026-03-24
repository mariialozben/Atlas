import AtlasHeader from '@/components/atlas-header/AtlasHeader'
import { useLocale } from '@/hooks/use-locale'
import TokensSection from '@/components/tokens-section/TokensSection'

export default function Tokens() {
  const { t } = useLocale()

  return (
    <div data-el="tokens" className="min-h-[100dvh]" style={{ backgroundColor: 'var(--gray-900)' }}>
      <AtlasHeader variant="solid" />
      <main data-el="tokens-main" className="pt-14 px-6 max-w-[1200px] mx-auto">
        <div data-el="tokens-hero" className="py-12">
          <h1 data-el="tokens-title" className="text-white mb-2">
            {t('nav.tokens')}
          </h1>
          <p data-el="tokens-subtitle" className="text-sm mb-10" style={{ color: 'var(--gray-400)' }}>
            Design tokens — colours, typography, spacing, radius, and shadows.
          </p>
          <TokensSection />
        </div>
      </main>
    </div>
  )
}
