import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import RichTextToolbar from '@/components/rich-text-editor/RichTextToolbar'

export default function RichTextEditorPage() {
  return (
    <ComponentDemoPage
      name="Rich Text Editor"
      description="A formatting toolbar for a rich text editor with toggle buttons grouped by function."
    >
      <DemoSection
        title="Editor Toolbar"
        description="Toggle formatting options — bold, italic, headings, lists, and links."
      >
        <div className="w-full max-w-2xl flex flex-col gap-2">
          <RichTextToolbar />
          <textarea
            data-el="rich-text-editor-area"
            rows={6}
            placeholder="Start typing here..."
            className="w-full rounded-lg p-4 text-sm resize-none focus:outline-none"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
