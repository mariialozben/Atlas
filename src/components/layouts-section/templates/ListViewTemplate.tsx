import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LIST_ITEMS } from '../data/list-view.data'

export default function ListViewTemplate() {
  return (
    <div data-el="template-list-view" className="overflow-y-auto h-[500px] rounded-lg border border-white/10" style={{ backgroundColor: 'var(--gray-900)' }}>
      <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
        <Input placeholder="Search..." className="max-w-[200px] h-8 text-xs" />
        <Button variant="secondary" size="sm">Filter</Button>
        <span className="ml-auto text-xs" style={{ color: 'var(--gray-400)' }}>6 items</span>
      </div>
      <div className="divide-y divide-white/5">
        {LIST_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{item.title}</p>
              <p className="text-xs" style={{ color: 'var(--gray-400)' }}>{item.meta}</p>
            </div>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ backgroundColor: item.badgeColor + '20', color: item.badgeColor }}
            >
              {item.badge}
            </span>
            <Button variant="ghost" size="sm" className="flex-shrink-0">View</Button>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs" style={{ color: 'var(--gray-400)' }}>Page 1 of 1</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" disabled>← Prev</Button>
          <Button variant="ghost" size="sm" disabled>Next →</Button>
        </div>
      </div>
    </div>
  )
}
