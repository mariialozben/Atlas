import { useContext } from 'react'
import { LocaleContext } from '@/context/LocaleContext'
import type { Locale, LocaleContextValue } from '@/context/LocaleContext'

export type { Locale }

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
