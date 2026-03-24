import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { SAMPLE_ROWS } from './data'
import { useTableSort } from './useTableSort'
import type { TableRow as TRow } from './types'

const STATUS_COLORS: Record<TRow['status'], string> = {
  active: 'var(--color-success, #22c55e)',
  inactive: 'var(--text-muted)',
  pending: '#f59e0b',
}

const COLUMNS: { col: keyof TRow; label: string }[] = [
  { col: 'name', label: 'Name' },
  { col: 'role', label: 'Role' },
  { col: 'status', label: 'Status' },
  { col: 'joined', label: 'Joined' },
]

function renderSortIcon(col: keyof TRow, sortCol: keyof TRow | null, sortDir: 'asc' | 'desc' | null) {
  if (sortCol !== col) return <ArrowUpDown size={12} className="ml-1 opacity-40" />
  return sortDir === 'asc' ? <ArrowUp size={12} className="ml-1" /> : <ArrowDown size={12} className="ml-1" />
}

export default function DataTableDemo() {
  const { sorted, sortCol, sortDir, toggleSort } = useTableSort(SAMPLE_ROWS)

  return (
    <div data-el="data-table-demo" className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      <Table>
        <TableHeader>
          <TableRow>
            {COLUMNS.map(({ col, label }) => (
              <TableHead
                key={col}
                onClick={() => toggleSort(col)}
                className="cursor-pointer select-none"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}
              >
                <span className="flex items-center text-xs font-semibold">
                  {label}{renderSortIcon(col, sortCol, sortDir)}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.id} style={{ borderBottom: '1px solid var(--border)' }}>
              <TableCell style={{ color: 'var(--text-primary)' }}>{row.name}</TableCell>
              <TableCell style={{ color: 'var(--text-muted)' }}>{row.role}</TableCell>
              <TableCell>
                <span className="text-xs font-medium" style={{ color: STATUS_COLORS[row.status] }}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell style={{ color: 'var(--text-muted)' }}>{row.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
