import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Navbar from "./Home Components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
