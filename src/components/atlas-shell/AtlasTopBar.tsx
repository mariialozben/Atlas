import AtlasWordmark from './AtlasWordmark'
import LanguageSwitcher from '@/components/atlas-header/LanguageSwitcher'

export default function AtlasTopBar() {
  return (
    <header
      data-el="global-header"
      className="fixed top-0 left-0 right-0 h-[56px] z-50 flex items-center justify-between px-6"
      style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
    >
      <AtlasWordmark />
      <LanguageSwitcher />
    </header>
  )
}
