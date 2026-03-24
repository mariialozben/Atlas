import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import DataTableDemo from '@/components/data-table/DataTableDemo'

export default function DataTablePage() {
  return (
    <ComponentDemoPage
      name="Data Table"
      description="A sortable data table with clickable column headers and status indicators."
    >
      <DemoSection
        title="Sortable Table"
        description="Click any column header to sort ascending or descending."
      >
        <div className="w-full max-w-2xl">
          <DataTableDemo />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
