import { Link } from 'react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'

const COMPONENT_LIST = [
  { key: 'button', name: 'Button', path: '/components/button', desc: 'Trigger actions and events.' },
  { key: 'card', name: 'Card', path: '/components/card', desc: 'Container for grouped content.' },
  { key: 'chips', name: 'Chips & Tags', path: '/components/chips', desc: 'Compact selection and filtering elements.' },
  { key: 'data-table', name: 'Data Table', path: '/components/data-table', desc: 'Sortable, structured data display.' },
  { key: 'form', name: 'Form', path: '/components/form', desc: 'Input fields and form controls.' },
  { key: 'header', name: 'Header', path: '/components/header', desc: 'Top navigation bar.' },
  { key: 'footer', name: 'Footer', path: '/components/footer', desc: 'Page footer with version info.' },
  { key: 'navigation', name: 'Navigation Panel', path: '/components/navigation', desc: 'Left sidebar navigation.' },
  { key: 'progress-bar', name: 'Progress Bar', path: '/components/progress-bar', desc: 'Visual completion indicator.' },
  { key: 'spinner', name: 'Spinner', path: '/components/spinner', desc: 'Loading state indicator.' },
  { key: 'rich-text', name: 'Rich Text Editor', path: '/components/rich-text', desc: 'Formatted text editing toolbar.' },
  { key: 'segment-control', name: 'Segment Control', path: '/components/segment-control', desc: 'Mutually exclusive option selector.' },
  { key: 'slider', name: 'Slider', path: '/components/slider', desc: 'Range value selector.' },
  { key: 'tooltip', name: 'Tooltip', path: '/components/tooltip', desc: 'Contextual hover information.' },
  { key: 'upload-area', name: 'Upload Area', path: '/components/upload-area', desc: 'Drag-and-drop file upload zone.' },
  { key: 'user-profile', name: 'User Profile', path: '/components/user-profile', desc: 'User avatar and profile popover.' },
  { key: 'wizard', name: 'Wizard', path: '/components/wizard', desc: 'Multi-step guided flow.' },
]

export default function ComponentsIndexPage() {
  return (
    <ComponentDemoPage name="Components" description="All Atlas design system components at a glance.">
      <div
        data-el="comp-index-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
      >
        {COMPONENT_LIST.map((comp) => (
          <Link key={comp.key} to={comp.path} className="block group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{comp.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{comp.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </ComponentDemoPage>
  )
}
