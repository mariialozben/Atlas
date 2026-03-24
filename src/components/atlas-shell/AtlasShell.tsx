import { Outlet } from 'react-router'
import AtlasTopBar from './AtlasTopBar'
import AtlasLeftNav from './AtlasLeftNav'
import AtlasFooter from '@/components/atlas-footer/AtlasFooter'

export default function AtlasShell() {
  return (
    <div data-el="global-shell" style={{ backgroundColor: 'var(--bg-page)' }} className="min-h-[100dvh]">
      <AtlasTopBar />
      <AtlasLeftNav />
      <div
        data-el="global-content"
        className="pt-[56px] pl-[220px] min-h-[100dvh]"
      >
        <Outlet />
        <AtlasFooter />
      </div>
    </div>
  )
}
