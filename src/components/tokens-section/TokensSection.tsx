import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import ColorPalette from './ColorPalette'
import TypographyScale from './TypographyScale'
import SpacingScale from './SpacingScale'

export default function TokensSection() {
  return (
    <div data-el="tokens-section">
      <Tabs defaultValue="colors">
        <TabsList data-el="tokens-tabs" className="mb-8">
          <TabsTrigger value="colors">Colours</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing & Radius</TabsTrigger>
        </TabsList>

        <TabsContent value="colors">
          <ColorPalette />
        </TabsContent>

        <TabsContent value="typography">
          <TypographyScale />
        </TabsContent>

        <TabsContent value="spacing">
          <SpacingScale />
        </TabsContent>
      </Tabs>
    </div>
  )
}
