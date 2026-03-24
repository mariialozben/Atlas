import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setLocale } from '@/store/index'
import type { Locale } from '@/context/LocaleContext'

export default function LanguageSwitcher() {
  const dispatch = useAppDispatch()
  const locale = useAppSelector((state) => state.locale.locale) as Locale

  return (
    <ToggleGroup
      data-el="global-lang-switcher"
      type="single"
      variant="outline"
      spacing={0}
      value={locale}
      onValueChange={(v) => {
        if (v === 'en' || v === 'uk') dispatch(setLocale(v))
      }}
      className="h-8"
    >
      <ToggleGroupItem
        data-el="global-lang-en"
        value="en"
        className="h-8 px-3 text-xs font-medium"
      >
        EN
      </ToggleGroupItem>
      <ToggleGroupItem
        data-el="global-lang-uk"
        value="uk"
        className="h-8 px-3 text-xs font-medium"
      >
        UA
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
