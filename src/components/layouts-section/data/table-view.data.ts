export interface TableRow {
  name: string
  type: string
  value: string
  status: string
}

export const TABLE_ROWS: TableRow[] = [
  { name: '--blue-500', type: 'Color', value: '#2E7DD6', status: 'Active' },
  { name: '--gray-900', type: 'Color', value: '#1A1A18', status: 'Active' },
  { name: '--text-hero', type: 'Typography', value: '48px / 600', status: 'Active' },
  { name: '--radius-md', type: 'Radius', value: '8px', status: 'Active' },
  { name: '--shadow-lg', type: 'Shadow', value: '0 8px 24px …', status: 'Active' },
  { name: '--space-6', type: 'Spacing', value: '24px', status: 'Active' },
]
