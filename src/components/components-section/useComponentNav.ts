import { useSearchParams } from 'react-router'
import { COMPONENT_GROUPS } from './data'

export function useComponentNav() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeSection = searchParams.get('section') ?? COMPONENT_GROUPS[0].id

  const setActiveSection = (id: string) => {
    setSearchParams({ section: id })
  }

  return { activeSection, setActiveSection }
}
