import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FEATURES } from '../data/project-home.data'

export default function ProjectHomeTemplate() {
  return (
    <div data-el="template-project-home" className="overflow-y-auto h-[500px] rounded-lg border border-white/10" style={{ backgroundColor: 'var(--gray-900)' }}>
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 h-12 border-b border-white/10" style={{ backgroundColor: 'var(--gray-900)' }}>
        <span className="text-sm font-medium text-white">MyProject</span>
        <nav className="flex gap-4">
          {['Home', 'About', 'Docs'].map((l) => <a key={l} href="#" className="text-xs" style={{ color: 'var(--gray-400)' }}>{l}</a>)}
        </nav>
      </header>
      {/* Hero */}
      <section className="px-8 py-12 text-center">
        <h1 className="text-white mb-3" style={{ fontSize: '36px', fontWeight: 600 }}>Build faster with Atlas</h1>
        <p className="text-sm mb-6 max-w-[420px] mx-auto" style={{ color: 'var(--gray-400)' }}>A minimalist design foundation that speaks two languages and adapts to any digital vision.</p>
        <Button size="lg">Get started →</Button>
      </section>
      {/* Features grid */}
      <section className="px-8 pb-12">
        <h2 className="text-center text-white text-lg font-medium mb-6">Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map(({ icon, title, desc }) => (
            <Card key={title}>
              <CardHeader className="pb-2">
                <span style={{ color: 'var(--blue-500)', fontSize: '1.5rem' }}>{icon}</span>
                <CardTitle className="text-sm">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs" style={{ color: 'var(--gray-400)' }}>{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
