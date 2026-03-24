import ButtonsDemo from './demos/ButtonsDemo'
import BadgesDemo from './demos/BadgesDemo'
import CardsDemo from './demos/CardsDemo'
import FormsDemo from './demos/FormsDemo'
import OverlaysDemo from './demos/OverlaysDemo'

interface ComponentsContentProps {
  activeSection: string
}

const DEMOS: Record<string, React.ComponentType> = {
  buttons: ButtonsDemo,
  badges: BadgesDemo,
  cards: CardsDemo,
  forms: FormsDemo,
  overlays: OverlaysDemo,
}

export default function ComponentsContent({ activeSection }: ComponentsContentProps) {
  const Demo = DEMOS[activeSection]
  return (
    <div data-el="components-content" className="flex-1 min-w-0">
      {Demo ? <Demo /> : null}
    </div>
  )
}
