import { Link } from 'react-router'
import { useLocale } from '@/hooks/use-locale'
import { SECTION_NAV_LINKS } from './data'

export default function AtlasHomeNav() {
  const { t } = useLocale()

  return (
    <nav data-el="home-section-nav" className="flex items-center gap-2 flex-wrap justify-center">
      {SECTION_NAV_LINKS.map(({ key, href }, i) => (
        <span key={href} className="flex items-center gap-2">
          {i > 0 && <span className="text-gray-700" aria-hidden="true">·</span>}
          <Link
            to={href}
            data-el={`home-section-nav-${key.split('.')[1]}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {t(key)}
          </Link>
        </span>
      ))}
    </nav>
  )
}
