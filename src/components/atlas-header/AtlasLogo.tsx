import { cn } from '@/lib/utils'

interface AtlasLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

const sizes = {
  sm: { mark: 20, text: 'text-lg' },
  md: { mark: 28, text: 'text-2xl' },
  lg: { mark: 44, text: 'text-5xl' },
}

export default function AtlasLogo({ size = 'md', showWordmark = true, className }: AtlasLogoProps) {
  const s = sizes[size]
  return (
    <div data-el="global-logo" className={cn('flex items-center gap-2', className)}>
      <svg
        data-el="global-logo-mark"
        width={s.mark}
        height={s.mark}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="13" height="13" rx="2" fill="var(--blue-500)" />
        <rect x="18" y="1" width="13" height="13" rx="2" fill="var(--blue-500)" opacity="0.6" />
        <rect x="1" y="18" width="13" height="13" rx="2" fill="var(--blue-500)" opacity="0.6" />
        <rect x="18" y="18" width="13" height="13" rx="2" fill="var(--blue-500)" />
      </svg>
      {showWordmark && (
        <span
          data-el="global-logo-wordmark"
          className={cn('font-semibold tracking-widest text-white', s.text)}
        >
          Atlas
        </span>
      )}
    </div>
  )
}
