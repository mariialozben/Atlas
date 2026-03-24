interface AtlasWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function AtlasWordmark({ size = 'md' }: AtlasWordmarkProps) {
  const sizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
  return (
    <span
      data-el="global-wordmark"
      className={`${sizeClass} font-bold tracking-tight`}
      style={{ fontFamily: '"Lato", sans-serif', color: 'var(--color-platinum)' }}
    >
      Atlas
    </span>
  )
}
