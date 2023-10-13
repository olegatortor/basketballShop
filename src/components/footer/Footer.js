import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/" className='header-logo'>HOOPS HAVEN</Link>
      </div>
      <div className="footer-column">
        <p className='footer-name'>Категорії товарів</p>
        <ul>
          <li><Link to="/products/accessories" className='footer-link'>Аксесуари</Link></li>
          <li><Link to="/products/footwear" className='footer-link'>Взуття</Link></li>
          <li><Link to="/products/clothing" className='footer-link'>Одяг</Link></li>
          <li><Link to="/products/balls" className='footer-link'>М'ячі</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <p className='footer-name'>Сторінки</p>
        <ul>
          <li><Link to="/" className='footer-link'>Головна</Link></li>
          <li><Link to="/about" className='footer-link'>Про нас</Link></li>
          <li><Link to="/products" className='footer-link'>Товари</Link></li>
          <li><Link to="/contacts" className='footer-link'>Контакти</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <p className='footer-name'>Контакти</p>
        <ul>
          <li><a href="https://www.instagram.com/" className='footer-link'>Інстаграм</a></li>
          <li><a href="https://www.telegram.org/" className='footer-link'>Телеграм</a></li>
          <li><a href="https://www.telegram.org/" className='footer-link'>Телеграм</a></li>
          <li><a href="mailto:info@example.com" className='footer-link'>Пошта</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;