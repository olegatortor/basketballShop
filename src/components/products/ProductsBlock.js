import React, { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard'; // Компонент для карточки товарунт для пагінації
import Pagination from './Pagination'; // Компоне // Дані про товари

import AccessoriesData from './AccessoriesData';
import ShoesData from './ShoesData';
import ClothesData from './ClothesData';
import BallData from './BallData';

import './Products.scss';



const ITEMS_PER_PAGE = 12; // Кількість товарів на одній сторінці

function ProductsBlock({ activeCategory }) {

  const [currentPage, setCurrentPage] = useState(1);
  let [productsArray, setProductsArray] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(activeCategory);
  


  useEffect(() => {
    setCurrentPage(1); 

    switch ( activeCategory.link) {
      case 'accessories':
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
  }, [activeCategory]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = productsArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section id="products-list"  className='products'>
      <div className="container">
        <h1 className='title'>{ activeCategory.title}</h1>
        <div className="products-cards">
          {currentItems.map((product, index) => (
            <ProductsCard key={index} product={product} className="products-item"/>
          ))}
        </div>
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={productsArray.length}
          currentPage={currentPage}
          paginate={(pageNumber) => {
            setCurrentPage(pageNumber);
            const element = document.getElementById("products-list");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
    </section>
  );
}

export default ProductsBlock;