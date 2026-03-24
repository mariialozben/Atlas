export interface ToolbarButton {
  id: string
  icon: React.ElementType
  label: string
  active?: boolean
}

export interface ToolbarGroup {
  id: string
  buttons: ToolbarButton[]
}
