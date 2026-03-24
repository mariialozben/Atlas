import { BrowserRouter, Routes, Route } from "react-router"
import { Toaster } from "@/components/ui/sonner"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Foundations from "@/pages/Foundations"
import Components from "@/pages/Components"
import Layouts from "@/pages/Layouts"
import Tokens from "@/pages/Tokens"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/components" element={<Components />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
