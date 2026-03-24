import { SunIcon, MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTheme } from '@/store/index'

export default function ThemeToggle() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.theme)

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(next))
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <Button
      data-el="global-theme-toggle"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
      className="h-8 w-8 text-gray-400 hover:text-white"
    >
      {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </Button>
  )
}
