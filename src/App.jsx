// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home'; 
import Skills from './components/Skills'; 
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
