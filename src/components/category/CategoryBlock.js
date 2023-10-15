import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem'; // Імпорт компонентів категорій
import ProductsBLock from '../products/ProductsBlock';
import './Category.scss'; 
import { Link} from 'react-router-dom';


function CategoryBlock() {
  const categories = [
    {
      title: 'Баскетбольні аксесуари',
      imageUrl: './img/categories/accessories.jpg',
      link: 'accessories'
    },
    {
      title: "Баскетбольне взуття",
      imageUrl: './img/categories/shoes.jpg',
      link: 'shoes'
    },
    {
      title: 'Баскетбольний одяг',
      imageUrl: './img/categories/clothes.jpg',
      link: 'clothes'
    },
    {
      title: 'Баскетбольні м’ячі',
      imageUrl: './img/categories/ball.jpg',
      link: 'ball'
    },
  ];

  const [activeCategory, setCurrentCategory] = useState({ title: '', link: '' }); 

  useEffect(() => {
    // Встановлюємо активну категорію при завантаженні компоненту
    setCurrentCategory(categories[0]);
  }, []);

  return (
    <>
      <div className="category">
          <div className="container">
            <div className="category-wrapper">
              {categories.map((category, index) => (
                <Link
                  to={`#${category.link}`} 
                  key={index}
                  onClick={() => setCurrentCategory({link: category.link, title: category.title})}
                >
                  <CategoryItem
                    title={category.title}
                    imageUrl={category.imageUrl}
                    link={category.link}
                    onClick={() => setCurrentCategory({ link: category.link, title: category.title })}
                    active={activeCategory.link === category.link} // Перевіряємо, чи категорія активна
                  />
                </Link>
              ))}
            </div>
          </div>
      </div>
      
      <ProductsBLock activeCategory={activeCategory} />
    </>
  );
}

export default CategoryBlock;