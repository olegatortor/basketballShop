import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ReadsPage from './pages/ReadsPage'; 
import GoodsPage from './pages/GoodsPage'; 
import ContactPage from './pages/ContactPage'; 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:articleId" element={<ReadsPage />} />
        <Route path="/products" element={<GoodsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;