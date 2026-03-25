import AtlasWordmark from './AtlasWordmark'

export default function AtlasTopBar() {
  return (
    <header
      data-el="global-header"
      className="fixed top-0 left-0 right-0 h-[56px] z-50 flex items-center px-6"
      style={{ backgroundColor: 'transparent' }}
    >
      <AtlasWordmark />
    </header>
  )
}
