import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import WaysWeWork from './pages/WaysWeWork';
import Research from './pages/Research';
import About from './pages/About';
import Contact from './pages/Contact';
import FoundersBio from './pages/FoundersBio';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="grain-overlay"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-we-work" element={<WaysWeWork />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/founders" element={<FoundersBio />} />
            {/* Additional routes will be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
