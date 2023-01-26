import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Aboutme from "./screens/Aboutme";
import ProjectsPage from "./screens/projectsPage";
import Contact from "./screens/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
