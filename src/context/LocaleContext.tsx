import { createContext } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setLocale } from '@/store/index'
import en from '@/locales/en.json'
import uk from '@/locales/uk.json'

export type Locale = 'en' | 'uk'

const locales: Record<Locale, Record<string, unknown>> = { en, uk }

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()
  const locale = useAppSelector((state) => state.locale.locale) as Locale

  const t = (key: string) => getNestedValue(locales[locale] as Record<string, unknown>, key)

  const handleSetLocale = (newLocale: Locale) => {
    dispatch(setLocale(newLocale))
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export { LocaleContext }
export type { LocaleContextValue }
