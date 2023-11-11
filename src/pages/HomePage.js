import React, { useState} from 'react';
import Header from './../components/header/Header';
import Promo from './../components/promo/Promo';
import About from './../components/about/About';
import CategoryBlock from './../components/category/CategoryBlock';
import Benefits from './../components/benefits/Benefits';
import Blog from './../components/blog/Blog';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Footer from './../components/footer/Footer';
import ScrollToTop from './scrollToTop';

// import HomePage from './sites/Home';

function HomePage() {    
  const [activeCategory, setActiveCategory] = useState({ title: '', link: '' });
  const [currentPage, setCurrentPage] = useState(1);
  let [productsArray, setProductsArray] = useState([]);

  return (
    <>
    <ScrollToTop />
      <Header />
      <Promo />
      <About />
      <CategoryBlock 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsArray={productsArray}
        setProductsArray={setProductsArray}
      />
      <Benefits />
      <Blog />
      <NewsBlock />
      <Footer />
    </>
  );
}

export default HomePage;