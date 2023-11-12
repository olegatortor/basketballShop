import React, { useState } from 'react';
import './Header.scss'; 

function ModalItem({ product, setSelectedProducts}) {
    const { img, name, price } = product;
    const [count, setCount] = useState(product.count || 1);

    const handleDelete = () => {
        setSelectedProducts((prevProducts) => prevProducts.filter((prevProduct) => prevProduct !== product));
    };

    const handleCountChange = (event) => {
        const newCount = parseInt(event.target.value, 10);
        setCount(newCount);
        setSelectedProducts((prevProducts) =>
        prevProducts.map((prevProduct) =>
            prevProduct === product ? { ...prevProduct, count: newCount } : prevProduct
        )
        );
      };

    return (
        <div className="modal__products-item">
            <div className="modal__products-left">
                <img className="modal__products-img" src={img} alt="" />
                <div className="modal__products-name">{name}</div>
            </div>
            
            <div className="modal__products-right">
                <input 
                    type="number" 
                    className="modal__products-count" 
                    defaultValue={count}
                    onChange={handleCountChange}
                    min="1"
                    />
                <div className="modal__products-price">{(price * count).toFixed(2)} грн</div>
                <img className="modal__products-delete" src="../../../icon/delete.svg" alt="" onClick={handleDelete}/>
            </div>
        </div>       
    )
}

export default ModalItem;