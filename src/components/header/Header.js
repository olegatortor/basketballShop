import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss'; 


function Header() {
  
  const navLinks = [
    { path: '/', text: 'ГОЛОВНА' },
    { path: '/about', text: 'ПРО НАС' },
    { path: '/products', text: 'ТОВАРИ' },
    { path: '/contact', text: 'КОНТАКТИ' }
  ];

  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };



  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className='header-logo'>HOOPS HAVEN</Link>
      </div>
      <div className="header-right">
        
        <nav className="navigation">
          <ul className="navigation-wrap">
            {navLinks.map((link, index) => (
              <li >
                <Link 
                key={index} 
                to={link.path} 
                className={`navigation-item ${isActiveLink(link.path) ? 'active' : ''}`}
                >{link.text}
                </Link>
              </li>
            ))}
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