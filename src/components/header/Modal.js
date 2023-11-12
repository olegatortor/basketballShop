import React, {useEffect} from 'react';
import './Header.scss'; 
import './ModalItem'
import ModalItem from './ModalItem';

function Modal({ closeModal, selectedProducts, setSelectedProducts }) {
  // const [internalSelectedProducts, setInternalSelectedProducts] = useState([]);

  // useEffect(() => {
    // setInternalSelectedProducts(selectedProducts);
  // }, [selectedProducts]);

  // const handleDelete = (productToDelete) => {
  //   const updatedProducts = selectedProducts.filter((product) => product !== productToDelete);

  //   setSelectedProducts(updatedProducts);
  // };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal__overlay')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeModal]);

  console.log(selectedProducts)
    return (
        <div className="modal__overlay">
            <div className="modal">
                <div className="modal__header">
                    <div className="modal__img">
                        <img src="./icon/basket.svg" alt="" />
                    </div>
                    <h2 className="modal__title">Ваші покупки</h2>
                </div>

                <div className="modal__products-wrapper">
                  {selectedProducts && selectedProducts.length > 0 ? (
                    selectedProducts.map((product, index) => (
                      <ModalItem 
                        key={index} 
                        product={product} 
                        // onDelete={handleDelete}
                        setSelectedProducts={setSelectedProducts}/>
                    ))
                  ) : (
                    <div className="modal__products-empty">Немає товарів у кошику</div>
                  )}
                </div>

                <div className="modal__total-wrapper">
                    <div className="modal__total-title">Загальна сума:</div>
                    <span className="modal__total-price">
                    {selectedProducts && selectedProducts.length > 0
                      ? selectedProducts.reduce((total, product) => total + parseFloat(product.price) * (product.count || 1), 0).toFixed(2) + ' грн'
                      : '0 грн'}
                  </span>
                </div>

                <div className="modal__btn-wrapper">

                    <button className='modal__btn-buy'>Придбати</button>
                    <button className='modal__btn-close' onClick={closeModal}>ЗАкрити</button>
                </div>

            </div>
        </div>
    )
}

export default Modal;