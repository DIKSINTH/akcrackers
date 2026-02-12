import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import Estimate from "./pages/Estimate.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} />
      </Routes>

      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
