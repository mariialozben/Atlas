import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
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
      <h1
        data-el="home-wordmark"
        style={{
          fontFamily: '"Lato", sans-serif',
          fontWeight: 700,
          fontSize: '72px',
          lineHeight: 1,
          color: 'var(--color-platinum)',
          letterSpacing: '-0.02em',
        }}
      >
        Atlas
      </h1>

      <p
        data-el="home-tagline"
        className="max-w-[520px] leading-relaxed"
        style={{ color: 'var(--text-muted)', fontSize: '17px' }}
      >
        {t('home.tagline_full')}
      </p>

      <Button
        data-el="home-cta"
        size="lg"
        onClick={() => navigate('/components')}
        className="bg-[var(--blue-500)] hover:bg-[var(--blue-500)] text-white transition-colors"
      >
        {t('home.cta')}
      </Button>

      <AtlasHomeNav />
    </div>
  )
}
