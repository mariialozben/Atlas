import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import AtlasLogo from '@/components/atlas-header/AtlasLogo'
import { useLocale } from '@/hooks/use-locale'
import AtlasHomeNav from './AtlasHomeNav'

export default function AtlasHomeHero() {
  const { t } = useLocale()
  const navigate = useNavigate()

  return (
    <div
      data-el="home-hero"
      className="flex flex-col items-center gap-8 text-center"
    >
      <div data-el="home-logo">
        <AtlasLogo size="lg" showWordmark={true} />
      </div>

      <p
        data-el="home-tagline"
        className="max-w-[480px] text-lg leading-relaxed"
        style={{ color: 'var(--gray-400)', fontSize: '17px' }}
      >
        Minimalist design foundation that speaks two languages
        {' '}and adapts to any digital vision.
        {' '}<span className="block mt-1">{t('home.tagline')}</span>
      </p>

      <Button
        data-el="home-cta"
        size="lg"
        onClick={() => navigate('/components')}
        className="bg-blue-500 hover:bg-blue-700 text-white transition-colors"
      >
        {t('home.cta')}
      </Button>

      <AtlasHomeNav />
    </div>
  )
}
