import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'

export default function AtlasHomeHero() {
  const navigate = useNavigate()

  return (
    <div
      data-el="home-hero"
      className="flex flex-col items-center gap-8 text-center"
    >
      <h1
        data-el="home-wordmark"
        style={{
          fontFamily: '"Montserrat", sans-serif',
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
        A minimalist design system built for speed and clarity
      </p>

      <Button
        data-el="home-cta"
        size="lg"
        onClick={() => navigate('/components')}
        className="bg-[var(--blue-500)] hover:bg-[var(--blue-500)] text-white transition-colors"
      >
        Explore the System
      </Button>
    </div>
  )
}
