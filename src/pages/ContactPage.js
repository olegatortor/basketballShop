import React from 'react';
import Header from './../components/header/Header';
import Promo from './../components/promo/Promo';
import About from './../components/about/About';
import Benefits from './../components/benefits/Benefits';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Map from './../components/map/Map';
import Footer from './../components/footer/Footer';
import ScrollToTop from './scrollToTop';


function ContacPage({selectedProducts, setSelectedProducts}) {
  return (
    <>
    <ScrollToTop />
      <Header 
        selectedProducts={selectedProducts} 
        setSelectedProducts={setSelectedProducts}/>
      <Promo />
      <About />
      <Map />
      <Benefits />
      <NewsBlock />
      <Footer />
    </>
  );
}

export default ContacPage;