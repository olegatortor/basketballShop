import React, {useEffect} from 'react';
import ProductsCard from './ProductsCard'; // Компонент для карточки товарунт для пагінації
import Pagination from './Pagination'; // Компоне // Дані про товари


import './Products.scss';



const ITEMS_PER_PAGE = 12; // Кількість товарів на одній сторінці

function ProductsBlock({activeCategory, currentPage, productsArray, setCurrentPage}) {
  // console.log(productsArray);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = productsArray ? productsArray.slice(indexOfFirstItem, indexOfLastItem) : [];

  useEffect(() => {
    setCurrentPage(1); // Встановлення сторінки на 1 при зміні категорії
  }, [activeCategory, setCurrentPage]);

  return (
    <section id="products-list" className='products'>
      <div className="container">
        <h1 className='title'>{`${activeCategory}`}</h1>
        <div className="products-cards">
          {currentItems.map((product, index) => (
            <ProductsCard key={index} product={product} className="products-item" />
          ))}
        </div>
        <Pagination
          activeCategory={activeCategory}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={productsArray ? productsArray.length : 0}
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