import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import FoundationsPrinciples from './FoundationsPrinciples'
import FoundationsColors from './FoundationsColors'
import FoundationsTypography from './FoundationsTypography'

export default function FoundationsSection() {
  return (
    <div data-el="foundations-section">
      <Tabs defaultValue="principles">
        <TabsList data-el="foundations-tabs" className="mb-8">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="colors">Colours</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>

        <TabsContent value="principles">
          <FoundationsPrinciples />
        </TabsContent>

        <TabsContent value="colors">
          <FoundationsColors />
        </TabsContent>

        <TabsContent value="typography">
          <FoundationsTypography />
        </TabsContent>
      </Tabs>
    </div>
  )
}
