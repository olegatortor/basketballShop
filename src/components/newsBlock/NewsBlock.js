import React, { useState } from 'react';
import './NewsBlock.scss';

function NewsBlock() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Ваша пошта: ${email}`);
        // Ваш код для обробки підписки тут
    };

    return (
        <div className="news">
            <div className="container">
                <h2 className='title'>Новини</h2>
                <p className='news-descr'>Отримайте код знижки 10% електронною поштою, коли ви підпишетеся на пропозиції та оновлення нашого магазину.</p>
                <form onSubmit={handleSubmit} className='news-form'>
                    <input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={handleEmailChange}
                    className='news-input'
                    />
                    <button type="submit" className='btn'>Підписатися</button>
                </form>
            </div>
        </div>
    );
}

export default NewsBlock;