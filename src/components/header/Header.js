import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss'; 
import Modal from './Modal'; 


function Header({ selectedProducts, setSelectedProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { path: '/', text: 'ГОЛОВНА' },
    { path: '/about', text: 'ПРО НАС' },
    { path: '/products/accessories/page/1', text: 'ТОВАРИ' },
    { path: '/contact', text: 'КОНТАКТИ' }
  ];

  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsModalOpen(false);
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
              <li  key={index} >
                <Link 
                to={link.path} 
                className={`navigation-item ${isActiveLink(link.path) ? 'active' : ''}`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cart">
          <button onClick={openModal} className='openModal'>
            <img src="../../../icon/basket.svg" alt="" />
          </button>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>}
    </header>
  );
}

export default Header;