import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TABLE_ROWS } from '../data/table-view.data'

export default function TableViewTemplate() {
  return (
    <div data-el="template-table-view" className="overflow-y-auto h-[500px] rounded-lg border border-white/10" style={{ backgroundColor: 'var(--gray-900)' }}>
      <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
        <Input placeholder="Search tokens..." className="max-w-[200px] h-8 text-xs" />
        <Button variant="secondary" size="sm">Filter</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Token</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TABLE_ROWS.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-mono text-xs text-white">{row.name}</TableCell>
              <TableCell className="text-xs" style={{ color: 'var(--gray-400)' }}>{row.type}</TableCell>
              <TableCell className="font-mono text-xs" style={{ color: 'var(--gray-400)' }}>{row.value}</TableCell>
              <TableCell>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#1D9E7520', color: '#1D9E75' }}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
