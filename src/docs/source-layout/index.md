# Source Layout

> **⚠️ Living document.** This tree must reflect the actual project structure at all times. When you create, rename, move, or delete files or directories, update this tree accordingly. Add a brief `# comment` for new entries to describe their purpose.

```
src/
├── pages/
│   ├── Home.tsx           # Main route — centered starter page
│   ├── Foundations.tsx    # /foundations — design principles, colours, typography
│   ├── Layouts.tsx        # /layouts — full-page layout template previews
│   └── NotFound.tsx       # 404 catch-all page
├── components/
│   ├── foundations-section/           # Feature folder for Foundations page tabbed content
│   │   ├── FoundationsSection.tsx     # Tabs wrapper (Principles / Colours / Typography)
│   │   ├── FoundationsPrinciples.tsx  # Grid of 6 design principle cards
│   │   ├── FoundationsColors.tsx      # Colour palette swatches + semantic colours
│   │   └── FoundationsTypography.tsx  # Type scale specimens + typography rules
│   ├── layouts-section/               # Feature folder for Layouts page tabbed template previews
│   │   ├── LayoutsSection.tsx         # Tabs wrapper (5 layout templates)
│   │   ├── data/
│   │   │   ├── project-home.data.ts   # FEATURES array for Project Home template
│   │   │   ├── list-view.data.ts      # LIST_ITEMS + ListItem type for List View template
│   │   │   ├── table-view.data.ts     # TABLE_ROWS + TableRow type for Table View template
│   │   │   └── dashboard.data.ts      # STATS array for Dashboard template
│   │   └── templates/
│   │       ├── ProjectHomeTemplate.tsx  # Hero + features grid layout preview
│   │       ├── ListViewTemplate.tsx     # Searchable list with badge + pagination preview
│   │       ├── TableViewTemplate.tsx    # Token table with search + filter preview
│   │       ├── DashboardTemplate.tsx    # Stats cards + activity/links widgets preview
│   │       └── ModalDetailTemplate.tsx  # Modal trigger + Dialog content preview
│   └── ui/          # shadcn/ui primitives (DO NOT manually edit — managed by npx shadcn)
├── docs/
│   ├── source-layout/  # Project file structure docs
│   │   └── index.md    # Full annotated file tree (this file)
│   ├── components/  # Usage reference docs for each shadcn/ui component (.md files)
│   └── element-maps/  # Element map files — one per page (see Element Maps section)
│       ├── index.md          # Index of all element maps with routes
│       ├── home.md           # Home page element map
│       ├── not-found.md      # 404 page element map
│       └── foundations.md    # Foundations page element map
├── store/
│   ├── index.ts     # Redux store (configureStore), exports RootState & AppDispatch
│   └── hooks.ts     # Typed hooks: useAppDispatch(), useAppSelector()
├── assets/
│   └── fonts/
│       ├── InterVariable.woff2         # Inter variable font (weight 100–900, normal)
│       └── InterVariable-Italic.woff2  # Inter variable font (weight 100–900, italic)
├── styles/
│   ├── index.css    # Main stylesheet entry — imports Tailwind, shadcn, fonts, and theme
│   ├── theme.css    # CSS custom property theme tokens (light/dark), @theme inline config, base typography
│   └── fonts.css    # @font-face declarations for Inter + base font settings
├── hooks/
│   ├── use-debounce.ts  # useDebouncedValue<T>() — generic debounce hook
│   ├── use-mobile.ts    # useIsMobile() — detects <768px viewport
│   └── use-locale.ts    # useLocale() — returns { t, locale, setLocale } for i18n
├── lib/
│   └── utils.ts           # cn() utility (clsx + tailwind-merge)
├── main.tsx         # Entry point — wraps <App /> in <StrictMode> + Redux <Provider>
└── App.tsx          # Root application component — start building here
```
