export const ATLAS_NAMED_PALETTE = [
  { name: '--color-jet-black', hex: '#1A1A1A', purpose: 'Page background (dark)' },
  { name: '--color-onyx',      hex: '#222526', purpose: 'Surface background' },
  { name: '--color-graphite',  hex: '#353A3E', purpose: 'Elevated surface, nav background' },
  { name: '--color-ash',       hex: '#BFBFBF', purpose: 'Highlights, hover states, dividers' },
  { name: '--color-platinum',  hex: '#E0E0E0', purpose: 'Primary text, logo, headings' },
]

export const ACCENT_PALETTE = [
  { name: '--blue-500', hex: '#2E7DD6', purpose: 'Primary actions, CTAs, links' },
  { name: '--blue-300', hex: '#60A8E8', purpose: 'Secondary, inactive states' },
  { name: '--blue-50',  hex: '#E8F4FE', purpose: 'Focus tint, hover background on light' },
]

export const SEMANTIC_COLORS = [
  { name: '--color-success', hex: '#1D9E75', label: 'Success', purpose: 'Confirmations, online, saved' },
  { name: '--color-warning', hex: '#EF9F27', label: 'Warning', purpose: 'Alerts, attention needed' },
  { name: '--color-danger', hex: '#E24B4A', label: 'Danger', purpose: 'Errors, destructive actions' },
  { name: '--color-info', hex: '#2E7DD6', label: 'Info', purpose: 'Informational messages' },
] as const

export const TYPE_SCALE = [
  { token: '--text-xs', size: '12px', weight: 400, lineH: 1.5, use: 'Labels, captions, badges' },
  { token: '--text-sm', size: '14px', weight: 400, lineH: 1.6, use: 'Secondary body, hints' },
  { token: '--text-base', size: '16px', weight: 400, lineH: 1.7, use: 'Body copy' },
  { token: '--text-lg', size: '18px', weight: 500, lineH: 1.5, use: 'Sub-headings' },
  { token: '--text-xl', size: '22px', weight: 500, lineH: 1.3, use: 'Section headings' },
  { token: '--text-2xl', size: '28px', weight: 600, lineH: 1.2, use: 'Page titles' },
  { token: '--text-3xl', size: '36px', weight: 600, lineH: 1.1, use: 'Hero headings' },
  { token: '--text-hero', size: '48px', weight: 600, lineH: 1.0, use: 'Atlas homepage wordmark' },
] as const

export const SPACING_SCALE = [
  { token: '--space-1', px: 4 },
  { token: '--space-2', px: 8 },
  { token: '--space-3', px: 12 },
  { token: '--space-4', px: 16 },
  { token: '--space-6', px: 24 },
  { token: '--space-8', px: 32 },
  { token: '--space-12', px: 48 },
  { token: '--space-16', px: 64 },
  { token: '--space-24', px: 96 },
] as const

export const RADIUS_SCALE = [
  { token: '--radius-sm', value: '4px', label: 'sm' },
  { token: '--radius-md', value: '8px', label: 'md' },
  { token: '--radius-lg', value: '12px', label: 'lg' },
  { token: '--radius-xl', value: '20px', label: 'xl' },
  { token: '--radius-full', value: '9999px', label: 'full' },
] as const

export const SHADOW_SCALE = [
  { token: '--shadow-sm', label: 'sm', css: '0 1px 3px rgba(0,0,0,0.4)' },
  { token: '--shadow-md', label: 'md', css: '0 4px 12px rgba(0,0,0,0.5)' },
  { token: '--shadow-lg', label: 'lg', css: '0 8px 24px rgba(0,0,0,0.6)' },
] as const
