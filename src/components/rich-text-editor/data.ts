import { Bold, Italic, Underline, Strikethrough, Heading1, Heading2, List, ListOrdered, Link } from 'lucide-react'
import type { ToolbarGroup } from './types'

export const TOOLBAR_GROUPS: ToolbarGroup[] = [
  {
    id: 'text-format',
    buttons: [
      { id: 'bold', icon: Bold, label: 'Bold' },
      { id: 'italic', icon: Italic, label: 'Italic' },
      { id: 'underline', icon: Underline, label: 'Underline' },
      { id: 'strikethrough', icon: Strikethrough, label: 'Strikethrough' },
    ],
  },
  {
    id: 'headings',
    buttons: [
      { id: 'h1', icon: Heading1, label: 'Heading 1' },
      { id: 'h2', icon: Heading2, label: 'Heading 2' },
    ],
  },
  {
    id: 'lists',
    buttons: [
      { id: 'list', icon: List, label: 'Bullet List' },
      { id: 'ordered-list', icon: ListOrdered, label: 'Numbered List' },
    ],
  },
  {
    id: 'insert',
    buttons: [
      { id: 'link', icon: Link, label: 'Insert Link' },
    ],
  },
]
