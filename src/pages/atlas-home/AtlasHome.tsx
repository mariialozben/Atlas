import AtlasHeader from '@/components/atlas-header/AtlasHeader'
import AtlasHomeHero from './AtlasHomeHero'
import AtlasHomeBackground from './AtlasHomeBackground'
import { useLocale } from '@/hooks/use-locale'

export default function AtlasHome() {
  const { t } = useLocale()

  return (
    <div
      data-el="home"
      className="relative min-h-[100dvh] flex flex-col"
      style={{ backgroundColor: 'var(--gray-900)' }}
    >
      <AtlasHomeBackground />
      <AtlasHeader variant="transparent" />

      <main className="flex-1 flex items-center justify-center px-6 pt-14">
        <AtlasHomeHero />
      </main>

      <footer className="relative z-10 flex items-center justify-end px-6 pb-4">
        <span
          data-el="home-version"
          className="text-xs"
          style={{ color: 'var(--gray-400)' }}
        >
          {t('common.version')}
        </span>
      </footer>
    </div>
  )
}
