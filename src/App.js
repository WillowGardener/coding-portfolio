import {HashRouter as Router, Routes, Route, Link} from "react-router-dom"

import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Extracurriculars from "./components/Extracurriculars"
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app-header">
          <Link to={"/"} className="nav-item">About Me </Link>
          <Link to={"experience"} className="nav-item">Experience </Link>
          <Link to={"portfolio"} className="nav-item">Portfolio </Link>
          <Link to={"extracurriculars"} className="nav-item">Extracurriculars</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="extracurriculars" element={<Extracurriculars />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
