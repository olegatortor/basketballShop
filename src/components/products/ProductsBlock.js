import React, {useEffect, useState} from 'react';
import ProductsCard from './ProductsCard'; // Компонент для карточки товарунт для пагінації
import Pagination from './Pagination'; // Компоне // Дані про товари
import Modal from '../header/Modal';


import './Products.scss';



const ITEMS_PER_PAGE = 12; // Кількість товарів на одній сторінці

function ProductsBlock({activeCategory, currentPage, productsArray, setCurrentPage, selectedProducts, setSelectedProducts}) {
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = productsArray ? productsArray.slice(indexOfFirstItem, indexOfLastItem) : [];

  useEffect(() => {
    setCurrentPage(1); // Встановлення сторінки на 1 при зміні категорії
  }, [activeCategory, setCurrentPage]);

  // const handleAddToCart = (product) => {
  //   setSelectedProducts((prevSelected) => [...prevSelected, product]);
  // };
  const handleAddToCart = (product) => {
    // Перевірте, чи товар вже є у масиві selectedProducts за ідентифікатором
    const existingProduct = selectedProducts.find((selectedProduct) => selectedProduct.id === product.id);
  
    if (existingProduct) {
      // Якщо товар вже існує, оновіть лічильник
      setSelectedProducts((prevSelected) =>
        prevSelected.map((prevProduct) =>
          prevProduct.id === existingProduct.id ? { ...prevProduct, count: prevProduct.count + 1 } : prevProduct
        )
      );
    } else {
      // Якщо товару немає в масиві, додайте його з лічильником 1
      setSelectedProducts((prevSelected) => [...prevSelected, { ...product, count: 1 }]);
    }
  };
  // console.log(selectedProducts)
  return (
    <>
      <section id="products-list" className='products'>
        <div className="container">
          <h1 className='title'>{`${activeCategory}`}</h1>
          <div className="products-cards">
            {currentItems.map((product, index) => (
              <ProductsCard key={index} product={product} onAddToCart={handleAddToCart} className="products-item" />
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
      {isModalOpen && (
        <Modal
          selectedProducts={selectedProducts}
          closeModal={() => {
            setSelectedProducts([]);
            setIsModalOpen(false);
          }}
        />
        )}
    </>

  );
}

export default ProductsBlock;