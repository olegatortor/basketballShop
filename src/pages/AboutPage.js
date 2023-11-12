import React from 'react';
import Header from './../components/header/Header';
import Promo from './../components/promo/Promo';
import About from './../components/about/About';
import Benefits from './../components/benefits/Benefits';
import Blog from './../components/blog/Blog';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Footer from './../components/footer/Footer';
import ReadsBlock from './../components/reads/ReadsBlock';
import ScrollToTop from './scrollToTop';


function AboutPage({selectedProducts, setSelectedProducts}) {
  return (
    <>
    <ScrollToTop />
      <Header 
        selectedProducts={selectedProducts} 
        setSelectedProducts={setSelectedProducts}/>
      <Promo />
      <About />
      <ReadsBlock />
      <Benefits />
      <Blog />
      <NewsBlock />
      <Footer />
    </>
  );
}

export default AboutPage;