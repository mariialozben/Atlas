import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import '@/styles/index.css'
import App from '@/App'
import { store } from '@/store'
import { LocaleProvider } from '@/context/LocaleContext'

// Apply initial theme class before first render to avoid flash
const savedTheme = localStorage.getItem('atlas-theme') ?? 'dark'
document.documentElement.classList.toggle('dark', savedTheme === 'dark')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </Provider>
  </StrictMode>,
)
