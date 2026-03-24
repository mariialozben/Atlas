# Source Layout

> **⚠️ Living document.** This tree must reflect the actual project structure at all times. When you create, rename, move, or delete files or directories, update this tree accordingly. Add a brief `# comment` for new entries to describe their purpose.

```
src/
├── pages/
│   ├── Home.tsx           # Main route — re-exports AtlasHome
│   ├── Foundations.tsx    # /foundations — design principles, colours, typography (no AtlasHeader — shell provides layout)
│   ├── Components.tsx     # /components — interactive component showcase (no AtlasHeader — shell provides layout)
│   ├── Layouts.tsx        # /layouts — full-page layout template previews (no AtlasHeader — shell provides layout)
│   ├── Tokens.tsx         # /tokens — design token reference (no AtlasHeader — shell provides layout)
│   ├── NotFound.tsx       # 404 catch-all page
│   ├── components/        # Per-component demo pages (routes added in Phase 5b)
│   │   ├── ComponentsIndexPage.tsx   # /components — card grid overview of all 17 components
│   │   ├── ButtonPage.tsx            # /components/button
│   │   ├── CardPage.tsx              # /components/card
│   │   ├── FormPage.tsx              # /components/form
│   │   ├── TooltipPage.tsx           # /components/tooltip
│   │   ├── SliderPage.tsx            # /components/slider
│   │   ├── ProgressBarPage.tsx       # /components/progress-bar
│   │   ├── SpinnerPage.tsx           # /components/spinner
│   │   ├── SegmentControlPage.tsx    # /components/segment-control
│   │   ├── HeaderPage.tsx            # /components/header
│   │   ├── NavigationPanelPage.tsx   # /components/navigation
│   │   ├── ChipsPage.tsx             # /components/chips — Chip & Tags demo (Phase 5b)
│   │   ├── UploadPage.tsx            # /components/upload-area — Upload Area demo (Phase 5b)
│   │   ├── UserProfilePage.tsx       # /components/user-profile — User Profile Card demo (Phase 5b)
│   │   ├── WizardPage.tsx            # /components/wizard — Multi-step Wizard demo (Phase 5b)
│   │   ├── RichTextEditorPage.tsx    # /components/rich-text-editor — RichText Toolbar demo (Phase 5b)
│   │   ├── DataTablePage.tsx         # /components/data-table — Sortable Data Table demo (Phase 5b)
│   │   └── FooterPage.tsx            # /components/footer — Atlas Footer demo (Phase 5b)
│   └── atlas-home/        # Home page feature folder
│       ├── AtlasHome.tsx        # Home page — hero + background, wrapped by AtlasShell
│       ├── AtlasHomeHero.tsx    # Centered hero content
│       ├── AtlasHomeBackground.tsx  # Decorative background layer
│       ├── AtlasHomeNav.tsx     # (legacy) inline nav — superseded by AtlasLeftNav
│       └── data.ts              # Home page static data
├── components/
│   ├── atlas-shell/                   # v1.1 two-part shell (top bar + left nav)
│   │   ├── AtlasShell.tsx             # Layout route component — renders top bar, left nav, and <Outlet>
│   │   ├── AtlasTopBar.tsx            # 56px fixed top bar (wordmark + language switcher)
│   │   ├── AtlasLeftNav.tsx           # 220px fixed left navigation panel with collapsible groups
│   │   ├── AtlasNavItem.tsx           # Single nav link with active-state styling
│   │   ├── AtlasWordmark.tsx          # Lato Bold "Atlas" wordmark text component
│   │   ├── useNavCollapse.ts          # Hook for collapsed/expanded nav state
│   │   ├── data.ts                    # NAV_ITEMS — full navigation tree
│   │   └── types.ts                   # NavItem interface
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
│   ├── component-demo/                # Shared infrastructure for per-component demo pages
│   │   ├── types.ts                   # DemoSectionProps interface
│   │   ├── DemoSection.tsx            # Reusable section wrapper with title, description, and flex children
│   │   └── ComponentDemoPage.tsx      # Page shell with h1, description, and content area
│   ├── chips/                         # Chip & Tags component (Phase 5b)
│   │   ├── types.ts                   # ChipProps interface
│   │   └── Chip.tsx                   # Chip component — selectable, removable label pill
│   ├── upload-area/                   # Drag-and-drop file upload area (Phase 5b)
│   │   ├── types.ts                   # UploadAreaProps interface
│   │   ├── useUploadArea.ts           # Hook for drag/drop + file input state
│   │   └── UploadArea.tsx             # Upload zone with drag highlight and browse button
│   ├── user-profile/                  # User profile avatar + popover card (Phase 5b)
│   │   ├── types.ts                   # UserProfileProps interface
│   │   └── UserProfileCard.tsx        # Avatar trigger + popover with name, email, sign-out
│   ├── wizard/                        # Multi-step wizard component (Phase 5b)
│   │   ├── types.ts                   # WizardStep interface
│   │   ├── data.ts                    # DEMO_STEPS static data
│   │   ├── useWizard.ts               # Hook for step navigation state
│   │   ├── WizardStepper.tsx          # Step indicator with completed/active/future states
│   │   ├── WizardControls.tsx         # Back / Next / Finish button row
│   │   └── Wizard.tsx                 # Composed wizard with stepper, content, and controls
│   ├── rich-text-editor/              # Rich text formatting toolbar (Phase 5b)
│   │   ├── types.ts                   # ToolbarButton + ToolbarGroup interfaces
│   │   ├── data.ts                    # TOOLBAR_GROUPS — button groups config
│   │   └── RichTextToolbar.tsx        # Toggle-based formatting toolbar grouped by function
│   ├── data-table/                    # Sortable data table component (Phase 5b)
│   │   ├── types.ts                   # TableRow type + SortDirection type
│   │   ├── data.ts                    # SAMPLE_ROWS static data
│   │   ├── useTableSort.ts            # Hook for sort column/direction state
│   │   └── DataTableDemo.tsx          # Table with sortable column headers and status indicators
│   ├── atlas-footer/                  # Global application footer (Phase 5b)
│   │   └── AtlasFooter.tsx            # Footer bar with version and copyright
│   └── ui/          # shadcn/ui primitives (DO NOT manually edit — managed by npx shadcn)
├── docs/
│   ├── source-layout/  # Project file structure docs
│   │   └── index.md    # Full annotated file tree (this file)
│   ├── components/  # Usage reference docs for each shadcn/ui component (.md files)
│   └── element-maps/  # Element map files — one per page (see Element Maps section)
│       ├── index.md                  # Index of all element maps with routes
│       ├── global.md                 # Global shell element map (header, left nav, footer)
│       ├── home.md                   # Home page element map
│       ├── not-found.md              # 404 page element map
│       ├── foundations.md            # Foundations page element map
│       ├── layouts.md                # Layouts page element map
│       ├── components-index.md       # Components index page element map
│       ├── comp-button.md            # Button component page element map
│       ├── comp-card.md              # Card component page element map
│       ├── comp-chips.md             # Chips & Tags component page element map
│       ├── comp-data-table.md        # Data Table component page element map
│       ├── comp-form.md              # Form component page element map
│       ├── comp-header.md            # Header component page element map
│       ├── comp-footer.md            # Footer component page element map
│       ├── comp-navigation.md        # Navigation Panel component page element map
│       ├── comp-progress-bar.md      # Progress Bar component page element map
│       ├── comp-spinner.md           # Spinner component page element map
│       ├── comp-rich-text.md         # Rich Text Editor component page element map
│       ├── comp-segment-control.md   # Segment Control component page element map
│       ├── comp-slider.md            # Slider component page element map
│       ├── comp-tooltip.md           # Tooltip component page element map
│       ├── comp-upload-area.md       # Upload Area component page element map
│       ├── comp-user-profile.md      # User Profile component page element map
│       └── comp-wizard.md            # Wizard component page element map
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
