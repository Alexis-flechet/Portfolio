import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Project } from "./pages/Project";
import { ThemeToggle } from "@/components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element = {<NotFound />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;