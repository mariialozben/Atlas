import { useState } from 'react'

export function useNavCollapse() {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed((prev) => !prev)
  return { collapsed, toggle }
}
