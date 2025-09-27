import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;