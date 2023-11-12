
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from './../components/header/Header';
import CategoryBlock from './../components/category/CategoryBlock';
import NewsBlock from './../components/newsBlock/NewsBlock';
import Footer from './../components/footer/Footer';
import ProductsBlock from './../components/products/ProductsBlock';


import AccessoriesData from './../components/category/AccessoriesData';
import ShoesData from './../components/category/ShoesData';
import ClothesData from './../components/category/ClothesData';
import BallData from './../components/category/BallData';


function GoodsPage({selectedProducts, setSelectedProducts}) {
  const { category, page } = useParams();
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  let [productsArray, setProductsArray] = useState([]);

  // console.log(category);
  useEffect(() => {
    // console.log('Loading products for category:', name);
    switch (category) {
      case 'accessories':
        // console.log('Setting products for accessories:', AccessoriesData);

        setProductsArray(AccessoriesData);
        break;
      case 'shoes':
        setProductsArray(ShoesData);
        break;
      case 'clothes':
        setProductsArray(ClothesData);
        break;
      case 'ball':
        setProductsArray(BallData);
        break;
      default:
        setProductsArray([]);
        break;
    }
  }, [category]);

  // console.log(productsArray);
  
  return (
    <>
    {/* <ScrollToTop /> */}
      <Header 
        selectedProducts={selectedProducts} 
        setSelectedProducts={setSelectedProducts}/>
      <CategoryBlock
        currentPage={currentPage}
        active={category}/>
      <ProductsBlock 
        activeCategory={category}
        currentPage={currentPage}
        productsArray={productsArray}
        setCurrentPage={setCurrentPage}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <NewsBlock />
      <Footer />
    </>
  );
}

export default GoodsPage;