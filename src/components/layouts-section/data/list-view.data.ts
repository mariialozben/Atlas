export interface ListItem {
  id: number
  title: string
  meta: string
  badge: string
  badgeColor: string
}

export const LIST_ITEMS: ListItem[] = [
  { id: 1, title: 'Design tokens overview', meta: 'Updated 2 days ago · 12 tokens', badge: 'Active', badgeColor: '#1D9E75' },
  { id: 2, title: 'Button component spec', meta: 'Updated 5 days ago · 4 variants', badge: 'Draft', badgeColor: '#888780' },
  { id: 3, title: 'Typography system', meta: 'Updated 1 week ago · 8 sizes', badge: 'Active', badgeColor: '#1D9E75' },
  { id: 4, title: 'Colour palette', meta: 'Updated 2 weeks ago · 14 tokens', badge: 'Review', badgeColor: '#EF9F27' },
  { id: 5, title: 'Modal component', meta: 'Updated 3 weeks ago · 4 sizes', badge: 'Active', badgeColor: '#1D9E75' },
  { id: 6, title: 'Form inputs', meta: 'Updated 1 month ago · 5 types', badge: 'Draft', badgeColor: '#888780' },
]
