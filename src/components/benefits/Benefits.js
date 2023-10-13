import React from 'react';
 import './Benefits.scss'; 

function Benefits() {
  const benefitsData = [
    {
      icon: './img/benefits/icon1.svg', 
      text: "Широкий асортимент: У нас ви знайдете баскетбольні м'ячі різних розмірів та дизайнів, взуття для різних покриттів, тренувальний одяг, захисні аксесуари та багато іншого.",
    },
    {
      icon: './img/benefits/icon2.svg',
      text: 'Користувацька підтримка: Наша команда готова відповісти на всі ваші питання та надати професійні консультації щодо вибору товарів.',
    },
    {
      icon: './img/benefits/icon3.svg',
      text: 'Зручний онлайн-шопінг: Ми розробили зручний інтернет-магазин з швидкою доставкою і безпечними методами оплати.',
    },
    {
      icon: './img/benefits/icon4.svg',
      text: 'Акції та знижки: Ми постійно пропонуємо вигідні акції та знижки для наших клієнтів, щоб зробити ваші покупки ще вигіднішими.',
    },
  ];

  return (
    <div className="benefits">
        <div className="container">
            <h2 className='title'>Чому ми?</h2>
            <ul className="benefits-list">
                {benefitsData.map((benefit, index) => (
                <li key={index} className="benefits-item">
                    <img src={benefit.icon} alt={`Icon ${index}`} className="benefits-item-img" />
                    <p className="benefits-item-text">{benefit.text}</p>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Benefits;