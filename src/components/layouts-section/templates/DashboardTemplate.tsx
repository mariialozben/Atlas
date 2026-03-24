import { Card, CardContent } from '@/components/ui/card'
import { STATS } from '../data/dashboard.data'

export default function DashboardTemplate() {
  return (
    <div data-el="template-dashboard" className="overflow-y-auto h-[500px] rounded-lg border border-white/10" style={{ backgroundColor: 'var(--gray-900)' }}>
      <header className="px-6 py-4 border-b border-white/10">
        <h2 className="text-sm font-medium text-white">Dashboard</h2>
      </header>
      <div className="p-6 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map(({ icon, value, label }) => (
            <Card key={label}>
              <CardContent className="pt-4 pb-4">
                <div className="text-xl mb-1" style={{ color: 'var(--blue-500)' }}>{icon}</div>
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="text-xs" style={{ color: 'var(--gray-400)' }}>{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Widget grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-4">
              <p className="text-sm font-medium text-white mb-3">Recent activity</p>
              {['Token updated', 'Component added', 'Locale synced'].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--blue-500)' }} />
                  <span className="text-xs" style={{ color: 'var(--gray-400)' }}>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <p className="text-sm font-medium text-white mb-3">Quick links</p>
              {['Tokens', 'Components', 'Foundations', 'Layouts'].map((link) => (
                <div key={link} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-xs text-white">{link}</span>
                  <span className="text-xs" style={{ color: 'var(--blue-500)' }}>→</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
