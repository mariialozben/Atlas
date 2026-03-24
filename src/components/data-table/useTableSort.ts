import { useState, useMemo } from 'react'
import type { TableRow, SortDirection } from './types'

export function useTableSort(rows: TableRow[]) {
  const [sortCol, setSortCol] = useState<keyof TableRow | null>(null)
  const [sortDir, setSortDir] = useState<SortDirection>(null)

  const toggleSort = (col: keyof TableRow) => {
    if (sortCol !== col) {
      setSortCol(col)
      setSortDir('asc')
    } else if (sortDir === 'asc') {
      setSortDir('desc')
    } else {
      setSortCol(null)
      setSortDir(null)
    }
  }

  const sorted = useMemo(() => {
    if (!sortCol || !sortDir) return rows
    return [...rows].sort((a, b) => {
      const av = a[sortCol] as string
      const bv = b[sortCol] as string
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    })
  }, [rows, sortCol, sortDir])

  return { sorted, sortCol, sortDir, toggleSort }
}
