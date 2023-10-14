import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './../components/header/Header';
import Promo from './../components/promo/Promo';
import About from './../components/about/About';
import CategoryBlock from './../components/category/CategoryBlock';
import Benefits from './../components/benefits/Benefits';
import Blog from './../components/blog/Blog';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Footer from './../components/footer/Footer';

// import HomePage from './sites/Home';

function HomePage() {
  return (
    <>
      <Header />
      <Promo />
      <About />
      <CategoryBlock />
      <Benefits />
      <Blog />
      <NewsBlock />
      <Footer />
    </>
  );
}

export default HomePage;