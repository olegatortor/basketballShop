import React from 'react';
import Header from './../components/header/Header';
import Promo from './../components/promo/Promo';
import About from './../components/about/About';
import Benefits from './../components/benefits/Benefits';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Map from './../components/map/Map';
import Footer from './../components/footer/Footer';


function ContacPage() {
  return (
    <>
      <Header />
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