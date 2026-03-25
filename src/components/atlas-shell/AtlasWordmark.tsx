import { Link } from 'react-router'

interface AtlasWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function AtlasWordmark({ size = 'md' }: AtlasWordmarkProps) {
  const sizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
  return (
    <Link
      to="/"
      data-el="global-wordmark"
      className={`${sizeClass} font-bold tracking-tight`}
      style={{ fontFamily: '"Montserrat", sans-serif', color: 'var(--color-platinum)', textDecoration: 'none' }}
    >
      Atlas
    </Link>
  )
}
