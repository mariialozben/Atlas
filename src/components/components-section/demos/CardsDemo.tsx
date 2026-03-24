import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function CardsDemo() {
  return (
    <div data-el="components-cards-demo" className="space-y-6">
      <h3 className="text-sm font-medium text-white">Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card data-el="components-card-default">
          <CardHeader>
            <CardTitle>Default card</CardTitle>
            <CardDescription>Standard card with header, content, and action.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm">Action</Button>
          </CardContent>
        </Card>

        <Card data-el="components-card-stat">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">◈</span>
              <Badge variant="secondary">+12%</Badge>
            </div>
            <p className="text-3xl font-semibold text-white">2,847</p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Total components</p>
          </CardContent>
        </Card>

        <Card data-el="components-card-compact" className="p-3">
          <CardContent className="p-0">
            <p className="text-xs font-medium text-white">Compact card</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Dense padding, reduced sizes.</p>
          </CardContent>
        </Card>

        <Card data-el="components-card-media">
          <div
            className="h-24 rounded-t-lg border-b border-white/10 flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <span style={{ color: 'var(--blue-300)', fontSize: '2rem' }}>◈</span>
          </div>
          <CardContent className="pt-4">
            <p className="text-sm font-medium text-white">Media card</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Image or banner at top.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
