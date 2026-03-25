import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import ProjectHomeTemplate from './templates/ProjectHomeTemplate'
import ListViewTemplate from './templates/ListViewTemplate'
import TableViewTemplate from './templates/TableViewTemplate'
import DashboardTemplate from './templates/DashboardTemplate'
import ModalDetailTemplate from './templates/ModalDetailTemplate'
import FullscreenPreview from './FullscreenPreview'

export default function LayoutsSection() {
  return (
    <div data-el="layouts-section">
      <Tabs defaultValue="project-home">
        <TabsList data-el="layouts-tabs" className="mb-6 flex-wrap h-auto gap-1">
          <TabsTrigger value="project-home">Project Home</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="modal">Modal / Detail</TabsTrigger>
        </TabsList>
        <TabsContent value="project-home">
          <FullscreenPreview label="Project Home"><ProjectHomeTemplate /></FullscreenPreview>
        </TabsContent>
        <TabsContent value="list">
          <FullscreenPreview label="List View"><ListViewTemplate /></FullscreenPreview>
        </TabsContent>
        <TabsContent value="table">
          <FullscreenPreview label="Table View"><TableViewTemplate /></FullscreenPreview>
        </TabsContent>
        <TabsContent value="dashboard">
          <FullscreenPreview label="Dashboard"><DashboardTemplate /></FullscreenPreview>
        </TabsContent>
        <TabsContent value="modal">
          <FullscreenPreview label="Modal / Detail"><ModalDetailTemplate /></FullscreenPreview>
        </TabsContent>
      </Tabs>
    </div>
  )
}
