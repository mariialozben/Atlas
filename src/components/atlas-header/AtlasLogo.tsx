import { cn } from '@/lib/utils'

interface AtlasLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

const sizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-5xl',
}

export default function AtlasLogo({ size = 'md', showWordmark = true, className }: AtlasLogoProps) {
  return (
    <div data-el="global-logo" className={cn('flex items-center', className)}>
      {showWordmark && (
        <span
          data-el="global-logo-wordmark"
          className={cn(sizes[size])}
          style={{ fontFamily: '"Lato", sans-serif', fontWeight: 700, color: 'var(--color-platinum)' }}
        >
          Atlas
        </span>
      )}
    </div>
  )
}
