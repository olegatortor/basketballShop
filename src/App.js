import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ReadsPage from './pages/ReadsPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:articleId" element={<ReadsPage />} />
      </Routes>
    </Router>
  );
}

export default App;