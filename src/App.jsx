import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Studio from "./Pages/Studio";

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/work"     element={<Work />} />
      <Route path="/about"    element={<About />} />
      <Route path="/studio"   element={<Studio />} />
      {/* backward-compat redirect */}
      <Route path="/projects" element={<Navigate to="/work" replace />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
