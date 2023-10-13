import React from 'react';
import CategoryItem from './CategoryItem'; // Імпорт компонентів категорій
import './Category.scss'; 
import { Link } from 'react-router-dom';

function CategoryBlock() {
  const categories = [
    {
      title: 'Баскетбольні аксесуари',
      imageUrl: './img/categories/accessories.jpg',
      link: '/products/accessories'
    },
    {
      title: "Баскетбольне взуття",
      imageUrl: './img/categories/shoes.jpg',
      link: '/products/shoes'
    },
    {
      title: 'Баскетбольний одяг',
      imageUrl: './img/categories/clothes.jpg',
      link: '/products/clothes'
    },
    {
      title: 'Баскетбольні м’ячі',
      imageUrl: './img/categories/ball.jpg',
      link: '/products/ball'
    },
  ];

  return (
    <div className="category">
        <div className="container">
          <div className="category-wrapper">
            {categories.map((category, index) => (
              <Link to={category.link} key={index}>
                <CategoryItem {...category} />
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}

export default CategoryBlock;