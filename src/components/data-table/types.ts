export type SortDirection = 'asc' | 'desc' | null

export interface TableRow {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  role: string
  joined: string
}
