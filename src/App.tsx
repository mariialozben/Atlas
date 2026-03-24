import { BrowserRouter, Routes, Route } from 'react-router'
import { Toaster } from '@/components/ui/sonner'
import AtlasShell from '@/components/atlas-shell/AtlasShell'
import Home from '@/pages/Home'
import Foundations from '@/pages/Foundations'
import Layouts from '@/pages/Layouts'
import Tokens from '@/pages/Tokens'
import NotFound from '@/pages/NotFound'
import ComponentsIndexPage from '@/pages/components/ComponentsIndexPage'
import ButtonPage from '@/pages/components/ButtonPage'
import CardPage from '@/pages/components/CardPage'
import ChipsPage from '@/pages/components/ChipsPage'
import DataTablePage from '@/pages/components/DataTablePage'
import FormPage from '@/pages/components/FormPage'
import HeaderPage from '@/pages/components/HeaderPage'
import FooterPage from '@/pages/components/FooterPage'
import NavigationPanelPage from '@/pages/components/NavigationPanelPage'
import ProgressBarPage from '@/pages/components/ProgressBarPage'
import SpinnerPage from '@/pages/components/SpinnerPage'
import RichTextEditorPage from '@/pages/components/RichTextEditorPage'
import SegmentControlPage from '@/pages/components/SegmentControlPage'
import SliderPage from '@/pages/components/SliderPage'
import TooltipPage from '@/pages/components/TooltipPage'
import UploadPage from '@/pages/components/UploadPage'
import UserProfilePage from '@/pages/components/UserProfilePage'
import WizardPage from '@/pages/components/WizardPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AtlasShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/components" element={<ComponentsIndexPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/chips" element={<ChipsPage />} />
          <Route path="/components/data-table" element={<DataTablePage />} />
          <Route path="/components/form" element={<FormPage />} />
          <Route path="/components/header" element={<HeaderPage />} />
          <Route path="/components/footer" element={<FooterPage />} />
          <Route path="/components/navigation" element={<NavigationPanelPage />} />
          <Route path="/components/progress-bar" element={<ProgressBarPage />} />
          <Route path="/components/spinner" element={<SpinnerPage />} />
          <Route path="/components/rich-text" element={<RichTextEditorPage />} />
          <Route path="/components/segment-control" element={<SegmentControlPage />} />
          <Route path="/components/slider" element={<SliderPage />} />
          <Route path="/components/tooltip" element={<TooltipPage />} />
          <Route path="/components/upload-area" element={<UploadPage />} />
          <Route path="/components/user-profile" element={<UserProfilePage />} />
          <Route path="/components/wizard" element={<WizardPage />} />
          <Route path="/layouts" element={<Layouts />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
