import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'

export default function CardPage() {
  return (
    <ComponentDemoPage name="Card" description="Container for grouped related content with optional header, body, and footer.">
      <DemoSection title="Basic Card" description="Simple card with header and content.">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Card body content goes here.</p>
          </CardContent>
        </Card>
      </DemoSection>

      <DemoSection title="Card with Footer" description="Card including an action footer.">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>Supporting description text.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Main content area.</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </DemoSection>

      <DemoSection title="Card with Description" description="Card with title and descriptive subtext.">
        <Card className="w-64">
          <CardHeader>
            <CardTitle>Descriptive Card</CardTitle>
            <CardDescription>This is a longer description that provides additional context about the card's purpose.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" variant="outline">Learn more</Button>
          </CardContent>
        </Card>
      </DemoSection>
    </ComponentDemoPage>
  )
}
