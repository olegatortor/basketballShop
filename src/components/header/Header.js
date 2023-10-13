import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className='header-logo'>HOOPS HAVEN</Link>
      </div>
      <div className="header-right">
        
        <nav className="navigation">
          <ul className="navigation-wrap">
            <li >
              <Link to="/" className='navigation-item navigation-active'>ГОЛОВНА</Link>
            </li>
            <li>
              <Link to="/about" className='navigation-item'>ПРО НАС</Link>
            </li>
            <li>
              <Link to="/products" className='navigation-item'>ТОВАРИ</Link>
            </li>
            <li>
              <Link to="/contact" className='navigation-item'>КОНТАКТИ</Link>
            </li>
          </ul>
        </nav>
        <div className="cart">
          <Link to="/cart">
            <img src="./icon/basket.svg" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;