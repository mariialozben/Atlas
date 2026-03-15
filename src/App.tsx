import { BrowserRouter, Routes, Route } from "react-router"
import { Toaster } from "@/components/ui/sonner"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
