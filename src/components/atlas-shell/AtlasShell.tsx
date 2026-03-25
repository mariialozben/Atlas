import { Outlet } from 'react-router'
import AtlasTopBar from './AtlasTopBar'
import AtlasLeftNav from './AtlasLeftNav'
import AtlasFooter from '@/components/atlas-footer/AtlasFooter'

export default function AtlasShell() {
  return (
    <div data-el="global-shell" style={{ backgroundColor: '#222526' }} className="min-h-[100dvh]">
      <AtlasTopBar />
      <AtlasLeftNav />
      <div
        data-el="global-content"
        className="pt-[56px] pl-[220px] min-h-[100dvh] flex flex-col"
      >
        <div className="flex-1">
          <Outlet />
        </div>
        <AtlasFooter />
      </div>
    </div>
  )
}
