import ComponentsSidebar from './ComponentsSidebar'
import ComponentsContent from './ComponentsContent'
import { useComponentNav } from './useComponentNav'

export default function ComponentsSection() {
  const { activeSection, setActiveSection } = useComponentNav()

  return (
    <div data-el="components-section" className="flex gap-8">
      <ComponentsSidebar activeSection={activeSection} onSelect={setActiveSection} />
      <ComponentsContent activeSection={activeSection} />
    </div>
  )
}
