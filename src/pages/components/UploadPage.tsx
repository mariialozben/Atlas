import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import UploadArea from '@/components/upload-area/UploadArea'

export default function UploadPage() {
  return (
    <ComponentDemoPage
      name="Upload Area"
      description="A drag-and-drop file upload zone with browse support."
    >
      <DemoSection title="Upload Area" description="Drag files onto the zone or click Browse to select.">
        <div className="w-full max-w-lg">
          <UploadArea />
        </div>
      </DemoSection>
    </ComponentDemoPage>
  )
}
