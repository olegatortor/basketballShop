import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import About from './components/about/About';
import CategoryBlock from './components/category/CategoryBlock';
import Benefits from './components/benefits/Benefits';

function App() {
  return (
    <Router>
      <Header />
      <Promo />
      <About />
      <CategoryBlock />
      <Benefits />
      <Routes>
        {/* <Route path="/" element={<Home />} /> Головна сторінка */}

        {/* <Route path="/products/accessories" component={AccessoriesPage} />
        <Route path="/products/balls" component={BallsPage} />
        <Route path="/products/clothing" component={ClothingPage} />
        <Route path="/products/footwear" component={FootwearPage} /> */}
        {/* Додайте інші маршрути, якщо потрібно */}
      </Routes>
    </Router>
  );
}

export default App;