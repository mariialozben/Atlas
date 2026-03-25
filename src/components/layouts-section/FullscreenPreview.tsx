import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Maximize2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FullscreenPreviewProps {
  label: string
  children: React.ReactNode
}

export default function FullscreenPreview({ label, children }: FullscreenPreviewProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  const overlay = (
    <div
      data-el="layouts-fullscreen-overlay"
      className="fixed inset-0 flex flex-col"
      style={{ zIndex: 9999, backgroundColor: 'var(--bg-page)' }}
    >
      <style>{`
        [data-fullscreen="true"] [data-el^="template-"] {
          height: 100% !important;
          overflow: hidden !important;
          border-radius: 0 !important;
          border: none !important;
        }
      `}</style>
      <div
        className="flex items-center justify-between px-4 h-10 shrink-0 border-b"
        style={{ zIndex: 10000, position: 'relative', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => setOpen(false)}
          className="gap-1.5 text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          <X size={13} />
          Close
        </Button>
      </div>
      <div
        data-fullscreen="true"
        className="flex-1 overflow-hidden"
        style={{ height: 'calc(100vh - 40px)' }}
      >
        {children}
      </div>
    </div>
  )

  return (
    <>
      <div className="relative">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          data-el={`layouts-fullscreen-btn-${label}`}
          onClick={() => setOpen(true)}
          className="absolute top-2 right-2 z-20 gap-1.5 text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          <Maximize2 size={13} />
          Full screen
        </Button>
        {!open && children}
      </div>

      {open && createPortal(overlay, document.body)}
    </>
  )
}
