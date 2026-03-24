export interface NavItem {
  key: string
  labelKey: string
  path: string
  children?: NavItem[]
}
