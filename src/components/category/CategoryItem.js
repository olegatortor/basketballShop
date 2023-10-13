import React from 'react';
import './Category.scss'; 

function CategoryItem({ title, imageUrl, link }) {
  return (
    <div className="category-item">
      <img src={imageUrl} alt={title} className='category-item-img'/>
      <p className='category-item-name'>{title}</p>
    </div>
  );
}

export default CategoryItem;