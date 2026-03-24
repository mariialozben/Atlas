import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'

export default function ModalDetailTemplate() {
  return (
    <div data-el="template-modal-detail" className="h-[500px] rounded-lg border border-white/10 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="text-center space-y-4">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Modal / Detail view — triggered over any base layout</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detail view</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Scrollable content panel with sticky header and footer. Dismissible via Escape key, backdrop click, or close button.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Sizes: sm / md / lg / fullscreen', 'Focus trapped inside', 'Animation: fade + scale', 'i18n-aware actions'].map((f) => (
                  <div key={f} className="flex gap-1.5">
                    <span style={{ color: 'var(--blue-500)' }}>✓</span>
                    <span style={{ color: 'var(--text-muted)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
