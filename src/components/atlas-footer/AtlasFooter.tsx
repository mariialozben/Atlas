import { useLocale } from '@/hooks/use-locale'

export default function AtlasFooter() {
  const { t } = useLocale()
  return (
    <footer
      data-el="global-footer"
      className="px-8 py-4 flex items-center justify-between text-xs"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
      }}
    >
      <span>Atlas Design System · {t('common.version')}</span>
      <span>© {new Date().getFullYear()} Atlas</span>
    </footer>
  )
}
