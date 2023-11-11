import React from 'react';
import './Category.scss'; 

function CategoryItem({ title, imageUrl, active, link }) {
  const categoryClass = active === link ? 'category-item-active' : ''; // Додаємо клас, якщо категорія активна

  return (
    <div className={`category-item ${categoryClass}`}>
      <img src={imageUrl} alt={title} className='category-item-img'/>
      <p className='category-item-name'>{title}</p>
    </div>
  );
}

export default CategoryItem;