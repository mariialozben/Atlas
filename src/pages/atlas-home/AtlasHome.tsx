import AtlasHomeHero from './AtlasHomeHero'
import AtlasHomeBackground from './AtlasHomeBackground'
import { useLocale } from '@/hooks/use-locale'

export default function AtlasHome() {
  const { t } = useLocale()

  return (
    <div
      data-el="home"
      className="relative flex flex-col min-h-[calc(100dvh-56px)]"
    >
      <AtlasHomeBackground />
      <main className="flex-1 flex items-center justify-center px-6">
        <AtlasHomeHero />
      </main>

      <footer className="relative z-10 flex items-center justify-end px-6 pb-4">
        <span
          data-el="home-version"
          className="text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          {t('common.version')}
        </span>
      </footer>
    </div>
  )
}
