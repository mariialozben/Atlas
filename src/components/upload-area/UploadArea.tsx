import { UploadCloud } from 'lucide-react'
import { useLocale } from '@/hooks/use-locale'
import { useUploadArea } from './useUploadArea'
import { cn } from '@/lib/utils'
import type { UploadAreaProps } from './types'

export default function UploadArea({ onFilesSelected, accept, multiple = true }: UploadAreaProps) {
  const { t } = useLocale()
  const { isDragging, files, handleDragOver, handleDragLeave, handleDrop, handleInputChange } = useUploadArea(onFilesSelected)

  return (
    <div
      data-el="upload-area"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        'flex flex-col items-center justify-center gap-3 p-10 rounded-xl border-2 border-dashed transition-colors cursor-pointer',
        isDragging
          ? 'border-[var(--blue-500)] bg-[rgba(46,125,214,0.08)]'
          : 'border-[var(--border)] hover:border-[var(--color-ash)]',
      )}
      style={{ backgroundColor: isDragging ? undefined : 'var(--bg-elevated)' }}
    >
      <UploadCloud size={32} style={{ color: 'var(--color-ash)' }} />
      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
        {t('upload.drag')}
      </p>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        {t('upload.or')}
      </p>
      <label
        className="text-xs px-4 py-1.5 rounded-md cursor-pointer transition-colors"
        style={{ backgroundColor: 'var(--blue-500)', color: '#fff' }}
      >
        {t('upload.browse')}
        <input type="file" className="hidden" accept={accept} multiple={multiple} onChange={handleInputChange} />
      </label>
      {files.length > 0 && (
        <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
          {files.length} file{files.length > 1 ? 's' : ''} selected
        </p>
      )}
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t('upload.hint')}</p>
    </div>
  )
}
