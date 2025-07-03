// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home'; 
import Skills from './Skills'; 
import CircularGallery from './CircularGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
