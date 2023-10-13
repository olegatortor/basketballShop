import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss'; 


function About() {
  return (
      <div className="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left-column">
                <h2 className='title'>Про нас</h2>
                <h3 className='about-title'>ВІД М’ЯЧІВ І ВЗУТТЯ ДО ОДЯГУ І АКСЕСУАРІВ</h3>
                <p className='about-descr'>
                Ласкаво просимо до нашого інтернет-магазину баскетбольних товарів – місця, де ваша баскетбольна мрія стає реальністю! Ми пишаємося тим, що пропонуємо широкий вибір якісних товарів, спеціально розроблених для всіх, хто обожнює цей захоплюючий вид спорту.
                </p>
            </div>
            <div className="about-right-column">
                <img
                src="./img/about.jpg" 
                alt="Про нас"
                className='about-photo'
                />
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;