import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Locale = 'en' | 'uk'
type Theme = 'dark' | 'light'

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    locale: (localStorage.getItem('atlas-locale') ?? 'en') as Locale,
  },
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
      localStorage.setItem('atlas-locale', action.payload)
    },
  },
})

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: (localStorage.getItem('atlas-theme') ?? 'dark') as Theme,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      localStorage.setItem('atlas-theme', action.payload)
    },
  },
})

const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {},
})

export const { setLocale } = localeSlice.actions
export const { setTheme } = themeSlice.actions

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    locale: localeSlice.reducer,
    theme: themeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
