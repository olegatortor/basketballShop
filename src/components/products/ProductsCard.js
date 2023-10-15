import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="products-card">
      <img src={product.img} alt={product.name}  className='products-img'/>
      <div className="products-text-wrapper">
        <h3 className='products-name'>{product.name}</h3>
        <p className='products-descr'>{product.descr}</p>
        <p className='products-price'>{product.price} грн</p>
      </div>
      <button className='btn'>до кошика</button>
    </div>
  );
}

export default ProductCard;