import React from 'react';
import CategoryItem from './CategoryItem'; // Імпорт компонентів категорій
import './Category.scss'; 
import { Link} from 'react-router-dom';

const categories = [
  {
    title: 'Баскетбольні аксесуари',
    imageUrl: '../../../img/categories/accessories.jpg',
    link: 'accessories'
  },
  {
    title: "Баскетбольне взуття",
    imageUrl: '../../../img/categories/shoes.jpg',
    link: 'shoes'
  },
  {
    title: 'Баскетбольний одяг',
    imageUrl: '../../../img/categories/clothes.jpg',
    link: 'clothes'
  },
  {
    title: 'Баскетбольні м’ячі',
    imageUrl: '../../../img/categories/ball.jpg',
    link: 'ball'
  }
];

function CategoryBlock({ active, currentPage}) {
    
  return (
    <>
      <div className="category">
        <div className="container">
          <div className="category-wrapper">
            {categories.map((category, index) => (
              <Link to={`/products/${category.link}/page/1`} key={index}>
                <CategoryItem
                  title={category.title} 
                  imageUrl={category.imageUrl}
                  active={active}
                  link={category.link}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryBlock;
