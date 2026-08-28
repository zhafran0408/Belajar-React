import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DaftarSantri from "./pages/DaftarSantri";
import DetailSantri from "./pages/DetailSantri"; // Import file detail
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/santri" element={<DaftarSantri />} />
        
        <Route path="/santri/:id" element={<DetailSantri />} />
        
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
