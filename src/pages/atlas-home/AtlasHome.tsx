import AtlasHomeHero from './AtlasHomeHero'
import AtlasHomeBackground from './AtlasHomeBackground'

export default function AtlasHome() {
  return (
    <div
      data-el="home"
      className="relative flex flex-col min-h-[calc(100dvh-56px)]"
    >
      <AtlasHomeBackground />
      <main className="flex-1 flex items-center justify-center px-6">
        <AtlasHomeHero />
      </main>
    </div>
  )
}
