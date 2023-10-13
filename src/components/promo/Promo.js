import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.scss'; 


function Promo() {
  return (
    <section className="promo">
        <div className="promo-text">
            <div className="promo-title">ПЕРЕГЛЯНЬ НАШ МАГАЗИН ПРЯМО ЗАЗАР</div>
            <div className="promo-descr">Якщо ви шукаєте якісні баскетбольні товари від провідних брендів, у нас є те, що вам потрібно!</div>
        </div>
    </section>
  );
}

export default Promo;