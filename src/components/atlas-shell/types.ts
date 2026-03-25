import type { FC } from 'react'
import type { IconProps } from '@tabler/icons-react'

export interface NavItem {
  key: string
  labelKey: string
  path: string
  icon?: FC<IconProps>
  children?: NavItem[]
}
