import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const { img, name, descr, price } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  }

  return (
    <div className="products-card">
      <img src={img} alt={name}  className='products-img'/>
      <div className="products-text-wrapper">
        <h3 className='products-name'>{name}</h3>
        <p className='products-descr'>{descr}</p>
        <p className='products-price'>{price} грн</p>
      </div>
      <button className='btn' onClick={handleAddToCart}>до кошика</button>
    </div>
  );
}

export default ProductCard;