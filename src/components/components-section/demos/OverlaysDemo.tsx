import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function OverlaysDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div data-el="components-overlays-demo" className="space-y-6">
      <h3 className="text-sm font-medium text-white">Overlays</h3>

      <div className="space-y-2">
        <p className="text-xs" style={{ color: 'var(--gray-400)' }}>Tooltip (hover)</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" size="sm">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="space-y-2">
        <p className="text-xs" style={{ color: 'var(--gray-400)' }}>Dialog / Modal</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Atlas dialog</DialogTitle>
            </DialogHeader>
            <p className="text-sm" style={{ color: 'var(--gray-400)' }}>
              Modal content with fade + scale animation. Press Escape or click outside to dismiss.
            </p>
            <DialogFooter>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button size="sm" onClick={() => setOpen(false)}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
