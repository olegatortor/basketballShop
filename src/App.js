import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ReadsPage from './pages/ReadsPage'; 
import GoodsPage from './pages/GoodsPage'; 
import ContactPage from './pages/ContactPage'; 

// import AccessoriesPage from './pages/AccessoriesPage';
// import ShoesPage from './pages/ShoesPage';
// import BallPage from './pages/BallPage';
// import ClothesPage from './pages/ClothesPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:articleId" element={<ReadsPage />} />
        {/* <Route path="/products/accessories/page/1" element={<GoodsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/products/:category/page/:page" element={<GoodsPage />} />
        {/* <Route path="/products/:category/page/:page" element={<GoodsPage />} />
        <Route path="/products/:category/page/:page" element={<BallPage />} />
        <Route path="/products/:category/page/:page" element={<ClothesPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;