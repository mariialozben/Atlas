import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

const POSITIONS = ['top', 'bottom', 'left', 'right'] as const

export default function TooltipPage() {
  return (
    <ComponentDemoPage name="Tooltip" description="Contextual information displayed on hover.">
      <TooltipProvider>
        <DemoSection title="Positions" description="Tooltip in all four positions.">
          {POSITIONS.map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  {side.charAt(0).toUpperCase() + side.slice(1)}
                </Button>
              </TooltipTrigger>
              <TooltipContent side={side}>
                Tooltip on {side}
              </TooltipContent>
            </Tooltip>
          ))}
        </DemoSection>
      </TooltipProvider>
    </ComponentDemoPage>
  )
}
