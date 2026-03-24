import type { NavItem } from './types'

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', labelKey: 'nav.home', path: '/' },
  { key: 'foundations', labelKey: 'nav.foundations', path: '/foundations' },
  {
    key: 'components',
    labelKey: 'nav.components',
    path: '/components',
    children: [
      { key: 'button', labelKey: 'nav.comp.button', path: '/components/button' },
      { key: 'card', labelKey: 'nav.comp.card', path: '/components/card' },
      { key: 'chips', labelKey: 'nav.comp.chips', path: '/components/chips' },
      { key: 'data-table', labelKey: 'nav.comp.dataTable', path: '/components/data-table' },
      { key: 'form', labelKey: 'nav.comp.form', path: '/components/form' },
      { key: 'header', labelKey: 'nav.comp.header', path: '/components/header' },
      { key: 'footer', labelKey: 'nav.comp.footer', path: '/components/footer' },
      { key: 'navigation', labelKey: 'nav.comp.navigation', path: '/components/navigation' },
      { key: 'progress-bar', labelKey: 'nav.comp.progressBar', path: '/components/progress-bar' },
      { key: 'spinner', labelKey: 'nav.comp.spinner', path: '/components/spinner' },
      { key: 'rich-text', labelKey: 'nav.comp.richText', path: '/components/rich-text' },
      { key: 'segment-control', labelKey: 'nav.comp.segmentControl', path: '/components/segment-control' },
      { key: 'slider', labelKey: 'nav.comp.slider', path: '/components/slider' },
      { key: 'tooltip', labelKey: 'nav.comp.tooltip', path: '/components/tooltip' },
      { key: 'upload-area', labelKey: 'nav.comp.uploadArea', path: '/components/upload-area' },
      { key: 'user-profile', labelKey: 'nav.comp.userProfile', path: '/components/user-profile' },
      { key: 'wizard', labelKey: 'nav.comp.wizard', path: '/components/wizard' },
    ],
  },
  { key: 'layouts', labelKey: 'nav.layouts', path: '/layouts' },
  { key: 'tokens', labelKey: 'nav.tokens', path: '/tokens' },
]
