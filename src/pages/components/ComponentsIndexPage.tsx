import { Link } from 'react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import {
  IconHandClick,
  IconLayoutCards,
  IconTags,
  IconTable,
  IconForms,
  IconLayoutNavbar,
  IconLayoutNavbarCollapse,
  IconSitemap,
  IconProgressBolt,
  IconLoader,
  IconTextSize,
  IconLayoutColumns,
  IconSlideshow,
  IconInfoCircle,
  IconCloudUpload,
  IconUserCircle,
  IconStairs,
} from '@tabler/icons-react'
import type { FC } from 'react'
import type { IconProps } from '@tabler/icons-react'

const COMPONENT_LIST: { key: string; name: string; path: string; desc: string; icon: FC<IconProps> }[] = [
  { key: 'button', name: 'Button', path: '/components/button', desc: 'Trigger actions and events.', icon: IconHandClick },
  { key: 'card', name: 'Card', path: '/components/card', desc: 'Container for grouped content.', icon: IconLayoutCards },
  { key: 'chips', name: 'Chips & Tags', path: '/components/chips', desc: 'Compact selection and filtering elements.', icon: IconTags },
  { key: 'data-table', name: 'Data Table', path: '/components/data-table', desc: 'Sortable, structured data display.', icon: IconTable },
  { key: 'form', name: 'Form', path: '/components/form', desc: 'Input fields and form controls.', icon: IconForms },
  { key: 'header', name: 'Header', path: '/components/header', desc: 'Top navigation bar.', icon: IconLayoutNavbar },
  { key: 'footer', name: 'Footer', path: '/components/footer', desc: 'Page footer with version info.', icon: IconLayoutNavbarCollapse },
  { key: 'navigation', name: 'Navigation Panel', path: '/components/navigation', desc: 'Left sidebar navigation.', icon: IconSitemap },
  { key: 'progress-bar', name: 'Progress Bar', path: '/components/progress-bar', desc: 'Visual completion indicator.', icon: IconProgressBolt },
  { key: 'spinner', name: 'Spinner', path: '/components/spinner', desc: 'Loading state indicator.', icon: IconLoader },
  { key: 'rich-text', name: 'Rich Text Editor', path: '/components/rich-text', desc: 'Formatted text editing toolbar.', icon: IconTextSize },
  { key: 'segment-control', name: 'Segment Control', path: '/components/segment-control', desc: 'Mutually exclusive option selector.', icon: IconLayoutColumns },
  { key: 'slider', name: 'Slider', path: '/components/slider', desc: 'Range value selector.', icon: IconSlideshow },
  { key: 'tooltip', name: 'Tooltip', path: '/components/tooltip', desc: 'Contextual hover information.', icon: IconInfoCircle },
  { key: 'upload-area', name: 'Upload Area', path: '/components/upload-area', desc: 'Drag-and-drop file upload zone.', icon: IconCloudUpload },
  { key: 'user-profile', name: 'User Profile', path: '/components/user-profile', desc: 'User avatar and profile popover.', icon: IconUserCircle },
  { key: 'wizard', name: 'Wizard', path: '/components/wizard', desc: 'Multi-step guided flow.', icon: IconStairs },
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
                <div className="flex items-center gap-2">
                  <comp.icon size={18} stroke={1.5} style={{ color: '#007bff' }} />
                  <CardTitle className="text-sm">{comp.name}</CardTitle>
                </div>
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
